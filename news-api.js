const GNEWS_API_KEY = '01bdb510dee44cfb919036260799c001'; // Твой ключ от NewsAPI не подойдёт, нужно зарегистрироваться на gnews.io

// Если GNews не сработает — используем RSS-ленту FIFA (всегда работает, без ключа)
const FALLBACK_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.fifa.com/en/news/rss.xml';

async function fetchWorldNews() {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    const cached = localStorage.getItem('worldNewsCache');
    if (cached) {
        displayNews(JSON.parse(cached));
    }

    const timeout = setTimeout(() => {
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
    }, 8000);

    try {
        // Пробуем FIFA RSS — работает всегда и везде
        const response = await fetch(FALLBACK_URL);
        const data = await response.json();
        clearTimeout(timeout);

        if (data.items && data.items.length > 0) {
            const articles = data.items.slice(0, 5).map(item => ({
                title: item.title,
                description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '',
                url: item.link,
                urlToImage: item.thumbnail || 'https://via.placeholder.com/300x150?text=FIFA',
                source: { name: 'FIFA.com' },
                publishedAt: item.pubDate
            }));
            localStorage.setItem('worldNewsCache', JSON.stringify(articles));
            displayNews(articles);
        }
    } catch (error) {
        clearTimeout(timeout);
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
    }
}

function displayNews(articles) {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    container.innerHTML = articles.map(article => `
        <div class="world-news-card" onclick="window.open('${article.url}', '_blank')">
            <img src="${article.urlToImage}" alt="News" onerror="this.src='https://via.placeholder.com/300x150?text=FIFA'">
            <div class="world-news-content">
                <span class="world-news-tag">Мировой футбол</span>
                <h4>${article.title}</h4>
                <p>${article.description || 'Read more...'}</p>
                <span class="world-news-source">${article.source.name} · ${new Date(article.publishedAt).toLocaleDateString('en-US')}</span>
            </div>
        </div>
    `).join('');
}

fetchWorldNews();
setInterval(fetchWorldNews, 60 * 60 * 1000);

const RSS_URL = 'https://api.allorigins.win/raw?url=https://www.uefa.com/news/rss.xml';

async function fetchWorldNews() {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    const cached = localStorage.getItem('worldNewsCache');
    if (cached) {
        displayNews(JSON.parse(cached));
    }

    const timeout = setTimeout(() => {
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны<br><small>Попробуйте позже</small></p>';
    }, 10000);

    try {
        const response = await fetch(RSS_URL);
        const text = await response.text();
        clearTimeout(timeout);

        // Парсим XML вручную
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        if (items.length > 0) {
            const articles = [];
            items.forEach((item, index) => {
                if (index >= 5) return;
                articles.push({
                    title: item.querySelector('title')?.textContent || 'Без названия',
                    description: item.querySelector('description')?.textContent?.substring(0, 150) + '...' || '',
                    url: item.querySelector('link')?.textContent || '#',
                    urlToImage: 'https://via.placeholder.com/300x150?text=UEFA',
                    source: { name: 'UEFA.com' },
                    publishedAt: item.querySelector('pubDate')?.textContent || new Date().toISOString()
                });
            });
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
            <img src="${article.urlToImage}" alt="News" onerror="this.src='https://via.placeholder.com/300x150?text=UEFA'">
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

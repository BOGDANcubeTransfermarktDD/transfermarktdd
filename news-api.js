async function fetchWorldNews() {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    const cached = localStorage.getItem('worldNewsCache');
    if (cached) {
        displayNews(JSON.parse(cached));
    }

    const timeout = setTimeout(() => {
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
    }, 12000);

    try {
        const response = await fetch('https://www.fifa.com/en/news/rss.xml');
        const text = await response.text();
        clearTimeout(timeout);

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        const articles = [];

        for (let i = 0; i < Math.min(items.length, 5); i++) {
            const item = items[i];
            const titleEn = item.querySelector('title')?.textContent || '';
            const descEn = item.querySelector('description')?.textContent?.replace(/<[^>]*>/g, '').substring(0, 200) || '';

            // Lingva translate
            const titleRu = await translateLingva(titleEn);
            const descRu = await translateLingva(descEn);

            articles.push({
                title: titleRu || titleEn,
                description: (descRu || descEn) + '...',
                url: item.querySelector('link')?.textContent || '#',
                urlToImage: 'https://via.placeholder.com/300x150?text=FIFA',
                source: { name: 'FIFA.com' },
                publishedAt: item.querySelector('pubDate')?.textContent || new Date().toISOString()
            });
        }

        if (articles.length > 0) {
            localStorage.setItem('worldNewsCache', JSON.stringify(articles));
            displayNews(articles);
        }
    } catch (error) {
        clearTimeout(timeout);
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
    }
}

async function translateLingva(text) {
    if (!text || text.length < 3) return '';
    try {
        const response = await fetch('https://lingva.ml/api/v1/en/ru/' + encodeURIComponent(text));
        const data = await response.json();
        return data.translation || '';
    } catch (e) {
        return '';
    }
}

function displayNews(articles) {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;
    container.innerHTML = articles.map(a => `
        <div class="world-news-card" onclick="window.open('${a.url}', '_blank')">
            <img src="${a.urlToImage}" alt="News" onerror="this.src='https://via.placeholder.com/300x150?text=FIFA'">
            <div class="world-news-content">
                <span class="world-news-tag">Мировой футбол</span>
                <h4>${a.title}</h4>
                <p>${a.description}</p>
                <span class="world-news-source">${a.source.name} · ${new Date(a.publishedAt).toLocaleDateString('ru-RU')}</span>
            </div>
        </div>
    `).join('');
}

fetchWorldNews();
setInterval(fetchWorldNews, 60 * 60 * 1000);
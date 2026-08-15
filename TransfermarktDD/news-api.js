async function fetchRussianNews() {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    const cached = localStorage.getItem('russianNewsCache');
    if (cached) displayNews(JSON.parse(cached));

    const timeout = setTimeout(() => {
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Загрузка...</p>';
    }, 5000);

    try {
        const response = await fetch('https://lenta.ru/rss/sport');
        const text = await response.text();
        clearTimeout(timeout);

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        const articles = [];

        items.forEach((item, i) => {
            if (i >= 6) return;
            articles.push({
                title: item.querySelector('title')?.textContent || '',
                description: '',
                url: item.querySelector('link')?.textContent || '#',
                urlToImage: 'https://via.placeholder.com/300x150?text=Lenta.ru',
                source: { name: 'Lenta.ru' },
                publishedAt: item.querySelector('pubDate')?.textContent || ''
            });
        });

        if (articles.length > 0) {
            localStorage.setItem('russianNewsCache', JSON.stringify(articles));
            displayNews(articles);
        }
    } catch (e) {
        clearTimeout(timeout);
        if (!cached) container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
    }
}

function displayNews(articles) {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;
    container.innerHTML = articles.map(a => `
        <div class="world-news-card" onclick="window.open('${a.url}', '_blank')">
            <img src="${a.urlToImage}" alt="" onerror="this.src='https://via.placeholder.com/300x150?text=Lenta'">
            <div class="world-news-content">
                <span class="world-news-tag">Новости спорта</span>
                <h4>${a.title}</h4>
                <span class="world-news-source">${a.source.name} · ${new Date(a.publishedAt).toLocaleDateString('ru-RU')}</span>
            </div>
        </div>
    `).join('');
}

fetchRussianNews();
setInterval(fetchRussianNews, 60 * 60 * 1000);
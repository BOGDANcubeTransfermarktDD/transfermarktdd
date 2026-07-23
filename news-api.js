// Мировые футбольные новости с автопереводом на русский
const NEWS_API_KEY = '01bdb510dee44cfb919036260799c001';
const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=football&domains=bbc.com,skysports.com,goal.com,90min.com&language=en&sortBy=publishedAt&pageSize=5&apiKey=' + NEWS_API_KEY;

async function fetchWorldNews() {
    try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
            translateAndDisplay(data.articles);
        }
    } catch (error) {
        console.log('Новости не загрузились:', error);
    }
}

async function translateText(text) {
    if (!text) return '';
    try {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=' + encodeURIComponent(text);
        const response = await fetch(url);
        const data = await response.json();
        return data[0][0][0];
    } catch (e) {
        return text;
    }
}

async function translateAndDisplay(articles) {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Загрузка новостей...</p>';

    const translatedArticles = await Promise.all(
        articles.map(async (article) => {
            const title = await translateText(article.title);
            const description = await translateText(article.description);
            return { ...article, titleRu: title, descriptionRu: description };
        })
    );

    container.innerHTML = translatedArticles.map(article => `
        <div class="world-news-card" onclick="window.open('${article.url}', '_blank')">
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x150?text=Футбол'}" alt="News" onerror="this.src='https://via.placeholder.com/300x150?text=Футбол'">
            <div class="world-news-content">
                <span class="world-news-tag">Мировой футбол</span>
                <h4>${article.titleRu}</h4>
                <p>${article.descriptionRu || 'Читать подробнее...'}</p>
                <span class="world-news-source">${article.source.name} · ${new Date(article.publishedAt).toLocaleDateString('ru-RU')}</span>
            </div>
        </div>
    `).join('');
}

// Загружаем при открытии
fetchWorldNews();

// Обновляем каждые 30 минут
setInterval(fetchWorldNews, 30 * 60 * 1000);
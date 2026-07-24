const NEWS_API_KEY = '01bdb510dee44cfb919036260799c001';
const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=football&domains=bbc.com,skysports.com,goal.com,90min.com&language=en&sortBy=publishedAt&pageSize=5&apiKey=' + NEWS_API_KEY;

async function fetchWorldNews() {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    // Показываем сохранённые новости сразу
    const cached = localStorage.getItem('worldNewsCache');
    if (cached) {
        displayNews(JSON.parse(cached));
    }

    // Ставим таймаут — если за 8 секунд не загрузилось, показываем заглушку
    const timeout = setTimeout(() => {
        if (!cached) {
            container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
        }
    }, 8000);

    try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();
        clearTimeout(timeout);

        if (data.articles && data.articles.length > 0) {
            // Сохраняем в кеш
            localStorage.setItem('worldNewsCache', JSON.stringify(data.articles));
            displayNews(data.articles);
        }
    } catch (error) {
        clearTimeout(timeout);
        if (!cached) {
            container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">Новости временно недоступны</p>';
        }
    }
}

function displayNews(articles) {
    const container = document.getElementById('worldNewsContainer');
    if (!container) return;

    container.innerHTML = articles.map(article => `
        <div class="world-news-card" onclick="window.open('${article.url}', '_blank')">
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x150?text=Football'}" alt="News" onerror="this.src='https://via.placeholder.com/300x150?text=Football'">
            <div class="world-news-content">
                <span class="world-news-tag">Мировой футбол</span>
                <h4>${article.title}</h4>
                <p>${article.description || 'Read more...'}</p>
                <span class="world-news-source">${article.source.name} · ${new Date(article.publishedAt).toLocaleDateString('en-US')}</span>
            </div>
        </div>
    `).join('');
}

// Загружаем при открытии
fetchWorldNews();

// Обновляем каждый час (вместо 30 минут — меньше нагрузка)
setInterval(fetchWorldNews, 60 * 60 * 1000);

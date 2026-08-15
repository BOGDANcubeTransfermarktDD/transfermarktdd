import requests
import os
from datetime import datetime

SAVE_FOLDER = "photos"
os.makedirs(SAVE_FOLDER, exist_ok=True)

print("🎨 Генератор изображений (Pollinations.ai)")
print("Опишите картинку на английском (или 'выход' для завершения)")
print("-" * 50)

while True:
    prompt = input("\n📝 Описание: ").strip()
    
    if prompt.lower() in ["выход", "exit", "quit"]:
        print("До встречи!")
        break
    
    if not prompt:
        print("Введите описание!")
        continue
    
    print("⏳ Генерирую...")
    
    try:
        url = "https://image.pollinations.ai/prompt/" + requests.utils.quote(prompt) + "?width=800&height=400&nofeed=true"
        response = requests.get(url)
        
        if response.status_code == 200:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filepath = os.path.join(SAVE_FOLDER, f"img_{timestamp}.jpg")
            with open(filepath, "wb") as f:
                f.write(response.content)
            print(f"✅ Сохранено: {filepath}")
        else:
            print(f"❌ Ошибка: {response.status_code}")
    except Exception as e:
        print(f"❌ Ошибка: {e}") 
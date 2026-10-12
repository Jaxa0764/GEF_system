# GEF_system

GEF_system — benzin, metan, propan va elektr stansiyalarini topish uchun Django
veb ilovasi. HTML, CSS, JavaScript va Python manba kodlari alohida fayllarga
ajratilgan. Ushbu papkani GitHub repository sifatida ishlatishingiz mumkin.

## Fayllar

| Fayl yoki papka | Vazifasi |
| --- | --- |
| `app.py` | Django backend: sozlamalar, modellar, API, autentifikatsiya, migratsiyalar, admin buyruqlari va testlar |
| `templates/index.html` | Saytning HTML tuzilishi |
| `static/css/style.css` | Dizayn, yorug‘/qorong‘i tema va telefon uchun moslashuv |
| `static/js/app.js` | Xarita, navigatsiya, interfeys, UZ/RU/EN matnlari va API bilan ishlash |
| `static/vendor/leaflet/` | Leaflet 1.9.4, xarita kutubxonasi va uning litsenziyasi |
| `requirements.txt` | Python kutubxonalari |
| `.env.example` | Maxfiy kalitlarsiz sozlamalar namunasi |
| `.gitignore` | GitHubga yuborilmaydigan ma’lumotlar ro‘yxati |

## Ishga tushirish

Python **3.10 yoki yangi versiya** kerak. ZIPni oching va terminalda `app.py`
joylashgan `GEF_system` papkasiga kiring.

Linux yoki macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
python3 app.py --demo --port 8011
```

Windows PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py --demo --port 8011
```

Brauzerda **http://127.0.0.1:8011** ni oching. Standart lokal port **8011**;
8010-portda ishlayotgan eski saytga ta’sir qilmaydi. Boshqa port kerak bo‘lsa,
`--port` bilan belgilang. Serverni `Ctrl+C` bilan to‘xtatasiz.

`--demo` belgilangan namuna stansiyalarini qo‘shadi. Ularning narxlari va
manzillari haqiqiy ma’lumot emas. Admin orqali tekshirilgan stansiyalarni
qo‘shishingiz mumkin. Namunalar kerak bo‘lmasa `python3 app.py --port 8011`
buyrug‘ini ishlating.

HTMLni alohida ochish o‘rniga yuqoridagi Python serverini ishlating: login,
stansiyalar, sevimlilar va boshqa ma’lumotlar backend orqali saqlanadi. Leaflet
ZIP ichiga qo‘shilgan; xarita plitkalari, manzil qidiruvi va yo‘l marshrutlari
uchun internet kerak.

## Administrator va ma’lumotlar

Server ishlab turganda yangi terminal ochib, shu virtual muhit bilan:

```bash
python3 app.py createadmin
```

Hisob nomi va parolni terminalda o‘zingiz tanlaysiz. Tiklash kodini saqlang.
Saytdagi **Profil** sahifasida shu hisobga kiring va **Administrator** tugmasini
bosing. Windowsda yuqoridagi buyruqlarda `python3` o‘rniga
`.\.venv\Scripts\python.exe` ishlatishingiz mumkin.

Database va development server kaliti birinchi ishga tushishda `GEF_data/`
ichida yaratiladi. Ilovani qayta ochganda ma’lumotlar saqlanadi. Bu papkani
zaxiralang, GitHubga push qilmang.

Oldingi `GEF_system.py` bilan ishlagan ma’lumotlaringizni davom ettirish uchun
eski `GEF_data` papkasidan foydalaning: uni yangi loyiha ichiga ko‘chiring yoki
`.env` faylida `GEF_DATA_DIR`ga eski papkaning to‘liq yo‘lini yozing. Eski serverni
to‘xtatib, avval papka nusxasini saqlang. Database tuzilishi va migratsiya nomi
oldingi versiya bilan bir xil qolgan.

## Sozlamalar

Majburiy sozlama kiritmasdan development rejimida ishlatish mumkin. O‘zgartirish
kerak bo‘lsa `.env.example`dan `.env` nusxasini yarating:

```bash
cp .env.example .env
```

PowerShellda: `Copy-Item .env.example .env`.

`app.py` `.env`ni avtomatik o‘qiydi. Terminalda belgilangan qiymatlar ustunlik
qiladi. API kalitlarini `app.js` yoki HTMLga yozmang.

| Sozlama | Vazifasi |
| --- | --- |
| `GEF_DATA_DIR` | Database va development kaliti saqlanadigan papka; to‘liq yo‘l tavsiya etiladi |
| `GEF_PRODUCTION` | `1` bo‘lsa HTTPS va production cookie himoyalari yoqiladi |
| `GEF_SECRET_KEY` | Production uchun kamida 40 belgili maxfiy kalit |
| `GEF_ALLOWED_HOSTS` | Vergul bilan ajratilgan ruxsat etilgan domenlar |
| `GEF_CSRF_ORIGINS` | Masalan `https://gef.example.com` |
| `DATABASE_URL` | Bo‘sh bo‘lsa SQLite; PostgreSQL manzili ham qo‘llanadi |
| `GEF_CACHE_URL` | Bir necha worker uchun umumiy Redis keshi |
| `GEF_AI_URL`, `GEF_AI_KEY`, `GEF_AI_MODEL` | Ixtiyoriy AI provayderi; kalitsiz mahalliy yordamchi ishlaydi |
| `GEF_ROUTER_URL`, `GEF_GEOCODER_URL`, `GEF_CONTACT` | Yo‘l, manzil qidiruvi va provayder bilan aloqa sozlamalari |
| `GEF_TILE_LIGHT`, `GEF_TILE_DARK`, `GEF_TILE_ATTRIBUTION` | Xarita plitkalari va provayder attribution matni |

## GitHubga push qilish

GitHubda yangi **bo‘sh repository** yarating. Quyidagi buyruqlarni `app.py`
joylashgan papkada bajaring. `USERNAME` va `REPOSITORY`ni o‘zingizning hisob va
repository nomingizga almashtiring:

```bash
git init
git add .
git status
git commit -m "Add GEF_system source files"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

`.gitignore` `.env`, `GEF_data/`, virtual muhit va database fayllarini chetlab
o‘tadi. `git status`da HTML, CSS, JS, Python va kerakli sozlama fayllari ko‘rinadi.
ZIPning o‘zini emas, **ochilgan loyiha ichidagi fayllarni** push qiling.

GitHub kodni saqlaydi. [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
statik HTML/CSS/JSni joylashtiradi; Django backendini ishga tushirish uchun
Pythonni qo‘llaydigan hosting yoki server kerak.

## Testlar

```bash
python3 app.py test
```

Testlar mustaqil xotira databaseida bajariladi. Ro‘yxatdan o‘tish, profil,
parol tiklash, admin, stansiyalar, sevimlilar, tashrif/rating, AI javoblari,
avatar va ajratilgan frontend fayllari tekshiriladi.

## Production server

Linux serverda Gunicorn o‘rnating:

```bash
python3 -m pip install gunicorn
```

`.env`da `GEF_PRODUCTION=1`, `GEF_SECRET_KEY`, haqiqiy `GEF_ALLOWED_HOSTS` va
`GEF_CSRF_ORIGINS`ni belgilang. PostgreSQL kerak bo‘lsa
`python3 -m pip install "psycopg[binary]>=3.2,<4"`, Redis kerak bo‘lsa
`python3 -m pip install redis` bilan tegishli kutubxonani qo‘shing.

```bash
python3 app.py migrate
gunicorn app:application --bind 127.0.0.1:8010 --workers 1
```

Oldiga HTTPS reverse proxy qo‘ying. O‘zingiz boshqaradigan proxy HTTPS
so‘rovlarni uzatsa `GEF_TRUST_PROXY=1` ni yoqing. Bir necha worker uchun umumiy
Redis keshi va productionga mos database sozlang. Backend statik fayllarni ham
beradi; reverse proxy orqali `/static/`ni `static/` papkasidan berish ham mumkin.

GPS HTTPS yoki localhostda ishlaydi. Yo‘l bo‘ylab kuzatish brauzer ochiq va
faol bo‘lganda ishlaydi; brauzer fon rejimida kuzatishni to‘xtatishi mumkin.
Qo‘lda boshlanish nuqtasi faqat marshrut uchun; tashrif va rating GPS bilan
tasdiqlanadi. Testdagi GPS simulyatsiyasi haqiqiy qurilmada haydash sinovi emas.
Ommaviy xarita/routing/geocoding provayderlari siyosati va trafik cheklovlariga
hostingga chiqishda rioya qiling.

## Uchinchi tomon kodi

`static/vendor/leaflet/` ichida Leaflet **1.9.4** saqlangan. Uning BSD-2-Clause
litsenziyasi shu papkadagi `LICENSE` faylida. Kutubxona litsenziyasini saqlang.

"use strict";

const WORDS = {
  home: ["Asosiy sahifa", "Главная", "Home"],
  favorites: ["Sevimlilar", "Избранное", "Favorites"],
  ai: ["AI yordamchi", "AI помощник", "AI Assistant"],
  profile: ["Profil", "Профиль", "Profile"],
  brand_sub: [
    "Har yo‘lda yoningizda",
    "Рядом на каждом маршруте",
    "With you on every route",
  ],
  side_title: ["Yo‘lga tayyormisiz?", "Готовы в путь?", "Ready for the road?"],
  side_note: [
    "Stansiyani tanlang. Yo‘nalishni oching. Yo‘lda davom eting.",
    "Выберите станцию. Постройте маршрут. Продолжайте путь.",
    "Choose a station. Get directions. Keep moving.",
  ],
  top_greeting: [
    "O‘zbekiston bo‘ylab qulay yo‘l",
    "Удобные маршруты по Узбекистану",
    "Easy journeys across Uzbekistan",
  ],
  home_eyebrow: ["Xarita va stansiyalar", "Карта и станции", "Map & stations"],
  home_title: [
    "Har safar, to‘g‘ri manzil.",
    "Верный адрес для каждой поездки.",
    "The right stop, every time.",
  ],
  home_subtitle: [
    "Yaqin stansiyani toping, narxlarni solishtiring va yo‘lga chiqing.",
    "Найдите станцию, сравните цены и отправляйтесь в путь.",
    "Find a station, compare prices and get on your way.",
  ],
  fuel: ["Fuel · Benzin", "Fuel · Бензин", "Fuel · Petrol"],
  metan: ["Metan", "Метан", "Methane"],
  propan: ["Propan", "Пропан", "Propane"],
  elektr: ["Elektr", "Электро", "Electric"],
  category: ["Xizmat turi", "Тип услуги", "Service category"],
  loading: ["Yuklanmoqda…", "Загрузка…", "Loading…"],
  retry: ["Qayta urinish", "Повторить", "Retry"],
  init_failed: [
    "Ilova yuklanmadi. Server va internetni tekshiring.",
    "Не удалось загрузить приложение. Проверьте сервер и интернет.",
    "The app could not load. Check the server and internet.",
  ],
  footer: [
    "Yo‘ldagi yordamchingiz",
    "Ваш помощник в пути",
    "Your companion on the road",
  ],
  demo_notice: [
    "Namuna rejimi: DEMO stansiyalar, narxlar va manzillar haqiqiy ma’lumot emas.",
    "Демо: станции DEMO, цены и адреса не являются реальными данными.",
    "Demo: DEMO stations, prices and addresses are fictional.",
  ],
  demo: ["NAMUNA", "ДЕМО", "DEMO"],
  location_not_set: [
    "Joylashuv aniqlanmagan",
    "Местоположение не определено",
    "Location not set",
  ],
  location_hint: [
    "Aniq joylashuv uchun GPS tugmasini bosing.",
    "Нажмите GPS для определения местоположения.",
    "Press GPS to detect your location.",
  ],
  locating: [
    "Joylashuv aniqlanmoqda…",
    "Определяем местоположение…",
    "Finding your location…",
  ],
  locate: [
    "Joylashuvni aniqlash",
    "Определить местоположение",
    "Find my location",
  ],
  gps_position: ["GPS joylashuvi", "Позиция GPS", "GPS position"],
  accuracy: ["Aniqlik", "Точность", "Accuracy"],
  meters: ["m", "м", "m"],
  manual_point: ["Nuqta tanlash", "Выбрать точку", "Choose point"],
  manual_origin: [
    "Qo‘lda tanlangan boshlanish nuqtasi",
    "Выбранная вручную точка старта",
    "Manually selected starting point",
  ],
  manual_hint: [
    "Xaritaga bosing yoki pinni suring.",
    "Нажмите на карту или перетащите маркер.",
    "Click the map or drag the pin.",
  ],
  gps_denied: [
    "Joylashuv ruxsati rad etildi. Brauzer sozlamalarida ruxsat bering yoki nuqta tanlang.",
    "Доступ к геолокации запрещён. Разрешите его в браузере или выберите точку.",
    "Location permission was denied. Allow it in your browser or choose a point.",
  ],
  gps_timeout: [
    "Joylashuvni aniqlash vaqti tugadi. Qayta urinib ko‘ring.",
    "Время определения местоположения истекло. Повторите попытку.",
    "Location request timed out. Please try again.",
  ],
  gps_unavailable: [
    "GPS hozir mavjud emas. Nuqtani qo‘lda tanlashingiz mumkin.",
    "GPS сейчас недоступен. Можно выбрать точку вручную.",
    "GPS is unavailable. You can choose a point manually.",
  ],
  gps_insecure: [
    "GPS uchun HTTPS yoki localhost manzili kerak.",
    "Для GPS требуется HTTPS или localhost.",
    "GPS requires HTTPS or localhost.",
  ],
  map_failed: [
    "Xarita kutubxonasi yuklanmadi. Internetni tekshirib qayta urinib ko‘ring.",
    "Библиотека карты не загрузилась. Проверьте интернет и повторите попытку.",
    "The map library did not load. Check your internet and retry.",
  ],
  tiles_failed: [
    "Xarita qatlamini yuklab bo‘lmadi.",
    "Не удалось загрузить слой карты.",
    "Map tiles could not be loaded.",
  ],
  stations: ["Stansiyalar", "Станции", "Stations"],
  results_for: ["stansiyalar", "станции", "stations"],
  result_count: ["{n} ta stansiya", "{n} станций", "{n} stations"],
  cheapest: ["Eng arzon", "Дешевле", "Cheapest"],
  nearest: ["Eng yaqin", "Ближе", "Nearest"],
  open_filter: ["Ochiq", "Открытые", "Open"],
  clear: ["Tozalash", "Сбросить", "Clear"],
  search_stations: [
    "Nomi yoki manzili…",
    "Название или адрес…",
    "Name or address…",
  ],
  open: ["Ochiq", "Открыто", "Open"],
  closed: ["Yopiq", "Закрыто", "Closed"],
  available: ["Mavjud", "Есть в наличии", "Available"],
  unavailable: ["Mavjud emas", "Нет в наличии", "Unavailable"],
  unknown: ["Noma’lum", "Неизвестно", "Unknown"],
  price: ["Narx", "Цена", "Price"],
  pressure: ["Bosim", "Давление", "Pressure"],
  power: ["Quvvat", "Мощность", "Power"],
  connectors: ["Ulagichlar", "Разъёмы", "Connectors"],
  sum: ["so‘m", "сум", "UZS"],
  km: ["km", "км", "km"],
  straight_line: ["to‘g‘ri chiziq", "по прямой", "straight line"],
  distance_unknown: [
    "Masofa uchun nuqta tanlang",
    "Выберите точку для расстояния",
    "Choose a point for distance",
  ],
  visits: ["tashrif", "посещений", "visits"],
  ratings: ["baho", "оценок", "ratings"],
  rate: ["Baholash", "Оценить", "Rate"],
  updated: ["Yangilandi", "Обновлено", "Updated"],
  measured: ["O‘lchandi", "Измерено", "Measured"],
  hours: ["Ish vaqti", "Часы работы", "Hours"],
  all_day: ["24/7", "24/7", "24/7"],
  today_closed: ["Bugun ish kuni emas", "Сегодня выходной", "Closed today"],
  temporary_closed: [
    "Vaqtincha yopiq",
    "Временно закрыто",
    "Temporarily closed",
  ],
  start: ["Boshlash", "Начать", "Start"],
  route: ["Yo‘nalish", "Маршрут", "Route"],
  view: ["Ko‘rish", "Открыть", "View"],
  delete: ["O‘chirish", "Удалить", "Delete"],
  save: ["Saqlash", "Сохранить", "Save"],
  cancel: ["Bekor qilish", "Отмена", "Cancel"],
  close: ["Yopish", "Закрыть", "Close"],
  back: ["Orqaga", "Назад", "Back"],
  next: ["Keyingi", "Далее", "Next"],
  previous: ["Oldingi", "Назад", "Previous"],
  page_of: ["{n} / {total}", "{n} / {total}", "{n} / {total}"],
  no_results: [
    "Mos stansiya topilmadi",
    "Станции не найдены",
    "No stations found",
  ],
  no_results_hint: [
    "Filtrlarni tozalang yoki boshqa xizmat turini tanlang.",
    "Сбросьте фильтры или выберите другой тип услуги.",
    "Clear filters or choose another service.",
  ],
  route_loading: [
    "Yo‘l marshruti hisoblanmoqda…",
    "Рассчитываем маршрут…",
    "Calculating a road route…",
  ],
  navigation_active: [
    "Navigatsiya faol",
    "Навигация активна",
    "Navigation active",
  ],
  navigation_paused: [
    "Xarita kuzatuvi to‘xtatildi",
    "Автослежение карты приостановлено",
    "Map following paused",
  ],
  stop: ["To‘xtatish", "Остановить", "Stop"],
  recenter: ["Markazga", "К позиции", "Recenter"],
  minutes: ["daqiqa", "мин", "min"],
  remaining: ["Qolgan yo‘l", "Оставшийся путь", "Remaining route"],
  gps_wait: ["GPS yangilanishini kutish", "Ожидание GPS", "Waiting for GPS"],
  gps_stale: [
    "GPS yangilanmayapti. Ko‘rsatilgan nuqta eskirgan.",
    "GPS не обновляется. Показанная позиция устарела.",
    "GPS is not updating. The displayed position is stale.",
  ],
  manual_navigation: [
    "Qo‘lda belgilangan nuqta: jonli kuzatish va tashrif tasdig‘i yo‘q.",
    "Ручная точка: без живого слежения и подтверждения посещения.",
    "Manual point: live tracking and visit verification are unavailable.",
  ],
  arrived: ["Manzilga yetib keldingiz", "Вы прибыли", "You have arrived"],
  arrival_hint: [
    "Stansiyani baholang. 4–5 yulduz bilan sevimlilarga qo‘shiladi.",
    "Оцените станцию. При 4–5 звёздах она добавится в избранное.",
    "Rate the station. Four or five stars add it to favorites.",
  ],
  arrival_pending: [
    "GPS aniqligi tashrifni tasdiqlash uchun yetarli emas.",
    "Точности GPS недостаточно для подтверждения посещения.",
    "GPS accuracy is insufficient to verify arrival.",
  ],
  select_stars: ["Baho tanlang", "Выберите оценку", "Choose a rating"],
  rating_saved: ["Baho saqlandi", "Оценка сохранена", "Rating saved"],
  continue_straight: [
    "To‘g‘ri davom eting",
    "Продолжайте прямо",
    "Continue straight",
  ],
  turn_left: ["Chapga buriling", "Поверните налево", "Turn left"],
  turn_right: ["O‘ngga buriling", "Поверните направо", "Turn right"],
  uturn: ["Orqaga qayriling", "Развернитесь", "Make a U-turn"],
  roundabout: [
    "Aylanma yo‘lga kiring",
    "Въезжайте на круг",
    "Enter the roundabout",
  ],
  depart: ["Yo‘lga chiqing", "Начните движение", "Start driving"],
  arrive_instruction: [
    "Manzilga yeting",
    "Прибытие к пункту назначения",
    "Arrive at your destination",
  ],
  favorites_title: [
    "Sevimli manzillaringiz",
    "Ваши любимые места",
    "Your favorite stops",
  ],
  favorites_subtitle: [
    "Saqlangan stansiyalar har safar qo‘l ostingizda.",
    "Сохранённые станции всегда под рукой.",
    "Your saved stations, ready for the next journey.",
  ],
  favorites_empty: [
    "Hali sevimlilar yo‘q",
    "Избранных станций пока нет",
    "No favorites yet",
  ],
  favorites_empty_hint: [
    "Kartadagi yurak tugmasi bilan stansiyani saqlang.",
    "Сохраните станцию кнопкой с сердцем.",
    "Use the heart on a station card to save it.",
  ],
  favorite_added: [
    "Sevimlilarga qo‘shildi",
    "Добавлено в избранное",
    "Added to favorites",
  ],
  favorite_removed: [
    "Sevimlilardan o‘chirildi",
    "Удалено из избранного",
    "Removed from favorites",
  ],
  account_needed: [
    "Hisobingizga kiring",
    "Войдите в аккаунт",
    "Sign in to your account",
  ],
  account_needed_hint: [
    "Sevimlilar va baholar hisobingizga saqlanadi.",
    "Избранное и оценки сохраняются в аккаунте.",
    "Favorites and ratings are saved to your account.",
  ],
  ai_title: [
    "Yo‘ldagi savolingizga javob.",
    "Ответ на ваш вопрос в пути.",
    "Answers for the road ahead.",
  ],
  ai_subtitle: [
    "Stansiyalarni solishtiring — ma’lumotlar bitta bazadan olinadi.",
    "Сравнивайте станции — информация берётся из одной базы.",
    "Compare stations using the same station database.",
  ],
  local_helper: [
    "Mahalliy ma’lumot yordamchisi",
    "Локальный помощник по данным",
    "Local data helper",
  ],
  provider_helper: [
    "AI xizmati ulangan",
    "AI сервис подключён",
    "AI provider connected",
  ],
  ai_intro: ["Qayerga yo‘l olamiz?", "Куда поедем?", "Where are we heading?"],
  ai_intro_text: [
    "Narx, yaqinlik, bosim yoki quvvat haqida so‘rang.",
    "Спросите о ценах, расстоянии, давлении или мощности.",
    "Ask about prices, distance, pressure or charging power.",
  ],
  q_cheap: [
    "Eng arzon AI-80 qayerda?",
    "Где самый дешёвый АИ-80?",
    "Where is the cheapest AI-80?",
  ],
  q_near: [
    "Eng yaqin ochiq metan",
    "Ближайший открытый метан",
    "Nearest open methane station",
  ],
  q_ev: [
    "Elektr quvvatlash narxlari",
    "Цены зарядки электромобиля",
    "Electric charging prices",
  ],
  chat_placeholder: [
    "Savolingizni yozing…",
    "Напишите ваш вопрос…",
    "Ask a question…",
  ],
  send: ["Yuborish", "Отправить", "Send"],
  thinking: ["Javob tayyorlanmoqda…", "Готовим ответ…", "Preparing an answer…"],
  provider_fallback: [
    "AI xizmati javob bermadi. Mahalliy ma’lumot natijasi ko‘rsatildi.",
    "AI сервис не ответил. Показан локальный результат.",
    "The AI provider did not respond. Local data results are shown.",
  ],
  chat_lang_reset: [
    "Suhbat tanlangan tilda boshlanadi.",
    "Чат начнётся на выбранном языке.",
    "The chat starts in the selected language.",
  ],
  sign_in: ["Kirish", "Войти", "Sign in"],
  register: ["Ro‘yxatdan o‘tish", "Регистрация", "Register"],
  username: ["Hisob nomi", "Логин", "Username"],
  password: ["Parol", "Пароль", "Password"],
  confirm_password: [
    "Parolni takrorlang",
    "Повторите пароль",
    "Confirm password",
  ],
  first_name: ["Ism", "Имя", "First name"],
  last_name: ["Familiya", "Фамилия", "Last name"],
  confirmed: [
    "Kiritilgan ma’lumotlar to‘g‘riligini tasdiqlayman.",
    "Подтверждаю правильность введённых данных.",
    "I confirm the entered information is correct.",
  ],
  username_hint: [
    "3–30 belgi: a–z, 0–9, _ yoki .",
    "3–30 символов: a–z, 0–9, _ или .",
    "3–30 characters: a–z, 0–9, _ or .",
  ],
  password_hint: [
    "Kamida 10 belgi. Oddiy yoki faqat raqamlardan iborat parol bo‘lmasin.",
    "Минимум 10 символов. Не используйте простой пароль или только цифры.",
    "At least 10 characters. Avoid common or all-numeric passwords.",
  ],
  forgot_password: [
    "Parol esdan chiqdimi?",
    "Забыли пароль?",
    "Forgot password?",
  ],
  recover: ["Parolni tiklash", "Восстановить пароль", "Recover password"],
  recovery_code: ["Tiklash kodi", "Код восстановления", "Recovery code"],
  recovery_notice: [
    "Kodni hozir xavfsiz joyga yozib oling. Qayta ko‘rsatilmaydi; hisob nomi bilan birga parolni tiklash uchun kerak.",
    "Сохраните код в безопасном месте. Он больше не отобразится и нужен вместе с логином для восстановления пароля.",
    "Save this code somewhere safe now. It will not be shown again; use it with your username to recover your password.",
  ],
  new_password: ["Yangi parol", "Новый пароль", "New password"],
  current_password: ["Amaldagi parol", "Текущий пароль", "Current password"],
  account: ["Hisob", "Аккаунт", "Account"],
  account_hint: [
    "Ism, rasm va xavfsizlik",
    "Имя, фото и безопасность",
    "Name, photo and security",
  ],
  support: ["Yordam", "Поддержка", "Support"],
  support_hint: [
    "Muammo haqida yozing",
    "Сообщите о проблеме",
    "Tell us about a problem",
  ],
  telegram: ["Telegram chat", "Чат Telegram", "Telegram chat"],
  settings: ["Sozlamalar", "Настройки", "Settings"],
  settings_hint: ["Til va rang rejimi", "Язык и тема", "Language and theme"],
  sign_out: ["Chiqish", "Выйти", "Sign out"],
  upload_photo: ["Rasm yuklash", "Загрузить фото", "Upload photo"],
  photo_hint: [
    "JPG, PNG, WEBP · 2 MB gacha",
    "JPG, PNG, WEBP · до 2 МБ",
    "JPG, PNG, WEBP · up to 2 MB",
  ],
  change_password: [
    "Parolni o‘zgartirish",
    "Изменить пароль",
    "Change password",
  ],
  new_recovery: [
    "Yangi tiklash kodi",
    "Новый код восстановления",
    "New recovery code",
  ],
  saved: ["Saqlandi", "Сохранено", "Saved"],
  message: ["Muammo tavsifi", "Описание проблемы", "Problem description"],
  support_sent: [
    "Murojaat yuborildi",
    "Обращение отправлено",
    "Request submitted",
  ],
  my_requests: ["Murojaatlarim", "Мои обращения", "My requests"],
  no_requests: [
    "Murojaatlar hali yo‘q",
    "Обращений пока нет",
    "No requests yet",
  ],
  new: ["Yangi", "Новое", "New"],
  review: ["Ko‘rib chiqilmoqda", "Рассматривается", "Under review"],
  resolved: ["Hal qilingan", "Решено", "Resolved"],
  reply: ["Javob", "Ответ", "Reply"],
  language: ["Til", "Язык", "Language"],
  theme: ["Rang rejimi", "Тема", "Theme"],
  light: ["Kunduz", "День", "Light"],
  dark: ["Tun", "Ночь", "Dark"],
  administrator: ["Administrator", "Администратор", "Administrator"],
  admin_title: ["Boshqaruv paneli", "Панель управления", "Administration"],
  admin_subtitle: [
    "Stansiyalar, hisoblar va murojaatlarni boshqaring.",
    "Управляйте станциями, аккаунтами и обращениями.",
    "Manage stations, accounts and support requests.",
  ],
  users: ["Foydalanuvchilar", "Пользователи", "Users"],
  add_station: ["Stansiya qo‘shish", "Добавить станцию", "Add station"],
  edit_station: ["Stansiyani tahrirlash", "Изменить станцию", "Edit station"],
  station_name: ["Stansiya nomi", "Название станции", "Station name"],
  address: ["Manzil", "Адрес", "Address"],
  description: ["Tavsif", "Описание", "Description"],
  published: ["E’lon qilingan", "Опубликовано", "Published"],
  draft: ["Qoralama", "Черновик", "Draft"],
  publish: ["E’lon qilish", "Опубликовать", "Publish"],
  save_draft: ["Qoralama saqlash", "Сохранить черновик", "Save draft"],
  service_info: ["Xizmat ma’lumotlari", "Данные услуги", "Service information"],
  petrol_grade: ["Benzin markasi", "Марка бензина", "Petrol grade"],
  add_grade: ["Marka qo‘shish", "Добавить марку", "Add grade"],
  unit: ["Birlik", "Единица", "Unit"],
  pressure_unit: ["Bosim birligi", "Единица давления", "Pressure unit"],
  measured_time: [
    "Bosim o‘lchangan vaqt",
    "Время измерения давления",
    "Pressure measurement time",
  ],
  select_location: [
    "Xaritadan manzil tanlash",
    "Выбрать место на карте",
    "Pick location on map",
  ],
  location_saved: [
    "Xarita nuqtasi saqlandi. Stansiya hali e’lon qilinmagan.",
    "Точка сохранена. Станция ещё не опубликована.",
    "Location saved. The station has not been published yet.",
  ],
  location_required_form: [
    "E’lon qilishdan oldin xaritada nuqtani saqlang.",
    "Перед публикацией сохраните точку на карте.",
    "Save a map location before publishing.",
  ],
  latitude: ["Kenglik", "Широта", "Latitude"],
  longitude: ["Uzunlik", "Долгота", "Longitude"],
  localized_text: [
    "RU / ENG tarjima matnlari",
    "Тексты RU / ENG",
    "RU / ENG station text",
  ],
  registered: ["Ro‘yxatdan o‘tgan", "Дата регистрации", "Registered"],
  last_login: ["Oxirgi kirish", "Последний вход", "Last sign-in"],
  role: ["Vazifa", "Роль", "Role"],
  user: ["Foydalanuvchi", "Пользователь", "User"],
  activity: ["Faollik", "Активность", "Activity"],
  history: ["O‘zgarishlar tarixi", "История изменений", "Change history"],
  created: ["Yaratildi", "Создано", "Created"],
  deleted: ["O‘chirildi", "Удалено", "Deleted"],
  status: ["Holat", "Статус", "Status"],
  delete_confirm: [
    "Ushbu stansiya va unga bog‘liq yozuvlar o‘chirilsinmi?",
    "Удалить эту станцию и связанные записи?",
    "Delete this station and its related records?",
  ],
  station_published: [
    "Stansiya e’lon qilindi",
    "Станция опубликована",
    "Station published",
  ],
  draft_saved: ["Qoralama saqlandi", "Черновик сохранён", "Draft saved"],
  no_records: ["Yozuvlar mavjud emas", "Записей нет", "No records"],
  all: ["Barchasi", "Все", "All"],
  mon: ["Dushanba", "Понедельник", "Monday"],
  tue: ["Seshanba", "Вторник", "Tuesday"],
  wed: ["Chorshanba", "Среда", "Wednesday"],
  thu: ["Payshanba", "Четверг", "Thursday"],
  fri: ["Juma", "Пятница", "Friday"],
  sat: ["Shanba", "Суббота", "Saturday"],
  sun_day: ["Yakshanba", "Воскресенье", "Sunday"],
  login_required: [
    "Davom etish uchun hisobingizga kiring.",
    "Войдите в аккаунт, чтобы продолжить.",
    "Sign in to continue.",
  ],
  admin_required: [
    "Bu amal uchun administrator huquqi kerak.",
    "Для этого действия нужны права администратора.",
    "Administrator permission is required.",
  ],
  invalid_data: [
    "Ma’lumotlarni tekshiring. Maydonlar noto‘g‘ri yoki to‘liq emas.",
    "Проверьте данные. Поля неверны или не заполнены.",
    "Check the data. Fields are invalid or incomplete.",
  ],
  password_invalid: [
    "Parol talablariga rioya qiling: kamida 10 belgi, oddiy yoki faqat raqamli emas.",
    "Пароль: минимум 10 символов, не простой и не только из цифр.",
    "Use at least 10 characters, avoiding common or all-numeric passwords.",
  ],
  username_invalid: [
    "Hisob nomi: 3–30 belgi, a–z, 0–9, _ yoki .",
    "Логин: 3–30 символов, a–z, 0–9, _ или .",
    "Username: 3–30 characters, a–z, 0–9, _ or .",
  ],
  registration_invalid: [
    "Parollar mos bo‘lsin va tasdiqlash katagini belgilang.",
    "Пароли должны совпадать. Отметьте подтверждение.",
    "Passwords must match and the confirmation box must be checked.",
  ],
  username_taken: [
    "Bu hisob nomi band. Boshqasini tanlang.",
    "Этот логин занят. Выберите другой.",
    "This username is taken. Choose another.",
  ],
  login_failed: [
    "Hisob nomi yoki parol noto‘g‘ri. Hisob bo‘lmasa ro‘yxatdan o‘ting.",
    "Неверный логин или пароль. Если нет аккаунта, зарегистрируйтесь.",
    "Incorrect username or password. Register if you do not have an account.",
  ],
  recovery_failed: [
    "Hisob nomi yoki tiklash kodi noto‘g‘ri.",
    "Неверный логин или код восстановления.",
    "Incorrect username or recovery code.",
  ],
  current_password_wrong: [
    "Amaldagi parol noto‘g‘ri.",
    "Неверный текущий пароль.",
    "Incorrect current password.",
  ],
  upload_invalid: [
    "Rasmni tekshiring: JPG/PNG/WEBP, 2 MB gacha.",
    "Проверьте фото: JPG/PNG/WEBP, до 2 МБ.",
    "Check the photo: JPG/PNG/WEBP, up to 2 MB.",
  ],
  too_many_requests: [
    "So‘rovlar juda ko‘p. Birozdan so‘ng qayta urinib ko‘ring.",
    "Слишком много запросов. Повторите немного позже.",
    "Too many requests. Try again shortly.",
  ],
  location_required: [
    "Avval GPSni yoqing yoki boshlanish nuqtasini tanlang.",
    "Сначала включите GPS или выберите точку старта.",
    "Enable GPS or choose a starting point first.",
  ],
  station_missing: [
    "Stansiya topilmadi yoki e’lon qilinmagan.",
    "Станция не найдена или не опубликована.",
    "Station not found or not published.",
  ],
  provider_failed: [
    "Tashqi xizmat javob bermadi. Qayta urinib ko‘ring.",
    "Внешний сервис не ответил. Повторите попытку.",
    "The external service did not respond. Please retry.",
  ],
  route_failed: [
    "Yo‘l marshruti topilmadi. Boshlanish nuqtasini tekshiring va qayta urinib ko‘ring.",
    "Дорожный маршрут не найден. Проверьте точку старта и повторите.",
    "A road route could not be found. Check the starting point and retry.",
  ],
  geocode_busy: [
    "Manzil qidiruvi band. Bir ozdan keyin urinib ko‘ring.",
    "Поиск адреса занят. Повторите чуть позже.",
    "Address lookup is busy. Try again shortly.",
  ],
  address_unknown: [
    "Manzil topilmadi. Koordinatalar saqlanadi.",
    "Адрес не найден. Координаты сохранены.",
    "Address could not be found. Coordinates are retained.",
  ],
  navigation_missing: [
    "Navigatsiya sessiyasi topilmadi.",
    "Сессия навигации не найдена.",
    "Navigation session not found.",
  ],
  navigation_finished: [
    "Navigatsiya allaqachon yakunlangan.",
    "Навигация уже завершена.",
    "Navigation has already ended.",
  ],
  arrival_unverified: [
    "Tashrif tasdiqlanmadi. Faol marshrut va aniq GPS bilan manzilga yeting.",
    "Посещение не подтверждено. Прибудьте с активным маршрутом и точным GPS.",
    "Visit not verified. Arrive with an active route and accurate GPS.",
  ],
  forbidden: [
    "Bu amal ruxsat etilmagan.",
    "Действие запрещено.",
    "This action is not allowed.",
  ],
  user_missing: [
    "Foydalanuvchi topilmadi.",
    "Пользователь не найден.",
    "User not found.",
  ],
  ticket_missing: [
    "Murojaat topilmadi.",
    "Обращение не найдено.",
    "Request not found.",
  ],
  endpoint_missing: [
    "Amal topilmadi.",
    "Действие не найдено.",
    "Action not found.",
  ],
  server_error: [
    "Serverda xatolik yuz berdi. Qayta urinib ko‘ring.",
    "Ошибка сервера. Повторите попытку.",
    "A server error occurred. Please retry.",
  ],
  csrf_failed: [
    "Sessiya yangilandi. Sahifani qayta yuklang va urinib ko‘ring.",
    "Сессия обновилась. Перезагрузите страницу и повторите.",
    "The session changed. Reload the page and retry.",
  ],
  network_error: [
    "Server bilan aloqa yo‘q. Internetni yoki Python serverini tekshiring.",
    "Нет связи с сервером. Проверьте интернет или Python сервер.",
    "Cannot reach the server. Check the internet or Python server.",
  ],
};
const $ = (id) => document.getElementById(id);
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const icon = (name) =>
  `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const catIcon = (c) =>
  ({ fuel: "fuel", metan: "flame", propan: "flame", elektr: "bolt" })[c] ||
  "pin";
const readPref = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};
const S = {
  lang: readPref("gef_lang", "uz"),
  theme: readPref("gef_theme", "light"),
  user: null,
  config: null,
  page: "home",
  category: "fuel",
  grade: "AI-80",
  sort: "default",
  open: false,
  search: "",
  pageNo: 1,
  results: [],
  markers: [],
  favorites: [],
  favoriteIds: new Set(),
  position: null,
  address: null,
  geoError: null,
  watchId: null,
  map: null,
  tile: null,
  userMarker: null,
  accuracyCircle: null,
  markerLayer: null,
  markerById: new Map(),
  selected: null,
  nav: null,
  routeLayer: null,
  follow: true,
  navBusy: false,
  chat: [],
  chatBusy: false,
  profileView: "main",
  authView: "login",
  adminView: "stations",
  adminRows: [],
  adminSearch: "",
  adminCategory: "all",
  adminStatus: "all",
  adminDraft: null,
  picker: null,
  pickerMarker: null,
  pickerPoint: null,
  pickerPurpose: null,
  pending: null,
  modalType: null,
  ratingStars: 0,
  ratingContext: null,
  afterModal: null,
  ready: false,
};
if (!["uz", "ru", "en"].includes(S.lang)) S.lang = "uz";
if (!["light", "dark"].includes(S.theme)) S.theme = "light";
function t(key, vars = {}) {
  let value = WORDS[key]?.[["uz", "ru", "en"].indexOf(S.lang)] || key;
  return value.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}
function num(value) {
  return value === null || value === undefined
    ? t("unknown")
    : new Intl.NumberFormat({ uz: "uz-UZ", ru: "ru-RU", en: "en-US" }[S.lang], {
        maximumFractionDigits: 2,
      }).format(Number(value));
}
function date(value) {
  return value
    ? new Intl.DateTimeFormat(
        { uz: "uz-UZ", ru: "ru-RU", en: "en-GB" }[S.lang],
        { timeZone: "Asia/Tashkent", dateStyle: "short", timeStyle: "short" },
      ).format(new Date(value))
    : t("unknown");
}
function csrf() {
  return (
    document.cookie
      .split("; ")
      .find((v) => v.startsWith("csrftoken="))
      ?.split("=")[1] || ""
  );
}
async function api(endpoint, method = "GET", data) {
  let result, response;
  try {
    response = await fetch("/api/" + endpoint, {
      method,
      credentials: "same-origin",
      headers:
        method === "GET"
          ? {}
          : {
              "X-CSRFToken": csrf(),
              ...(data instanceof FormData
                ? {}
                : { "Content-Type": "application/json" }),
            },
      body:
        method === "GET"
          ? undefined
          : data instanceof FormData
            ? data
            : JSON.stringify(data || {}),
      signal: AbortSignal.timeout(26000),
    });
    result = await response.json();
  } catch (error) {
    throw Object.assign(new Error(t("network_error")), {
      code: "network_error",
    });
  }
  if (!response.ok)
    throw Object.assign(new Error(t(result.error || "server_error")), {
      code: result.error,
      status: response.status,
      details: result.details,
    });
  return result;
}
let toastTimer;
function toast(message, error = false) {
  clearTimeout(toastTimer);
  $("toast").textContent = message;
  $("toast").classList.toggle("error", error);
  $("toast").classList.remove("hidden");
  toastTimer = setTimeout(() => $("toast").classList.add("hidden"), 6500);
}
function onError(error) {
  toast(error.message || t("server_error"), true);
}
function button(label, action, extra = "", style = "") {
  return `<button class="btn ${style}" data-action="${action}" ${extra}>${esc(t(label))}</button>`;
}
function heading(title, subtitle) {
  return `<div class="heading"><h1>${esc(t(title))}</h1><p>${esc(t(subtitle))}</p></div>`;
}
function empty(
  title,
  hint,
  action = "clear",
  label = "clear",
  symbol = "search",
) {
  return `<div class="empty" style="grid-column:1/-1">${icon(symbol)}<h3>${esc(t(title))}</h3>${hint ? `<p>${esc(t(hint))}</p>` : ""}${action ? button(label, action, "", "soft") : ""}</div>`;
}
function translateStatic() {
  document.documentElement.lang = S.lang;
  document.documentElement.dataset.theme = S.theme;
  document
    .querySelectorAll("[data-t]")
    .forEach((el) => (el.textContent = t(el.dataset.t)));
  document
    .querySelectorAll("[data-placeholder]")
    .forEach((el) => (el.placeholder = t(el.dataset.placeholder)));
  document.querySelectorAll("[data-title]").forEach((el) => {
    el.title = t(el.dataset.title);
    el.setAttribute("aria-label", t(el.dataset.title));
  });
  $("language").value = S.lang;
  $("theme-toggle").innerHTML = icon(S.theme === "light" ? "moon" : "sun");
  $("theme-toggle").setAttribute(
    "aria-label",
    t(S.theme === "light" ? "dark" : "light"),
  );
  $("grade").setAttribute("aria-label", t("petrol_grade"));
  $("language").setAttribute("aria-label", t("language"));
}
function renderNav() {
  const pages = [
    ["home", "home"],
    ["favorites", "heart"],
    ["ai", "spark"],
    ["profile", "user"],
  ];
  const markup = pages
    .map(
      ([page, symbol]) =>
        `<button class="nav-item ${S.page === page ? "active" : ""}" data-action="page" data-page="${page}" ${S.page === page ? 'aria-current="page"' : ""}>${icon(symbol)}<span>${esc(t(page))}</span></button>`,
    )
    .join("");
  $("desktop-nav").innerHTML = markup;
  $("mobile-nav").innerHTML = markup;
  $("admin-link").classList.toggle("hidden", !S.user?.admin);
  $("side-account").innerHTML =
    `${avatarHTML(S.user)}<div class="grow"><strong>${esc(S.user?.first_name || t("sign_in"))}</strong><div><small>${esc(S.user?.username || t("account_needed_hint"))}</small></div></div>`;
}
function avatarHTML(user) {
  return user?.avatar
    ? `<img class="avatar" alt="${esc(t("profile"))}" src="${esc(user.avatar)}">`
    : `<span class="avatar">${esc((user?.first_name || "G").slice(0, 1))}</span>`;
}
function renderCategories() {
  const order = ["fuel", "metan", "propan", "elektr"];
  $("categories").innerHTML = order
    .map(
      (c) =>
        `<button class="category ${S.category === c ? "active" : ""}" data-action="category" data-category="${c}" aria-pressed="${S.category === c}"><span class="category-icon">${icon(catIcon(c))}</span>${esc(t(c))}</button>`,
    )
    .join("");
  $("results-title").textContent = t(S.category);
  $("grade").classList.toggle("hidden", S.category !== "fuel");
  ["price", "distance"].forEach((mode) => {
    let el = $("filter-" + mode);
    el.classList.toggle("active", S.sort === mode);
    el.setAttribute("aria-pressed", S.sort === mode);
  });
  $("filter-open").classList.toggle("active", S.open);
  $("filter-open").setAttribute("aria-pressed", S.open);
}
function renderLocation() {
  const p = S.position;
  $("location-text").textContent =
    S.address ||
    (!p
      ? t("location_not_set")
      : p.manual
        ? t("manual_origin")
        : t("gps_position") + ` · ${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}`);
  $("location-status").textContent = S.geoError
    ? t(S.geoError)
    : p
      ? p.manual
        ? t("manual_origin")
        : Date.now() - p.timestamp > 45000
          ? t("gps_stale")
          : t("accuracy") + ` ±${Math.round(p.accuracy)} ${t("meters")}`
      : t("location_hint");
}
function scheduleLabel(station) {
  if (station.temporarily_closed) return t("temporary_closed");
  if (station.schedule["24h"]) return t("all_day");
  let day = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Asia/Tashkent",
  }).format(new Date());
  let idx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(day);
  let hours = station.schedule.days?.[String(idx)];
  return hours ? hours.join(" – ") : t("today_closed");
}
function priceHTML(station, category = S.category) {
  let products = station.products.filter((p) => p.category === category);
  if (!products.length) products = station.products;
  return `<div class="price-area">${products.map((p) => `<div class="price-line"><span>${esc(p.grade || t(p.category))}${!p.available ? ` <small style="color:var(--red)">· ${esc(t("unavailable"))}</small>` : ""}</span><span><strong>${num(p.price)}</strong> <small>${esc(t("sum"))}/${esc(p.unit)}</small></span></div>${["metan", "propan"].includes(p.category) ? `<div class="service-extra">${esc(t("pressure"))}: <b>${num(p.pressure)} ${esc(p.pressure_unit)}</b> · ${esc(t("measured"))}: ${esc(date(p.measured_at))}</div>` : ""}${p.category === "elektr" ? `<div class="service-extra">${esc(t("power"))}: ${num(p.power_kw)} kW · ${esc(t("connectors"))}: ${esc(p.connectors || t("unknown"))}</div>` : ""}`).join("")}</div>`;
}
function stationCard(station, favorite = false) {
  const category = favorite ? station.categories[0] : S.category;
  return `<article class="panel station-card ${S.selected === station.id ? "selected" : ""}" data-action="select-station" data-id="${station.id}" tabindex="0" role="button" aria-label="${esc(station.name)}"><div class="card-labels"><span class="badge ${station.open ? "open" : "closed"}"><span class="dot"></span>${esc(t(station.open ? "open" : "closed"))}</span>${station.demo ? `<span class="badge demo">${esc(t("demo"))}</span>` : ""}</div><button class="icon-btn card-fav ${S.favoriteIds.has(station.id) ? "saved" : ""}" data-action="favorite" data-id="${station.id}" aria-label="${esc(t(S.favoriteIds.has(station.id) ? "favorite_removed" : "favorite_added"))}">${icon("heart")}</button><div class="title">${esc(station.name)}</div><div class="address">${esc(station.address)}</div>${favorite ? `<div class="row wrap" style="margin-bottom:10px">${station.categories.map((c) => `<span class="badge">${esc(t(c))}</span>`).join("")}</div>` : ""}${priceHTML(station, category)}<div class="card-stats"><span><span class="star-text">★</span> ${num(station.rating)} <small>(${station.ratings_count} ${esc(t("ratings"))})</small></span><span>${station.visits} ${esc(t("visits"))}</span></div><div class="card-stats">${icon("route")}<span class="grow">${station.distance !== null ? `${num(station.distance)} ${esc(t("km"))} · ${esc(t("straight_line"))}` : esc(t("distance_unknown"))}</span></div><div class="card-schedule">${esc(t("hours"))}: ${esc(scheduleLabel(station))}</div><div class="card-updated">${esc(t("updated"))}: ${esc(date(station.updated_at))}</div><div class="card-actions">${favorite ? `<button class="btn small danger" data-action="remove-favorite" data-id="${station.id}">${icon("trash")}${esc(t("delete"))}</button>` : `<button class="btn small" data-action="station-detail" data-id="${station.id}">${esc(t("view"))}</button>`}<button class="btn small primary" data-action="start" data-id="${station.id}">${icon("route")}${esc(t("start"))}</button></div></article>`;
}
let stationSeq = 0;
async function loadStations(showLoading = false) {
  if (!S.config) return;
  const sequence = ++stationSeq;
  const params = new URLSearchParams({
    category: S.category,
    grade: S.grade,
    sort: S.sort,
    open: S.open ? "1" : "0",
    lang: S.lang,
    page: String(S.pageNo),
    search: S.search,
  });
  if (S.position) {
    params.set("lat", S.position.lat);
    params.set("lng", S.position.lng);
  }
  if (showLoading)
    $("results").innerHTML = Array.from(
      { length: 3 },
      () => '<div class="skeleton"></div>',
    ).join("");
  try {
    const data = await api("stations?" + params);
    if (sequence !== stationSeq) return;
    S.results = data.items;
    S.markers = data.map_stations;
    S.total = data.total;
    S.pages = Math.max(1, Math.ceil(data.total / 9));
    if (S.pageNo > S.pages) {
      S.pageNo = S.pages;
      return loadStations();
    }
    if (S.category === "fuel") {
      const grades = [
        ...new Set(["AI-80", "AI-90", "AI-95", ...data.grades, S.grade]),
      ];
      $("grade").innerHTML = grades
        .map(
          (g) =>
            `<option ${g === S.grade ? "selected" : ""}>${esc(g)}</option>`,
        )
        .join("");
    }
    renderResults();
    renderMarkers();
    if (S.user && S.page === "favorites") await loadFavorites();
  } catch (error) {
    if (sequence !== stationSeq) return;
    $("results").innerHTML =
      `<div class="empty" style="grid-column:1/-1"><p>${esc(error.message)}</p>${button("retry", "retry-stations", "", "primary")}</div>`;
    onError(error);
  }
}
function renderResults() {
  $("results").innerHTML = S.results.length
    ? S.results.map((s) => stationCard(s)).join("")
    : empty("no_results", "no_results_hint");
  $("results-count").textContent = t("result_count", { n: S.total || 0 });
  $("map-count").textContent = t("result_count", { n: S.markers.length });
  $("pagination").innerHTML =
    S.pages > 1
      ? `${button("previous", "prev-page", S.pageNo <= 1 ? "disabled" : "", "small")}<small>${esc(t("page_of", { n: S.pageNo, total: S.pages }))}</small>${button("next", "next-page", S.pageNo >= S.pages ? "disabled" : "", "small")}`
      : "";
}
async function loadFavorites() {
  if (!S.user) {
    S.favorites = [];
    S.favoriteIds = new Set();
    return;
  }
  const params = new URLSearchParams({ lang: S.lang });
  if (S.position) {
    params.set("lat", S.position.lat);
    params.set("lng", S.position.lng);
  }
  const result = await api("favorites?" + params);
  S.favorites = result.items;
  S.favoriteIds = new Set(result.ids);
  if (S.page === "favorites") renderFavorites();
}
function renderFavorites() {
  $("page-favorites").innerHTML =
    heading("favorites_title", "favorites_subtitle") +
    (!S.user
      ? empty(
          "account_needed",
          "account_needed_hint",
          "login",
          "sign_in",
          "heart",
        )
      : !S.favorites.length
        ? empty(
            "favorites_empty",
            "favorites_empty_hint",
            "go-home",
            "home",
            "heart",
          )
        : `<div class="cards">${S.favorites.map((s) => stationCard(s, true)).join("")}</div>`);
}
function setPage(page, updateHash = true) {
  if (!["home", "favorites", "ai", "profile", "admin"].includes(page))
    page = "home";
  if (page === "admin" && !S.user?.admin) page = "profile";
  S.page = page;
  document
    .querySelectorAll("main section")
    .forEach((el) => el.classList.toggle("hidden", el.id !== "page-" + page));
  if (updateHash && location.hash !== "#" + page)
    history.replaceState(null, "", "#" + page);
  renderNav();
  if (page === "home") {
    requestAnimationFrame(() => S.map?.invalidateSize());
    setTimeout(() => S.map?.invalidateSize(), 100);
    setTimeout(() => S.map?.invalidateSize(), 400);
  }
  if (page === "favorites") {
    renderFavorites();
    if (S.user) loadFavorites().catch(onError);
  }
  if (page === "ai") renderChat();
  if (page === "profile") renderProfile();
  if (page === "admin") loadAdmin().catch(onError);
  window.scrollTo({ top: 0, behavior: "instant" });
}
async function toggleFavorite(id, removeOnly = false) {
  if (!S.user) {
    S.pending = { type: "favorite", id };
    showLogin();
    return;
  }
  const isRemove = removeOnly || S.favoriteIds.has(id);
  await api("favorites/" + id, isRemove ? "DELETE" : "POST");
  await loadFavorites();
  renderResults();
  toast(t(isRemove ? "favorite_removed" : "favorite_added"));
}
function showLogin() {
  S.authView = "login";
  S.profileView = "main";
  setPage("profile");
  toast(t("login_required"));
}

function initMap() {
  if (S.map) return;
  if (typeof L === "undefined") {
    $("map-error").innerHTML =
      `${icon("pin")}<p>${esc(t("map_failed"))}</p>${button("retry", "retry-map", "", "primary")}`;
    $("map-error").classList.remove("hidden");
    return;
  }
  S.map = L.map("map", { zoomControl: false }).setView(
    [41.311081, 69.240562],
    12,
  );
  L.control.zoom({ position: "bottomright" }).addTo(S.map);
  S.markerLayer = L.layerGroup().addTo(S.map);
  setTile();
  S.map.on("dragstart", () => {
    if (S.nav) {
      S.follow = false;
      renderNavigation();
    }
  });
  $("map-error").classList.add("hidden");
  renderMarkers();
  if (S.position) drawPosition();
}
function setTile() {
  if (!S.map || !S.config) return;
  if (S.tile) S.map.removeLayer(S.tile);
  let lastError = 0;
  S.tile = L.tileLayer(
    S.config[S.theme === "dark" ? "tile_dark" : "tile_light"],
    { maxZoom: 19, attribution: S.config.attribution },
  ).addTo(S.map);
  S.tile.on("tileerror", () => {
    if (Date.now() - lastError > 60000) {
      lastError = Date.now();
      $("map-status").textContent = t("tiles_failed");
      $("map-status").classList.remove("hidden");
    }
  });
  S.tile.on("load", () => {
    if ($("map-status").textContent === t("tiles_failed"))
      $("map-status").classList.add("hidden");
  });
}
async function retryMap() {
  if (typeof L === "undefined") {
    const old = document.querySelector("script[data-leaflet-retry]");
    old?.remove();
    const script = document.createElement("script");
    script.src = "/static/vendor/leaflet/leaflet.js";
    script.dataset.leafletRetry = "1";
    script.onload = () => initMap();
    script.onerror = () => toast(t("map_failed"), true);
    document.head.appendChild(script);
  } else if (S.map) setTile();
  else initMap();
}
function renderMarkers() {
  if (!S.map) return;
  S.markerLayer.clearLayers();
  S.markerById.clear();
  let rows = [...S.markers];
  if (S.nav && !rows.some((s) => s.id === S.nav.station.id))
    rows.push(S.nav.station);
  for (const station of rows) {
    const cat = station.categories.includes(S.category)
      ? S.category
      : station.categories[0];
    const marker = L.marker([station.lat, station.lng], {
      icon: L.divIcon({
        className: "station-pin " + (station.open ? "" : "closed"),
        html: `<div class="pin-inner ${cat}">${icon(catIcon(cat))}</div>`,
        iconSize: [35, 35],
        iconAnchor: [17, 35],
        popupAnchor: [0, -30],
      }),
    }).addTo(S.markerLayer);
    const content = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = station.name;
    content.append(strong);
    const line = document.createElement("p");
    line.textContent =
      t(station.open ? "open" : "closed") +
      (station.demo ? " · " + t("demo") : "");
    line.style.margin = "6px 0";
    content.append(line);
    const btn = document.createElement("button");
    btn.className = "btn small primary";
    btn.textContent = t("start");
    btn.addEventListener("click", () =>
      startNavigation(station.id).catch(onError),
    );
    content.append(btn);
    marker.bindPopup(content);
    marker.on("click", () => {
      S.selected = station.id;
      renderResults();
    });
    S.markerById.set(station.id, marker);
  }
}
function drawPosition() {
  if (!S.map || !S.position) return;
  const p = S.position;
  const markerIcon = L.divIcon({
    className: "",
    html: `<div class="user-dot ${p.manual ? "manual-dot" : ""}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
  if (!S.userMarker)
    S.userMarker = L.marker([p.lat, p.lng], {
      icon: markerIcon,
      zIndexOffset: 1000,
    }).addTo(S.map);
  else S.userMarker.setLatLng([p.lat, p.lng]).setIcon(markerIcon);
  if (S.accuracyCircle) {
    S.map.removeLayer(S.accuracyCircle);
    S.accuracyCircle = null;
  }
  if (!p.manual)
    S.accuracyCircle = L.circle([p.lat, p.lng], {
      radius: p.accuracy,
      color: "#2563eb",
      fillOpacity: 0.08,
      weight: 1,
      interactive: false,
    }).addTo(S.map);
}
let lastLocationRefresh = 0,
  lastAddressPoint = null,
  lastAddressTime = 0;
async function updateAddress(force = false) {
  if (!S.position) return;
  const p = S.position;
  if (
    !force &&
    lastAddressPoint &&
    distance(p.lat, p.lng, lastAddressPoint.lat, lastAddressPoint.lng) < 200 &&
    Date.now() - lastAddressTime < 300000
  )
    return;
  lastAddressPoint = { ...p };
  lastAddressTime = Date.now();
  try {
    const data = await api("geocode", "POST", {
      lat: p.lat,
      lng: p.lng,
      lang: S.lang,
    });
    if (
      S.position &&
      distance(S.position.lat, S.position.lng, p.lat, p.lng) < 100
    )
      S.address = data.result.display_name;
  } catch {
    S.address = null;
  }
  renderLocation();
}
function acceptPosition(position, recenter = false) {
  const p = position.coords;
  if (
    S.position &&
    distance(p.latitude, p.longitude, S.position.lat, S.position.lng) > 200
  )
    S.address = null;
  S.position = {
    lat: p.latitude,
    lng: p.longitude,
    accuracy: p.accuracy,
    timestamp: position.timestamp,
    manual: false,
  };
  S.geoError = null;
  renderLocation();
  drawPosition();
  if (S.map && (recenter || (S.nav && S.follow)))
    S.map.setView(
      [p.latitude, p.longitude],
      S.nav ? Math.max(15, S.map.getZoom()) : 15,
      { animate: true },
    );
  updateAddress();
  if (Date.now() - lastLocationRefresh > 10000) {
    lastLocationRefresh = Date.now();
    loadStations();
  }
  if (S.nav && !S.nav.completed) updateNavigation();
}
function geoFailure(error) {
  S.geoError =
    { 1: "gps_denied", 2: "gps_unavailable", 3: "gps_timeout" }[error.code] ||
    "gps_unavailable";
  renderLocation();
  toast(t(S.geoError), true);
  if (S.nav) {
    S.nav.gpsError = S.geoError;
    renderNavigation();
  }
}
function locate() {
  if (!window.isSecureContext) {
    S.geoError = "gps_insecure";
    renderLocation();
    toast(t("gps_insecure"), true);
    return Promise.resolve(false);
  }
  if (!navigator.geolocation) {
    S.geoError = "gps_unavailable";
    renderLocation();
    return Promise.resolve(false);
  }
  $("location-text").textContent = t("locating");
  return new Promise((resolve) =>
    navigator.geolocation.getCurrentPosition(
      (position) => {
        acceptPosition(position, true);
        resolve(true);
      },
      (error) => {
        geoFailure(error);
        resolve(false);
      },
      { enableHighAccuracy: true, timeout: 18000, maximumAge: 0 },
    ),
  );
}
function watchPosition() {
  if (S.watchId !== null) navigator.geolocation.clearWatch(S.watchId);
  if (!navigator.geolocation) return;
  S.watchId = navigator.geolocation.watchPosition(
    (p) => acceptPosition(p),
    geoFailure,
    { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 },
  );
}
function distance(a, b, c, d) {
  let x =
    Math.sin(((c - a) * Math.PI) / 360) ** 2 +
    Math.cos((a * Math.PI) / 180) *
      Math.cos((c * Math.PI) / 180) *
      Math.sin(((d - b) * Math.PI) / 360) ** 2;
  return 12742000 * Math.asin(Math.sqrt(Math.min(1, x)));
}
function persistNavigation() {
  try {
    if (S.nav) sessionStorage.setItem("gef_navigation", JSON.stringify(S.nav));
    else sessionStorage.removeItem("gef_navigation");
  } catch {}
}
function prepareRoute(route) {
  const points = route.geometry.coordinates;
  let lengths = [];
  for (let i = 0; i < points.length - 1; i++)
    lengths.push(
      distance(points[i][1], points[i][0], points[i + 1][1], points[i + 1][0]),
    );
  const actual = route.annotations.flatMap((a) => a.distance || []);
  if (actual.length === lengths.length) lengths = actual;
  else {
    const total = lengths.reduce((a, b) => a + b, 0);
    if (total) lengths = lengths.map((v) => (v * route.distance) / total);
  }
  route.segmentLengths = lengths;
  route.cumulative = [0];
  for (let value of lengths)
    route.cumulative.push(route.cumulative.at(-1) + value);
  return route;
}
function pointOnRoute(position, route) {
  const pts = route.geometry.coordinates,
    cos = Math.cos((position.lat * Math.PI) / 180);
  let best = { offset: Infinity, index: 0, fraction: 0 };
  for (let i = 0; i < pts.length - 1; i++) {
    let ax = (pts[i][0] - position.lng) * cos * 111320,
      ay = (pts[i][1] - position.lat) * 110540,
      bx = (pts[i + 1][0] - position.lng) * cos * 111320,
      by = (pts[i + 1][1] - position.lat) * 110540,
      dx = bx - ax,
      dy = by - ay;
    let frac = Math.max(
      0,
      Math.min(1, -(ax * dx + ay * dy) / (dx * dx + dy * dy || 1)),
    );
    let offset = Math.hypot(ax + frac * dx, ay + frac * dy);
    if (offset < best.offset) best = { offset, index: i, fraction: frac };
  }
  best.progress =
    route.cumulative[best.index] +
    best.fraction * (route.segmentLengths[best.index] || 0);
  return best;
}
function drawRoute(fit = true) {
  if (!S.map || !S.nav) return;
  if (S.routeLayer) S.map.removeLayer(S.routeLayer);
  S.routeLayer = L.geoJSON(S.nav.route.geometry, {
    style: { color: "#2563eb", weight: 6, opacity: 0.85 },
  }).addTo(S.map);
  if (fit)
    S.map.fitBounds(S.routeLayer.getBounds(), {
      padding: [35, 50],
      maxZoom: 16,
    });
  renderMarkers();
}
async function startNavigation(id) {
  if (S.navBusy) return;
  if (!S.position) {
    S.pending = { type: "start", id };
    setPage("home");
    const ok = await locate();
    if (!ok) {
      openPicker("origin");
      return;
    }
    S.pending = null;
  }
  if (!S.position.manual && Date.now() - S.position.timestamp > 45000) {
    const ok = await locate();
    if (!ok) return;
  }
  S.navBusy = true;
  const station = await api("stations/" + id + "?lang=" + S.lang)
    .then((x) => x.station)
    .catch((error) => {
      S.navBusy = false;
      throw error;
    });
  S.category = station.categories.includes(S.category)
    ? S.category
    : station.categories[0];
  S.selected = id;
  setPage("home");
  renderCategories();
  toast(t("route_loading"));
  try {
    if (S.nav && !S.nav.completed) await stopNavigation(false);
    const result = await api("navigation/start", "POST", {
      station_id: id,
      ...S.position,
    });
    S.nav = {
      id: result.navigation_id,
      station: result.station,
      route: prepareRoute(result.route),
      remaining: result.route.distance,
      duration: result.route.duration,
      started: Date.now(),
      manual: S.position.manual,
      completed: false,
      arrivals: 0,
      lastReroute: 0,
    };
    S.follow = true;
    S.pending = null;
    drawRoute();
    renderNavigation();
    persistNavigation();
    loadStations();
    if (!S.position.manual) watchPosition();
  } catch (error) {
    S.nav = null;
    renderNavigation();
    openModal(
      "route",
      t("route_failed"),
      `<div class="alert error">${esc(error.message)}</div><div class="row" style="margin-top:18px">${button("retry", "retry-route", `data-id="${id}"`, "primary")}${button("cancel", "close-modal")}</div>`,
    );
    throw error;
  } finally {
    S.navBusy = false;
  }
}
function maneuverLabel(step) {
  if (!step) return t("gps_wait");
  const man = step.maneuver || {};
  const key =
    man.type === "arrive"
      ? "arrive_instruction"
      : man.type === "depart"
        ? "depart"
        : ["roundabout", "rotary"].includes(man.type)
          ? "roundabout"
          : man.modifier === "uturn"
            ? "uturn"
            : man.modifier?.includes("left")
              ? "turn_left"
              : man.modifier?.includes("right")
                ? "turn_right"
                : "continue_straight";
  return t(key) + (step.name ? " · " + step.name : "");
}
function renderNavigation() {
  const nav = S.nav;
  $("navigation").classList.toggle("hidden", !nav);
  if (!nav) return;
  let hint = nav.completed
    ? t("arrived")
    : nav.routeError
      ? t("route_failed")
      : nav.gpsError
        ? t(nav.gpsError)
        : nav.manual
          ? t("manual_navigation")
          : S.follow
            ? t("navigation_active")
            : t("navigation_paused");
  $("navigation").innerHTML =
    `<div class="row"><div class="nav-icon">${icon("route")}</div><div class="grow"><h3>${esc(nav.station.name)}</h3><small>${esc(hint)}</small>${!nav.completed ? `<div class="maneuver">${esc(maneuverLabel(nav.nextStep))}</div>` : ""}</div><div class="nav-details"><div><div class="metric">${num(Math.max(0, nav.remaining) / 1000)} ${esc(t("km"))}</div><small>${esc(t("remaining"))}</small></div><div><div class="metric">≈ ${Math.max(1, Math.round(nav.duration / 60))} ${esc(t("minutes"))}</div><small>${esc(t("route"))}</small></div>${nav.completed ? button("rate", "rate-arrival", "", "primary small") : button("recenter", "recenter", "", "small")}${nav.routeError ? button("retry", "reroute", "", "small") : ""}${button("stop", "stop", "", "small danger")}</div></div>`;
}
async function reroute() {
  const nav = S.nav;
  if (!nav || nav.completed || nav.rerouting || S.position?.manual) return;
  nav.rerouting = true;
  nav.lastReroute = Date.now();
  try {
    const data = await api("navigation/reroute", "POST", {
      navigation_id: nav.id,
      ...S.position,
    });
    if (S.nav?.id !== nav.id) return;
    nav.route = prepareRoute(data.route);
    nav.routeError = false;
    nav.remaining = data.route.distance;
    nav.duration = data.route.duration;
    drawRoute(false);
    persistNavigation();
  } catch (error) {
    nav.routeError = true;
    toast(error.message, true);
  } finally {
    nav.rerouting = false;
    renderNavigation();
  }
}
async function updateNavigation() {
  const nav = S.nav,
    p = S.position;
  if (!nav || nav.completed || !p || p.manual) return;
  nav.gpsError = null;
  const nearest = pointOnRoute(p, nav.route);
  nav.remaining = Math.max(0, nav.route.distance - nearest.progress);
  nav.duration =
    nav.route.duration *
    (nav.route.distance ? nav.remaining / nav.route.distance : 0);
  const steps = nav.route.steps;
  let closestStep = 0,
    best = Infinity;
  for (let i = 0; i < steps.length; i++) {
    const loc = steps[i].maneuver?.location;
    if (loc) {
      const d = distance(p.lat, p.lng, loc[1], loc[0]);
      if (d < best) {
        best = d;
        closestStep = i;
      }
    }
  }
  nav.nextStep =
    steps[Math.min(steps.length - 1, closestStep + (best < 25 ? 1 : 0))];
  if (
    nearest.offset > Math.max(70, p.accuracy * 2) &&
    Date.now() - nav.lastReroute > 20000
  )
    reroute();
  const dist = distance(p.lat, p.lng, nav.station.lat, nav.station.lng);
  if (
    p.accuracy <= 60 &&
    dist <= Math.max(30, Math.min(80, p.accuracy + 15)) &&
    Date.now() - nav.started > 5000
  )
    nav.arrivals++;
  else nav.arrivals = 0;
  if (nav.arrivals >= 2 && !nav.arriving) {
    nav.arriving = true;
    try {
      await api("navigation/arrive", "POST", { navigation_id: nav.id, ...p });
      if (S.nav?.id !== nav.id) return;
      nav.completed = true;
      nav.remaining = 0;
      nav.duration = 0;
      if (S.watchId !== null) {
        navigator.geolocation.clearWatch(S.watchId);
        S.watchId = null;
      }
      toast(t("arrived"));
      showRating(nav.station.id, nav.id);
    } catch (error) {
      nav.arrivals = 0;
      if (error.code !== "arrival_unverified") onError(error);
    } finally {
      nav.arriving = false;
    }
  }
  renderNavigation();
  persistNavigation();
}
async function stopNavigation(showMessage = true) {
  const nav = S.nav;
  if (!nav) return;
  if (!nav.completed) {
    try {
      await api("navigation/stop", "POST", { navigation_id: nav.id });
    } catch (error) {
      if (error.code !== "navigation_missing") onError(error);
    }
  }
  if (S.watchId !== null) {
    navigator.geolocation.clearWatch(S.watchId);
    S.watchId = null;
  }
  if (S.routeLayer && S.map) {
    S.map.removeLayer(S.routeLayer);
    S.routeLayer = null;
  }
  S.nav = null;
  persistNavigation();
  renderNavigation();
  renderMarkers();
  if (showMessage) toast(t("navigation_finished"));
}
function openModal(type, title, content) {
  if (S.picker) {
    S.picker.remove();
    S.picker = null;
    S.pickerMarker = null;
  }
  S.modalType = type;
  $("modal-title").textContent = title;
  $("modal-content").innerHTML = content;
  if (!$("modal").open) $("modal").showModal();
  translateStatic();
}
function closeModal() {
  if (S.picker) {
    S.picker.remove();
    S.picker = null;
    S.pickerMarker = null;
  }
  $("modal").close();
  S.modalType = null;
  const after = S.afterModal;
  S.afterModal = null;
  if (after) after();
}
function openPicker(purpose) {
  S.pickerPurpose = purpose;
  S.pickerPoint =
    purpose === "station" && S.adminDraft?.lat != null
      ? { lat: S.adminDraft.lat, lng: S.adminDraft.lng }
      : null;
  openModal(
    "picker",
    t(purpose === "station" ? "select_location" : "manual_point"),
    `<p class="muted">${esc(t("manual_hint"))}</p><div class="search-field" style="width:100%;max-width:none"><input id="picker-query" placeholder="${esc(t("address"))}"><button class="btn small" data-action="picker-search">${icon("search")}</button></div><div id="picker-search-results"></div><div id="picker-map" class="picker-map"></div><p id="picker-coordinates" class="muted"></p><div class="row between">${button("cancel", "close-modal")}${button("save", "picker-save", S.pickerPoint ? "" : "disabled", "primary")}</div>`,
  );
  if (typeof L === "undefined") {
    $("picker-map").innerHTML =
      `<div class="empty">${esc(t("map_failed"))}</div>`;
    return;
  }
  requestAnimationFrame(() => {
    if (!$("modal").open || S.modalType !== "picker") return;
    S.picker = L.map("picker-map").setView(
      S.pickerPoint
        ? [S.pickerPoint.lat, S.pickerPoint.lng]
        : S.position
          ? [S.position.lat, S.position.lng]
          : [41.311081, 69.240562],
      13,
    );
    L.tileLayer(S.config[S.theme === "dark" ? "tile_dark" : "tile_light"], {
      maxZoom: 19,
      attribution: S.config.attribution,
    }).addTo(S.picker);
    S.picker.on("click", (e) => pickPoint(e.latlng.lat, e.latlng.lng));
    if (S.pickerPoint) pickPoint(S.pickerPoint.lat, S.pickerPoint.lng);
    S.picker.invalidateSize();
  });
}
function pickPoint(lat, lng) {
  S.pickerPoint = { lat, lng };
  if (S.pickerMarker) S.pickerMarker.setLatLng([lat, lng]);
  else {
    S.pickerMarker = L.marker([lat, lng], { draggable: true }).addTo(S.picker);
    S.pickerMarker.on("dragend", () => {
      const p = S.pickerMarker.getLatLng();
      pickPoint(p.lat, p.lng);
    });
  }
  $("picker-coordinates").textContent =
    `${t("latitude")}: ${lat.toFixed(6)} · ${t("longitude")}: ${lng.toFixed(6)}`;
  document.querySelector("[data-action=picker-save]").disabled = false;
}
async function savePicker() {
  if (!S.pickerPoint) return;
  const point = { ...S.pickerPoint },
    purpose = S.pickerPurpose;
  closeModal();
  if (purpose === "station") {
    const draft = S.adminDraft;
    draft.lat = point.lat;
    draft.lng = point.lng;
    draft.locationSaved = true;
    renderStationForm();
    toast(t("location_saved"));
    if (!draft.address) {
      try {
        const data = await api("geocode", "POST", { ...point, lang: S.lang });
        if (
          S.adminDraft === draft &&
          draft.lat === point.lat &&
          draft.lng === point.lng &&
          !draft.address
        ) {
          draft.address = data.result.display_name?.slice(0, 300) || "";
          if (S.page === "admin" && S.adminView === "edit") renderStationForm();
        }
      } catch {}
    }
  } else {
    if (S.nav && !S.nav.completed) await stopNavigation(false);
    S.position = {
      ...point,
      manual: true,
      timestamp: Date.now(),
      accuracy: null,
    };
    S.address = null;
    S.geoError = null;
    drawPosition();
    S.map?.setView([point.lat, point.lng], 15);
    renderLocation();
    updateAddress(true);
    loadStations();
    if (S.pending?.type === "start") {
      const id = S.pending.id;
      S.pending = null;
      await startNavigation(id);
    }
  }
}
async function pickerSearch() {
  const query = $("picker-query").value.trim();
  if (!query) return;
  try {
    const data = await api("geocode", "POST", { query, lang: S.lang });
    $("picker-search-results").innerHTML = data.result.length
      ? data.result
          .map(
            (v, i) =>
              `<button class="btn small full" style="text-align:left;justify-content:flex-start;margin-top:8px" data-action="picker-result" data-lat="${Number(v.lat)}" data-lng="${Number(v.lon)}">${esc(v.display_name)}</button>`,
          )
          .join("")
      : `<small>${esc(t("address_unknown"))}</small>`;
  } catch (error) {
    onError(error);
  }
}
async function stationDetail(id) {
  const query = new URLSearchParams({ lang: S.lang });
  if (S.position) {
    query.set("lat", S.position.lat);
    query.set("lng", S.position.lng);
  }
  const station = (await api("stations/" + id + "?" + query)).station;
  openModal(
    "detail",
    station.name,
    `<p class="muted">${esc(station.address)}</p><div class="row wrap" style="margin-bottom:15px">${station.categories.map((c) => `<span class="badge">${esc(t(c))}</span>`).join("")}<span class="badge ${station.open ? "open" : "closed"}">${esc(t(station.open ? "open" : "closed"))}</span></div><p>${esc(station.description)}</p>${station.categories.map((c) => priceHTML(station, c)).join("")}<p class="muted">${esc(t("hours"))}: ${esc(scheduleLabel(station))}<br>${esc(t("updated"))}: ${esc(date(station.updated_at))}<br>★ ${num(station.rating)} (${station.ratings_count}) · ${station.visits} ${esc(t("visits"))}</p><div class="row">${button("start", "detail-start", `data-id="${id}"`, "primary")}${button("rate", "rate-station", `data-id="${id}"`)}${button("close", "close-modal")}</div>`,
  );
}
function showRating(id, navId = null) {
  S.ratingContext = { id, navId };
  S.ratingStars = 0;
  openModal(
    "rating",
    t("arrived"),
    `<p class="muted">${esc(t("arrival_hint"))}</p><div class="stars-picker" role="group" aria-label="${esc(t("select_stars"))}">${[1, 2, 3, 4, 5].map((i) => `<button data-action="rating-star" data-stars="${i}" aria-label="${i} / 5">★</button>`).join("")}</div><div class="row">${button(S.user ? "save" : "sign_in", "rating-submit", "disabled", "primary full")}</div><p id="rating-error" class="form-error"></p>`,
  );
}
async function submitRating() {
  const context = S.ratingContext;
  if (!context || !S.ratingStars) return;
  if (!S.user) {
    S.pending = { type: "rate", ...context };
    closeModal();
    showLogin();
    return;
  }
  try {
    await api("ratings/" + context.id, "POST", {
      stars: S.ratingStars,
      navigation_id: context.navId,
    });
    closeModal();
    await loadFavorites();
    loadStations();
    toast(t("rating_saved"));
  } catch (error) {
    $("rating-error").textContent = error.message;
  }
}

function field(label, name, type = "text", value = "", extra = "") {
  return `<div class="field"><label for="f-${name}">${esc(t(label))}</label><input id="f-${name}" name="${name}" type="${type}" value="${esc(value)}" ${extra}></div>`;
}
function renderProfile() {
  let html = "";
  if (!S.user) {
    html =
      heading("account_needed", "account_needed_hint") +
      `<div class="content-narrow panel form-panel"><div class="tabs"><button class="tab ${S.authView === "login" ? "active" : ""}" data-action="auth-tab" data-view="login">${esc(t("sign_in"))}</button><button class="tab ${S.authView === "register" ? "active" : ""}" data-action="auth-tab" data-view="register">${esc(t("register"))}</button></div>${authForm()}</div>`;
  } else {
    const u = S.user;
    const summary = `<div class="panel profile-summary row">${avatarHTML(u)}<div class="grow"><h2 style="margin:0">${esc(u.first_name + " " + u.last_name)}</h2><span class="muted">@${esc(u.username)}</span></div>${button("sign_out", "logout", "", "small")}</div>`;
    let inner = "";
    if (S.profileView === "main") {
      inner = `<div class="profile-menu">${[
        ["account", "user", "account_hint"],
        ["support", "support", "support_hint"],
        ["telegram", "send", "telegram"],
        ["settings", "settings", "settings_hint"],
      ]
        .map(([name, sym, hint]) =>
          name === "telegram"
            ? `<a class="panel profile-option" href="https://t.me/WebShadoWin" target="_blank" rel="noopener noreferrer">${icon(sym)}<h3>${esc(t(name))}</h3><small>@WebShadoWin</small></a>`
            : `<button class="panel profile-option" data-action="profile-view" data-view="${name}">${icon(sym)}<h3>${esc(t(name))}</h3><small>${esc(t(hint))}</small></button>`,
        )
        .join(
          "",
        )}</div>${u.admin ? `<div style="margin-top:18px">${button("administrator", "admin", "", "primary full")}</div>` : ""}`;
    } else {
      inner = `<button class="back-link" data-action="profile-view" data-view="main">${icon("back")}${esc(t("back"))}</button><div class="panel form-panel"><h2>${esc(t(S.profileView))}</h2>${S.profileView === "account" ? accountForm() : S.profileView === "support" ? supportForm() : settingsForm()}</div>`;
    }
    html =
      heading("profile", "account_hint") +
      `<div class="content-narrow">${summary}${inner}</div>`;
  }
  $("page-profile").innerHTML = html;
  if (S.authView === "register" && !S.user) validateRegistration();
  if (S.user && S.profileView === "support") loadSupport().catch(onError);
}
function authForm() {
  if (S.authView === "recover") {
    return `<form id="recover-form">${field("username", "username", "text", "", 'required minlength="3" maxlength="30" autocomplete="username"')}${field("recovery_code", "recovery_code", "text", "", 'required maxlength="100" autocomplete="off"')}${field("new_password", "password", "password", "", 'required minlength="10" maxlength="128" autocomplete="new-password"')}<small>${esc(t("password_hint"))}</small><p class="form-error" id="auth-error"></p><button class="btn primary full" type="submit">${esc(t("recover"))}</button></form>`;
  }
  if (S.authView === "register") {
    return `<form id="register-form"><div class="form-grid">${field("first_name", "first_name", "text", "", 'required maxlength="50" autocomplete="given-name"')}${field("last_name", "last_name", "text", "", 'required maxlength="50" autocomplete="family-name"')}</div>${field("username", "username", "text", "", 'required pattern="[a-zA-Z0-9_.]{3,30}" minlength="3" maxlength="30" autocomplete="username"')}<small style="display:block;margin-top:-10px;margin-bottom:15px">${esc(t("username_hint"))}</small>${field("password", "password", "password", "", 'required minlength="10" maxlength="128" autocomplete="new-password"')}${field("confirm_password", "confirm_password", "password", "", 'required minlength="10" maxlength="128" autocomplete="new-password"')}<small>${esc(t("password_hint"))}</small><label class="check"><input name="confirmed" type="checkbox" required>${esc(t("confirmed"))}</label><p class="form-error" id="auth-error"></p><button class="btn primary full" id="register-button" type="submit" disabled>${esc(t("register"))}</button></form>`;
  }
  return `<form id="login-form">${field("username", "username", "text", "", 'required maxlength="30" autocomplete="username"')}${field("password", "password", "password", "", 'required maxlength="128" autocomplete="current-password"')}<p class="form-error" id="auth-error"></p><button class="btn primary full" type="submit">${esc(t("sign_in"))}</button><button class="filter-clear full" style="margin-top:15px" type="button" data-action="auth-tab" data-view="recover">${esc(t("forgot_password"))}</button></form>`;
}
function validateRegistration() {
  const form = $("register-form");
  if (!form) return;
  const d = new FormData(form);
  const valid =
    form.checkValidity() &&
    d.get("password") === d.get("confirm_password") &&
    !/^\d+$/.test(d.get("password") || "");
  $("register-button").disabled = !valid;
}
function accountForm() {
  return `<div class="row wrap" style="margin:15px 0 25px">${avatarHTML(S.user)}<label class="btn small">${esc(t("upload_photo"))}<input type="file" id="avatar-input" accept="image/jpeg,image/png,image/webp" hidden></label><small>${esc(t("photo_hint"))}</small></div><form id="account-form">${field("username", "account_username", "text", S.user.username, "readonly")}<div class="form-grid">${field("first_name", "first_name", "text", S.user.first_name, 'required maxlength="50"')}${field("last_name", "last_name", "text", S.user.last_name, 'required maxlength="50"')}</div><button class="btn primary" type="submit">${esc(t("save"))}</button></form><hr style="border:0;border-top:1px solid var(--line);margin:27px 0"><h3>${esc(t("change_password"))}</h3><form id="password-form">${field("current_password", "current_password", "password", "", 'required autocomplete="current-password"')}${field("new_password", "password", "password", "", 'required minlength="10" maxlength="128" autocomplete="new-password"')}<small>${esc(t("password_hint"))}</small><div style="margin-top:16px"><button class="btn primary" type="submit">${esc(t("change_password"))}</button><button class="btn" style="margin-top:8px" type="button" data-action="new-recovery">${esc(t("new_recovery"))}</button></div><p class="form-error" id="account-error"></p></form>`;
}
function supportForm() {
  return `<form id="support-form"><div class="field"><label for="support-message">${esc(t("message"))}</label><textarea id="support-message" name="message" required maxlength="4000"></textarea></div><button class="btn primary" type="submit">${esc(t("send"))}</button><p class="form-error" id="support-error"></p></form><h3 style="margin:30px 0 15px">${esc(t("my_requests"))}</h3><div id="support-items"><span class="spinner"></span></div>`;
}
async function loadSupport() {
  const data = await api("support");
  const el = $("support-items");
  if (!el) return;
  el.innerHTML = data.items.length
    ? data.items
        .map(
          (ticket) =>
            `<div class="ticket"><div class="row between"><span class="badge">${esc(t(ticket.status))}</span><small>${esc(date(ticket.created_at))}</small></div><p style="margin-top:13px">${esc(ticket.message)}</p>${ticket.reply ? `<div class="alert"><b>${esc(t("reply"))}</b><p style="margin:5px 0 0">${esc(ticket.reply)}</p></div>` : ""}</div>`,
        )
        .join("")
    : `<small>${esc(t("no_requests"))}</small>`;
}
function settingsForm() {
  return `<div class="setting-row"><div><b>${esc(t("theme"))}</b><div><small>${esc(t("settings_hint"))}</small></div></div><div class="choice-row">${button("light", "set-theme", `data-theme="light"`, S.theme === "light" ? "soft" : "")}${button("dark", "set-theme", `data-theme="dark"`, S.theme === "dark" ? "soft" : "")}</div></div><div class="setting-row"><b>${esc(t("language"))}</b><div class="choice-row">${[
    ["uz", "UZB"],
    ["ru", "RU"],
    ["en", "ENG"],
  ]
    .map(
      ([lang, label]) =>
        `<button class="btn ${S.lang === lang ? "soft" : ""}" data-action="set-lang" data-lang="${lang}">${label}</button>`,
    )
    .join("")}</div></div>`;
}
async function applySettings(lang = S.lang, theme = S.theme) {
  const changed = lang !== S.lang;
  if (S.adminView === "edit" && $("station-form")) collectStationDraft();
  S.lang = lang;
  S.theme = theme;
  try {
    localStorage.setItem("gef_lang", lang);
    localStorage.setItem("gef_theme", theme);
  } catch {}
  if (changed) {
    clearTimeout(toastTimer);
    $("toast").classList.add("hidden");
    S.chat = [];
    S.chatBusy = false;
    S.chatEpoch = (S.chatEpoch || 0) + 1;
  }
  translateStatic();
  renderNav();
  renderCategories();
  renderResults();
  renderLocation();
  renderNavigation();
  setTile();
  if (S.page === "profile") renderProfile();
  if (S.page === "ai") renderChat();
  if (S.page === "admin") {
    if (S.adminView === "edit") renderStationForm();
    else renderAdmin();
  }
  if (S.modalType) closeModal();
  try {
    if (S.user) {
      const r = await api("settings", "PATCH", { lang, theme });
      S.user = r.user;
    }
    await loadFavorites();
    await loadStations();
    if (changed && S.position) {
      S.address = null;
      updateAddress(true);
    }
  } catch (error) {
    onError(error);
  }
}
async function handleAuth(form, type) {
  const data = Object.fromEntries(new FormData(form));
  if (type === "register") {
    data.confirmed = form.elements.confirmed.checked;
    data.lang = S.lang;
    data.theme = S.theme;
  }
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  $("auth-error").textContent = "";
  try {
    const result = await api("auth/" + type, "POST", data);
    S.user = result.user;
    S.lang = S.user.lang;
    S.theme = S.user.theme;
    S.profileView = "main";
    translateStatic();
    renderNav();
    setTile();
    await loadFavorites();
    renderProfile();
    renderCategories();
    loadStations();
    if (result.recovery_code) {
      showRecovery(result.recovery_code);
      S.afterModal = () => resumePending();
    } else await resumePending();
  } catch (error) {
    if ($("auth-error")) $("auth-error").textContent = error.message;
    else onError(error);
  } finally {
    if (btn.isConnected) btn.disabled = false;
    if (type === "register") validateRegistration();
  }
}
function showRecovery(code) {
  openModal(
    "recovery",
    t("recovery_code"),
    `<div class="alert">${esc(t("recovery_notice"))}</div><p class="recovery-code">${esc(code)}</p>${button("close", "close-modal", "", "primary full")}`,
  );
}
async function resumePending() {
  const pending = S.pending;
  S.pending = null;
  if (!pending) return;
  if (pending.type === "favorite") await toggleFavorite(pending.id);
  if (pending.type === "start") await startNavigation(pending.id);
  if (pending.type === "rate") showRating(pending.id, pending.navId);
}
function renderChat() {
  const mode = S.config?.ai_mode;
  let messages = S.chat
    .map((item) =>
      item.role === "user"
        ? `<div class="chat-bubble user">${esc(item.text)}</div>`
        : `<div><div class="chat-bubble assistant">${esc(item.answer)}</div><small style="display:block;margin:5px 0">${esc(t(item.mode === "provider" ? "provider_helper" : "local_helper"))}${item.provider_error ? " · " + esc(t("provider_fallback")) : ""}</small>${item.stations?.length ? `<div class="chat-cards">${item.stations.map((station) => `<div class="chat-card"><b>${esc(station.name)}</b><p class="muted">${esc(station.address)}</p>${priceHTML(station, item.category)}<small>${esc(t("updated"))}: ${esc(date(station.updated_at))}</small><div style="margin-top:10px">${button("start", "start", `data-id="${station.id}"`, "primary small")}</div></div>`).join("")}</div>` : ""}</div>`,
    )
    .join("");
  $("page-ai").innerHTML =
    heading("ai_title", "ai_subtitle") +
    `<div class="panel chat-panel"><div class="row between" style="margin-bottom:16px"><div class="badge">${icon("spark")}${esc(t(mode === "provider" ? "provider_helper" : "local_helper"))}</div><small>GEF_system</small></div>${!S.chat.length ? `<div class="chat-intro"><div class="chat-orb">${icon("spark")}</div><h2>${esc(t("ai_intro"))}</h2><p class="muted">${esc(t("ai_intro_text"))}</p><div class="suggestions">${["q_cheap", "q_near", "q_ev"].map((q) => button(q, "ask", `data-question="${q}"`, "small")).join("")}</div></div>` : ""}<div class="chat-messages" id="chat-messages">${messages}${S.chatBusy ? `<div class="chat-bubble assistant row"><span class="spinner"></span>${esc(t("thinking"))}</div>` : ""}</div>${S.chatError ? `<div class="alert error" style="margin-bottom:12px">${esc(S.chatError)} ${button("retry", "retry-chat", "", "small")}</div>` : ""}<form id="chat-form" class="chat-compose"><textarea name="message" maxlength="2000" rows="1" placeholder="${esc(t("chat_placeholder"))}" aria-label="${esc(t("chat_placeholder"))}" required ${S.chatBusy ? "disabled" : ""}></textarea><button class="btn primary" type="submit" ${S.chatBusy ? "disabled" : ""} aria-label="${esc(t("send"))}">${icon("send")}</button></form></div>`;
}
async function ask(question, retry = false) {
  if (S.chatBusy || !question?.trim()) return;
  question = question.trim().slice(0, 2000);
  S.lastQuestion = question;
  S.chatError = null;
  if (!retry) S.chat.push({ role: "user", text: question });
  S.chatBusy = true;
  const epoch = S.chatEpoch || 0;
  renderChat();
  try {
    const result = await api("assistant?lang=" + S.lang, "POST", {
      message: question,
      lang: S.lang,
      category: S.category,
      grade: S.grade,
      ...(S.position || {}),
    });
    if ((S.chatEpoch || 0) !== epoch) return;
    S.chat.push({ role: "assistant", ...result });
  } catch (error) {
    if ((S.chatEpoch || 0) !== epoch) return;
    S.chatError = error.message;
  } finally {
    if ((S.chatEpoch || 0) === epoch) {
      S.chatBusy = false;
      if (S.page === "ai") {
        renderChat();
        $("chat-form")?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }
}

async function loadAdmin() {
  if (!S.user?.admin) return;
  if (S.adminView === "edit") {
    renderStationForm();
    return;
  }
  const result = await api("admin/" + S.adminView + "?lang=" + S.lang);
  S.adminRows = result.items;
  renderAdmin();
}
function adminHeading() {
  return (
    heading("admin_title", "admin_subtitle") +
    `<div class="admin-tabs">${["stations", "users", "support"].map((view) => button(view, "admin-view", `data-view="${view}"`, S.adminView === view ? "soft" : "")).join("")}</div>`
  );
}
function renderAdmin() {
  if (S.adminView === "edit") {
    renderStationForm();
    return;
  }
  let inner = "";
  if (S.adminView === "stations") {
    let rows = S.adminRows.filter(
      (s) =>
        (!S.adminSearch ||
          (s.name + " " + s.address)
            .toLowerCase()
            .includes(S.adminSearch.toLowerCase())) &&
        (S.adminCategory === "all" || s.categories.includes(S.adminCategory)) &&
        (S.adminStatus === "all" ||
          s.published === (S.adminStatus === "published")),
    );
    inner = `<div class="admin-toolbar"><div class="search-field"><input id="admin-search" value="${esc(S.adminSearch)}" placeholder="${esc(t("search_stations"))}">${icon("search")}</div><select id="admin-category" class="grade-select">${["all", "fuel", "metan", "propan", "elektr"].map((c) => `<option value="${c}" ${S.adminCategory === c ? "selected" : ""}>${esc(t(c))}</option>`).join("")}</select><select id="admin-status" class="grade-select">${["all", "published", "draft"].map((c) => `<option value="${c}" ${S.adminStatus === c ? "selected" : ""}>${esc(t(c))}</option>`).join("")}</select><button class="btn primary" data-action="add-station">${icon("plus")}${esc(t("add_station"))}</button></div><div class="panel table-wrap"><table class="data-table"><thead><tr><th>${esc(t("station_name"))}</th><th>${esc(t("category"))}</th><th>${esc(t("status"))}</th><th>${esc(t("visits"))} / ★</th><th>${esc(t("updated"))}</th><th></th></tr></thead><tbody>${rows.map((s) => `<tr><td><b>${esc(s.name)}</b><br><small>${esc(s.address)}</small>${s.demo ? ` <span class="badge demo">${esc(t("demo"))}</span>` : ""}</td><td>${s.categories.map((c) => esc(t(c))).join(", ")}</td><td><span class="badge ${s.published ? "open" : ""}">${esc(t(s.published ? "published" : "draft"))}</span></td><td>${s.visits} / ${num(s.rating)}</td><td>${esc(date(s.updated_at))}</td><td><div class="row">${button("view", "edit-station", `data-id="${s.id}"`, "small")}${button("history", "station-history", `data-id="${s.id}"`, "small")}<button class="icon-btn" data-action="delete-station" data-id="${s.id}" aria-label="${esc(t("delete"))}">${icon("trash")}</button></div></td></tr>`).join("") || `<tr><td colspan="6">${esc(t("no_records"))}</td></tr>`}</tbody></table></div>`;
  } else if (S.adminView === "users") {
    inner = `<div class="panel table-wrap"><table class="data-table"><thead><tr>${["username", "first_name", "registered", "last_login", "role", "activity"].map((k) => `<th>${esc(t(k))}</th>`).join("")}</tr></thead><tbody>${S.adminRows.map((u) => `<tr><td><b>@${esc(u.username)}</b></td><td>${esc(u.first_name + " " + u.last_name)}</td><td>${esc(date(u.registered))}</td><td>${esc(date(u.last_login))}</td><td><span class="badge">${esc(t(u.role === "admin" ? "administrator" : "user"))}</span></td><td>${u.visits} ${esc(t("visits"))} · ${u.ratings} ${esc(t("ratings"))}<br>${button("view", "user-activity", `data-id="${u.id}"`, "small")}</td></tr>`).join("") || `<tr><td colspan="6">${esc(t("no_records"))}</td></tr>`}</tbody></table></div>`;
  } else {
    inner = `<div class="stack">${S.adminRows.map((ticket) => `<div class="panel form-panel"><div class="row between"><b>@${esc(ticket.username)}</b><small>${esc(date(ticket.created_at))}</small></div><p style="white-space:pre-wrap;margin:16px 0">${esc(ticket.message)}</p><form class="ticket-update" data-id="${ticket.id}"><div class="form-grid"><div class="field"><label>${esc(t("status"))}</label><select name="status">${["new", "review", "resolved"].map((status) => `<option value="${status}" ${ticket.status === status ? "selected" : ""}>${esc(t(status))}</option>`).join("")}</select></div><div class="field"><label>${esc(t("reply"))}</label><textarea name="reply" maxlength="3000">${esc(ticket.reply)}</textarea></div></div><button class="btn primary small" type="submit">${esc(t("save"))}</button></form></div>`).join("") || empty("no_requests", null, null)}</div>`;
  }
  $("page-admin").innerHTML = adminHeading() + inner;
}
function defaultProduct(category) {
  return {
    category,
    grade: category === "fuel" ? "AI-80" : "",
    price: null,
    unit: { fuel: "l", metan: "m³", propan: "l", elektr: "kWh" }[category],
    available: true,
    pressure: null,
    pressure_unit: "bar",
    measured_at: null,
    power_kw: null,
    connectors: "",
  };
}
function editStation(id = null) {
  let s = id ? S.adminRows.find((x) => x.id === id) : null;
  S.adminDraft = s
    ? JSON.parse(JSON.stringify(s))
    : {
        name: "",
        address: "",
        description: "",
        localized: {},
        lat: null,
        lng: null,
        published: false,
        demo: false,
        temporarily_closed: false,
        schedule: {
          "24h": true,
          days: Object.fromEntries(
            [0, 1, 2, 3, 4, 5, 6].map((i) => [i, ["08:00", "22:00"]]),
          ),
        },
        categories: ["fuel"],
        products: [defaultProduct("fuel")],
      };
  S.adminDraft.locationSaved = !!s;
  S.adminView = "edit";
  renderStationForm();
  window.scrollTo({ top: 0, behavior: "instant" });
}
function measuredInput(iso) {
  if (!iso) return "";
  let d = new Date(new Date(iso).getTime() + 5 * 3600000);
  return d.toISOString().slice(0, 16);
}
function productInput(label, key, value, extra = "") {
  return `<div class="field"><label>${esc(t(label))}</label><input data-field="${key}" value="${esc(value ?? "")}" ${extra}></div>`;
}
function serviceEditor(category) {
  let products = S.adminDraft.products.filter((p) => p.category === category);
  if (!products.length) products = [defaultProduct(category)];
  if (category === "fuel")
    return `<div class="service-editor" data-service="fuel"><h3>${esc(t("fuel"))}</h3><small>${esc(t("petrol_grade"))} / ${esc(t("price"))} (${esc(t("sum"))}/l) / ${esc(t("available"))}</small>${products.map((p, i) => `<div class="fuel-row" data-fuel-product><input data-field="grade" value="${esc(p.grade)}" required maxlength="30" aria-label="${esc(t("petrol_grade"))}"><input data-field="price" type="number" min="0" step="0.01" max="999999999999.99" value="${esc(p.price ?? "")}" aria-label="${esc(t("price"))}"><select data-field="available" aria-label="${esc(t("available"))}"><option value="1" ${p.available ? "selected" : ""}>${esc(t("available"))}</option><option value="0" ${!p.available ? "selected" : ""}>${esc(t("unavailable"))}</option></select><button type="button" class="icon-btn" data-action="remove-grade" data-index="${i}" aria-label="${esc(t("delete"))}">${icon("close")}</button></div>`).join("")}${button("add_grade", "add-grade", 'type="button"', "small")}</div>`;
  let p = products[0];
  return `<div class="service-editor" data-service="${category}"><h3>${esc(t(category))}</h3><div class="form-grid">${productInput("price", "price", p.price, 'type="number" min="0" step="0.01" max="999999999999.99"')}<div class="field"><label>${esc(t("unit"))}</label><select data-field="unit">${(category === "metan" ? ["m³", "kg"] : category === "propan" ? ["l", "kg"] : ["kWh"]).map((unit) => `<option ${p.unit === unit ? "selected" : ""}>${unit}</option>`).join("")}</select></div></div>${["metan", "propan"].includes(category) ? `<div class="form-grid">${productInput("pressure", "pressure", p.pressure, 'type="number" min="0" step="0.01" max="9999999999.99"')}<div class="field"><label>${esc(t("pressure_unit"))}</label><select data-field="pressure_unit">${["bar", "MPa", "kPa", "psi"].map((unit) => `<option ${p.pressure_unit === unit ? "selected" : ""}>${unit}</option>`).join("")}</select></div></div>${productInput("measured_time", "measured_at", measuredInput(p.measured_at), 'type="datetime-local"')}<small>UTC+5 · ${esc(t("unknown"))}: ${esc(t("pressure"))} —</small>` : `<div class="form-grid">${productInput("power", "power_kw", p.power_kw, 'type="number" min="0" step="0.01" max="9999999.99"')}${productInput("connectors", "connectors", p.connectors, 'maxlength="200"')}</div>`}<label class="check"><input data-field="available" type="checkbox" ${p.available ? "checked" : ""}>${esc(t("available"))}</label></div>`;
}
function renderStationForm() {
  const d = S.adminDraft;
  if (!d) return;
  $("page-admin").innerHTML =
    adminHeading() +
    `<button class="back-link" data-action="admin-view" data-view="stations">${icon("back")}${esc(t("back"))}</button><div class="panel form-panel"><h2>${esc(t(d.id ? "edit_station" : "add_station"))}</h2><form id="station-form">${field("station_name", "name", "text", d.name, 'required maxlength="150"')}${field("address", "address", "text", d.address, 'required maxlength="300"')}<div class="field"><label>${esc(t("description"))}</label><textarea name="description" maxlength="3000">${esc(d.description)}</textarea></div><h3>${esc(t("category"))}</h3><div class="row wrap">${["fuel", "metan", "propan", "elektr"].map((c) => `<label class="check"><input name="service" type="checkbox" value="${c}" ${d.categories.includes(c) ? "checked" : ""}>${esc(t(c))}</label>`).join("")}</div>${d.categories.map((c) => serviceEditor(c)).join("")}<h3 style="margin-top:24px">${esc(t("hours"))}</h3><label class="check"><input name="all_day" type="checkbox" ${d.schedule["24h"] ? "checked" : ""}>${esc(t("all_day"))}</label><div id="schedule-fields" class="${d.schedule["24h"] ? "hidden" : ""}">${[
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat",
      "sun_day",
    ]
      .map((day, i) => {
        const times = d.schedule.days?.[String(i)];
        return `<div class="schedule-row"><label><input name="day${i}" type="checkbox" ${times ? "checked" : ""}>${esc(t(day))}</label><input type="time" name="open${i}" value="${times?.[0] || "08:00"}" aria-label="${esc(t("hours"))}"><input type="time" name="close${i}" value="${times?.[1] || "22:00"}" aria-label="${esc(t("hours"))}"></div>`;
      })
      .join(
        "",
      )}</div><label class="check"><input name="temporarily_closed" type="checkbox" ${d.temporarily_closed ? "checked" : ""}>${esc(t("temporary_closed"))}</label><label class="check"><input name="demo" type="checkbox" ${d.demo ? "checked" : ""}>${esc(t("demo_notice"))}</label><details class="localization"><summary>${esc(t("localized_text"))}</summary>${["ru", "en"].map((lang) => `<h3>${lang.toUpperCase()}</h3>${field("station_name", "name_" + lang, "text", d.localized?.[lang]?.name || "", 'maxlength="150"')}${field("address", "address_" + lang, "text", d.localized?.[lang]?.address || "", 'maxlength="300"')}<div class="field"><label>${esc(t("description"))}</label><textarea name="description_${lang}" maxlength="3000">${esc(d.localized?.[lang]?.description || "")}</textarea></div>`).join("")}</details><div class="admin-location"><div class="row between wrap"><div><b>${esc(t("select_location"))}</b><p class="muted" style="font-size:12px;margin:8px 0 0">${d.locationSaved ? `${t("latitude")}: ${Number(d.lat).toFixed(6)} · ${t("longitude")}: ${Number(d.lng).toFixed(6)}` : esc(t("location_required_form"))}</p></div>${button("select_location", "station-picker", 'type="button"', "soft")}</div></div><p class="form-error" id="station-error"></p><div class="row wrap"><button class="btn primary" type="submit" id="publish-button" disabled>${esc(t("publish"))}</button><button class="btn" type="button" id="draft-button" data-action="save-draft" disabled>${esc(t("save_draft"))}</button>${button("cancel", "admin-view", 'type="button" data-view="stations"')}</div></form></div>`;
  validateStationForm();
}
function collectStationDraft() {
  const form = $("station-form"),
    d = S.adminDraft;
  if (!form || !d) return;
  const data = new FormData(form);
  d.name = data.get("name")?.trim() || "";
  d.address = data.get("address")?.trim() || "";
  d.description = data.get("description") || "";
  d.categories = data.getAll("service");
  d.temporarily_closed = form.elements.temporarily_closed.checked;
  d.demo = form.elements.demo.checked;
  d.schedule = { "24h": form.elements.all_day.checked, days: {} };
  for (let i = 0; i < 7; i++)
    if (form.elements["day" + i].checked)
      d.schedule.days[i] = [data.get("open" + i), data.get("close" + i)];
  d.localized = {};
  for (let lang of ["ru", "en"])
    d.localized[lang] = {
      name: data.get("name_" + lang) || "",
      address: data.get("address_" + lang) || "",
      description: data.get("description_" + lang) || "",
    };
  const products = [];
  for (let cat of d.categories) {
    const group = form.querySelector(`[data-service="${cat}"]`);
    if (!group) {
      products.push(defaultProduct(cat));
      continue;
    }
    if (cat === "fuel") {
      group
        .querySelectorAll("[data-fuel-product]")
        .forEach((row) =>
          products.push({
            category: "fuel",
            grade: row.querySelector("[data-field=grade]").value.trim(),
            price: row.querySelector("[data-field=price]").value || null,
            unit: "l",
            available:
              row.querySelector("[data-field=available]").value === "1",
          }),
        );
    } else {
      let p = defaultProduct(cat);
      group.querySelectorAll("[data-field]").forEach((input) => {
        p[input.dataset.field] =
          input.type === "checkbox" ? input.checked : input.value || null;
      });
      if (p.measured_at)
        p.measured_at = new Date(p.measured_at + ":00+05:00").toISOString();
      products.push(p);
    }
  }
  d.products = products;
}
function validateStationForm() {
  const form = $("station-form");
  if (!form) return;
  collectStationDraft();
  const d = S.adminDraft;
  const schedule = d.schedule["24h"] || Object.keys(d.schedule.days).length > 0;
  let valid =
    form.checkValidity() &&
    d.locationSaved &&
    d.categories.length > 0 &&
    schedule &&
    d.products.length > 0;
  const seen = new Set();
  for (const p of d.products) {
    const key = p.category + ":" + (p.grade || "");
    if (
      seen.has(key) ||
      (p.category === "fuel" && !p.grade) ||
      (p.pressure != null && !p.measured_at)
    )
      valid = false;
    seen.add(key);
  }
  for (const hours of Object.values(d.schedule.days))
    if (hours[0] === hours[1]) valid = false;
  $("publish-button").disabled = !valid;
  $("draft-button").disabled = !valid;
}
async function publishStation(published = true) {
  collectStationDraft();
  const d = S.adminDraft;
  const data = {
    name: d.name,
    address: d.address,
    description: d.description,
    localized: d.localized,
    lat: d.lat,
    lng: d.lng,
    schedule: d.schedule,
    products: d.products,
    published,
    demo: d.demo,
    temporarily_closed: d.temporarily_closed,
  };
  $("publish-button").disabled = true;
  $("draft-button").disabled = true;
  try {
    await api(
      "admin/stations" + (d.id ? "/" + d.id : ""),
      d.id ? "PUT" : "POST",
      data,
    );
    S.adminDraft = null;
    S.adminView = "stations";
    await loadAdmin();
    loadStations();
    await loadFavorites();
    toast(t(published ? "station_published" : "draft_saved"));
  } catch (error) {
    if ($("station-error")) {
      $("station-error").textContent = error.message;
      validateStationForm();
    } else onError(error);
  }
}
async function deleteStation(id) {
  if (!confirm(t("delete_confirm"))) return;
  await api("admin/stations/" + id, "DELETE");
  await loadAdmin();
  loadStations();
  await loadFavorites();
  toast(t("deleted"));
}
async function stationHistory(id) {
  const data = await api("admin/stations/" + id + "/history");
  openModal(
    "history",
    t("history"),
    data.items.length
      ? data.items
          .map(
            (row) =>
              `<div class="ticket"><b>${esc(t(row.action))}</b> · ${esc(row.actor || t("demo"))}<small style="display:block">${esc(date(row.at))}</small><p style="margin:14px 0 8px"><b>${esc(row.snapshot.name)}</b><br>${esc(row.snapshot.address)}<br>${esc(t("status"))}: ${esc(t(row.snapshot.published ? "published" : "draft"))}<br>${esc(t("hours"))}: ${
                row.snapshot.schedule?.["24h"]
                  ? "24/7"
                  : Object.entries(row.snapshot.schedule?.days || {})
                      .map(
                        ([day, hours]) =>
                          esc(
                            t(
                              [
                                "mon",
                                "tue",
                                "wed",
                                "thu",
                                "fri",
                                "sat",
                                "sun_day",
                              ][Number(day)],
                            ),
                          ) +
                          ": " +
                          esc(hours.join(" – ")),
                      )
                      .join(", ")
              }</p>${(row.snapshot.products || []).map((p) => `<p style="margin:7px 0">${esc(p.grade || t(p.category))}: ${num(p.price)} ${esc(t("sum"))}/${esc(p.unit)} · ${esc(t(p.available === false ? "unavailable" : "available"))}${["metan", "propan"].includes(p.category) ? ` · ${esc(t("pressure"))}: ${num(p.pressure)} ${esc(p.pressure_unit || "bar")}` : ""}</p>`).join("")}<small>${esc(t("latitude"))}: ${row.snapshot.lat} · ${esc(t("longitude"))}: ${row.snapshot.lng}</small></div>`,
          )
          .join("")
      : `<p>${esc(t("no_records"))}</p>`,
  );
}
async function userActivity(id) {
  const data = await api("admin/users/" + id);
  openModal(
    "activity",
    t("activity") + " · @" + data.user.username,
    `<h3>${esc(t("ratings"))}</h3>${data.ratings.map((r) => `<p>${esc(r.station)} · ★ ${r.stars} · <small>${esc(date(r.at))}</small></p>`).join("") || `<small>${esc(t("no_records"))}</small>`}<h3 style="margin-top:20px">${esc(t("visits"))}</h3>${data.visits.map((v) => `<p>${esc(v.station)} · <small>${esc(date(v.at))}</small></p>`).join("") || `<small>${esc(t("no_records"))}</small>`}<h3 style="margin-top:20px">${esc(t("support"))}</h3>${data.support.map((v) => `<p>${esc(v.message)} · ${esc(t(v.status))}</p>`).join("") || `<small>${esc(t("no_records"))}</small>`}`,
  );
}

const ACTIONS = {
  page: (el) => setPage(el.dataset.page),
  "go-home": () => setPage("home"),
  login: () => showLogin(),
  category: async (el) => {
    S.category = el.dataset.category;
    S.pageNo = 1;
    renderCategories();
    await loadStations(true);
  },
  sort: async (el) => {
    if (el.dataset.sort === "distance" && !S.position) {
      toast(t("location_required"), true);
      openPicker("origin");
      return;
    }
    S.sort = S.sort === el.dataset.sort ? "default" : el.dataset.sort;
    S.pageNo = 1;
    renderCategories();
    await loadStations(true);
  },
  open: async () => {
    S.open = !S.open;
    S.pageNo = 1;
    renderCategories();
    await loadStations(true);
  },
  clear: async () => {
    S.sort = "default";
    S.open = false;
    S.search = "";
    S.pageNo = 1;
    $("station-search").value = "";
    renderCategories();
    await loadStations(true);
  },
  "retry-stations": () => loadStations(true),
  "prev-page": async () => {
    S.pageNo = Math.max(1, S.pageNo - 1);
    await loadStations(true);
    $("results-title").scrollIntoView({ block: "start", behavior: "smooth" });
  },
  "next-page": async () => {
    S.pageNo++;
    await loadStations(true);
    $("results-title").scrollIntoView({ block: "start", behavior: "smooth" });
  },
  favorite: (el) => toggleFavorite(Number(el.dataset.id)),
  "remove-favorite": (el) => toggleFavorite(Number(el.dataset.id), true),
  "select-station": async (el) => {
    let id = Number(el.dataset.id);
    S.selected = id;
    if (S.page === "favorites") {
      const s = S.favorites.find((s) => s.id === id);
      openModal(
        "favorite",
        s.name,
        `<p class="muted">${esc(s.address)}</p><div class="row between">${button("delete", "modal-remove-favorite", `data-id="${id}"`, "danger")}${button("start", "detail-start", `data-id="${id}"`, "primary")}</div>`,
      );
    } else await startNavigation(id);
  },
  "modal-remove-favorite": async (el) => {
    closeModal();
    await toggleFavorite(Number(el.dataset.id), true);
  },
  "station-detail": (el) => stationDetail(Number(el.dataset.id)),
  start: (el) => startNavigation(Number(el.dataset.id)),
  "detail-start": async (el) => {
    closeModal();
    await startNavigation(Number(el.dataset.id));
  },
  "retry-route": async (el) => {
    closeModal();
    await startNavigation(Number(el.dataset.id));
  },
  locate: () => locate(),
  manual: () => openPicker("origin"),
  "retry-map": () => retryMap(),
  stop: () => stopNavigation(),
  recenter: () => {
    S.follow = true;
    setPage("home");
    if (S.position)
      S.map?.setView([S.position.lat, S.position.lng], 16, { animate: true });
    renderNavigation();
  },
  reroute: () => reroute(),
  "close-modal": () => closeModal(),
  "picker-save": () => savePicker(),
  "picker-search": () => pickerSearch(),
  "picker-result": (el) => {
    const lat = Number(el.dataset.lat),
      lng = Number(el.dataset.lng);
    if (S.picker) {
      pickPoint(lat, lng);
      S.picker.setView([lat, lng], 16);
    }
  },
  "rate-arrival": () => showRating(S.nav.station.id, S.nav.id),
  "rate-station": (el) => {
    const id = Number(el.dataset.id);
    showRating(
      id,
      S.nav?.station.id === id && S.nav.completed ? S.nav.id : null,
    );
  },
  "rating-star": (el) => {
    S.ratingStars = Number(el.dataset.stars);
    document.querySelectorAll("[data-action=rating-star]").forEach((btn) => {
      btn.classList.toggle(
        "active",
        Number(btn.dataset.stars) <= S.ratingStars,
      );
      btn.setAttribute(
        "aria-pressed",
        Number(btn.dataset.stars) === S.ratingStars,
      );
    });
    document.querySelector("[data-action=rating-submit]").disabled = false;
  },
  "rating-submit": () => submitRating(),
  theme: () => applySettings(S.lang, S.theme === "light" ? "dark" : "light"),
  "set-theme": (el) => applySettings(S.lang, el.dataset.theme),
  "set-lang": (el) => applySettings(el.dataset.lang, S.theme),
  "auth-tab": (el) => {
    S.authView = el.dataset.view;
    renderProfile();
  },
  "profile-view": (el) => {
    S.profileView = el.dataset.view;
    renderProfile();
  },
  logout: async () => {
    await stopNavigation(false);
    await api("auth/logout", "POST");
    S.user = null;
    S.pending = null;
    S.favoriteIds = new Set();
    S.favorites = [];
    S.authView = "login";
    S.profileView = "main";
    renderNav();
    renderProfile();
    renderResults();
  },
  "new-recovery": async () => {
    const form = $("password-form");
    const code = (
      await api("profile/recovery", "POST", {
        current_password: form.elements.current_password.value,
      })
    ).recovery_code;
    showRecovery(code);
  },
  ask: (el) => ask(t(el.dataset.question)),
  "retry-chat": () => ask(S.lastQuestion, true),
  admin: () => {
    S.adminView = "stations";
    setPage("admin");
  },
  "admin-view": async (el) => {
    S.adminView = el.dataset.view;
    S.adminDraft = null;
    await loadAdmin();
  },
  "add-station": () => editStation(),
  "edit-station": (el) => editStation(Number(el.dataset.id)),
  "delete-station": (el) => deleteStation(Number(el.dataset.id)),
  "station-picker": () => {
    collectStationDraft();
    openPicker("station");
  },
  "save-draft": () => publishStation(false),
  "add-grade": () => {
    collectStationDraft();
    S.adminDraft.products.push({ ...defaultProduct("fuel"), grade: "" });
    renderStationForm();
  },
  "remove-grade": (el) => {
    collectStationDraft();
    const fuel = S.adminDraft.products.filter((p) => p.category === "fuel");
    if (fuel.length <= 1) return;
    let index = Number(el.dataset.index);
    S.adminDraft.products = S.adminDraft.products.filter(
      (p) => p !== fuel[index],
    );
    renderStationForm();
  },
  "station-history": (el) => stationHistory(Number(el.dataset.id)),
  "user-activity": (el) => userActivity(Number(el.dataset.id)),
};
document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el || el.disabled) return;
  const action = ACTIONS[el.dataset.action];
  if (!action) return;
  event.preventDefault();
  Promise.resolve()
    .then(() => action(el))
    .catch(onError);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches(".station-card")) {
    event.preventDefault();
    event.target.click();
  }
  if (
    event.target.matches("#chat-form textarea") &&
    event.key === "Enter" &&
    !event.shiftKey
  ) {
    event.preventDefault();
    $("chat-form").requestSubmit();
  }
  if (event.target.id === "picker-query" && event.key === "Enter") {
    event.preventDefault();
    pickerSearch().catch(onError);
  }
});
let searchDebounce;
document.addEventListener("input", (event) => {
  if (event.target.closest("#register-form")) validateRegistration();
  if (event.target.id === "station-search") {
    S.search = event.target.value;
    S.pageNo = 1;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => loadStations(), 350);
  }
  if (event.target.id === "admin-search") {
    S.adminSearch = event.target.value;
    const start = event.target.selectionStart;
    renderAdmin();
    $("admin-search")?.focus();
    $("admin-search")?.setSelectionRange(start, start);
  }
  if (event.target.closest("#station-form")) validateStationForm();
});
document.addEventListener("change", async (event) => {
  try {
    const el = event.target;
    if (el.id === "language") await applySettings(el.value, S.theme);
    if (el.id === "grade") {
      S.grade = el.value;
      S.pageNo = 1;
      await loadStations(true);
    }
    if (el.id === "avatar-input" && el.files[0]) {
      if (el.files[0].size > 2 * 1024 * 1024)
        throw new Error(t("upload_invalid"));
      const data = new FormData();
      data.append("avatar", el.files[0]);
      S.user = (await api("profile/avatar", "POST", data)).user;
      renderNav();
      renderProfile();
      toast(t("saved"));
    }
    if (el.id === "admin-category") {
      S.adminCategory = el.value;
      renderAdmin();
    }
    if (el.id === "admin-status") {
      S.adminStatus = el.value;
      renderAdmin();
    }
    if (el.closest("#station-form")) {
      collectStationDraft();
      if (el.name === "service" || el.name === "all_day") renderStationForm();
      else validateStationForm();
    }
  } catch (error) {
    onError(error);
  }
});
document.addEventListener("submit", async (event) => {
  const form = event.target;
  event.preventDefault();
  try {
    if (["login-form", "register-form", "recover-form"].includes(form.id)) {
      await handleAuth(form, form.id.split("-")[0]);
      return;
    }
    if (form.id === "account-form") {
      S.user = (
        await api("profile", "PATCH", Object.fromEntries(new FormData(form)))
      ).user;
      renderNav();
      renderProfile();
      toast(t("saved"));
    }
    if (form.id === "password-form") {
      await api(
        "profile/password",
        "POST",
        Object.fromEntries(new FormData(form)),
      );
      form.reset();
      toast(t("saved"));
    }
    if (form.id === "support-form") {
      await api("support", "POST", Object.fromEntries(new FormData(form)));
      form.reset();
      await loadSupport();
      toast(t("support_sent"));
    }
    if (form.id === "chat-form") {
      const message = form.elements.message.value;
      await ask(message);
    }
    if (form.id === "station-form") await publishStation(true);
    if (form.classList.contains("ticket-update")) {
      await api(
        "admin/support/" + form.dataset.id,
        "PATCH",
        Object.fromEntries(new FormData(form)),
      );
      toast(t("saved"));
      await loadAdmin();
    }
  } catch (error) {
    const output = form.querySelector(".form-error");
    if (output) output.textContent = error.message;
    else onError(error);
  }
});
$("modal").addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModal();
});
window.addEventListener("hashchange", () =>
  setPage(location.hash.slice(1), false),
);
async function boot() {
  S.ready = false;
  $("loading").classList.remove("hidden");
  $("boot-spinner").classList.remove("hidden");
  $("boot-retry").classList.add("hidden");
  $("boot-message").textContent = t("loading");
  translateStatic();
  try {
    const data = await api("bootstrap");
    S.user = data.user;
    S.config = data.config;
    if (S.user) {
      S.lang = S.user.lang;
      S.theme = S.user.theme;
      try {
        localStorage.setItem("gef_lang", S.lang);
        localStorage.setItem("gef_theme", S.theme);
      } catch {}
    }
    translateStatic();
    $("demo-banner").classList.toggle("hidden", !data.demo);
    renderNav();
    renderCategories();
    renderLocation();
    initMap();
    await loadFavorites();
    await loadStations(true);
    setPage(location.hash.slice(1) || "home", false);
    S.ready = true;
    $("loading").classList.add("hidden");
    // loading div yashirilgandan keyin xarita o'lchamini yangilash
    setTimeout(() => S.map?.invalidateSize(), 50);
    setTimeout(() => S.map?.invalidateSize(), 300);
    if (navigator.permissions && navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });
        if (permission.state === "granted") await locate();
      } catch {}
    }
    try {
      const saved = JSON.parse(
        sessionStorage.getItem("gef_navigation") || "null",
      );
      if (saved && Date.now() - saved.started < 12 * 3600000) {
        const status = await api(
          "navigation/status?id=" +
            encodeURIComponent(saved.id) +
            "&lang=" +
            S.lang,
        );
        if (!status.stopped) {
          S.nav = {
            ...saved,
            ...status,
            route: prepareRoute(saved.route),
            station: status.station,
            rerouting: false,
            arriving: false,
          };
          drawRoute(S.page === "home");
          renderNavigation();
          if (!S.nav.completed && !S.nav.manual) watchPosition();
        }
      }
    } catch {
      try {
        sessionStorage.removeItem("gef_navigation");
      } catch {}
    }
  } catch (error) {
    $("boot-spinner").classList.add("hidden");
    $("boot-message").textContent = t("init_failed") + " " + error.message;
    $("boot-retry").textContent = t("retry");
    $("boot-retry").classList.remove("hidden");
  }
}
$("boot-retry").addEventListener("click", boot);
let pollBusy = false;
setInterval(async () => {
  if (!S.ready || document.hidden || pollBusy) return;
  pollBusy = true;
  try {
    await loadStations();
    if (S.user) await loadFavorites();
    if (S.page === "admin" && S.adminView !== "edit") await loadAdmin();
    $("demo-banner").classList.toggle("hidden", !S.markers.some((s) => s.demo));
  } catch (error) {
    /* Existing data remain visible; a user-triggered refresh reports failures. */
  } finally {
    pollBusy = false;
  }
}, 15000);
setInterval(() => {
  renderLocation();
  if (
    S.nav &&
    !S.nav.manual &&
    !S.nav.completed &&
    S.position &&
    Date.now() - S.position.timestamp > 45000
  ) {
    S.nav.gpsError = "gps_stale";
    renderNavigation();
  }
}, 10000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && S.ready) {
    loadStations();
    if (S.nav && !S.nav.manual && !S.nav.completed) locate();
  }
});
boot();

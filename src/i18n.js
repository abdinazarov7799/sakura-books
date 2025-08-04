import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      // Header
      "Bosh Sahifa": "Bosh Sahifa",
      "Biz Haqimizda": "Biz Haqimizda",
      "Kitoblar": "Kitoblar",
      "Yangiliklar": "Yangiliklar",
      "Aloqa": "Aloqa",
      "Qidirish...": "Qidirish...",
      
      // Banner
      "SakuraBooks – Bilim gullayotgan sahifa!": "SakuraBooks – Bilim gullayotgan sahifa!",
      "Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.": "Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.",
      "Batafsil Ma'lumot": "Batafsil Ma'lumot",
      "Kitoblarni Ko'rish": "Kitoblarni Ko'rish",
      
      // About Us
      "2024-yilda asos solingan": "2024-yilda asos solingan",
      "SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli kitoblarni yaratishdir.": "SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli kitoblarni yaratishdir.",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.": "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.",
      "Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.": "Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.",
      "Interaktiv Kitoblar": "Interaktiv Kitoblar",
      "O'yin orqali o'rganish": "O'yin orqali o'rganish",
      "Yuqori Sifat": "Yuqori Sifat",
      "Mutaxassislar bilan ishlab chiqilgan": "Mutaxassislar bilan ishlab chiqilgan",
      
      // Books
      "Bizning Kitoblarimiz": "Bizning Kitoblarimiz",
      "Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va qiziqishlariga mos ravishda yaratilgan.": "Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va qiziqishlariga mos ravishda yaratilgan.",
      "Barcha Kitoblar": "Barcha Kitoblar",
      "4-6 yosh": "4-6 yosh",
      "7-9 yosh": "7-9 yosh",
      "Interaktiv": "Interaktiv",
      "O'quv Materiallari": "O'quv Materiallari",
      "Barcha Kitoblarni Ko'rish": "Barcha Kitoblarni Ko'rish",
      "so'm": "so'm",
      
      // Contact
      "Biz Bilan Bog'laning": "Biz Bilan Bog'laning",
      "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.": "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.",
      "Xabar Yuborish": "Xabar Yuborish",
      "Ismingiz": "Ismingiz",
      "Email": "Email",
      "Mavzu": "Mavzu",
      "Xabar": "Xabar",
      "Yuborish": "Yuborish",
      "Bog'lanish Ma'lumotlari": "Bog'lanish Ma'lumotlari",
      "Manzil": "Manzil",
      "Telefon": "Telefon",
      "Elektron manzil": "Elektron manzil",
      "Ijtimoiy Tarmoqlar": "Ijtimoiy Tarmoqlar",
      
      // Features
      "Nima Uchun Bizni Tanlashadi": "Nima Uchun Bizni Tanlashadi",
      "SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi.": "SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi.",
      "Yuqori Sifatli Kitoblar": "Yuqori Sifatli Kitoblar",
      "Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va bolalar uchun xavfsiz materiallardan tayyorlanadi.": "Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va bolalar uchun xavfsiz materiallardan tayyorlanadi.",
      "Interaktiv Tarkib": "Interaktiv Tarkib",
      "Bizning kitoblarimizda interaktiv elementlar mavjud, bu bolalarga o'yin orqali o'rganishga yordam beradi.": "Bizning kitoblarimizda interaktiv elementlar mavjud, bu bolalarga o'yin orqali o'rganishga yordam beradi.",
      "Mutaxassislar Tomonidan Ishlab Chiqilgan": "Mutaxassislar Tomonidan Ishlab Chiqilgan",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi.": "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi.",
      
      // News
      "Yangiliklar": "Yangiliklar",
      "Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.": "Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.",
      "Yangi Kitoblar Taqdimoti": "Yangi Kitoblar Taqdimoti",
      "SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi. Tadbir Toshkent shahrida bo'lib o'tdi.": "SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi. Tadbir Toshkent shahrida bo'lib o'tdi.",
      "Bolalar Uchun Ijodiy Ustaxona": "Bolalar Uchun Ijodiy Ustaxona",
      "SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona o'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.": "SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona o'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.",
      "Mutaxassislar Bilan Uchrashuv": "Mutaxassislar Bilan Uchrashuv",
      "SakuraBooks nashriyoti bolalar adabiyoti bo'yicha mutaxassislar bilan uchrashuv o'tkazdi.": "SakuraBooks nashriyoti bolalar adabiyoti bo'yicha mutaxassislar bilan uchrashuv o'tkazdi.",
      "Batafsil": "Batafsil",
      "Barcha Yangiliklar": "Barcha Yangiliklar",
      
      // Newsletter
      "Yangiliklar xabarini olish": "Yangiliklar xabarini olish",
      "Email manzilingizni kiriting va yangi kitoblar haqida ma'lumot oling.": "Email manzilingizni kiriting va yangi kitoblar haqida ma'lumot oling.",
      "Obuna bo'lish": "Obuna bo'lish",
      
             // Footer
       "Sakura Books": "Sakura Books",
       "Bolalar uchun sifatli kitoblar": "Bolalar uchun sifatli kitoblar",
       "Foydali havolalar": "Foydali havolalar",
       "Bog'lanish": "Bog'lanish",
       "Mualliflik huquqi": "Mualliflik huquqi",
       "Barcha huquqlar himoyalangan": "Barcha huquqlar himoyalangan",
       
       // Feedbacks
       "Mijozlarimiz Fikrlari": "Mijozlarimiz Fikrlari",
       "Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.": "Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.",
       "Nilufar Karimova": "Nilufar Karimova",
       "Boshlang'ich sinf o'qituvchisi": "Boshlang'ich sinf o'qituvchisi",
       "\"SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda.\"": "\"SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda.\"",
       
       // Newsletter
       "Bizning Yangiliklarimizga Obuna Bo'ling": "Bizning Yangiliklarimizga Obuna Bo'ling",
       "Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.": "Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.",
       "Email manzilingiz": "Email manzilingiz",
       "Men SakuraBooks maxfiylik siyosatiga roziman": "Men SakuraBooks maxfiylik siyosatiga roziman",
       
       // Examples
       "Interaktiv Namunalar": "Interaktiv Namunalar",
       "Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.": "Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.",
       "Raqamlarni Chizish": "Raqamlarni Chizish",
       "Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.": "Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.",
       "Labirintlar": "Labirintlar",
       "Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.": "Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.",
       
       // Footer additional
       "SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.": "SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.",
       "Tezkor Havolalar": "Tezkor Havolalar",
       "Ish Vaqti": "Ish Vaqti",
       "Dushanba - Juma": "Dushanba - Juma",
       "Shanba": "Shanba",
       "Yakshanba": "Yakshanba",
       "Yopiq": "Yopiq",
       "© 2025 SakuraBooks. Barcha huquqlar himoyalangan.": "© 2025 SakuraBooks. Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    translation: {
      // Header
      "Bosh Sahifa": "Главная",
      "Biz Haqimizda": "О нас",
      "Kitoblar": "Книги",
      "Yangiliklar": "Новости",
      "Aloqa": "Контакты",
      "Qidirish...": "Поиск...",
      
      // Banner
      "SakuraBooks – Bilim gullayotgan sahifa!": "SakuraBooks – Страница, где расцветают знания!",
      "Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.": "Качественные и интересные книги для детей. Наши книги помогают развитию детей и знакомят их с миром знаний.",
      "Batafsil Ma'lumot": "Подробнее",
      "Kitoblarni Ko'rish": "Посмотреть книги",
      
      // About Us
      "2024-yilda asos solingan": "Основано в 2024 году",
      "SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli kitoblarni yaratishdir.": "Издательство SakuraBooks было основано в 2024 году с целью посеять семена знаний и просвещения в сердцах детей. Наша миссия - создавать качественные и интересные книги, которые помогают развитию детей.",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.": "Каждая книга создается в сотрудничестве с опытными педагогами, психологами и квалифицированными авторами. Это обеспечивает высочайшее качество книг для детей.",
      "Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.": "В нашем каталоге представлены интерактивные книги, учебные материалы, рассказы и популярная научная литература. Мы предлагаем книгу, подходящую каждому ребенку.",
      "Interaktiv Kitoblar": "Интерактивные книги",
      "O'yin orqali o'rganish": "Обучение через игру",
      "Yuqori Sifat": "Высокое качество",
      "Mutaxassislar bilan ishlab chiqilgan": "Разработано специалистами",
      
      // Books
      "Bizning Kitoblarimiz": "Наши книги",
      "Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va qiziqishlariga mos ravishda yaratilgan.": "Мы предлагаем лучшие книги для детей. Каждая книга создана в соответствии с возрастом и интересами детей.",
      "Barcha Kitoblar": "Все книги",
      "4-6 yosh": "4-6 лет",
      "7-9 yosh": "7-9 лет",
      "Interaktiv": "Интерактивные",
      "O'quv Materiallari": "Учебные материалы",
      "Barcha Kitoblarni Ko'rish": "Посмотреть все книги",
      "so'm": "сум",
      
      // Contact
      "Biz Bilan Bog'laning": "Свяжитесь с нами",
      "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.": "Есть вопросы? Свяжитесь с нами, и мы поможем вам.",
      "Xabar Yuborish": "Отправить сообщение",
      "Ismingiz": "Ваше имя",
      "Email": "Email",
      "Mavzu": "Тема",
      "Xabar": "Сообщение",
      "Yuborish": "Отправить",
      "Bog'lanish Ma'lumotlari": "Контактная информация",
      "Manzil": "Адрес",
      "Telefon": "Телефон",
      "Elektron manzil": "Электронная почта",
      "Ijtimoiy Tarmoqlar": "Социальные сети",
      
      // Features
      "Nima Uchun Bizni Tanlashadi": "Почему выбирают нас",
      "SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi.": "Издательство SakuraBooks предлагает лучшие книги для детей. Наши книги помогают развитию детей.",
      "Yuqori Sifatli Kitoblar": "Высококачественные книги",
      "Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va bolalar uchun xavfsiz materiallardan tayyorlanadi.": "Наши книги печатаются на высококачественной бумаге и изготавливаются из безопасных для детей материалов.",
      "Interaktiv Tarkib": "Интерактивное содержание",
      "Bizning kitoblarimizda interaktiv elementlar mavjud, bu bolalarga o'yin orqali o'rganishga yordam beradi.": "В наших книгах есть интерактивные элементы, которые помогают детям учиться через игру.",
      "Mutaxassislar Tomonidan Ishlab Chiqilgan": "Разработано специалистами",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi.": "Каждая книга создается в сотрудничестве с опытными педагогами, психологами и квалифицированными авторами.",
      
      // News
      "Yangiliklar": "Новости",
      "Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.": "Узнайте о последних новостях и событиях.",
      "Yangi Kitoblar Taqdimoti": "Презентация новых книг",
      "SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi. Tadbir Toshkent shahrida bo'lib o'tdi.": "Издательство SakuraBooks представило новую серию книг. Мероприятие прошло в городе Ташкент.",
      "Bolalar Uchun Ijodiy Ustaxona": "Творческая мастерская для детей",
      "SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona o'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.": "Издательство SakuraBooks провело творческую мастерскую для детей. На мероприятии дети познакомились с книгами.",
      "Mutaxassislar Bilan Uchrashuv": "Встреча со специалистами",
      "SakuraBooks nashriyoti bolalar adabiyoti bo'yicha mutaxassislar bilan uchrashuv o'tkazdi.": "Издательство SakuraBooks провело встречу со специалистами по детской литературе.",
      "Batafsil": "Подробнее",
      "Barcha Yangiliklar": "Все новости",
      
      // Newsletter
      "Yangiliklar xabarini olish": "Получить новости",
      "Email manzilingizni kiriting va yangi kitoblar haqida ma'lumot oling.": "Введите ваш email и узнавайте о новых книгах.",
      "Obuna bo'lish": "Подписаться",
      
             // Footer
       "Sakura Books": "Sakura Books",
       "Bolalar uchun sifatli kitoblar": "Качественные книги для детей",
       "Foydali havolalar": "Полезные ссылки",
       "Bog'lanish": "Контакты",
       "Mualliflik huquqi": "Авторские права",
       "Barcha huquqlar himoyalangan": "Все права защищены",
       
       // Feedbacks
       "Mijozlarimiz Fikrlari": "Отзывы наших клиентов",
       "Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.": "Что говорят родители и учителя о наших книгах.",
       "Nilufar Karimova": "Нилуфар Каримова",
       "Boshlang'ich sinf o'qituvchisi": "Учитель начальных классов",
       "\"SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda.\"": "\"Книги SakuraBooks очень полезны для моих учеников. Они интерактивные и интересные, что делает процесс обучения детей более эффективным. Особенно книга 'Алфавитные игры' дает очень хорошие результаты.\"",
       
       // Newsletter
       "Bizning Yangiliklarimizga Obuna Bo'ling": "Подпишитесь на наши новости",
       "Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.": "Будьте первыми, кто узнает о новых книгах, событиях и специальных предложениях.",
       "Email manzilingiz": "Ваш email адрес",
       "Men SakuraBooks maxfiylik siyosatiga roziman": "Я согласен с политикой конфиденциальности SakuraBooks",
       
       // Examples
       "Interaktiv Namunalar": "Интерактивные образцы",
       "Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.": "Попробуйте некоторые интерактивные образцы из наших книг.",
       "Raqamlarni Chizish": "Рисование цифр",
       "Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.": "Практикуйтесь в рисовании цифр и научитесь писать цифры.",
       "Labirintlar": "Лабиринты",
       "Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.": "Развивайте логическое мышление, решая лабиринты.",
       
       // Footer additional
       "SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.": "SakuraBooks – издательство качественных и интересных книг для детей. Наша цель - посеять семена знаний и просвещения в сердцах детей.",
       "Tezkor Havolalar": "Быстрые ссылки",
       "Ish Vaqti": "Время работы",
       "Dushanba - Juma": "Понедельник - Пятница",
       "Shanba": "Суббота",
       "Yakshanba": "Воскресенье",
       "Yopiq": "Закрыто",
       "© 2025 SakuraBooks. Barcha huquqlar himoyalangan.": "© 2025 SakuraBooks. Все права защищены."
    }
  },
  en: {
    translation: {
      // Header
      "Bosh Sahifa": "Home",
      "Biz Haqimizda": "About Us",
      "Kitoblar": "Books",
      "Yangiliklar": "News",
      "Aloqa": "Contact",
      "Qidirish...": "Search...",
      
      // Banner
      "SakuraBooks – Bilim gullayotgan sahifa!": "SakuraBooks – Where knowledge blossoms!",
      "Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.": "Quality and interesting books for children. Our books help children's development and introduce them to the world of knowledge.",
      "Batafsil Ma'lumot": "Learn More",
      "Kitoblarni Ko'rish": "View Books",
      
      // About Us
      "2024-yilda asos solingan": "Founded in 2024",
      "SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli kitoblarni yaratishdir.": "SakuraBooks publishing house was founded in 2024 with the aim of sowing seeds of knowledge and enlightenment in children's hearts. Our mission is to create quality and interesting books that help children's development.",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.": "Each book is created in collaboration with experienced educators, psychologists, and qualified authors. This ensures the highest quality of books for children.",
      "Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.": "Our catalog includes interactive books, educational materials, stories, and popular science literature. We offer a book suitable for every child.",
      "Interaktiv Kitoblar": "Interactive Books",
      "O'yin orqali o'rganish": "Learning through play",
      "Yuqori Sifat": "High Quality",
      "Mutaxassislar bilan ishlab chiqilgan": "Developed by experts",
      
      // Books
      "Bizning Kitoblarimiz": "Our Books",
      "Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va qiziqishlariga mos ravishda yaratilgan.": "We offer the best books for children. Each book is created according to children's age and interests.",
      "Barcha Kitoblar": "All Books",
      "4-6 yosh": "4-6 years",
      "7-9 yosh": "7-9 years",
      "Interaktiv": "Interactive",
      "O'quv Materiallari": "Educational Materials",
      "Barcha Kitoblarni Ko'rish": "View All Books",
      "so'm": "UZS",
      
      // Contact
      "Biz Bilan Bog'laning": "Contact Us",
      "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.": "Have questions? Contact us and we will help you.",
      "Xabar Yuborish": "Send Message",
      "Ismingiz": "Your Name",
      "Email": "Email",
      "Mavzu": "Subject",
      "Xabar": "Message",
      "Yuborish": "Send",
      "Bog'lanish Ma'lumotlari": "Contact Information",
      "Manzil": "Address",
      "Telefon": "Phone",
      "Elektron manzil": "Email Address",
      "Ijtimoiy Tarmoqlar": "Social Networks",
      
      // Features
      "Nima Uchun Bizni Tanlashadi": "Why Choose Us",
      "SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi.": "SakuraBooks publishing house offers the best books for children. Our books help children's development.",
      "Yuqori Sifatli Kitoblar": "High-Quality Books",
      "Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va bolalar uchun xavfsiz materiallardan tayyorlanadi.": "Our books are printed on high-quality paper and made from safe materials for children.",
      "Interaktiv Tarkib": "Interactive Content",
      "Bizning kitoblarimizda interaktiv elementlar mavjud, bu bolalarga o'yin orqali o'rganishga yordam beradi.": "Our books contain interactive elements that help children learn through play.",
      "Mutaxassislar Tomonidan Ishlab Chiqilgan": "Developed by Experts",
      "Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi.": "Each book is created in collaboration with experienced educators, psychologists, and qualified authors.",
      
      // News
      "Yangiliklar": "News",
      "Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.": "Learn about the latest news and events.",
      "Yangi Kitoblar Taqdimoti": "New Books Presentation",
      "SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi. Tadbir Toshkent shahrida bo'lib o'tdi.": "SakuraBooks publishing house presented a new series of books. The event took place in Tashkent city.",
      "Bolalar Uchun Ijodiy Ustaxona": "Creative Workshop for Children",
      "SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona o'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.": "SakuraBooks publishing house held a creative workshop for children. At the event, children got acquainted with books.",
      "Mutaxassislar Bilan Uchrashuv": "Meeting with Experts",
      "SakuraBooks nashriyoti bolalar adabiyoti bo'yicha mutaxassislar bilan uchrashuv o'tkazdi.": "SakuraBooks publishing house held a meeting with experts in children's literature.",
      "Batafsil": "Details",
      "Barcha Yangiliklar": "All News",
      
      // Newsletter
      "Yangiliklar xabarini olish": "Get News",
      "Email manzilingizni kiriting va yangi kitoblar haqida ma'lumot oling.": "Enter your email and get information about new books.",
      "Obuna bo'lish": "Subscribe",
      
             // Footer
       "Sakura Books": "Sakura Books",
       "Bolalar uchun sifatli kitoblar": "Quality books for children",
       "Foydali havolalar": "Useful Links",
       "Bog'lanish": "Contact",
       "Mualliflik huquqi": "Copyright",
       "Barcha huquqlar himoyalangan": "All rights reserved",
       
       // Feedbacks
       "Mijozlarimiz Fikrlari": "Customer Reviews",
       "Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.": "What parents and teachers say about our books.",
       "Nilufar Karimova": "Nilufar Karimova",
       "Boshlang'ich sinf o'qituvchisi": "Primary School Teacher",
       "\"SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda.\"": "\"SakuraBooks books are very useful for my students. They are interactive and interesting, which makes the children's learning process more effective. Especially the 'Alphabet Games' book gives very good results.\"",
       
       // Newsletter
       "Bizning Yangiliklarimizga Obuna Bo'ling": "Subscribe to Our News",
       "Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.": "Be the first to know about new books, events, and special offers.",
       "Email manzilingiz": "Your email address",
       "Men SakuraBooks maxfiylik siyosatiga roziman": "I agree to SakuraBooks privacy policy",
       
       // Examples
       "Interaktiv Namunalar": "Interactive Samples",
       "Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.": "Try some interactive samples from our books.",
       "Raqamlarni Chizish": "Drawing Numbers",
       "Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.": "Practice drawing numbers and learn to write numbers.",
       "Labirintlar": "Labyrinths",
       "Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.": "Develop logical thinking by solving labyrinths.",
       
       // Footer additional
       "SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.": "SakuraBooks – a publishing house of quality and interesting books for children. Our goal is to sow seeds of knowledge and enlightenment in children's hearts.",
       "Tezkor Havolalar": "Quick Links",
       "Ish Vaqti": "Working Hours",
       "Dushanba - Juma": "Monday - Friday",
       "Shanba": "Saturday",
       "Yakshanba": "Sunday",
       "Yopiq": "Closed",
       "© 2025 SakuraBooks. Barcha huquqlar himoyalangan.": "© 2025 SakuraBooks. All rights reserved."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', // default language
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
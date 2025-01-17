# Team Project Group 4
Вітаю! Це наш груповий проект. Нижче ви знайдете інформацію для роботи з проектом.

## Вимоги

**TECH-Критерії прийняття проєкту з HTML+CSS**

1. Реалізована семантична верстка з трьома переломами (для мобільних девайсів, планшетів та десктопу) і відповідає технічному завданню та дизайн-макету
2. Підключений modern-normalize
3. Підключено шрифти
4. Всі зображення лежать у src/images і попередньо оптимізовані, в т.ч. під ретіну
5. Оптимізовано завантаження зображень
6. Додано відображення фавікон сторінки
7. Всі HTML-файли пройшли перевірку і не містять помилок на https://validator.w3.org/, https://jigsaw.w3.org/css-validator/
8. Проєкт пройшов оцінювання на https://pagespeed.web.dev/ і кожен показник складає не менш ніж 70%
9. Консоль розробника не видає помилок.
10. У назвах файлів немає великих літер і пробілів, лише літери англійського алфавіту
11. Всі робочі гілки окрім main та gh-pages - видалені
12. Фінальна версія проєкту задеплоєна на GitHub Pages
13. Усі паршали файлів стилів лежать у src/css та імпортуються у src/css/main.css
14. Усі HTML-файли лежать у папці src/partials і підключені до index.html через тег <load> (у разі реалізації багатосторінкового сайту - всі partials мають бути підключені до файлу html відповідної сторінки)
15. Ментор провів перевірку коду (code review) фінальної версії проєкту

**Написання классів**

Дотримуйтесь загальної стилізації классів відповідно до методології "люля-кебаб", наприклад:

```
class="parent"
  class="parent-daughter"
    class="parent-daughter-children"
```

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Склонуйте проект на комп’ютер:
   - HTTP `git clone https://github.com/TyronNIKO/Project-group-4.git`
   - SSH `git clone git@github.com:TyronNIKO/Project-group-4.git`
3. Створіть гілку і перейдіть в неї:
   - `git checkout -B branch-name`

   *Назва гілки може бути будь-яка, але краще використовувати прив’язку до задачі в Trello*

> [!IMPORTANT]
> Не забувайте перевіряти назву гілки в якій ви працюєте!

4. Встанови базові залежності проекту в терміналі командою `npm install`.
5. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
6. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.



## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Команди Git для роботи

  - `git status` - Подивитись актуальну гілку
  - `git branch` - Подивитись список всіх гілок
  - `git branch branch-name` - Створити нову гілку
  - `git checkout branch-name` - Переключитись на гілку
  - `git checkout -B branch-name` - Створити і одразу переключитись на гілку
  - `git branch -D branch-name` - Видалити гілку
  - `git pull` -  Отримати оновлення в робочу гілку
  - `git merge main` -  Оновити робочу гілку з гілки main

## Презентація проекту

https://docs.google.com/document/d/1cboEr4YJlNMf7ZXdGUqnUIuCSa5jrDTDxbK2vdfOv9o/edit

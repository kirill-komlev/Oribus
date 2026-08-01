# Oribus — Дашборд для управления задачами

<div align="center">

![React](https://img.shields.io/badge/React-19.2.7-%2320232a?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.1.1-%2320232a?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.2-%2320232a?style=for-the-badge&logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-5.0.14-%2320232a?style=for-the-badge)
![React Query](https://img.shields.io/badge/React%20Query-5.101.4-%2320232a?style=for-the-badge&logo=react)

**Oribus** — учебный проект, дашборд для управления проектами, задачами и командой. Реализован в рамках курсовой работы по изучению современных веб-технологий.

> ⚠️ **Важно:** Это **только фронтенд-макет**, созданный для изучения React, Tailwind, Zustand и других технологий. Все данные — статичные примеры, реальный сервер отсутствует. Любые действия (создание, редактирование, удаление) **не сохраняются** и не отправляют запросы.

</div>

## 📋 О проекте

Oribus — это современный веб-интерфейс для управления проектами, задачами и командой. Дизайн приложения основан на работе дизайнера с Dribbble: [Project Management Dashboard Design](https://dribbble.com/shots/27529254-Project-Management-Dashboard-Design).

Проект демонстрирует создание полнофункционального дашборда с:

- 📊 **Панелью управления** — обзор задач, статусов и активности команды
- ✅ **Управление задачами** — фильтрация по статусам (In Design, In Development, Review, Shipped)
- 🗂 **Навигация по воркспейсам** — страницы воркспейсов, каналов и личных сообщений
- 💬 **Комментарии и уведомления** — интерактивная панель уведомлений
- 👥 **Настройки команды** — управление участниками и ролями

## 🚀 Основные функции

### Главная страница (Dashboard)
- Интерактивная панель с метриками и статистикой
- Быстрый доступ к задачам, комментариям и настройкам
- Адаптивный дизайн для всех устройств

### Управление задачами
- **Фильтрация по статусам** — In Design, In Development, Review, Shipped
- **Теги и метки** — категоризация задач по приоритетам и типам
- **Группировка** — отображение задач по статусам с счётчиками
- **Поиск** — мгновенный поиск по задачам

### Навигация
- **Воркспейсы** — `/dashboard/workSpace/:workSpace`
- **Каналы** — `/dashboard/channel/:channel`
- **Личные сообщения** — `/dashboard/directMessage/:directMessage`
- **Безопасность** — `/dashboard/teamSettings`

### Страницы дашборда
- **Inbox** — входящие уведомления и сообщения
- **Comments** — комментарии к задачам
- **Tasks** — управление задачами
- **Team Settings** — настройки команды

## 🛠 Технологии и инструменты

### Фронтенд
| Технология | Версия | Назначение |
|------------|--------|------------|
| **React** | 19.2.7 | UI-фреймворк для создания интерфейсов |
| **Vite** | 8.1.1 | Быстрый сборщик с поддержкой HMR |
| **Tailwind CSS** | 4.3.2 | Utility-first CSS framework |
| **React Router** | 8.1.0 | Клиентская маршрутизация |
| **Zustand** | 5.0.14 | Управление состоянием |
| **React Query** | 5.101.4 | Кэширование и управление данными |
| **Lucide React** | 1.23.0 | Библиотека иконок |
| **clsx & tailwind-merge** | latest | Утилиты для работы с CSS-классами |

## 📂 Структура проекта

```
tailwind-test/
├── public/                  # Статические файлы
├── src/
│   ├── app/                 # Конфигурация приложения
│   │   ├── layouts/
│   │   │   ├── dashboard-layout/  # Макет дашборда (Sidebar + Header + Content)
│   │   │   │   └── ui/DashboardLayout.jsx
│   │   │   └── main-layout/       # Основной макет приложения
│   │   │       └── ui/MainLayout.jsx
│   │   ├── router/
│   │   │   └── Router.jsx       # Конфигурация маршрутов (React Router)
│   │   ├── styles/
│   │   │   └── index.css        # Глобальные стили (Tailwind)
│   │   ├── App.jsx              # Корневой компонент
│   │   └── main.jsx             # Точка входа
│   ├── features/              # Бизнес-фичи
│   │   ├── task-tabs/         # Управление вкладками задач
│   │   │   ├── model/
│   │   │   │   └── tabStore.js    # Zustand store для вкладок
│   │   │   └── index.js
│   │   └── tasks/             # Управление задачами
│   │       ├── api/
│   │       │   ├── index.js
│   │       │   └── listApi.js       # API для загрузки задач
│   │       ├── model/
│   │       │   ├── index.js
│   │       │   └── useListTasks.js  # Хук для получения списка задач
│   │       └── index.js
│   ├── pages/                 # Страницы приложения
│   │   ├── dashboard/         # Главная страница дашборда
│   │   │   ├── ui/DashboardPage.jsx
│   │   │   └── index.js
│   │   └── tasks/             # Страница управления задачами
│   │       ├── ui/TasksPage.jsx
│   │       └── index.js
│   ├── shared/                # Общие модули
│   │   ├── configs/           # Конфигурации
│   │   │   ├── data.js            # Моковые данные
│   │   │   ├── index.js
│   │   │   ├── page-config.js     # Конфигурация маршрутов
│   │   │   ├── tag-colors.js      # Цвета для тегов
│   │   │   ├── tags.js            # Конфигурация тегов
│   │   │   └── users.js           # Данные пользователей
│   │   ├── contexts/          # React Context
│   │   │   ├── TitleContext.js      # Контекст заголовка страницы
│   │   │   └── index.js
│   │   ├── hooks/             # Кастомные хуки
│   │   │   ├── index.js
│   │   │   └── useTitle.js        # Хук для управления заголовком
│   │   ├── libs/              # Утилиты
│   │   │   ├── cn.js              # Класс-утилита (clsx + twMerge)
│   │   │   ├── index.js
│   │   │   └── mockDelay.js       # Мок задержка для API
│   │   └── ui/                # Базовые UI-компоненты
│   │       ├── Badge.jsx          # Бейдж (счётчик уведомлений)
│   │       ├── Button.jsx         # Кнопка (variant, size)
│   │       ├── Chip.jsx           # Статус-чип (In Design, Review и т.д.)
│   │       ├── CircleButton.jsx   # Круглая кнопка
│   │       ├── Container.jsx      # Контейнер для контента
│   │       ├── Icon.jsx           # Компонент-обёртка для иконок
│   │       ├── LogoIcon.jsx       # Логотип приложения
│   │       ├── Tab.jsx            # Вкладка
│   │       ├── TabList.jsx        # Список вкладок
│   │       ├── Table.jsx          # Таблица
│   │       ├── TableSkeleton.jsx  # Скелетон для таблицы
│   │       ├── Tags.jsx           # Тег с цветовой меткой
│   │       ├── Typography.jsx     # Типографика
│   │       └── index.js
│   └── widgets/               # Виджеты и компоненты
│       ├── dashboard-header/  # Верхняя панель дашборда
│       │   ├── ui/
│       │   │   ├── DashboardHeader.jsx
│       │   │   ├── DashboardHeaderProfileButton.jsx
│       │   │   ├── DashboardHeaderSearchInput.jsx
│       │   │   └── index.js
│       │   └── index.js
│       ├── navbar/            # Навигационная панель
│       │   ├── ui/
│       │   │   ├── Navbar.jsx
│       │   │   ├── NavbarLink.jsx
│       │   │   └── index.js
│       │   └── index.js
│       └── sidebar/           # Боковая панель навигации
│           ├── ui/
│           │   ├── Sidebar.jsx
│           │   ├── SidebarList.jsx
│           │   ├── SidebarListAction.jsx
│           │   ├── SidebarListLink.jsx
│           │   ├── SidebarListTitle.jsx
│           │   └── index.js
│           └── index.js
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

### Архитектурный подход

Проект построен по принципу **feature-sliced архитектуры (FSA)**:

- **pages** — маршрутизируемые экраны приложения (DashboardPage, TasksPage)
- **widgets** — составные блоки интерфейса (хедер, сайдбар, навбар)
- **features** — пользовательские сценарии (вкладки задач, API задач)
- **shared** — переиспользуемые модули (конфиги, утилиты, хуки, UI-компоненты)

## 📡 Работа с данными

Данные о задачах хранятся в моковых конфигурационных файлах и подгружаются через React Query с кэшированием.

**Источники данных:**
- `shared/configs/data.js` — моковые данные для задач и метрик
- `shared/configs/users.js` — данные пользователей команды
- `shared/configs/tags.js` — конфигурация тегов и цветов
- `features/tasks/api` — API-слой для загрузки задач

### Модель задачи

Каждая задача содержит:

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | string | Уникальный идентификатор |
| `title` | string | Название задачи |
| `description` | string | Описание |
| `status` | string | Статус (inDesign, inDevelopment, review, shipped) |
| `tags` | string[] | Массив тегов |
| `assignee` | object | Ответственный (пользователь) |
| `priority` | string | Приоритет (high, medium, low) |
| `createdAt` | string | Дата создания |
| `dueDate` | string | Дата выполнения |

## 🎨 Дизайн и UI

- **Tailwind CSS** — основная библиотека стилизации
- **Кастомные компоненты** — переиспользуемые UI-компоненты в `shared/ui`
- **Адаптивная вёрстка** — поддержка мобильных устройств через Tailwind брейкпоинты
- **Компонентный подход** — переиспользуемые виджеты в `widgets/`

## 📱 Маршрутизация

| Маршрут | Страница | Описание |
|---------|----------|----------|
| `/` | — | Редирект на дашборд |
| `/dashboard` | DashboardPage | Главная страница дашборда |
| `/dashboard/inbox` | DashboardPage | Входящие уведомления |
| `/dashboard/comments` | DashboardPage | Комментарии |
| `/dashboard/tasks` | TasksPage | Управление задачами |
| `/dashboard/teamSettings` | DashboardPage | Настройки команды |
| `/dashboard/workSpace/:workSpace` | DashboardPage | Страница воркспейса |
| `/dashboard/channel/:channel` | DashboardPage | Страница канала |
| `/dashboard/directMessage/:directMessage` | DashboardPage | Личные сообщения |
| `*` | — | Страница 404 |

## 📚 Используемые утилиты

| Утилита | Описание |
|---------|----------|
| `cn()` | Объединение CSS-классов (clsx + tailwind-merge) |
| `mockDelay()` | Имитация задержки сети для API-запросов |

## 📖 Глобальное состояние (Zustand)

### Stores

| Store | Описание |
|-------|----------|
| `useTabStore` | Управление вкладками задач (активная вкладка, переключение) |
| `useCartStore` | Корзина (если реализована) |
| `useFavoriteStore` | Избранное (если реализовано) |

## 🎯 Компоненты UI

### Базовые компоненты (`shared/ui`)

| Компонент | Описание |
|-----------|----------|
| `Button` | Кнопка с вариантами (default, primary) и размерами (small, medium, large) |
| `Chip` | Статус-чип с иконкой и счётчиком (In Design, In Development, Review, Shipped) |
| `Badge` | Бейдж-счётчик для уведомлений (показывает число до 99+) |
| `Tags` | Цветной тег с меткой |
| `Tab / TabList` | Компоненты для создания вкладок |
| `Table` | Таблица для отображения данных |
| `TableSkeleton` | Скелетон-заглушка для таблицы |
| `Container` | Контейнер для центрирования контента |
| `CircleButton` | Круглая кнопка для действий |
| `Icon` | Обёртка для иконок Lucide |
| `LogoIcon` | Логотип приложения |
| `Typography` | Типографические компоненты |

### Виджеты (`widgets`)

| Виджет | Описание |
|--------|----------|
| `DashboardHeader` | Верхняя панель с поиском, уведомлениями и профилем |
| `Navbar` | Навигационная панель с ссылками |
| `Sidebar` | Боковая панель с воркспейсами, каналами и настройками |

## 🔧 Кастомные хуки

| Хук | Описание |
|-----|----------|
| `useTitle` | Управление заголовком страницы через TitleContext |
| `useListTasks` | Получение списка задач через React Query |

## 📜 Лицензия

Данный проект является учебной работой и предназначен исключительно для образовательных целей.

## 🙏 Благодарности

- [React](https://react.dev/) — библиотека для создания пользовательских интерфейсов
- [Vite](https://vite.dev/) — быстрый сборщик следующего поколения
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) — минималистичный стейт-менеджер
- [React Query](https://tanstack.com/query) — хуки для серверного состояния
- [Lucide](https://lucide.dev/) — красивые иконки
- [Dribbble](https://dribbble.com/) — вдохновение для дизайна

---

<div align="center">

**Oribus** — Курсовая работа по созданию дашборда для управления задачами

Сделано с ❤️ на Vite + React + Tailwind CSS

</div>

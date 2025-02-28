# BranchFlow

🚀 **BranchFlow** — приложение для управления задачами, ветками и Pull/Merge Requests с интеграцией GitHub и GitLab.

## 📌 Основные возможности

- 🔑 Аутентификация через GitHub и GitLab (OAuth).
- 📂 Управление репозиториями: просмотр, создание веток.
- ✅ Управление задачами (создание, редактирование, удаление).
- 🔄 Синхронизация задач с ветками.
- 🔀 Автоматическое создание Pull Request (GitHub) и Merge Request (GitLab).
- 📊 Отображение статуса репозиториев и задач.

## 🏗 Технологии

- **Frontend:** Angular
- **Backend:** Node.js (Express) ?? / Python (Flask/Django) ??
- **База данных:** MongoDB ?? / PostgreSQL ??
- **OAuth:** GitHub OAuth API, GitLab OAuth API

## 🔧 Установка и запуск

### 1️⃣ Клонирование репозитория
```sh
git clone https://github.com/your-repo/BranchFlow.git
cd BranchFlow
```

### 2️⃣ Установка зависимостей
#### Клиент
```sh
cd frontend
npm install
```

### 3️⃣ Запуск проекта
#### Сервер (платформа для сервера еще не выбрана)

#### Клиент (Angular)
```sh
cd frontend
npm start
```

## ⚙️ Переменные окружения

Создай файл `.env` и добавь в него:
```
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITLAB_CLIENT_ID=your_gitlab_client_id
GITLAB_CLIENT_SECRET=your_gitlab_client_secret
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## 🛠 API (примерный вид)

### 🔑 Аутентификация (OAuth)
- **GitHub:** `/api/auth/github`
- **GitLab:** `/api/auth/gitlab`

### 📂 Репозитории
- **Получить репозитории:** `GET /api/repositories`
- **Создать ветку:** `POST /api/repositories/{id}/branches`

### ✅ Задачи
- **Создать задачу:** `POST /api/tasks`
- **Получить задачи:** `GET /api/tasks`
- **Привязать задачу к ветке:** `PATCH /api/tasks/{id}/branch`

### 🔀 Pull/Merge Requests
- **Создать PR (GitHub):** `POST /api/github/pr`
- **Создать MR (GitLab):** `POST /api/gitlab/mr`

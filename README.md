# Trello API 🧩

This is the backend API for the Trello Web Clone project, built with Node.js, Express.js, and MongoDB. It provides RESTful endpoints to support board, list, and card management for a Trello-like application.

## 📦 Features

- User, board, list, and card management
- MongoDB with MongoDB Cloud Atlas
- Organized folder structure (routes, controllers, middleware, service and model)
- CORS and dotenv configuration

## 🚀 Technologies

- Node.js
- Express.js
- MongoDB + MongoDB Cloud Atlas
- axios
- dotenv
- CORS

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/leeminhhthee/trello-api.git
cd trello-api
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Setup environment variables

```bash
MONGODB_URI='[...]'
DATABASE_NAME='trello-mern'
LOCAL_DEV_APP_HOST='localhost'
LOCAL_DEV_APP_PORT=8017

AUTHOR='TheDev'
```
🗂️ This project uses MongoDB Atlas with:
"Database name: `trello-mern`"
"Collection: `boards`"

### 4. Start the server

```bash
yarn dev
```
The server will start at http://localhost:8017

### 📌 Related Projects

Frontend: [trello-web](https://github.com/leeminhhthee/trello-web)

### 🤝 Contribution
Contributions are welcome! Feel free to fork this repo, create a new branch, and submit a pull request.
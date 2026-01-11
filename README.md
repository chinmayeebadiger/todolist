# React Todo App

A minimal **Todo app built using React and Vite**.  
This project helped me practice React fundamentals like state management, component structure, and browser storage.

The app lets users add tasks, mark them as completed, delete them, and filter todos using tabs. All data is saved locally in the browser.

---

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Filter todos (Open / Completed)
- Saves data using browser `localStorage`
- Clean and responsive UI
- Fast setup using Vite

---

## Built With

- React (useState, useEffect)
- Vite
- JavaScript (ES6)
- CSS
- Fanta.css (for base styling)

---

## How It Works

- Todos are stored as objects with `input` and `complete` properties
- State is managed in `App.jsx`
- Data is saved to `localStorage` whenever the todo list changes
- On page load, saved todos are loaded back into the app

---


---

## Running the Project Locally

1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git

2. Intall dependencies 

    npm install 

3. Start development server 

    npm run dev

# 📝 Worklog System

## 📌 Description
Worklog System is a full-stack web application for managing daily work logs and tasks.  
The system helps users record, update, delete, and organize their work activities efficiently.

---

## 🚀 Features
- Create, Read, Update, Delete (CRUD) operations
- User authentication (Login/Register)
- Role-based access control (RBAC)
- Dashboard with filtering and search
- Notification system
- Task and work activity management

---

## 🛠 Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js / Express
- **Database:** MySQL

---

## 📂 Project Structure
```plaintext
worklog-system/
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   └── models/
│
├── frontend/
│   ├── src/
│   ├── app/
│   └── components/
│
├── database/
│   └── worklog.sql
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/pinkybhattarai1/worklog-system.git
```

### 2. Go to the project folder
```bash
cd worklog-system
```

### 3. Install backend dependencies
```bash
npm install
```

### 4. Start the backend server
```bash
npm start
```

### 5. Run frontend
Make sure Angular CLI is installed, then run:
```bash
ng serve
```

---

## 🗄 Database
Example SQL table structure:

```sql
CREATE TABLE worklogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📸 Screenshot
You can add screenshots of your system here, such as:
- Login page
- Dashboard page
- Worklog management page

Example:
```markdown
![Dashboard Screenshot](images/dashboard.png)
```

---

## 🎯 Purpose of the Project
This project was developed to practice full-stack web development skills, including frontend development, backend API creation, and database management.

---

## 👩‍💻 Author
**Pinky Prasat**

---

## 📬 Contact
- **Email:** pinkybhattarai1@gmail.com
- **GitHub:** https://github.com/pinkybhattarai1

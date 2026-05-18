# MedStore — Full Stack Medicine E-Commerce Platform

## Project Description

MedStore is a full-stack medicine e-commerce web application built using:

* React.js
* Spring Boot
* Java
* MySQL
* JWT Authentication
* REST APIs

The application provides:

* Public customer shopping website
* Admin dashboard
* Medicine management system
* Authentication & authorization
* Shopping cart
* Secure backend APIs
* Responsive modern UI

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* CSS
* Context API

## Backend

* Spring Boot
* Spring Security
* JWT Authentication
* Maven
* REST APIs

## Database

* MySQL

---

# Features

## Customer Features

* Browse medicines
* Search medicines
* Category filtering
* Add to cart
* Responsive shopping UI
* Public product access

## Admin Features

* Secure admin login
* Dashboard
* Add medicines
* Update medicines
* Delete medicines
* Inventory management

## Security Features

* JWT authentication
* BCrypt password encryption
* Role-based authorization
* Admin-only protected routes

---

# Project Structure

```txt
MedStore/
│
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── styles/
│
├── src/main/java/
│   └── com/medstore/backend/
│       ├── auth/
│       ├── config/
│       ├── controller/
│       ├── dto/
│       ├── entity/
│       ├── repository/
│       └── service/
│
├── pom.xml
└── README.md
```

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/medstore.git
```

---

## 2. Backend Setup

Open backend folder:

```bash
cd MedStore
```

Run Spring Boot:

```bash
mvnw.cmd spring-boot:run
```

Backend runs on:

```txt
http://localhost:8080
```

---

## 3. Frontend Setup

Open frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React app:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# MySQL Database Setup

## Create Database

```sql
CREATE DATABASE medstore;
```

---

## Configure application.properties

Location:

```txt
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/medstore
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# Admin Access

## Admin Login

```txt
http://localhost:5173/login
```

## Customer Store

```txt
http://localhost:5173/shop
```

---

# JWT Authentication Flow

```txt
Login
↓
JWT Token Generated
↓
Stored in Local Storage
↓
Protected Admin Routes
↓
Role-based Authorization
```

---

# API Endpoints

## Authentication APIs

| Method | Endpoint           | Access |
| ------ | ------------------ | ------ |
| POST   | /api/auth/register | Public |
| POST   | /api/auth/login    | Public |

---

## Medicine APIs

| Method | Endpoint            | Access |
| ------ | ------------------- | ------ |
| GET    | /api/medicines      | Public |
| POST   | /api/medicines      | Admin  |
| PUT    | /api/medicines/{id} | Admin  |
| DELETE | /api/medicines/{id} | Admin  |

---

# Future Enhancements

* Checkout system
* Razorpay payment integration
* Order history
* PDF invoice generation
* Product image upload
* Email notifications
* Prescription upload
* Stock alerts
* Admin analytics dashboard

---

# Deployment

## Frontend

Deploy React app on:

* Vercel
* Netlify

## Backend

Deploy Spring Boot backend on:

* Render
* Railway
* AWS

## Database

Use:

* MySQL
* PlanetScale
* Railway MySQL

---

# GitHub Repository Setup

## Initialize Git

Inside project root:

```bash
git init
```

---

## Add Files

```bash
git add .
```

---

## Commit Project

```bash
git commit -m "Initial commit - MedStore full stack e-commerce application"
```

---

## Create GitHub Repository

Go to:

```txt
https://github.com/new
```

Repository name:

```txt
medstore
```

---

## Connect Local Project

```bash
git remote add origin https://github.com/YOUR_USERNAME/medstore.git
```

---

## Push to GitHub

```bash
git branch -M main
```

```bash
git push -u origin main
```

---

# Recommended GitHub Repository Description

```txt
Full Stack Medicine E-Commerce Web Application using React, Spring Boot, Java, MySQL, JWT Authentication, and REST APIs.
```

---

# Recommended GitHub Topics

```txt
react spring-boot java mysql ecommerce jwt-authentication pharmacy fullstack rest-api
```

---

# License

MIT License

---

# Author

Vedant Kamble

---

# Final Status

✅ Full Stack Architecture
✅ JWT Authentication
✅ Admin Dashboard
✅ Customer Shopping Website
✅ MySQL Database
✅ REST APIs
✅ Role-based Authorization
✅ Responsive UI

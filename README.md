# Team Task Manager API

## Overview

This is a backend API for managing team projects and tasks.
It allows users to register, authenticate, create projects, assign tasks, and update task status.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Railway (Deployment)

##  Live API

 https://team-task-manager-production-9722.up.railway.app

##  Features

* User Registration & Login
* JWT-based Authentication
* Create & Manage Projects
* Assign Tasks to Users
* Update Task Status (Todo → Done)
* Protected Routes using Middleware


###  Auth

* POST /api/auth/register → Register user
* POST /api/auth/login → Login user

###  Projects

* POST /api/projects → Create project
* GET /api/projects → Get all projects

###  Tasks

* POST /api/tasks → Create task
* PUT /api/tasks/:id → Update task status

##  Environment Variables

Create a `.env` file locally:

MONGO_URI=mongodb+srv://admin:Admin%40123@cluster0.eiyvats.mongodb.net/taskmanager
JWT_SECRET=mysupersecret123

##  Run Locally

```bash
npm install
npm run dev
```

##  Testing

Use Thunder Client to test API endpoints.

##  Sample User

email: [test@gmail.com](mailto:test@gmail.com)
password: 123456

##  Project Purpose

This project demonstrates backend development skills including authentication, REST API design, database integration, and deployment.

##  Author

GitHub: https://github.com/sathwickbudagala

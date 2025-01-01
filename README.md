Task Manager API
Overview
The Task Manager API is a backend application built using Node.js and Express.js for managing tasks. It provides a RESTful API to handle user authentication, task management, and basic CRUD operations. The application uses MongoDB for data storage and JWT for secure authentication.

This API can be used in conjunction with a front-end application to create, read, update, and delete tasks, as well as register and log in users.

Table of Contents
Features
Tech Stack
Setup Instructions
API Endpoints
Environment Variables
Deployment
License
Features
User Authentication: Register new users, login with email/password, and use JWT tokens for authentication.
Task Management: Create, update, delete, and retrieve tasks.
Security: JWT authentication for secure routes.
Tech Stack
Node.js: JavaScript runtime for building the API.
Express.js: Web framework for Node.js to create APIs.
MongoDB & Mongoose: Database and ODM for managing data.
JWT (JSON Web Tokens): For secure user authentication.
Bcrypt.js: To hash passwords securely.
dotenv: To manage environment variables.
Setup Instructions
Prerequisites
Node.js installed on your machine.
MongoDB Atlas account for cloud database.
Git installed for cloning the repository.
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Rename .env.example to .env and add your environment-specific values:

MONGO_URI: Your MongoDB connection string from MongoDB Atlas.
JWT_SECRET: A secret key for signing JWT tokens.
PORT: The port for the application to run on (e.g., 3000).
Example:

bash
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=3000
4. Start the Application
bash
Copy code
npm start
The application should now be running on http://localhost:3000.

API Endpoints
1. POST /register
Description: Register a new user.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "your_password"
}
Response:
json
Copy code
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
2. POST /login
Description: Log in with email and password, and receive a JWT token.
Request Body:
json
Copy code
{
  "email": "johndoe@example.com",
  "password": "your_password"
}
Response:
json
Copy code
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
3. POST /tasks
Description: Create a new task (protected route, JWT required).
Request Body:
json
Copy code
{
  "title": "New Task",
  "description": "Task details",
  "completed": false
}
Response:
json
Copy code
{
  "task": {
    "_id": "task_id",
    "title": "New Task",
    "description": "Task details",
    "completed": false
  }
}
4. GET /tasks
Description: Get all tasks for the logged-in user (protected route, JWT required).
Response:
json
Copy code
[
  {
    "_id": "task_id",
    "title": "New Task",
    "description": "Task details",
    "completed": false
  },
  {
    "_id": "task_id_2",
    "title": "Another Task",
    "description": "Task details",
    "completed": true
  }
]
5. PUT /tasks/:id
Description: Update a task by ID (protected route, JWT required).
Request Body:
json
Copy code
{
  "title": "Updated Task",
  "description": "Updated task details",
  "completed": true
}
Response:
json
Copy code
{
  "message": "Task updated successfully",
  "task": {
    "_id": "task_id",
    "title": "Updated Task",
    "description": "Updated task details",
    "completed": true
  }
}
6. DELETE /tasks/:id
Description: Delete a task by ID (protected route, JWT required).
Response:
json
Copy code
{
  "message": "Task deleted successfully"
}
Environment Variables
Make sure you set the following environment variables in your .env file:

MONGO_URI: MongoDB Atlas connection string.
JWT_SECRET: Your secret key for signing JWT tokens.
PORT: Port to run the app (e.g., 3000).
Deployment
To deploy this API on Render:

Create an account on Render.
Link your GitHub repository.
Set up a Web Service.
Choose the Node.js environment, link your repository, and select the correct branch.
Set environment variables in the Environment Variables section on Render.

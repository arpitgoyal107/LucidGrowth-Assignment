# Portfolio Website

## Important Notice

_Admin Credentials:_

- _email:_ arpitgoyal126116@gmail.com
- _Password:_ 123456789

## Backend environment Dependencies
add .env
PORT=5000
DB_USER=
DB_PASSWORD=
JWT_SECRET=


## Features

- User registration and login
- Admin, Collaborator and Viewer Profile
- Collaborator will not have the access of delete and edit the skills, projects and experience
- Integration with MongoDB for data storage

## Technologies

- Frontend: React, Tailwind CSS
- Backend: Node js, Express js, jwt, multer
- Database: MongoDB

## Getting Started

### Prerequisites

- Node.js
- React js
- MongoDB

### Installation

1. _Clone the repository:_
   git clone https://github.com/arpitgoyal107/LucidGrowth-Assignment.git
2. **Install frontend dependencies:**

   cd frontend
   npm install

3. _Install backend dependencies:_

   cd backend
   npm install

### Running the Application

1. **Start the backend server:**
   cd backend
   npm start

2. **Start the frontend server:**
   cd frontend
   npm run dev

## Frontend Components

_HomePage_

The main landing page of the application that provides the basic introduction of the portfolio ownwer.

_Login_
A component that handles user authentication.

_Projects_
A component that shows the project done by the portfolio owner and for the admin, the admin cand add more projects as well.

_Skills_
A component that shows the skills achieved by the owner and admin can add more skills that admin will learn in future.

_Experiences_
A component that shows the experiences that the admin have and will update with the time in future.

# Backend

_Models_

Define the data structure and schema for the application using Mongo DB.

_Routes_

Define the API endpoints for user registration, Projects, skills, Experiences and concact.

_Multer_

Help in uploading the file image in the projects section.

_Configuration_

Contains configuration settings for the Port no, mongo db url and jwt secret.

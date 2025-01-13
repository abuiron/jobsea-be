# Job Apply Portal

This project is a comprehensive **Job Apply Portal** built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It was developed during an internship at **Zidio Development Pvt Ltd**. The portal provides users with an interface to search and apply for jobs while allowing administrators to manage job listings and categories.

## Deployment

The project is deployed and accessible at [Job Apply Portal - Live Demo](http://jobsea.netlify.app).

## Frontend Repo
-[Job Sea Frontend repo](https://github.com/abuiron/jobsea-fe)


## Home Page
 ![Home Page](https://github.com/abuiron/jobsea-fe/blob/main/src/images/front.png?raw=true)

## Dashboard Page
 ![Dashboard  page](https://github.com/abuiron/jobsea-fe/blob/main/src/images/dashboard.png?raw=true)


## Key Features

- **User Authentication:** Secure login and registration functionality with role-based access (admin and user).
- **Job Listings:** Browse, search, and filter job listings based on job type, location, and salary.
- **Job Application:** Users can apply for jobs directly through the portal, with their application status tracked in the database.
- **Admin Dashboard:** Admins can create, update, and delete job listings and categories. They can also view job applications and manage user roles.
- **Responsive Design:** The application is fully responsive, providing an optimal experience on both desktop and mobile devices.
- **MongoDB Integration:** All data is stored in a MongoDB database, with three main collections: `jobs`, `jobTypes`, and `users`.

## Project Structure

The project is structured into two main directories: `backend` and `frontend`.

- **Backend:** Handles the server-side logic, database interactions, and API endpoints. The backend is built with Node.js, Express.js, and MongoDB.
- **Frontend:** Manages the client-side interface using React.js, with routing handled by React Router.

## Setup Instructions

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- MongoDB connection string for your database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abuiron/jobsea-fe.git
   cd jobsea-fe
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory.
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string and other environment variables:
     ```env
     PORT=5000
     DATABASE=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

   - Run the backend server:
     ```bash
     npm start
     ```

### API Endpoints

The backend server exposes the following API endpoints:

- **/api/jobs:** GET, POST, PUT, DELETE job listings.
- **/api/jobTypes:** GET, POST, PUT, DELETE job categories.
- **/api/users:** Authentication and user management.


## Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your code follows the project's coding standards and is thoroughly tested.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to contact me via [LinkedIn](https://www.linkedin.com/in/abuthakir-s) .
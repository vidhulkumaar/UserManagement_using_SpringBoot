# User Management System using Spring Boot

A full-stack web application built with Spring Boot for managing users. It provides robust user authentication featuring user registration, OTP-based email verification, user login, and standard CRUD (Create, Read, Update, Delete) operations for user management.

## 🚀 Features

*   **User Registration:** Allows new users to register with their details.
*   **OTP Email Verification:** Sends an OTP (One-Time Password) to the user's email for account verification after registration.
*   **User Login:** Secure login authentication for verified users.
*   **User Dashboard:** A frontend dashboard to interact with user data.
*   **CRUD Operations:** Full capability to Add, Get (All/Single), Update, and Delete users.
*   **CORS Enabled:** Cross-Origin Resource Sharing is enabled for frontend integrations.

## 🛠️ Tech Stack

**Backend:**
*   Java (Version 25)
*   Spring Boot (Version 4.1.0)
*   Spring Data JPA (Hibernate)
*   Spring Boot Mail (for OTP emails)
*   Spring Boot Validation
*   Lombok (Boilerplate code reduction)

**Database:**
*   MySQL

**Frontend:**
*   HTML5, CSS3, JavaScript (Vanilla)

**Build Tool:**
*   Maven

## ⚙️ Prerequisites

Before you begin, ensure you have met the following requirements:
*   **Java Development Kit (JDK):** Version 25 or higher.
*   **Maven:** For building and managing project dependencies.
*   **MySQL:** A running instance of MySQL server.

## 🚀 Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vidhulkumaar/UserManagement_using_SpringBoot.git
    cd UserManagement_using_SpringBoot
    ```

2.  **Configure the Database & Mail properties:**
    Open `src/main/resources/application.properties` and update the database and email configurations:
    ```properties
    # Database Configuration
    spring.datasource.url=jdbc:mysql://localhost:3306/projectdb
    spring.datasource.username=root
    spring.datasource.password=your_mysql_password
    spring.jpa.hibernate.ddl-auto=update

    # Mail Configuration (For OTP)
    spring.mail.host=smtp.gmail.com
    spring.mail.port=587
    spring.mail.username=your_email@gmail.com
    spring.mail.password=your_app_password
    spring.mail.properties.mail.smtp.auth=true
    spring.mail.properties.mail.smtp.starttls.enable=true
    ```
    *Note: If you are using Gmail, you need to generate an "App Password" in your Google Account settings to use as the `spring.mail.password`.*

3.  **Build the project:**
    ```bash
    mvn clean install
    ```

4.  **Run the application:**
    ```bash
    mvn spring-boot:run
    ```

5.  **Access the application:**
    The frontend is served as static content. You can access the main page at:
    `http://localhost:8080/` (or `http://localhost:8080/index.html`)

## 📡 API Endpoints

The backend exposes the following REST APIs under the `/user` mapping:

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/user/register` | Register a new user |
| `POST` | `/user/verify` | Verify a user account using email and OTP |
| `POST` | `/user/login` | Authenticate and login a user |
| `POST` | `/user/add` | Add a new user directly |
| `GET` | `/user/all` | Retrieve a list of all users |
| `GET` | `/user/{id}` | Retrieve a specific user by their ID |
| `PUT` | `/user/update` | Update an existing user's details |
| `DELETE`| `/user/delete/{id}` | Delete a user by their ID |

## 📁 Project Structure

*   `src/main/java/.../Controller/`: Contains REST Controllers handling HTTP requests.
*   `src/main/java/.../Entity/`: Contains JPA entities (e.g., User) mapping to database tables.
*   `src/main/java/.../Repository/`: Contains JPA Repositories for database interactions.
*   `src/main/java/.../Service/`: Contains business logic and services (e.g., UserService, MailService).
*   `src/main/resources/static/`: Contains the frontend HTML, CSS, and JS files.
*   `src/main/resources/application.properties`: Configuration file for Spring Boot.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

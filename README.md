# ToDoListFullStackApplication


Project Name: ToDoList Application

Overview:
This project is a ToDoList application consisting of both backend and frontend components. The backend is developed using Spring Boot, while the frontend is built with React.js.

Installation:
1. Copy the backend folder and paste it in your Eclipse workspace.
2. Open Eclipse and import the project.
3. Build the project using Maven.

Backend Structure:
The backend follows a typical Spring Boot project structure:
- `src/main/java`: Contains Java source code.
  - `com.fullstackapplication.todobackend`: Root package for the backend.
    - `controller`: Contains REST controllers for handling HTTP requests.
    - `dto`: Contains Data Transfer Objects (DTOs) used for data transfer between layers.
    - `mapper`: Contains mapper classes responsible for mapping between DTOs and domain entities.
    - `model`: Contains entity classes representing data models.
    - `repository`: Contains Spring Data JPA repositories for database operations.
    - `service`: Contains service classes implementing business logic.
- `src/main/resources`: Contains application properties, such as database configuration.

Basic Setup:
- The project runs on port 8040 by default.
- A MySQL database named "todoapp" is created for storing ToDoList items.
- Modify the database settings and credentials in the application properties file according to your MySQL setup.
- Run the application, and it will start automatically.

Interact with the Application:
To check whether the backend is working:
1. Use Postman to interact with the RESTful APIs.
2. Use the following endpoints:
   - POST /add - Add a new ToDoList item.
     - URL: http://localhost:8040/add
   - GET /todolists - Retrieve all ToDoList items.
     - URL: http://localhost:8040/todolists
   - DELETE /tododelete/{id} - Delete a ToDoList item by ID.
     - URL: http://localhost:8040/tododelete/{id}
   - PUT /TaskToUpdate/{id} - Update a ToDoList item by ID.
     - URL: http://localhost:8040/TaskToUpdate/{id}
   - PUT /markComplete/{id} - Mark a ToDoList item as complete.
     - URL: http://localhost:8040/markComplete/{id}
   - PUT /markIncomplete/{id} - Mark a ToDoList item as incomplete.
     - URL: http://localhost:8040/markIncomplete/{id}




     Frontend Setup:
1. Unzip the frontend folder.
2. Copy and paste it into your Visual Studio workspace.
3. Inside the project folder, there will be a folder named "node_modules." Unzip it.
4. Open Visual Studio and start the application by running `npm start`.
5. The application will open in your default browser.

That's it! You're now ready to use the ToDoList application with both backend and frontend components.




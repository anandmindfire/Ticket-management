# Ticket Manager Application

This project is a full-stack ticket management system with a Spring Boot backend (using MongoDB) and a modern Vite + React + TypeScript frontend.

---

## Backend (Spring Boot + MongoDB)

- **Location:** Root directory (`/src/main/java/...`)
- **Tech:** Java 17+, Spring Boot 3.x, MongoDB Atlas (or local MongoDB)
- **API Base URL:** `http://localhost:8080/api/tickets`

### Main Features
- RESTful CRUD API for tickets
- CORS enabled for frontend communication
- MongoDB integration (Atlas or local)

### How to Run Backend
1. **Install Java 17+** and [Maven](https://maven.apache.org/).
2. Configure your MongoDB URI in `src/main/resources/application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb+srv://<user>:<password>@<cluster>/<database>
   ```
3. From the root directory, build and run:
   ```sh
   mvn clean package
   java -jar target/ticket-0.0.1-SNAPSHOT.jar
   ```
   Or use your IDE to run `TicketApplication.java`.

---

## Frontend (Vite + React + TypeScript)

- **Location:** `/client`
- **Tech:** Vite, React 18, TypeScript
- **Dev Server:** `http://localhost:5173` (or next available port)

### Main Features
- View, create, update, and delete tickets
- Modern and responsive UI
- Connects directly to backend API (CORS required)

### How to Run Frontend
1. Open a terminal in the `client` directory:
   ```sh
   cd client
   npm install
   npm run dev
   ```
2. Open your browser at the URL shown in the terminal (default: http://localhost:5173 or http://localhost:5174)

---

## API Endpoints
- `GET    /api/tickets` — List all tickets
- `GET    /api/tickets/{id}` — Get a ticket by ID
- `POST   /api/tickets` — Create a new ticket
- `PUT    /api/tickets/{id}` — Update a ticket
- `DELETE /api/tickets/{id}` — Delete a ticket

---

## Notes
- **CORS:** The backend is configured to allow requests from the frontend dev server.
- **MongoDB:** You can use either a local or Atlas cluster. Update the URI as needed.
- **Proxy:** The frontend is set up to use the full backend URL for API calls (not `/api` proxy).

---

## Troubleshooting
- If you see CORS errors, ensure the backend is running and CORS is enabled.
- If the frontend cannot connect, check both servers are running and the API URL is correct in `App.tsx`.
- For MongoDB connection issues, verify your URI and network access.

---


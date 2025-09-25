# Event Mate — Full Project (Frontend + Backend)

This archive contains a ready-to-run **frontend** (React + Tailwind) and **backend** (Spring Boot, Java) for *Event Mate*, an AI-assisted event planner and scheduler.

## What you get
- `backend/` — Spring Boot application (Maven)
- `frontend/` — React + Vite + Tailwind UI/UX
- `README.md` — this file (setup & data connectivity)

---

## Quick start (backend)

1. Ensure Java 17 and Maven are installed.
2. Open the `backend` folder in your IDE (IntelliJ/Eclipse) or terminal.
3. Run: `mvn spring-boot:run`  (H2 in-memory DB is pre-configured)
4. Server will start at `http://localhost:8080`

To use MySQL, edit `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/eventmate
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

## Quick start (frontend)

1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173`

The frontend calls the backend at `http://localhost:8080`. If you change backend port, update fetch URLs in the frontend (files in `src/` referencing `/api/events`).

## Data connectivity & flow (how data moves)

1. Frontend form (Create Event) sends `POST /api/events/create` with JSON payload.
2. Spring Boot `EventController` receives it and calls `EventService.createEvent`.
3. `EventService` uses `EventRepository` (Spring Data JPA) to persist `Event` to the database (H2/MySQL).
4. Listing events uses `GET /api/events/list` which returns saved events as JSON.
5. AI suggestion uses `POST /api/events/ai-suggest`:
   - `EventController` forwards event data to `EventService.suggestBestSchedule`
   - `EventService` calls `AiClient` (Spring AI) to generate suggestions using OpenAI
   - The suggestion text is returned to the frontend and displayed in a modal.

## API Endpoints
- `POST /api/events/create` — create event (JSON)
- `GET /api/events/list` — list events
- `GET /api/events/{id}` — get single event
- `POST /api/events/ai-suggest` — get AI suggestion for an event

## Notes & next steps
- Add authentication (JWT/OAuth) for production.
- Configure real OpenAI API key in `application.properties`.
- Add calendar library (FullCalendar) to frontend for rich calendar UI.
- Add email notifications & Google Calendar integration as extensions.

Good luck — drop a message if you want me to add FullCalendar integration, JWT auth, or Google Calendar sync!

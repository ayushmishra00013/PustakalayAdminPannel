# Pustakalay Admin Backend

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file in the backend folder:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=pustakalay
   ```
3. Start the server:
   ```
   npm run dev
   ```

## MySQL Table Setup

Run these SQL commands in your MySQL client to create the required tables:

```sql
CREATE DATABASE IF NOT EXISTS pustakalay;
USE pustakalay;

CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  published_year INT,
  genre VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS donors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  donated_books INT DEFAULT 0
);
```

## API Endpoints

- `GET /api/books` — List all books
- `GET /api/donors` — List all donors
- `GET /api/health` — Health check

## CORS

CORS is enabled for all origins by default. 
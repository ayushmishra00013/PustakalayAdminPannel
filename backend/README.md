# Pustakalay Admin Backend

## Prerequisites
- Node.js (v18+ recommended)
- MySQL

## Setup Instructions

### 1. Clone the repository
```
git clone <your-repo-url>
cd PustakalayAdminPannel
```

### 2. Set up the database
- Open MySQL Workbench or your MySQL CLI.
- Run the SQL in `backend/schema.sql` to create the database and tables:
  - In Workbench: File > Open SQL Script > select `schema.sql` > Run
  - In CLI: `mysql -u root -p < backend/schema.sql`

### 3. Configure environment variables
- Copy `backend/.env.example` to `backend/.env` (or `test.env` if your code uses that)
- Edit the file and fill in your MySQL username and password

### 4. Install dependencies
```
cd backend
npm install
cd ../
npm install
```

### 5. Run the backend
```
cd backend
npm run dev
```

### 6. Run the frontend
```
npm start
```

## Notes
- Do NOT commit your real `.env` file to git.
- If you want to use a different database name, update both the SQL and your `.env` file.
- For any issues, check your MySQL credentials and that the database is running. 
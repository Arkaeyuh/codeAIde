# codeAIde

A **next-generation coding practice platform** that helps users solve coding problems, receive tailored feedback, and improve their programming skills. Leveraging **OpenAI GPT-4** for code analysis, the platform provides insights into time complexity, optimal solutions, and more.

## Features

- **Coding Problems**: A library of algorithmic challenges with varying difficulty levels.
- **Real-Time Feedback**: Analyze code with OpenAI GPT-3, providing time complexity and suggestions.
- **Dynamic Skeletons**: Generate starter code for different languages (e.g., Python, Java).
- **User-Friendly Interface**: Clean and simple design built with Next.js and TailwindCSS.

## Tech Stack

- **Frontend**: React + Next.js (13+ App Router), TailwindCSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **AI Analysis**: OpenAI GPT-4
- **Environment Variables**:
  - `OPENAI_API_KEY`: API key for GPT-4 integration.
  - `DATABASE_URL`: URL for your PostgreSQL instance.

## Installation

To run the platform locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tamuhack25.git
cd tamuhack25
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup environment variables
Create a .env environment file to store your api keys locally

```bash
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
OPENAI_API_KEY=your-openai-api-key
```

### 4. Migrate the prisma db

```bash
npx prisma migrate dev --name init
```

### 5. Start the development server

```bash
npm run dev
```

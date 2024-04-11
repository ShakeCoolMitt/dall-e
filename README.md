# VectoAI - AI-Powered Icon Generator

VectoAI is an innovative web application designed to simplify and automate the creation of icons using advanced AI technology powered by OpenAI's API. This tool is ideal for designers, developers, and marketers who need custom icons but lack either the time or skills to create them manually. VectoAI provides a user-friendly interface and a robust backend to generate icons that meet the diverse needs of modern digital projects.

## Project Overview

VectoAI combines a sleek, intuitive front-end built with React and Next.js with a powerful, scalable backend using PostgreSQL and Prisma. It offers users two distinct tiers of service: a free tier for basic needs and a Pro tier for more advanced functionality. This system not only democratizes access to quality icon design through AI but also introduces a scalable model for different user requirements.

### Features

- **Dynamic Icon Generation**: Users can specify parameters and let the AI dynamically generate icons tailored to their needs.
- **Two Service Tiers**: Free access for basic uses, and a Pro subscription for advanced features and resources.
- **User History Access**: Pro users can view and retrieve past generated icons, enhancing their workflow.
- **Priority Customer Support**: Pro tier subscribers receive priority support, ensuring any issues are resolved quickly.

### Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: The React framework for production - it makes building efficient web applications effortless.
- **TypeScript**: A superset of JavaScript providing type safety at compile time.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: Next-generation ORM for Node.js and TypeScript, simplifying database workflows.
- **OpenAI API**: Provides artificial intelligence capabilities, enabling dynamic icon generation.

1. Install dependencies
```sh
npm install
```

2. Set up environment variables

Copy the .env.example file to a .env file and fill in your database credentials and OpenAI API key:
```sh
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
OPENAI_API_KEY="your_openai_api_key_here"

```

3. Run database migrations
```sh
npx prisma migrate dev
```
4. Start the development server
```sh
npm run dev
```




# Build CRUD REST API with NestJS, Docker, Swagger, Prisma

## Table of Contents
- [Build CRUD REST API with NestJS, Docker, Swagger, Prisma](#build-crud-rest-api-with-nestjs-docker-swagger-prisma)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [System Requirements](#system-requirements)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [API Documentation](#api-documentation)

## Introduction

This project demonstrates how to build a CRUD REST API using NestJS, Docker, Swagger, and Prisma. The API provides a foundation for creating, reading, updating, and deleting resources, while utilizing modern tools and frameworks for scalability and maintainability.

## System Requirements

- Node.js v14 or higher
- Docker
- Docker Compose
- Prisma CLI

## Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:Cyndii-Lauper/recipe-api.v1.git
    cd recipe-api.v1
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Start the Docker containers:
    ```bash
    docker-compose up -d
    ```

4. Run Prisma migrations to set up the database:
    ```bash
    npx prisma migrate dev --name init
    ```

## Project Structure

- `src/` - Contains the source code for the NestJS application.
- `prisma/` - Contains the Prisma schema and migration files.
- `docker-compose.yml` - Docker configuration for running the application and database services.
- `swagger/` - Swagger configuration for API documentation.

## Usage

To start the server locally, run:

```bash
npm run start:dev
```

## API Documentation

Swagger is integrated for API documentation. After starting the server, you can access the documentation at:
```bash
http://localhost:3000/api
```

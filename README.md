# JWT Role-Based Authentication API

## Overview
This project implements **JWT-based authentication with role-based access control (RBAC)** in a NestJS application. It allows users to log in using a username and password, receive a JWT token, and access different endpoints based on their assigned roles.

## Features
- User authentication using **JWT (JSON Web Token)**
- Role-based access control with custom **Guards**
- Secure endpoints that restrict access based on user roles
- Implements **Passport.js** for authentication strategies
- **Local Strategy** for username-password authentication
- **JWT Strategy** for token verification

## Technologies Used
- **NestJS** (A progressive Node.js framework)
- **Passport.js** (Authentication middleware)
- **JWT (JSON Web Tokens)** (For secure authentication)

---

## Project Setup
### Clone the repository
```sh
git clone <repo_url>
cd my-sixth-app
```

The server will start at `http://localhost:3000`.

---

## Code Structure & Explanation

### 1. **User Authentication & JWT Token Generation**
- `local.strategy.ts`: Implements username-password authentication.
- `jwt.strategy.ts`: Extracts and validates JWT from the request.
- `auth.service.ts`: Handles JWT token generation.

**Login Flow:**
1. User sends a `POST /app/login` request with `username` and `password`.
2. `LocalStrategy` validates the user.
3. If valid, `AuthService` generates a JWT token.
4. User receives the JWT token to use for protected endpoints.

### 2. **Role-Based Access Control (RBAC)**
- `constants.ts`: Defines available roles (`IOS_DEVELOPER`, `ANDROID_DEVELOPER`, `GAME_DEVELOPER`).
- `role.guard.ts`: Custom **Guard** that checks the user's role before allowing access to endpoints.

**Access Control Flow:**
1. A user makes a request to a protected endpoint.
2. `JwtStrategy` verifies the JWT token.
3. `RoleGuard` checks if the user has the correct role.
4. If authorized, access is granted; otherwise, an error is returned.

### 3. **User Management**
- `user.service.ts`: Contains a hardcoded list of users with different roles.
- `user.entity.ts`: Defines the **User** model.

---

## API Endpoints

### 1. **User Login (Generate JWT Token)**
#### Request:
```sh
POST /app/login
Content-Type: application/json

{
  "username": "User1",
  "password": "password1"
}
```
#### Response:
```json
{
  "access_token": "<JWT_TOKEN>"
}
```

### 2. **Access IOS Developer Data (Protected Route)**
#### Request:
```sh
GET /app/iosDeveloper
Authorization: Bearer <JWT_TOKEN>
```
#### Response:
```json
{
  "message": "This is private data for IOS Developer",
  "user": { "username": "User1", "role": "Ios-Developer" }
}
```

### 3. **Access Android Developer Data (Protected Route)**
#### Request:
```sh
GET /app/androidDeveloper
Authorization: Bearer <JWT_TOKEN>
```
#### Response:
```json
{
  "message": "This is private data for Android Developer",
  "user": { "username": "User2", "role": "Android-Developer" }
}
```

---

## Security Considerations
- The secret key (`the-secret-key`) should be stored securely (e.g., in environment variables).
- Passwords should be hashed before storing in a database.
- Token expiration should be set for better security.

---

## Future Enhancements
- Connect to a real database (e.g., PostgreSQL, MongoDB)
- Implement password hashing using `bcrypt`
- Add refresh token functionality

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

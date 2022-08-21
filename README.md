
# User Test API

Small Rest API, with Unit and E2E tests.

## Technology in use
NestJS  
Prisma  
SQLite

## How to setup
1. Clone repository
2. Run command `npm install`
3. Start backend with command `npm run start`
4. Migrate database with command `npx prisma migrate dev`
5. Generate Prisma Client `npx prisma generate`
5. Seed database with command `npm run seed` 
6. Open prisma studio to see data `npx prisma studio`

## OpenAPI
http://localhost:3000/api

## Testing

### unit tests
`npm run test`

### e2e tests
`npm run test:e2e`

### test coverage
`npm run test:cov`
```
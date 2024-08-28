# express + nodejs

##  integrate with prisma + postgresql

### 0. Install Postgresql With Docker

```sh
docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

### 1. Install Prisma CLI

```sh
pnpm install @prisma/client
```
### 2. Init a Prisma Schema

```sh
npx prisma init
```

### 3. Migrate the database

```sh
npx prisma migrate dev --name initname
```

### 4. Generate the prisma client

```sh
npx prisma generate
```

```js
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({
  log:  ["error", "info", "warn", "query"]
})

export default prisma
```

### 6. Open the Prisma Studio

```sh
npx prisma studio
```

### 7. Using Prisma in Express

```sh
(async () => {
  return await prisma.tableName.findMany()
})()
```
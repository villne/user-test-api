import { PrismaClient } from '@prisma/client';
import * as seedData from './MOCK_DATA.json';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const data of seedData) {
    const user = await prisma.user.create({
      data: data,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

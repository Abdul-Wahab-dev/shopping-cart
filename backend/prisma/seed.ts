import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const joi = await prisma.user.upsert({
    where: {
      email: "test1@gmail.com",
    },
    update: {},
    create: {
      email: "test1@gmail.com",
      name: "test1",
      id: 1,
      password: "12345678",
    },
  });
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

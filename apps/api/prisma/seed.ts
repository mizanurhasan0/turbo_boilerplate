import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function main() {

    const users = Array.from({ length: 20 }).map(() => (
        {

            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            role: faker.person.jobType()
        }
    ));
    await prisma.user.createMany({
        data: users
    })

    const posts = Array.from({ length: 40 }).map(() => ({
        title: faker.lorem.sentence(),
        authorId: faker.number.int({ min: 1, max: 10 }),
        published: true,
    }))

    await prisma.post.createMany({ data: posts });
    console.log('Seeding completed!')
}
main().then(() => { prisma.$disconnect(); process.exit(0) })
    .catch((e) => { prisma.$disconnect(); console.error(e); process.exit() })
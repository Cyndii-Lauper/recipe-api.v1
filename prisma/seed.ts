import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy recipes
    const recipe1 = await prisma.recipe.upsert({
        where: { title: 'Spaghetti Carbonara' },
        update: {},
        create: {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian dish',
            ingredients: 'Spaghetti, eggs, cheese, bacon',
            instructions: '1. Boil the spaghetti, 2. cook the bacon, 3. mix the eggs and cheese, 4. serve',
        },
    });

    const recipe2 = await prisma.recipe.upsert({
        where: { title: 'Chicken Curry' },
        update: {},
        create: {
            title: 'Chicken Curry',
            description: 'A classic Indian dish',
            ingredients: 'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
            instructions: '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.',
        },
    });

    console.log({ recipe1, recipe2 });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close the Prisma Client connection
        await prisma.$disconnect();
    });
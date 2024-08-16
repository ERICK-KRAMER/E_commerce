import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const categories = ['Men', 'Women', 'Kids'];

    for (const categoryName of categories) {
        const category = await prisma.category.upsert({
            where: { name: categoryName },
            update: {},
            create: { name: categoryName },
        });

        console.log(`Upserted category: ${category.name}`);
    }

    const products = [
        {
            name: 'Men T-Shirt',
            description: 'Comfortable cotton t-shirt',
            price: 19.99,
            image: 'men-tshirt.jpg',
            quantity: 100,
            categoryName: 'Men',
        },
        {
            name: 'Men Jeans',
            description: 'Stylish denim jeans',
            price: 49.99,
            image: 'men-jeans.jpg',
            quantity: 50,
            categoryName: 'Men',
        },
        {
            name: 'Women Dress',
            description: 'Elegant evening dress',
            price: 79.99,
            image: 'women-dress.jpg',
            quantity: 30,
            categoryName: 'Women',
        },
        {
            name: 'Women Handbag',
            description: 'Leather handbag',
            price: 99.99,
            image: 'women-handbag.jpg',
            quantity: 20,
            categoryName: 'Women',
        },
        {
            name: 'Kids T-Shirt',
            description: 'Cute cotton t-shirt for kids',
            price: 15.99,
            image: 'kids-tshirt.jpg',
            quantity: 100,
            categoryName: 'Kids',
        },
        {
            name: 'Kids Shoes',
            description: 'Comfortable shoes for kids',
            price: 29.99,
            image: 'kids-shoes.jpg',
            quantity: 60,
            categoryName: 'Kids',
        },
    ];

    for (const productData of products) {
        const category = await prisma.category.findUnique({
            where: { name: productData.categoryName },
        });

        if (category) {
            await prisma.product.create({
                data: {
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    image: productData.image,
                    quantity: productData.quantity,
                    category_id: category.id,
                },
            });

            console.log(`Created product: ${productData.name}`);
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

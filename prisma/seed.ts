const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const categories = ['Pants', 'Short', 'Dress'];

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
            name: 'Short Cinto',
            description: "Malha Crepe Liverpool / Malha Scuba",
            price: 19.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1681128707_38a6496896f7c8b8bf38.jpg',
                'https://arquivos.facilzap.com.br/produtos/1681128703_7d3736b104bb8ca7d4b4.jpg'
            ],
            quantity: 100,
            categoryName: 'Short',
        },
        {
            name: 'Calça Jade Flare',
            description: 'Malha Scuba Brutt',
            price: 49.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1708084207_cdaf8e3e9789f2297c3f.jpg.webp',
                'https://arquivos.facilzap.com.br/produtos/1708084220_a7312b2359164e85ab81.jpg.webp'
            ],
            quantity: 50,
            categoryName: 'Pants',
        },
        {
            name: 'Calça Zoe / Forrada',
            description: 'Tecido crepe dunnas FORRADA',
            price: 49.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1672083518_3a16a849ca607a3bd4c1.jpg',
                'https://arquivos.facilzap.com.br/produtos/1683228912_59b4ba835d368d214f64.jpg'
            ],
            quantity: 30,
            categoryName: 'Pants',
        },
        {
            name: 'Calça Skiny Cinto',
            description: 'Malha Crepe Liverpool',
            price: 59.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1705156529_c8913df0e466badfeb3f.jpg',
                'https://arquivos.facilzap.com.br/produtos/1705156523_7bcc25ab77eabe04aaaf.jpg'
            ],
            quantity: 20,
            categoryName: 'Pants',
        },
        {
            name: 'Calça Flare Cinto',
            description: 'Malha Crepe Liverpool',
            price: 49.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1681126587_76deb079e21838873aac.jpg',
                'https://arquivos.facilzap.com.br/produtos/1681126593_b4c9ab9e04d555b05c16.jpg'
            ],
            quantity: 100,
            categoryName: 'Pants',
        },
        {
            name: 'Short Dunnas / Forrado',
            description: 'Short Dunnas',
            price: 29.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1723664625_c92e4857b748f6f8873e.jpg.webp',
                'https://arquivos.facilzap.com.br/produtos/1723664623_432119322e753a64a99c.jpg.webp'
            ],
            quantity: 60,
            categoryName: 'Short',
        },
        {
            name: 'Calça Flare',
            description: 'Malha Crepe Liverpool',
            price: 39.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1651065526_8feb1897d9d2db0fa6df.png',
                'https://arquivos.facilzap.com.br/produtos/1651065526_8feb1897d9d2db0fa6df.png'
            ],
            quantity: 60,
            categoryName: 'Pants',
        },
        {
            name: 'Calça Skiny',
            description: 'Malha Crepe Liverpool',
            price: 39.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1706124129_8ea02f741c81dfffeb93.jpg.webp',
                'https://arquivos.facilzap.com.br/produtos/1706124150_70a1b9f037e611581919.jpg.webp'
            ],
            quantity: 60,
            categoryName: 'Pants',
        },
        {
            name: 'VESTIDOS LUXO RENDA LISO',
            description: '',
            price: 100.00,
            image: ['https://arquivos.facilzap.com.br/produtos/1720215116_c9adea7832f551858a58.jpeg.webp',],
            quantity: 60,
            categoryName: 'Dress',
        },
        {
            name: 'VESTIDO LUXO MALHA LESS RODADO',
            description: '',
            price: 94.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1721943587_786c1b7fd98057cc1dd8.jpeg.webp',],
            quantity: 60,
            categoryName: 'Dress',
        },
        {
            name: 'VESTIDO PLISSADO MANGA 3/4',
            description: '',
            price: 100.00,
            image: ['https://arquivos.facilzap.com.br/produtos/1723815226_746310282d99c1dd9c8d.jpeg.webp',],
            quantity: 60,
            categoryName: 'Dress',
        },
        {
            name: 'VESTIDO CREPE DIOR TULE',
            description: '',
            price: 59.99,
            image: ['https://arquivos.facilzap.com.br/produtos/1723820073_7f505c12d2f792a9c092.jpeg.webp',],
            quantity: 60,
            categoryName: 'Dress',
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

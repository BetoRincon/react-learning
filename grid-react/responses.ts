export const categories = [
    {
        id: "",
        name: 'All categories',
        description: 'All'
    },
    {
        id: "dc5f7afb-defb-4782-bf91-3636c31c116d",
        name: 'Apetizer',
        description: 'Apetizer'
    },
    {
        id: 'ebec9063-0ad4-4d17-9c81-2ddf245b3745',
        name: 'Drinks',
        description: 'Drinks'
    },
    {
        id: 'bf85eac5-d09e-4f66-85f0-9a9e76e5f51b',
        name: 'Hamburger',
        description: 'Hamburger'
    },
    {
        id: 'bf85eac5-d09e-4f66-85f0-9a9e76e5f50f',
        name: 'Hot Dog',
        description: 'Hot Dog'
    },
    {
        id: 'e0bb4766-96e0-4043-b24f-2f036d002791',
        name: 'Pizza',
        description: 'Pizza'
    },{
        id: 'e0a3a235-2936-410b-98f1-6d610e0073eb',
        name: 'Desserts',
        description: 'Deserts'
    }
];

export const products = [
    {
        id: '7f7eafeb-9f0f-434b-8b68-db9448e02762',
        name: 'British Hamburger',
        description: 'Delicious British Hamburger',
        price: 10,
        image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categories: ['bf85eac5-d09e-4f66-85f0-9a9e76e5f51b'],
        type: 'star'
    },
    {
        id: '2cc6df35-9af4-42e0-ab45-39326fe0da70',
        name: 'Greek Hamburger',
        description: 'Greek Hamburger',
        price: 10,
        image: 'https://assets.bonappetit.com/photos/6282c0a2379490891479b046/1:1/w_2240,c_limit/0622-Dads-Hamburger-Sandwich.jpg',
        categories: ['bf85eac5-d09e-4f66-85f0-9a9e76e5f51b']
    },
    {
        id: '8aa939d8-500d-47ca-b619-3991341d27a4',
        name: 'Pepperoni Pizza',
        description: 'Pepperoni Pizza',
        price: 10,
        image: 'https://www.foodandwine.com/thmb/FIWopk-Qta1im5q72HBQUxvEZGI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/soppressata-pizza-with-calabrian-chile-hot-honey-FT-RECIPE0422-827abb3537834dbcb6ab0bbd6efece39.jpg',
        categories: ['e0bb4766-96e0-4043-b24f-2f036d002791'],
        type: 'star'
    },
    // {
    //     id: '7f7eafeb-9f0f-434b-8b68-db9448e02762',
    //     name: 'British Hamburger',
    //     description: 'British Hamburger',
    //     price: 10,
    //     image: 'https://cdn.britannica.com/31/122031-050-F8FCA663/Hamburger-cheeseburger.jpg',
    //     categories: ['bf85eac5-d09e-4f66-85f0-9a9e76e5f51b'],
    //     type: 'star'
    // },
    {
        id: '33d59baf-1758-4007-8377-3378ff85e4c7',
        name: 'American Hamburger',
        description: 'American Hamburger',
        price: 10,
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp',
        categories: ['bf85eac5-d09e-4f66-85f0-9a9e76e5f51b']
    },
    // {
    //     id: '8aa939d8-500d-47ca-b619-3991341d27a4',
    //     name: 'Pepperoni Pizza',
    //     description: 'Pepperoni Pizza',
    //     price: 10,
    //     image: 'https://www.foodandwine.com/thmb/FIWopk-Qta1im5q72HBQUxvEZGI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/soppressata-pizza-with-calabrian-chile-hot-honey-FT-RECIPE0422-827abb3537834dbcb6ab0bbd6efece39.jpg',
    //     categories: ['e0bb4766-96e0-4043-b24f-2f036d002791'],
    //     type: 'star'
    // },
    {
        id: 'c7e8a3b1-3e4f-4d2a-9e8b-5f6g7h8i9j0k',
        name: 'Potato Chips',
        description: 'Classic Potato Chips',
        price: 3.5,
        image: 'https://i.pinimg.com/564x/fb/64/e8/fb64e8726dfacd3d2c1e1610794ed3f5.jpg',
        categories: ['dc5f7afb-defb-4782-bf91-3636c31c116d'],
        type: 'regular'
    },
    {
        id: 'd4e5f6g7-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        name: 'Hot Dog',
        description: 'Classic Hot Dog',
        price: 4.99,
        image: 'https://taste.co.za/wp-content/uploads/2015/03/gourmet-hot-dog-with-red-onion-chilli-and-coriander-salsa-3258-400x400.jpg.webp',
        categories: ['bf85eac5-d09e-4f66-85f0-9a9e76e5f50f'],
        type: 'regular'
    }
]
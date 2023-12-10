import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

let smartAnswer;

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('client message', (msg) => {
        console.log('message: ' + msg);
        smartAnswer = findAnswer(msg);
        socket.emit('bot-message', smartAnswer);
        console.log('response: ', smartAnswer);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

function findAnswer(query) {
    const greetings = ["hello", "hi", "hey"];
    const farewells = ["bye", "goodbye", "ciao"];

    for (const greeting of greetings) {
        if (query.toLowerCase().includes(greeting)) {
            return "Hi! Which recipe would you like me to look for?";
        }
    }

    for (const farewell of farewells) {
        if (query.toLowerCase().includes(farewell)) {
            return "Have a nice day!";
        }
    }

    const recipes = [
        { keyword: "pizza", link: "https://recipes.timesofindia.com/recipes/pizza/rs56933159.cms", ingredients: "2 cup all purpose flour \n\n                100 ml tomato ketchup \n\n                1 tomato \n\n                2 onion \n\n                1 teaspoon chilli flakes \n\n                1 teaspoon baking powder \n\n                1 teaspoon sugar \n\n                2 teaspoon virgin olive oil\n\n                100 gm processed cheese \n\n                4 mushroom \n\n                1/2 capsicum (green pepper) \n\n                1 teaspoon oregano \n\n                1/2 cup mozzarella \n\n                1 tablespoon dry yeast \n\n                water as required" },
        { keyword: "pasta", link: "https://recipes.timesofindia.com/recipes/red-sauce-pasta/rs54311206.cms", ingredients: "225 gm pasta penne\n        4 cloves garlic\n        2 teaspoon basil\n        salt as required\n        2 pinches powdered black pepper\n        2 red chilli\n        450 gm roma tomato\n        1/2 teaspoon chilli flakes\n        1 tablespoon parsley\n        1 1/2 tablespoon extra virgin olive oil\n        3 cup water" },
        { keyword: "potatoes", link: "https://recipes.timesofindia.com/recipes/classic-mashed-potatoes/rs88314626.cms", ingredients: "5 potato\n        1/2 cup butter\n        black pepper as required\n        1/2 teaspoon paprika\n        1 cup heavy cream\n        salt as required\n        1 teaspoon oregano" },
        { keyword: "egg", link: "https://recipes.timesofindia.com/recipes/egg-spinach-salad/rs90082380.cms", ingredients: "4 egg\n        150 gm small potatoes with skins\n        2 handfuls coriander leaves\n        1/2 teaspoon black pepper\n        2 teaspoon extra virgin olive oil\n        4 cloves garlic\n        1 cup spinach\n        1/2 cup parmesan cheese\n        1 teaspoon dry red chili\n        salt as required\n        water as required" },
        { keyword: "chicken", link: "https://recipes.timesofindia.com/recipes/crispy-chicken/rs75579926.cms", ingredients: "270 gm chicken\n        1 tablespoon garlic salt\n        1 tablespoon paprika powder\n        black pepper as required\n        water as required\n        1 1/2 cup all purpose flour\n        2 egg\n        salt as required\n        2 cup refined oil" },
        { keyword: "pancake", link: "https://recipes.timesofindia.com/recipes/banana-pancake/rs57184288.cms", ingredients: "1 pinch all purpose flour\n        4 banana\n        1/2 teaspoon powdered cinnamon\n        2 cup milk\n        1/2 teaspoon salt\n        1 egg\n        1 tablespoon sugar\n        1/2 teaspoon baking powder\n        2 tablespoon butter" },
        { keyword: "vegan", link: "https://recipes.timesofindia.com/recipes/rice-and-mushroom-risotto/rs81396764.cms", ingredients: "1 cup arborio rice\n        3 cup mushroom\n        5 cloves garlic\n        5 leaves thyme\n        2 cup veg stock\n        1 onion\n        1 bay leaf\n        1 tablespoon virgin olive oil" },
        { keyword: "gluten free", link: "https://recipes.timesofindia.com/recipes/watermelon-feta-salad/rs84753999.cms", ingredients: "6 cup chopped into cubes,de seeded watermelon\n        225 gm crushed cheese- feta\n        1 tablespoon lime juice\n        1 handful mint leaves\n        black pepper as required\n        3 cup chopped into cubes cucumber\n        1/4 cup extra virgin olive oil\n        1/2 teaspoon lime zest\n        salt as required" },
        { keyword: "protein", link: "https://recipes.timesofindia.com/recipes/beer-and-lime-chicken/rs60734565.cms", ingredients: "400 gm chicken\n        3 tablespoon lime juice\n        2 teaspoon honey\n        1 teaspoon black pepper\n        1 tablespoon spice paprika\n        1 1/2 cup beer\n        7 cloves minced garlic\n        salt as required\n        3 tablespoon cilantro" },
        { keyword: "barbeque", link: "https://recipes.timesofindia.com/recipes/bbq-chicken/rs83330410.cms", ingredients: "2 pounds chicken\n        1 cup yoghurt (curd)\n        2 tablespoon coriander powder\n        1/2 teaspoon turmeric\n        2 tablespoon vinegar\n        salt as required\n        3 tablespoon lemon juice\n        2 tablespoon cumin powder\n        1/2 cup cilantro\n        8 cloves garlic\n        1 teaspoon black pepper\n        2 teaspoon paprika powder" },
        { keyword: "omelette", link: "https://recipes.timesofindia.com/recipes/broccoli-bell-pepper-omelette/rs99784433.cms", ingredients: "3 egg\n        1/2 cup green beans\n        1 piece green chilli\n        black pepper as required\n        chilli flakes as required\n        1 handful coriander leaves\n        1 red bell pepper\n        1/2 cup broccoli\n        salt as required\n        1/2 teaspoon red chilli powder\n        oregano as required" },
        { keyword: "chocolate", link: "https://recipes.timesofindia.com/recipes/hot-chocolate-breakfast-bowl/rs96677197.cms", ingredients: "2 tablespoon cocoa powder\n        1/2 cup heavy cream\n        3 tablespoon flaked almonds\n        2 tablespoon coconut flake\n        1/4 cup dark chocolate\n        1 cup full cream milk\n        1 teaspoon corn flour\n        1 banana\n        2 tablespoon sugar\n        2 dashes cinnamon" },
        { keyword: "sandwich", link: "https://recipes.timesofindia.com/recipes/tomato-basil-sandwich/rs93759089.cms", ingredients: "6 slices bread- brown\n        9 leaves sweet basil\n        black pepper as required\n        1 tablespoon oregano\n        1 tablespoon garlic\n        3 tomato\n        salt as required\n        1 teaspoon chilli flakes\n        1 cup low fat mozzarella cheese" },
        { keyword: "snack", link: "https://recipes.timesofindia.com/recipes/buckwheat-amp-nuts-bar/rs94640318.cms", ingredients: "1/4 cup buckwheat\n        2 tablespoon desiccated coconut\n        2 tablespoon powdered jaggery\n        1/2 tablespoon almonds\n        2 tablespoon sesame seeds\n        1/4 teaspoon green cardamom\n        1 tablespoon condensed milk\n        1/2 tablespoon cashews" },
        { keyword: "cake", link: "https://recipes.timesofindia.com/recipes/black-forest-cake/rs79623521.cms", ingredients: "2 cup all purpose flour\n        3/4 cup unsweetened cocoa powder\n        1/2 teaspoon baking soda\n        3 egg\n        1/2 cup vegetable oil\n        2 cup sugar\n        1 teaspoon baking powder\n        3/4 teaspoon salt\n        1 cup milk\n        1 teaspoon vanilla extract" },
        { keyword: "sausage", link: "https://recipes.timesofindia.com/recipes/sausages-and-eggs/rs75698037.cms", ingredients: "6 mutton sausages\n        2 tablespoon refined oil\n        salt as required\n        3 leaves coriander leaves\n        6 egg\n        1/4 cup cheese-cheddar\n        black pepper as required" },
        { keyword: "burger", link: "https://recipes.timesofindia.com/recipes/mexican-burger/rs75584113.cms", ingredients: "250 gm chicken breasts\n        2 tablespoon chipotle sauce\n        1 avocados\n        1 handful cherry tomatoes\n        2 tablespoon lime juice\n        salt as required\n        1 handful baby lettuce\n        4 burger buns\n        4 slices cheese slices\n        1 handful jalapeno\n        1 tablespoon garlic\n        2 tablespoon refined oil\n        black pepper as required" },

    ];

    for (const recipe of recipes) {
        if (query.toLowerCase().includes(recipe.keyword)) {
            return `Here's a ${recipe.keyword} recipe:\nIngredients:\n${recipe.ingredients}\nFor more instructions, visit: ${recipe.link}`;
        }
    }

    return "Can't find your recipe";
}

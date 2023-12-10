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
    // Implement logic to search for a recipe in your data or API.
    // This is a simplified example; in practice, you'd connect to a recipe source.
    if (query.toLowerCase().includes("pizza")) {
        return `Here's a pizza recipe: \n
                ingredients: \n
                2 cup all purpose flour \n
                100 ml tomato ketchup \n
                1 tomato \n
                2 onion \n
                1 teaspoon chilli flakes \n
                1 teaspoon baking powder \n
                1 teaspoon sugar \n
                2 teaspoon virgin olive oil\n
                100 gm processed cheese \n
                4 mushroom \n
                1/2 capsicum (green pepper) \n
                1 teaspoon oregano \n
                1/2 cup mozzarella \n
                1 tablespoon dry yeast \n
                water as required
                for more instructions on how to prepare visit on the following link:
                https://recipes.timesofindia.com/recipes/pizza/rs56933159.cms`
                ;
    } else if (query.toLowerCase().includes("pasta")) {
        return `225 gm pasta penne
        4 cloves garlic
        2 teaspoon basil
        salt as required
        2 pinches powdered black pepper
        2 red chilli
        450 gm roma tomato
        1/2 teaspoon chilli flakes
        1 tablespoon parsley
        1 1/2 tablespoon extra virgin olive oil
        3 cup water
        for more instructions on how to prepare visit on the following link:
        https://recipes.timesofindia.com/recipes/red-sauce-pasta/rs54311206.cms`;
    }
       
        else if (query.toLowerCase().includes("potatoes")) {
        return `5 potato
        1/2 cup butter
        black pepper as required
        1/2 teaspoon paprika
        1 cup heavy cream
        salt as required
        1 teaspoon oregano
        for more instructions on how to prepare visit on the following link:
        https://recipes.timesofindia.com/recipes/classic-mashed-potatoes/rs88314626.cms`
       }
       else if (query.toLowerCase().includes("egg")) {
        return `4 egg
        150 gm small potatoes with skins
        2 handfuls coriander leaves
        1/2 teaspoon black pepper
        2 teaspoon extra virgin olive oil
        4 cloves garlic
        1 cup spinach
        1/2 cup parmesan cheese
        1 teaspoon dry red chili
        salt as required
        water as required
        for more instructions on how to prepare visit on the following link:
        https://recipes.timesofindia.com/recipes/egg-spinach-salad/rs90082380.cms`
       }
       else if (query.toLowerCase().includes("chicken")) {
        return `270 gm chicken
        1 tablespoon garlic salt
        1 tablespoon paprika powder
        black pepper as required
        water as required
        1 1/2 cup all purpose flour
        2 egg
        salt as required
        2 cup refined oil
        for more instructions on how to prepare visit on the following link:
        https://recipes.timesofindia.com/recipes/crispy-chicken/rs75579926.cms`
       }
       else if (query.toLowerCase().includes("pancake")) {
        return `1 pinch all purpose flour
        4 banana
        1/2 teaspoon powdered cinnamon
        2 cup milk
        1/2 teaspoon salt
        1 egg
        1 tablespoon sugar
        1/2 teaspoon baking powder
        2 tablespoon butter
        for more instructions on how to prepare visit on the following link:
        https://recipes.timesofindia.com/recipes/banana-pancake/rs57184288.cms`
       }
       else if (query.toLowerCase().includes("vegan")) {
        return `1 cup arborio rice
        3 cup mushroom
        5 cloves garlic
        5 leaves thyme
        2 cup veg stock
        1 onion
        1 bay leaf
        1 tablespoon virgin olive oil
        https://recipes.timesofindia.com/recipes/rice-and-mushroom-risotto/rs81396764.cms`
       }
       else if (query.toLowerCase().includes("gluten free")) {
        return `6 cup chopped into cubes,de seeded watermelon
        225 gm crushed cheese- feta
        1 tablespoon lime juice
        1 handful mint leaves
        black pepper as required
        3 cup chopped into cubes cucumber
        1/4 cup extra virgin olive oil
        1/2 teaspoon lime zest
        salt as required
        https://recipes.timesofindia.com/recipes/watermelon-feta-salad/rs84753999.cms`
       }
       else if (query.toLowerCase().includes("protein")) {
        return `400 gm chicken
        3 tablespoon lime juice
        2 teaspoon honey
        1 teaspoon black pepper
        1 tablespoon spice paprika
        1 1/2 cup beer
        7 cloves minced garlic
        salt as required
        3 tablespoon cilantro
        https://recipes.timesofindia.com/recipes/beer-and-lime-chicken/rs60734565.cms`
       }
       else if (query.toLowerCase().includes(["bbq", "barbeque"])) {
        return `2 pounds chicken
        1 cup yoghurt (curd)
        2 tablespoon coriander powder
        1/2 teaspoon turmeric
        2 tablespoon vinegar
        salt as required
        3 tablespoon lemon juice
        2 tablespoon cumin powder
        1/2 cup cilantro
        8 cloves garlic
        1 teaspoon black pepper
        2 teaspoon paprika powder
        https://recipes.timesofindia.com/recipes/bbq-chicken/rs83330410.cms`
       }
       else if (query.toLowerCase().includes("omelette")) {
        return `3 egg
        1/2 cup green beans
        1 piece green chilli
        black pepper as required
        chilli flakes as required
        1 handful coriander leaves
        1 red bell pepper
        1/2 cup broccoli
        salt as required
        1/2 teaspoon red chilli powder
        oregano as required
        https://recipes.timesofindia.com/recipes/broccoli-bell-pepper-omelette/rs99784433.cms`
       }
       else if (query.toLowerCase().includes("chocolate")) {
        return `2 tablespoon cocoa powder
        1/2 cup heavy cream
        3 tablespoon flaked almonds
        2 tablespoon coconut flake
        1/4 cup dark chocolate
        1 cup full cream milk
        1 teaspoon corn flour
        1 banana
        2 tablespoon sugar
        2 dashes cinnamon
        https://recipes.timesofindia.com/recipes/hot-chocolate-breakfast-bowl/rs96677197.cms`
       }
       else if (query.toLowerCase().includes("sandwich")) {
        return `6 slices bread- brown
        9 leaves sweet basil
        black pepper as required
        1 tablespoon oregano
        1 tablespoon garlic
        3 tomato
        salt as required
        1 teaspoon chilli flakes
        1 cup low fat mozzarella cheese
        https://recipes.timesofindia.com/recipes/tomato-basil-sandwich/rs93759089.cms`
       }
       else if (query.toLowerCase().includes("snack")) {
        return `1/4 cup buckwheat
        2 tablespoon desiccated coconut
        2 tablespoon powdered jaggery
        1/2 tablespoon almonds
        2 tablespoon sesame seeds
        1/4 teaspoon green cardamom
        1 tablespoon condensed milk
        1/2 tablespoon cashews
        https://recipes.timesofindia.com/recipes/buckwheat-amp-nuts-bar/rs94640318.cms`
       }
       else if (query.toLowerCase().includes("cake")) {
        return `2 cup all purpose flour
        3/4 cup unsweetened cocoa powder
        1/2 teaspoon baking soda
        3 egg
        1/2 cup vegetable oil
        2 cup sugar
        1 teaspoon baking powder
        3/4 teaspoon salt
        1 cup milk
        1 teaspoon vanilla extract
        https://recipes.timesofindia.com/recipes/black-forest-cake/rs79623521.cms
        `
       }
       else if (query.toLowerCase().includes("sausage")) {
        return `6 mutton sausages
        2 tablespoon refined oil
        salt as required
        3 leaves coriander leaves
        6 egg
        1/4 cup cheese-cheddar
        black pepper as required
        https://recipes.timesofindia.com/recipes/sausages-and-eggs/rs75698037.cms`
       }
       else if (query.toLowerCase().includes("burger")) {
        return `250 gm chicken breasts
        2 tablespoon chipotle sauce
        1 avocados
        1 handful cherry tomatoes
        2 tablespoon lime juice
        salt as required
        1 handful baby lettuce
        4 burger buns
        4 slices cheese slices
        1 handful jalapeno
        1 tablespoon garlic
        2 tablespoon refined oil
        black pepper as required
        https://recipes.timesofindia.com/recipes/mexican-burger/rs75584113.cms`
       }
       else if (query.toLowerCase().includes(["no", "not", "false"])) {
        return `I'm sorry. can you repeat`
       }
       else if (query.toLowerCase().includes(["by", "goodbye", "bye"])) {
        return "Have a nice day!"
       }

      else if (query.toLowerCase().includes(["hello", "hi", "Hey"]))  {
        return "Hi! which recipe you would like me to look for?"

      }
    
    return "Can't find your recipe"; // Return this if no matching recipe is found.
}

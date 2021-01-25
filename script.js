// Let there be light!

const lines = "----------------------------------";
const meals = ["Breakfast", "Morning Snack", "Lunch", "Afternoon Snack", "Dinner"] 
const categories = {
    'Breakfast': ['breakfast'],
    'Morning Snack': ['sandwiches','drinks'],
    'Lunch': ['main','sauces','salads','desserts'],
    'Afternoon Snack': ['snacks','breads'],
    'Dinner': ['soups','pasta', 'vegetables']
};
let meal = {
    snacks: [
    "Ragin' Cajun Popcorn Fast",
    "Asian Fusion Party Mix",
    "Sesame Pita Chips Fast",
    "Tortilla Chips Fast",
    "Black Sesame Wonton Chips Fast",
    "Roasted Chickpeas",
    "Fiery Pumpkin Seeds Fast",
    "Personalized Trail Mix Fast",
    "Agave-Glazed Pecans Fast",
    "Five-Spiced Walnuts Fast",
    "Curried Cashews Fast",
    "Edamame With Coarse Salt Fast",
    "Jerk-Spiced Soy Jerky",
    "Flower Power Granola Squares",
    "Green-Green Guacamole Fast",
    "Black And Green Olive Tapenade Fast",
    "Back-To-Basics Hummus Fast",
    "Roasted Red Pepper Hummus Fast",
    "White Bean And Dill Hummus Fast",
    "Smoky Chipotle-Pinto Hummus Fast",
    "Baba Ghanoush",
    "Three-Bean Dip Fast",
    "Black Bean And Sun-Dried Tomato Dip Fast",
    "Mylie's Secret Queso Dip Fast",
    "Layered Bean Dip Fast",
    "Cucumber And Green Olive Dip",
    "Lemony Edamame Dip Fast",
    "Sushi-Inspired Edamame-Avocado Dip Fast",
    "Creamy Spinach-Tahini Dip Fast",
    "Sassy Spinach Dip With Roasted Garlic",
    "Salsa And Pinto Bean Spread",
    "Four-Seed Bread Spread Fast",
    "Golden Sunshine Roasted Veg Spread",
    "Eggplant Walnut Spread",
    "Za'Atar-Spiced Roasted Red Pepper Spread Fast",
    "White Bean And Artichoke Spread Fast",
    "Tempeh-Pimiento Cheeze Ball",
    "Smooth And Savory Mushroom Pâté",
    "Marinated Olives",
    "Sesame-Shiitake Wonton Crisps",
    "Cheezy Cashew–Roasted Red Pepper Toasts",
    "Jicama-Guacamole Bites Fast",
    "Lemon And Garlic Marinated Mushrooms",
    "Cherry Tomatoes Stuffed With Whirled Peas Fast",
    "Snow Peas Stuffed With Sun-Dried Tomato Hummus Fast",
    "Artichoke-And-Walnut-Stuffed Belgian Endive Fast",
    "Lentil-Pecan Country-Style Pâté",
    "Mushroom-Walnut Pâté",
    "Mango-Avocado Spring Rolls Fast",
    "Lemongrass Tofu And Snow Pea Spring Rolls",
    "Sesame Seitan And Spinach Spring Rolls",
    "Vietnamese-Style Lettuce Rolls",
    "Lemony Rice-Stuffed Grape Leaves",
    "Couscous Dolmas",
    "Rainbow Sushi",
    "Avocado And Asparagus Sushi Rolls",
    "Asparagus Wrapped In Phyllo",
    "Pinto-Pecan Fireballs",
    "Mushrooms Stuffed With Spinach And Walnuts",
    "Spicy Chipotle Potato Quesadillas",
    "Baby Potatoes Stuffed With Roasted Bell Pepper And Walnuts",
    "Mushroom Croustades",
    "Cherry Peppers Stuffed With Sun-Dried Tomatoes And Pine Nuts",
    "Cajun Tofu Crunchies",
    "Basic Bruschetta Fast",
    "Classic Crostini Fast",
    "French Onion Pastry Puffs",
    "Shiitakes In Puff Pastry",
    "Tempeh Taco Bites",
    "Savory Artichoke Squares",
    "Chickpea Pancake With Rosemary",
    "Sesame-Cilantro Scallion Pancakes",
    "Ginger-Lime–Glazed Bean Curd Skewers",
    "Tempeh Satay",
    "Satay Sauce",
    "Vegan Wonton Wrappers",
    "In-Lieu-Of-Crab Wontons",
    "Steamed Vegetable Dumplings",
    "Artichoke-Mushroom Phyllo Packets",
    "Vegetable Pakoras",
    "Potato Samosas",
    "Chickpea Kofta With Chutney Dipping Sauce",
    ],
    salads: [
    "Butterhead Lettuce And Walnut Salad With Raspberry-Walnut Vinaigrette Fast",
    "Romaine And Grape Tomato Salad With Avocado And Baby Peas Fast",
    "Arugula And Apple Salad With Creamy Mustard Dressing Fast",
    "Mixed Lettuces With White Radish, Snow Peas, And Yuzu Dressing Fast",
    "Strawberry Field Greens With Black Olives And Toasted Pine Nuts Fast",
    "Watercress, Fennel, And Avocado Salad With Dried Cherries And Macadamias Fast",
    "Leaf Lettuce And Grilled Radicchio Salad With Lemony Dressing Fast",
    "Baby Greens With Pear, Pecans, And Ginger Dressing Fast",
    "Greek Goddess Salad Fast",
    "Spinach Salad With Almonds, Fuji Apple, And Figs Fast",
    "Spinach Salad With Orange-Dijon Dressing Fast",
    "Chopped Salad Fast",
    "Carrot And Orange Salad With Cashews And Cilantro Fast",
    "Dazzling Vegetable Salad Fast",
    "Cucumber-Radish Salad With Tarragon Vinaigrette Fast",
    "Mango And Snow Pea Salad Fast",
    "Autumn Harvest Salad",
    "Indonesian Green Bean Salad With Cabbage And Carrots Fast",
    "Giardiniera",
    "Chilled Cucumber Salad",
    "Daikon Salad Fast",
    "Sesame Cucumber Salad Fast",
    "Eggplant And Bell Pepper Salad",
    "Corn And Red Bean Salad Fast",
    "Caponata Salad",
    "Yellow Mung Bean Salad With Broccoli And Mango",
    "Green Bean And Pear Salad With Almonds Fast",
    "Cranberry-Carrot Salad With Citrus-Walnut Vinaigrette Fast",
    "Fennel-Orange Salad With Black Olives And Pine Nuts Fast",
    "Yellow Beet Salad With Pears And Pecans",
    "Endive And Orange Salad With Toasted Pecans Fast",
    "Fresh Tomato Salad Fast",
    "Tuscan Bread And Tomato Salad Fast",
    "Syrian Bread Salad Fast",
    "Edamame And Snow Pea Salad With Lime-Ginger Dressing",
    "Retro Potato Salad Redux",
    "French-Style Potato Salad",
    "Three-Alarm Potato Salad",
    "Roasted Potato Salad With Chickpeas And Sun-Dried Tomatoes",
    "Potato And White Bean Salad With Roasted Red Pepper",
    "German-Style Potato Salad",
    "Potato Salad With Artichoke Hearts And Grape Tomatoes",
    "Potato Salad With Seitan Strips And Tarragon-Mustard Vinaigrette",
    "Indonesian-Style Potato Salad",
    "Sweet Potato And Broccoli Salad With Pomegranate-Peanut Dressing",
    "Creamy Coleslaw Fast",
    "German-Style Kool-Sla",
    "Red Cabbage Slaw With Black-Vinegar Dressing",
    "Asian Slaw",
    "Crunchy Sesame Slaw Fast",
    "Rainbow Slaw",
    "Broccoli Slaw With Apple And Walnuts Fast",
    "Tahini Broccoli Slaw Fast",
    "Spicy Southwestern-Style Coleslaw",
    "Tropical Black Bean Salad With Mango Fast",
    "White Bean Salad With Fennel And Avocado Fast",
    "Warm Lentil Salad With Walnuts",
    "Lentil Salad With Chiles",
    "Southwestern Three-Bean Salad",
    "Black Bean And Corn Salad With Cilantro Dressing Fast",
    "Grilled Vegetable Antipasto Salad With Chickpeas",
    "Provençal White Bean Salad Fast",
    "White Bean And Broccoli Salad With Parsley-Walnut Pesto Fast",
    "Chickpea 'Tuna' Salad In Avocados",
    "Puttanesca Seitan And Spinach Salad Fast",
    "Curried Walnut 'Chicken' Salad Fast",
    "Chinese 'Chicken' Salad Fast",
    "Rice Salad With Cashews And Dried Papaya",
    "Roasted Cauliflower And Rice Salad With Dijon Vinaigrette",
    "White And Wild Rice Salad With Walnuts, Cranberries, And Figs",
    "Brown Rice Salad With Black-Eyed Peas Fast",
    "Eight Treasure Barley Salad",
    "Pistachio-Pear Couscous Salad Fast",
    "Golden Couscous Salad Fast",
    "Classic Tabbouleh",
    "Garden Variety Couscous Tabbouleh",
    "Quinoa Salad With Black Beans And Tomatoes",
    "Southwestern Quinoa Salad With Pinto Beans And Corn",
    "Mediterranean Quinoa Salad",
    "Pasta Salad With Grilled Summer Vegetables",
    "Winter Pasta Salad With Creamy Mustard Vinaigrette Fast",
    "Tarragon Pasta Salad With Red And Green Grapes Fast",
    "California Pasta Salad Fast",
    "Farfalle With Crunchy Crucifers And Creamy Poppy Seed Dressing Fast",
    "Last-Minute Italian-Style Pasta Salad Fast",
    "Macaroni Salad",
    "Creamy Curry Pasta And Vegetable Salad Fast",
    "Rotini Remoulade Fast",
    "Asian Noodle Salad With Tempeh",
    "Sesame Udon Salad With Adzuki Beans And Baby Spinach Fast",
    "Chilled Glass Noodles With Snow Peas And Baked Tofu",
    "Mango-Avocado Salad With Macadamias And Pomegranate Seeds Fast",
    "Blazing Sunset Salad Fast",
    "Fruit Salad In Winter Fast",
    "Summer Berries With Fresh Mint Fast",
    "Curried Fruit Salad Fast",
    "'Mixed Grill' Fruit Platter Fast",
    "Fruit Salad With A Hint Of Heat Fast",
    "Orange And Fig Salad With Walnuts And Dried Cherries Fast",
    "Strawberry, Mango, And Pineapple Salad With Banana-Lime Dressing Fast",
    "Cherry Berry Watermelon Salad Fast",
    "Basic Balsamic Vinaigrette Fast",
    "Dijon Vinaigrette Fast",
    "Oh-My-Goddess Dressing Fast",
    "Tarragon-Chive Vinaigrette Fast",
    "Carrot-Ginger Dressing Fast",
    "Green Olive Herb Dressing Fast",
    "Creamy Cucumber Dressing Fast",
    "Creamy Artichoke Dressing Fast",
    "Sesame-Orange Dressing Fast",
    "Lemony White Miso Vinaigrette Fast",
    "Creamy Avocado Dressing Fast",
    "Creamy Tahini Dressing Fast",
    "Lime-Cilantro Dressing Fast",
    "Citrus Vinaigrette Fast",
    "Ginger Soy Vinaigrette Fast",
    ],
    sandwiches: [
    "Tempeh Reuben Sandwiches",
    "Portobello Po'Boys Fast",
    "Tastes Like Tuna Salad Sandwiches",
    "Sloppy Bulgur Sandwiches",
    "Curried Tofu 'Egg Salad' Pitas",
    "Garden Patch Sandwiches On Multigrain Bread Fast",
    "Creamy, Crunchy Fruit-And-Nut Sandwiches Fast",
    "Marinated Mushroom Wraps",
    "Peanutty Tofu Roll-Ups",
    "Garden Salad Wraps Fast",
    "Tempeh-Walnut 'Chicken' Salad Wraps",
    "Avocado And Tempeh Bacon Wraps Fast",
    "Chickpea-Tomato Wraps Fast",
    "Tofu Waldorf Salad Wraps Fast",
    "Teriyaki Tofu Wraps Fast",
    "Tofu-Tahini Veggie Wraps Fast",
    "Deconstructed Hummus Pitas Fast",
    "Muffaletta Sandwiches Fast",
    "Falafel Sandwiches",
    "Vietnamese Po'Boys",
    "Tempeh Tantrum Burgers",
    "Grilled Portobello Burgers Fast",
    "Macadamia-Cashew Patties Fast",
    "Pecan-Lentil Burgers Fast",
    "Black Bean Burgers",
    "Some-Kinda-Nut Burgers Fast",
    "Golden Veggie Burgers Fast",
    "Red Lentil Patties In Pita",
    "White Bean And Walnut Patties Fast",
    "Curried Chickpea Patties",
    "Pinto Bean Patties With Chile-Lime 'Mayo'",
    "Seared Portobello Fajitas Fast",
    "Beer-Marinated Seitan Fajitas",
    "Seitan Tacos Fast",
    "Refried Bean And Salsa Quesadillas",
    "Spinach, Mushroom, And Black Bean Quesadillas Fast",
    "Black Bean And Corn Burritos Fast",
    "Red Bean Burritos Fast",
    "Basic Pizza Dough",
    "Vegan Margherita Pizza",
    "Portobello And Black Olive Pizza",
    "Ebap (Everything But Animal Products) Pizza",
    "White Pizza With Potato, Onion, And Yellow Tomatoes",
    "Spicy Southwestern-Style Pizza",
    "Tapenade And Tomato Pizza",
    "Spicy Mushroom And Hot Pepper Calzones",
    "Roasted Vegetable Stromboli",
    "Spicy Tempeh Empanadas",
    "Quick Pinto-Potato Empanadas Fast",
    "Lentil Walnut Pasties",
    "Mushroom Turnovers",
    "Indian-Style Pizza",
    ],
    soups: [
    "Light Vegetable Broth",
    "Roasted Vegetable Broth",
    "Root Vegetable Broth",
    "Mushroom Vegetable Broth",
    "Dashi",
    "Greens And Beans Soup",
    "Golden Beet Soup With A Twist",
    "Chile-Lime Tortilla Soup",
    "Hearty Minestrone Soup",
    "Broccoli Noodle Soup",
    "Potato And Kale Soup",
    "Shiitake Mushroom Soup With Sake",
    "Mushroom Medley Soup",
    "Golden Harvest Soup",
    "Versatile Vegetable Soup",
    "Summer Vegetable Soup",
    "Caramelized French Onion Soup",
    "Roasted Tomato Soup",
    "Vegan Matzo Ball Soup",
    "Vegan Matzo Balls",
    "Vietnamese-Style Noodle Soup",
    "Miso Soup",
    "Hot And Sour Soup",
    "Tom Yum",
    "Ribollita",
    "Tuscan Tomato And Bread Soup",
    "Moroccan Vermicelli Vegetable Soup",
    "Mulligatawny Soup",
    "Southern-Style Beans-And-Rice Soup With Collards",
    "Chickpea And Fennel Soup",
    "Farro And White Bean Soup With Italian Parsley",
    "Gumbo Z'Herbes",
    "Two-Potato Soup With Rainbow Chard",
    "Sweet Potato And Peanut Soup With Baby Spinach",
    "Mexican Fideo Soup With Pinto Beans",
    "Black Bean Soup With A Splash",
    "Spicy Black Bean Orzo Soup",
    "Black Bean And Corn Soup",
    "Three Bean Soup",
    "Spicy Pinto Bean Soup",
    "Soba And Green Lentil Soup",
    "White And Wild Mushroom Barley Soup",
    "Green And Yellow Split Pea Soup",
    "Rice And Pea Soup",
    "Lemony Lentil And Rice Soup",
    "Moroccan Lentil And Chickpea Soup",
    "Corn And Potato Chowder",
    "Curried Butternut And Red Lentil Soup With Chard",
    "Tomato Orzo Soup",
    "Laksa Come Home",
    "Asparagus Edamame Bisque",
    "Golden Potato Soup",
    "Thai-Inspired Coconut Soup",
    "Cream Of Broccoli Soup",
    "Carrot Soup With Ginger",
    "Creamy Tomato Soup",
    "Butternut Soup With A Swirl Of Cranberry",
    "Cream Of Fennel Soup",
    "Squash Soup With Pecans And Ginger",
    "Root Vegetable Bisque",
    "Curried Pumpkin Soup",
    "Spinach, Walnut, And Apple Soup",
    "Spicy White Bean And Tomato Soup",
    "Peanutty Two-Potato Soup",
    "Zucchini And Butter Bean Bisque",
    "Pumpkin Soup With Chipotle Puree",
    "Chestnut Bisque With Fresh Pear",
    "Cream Of Artichoke Soup",
    "Watercress–White Bean Soup With Toasted Pine Nuts",
    "Creamy Mushroom Soup",
    "Creamy Potato-Chard Soup",
    "Almond Soup With Cardamom",
    "Roasted Vegetable Bisque",
    "Garden Gazpacho",
    "Three-Tomato Gazpacho With Chipotle Crème",
    "Gazpacho With Ditalini And Chile Aioli",
    "Black And Gold Gazpacho",
    "Senegalese Soup",
    "Sweet Potato Vichyssoise",
    "Chilled Avocado-Tomato Soup",
    "Cucumber Cashew Soup",
    "Chilled Carrot Soup",
    "Chilled Beet Soup",
    "Wild Cherry Soup",
    "Summer Fruit Soup",
    "Jewelbox Fruit Soup",
    ],
    pasta: [
    "Pasta and Noodles",
    "Egg-Free Pasta Dough",
    "Orecchiette",
    "Parmasio Fast",
    "Spaghetti And T-Balls",
    "Pasta Arrabbiata Fast",
    "Linguine Puttanesca Fast",
    "Radiatore With Aurora Sauce",
    "Sicilian Penne With Tomatoes And Eggplant",
    "Penne With Vodka-Spiked Tomato Sauce",
    "Perciatelli With Slow-Roasted Tomato Sauce",
    "Fettuccine With Chard And Red Lentil Tomato Sauce",
    "Tagliatelle With Porcini Bolognese Sauce",
    "Ziti With Abruzzese Vegetable Ragù",
    "Linguine With Ligurian Pesto Fast",
    "Orzo, White Beans, And Tomatoes With Lemony Spinach Pesto Fast",
    "Fettuccine With Puttanesca Pesto Fast",
    "Tricolor Rotini With Pesto Bianco Fast",
    "Penne With Peanut Pesto Fast",
    "Rotini And Almond-Mint Pesto With Orange Zest Fast",
    "Campanelle And Zucchini With Squash Blossoms And Sunflower Pesto Fast",
    "Gemelli With Green Beans, Potatoes, And Basil Pesto Fast",
    "Radiatore With Walnut-Parsley Pesto Fast",
    "Pasta Primavera Fast",
    "Orecchiette With Rapini Fast",
    "Penne With Creamy Asparagus Sauce Fast",
    "Fusilli With Fennel And Sun-Dried Tomatoes",
    "Ziti With Red Pepper– Walnut Sauce Fast",
    "Carbonara-Style Spaghetti Fast",
    "Paglia E Fieno With Peas Fast",
    "Lemon-Kissed Linguine With Garlicky White Bean Sauce Fast",
    "Farfalle With White Beans And Roasted Asparagus Fast",
    "Penne With Chickpeas And Rosemary Fast",
    "Fettuccine With Fresh Figs And Walnuts Fast",
    "Angel Hair Pasta With Olive Oil And Garlic Fast",
    "Penne With White Beans, Red Chard, And Grape Tomatoes Fast",
    "Inspired By Spaghetti With White Clam Sauce Fast",
    "Ziti With Catalan Vegetables",
    "Austrian Noodles And Cabbage",
    "Persian Noodles And Lentils",
    "Classic Tofu Lasagna",
    "Red Chard And Baby Spinach Lasagna",
    "Roasted Vegetable Lasagna",
    "Lasagna With Radicchio And Cremini Mushrooms",
    "Lasagna Primavera",
    "Tex-Mex Lasagna",
    "Black Bean And Pumpkin Lasagna",
    "Lasagna Pinwheels",
    "Penne Baked With Eggplant-Tomato Sauce",
    "Creamy Cashew Fettuccine With Mushrooms And Peas",
    "Baked Mac And Cheeze",
    "Mac And Chard",
    "Baked Pasta Shells And Broccoli",
    "Wild West Pasta Bake",
    "Cheezy Tomato Macaroni",
    "Pastitsio",
    "Pasta Gratin With Provençal Vegetables",
    "Buckwheat Noodles With Cabbage And Potatoes",
    "Chard-Stuffed Manicotti With Creamy Cashew Sauce",
    "Spinach Manicotti With White Walnut Sauce",
    "Spicy Eggplant And Tempeh-Stuffed Pasta Shells",
    "Pumpkin Ravioli With Peas And Caramelized Shallots",
    "Artichoke-Walnut Ravioli With Sage And Walnut Sauce",
    "Tortellini With Orange-Scented Tomato Cream Sauce",
    "Gnocchi With Red Wine–Tomato Sauce",
    "Pierogi With Fried Onions",
    "Vegetable Lo Mein With Tofu Fast",
    "Sesame Soba Noodles Fast",
    "Pad Thai Fast",
    "Springtime Rice Noodles With Coconut Crème Fast",
    "Bok Choy And Ginger-Sesame Udon Noodles Fast",
    "Szechuan Sesame Noodles With Asparagus Fast",
    "Chinese Noodles And Broccoli With Spicy Black Bean Sauce Fast",
    "Spicy Sesame Noodles With Green Beans Fast",
    "Drunken Spaghetti With Tofu Fast",
    "Singapore Noodles With Tempeh",
    "Korean Noodle Stir-Fry Fast",
    "Noodles With Spicy Peanut Sauce Fast",
    "Indian Double Chickpea Noodles Fast",
    ],
    main: [
    "Three-Bean Chili",
    "Four-Alarm Chili",
    "Chinese Black Bean Chili",
    "New World Chili",
    "Jerk-Spiced Red Bean Chili",
    "Red Bean And Bulgur Chili",
    "Red Bean Jambalaya",
    "Jamaican Red Bean Stew",
    "Beans Bourguignon",
    "Argentinean Bean And Vegetable Stew",
    "African-Inspired Red Bean Stew",
    "Brazilian Black Bean Stew",
    "Black Beans And Wild Rice",
    "Black Beans With Serrano 'Aioli' Fast",
    "Tuscan White Beans And Broccoli Rabe Fast",
    "Three-Bean Cassoulet",
    "Maple Baked Beans",
    "Chickpea, Tomato, And Eggplant Stew",
    "Chickpea And Vegetable Curry",
    "Coconut-Peanut Chickpeas And Vegetables Fast",
    "Tamarind Chickpea Stew",
    "Pomegranate-Infused Lentil And Chickpea Stew",
    "Pomegranate Molasses",
    "Autumn Medley Stew",
    "Moroccan-Spiced Chickpea And Sweet Potato Stew",
    "Edamame Donburi Fast",
    "Yellow Dal With Spinach",
    "Three Lentil Dal",
    "Black Bean And Bulgur Loaf",
    "Chickpea And Vegetable Loaf",
    "Millet-Topped Lentil Shepherd's Pie",
    "Piccata-Style Cashew Chickpea Medallions Fast",
    "Black Bean And Walnut Croquettes",
    "Vegetable Fried Rice Fast",
    "Caribbean Rice, Squash, And Peas",
    "Wild Rice And Millet Croquettes",
    "Green Tea Rice With Lemon Snow Peas And Tofu",
    "Brown Rice And Lentil Pilaf",
    "Savory Beans And Rice",
    "Mexican Green Rice And Beans",
    "Italian Rice With Seitan And Mushrooms",
    "Creole Rice And Red Beans",
    "Spanish Rice And Beans",
    "Brown Rice With Artichokes, Chickpeas, And Tomatoes",
    "Coconut Jasmine Rice And Edamame",
    "Italian Truck-Stop Artichoke Risotto",
    "Roasted Winter Squash Risotto",
    "Barley Risotto With Asparagus And Mushrooms",
    "Barley And Winter Vegetable Stew",
    "Barley Pilaf With Carrots, Walnuts, And Golden Raisins",
    "Basic Polenta Fast",
    "Polenta With Spicy Tomato Ragù Fast",
    "Fried Double-Corn Grits",
    "Couscous Pilaf Fast",
    "Couscous-Chickpea Loaf",
    "Quinoa And Summer Squash Pilaf",
    "Quinoa And Chickpea Pilaf With Orange And Pistachios",
    "Quinoa And Mixed Vegetable Sauté",
    "Kasha With Roasted Sweet Potatoes And Peas",
    "Herbed Millet And Pecan Loaf",
    "Millet, Chard, And White Bean Casserole",
    "Millet And Amaranth Loaf",
    "Savory Amaranth Patties",
    "Soy-Glazed Tofu",
    "Cajun-Style Tofu",
    "Crispy Tofu With Sizzling Caper Sauce Fast",
    "Country-Fried Tofu With Golden Gravy Fast",
    "Orange-Glazed Tofu And Asparagus",
    "Tofu Pizzaiola Fast",
    "'Ka-Pow' Tofu Fast",
    "Sicilian-Style Tofu",
    "Thai-Phoon Stir-Fry",
    "Chipotle-Painted Baked Tofu Fast",
    "Grilled Tofu With Tamarind Glaze",
    "Tofu Stuffed With Watercress And Tomatoes Fast",
    "Tofu With Pistachio-Pomegranate Sauce Fast",
    "Spice Island Tofu Fast",
    "Ginger Tofu With Citrus-Hoisin Sauce Fast",
    "Tofu With Lemongrass And Snow Peas Fast",
    "Double-Sesame Tofu With Tahini Sauce Fast",
    "Tofu And Edamame Stew",
    "Soy-Tan Dream Cutlets Fast",
    "My Kinda Meat Loaf",
    "Tempeh And Vegetable Stir-Fry",
    "Teriyaki Tempeh",
    "Barbecued Tempeh",
    "Orange-Bourbon Tempeh",
    "Pineapple-Glazed Tempeh And Sweet Potatoes",
    "Creole Tempeh",
    "Tempeh With Lemon And Capers",
    "Tempeh With Maple, Mustard, And Balsamic Glaze",
    "Tempting Tempeh Chili",
    "Tempeh Cacciatore",
    "Indonesian Tempeh In Coconut Gravy",
    "Ginger-Peanut Tempeh",
    "Tempeh With Potatoes And Cabbage",
    "Southern Succotash Stew",
    "Baked Jambalaya Casserole",
    "Tempeh And Sweet Potato Shepherd's Pie",
    "Basic Simmered Seitan",
    "Stuffed Baked Seitan Roast",
    "Seitan Pot Roast",
    "Almost One-Dish Thanksgiving Dinner",
    "Seitan Milanese With Panko And Lemon Fast",
    "Seitan With Dried Plums, Olives, And Capers Fast",
    "Sesame-Crusted Seitan Fast",
    "Pan-Seared Seitan With Artichokes And Olives Fast",
    "Seitan With Ancho-Chipotle Sauce",
    "Seitan Piccata Fast",
    "Three-Seed Seitan Fast",
    "Fajitas Without Borders Fast",
    "Seitan With Green Apple Relish Fast",
    "Seitan And Broccoli-Shiitake Stir-Fry Fast",
    "Seitan Brochettes With Peaches And Herbs",
    "Grilled Seitan And Vegetable Kabobs",
    "Seitan En Croute",
    "Seitan And Potato Torta",
    "Seitan Noodle Casserole",
    "Rustic Cottage Pie",
    "Seitan With Spinach And Sun-Dried Tomatoes Fast",
    "Seitan And Scalloped Potatoes Casserole",
    "Seitan And Chickpea Stew",
    "Sesame-Baked Vegetables",
    "Ratatouille",
    "Vegetable Paella",
    "Three-Green Tian",
    "Eggplant Paprikash",
    "Chard And New Potato Gratin With Herbes De Provence",
    "Sesame Spinach Noodle Pie",
    "Broccoli And White Beans With Potatoes And Walnuts",
    "Eggplant With Pomegranate Walnut Sauce",
    "Garden Vegetable Stew",
    "Mediterranean Vegetable Stew",
    "Potato And Artichoke Gratin With Spinach And Pine Nuts",
    "Artichoke-Walnut Tart",
    "Mushroom Goulash",
    "Green Bean And Mushroom Stroganoff",
    "Tamarind Eggplant With Bell Peppers And Mango",
    "Stir-Fried Curried Vegetables Fast",
    "Spinach Soufflé",
    "Roasted Cauliflower And Shallots With Millet",
    "Artichoke And Chickpea Loaf",
    "Grilled Vegetable Skewers With Mop Sauce",
    "Pastry-Wrapped Portobellos",
    "Spinach, White Bean, And Pine Nut Strudel",
    "Roasted Vegetable Strudel",
    "Indonesian Vegetable Stew",
    "Moroccan Vegetable Stew",
    "Bell Peppers Stuffed With White Beans, Mushrooms, And Walnuts",
    "Quinoa And Pinto Bean–Stuffed Peppers",
    "Millet-Stuffed Bell Peppers With Watercress And Orange",
    "Cabbage Rolls Stuffed With Bulgur And Chickpeas",
    "Sweet-And-Sour Kasha Cabbage Rolls",
    "Stuffed Eggplant Rolls",
    "Orzo-And-Spinach–Stuffed Eggplant",
    "Couscous-Stuffed Eggplant",
    "Potato-And-Artichoke–Stuffed Portobello Mushrooms",
    "Peruvian-Inspired Stuffed Potatoes",
    "Potatoes Stuffed With Fennel And Peas",
    "Great Stuffed Pumpkin",
    "Buttercup Squash Stuffed With Pistachio-Apricot Rice",
    "Fruit-Studded Millet-Stuffed Acorn Squash",
    "Black Bean, Rice, And Mango-Stuffed Squash",
    "Sesame-Stuffed Spaghetti Squash",
    "Three Sisters Stuffed Squash",
    "Winter Squash With Forbidden Rice Stuffing",
    "Walnut-And-Cranberry–Stuffed Sweet Potatoes",
    "Sicilian Stuffed Tomatoes",
    "Spaghetti-Stuffed Tomatoes",
    "Quinoa-Stuffed Zucchini",
    "Pesto-And-Ditalini–Stuffed Zucchini",
    ],
    vegetables: [
    "Basic Vegetable Fritters",
    "Mediterranean Artichoke Sauté Fast",
    "Ted's Artichoke And Green Bean Bake",
    "Asparagus Dijon Fast",
    "Orange-Dressed Asparagus Fast",
    "Stir-Fried Sesame Asparagus Fast",
    "Roasted Lemon Asparagus With Pine Nuts Fast",
    "Beets With Greens And Slivered Apricots",
    "Sherry-Braised Baby Bok Choy",
    "Broccoli Sauté With Tofu Feta",
    "Tofu Feta",
    "Broccoli With Black Beans And Walnuts Fast",
    "Broccoli With Almonds Fast",
    "Spicy Sautéed Broccoli Rabe Fast",
    "Roasted Brussels Sprouts Fast",
    "Brussels Sprouts With Shallots And Dillweed Fast",
    "Braised Cabbage And Apples",
    "Lemon-Glazed Baby Carrots With Cranberries Fast",
    "Marsala Carrots Fast",
    "Carrots And Parsnips With Diced Apple Fast",
    "Cardamom Carrots With Orange Fast",
    "Tzimmes",
    "Spicy Indian Cauliflower Fast",
    "Roasted Cauliflower With Lemon And Capers Fast",
    "Creamy Cauliflower",
    "Braised Celery With Black Olives",
    "Rainbow Chard With Goji Berries And Pistachios",
    "Slow-Simmered Collard Greens",
    "Corn Fritters Fast",
    "Spicy Coconut Creamed Corn Fast",
    "Ginger-Tamari Braised Eggplant Fast",
    "Indian Eggplant Fritters",
    "Escarole With Garlic And Capers Fast",
    "Fennel With Olives And Sun-Dried Tomatoes Fast",
    "Lemon Braised Fennel Fast",
    "Green Beans Niçoise Fast",
    "Green Beans And Grape Tomatoes Fast",
    "Green Bean Casserole Redux",
    "Green Bean Bake With Crispy Leeks",
    "Kale And Sweet Potatoes",
    "Thai Kale With Coconut Milk Fast",
    "Madeira Mushroom Sauté",
    "Shiitake Snow Pea Stir-Fry Fast",
    "Spicy Sautéed Pea Vines Fast",
    "Basic Mashed Potatoes",
    "Mashed Potatoes And Greens",
    "Rosemary-Scented Mashed Potatoes With Limas",
    "Fennel And Garlic Mashed Potatoes",
    "Spiced Oven-Roasted Potato Sticks",
    "Rosemary Fingerling Potatoes With Caramelized Shallots",
    "Roasted Baby Potatoes With Spinach, Olives, And Grape Tomatoes",
    "Potato And Root Vegetable Paillasson",
    "Potato Pancakes With Green Onions",
    "Sweet Potato Pancakes",
    "Rum-Spiked Sweet Potatoes With Pomegranate Pecans",
    "Spiced Sweet Potatoes With Dried Cherries",
    "Sweet Potato And Apple Gratin",
    "Thyme-Scented Sweet Potatoes With Black Olives And Garlic",
    "Roasted Ratatouille Gratin",
    "Caramelized Root Vegetables",
    "Winter Salad Sauté Fast",
    "Sesame Spinach Fast",
    "Indian-Spiced Spinach (Saag) Fast",
    "Baby Spinach With Lemon And Garlic Fast",
    "Spaghetti Squash With Tomatoes And Basil",
    "Orange-And-Maple–Baked Acorn Squash",
    "Bourbon-Baked Squash",
    "Yellow Squash With Corn, Edamame, And Dill Fast",
    "Roasted Rosemary Yellow Squash And Chayote",
    "Zucchini Sauté With Sun-Dried Tomatoes, Olives, And Peppers Fast",
    "Zucchini Walnut Fritters",
    "Roasted Zucchini And Tomatoes",
    "Cornmeal-Crusted Fried Green Tomatoes Fast",
    "Panko-Fried Green Tomatoes With Peanut Sauce Fast",
    "Curry Roasted Vegetables",
    "Versatile Roasted Vegetables",
    "Balsamic Braised Vegetables",
    "Grilled Vegetable Skewers With Charmoula Sauce",
    "Chimichurri Grilled Vegetables",
    ],
    breads: [
    "Basic White Bread",
    "Whole Wheat Raisin Bread",
    "Three-Grain Bread",
    "Oatmeal-Walnut Bread",
    "Pesto Potato Bread",
    "Great Garlic Bread",
    "Sunflower Artisan Bread",
    "Rustic Loaf With Cured Black Olives And Rosemary",
    "Quick Herb Bread",
    "Irish Soda Bread With Golden Raisins",
    "Cornbread",
    "Fired-Up Jalapeño Cornbread",
    "Pumpkin Bread With Cranberries",
    "Chocolate Chip Banana Bread",
    "Lemon-Drenched Banana-Macadamia Bread",
    "Ginger-Molasses Bread With Blueberries",
    "Orange-Date-Walnut Bread",
    "Apple 'Waldorf' Bread",
    "Sunflower Zucchini Bread",
    "Carrot Bread With Cranberries And Walnuts",
    "Baking Powder Biscuits",
    "Drop Biscuits",
    "Moroccan-Spiced Sweet Potato Biscuits",
    "Corn Muffins",
    "Chive-Flecked Spud Muffins",
    "PB&J Muffins",
    "Orange–Chocolate Chip Muffins",
    "Cran-Apple Muffins",
    "Apricot-Walnut Scones",
    "Cherry-Hazelnut Scones",
    "Chocolate Chip Scones",
    "Blueberry-Almond Scones",
    "Rosemary Scones",
    "Pesto Focaccia",
    "Caramelized Onion And Walnut Focaccia",
    "Focaccia With Sun-Dried Tomatoes And Black Olives",
    "Foccacia With Shallots, Figs, And Basil",
    "Grilled Porcini And Tomato-Dusted Garlic Focaccia",
    "Chapati",
    "Za'Atar-Spiced Flatbread",
    "Coriander-Sunflower Seed Flatbread",
    "Lemon-Pepper Flatbread",
    "Sesame Crackers",
    "Whole Wheat Sesame Crackers",
    "Fennel-Scented Flax Crackers",
    "Walnut Oat Crackers",
    ],
    desserts: [
    "Chocolate Chip Cookies Fast",
    "Peanut Butter Cookies",
    "Maple-Walnut Oatmeal Cookies Fast",
    "Chocolate-Cranberry Oatmeal Cookies Fast",
    "Almond Shortbread Cookies Fast",
    "Sesame Cookies",
    "Vanilla Walnut Cookies Fast",
    "Pine Nut Cookies Fast",
    "Chai Spice Cookies Fast",
    "Molasses Spice Cookies",
    "Orange-Scented Coconut Cookies",
    "Peachy Thumbprint Cookies Fast",
    "Hula Cookies",
    "Double Chocolate Brownies",
    "Chocolate Coconut Brownies",
    "Ginger-Spice Brownies",
    "Pineapple Squares",
    "Better Pecan Bars",
    "Chocolate-Almond Bars",
    "Agave Baklava",
    "Peanut Butter And Chocolate Buckeyes",
    "Chocolate–Peanut Butter Fudge",
    "Chocolate Smoosh Fudge",
    "Chocolate-Avocado Fudge",
    "Chocolate-Banana Fudge",
    "Chocolate-Macadamia Cheezcake Truffles",
    "Chocolate–Almond Butter Truffles",
    "Chocolate-Covered Peanut Butter–Granola Balls",
    "Apricot-Walnut Balls Fast",
    "Vegan White Chocolate",
    "Vegan Chocolate Mousse Cake",
    "Chocolate-Rum Coffee Cake",
    "Magical Mystery Chocolate Cake",
    "Spicy Chocolate Cake With Dark Chocolate Glaze",
    "Vegan Pound Cake",
    "Banana-Walnut Cake",
    "Crazy For Carrot Cake",
    "'Sour Cream' Coffee Cake",
    "Orange-Coconut Cake",
    "Spice Cake With Mango And Lime",
    "Apple Lover's Cake",
    "Giant Peanut Butter–Chocolate Chip Cookie Cake",
    "Not-So-Plain Vanilla Cheezcake",
    "Triple Coconut Cheezcake",
    "Chocolate Swirl Tofu Cheezcake",
    "Pumpkin Cheezcake With Cranberry Drizzle",
    "Pomegranate Cheezcake With Glazed Pecans",
    "Lemon-Lime Teasecake",
    "No-Bake Avocado Cheezcake",
    "Three-Flavor Ice Cream Cake",
    "Hot Banana Ice Cream Cake",
    "White Cupcakes With Variations",
    "Mom's Apple Pie With Cranberries",
    "Pumpkin Pie With A Hint Of Rum",
    "Sweet Potato Pie",
    "Pecan Pie",
    "Peach Crumb Pie",
    "Chocolate No-Bake Silk Pie",
    "White Chocolate Hazelnut Pie",
    "Chocolate Mint Espresso Pie",
    "Strawberry Cloud Pie",
    "No-Bake Fresh Fruit Pie",
    "Cashew–Banana Cream Pie",
    "Peanut Butter–Ice Cream Pie",
    "Banana Mango Pie",
    "Ginger-Pear Tart With Cranberries And Walnuts",
    "Apple Tart With Walnut Crust",
    "Two-Berry Cobbler",
    "Apple And Pear Cobbler",
    "Blueberry-Peach Crisp",
    "Quick Apple Crisp",
    "Banana-Pecan Strudel",
    "Pear Crumble",
    "Baked Chocolate Pudding",
    "Cashew Chocolate Pudding",
    "Chocolate-Banana Pudding",
    "Sunset Fruit Pudding Fast",
    "Maple-Baked Rice Pudding With Dried Cranberries",
    "Coconut-Pistachio Rice Pudding",
    "Forbidden Black Rice Pudding",
    "Paradise Pudding Fast",
    "Banana Orzo Pudding",
    "Avocado-Raspberry Parfaits Fast",
    "Strawberry Parfaits With Cashew Crème",
    "Vegan Tiramisù",
    "Indian Pudding",
    "Sweet Vermicelli Pudding Fast",
    "Chocolate And Walnut Farfalle Fast",
    "Fresh Cherry-Vanilla Bread Pudding",
    "Pumpkin-Cranberry Bread Pudding",
    "Chocolate Bread Pudding With Rum Sauce",
    "Granola-Stuffed Baked Apples",
    "Pecan And Date-Stuffed Roasted Pears",
    "Banana Fritters With Caramel Sauce Fast",
    "Baked Bananas With A Twist Of Lime Fast",
    "Blushing Poached Pears",
    "Grilled Orange And Strawberry Skewers",
    "Rum-Sautéed Pineapple And Bananas With Toasted Coconut And Pecans Fast",
    "Nellie's Peachy Melba Fast",
    "Fresh Fruit 'Sushi' Fast",
    "Asian Flavors Fruit Bowl Fast",
    "Sweet Polenta With Grilled Pineapple And Strawberry Sauce",
    "Pineapple Couscous Timbales With Blueberry Sauce",
    "Lime-Macerated Mangos",
    "Vegan Dessert Crêpes Fast",
    "Suzette-Inspired Ice Cream Crêpes",
    "Caramelized Figs In Tuiles",
    "Cherry Clafoutis",
    "Pear Gratin With Cranberries And Pecans",
    "Strawberry Kanten",
    "Suspended Peach Kanten",
    "Cherry Vanilla Nice Cream",
    "Chocolate Nice Cream",
    "Coffee Nice Cream",
    "Ginger-Coconut Nice Cream",
    "Strawberry Sorbet",
    "Cranberry Sorbet",
    "Mocha Sorbet",
    "Orange Granita",
    "Chocolate Sauce Fast",
    "Fudgy Chocolate Sauce Fast",
    "Caramel Sauce Fast",
    "Warm Walnut Sauce Fast",
    "Blueberry Sauce Fast",
    "Pineapple-Apricot Sauce Fast",
    "Summer Fruit Sauce Fast",
    "Winter Fruit Sauce",
    "Grand Marnier Sauce Fast",
    "Strawberry-Mango Sauce Fast",
    "Fresh Strawberry Topping",
    "Vegan Whipped Cream",
    "Cashew Crème",
    "Lemon-Cashew Crème",
    "Vegan Chocolate Ganache Fast",
    "'Cream Cheese' Frosting Fast",
    "'Buttercream' Frosting Fast",
    "Chocolate Fudge Frosting",
    "Chocolate Peanut Butter Frosting Fast",
    ],
    breakfast: [
    "Garden Scramble Fast",
    "Soy Sausage Scramble Fast",
    "Scrambled Tofu With Chiles And Salsa",
    "Potato-Tomato Frittata",
    "Roasted Vegetable Frittata",
    "Kiss My Grits Breakfast Casserole",
    "Two-Tomato Brunch Casserole",
    "Spinach And Mushroom Strata",
    "Vegan Eggs Benedict",
    "Bountiful Breakfast Burritos Fast",
    "Burritos Benedict",
    "Mango Morning Quesadillas Fast",
    "Couscous Brunch Cake With Fresh Fruit",
    "Close To Cottage Cheese",
    "Cranberry Pancakes With Orange-Maple Syrup",
    "Spiced Apple Pancakes",
    "Ginger-Pear Pancakes",
    "Banana-Blueberry Pancakes",
    "Johnnycakes",
    "Maple-Pecan Waffles",
    "Pumpkin Waffles With Cranberry Syrup",
    "Lemon-Kissed Blueberry Waffles",
    "Very Vanilla French Toast",
    "French Toast With Caramel Apple Topping",
    "Peanut Butter And Banana–Stuffed French Toast",
    "Granola",
    "Granola-Infused Oatmeal Fast",
    "Cran-Apple Oatmeal Fast",
    "Morning Polenta With A Drizzle Of Maple Syrup Fast",
    "Breakfast Bulgur With Pears And Pecans Fast",
    "Dawn's Early Couscous Fast",
    "Apple Coffee Cake",
    "Breakfast Bran Muffins",
    "Banana-Walnut Breakfast Muffins",
    "Two-Potato Hash Fast",
    "Pan-Fried Spuds Fast",
    "Hash Brown Potatoes Fast",
    "Tempeh Bacon",
    "Sesame-Soy Breakfast Spread",
    "Breakfast Parfaits Fast",
    ],
    drinks: [
    "Peanut Butter And Banana Smoothie Fast",
    "Tropical Smoothie Fast",
    "Stone Fruit Smoothie Fast",
    "Smoothies In Winter Fast",
    "Strawberry-Banana Smoothie Fast",
    "Fresh Cherry Smoothie Fast",
    "Creamy Orange Smoothie Fast",
    "Purple Haze Fruit Smoothie Fast",
    "Papaya Paradise Smoothie Fast",
    "Favorite Fruit Smoothie Fast",
    "Indonesian Avocado Smoothie Fast",
    "Thick And Creamy Mocha Shake Fast",
    "Mango Lassi Fast",
    "Rosewater Lassi Fast",
    "Make-Your-Own Almond Milk",
    "Horchata",
    "Good Green Drink Fast",
    "Rum-Spiked Soy Nog Fast",
    "Sparkling Pomegranate-Lime Punch Fast",
    "Mulled Cider Fast",
    "Wassail-Inspired Punch Fast",
    "Holiday Cranberry Punch Fast",
    "Hot Butter-Free Rum Fast",
    "Soy Latte Fast",
    "Frozen Soy Cappuccino",
    "Hot Coffee Mocha Fast",
    "Coconut-Mocha Iced Coffee Fast",
    "Orange And Cinnamon–Spiced Coffee Fast",
    "Thai-Style Iced Tea",
    "Dairy-Free Chai Fast",
    "Hot Cocoa Fast",
    "Cranberry-Pomegranate Spritzer Fast",
    "Coconut-Pineapple Cooler Fast",
    "White Grape–Citrus Spritzer Fast",
    "Morning Sunshine Cooler Fast",
    "Lemon-Ginger Refresher Fast",
    ],
    sauces: [
    "Basic Brown Sauce",
    "Bordelaise Sauce Fast",
    "Madeira Sauce Fast",
    "Mushroom Sauce Fast",
    "Golden Mushroom Gravy Fast",
    "Fresh Tomato Sauce Fast",
    "Chunky Fresh Tomato Sauce Fast",
    "Roasted Yellow Tomato And Pepper Coulis",
    "Barbecue Sauce",
    "Roasted Tomato–Red Chile Sauce",
    "Ranchero Sauce",
    "Vegan White Sauce Fast",
    "Creamy Cashew Sauce Fast",
    "Mornay-Style Cheeze Sauce Fast",
    "Hollandaze Sauce Fast",
    "Bearnaze Sauce Fast",
    "Watercress Sauce Fast",
    "Miso-Tahini Sauce Fast",
    "Lemon-Basil Sauce Fast",
    "Remoulade Sauce Fast",
    "Tamarind Sauce Fast",
    "Vegan Aioli Fast",
    "Chipotle Aioli Fast",
    "Harissa Sauce",
    "Coconut-Peanut Sauce Fast",
    "Thai Peanut Sauce Fast",
    "Tahini-Lemon Sauce Fast",
    "Spicy Mango Sauce Fast",
    "Mango-Ponzu Dipping Sauce Fast",
    "Piquant Green Olive Sauce Fast",
    "Maple-Mustard Sauce Fast",
    "Ginger-Soy Dipping Sauce Fast",
    "Apricot And Chile Dipping Sauce Fast",
    "Sesame-Scallion Dipping Sauce Fast",
    "Nothin' Fishy Nam Pla Fast",
    "Vegan Worcestershire Sauce Fast",
    "Mango Chutney",
    "Fresh Cranberry Chutney",
    "Dried Fruit Chutney Fast",
    "Green Tomato Chutney",
    "Pear And Apple Chutney",
    "Fresh Mint And Coconut Chutney Fast",
    "Ginger-Peach Chutney",
    "Pesto Presto Fast",
    "Basil Pistou Fast",
    "Black Olive And Walnut Pesto Fast",
    "Spinach And Almond Pesto Fast",
    "Fresh And Sun-Dried Tomato Pesto Fast",
    "Parsley And Sunflower Pesto Fast",
    "Fresh Tomato Salsa",
    "Spicy Mango And Red Pepper Salsa",
    "Chipotle-Tomato Salsa",
    "Pineapple-Papaya Salsa",
    "Tomatillo Salsa",
    "Salsa Verde",
    "Corn Relish Fast",
    "Spiced Tomato And Peach Relish",
    "Artichoke, Tomato, And Roasted Pepper Relish",
    "Ginger-Papaya Relish Fast",
    "Triple Cranberry Relish Fast",
    "Red Pepper, Mango, And Avocado Relish",
    "Red Onion And Apple Relish",
    "Pineapple-Lime Relish Fast",
    "Indonesian Chile Sauce",
    "Fresh Tomato Ketchup",
    "Vegan Mayonnaise Fast",
    "Chipotle Mayonnaise Fast",
    "Mustard-Chive Mayonnaise Fast",
    "Wasabi Mayonnaise Fast",
    "Tofu Sour Cream Fast",
    "Cucumber Raita Fast",
    "Ginger-Soy Marinade Fast",
    "Garlic-Herb Marinade",
    "Lemon Pepper Marinade Fast",
    "Teriyaki Marinade Fast",
    "Tamari-Dijon Marinade Fast",
    "Pungent Pineapple Marinade Fast",
    "Indian Spice Rub Fast",
    "Southwestern Spice Rub Fast",
    ],
    };

function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

console.log ("This is our suggested meal...\n");
console.log(lines);
for (let item of meals) {
    console.log(item+":");
    console.log("");
    for (let category of categories[item]) {
        console.log (`- ${randomize(meal[category])}`);
    }
    console.log(lines);
};
console.log("\nBom appetit!");

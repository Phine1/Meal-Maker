
// This program is a small programme to generate dishes and its prices

const menu = {
    _courses: {
      appetizers: [],
      mains:[],
      desserts:[]
    },
    get appetizers () {
    return this._courses.appetizers
    },
    set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
    },
    get mains () {
    return this._courses.mains
    },
    set mains (main) {
    this._courses.mains = main;
    },
    get desserts () {
    return this._courses.desserts
    },
    set desserts (dessets) {
      this._courses.desserts = dessert;
    },
    get courses () {
    return { 
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._courses [courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`;
    }
    };
    menu.addDishToCourse('desserts','ice cream',7.25);
    menu.addDishToCourse('desserts','melon',1.25);
    menu.addDishToCourse('desserts','melon Salad',3.25);
    menu.addDishToCourse('appetizers','soda drink',7.25);
    menu.addDishToCourse('appetizers','coffee',4.25);
    menu.addDishToCourse('appetizers','melon Salad',3.25);
    menu.addDishToCourse('mains','beans',7.25);
    menu.addDishToCourse('mains','Fufu',1.25);
    menu.addDishToCourse('mains','Salad Rice',3.25);
    const meal = menu.generateRandomMeal ();
    console.log(meal);
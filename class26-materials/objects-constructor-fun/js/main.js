//Create a constructor with 4 properties and 3 metho
function Pizza(pizzaToppings, pizzaSize, pizzaSause, pizzaCheese){
    this.toppings = pizzaToppings
    this.size = pizzaSize
    this.sause = pizzaSause
    this.cheese = pizzaCheese
    this.freezbe = function(){
        console.log('yeet')
    }
    this.burn = function(){
        console.log('aaauuuchhh')
    }
    this.delivery = function(){
        console.log('on its way..')
    }
}

let pepPizza = new Pizza('pepperoni', 'large', 'marinara', 'extra cheese')
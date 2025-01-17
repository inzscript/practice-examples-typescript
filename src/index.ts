type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;   
const orderHistory : Order[] = [];

const menu : Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 5 },
    { id: nextPizzaId++, name: "Pepperoni", price: 7 },
    { id: nextPizzaId++, name: "Vegetarian", price: 6 },
    { id: nextPizzaId++, name: "Hawaiian", price: 8 }
]


// Functions

function addNewPizza(pizzaObj : Omit<Pizza, "id"> ) : Pizza {
    const newPizza : Pizza = { 
        id: nextPizzaId++, 
        ...pizzaObj 
    };
    menu.push(newPizza);
    return newPizza;
}

function placeOrder(pizzaName : string) : Order | undefined {
    let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    
    if (!selectedPizza) {
        console.log(`${pizzaName} does not exist on the menu`);
        return;
    }

    cashInRegister += selectedPizza.price;
    let newOrder : Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderHistory.push(newOrder);
    return newOrder;
}

// Function to replace AddNewPizza and PlaceOrder using explicit types
// function addToArray<T>(array: T[], item: T) : T[] {
//     array.push(item);
//     return array;
// }

// addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Meat Feast", price: 9 });
// addToArray<Order>(orderHistory, { id: nextOrderId++, pizza: menu[2], status: "completed" });

function completeOrder(orderId : number) : Order | undefined {
    let order = orderHistory.find(order => order.id === orderId);
    
    if (!order) {
        console.log(`Order ${orderId} not found`);
        return;
    }

    order.status = "completed";
    return order;
}

function getPizzaDetails(identifier : string | number) : Pizza | undefined {
    if (typeof identifier === "string") {
        return menu?.find(pizza => pizza.name.toLowerCase() === identifier);
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Invalid identifier, must be string or number.");
    }
}

// Run a simulated order
addNewPizza({ name: "Meat Feast", price: 9 });
addNewPizza({ name: "Vegan", price: 8 });
addNewPizza({ name: "BBQ Chicken", price: 8 });

placeOrder("Vegetarian");
completeOrder(1);

console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderHistory);
console.log("Menu", menu);

console.log(getPizzaDetails("vegan"));
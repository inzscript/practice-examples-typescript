let numbers: number[] = [1, 2, 3, 4, 5];

numbers[0] = 10;

numbers.forEach(n => n.toFixed(2));


// Tuples

let user: [number, string] = [1, 'Steve'];
user.push(2, 'John');


// Enums

// const small = 0;
// const medium = 1;
// const large = 2;

// Pascal naming convention
enum Size {
  Small = 1,
  Medium, 
  Large
}

let mySize: Size = Size.Medium;
console.log(mySize); // Medium

// Functions

function calculateTax(income: number, taxYear = 2022) : number {
    if(taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

console.log(calculateTax(10_000, 2021));


// Objects & Types

type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void 
}

let employee: { 
    readonly id: number,
    name: string,
    retire: (date: Date) => void 
} = {
    id: 1, 
    name: 'Steve', 
    retire: function(date: Date) { console.log(date); }
};

employee.retire(new Date());



// Union Types
function kgToLbs(weight: number | string) : number {
    // Narrowing the type
    if(typeof weight === 'string') {
        weight = parseFloat(weight);
    }
    return weight * 2.20462;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));


// Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let TextBox: UIWidget = {
    drag: () => console.log('Dragging'),
    resize: () => console.log('Resizing')
}



// Literal Types (exact, specific values)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'm' | 'km';


// Nullable Types
function greet(name: string | null) {
    if (name)
        console.log(`Hello, ${name.toUpperCase()}`);
    else 
        console.log('Hello, Guest');
}

greet(null); // Error


// Optional Chaining
type Customer = {
    birthdate?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthdate: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//     console.log(customer?.birthdate?.getFullYear());
// }

// Optional property access
// if customer has id and a birdthdate, then get the year else undefined
console.log(customer?.birthdate?.getFullYear());

// Optional element access operator
let customers = ['Steve', 'John', 'Mike'];
// customers?[0]



// Utility Types: Partials

type User = {
    id: number,
    username: string,
    role: "member" | "admin" | "contributor"
}

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
    { id: nextUserId++, username: 'Steve', role: 'admin' },
    { id: nextUserId++, username: 'John', role: 'member' },
    { id: nextUserId++, username: 'Mike', role: 'contributor' }
]

function updateUser(id: number, updates: UpdatedUser) {
    const user = users.find(user => user.id === id);
    if (!user) {
        console.log(`User not found`);
        return;
    }
    Object.assign(user, updates);
}

// Utility Types: Omits
function addNewUser(newUser: Omit<User, "id">) : User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user);
    return user;
}

updateUser(1, { role: 'member' });
updateUser(2, { username: 'Johnny' });

addNewUser({ username: 'Jane', role: 'admin' });

console.log(users);



// Utility Types: Generics
const gameScores: number[] = [10, 20, 30, 40, 50];
const favoriteColors: string[] = ['red', 'green', 'blue'];
const voters = [{ name: 'Steve', age: 30 }, { name: 'John', age: 25 }];

function getLastItem<Type>(array: Type[]) : Type {
    return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteColors));
console.log(getLastItem(voters));
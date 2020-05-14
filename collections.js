class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

let persons = new Map();

persons.set(new Person('Andriy', 25));
persons.set(new Person('Taras', 23));
persons.set(new Person('Vasyl', 21));
persons.set(new Person('Oksana', 24));
persons.set(new Person('Olena', 22));

console.log(persons);

showMap(persons);

function showMap(map) {
    for (let obj of map.keys()) {
        console.log(`${obj.name} : ${obj.age}`);
    }
}

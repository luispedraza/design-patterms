
class Prototype {
  clone() {

  }
}

class Libro extends Prototype {
  constructor(title, author) {
    super();
    this.title = title;
    this.author = author;
  }

  clone () {
    return new Libro (this.title, this.author);
  }
}

class Persona extends Prototype {

  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  clone (name) {
    let myClone = new Persona(name, this.age);
    return myClone;
  }
}

let p1 = new Persona("Jose", 50);
console.log("p1", p1);
let p2 = p1.clone();

let names = ["Antonio", "Juan", "Pedro", "Vicente"];
let newPeople = names.map(n => {
  return p1.clone(n);
})

console.log(newPeople);


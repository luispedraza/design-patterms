import {Engineer, Electrician, CharacterFactory } from "./interfaces"

export class FrenchEngineer extends Engineer {
    sayHello () {
        console.log("Hello, I am an FRENCH engineer");
    }
}
export class FrenchElectrician extends Electrician {
    sayGoodbye () {
        console.log("Bye, I was an FRENCH electrician");
    }
}

export class FrenchCharacterFactory extends CharacterFactory {
    createElectrician () {
        return new FrenchElectrician();
    }
    createEngineer() {
      return new FrenchEngineer();
    }
}

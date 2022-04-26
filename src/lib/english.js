
import {Engineer, Electrician, CharacterFactory } from "./interfaces"

export class EnglishEngineer extends Engineer {
    sayHello () {
        console.log("Hello, I am an ENGLISH engineer");
    }
}
export class EnglishElectrician extends Electrician {
    sayGoodbye () {
        console.log("Bye, I was an ENGLISH electrician");
    }
}

export class EnglishCharacterFactory extends CharacterFactory {
    createElectrician () {
        return new EnglishElectrician();
    }
    createEngineer() {
      return new EnglishEngineer();
    }
}

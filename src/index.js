

import { EnglishCharacterFactory } from "./lib/english";
import { FrenchCharacterFactory } from "./lib/french";

let factory = new FrenchCharacterFactory();

let engineer = factory.createEngineer();
let electrician = factory.createElectrician();

engineer.sayHello();
electrician.sayGoodbye();


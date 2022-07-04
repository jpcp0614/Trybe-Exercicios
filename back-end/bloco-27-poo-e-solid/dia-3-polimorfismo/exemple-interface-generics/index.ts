import { PhysicalPerson, LegalPerson, Person } from './Person';
import { Contract } from './Contract';

const pp0 = new PhysicalPerson('John Wick', '12345678901');
const pp1 = new PhysicalPerson('John Paul', '10987654321');
const lp0 = new LegalPerson('Google', '12345678901234');
const lp1 = new LegalPerson('Microsoft', '10987654321567');

const identification = (person: Person) => {
  person.showIdentification();
}

identification(pp0);
identification(pp1);
identification(lp0);
identification(lp1);

const c1 = new Contract(pp0);
console.log(c1);

const c2: Contract<LegalPerson> = new Contract(lp0);
console.log(c2);
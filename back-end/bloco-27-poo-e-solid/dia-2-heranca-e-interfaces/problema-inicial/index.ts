interface Contract {
  getSubject(): string;
  getClauses(): string[];
  getSignatories(): Person[];
  getDescribe(): void;
}

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public getName(): string {
    return this._name;
  }
}

class NaturalPerson extends Person {
  private _cpf: string;

  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }

  public getCpf(): void {
    console.log(this._cpf);
  }
}

class LegalPerson extends Person {
  private _cnpj: string;

  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }

  public getCnpj(): void {
    console.log(this._cnpj);
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  public getSignatories(): Person[] {
    return [...this._signatories];
  }

  public getClauses(): string[] {
    return [...this._clauses];
  }

  public getSubject(): string {
    return "Sales";
  }

  public addSign(signatory: Person): void {
    this._signatories.push(signatory);
  }

  public addClause(clause: string): void {
    if (this._signatories.length > 0) {
      return;
    } else {
      this._clauses.push(clause)
    }
  }

  public getDescribe(): void {
    console.log('-----------------');
    console.log(`Contrato: ${this.getSubject()}`);

    this.getClauses().forEach(clause => { console.log(clause) });
    this.getSignatories().forEach(signatory => { console.log(`Assinado por: ${signatory.getName()}`) });

    console.log('-----------------');
  }
}

const sc = new SalesContract();
const np1 = new NaturalPerson('John Wick', '12345678901');
const np2 = new NaturalPerson('John Paul', '10987654321');
const lp = new LegalPerson('Company', '12345678901234');

sc.addClause('Clause 1');
sc.addClause('Clause 2');
sc.getDescribe();

sc.addSign(np1);
sc.addSign(np2);
sc.getDescribe();

sc.addClause('Clause 3');
sc.addSign(lp);
sc.getDescribe();

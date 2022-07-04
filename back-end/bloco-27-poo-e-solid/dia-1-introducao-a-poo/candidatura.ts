class Candidatura {
  private _pessoaCandidata: string;
  private _vaga: string;
  private _salario: number;
  readonly _softSkill: string;

  constructor(pessoaCandidata: string, vaga: string, salario: number, softSkill: string) {
    this._pessoaCandidata = pessoaCandidata;
    this._vaga = vaga;
    this._salario = salario;
    this._softSkill = softSkill;
  }

  private enviarEmail(){
    console.log('Enviar email para ' + this._pessoaCandidata);
  }

  public get pessoaCandidata(): string {
    return this._pessoaCandidata;
  }

  public set pessoaCandidata(pessoaCandidata: string) {
    this._pessoaCandidata = pessoaCandidata;
  }

}

const pessoaCandidata = new Candidatura('Ada Lovelace', 'Full Stack', 4800, 'Cooperação');
// console.log(pessoaCandidata);

pessoaCandidata.pessoaCandidata = 'John Smith';
console.log(pessoaCandidata);

console.log(pessoaCandidata._softSkill);
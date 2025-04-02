export class Student{
    nota1;
    nota2;
    constructor(id, nume, prenume, varsta){
        this.id=id;
        this.nume=nume;
        this.prenume=prenume;
        this.varsta=varsta;

    }
    salut(){
        console.log(`Buna ziua, numele meu este: ${this.nume} ${this.prenume} si am ${this.varsta} ani.`)
    }
    examen(nota1, nota2){
        this.nota1 = nota1;
        this.nota2 = nota2;
        console.log(`Am fost la examen si am luat notele: ${this.nota1} si ${this.nota2}`)
    }
    calMedia(){
        let media = ( this.nota1 + this.nota2)/2
        console.log(`Media pentru studentul ${this.nume} ${this.prenume} este ${media}`)
    }
}

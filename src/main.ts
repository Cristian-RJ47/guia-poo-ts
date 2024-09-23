import './style.css'
//EJERCICIO 1

class Page {
  titulo: string
  color: string
  fuente: number
  alineacion: 'derecha' | 'centrado' | 'izquierda'

  constructor (titulo:string, color:string, fuente:number){
    this.titulo = titulo
    this.color = color
    this.fuente = fuente
    this.alineacion = 'izquierda'
  }

  public getData():void{
    console.log(`Título: ${this.titulo}\nColor: ${this.color}\nFuente: ${this.fuente}`)
  }

  public getAlign(alineacion: 'derecha' | 'centrado' | 'izquierda'): void {
    if (alineacion === 'derecha' || alineacion === 'centrado' || alineacion === 'izquierda') {
      this.alineacion = alineacion
    }
  }

  public dataComplet():void{
    console.log(`Título: ${this.titulo}\nColor: ${this.color}\nFuente: ${this.fuente}\nAlineación: ${this.alineacion}`)
  }

}

const pagina = new Page('Hola mundo', 'Azul', 20);

pagina.getData()
pagina.getAlign('centrado')
pagina.dataComplet()

//EJERCICIO 2

class Calculator{
  firstNumber: number
  secondNumber: number
  result: number

  constructor(firstNumber:number, secondNumber:number){
    this.firstNumber = firstNumber
    this.secondNumber = secondNumber
    this.result = 0
  }

  public sumar():void{
    this.result = this.firstNumber+this.secondNumber
    console.log(`${this.firstNumber} + ${this.secondNumber} = ${this.result}`)
  }

  public restar():void{
    this.result = this.firstNumber-this.secondNumber
    console.log(`${this.firstNumber} - ${this.secondNumber} = ${this.result}`)
  }

  public multiplicar():void{
    this.result = this.firstNumber*this.secondNumber
    console.log(`${this.firstNumber} X ${this.secondNumber} = ${this.result}`)
  }

  public dividir():void{
    this.result = this.firstNumber/this.secondNumber
    console.log(`${this.firstNumber} / ${this.secondNumber} = ${this.result}`)
  }

  public potencia(): void {
    let result = Math.pow(this.firstNumber, this.secondNumber);
    console.log(`${this.firstNumber} ^ ${this.secondNumber} = ${result}`);
}

}

const calculator =new Calculator(10, 5)

calculator.sumar()
calculator.restar()
calculator.multiplicar()
calculator.dividir()
calculator.potencia()

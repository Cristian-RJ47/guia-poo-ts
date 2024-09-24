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

//EJERCICIO 3

class Cancion{
  title: string
  genero: string
  private autor: string

  constructor(title:string, genero:string){
    this.title = title
    this.genero = genero
    this.autor = 'desconocido'
  }

  public get getAutor():string{
    console.log(this.autor)
    return this.autor
  }
  
  public set setAutor(value:string){
    this.autor = value
  }

  public datos():void{
    console.log(`Título: ${this.title}\nGenero: ${this.genero}\nAutor: ${this.autor}`)
  }

}

const cancion = new Cancion('Monster', 'Rock')

cancion.getAutor
cancion.setAutor = 'Skillet'
cancion.datos()

//EJERCICIO 4

class Cuenta{
  private user: string
  private cantidad: number
  private tipo: string
  private idCuenta: number

  constructor (user:string, cantidad:number, tipo:string, idcuenta:number){
    this.user = user
    this.cantidad = cantidad
    this.tipo = tipo
    this.idCuenta = idcuenta
  }

  public infoCuenta():void{
    console.log(`Nombre: ${this.user}\nTipo de cuenta: ${this.tipo}\nNúmero de cuenta: ${this.idCuenta}\nSaldo: $${this.cantidad}`)
  }

  public depositar(deposito:number):void{
    if (deposito>5) {
      this.cantidad = this.cantidad + deposito
      console.log(`Se ha depositado correctamente: $${deposito}\nEl saldo de su cuenta es: $${this.cantidad}`)
    } else {
      console.log('El valor a depositar debe ser mayor a $5.00')
    }
  }

  public retirar(retiro:number):void{
    if (retiro>5 && retiro<this.cantidad) {
      this.cantidad = this.cantidad-retiro
      console.log(`Se ha retirado correctamente: $${retiro}\nEl saldo de su cuenta es: $${this.cantidad}`)
    } else {
      console.log('Error. El valor a retirar debe ser mayor a $5.00 y debe tener fondos suficientes en su cuenta')
    }
  }
}

const usuario = new Cuenta('Cristian', 100, 'ahorro', 123456789 )
usuario.infoCuenta()
usuario.depositar(2)
usuario.depositar(100)
usuario.retirar(5)
usuario.retirar(100)
usuario.retirar(100)
//EJERCICIO 5

abstract class Persona{
  protected name: string
  protected lastname: string
  protected address: string
  protected cellohone: string
  protected age: number

  constructor(name:string, lastname:string, address:string, cellphone:string, age:number){
    this.name = name
    this.lastname = lastname
    this.address = address
    this.cellohone = cellphone
    this.age = age
  }

  abstract mostraDatos():void

  public adult():void{
    if (this.age>=18) {
      console.log('Es Mayor de edad')
    } else {
      console.log('Es Mayor de edad')
    }
  }
}

class Empleado extends Persona{
  private sueldo: number

  constructor(name:string, lastname:string, address:string, cellphone:string, age:number, sueldo:number){
    super(name, lastname, address, cellphone, age)
    this.sueldo = sueldo
  }

  public get getSueldo():number{
    console.log(`Su sueldo es: $${this.sueldo}`)
    return this.sueldo
  }
  
  public set setSueldo(valor:number){
    this.sueldo = valor
  }

  mostraDatos(): void {
    console.log(`Nombre: ${this.name}\nApellido: ${this.lastname}\nDirección: ${this.address}\nTélefono: ${this.cellohone}\nEdad: ${this.age}\nSueldo: $${this.sueldo}`)
  }
}

const persona1 = new Empleado('Cristiano', 'Ronaldo', 'algún lugar del mundo', '2299-9999', 41, 2000000)

persona1.mostraDatos()
persona1.adult()
persona1.setSueldo = 10000
persona1.getSueldo
persona1.mostraDatos()
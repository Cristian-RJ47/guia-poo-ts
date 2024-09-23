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
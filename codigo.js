var lineasDeCodigoProceso1 = ["a = 1 + 2","console.log(1 + 2)","console.log(a)"]; 
var lineasDeCodigoProceso2 = ["b=3+4","console.log(3 + 4)", "console.log(b)"];
var lineasDeCodigoProceso3 = ["c=5+6","console.log(5 + 6)","console.log(c)"];
var proceso1; 
    var proceso2;
    var proceso3; 

class Proceso {
    constructor(numero, codigo) {
    this.numero = numero;
    this.codigo= codigo;
    }
    getNumero() {
        return this.numero; 
    }

    }

   function inicio(){
    creacionDeProcesos(); 
        var operando1 = document.calc.operando1.value 
    var randomNumer = Math.floor(Math.random() * 2);
     elegir(operando1)
    }

function elegir(operando1){
    limpiar(); 
    var numeroDeProceso=0;
    var numerosExcluidos=[4]; 
    for(var o= 0; o<operando1; o++){
        const randomNumer = generarNumeroAleatorio(0, 2, numerosExcluidos);
        numerosExcluidos.push(randomNumer); 
    for (var i = 0; i < 3; i++) {
        numeroDeProceso++;
       switch (numeroDeProceso) {
            case 1:
             document.calc.resultado1.value= "Proceso:" + proceso1.getNumero() + " " + lineasDeCodigoProceso1[randomNumer]; 
              break;
            case 2:
                document.calc.resultado2.value= "Proceso:" + proceso2.getNumero() + " " + lineasDeCodigoProceso2[randomNumer]; 
              break;
            case 3:
                document.calc.resultado3.value= "Proceso:" + proceso3.getNumero() + " " +lineasDeCodigoProceso3[randomNumer]; 
              break;
              case 4:
             document.calc.resultado4.value= "Proceso:" + proceso1.getNumero() + " " + lineasDeCodigoProceso1[randomNumer]; 
              break;
            case 5:
                document.calc.resultado5.value= "Proceso:" + proceso2.getNumero() + " " + lineasDeCodigoProceso2[randomNumer]; 
              break;
            case 6:
                document.calc.resultado6.value= "Proceso:" + proceso3.getNumero() + " " + lineasDeCodigoProceso3[randomNumer]; 
              break;
              case 7:
             document.calc.resultado7.value= "Proceso:" + proceso1.getNumero() + " " + lineasDeCodigoProceso1[randomNumer]; 
              break;
            case 8:
                document.calc.resultado8.value= "Proceso:" + proceso2.getNumero() + " " + lineasDeCodigoProceso2[randomNumer]; 
              break;
            case 9:
                document.calc.resultado9.value= "Proceso:" + proceso3.getNumero() + " " + lineasDeCodigoProceso3[randomNumer]; 
              break;
            default:
              console.log("Día no válido");
          }      
}
    }
}
  
function generarNumeroAleatorio(min, max, exclusiones) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclusiones.includes(numeroAleatorio));
    
    return numeroAleatorio;
  }
  
  
function limpiar(){
    document.calc.resultado1.value=" "; 
    document.calc.resultado2.value=" "; 
    document.calc.resultado3.value=" "; 
    document.calc.resultado4.value=" "; 
    document.calc.resultado5.value=" "; 
    document.calc.resultado6.value=" "; 
    document.calc.resultado7.value=" "; 
    document.calc.resultado8.value=" "; 
    document.calc.resultado9.value=" "; 
}
  

function creacionDeProcesos(){ 
     proceso1 = new Proceso(1,lineasDeCodigoProceso1)
     proceso2 = new Proceso(2,lineasDeCodigoProceso2)
     proceso3 = new Proceso(3,lineasDeCodigoProceso3)
}

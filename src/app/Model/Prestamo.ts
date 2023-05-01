import { Time } from "@angular/common"
import { Escenario } from "./Escenario"; 
import { Usuario } from "./Usuario";
export class Prestamo{
    id:number;
    date:Date;
    hour: Time;
    user: Usuario;
    scenary:Escenario

}

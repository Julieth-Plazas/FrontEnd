import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escenario } from 'src/app/Model/Escenario';
import { ListarEscService } from 'src/app/service/listar-esc.service';

@Component({
  selector: 'app-crear-escenario',
  templateUrl: './crear-escenario.component.html',
  styleUrls: ['./crear-escenario.component.css']
})
export class CrearEscenarioComponent implements OnInit{
Scenary:Escenario= new Escenario();
  constructor(private ScenaryService:ListarEscService, private router:Router){}

ngOnInit(): void {

}
saveScenary(){
  this.ScenaryService.createScenary(this.Scenary).subscribe(dato =>{
    console.log(dato);
    this.GoList();
  },error => console.log(error));
   
}
GoList(){
  this.router.navigate(['/verEscenarios']);
}
onSubmit(){
  this.saveScenary();
}
}

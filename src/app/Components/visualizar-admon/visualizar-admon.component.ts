import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { da } from 'date-fns/locale';
import { Escenario } from 'src/app/Model/Escenario';
import { ListarEscService } from 'src/app/service/listar-esc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-admon',
  templateUrl:'./visualizar-admon.component.html',
  styleUrls: ['./visualizar-admon.component.css']
})

export class VisualizarAdmonComponent implements OnInit{
  Scenary: Escenario[];
  constructor(private ServiceScenary:ListarEscService, private router:Router){  }

  ngOnInit(): void {
    this.getScenary(); 
  }

  updateS(id:number){
    this.router.navigate(['actualizarEsc',id]);
  }


deleteS(id:number){
    this.ServiceScenary.deleteS(id).subscribe(dato=>{
    console.log(dato);
     this.getScenary();
    });
  }

  private getScenary(){
    this.ServiceScenary.readAllScenarys().subscribe(dato=>{
      this.Scenary=dato;
    });
  }

 
}

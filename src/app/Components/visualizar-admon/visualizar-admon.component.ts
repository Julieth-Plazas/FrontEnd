import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { da } from 'date-fns/locale';
import { Escenario } from 'src/app/Model/Escenario';
import { ListarEscService} from 'src/app/service/listar-esc.service';
import { Router } from '@angular/router';
import{ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-visualizar-admon',
  templateUrl:'./visualizar-admon.component.html',
  styleUrls: ['./visualizar-admon.component.css']
})

export class VisualizarAdmonComponent implements OnInit{
  Scenary: Escenario[];
  errorMessage: string;

  constructor(private ServiceScenary:ListarEscService, private router:Router,  private toastr: ToastrService){  }

  ngOnInit(): void {
    this.getScenary(); 
  }

  updateS(id:number){
    this.router.navigate(['actualizarEsc',id]);
  }


deleteS(id: number) {
  this.ServiceScenary.deleteS(id).subscribe(
    dato => {
      console.log(dato);
      this.getScenary();
    },

   error => {
      console.log(error);
      // si el error es una cadena, significa que es el mensaje personalizado que creamos en el método deleteS()
      if (typeof error === 'string') {
      
        Swal.fire('No se  Elimino', `El Escenario no ha sido eliminado`, 'error');
      }
    }
  );
 Swal.fire('Se Elimino', `El Escenario ha sido eliminado con éxito`, 'success');

  }

  
 private getScenary(){
    this.ServiceScenary.readAllScenarys().subscribe(dato=>{
      this.Scenary=dato;
    });
  }

 
}

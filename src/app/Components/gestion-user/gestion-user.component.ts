import { Component , ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Prestamo } from 'src/app/Model/Prestamo';
import { PrestamoService } from 'src/app/service/prestamo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent {
  booking: Prestamo[];
constructor(private ServicePrestamo:PrestamoService, private router:Router){ }
ngOnInit(): void {
  this.getBooking(); 
}

private getBooking(){
  this.ServicePrestamo.readAllBooking().subscribe(dato=>{
    this.booking=dato;
  });
}
deleteB(id: number) {
  this.ServicePrestamo.deleteB(id).subscribe(
    dato => {
      console.log(dato);
      this.getBooking();
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


}

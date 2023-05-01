import { Component, ViewChild  } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PrestamoService } from 'src/app/service/prestamo.service';
import { Prestamo } from 'src/app/Model/Prestamo';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
import { Escenario } from 'src/app/Model/Escenario';
import Swal from 'sweetalert2';
import { ListarEscService } from 'src/app/service/listar-esc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDate } from 'js-joda';


@Component({
  selector: 'app-sol-reserva',
  templateUrl: './sol-reserva.component.html',
  styleUrls: ['./sol-reserva.component.css']
})
export class SolReservaComponent {
  
  form: FormGroup;
  Scenary:Escenario[];
  booking:Prestamo= new Prestamo();
  user:Usuario=new Usuario;


  escenarios: any[];
  constructor(private prestamoService:PrestamoService,private formBuilder: FormBuilder, private scenaryService:ListarEscService, private router:Router){}

  saveScenary(){
    this.prestamoService.createScenary(this.booking).subscribe(dato =>{
      console.log(dato);
      this.GoList();
    },error => console.log(error));
    Swal.fire('Guardado', `La reserva ha sido generada con éxito`, 'success');
     
  }
 
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        Escenario: ['', Validators.required]
      });
  
      this.getEscenarios();
    }
    getEscenarios() {
      this.scenaryService.getScenarios().subscribe(
        response => {
          this.escenarios = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  
  
  GoList(){
    this.router.navigate(['/ver']);
  }
  onSubmit(){
    const date = this.booking.date;
    this.booking.date = new Date(LocalDate.parse(date.toString()).toEpochDay() * 86400000);
      
      this.saveScenary();
    }

    
  }
  
  




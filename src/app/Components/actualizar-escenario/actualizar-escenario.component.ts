import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from 'src/app/Model/Escenario';
import { ListarEscService } from 'src/app/service/listar-esc.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar-escenario',
  templateUrl: './actualizar-escenario.component.html',
  styleUrls: ['./actualizar-escenario.component.css']
})
export class ActualizarEscenarioComponent implements OnInit {

  id: number;
  Scenary: Escenario=new Escenario;
  constructor(private ScenaryService:ListarEscService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ScenaryService.read(this.id).subscribe(dato =>{
      this.Scenary = dato;
    },error => console.log(error));
  }

  irListEsce(){
    this.router.navigate(['/verEscenarios']);
    Swal.fire('Escenario actualizado', `El Escenario ${this.Scenary.nameScenary} ha sido actualizado con éxito`, 'success');
  }

  onSubmit(){
    this.ScenaryService.updateS(this.id,this.Scenary).subscribe(dato => {
      this.irListEsce();
    },error => console.log(error));
}
}

import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ListarEscService } from 'src/app/service/listar-esc.service';

@Component({
  selector: 'app-visualizar-admon',
  templateUrl: './visualizar-admon.component.html',
  styleUrls: ['./visualizar-admon.component.css']
})
export class VisualizarAdmonComponent {
  columnas: string[] = ['ID','Nom_Escenario','Descripcion','Acciones'];

  datos: cancha[] = [new cancha(1, 'Futbol Sala 1','Cancha sintetica futbol sala 1'),

];

articuloselect: cancha = new cancha(0, "", "");

@ViewChild(MatTable) tabla1!: MatTable<cancha>;
}

export class cancha {
constructor(public ID: number,  public Nom_Escenario: string, public Descripcion: string) {
}
}

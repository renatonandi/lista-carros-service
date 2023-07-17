import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  public listCars: Array<Carro> = [];

  ngOnInit(): void {
    this.listCars = this.service.getLista();
  }
 
  constructor(private service: ServiceService) { }

  public deleteItem(index:number){
    this.service.deleteCar(index);
  }

  public editarCarro(carro:Carro, i: number){
    this.service.carroSelecionado(carro, i);

  }

}

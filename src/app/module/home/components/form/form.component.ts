import { Component } from '@angular/core';
import { Carro } from '../../models/carro';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public carro:Carro = {
    marca:"",
    placa:"",
    ano: 0,
    tipo:""
  }

  constructor(private service: ServiceService) { }

  public addCar(carro:Carro, form:any){

    let newCarro: Carro = {
      marca: carro.marca,
      placa: carro.placa ,
      ano: carro.ano,
      tipo: carro.tipo
    }

    form.reset();

    return this.service.addCarro(newCarro);

  }

  

}

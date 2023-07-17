import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  implements OnInit{
  public index:number = -1;
  public edit: boolean = false;


  public carro:Carro = {
    marca:"",
    placa:"",
    ano: 0,
    tipo:""
  }

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: any) => {
        this.carro = res[0]
        this.index = res[1]
        this.edit = !this.edit
      }
    })
  }

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

  public editarCarro(carro: Carro, form: any){
    this.service.deleteCar(this.index)
    this.addCar(carro, form);
    this.edit = false;

  }

  

}

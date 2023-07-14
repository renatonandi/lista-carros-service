import { EventEmitter, Injectable } from '@angular/core';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  public emitEvent = new EventEmitter();

  private listCars: Array<Carro> = JSON.parse(localStorage.getItem("carros") || '[]');

  public getLista(){
    return this.listCars;
  }

  public addCarro(carro:Carro){
    this.listCars.push(carro);
    localStorage.setItem('carros', JSON.stringify(this.listCars));
  }

  public deleteCar(index:number){
    this.listCars.splice(index, 1);
  }

}

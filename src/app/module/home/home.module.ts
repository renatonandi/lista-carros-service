import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }

import { ServicesInterface } from './../../models/portfolioInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public servicesInfo : ServicesInterface []

  constructor() {
    this.servicesInfo = {
      image: {
        src: '',
        alt: 'FSD icon'
      } ,
      title: 'Full Stack Development',
      description: 'Programación Full Stack'
    }, 
    {
      image: {
        src: '',
        alt: 'Design Icon'
      } ,
      title: 'UX/UI Design',
      description: 'Diseño de experiencia e interacción de Usuario'
    }, 
    {
      image: {
        src: '',
        alt: 'Management Icon '
      } ,
      title: 'Account Management',
      description: 'Gestión de clientes y grandes cuentas'
    }, 
    {
      image: {
        src: '',
        alt: 'Event Icon'
      } ,
      title: 'Event Management',
      description: 'Organización y gestión de eventos'
    }
   }

  ngOnInit(): void {
  }

}

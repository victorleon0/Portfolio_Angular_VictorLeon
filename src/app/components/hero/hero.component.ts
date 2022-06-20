import { HeroInterface } from './../../models/portfolioInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public portada: HeroInterface
  constructor() {
    this.portada = {
      title: "I'm Víctor León",
      image: {
        src: 'https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg',
        alt: 'Foto Portada'
      } ,
      contactButton: "Contacta Conmigo",
      subtitle:"Full Stack Developer & UX/UI Designer" ,
   }
  }
  ngOnInit(): void {
  }

}

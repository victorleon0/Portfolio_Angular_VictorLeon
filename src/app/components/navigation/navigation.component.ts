import { NavigationInterface } from './../../models/portfolioInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public menuInfo: NavigationInterface [];
    
  

  constructor() {
    this.menuInfo = [{
      submenu: "Home",
      link: "#home"
    }, 
    {
      submenu: "AboutMe",
      link: "#aboutme"
    }, 
    {
      submenu: "Projects",
      link: "#projects"
    }, 
    {
      submenu: "Contact",
      link: "#contact"
    }, 
    ]
   }

  ngOnInit(): void {
  }

}

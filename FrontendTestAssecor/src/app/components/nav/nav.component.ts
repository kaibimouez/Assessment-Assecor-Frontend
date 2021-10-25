import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: any[] = [
    {
      label: 'Star Wars',
      routerLink: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Filme',
      routerLink: 'filme',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Charaktere',
      routerLink: 'charaktere',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Planeten',
      routerLink: 'planeten',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ];
  constructor() { }
  
  ngOnInit(): void {
    
  }

}

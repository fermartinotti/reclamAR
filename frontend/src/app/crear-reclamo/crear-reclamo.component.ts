import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css']
})
export class CrearReclamoComponent implements OnInit {



  constructor(public router: Router) { }

  ngOnInit() {

  }

  public goCrearLuminaria(): void{
    this.router.navigate(['crear-reclamo', 'luminaria']);
  }

  public goCrearSemaforo(): void{
    this.router.navigate(['crear-reclamo', 'semaforo']);
  }

}

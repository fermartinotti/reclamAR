import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  numeroDeReclamo: number= 1;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  buscarReclamo(id:number):void {
  // validar primero o lanzar error
    this.router.navigate(['mis-reclamos', id])
  }
}

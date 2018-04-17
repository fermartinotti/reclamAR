import {Component, OnInit, Input} from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {

  @Input() reclamo: Reclamo = new Reclamo(null,null,"","",null,null,null)

  constructor(private reclamoService: ReclamoService, private ruta: ActivatedRoute) {
  }

  ngOnInit() {
    this.ruta.paramMap
      .switchMap( paramMap => this.reclamoService.buscarReclamo(+paramMap.get('id')))
      .subscribe(reclamo => this.reclamo = reclamo);
  }



}

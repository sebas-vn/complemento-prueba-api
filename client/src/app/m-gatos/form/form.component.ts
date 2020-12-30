import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Gato } from "../interfaces/gato";
import { GatoService } from "../services/gato.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  gato: Gato = {
    nombre: '',
    raza: '',
    edad: 0,
    foto: ''
  };

  edit: boolean = false;

  constructor(
    private gatoService: GatoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.gatoService.getGato(params.id).subscribe(
        res => {
          console.log(res);
          this.gato = res;
          this.edit = true;
        }
      )
    }
  }

  submitGato() {
    this.gatoService.createGato(this.gato).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/gatos']);
      },
      err => console.log(err)
    )
  }

  updateGato() {
    this.gatoService.updateGato(this.gato._id, this.gato).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/gatos']);
      },
      err => console.log(err)
    )
  }

  cancelForm() {
    this.router.navigate(['/gatos']);
  }

}

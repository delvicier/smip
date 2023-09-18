import { Component } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;
  loginServicio = inject(MatriculaService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl(),
      pass: new FormControl()
    })
  }

  async onSubmit() {
    const response = await this.loginServicio.login(this.formulario.value);
    if(!response.error) {
      localStorage.setItem('token', response.token);
      this.router.navigate(['inicio'])
    }
    console.log(response);
    console.log(localStorage.getItem('token'));
  }

}

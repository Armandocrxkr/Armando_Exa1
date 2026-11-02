import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: string = "";
  password: string = "";
  mensaje: string = "";

  constructor(private router: Router){}

  iniciarSesion(){
    if(this.usuario === "admin" && this.password === "admin123"){
      localStorage.setItem("sesion", "activa");
      this.router.navigate([biblioteca]);
    }
    else{
      this.mensaje = "Usuario o Contraseña Incorrectos";
      this.usuario = "";
      this.password = "";
    }
  }
}

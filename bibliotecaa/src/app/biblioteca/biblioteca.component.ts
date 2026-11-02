import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-biblioteca',
  imports: [FormsModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css',
})
export class BibliotecaComponent {
  titulo: string = "";
  autor: string = "";

  constructor (private router: Router){}

  mostrarRegistros(){
    
  }

  crearRegistros(){
      
  }

  actualizarRegistros(){

  }

  eliminarRegistros(){
    localStorage.removeItem(this.titulo);
    localStorage.removeItem(this.autor);
  }
}

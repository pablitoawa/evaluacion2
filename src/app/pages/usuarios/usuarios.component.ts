import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  servicio = inject(UsuariosService);
  usuarios: any;
  email: any;
  password: any;
  role: any;
  id: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicio.getUsuarios().subscribe(params => {
      this.usuarios = params;
    });
  }

  guardar(formulario: any) {
    this.servicio.postUsuarios(formulario.value).subscribe();

    window.location.reload();
  }

  editar(formulario: any) {
    this.servicio.putUsuarios(formulario.value).subscribe();

    window.location.href = '/usuarios';
  }

  eliminar(id: any) {
    this.servicio.deleteUsuarios(id).subscribe();

    window.location.href = '/usuarios';
  }
}

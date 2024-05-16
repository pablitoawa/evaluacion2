import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service = inject(UsuariosService);
  email: any;
  password: any;
  token: any;

  login(formulario: any) {
    this.service.postLogin(formulario.value).subscribe((params: any) => {
      this.token = params.accessToken;
      if (this.token) {
        localStorage.setItem('token', this.token);
        window.location.href = '/ordenes';
      }
    });
  }

  logout() {
    if(this.token !== '') {
      localStorage.setItem('token', 'false');
      window.location.href = '/ordenes';
    }
  }
}

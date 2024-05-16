import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  servicio = inject(OrdenesService);
  id: any;
  mesa: any;
  producto: any;
  total: any;

  guardar(formulario: any) {
    this.servicio.postOrdenes(formulario.value).subscribe();

    window.location.reload();
  }
}

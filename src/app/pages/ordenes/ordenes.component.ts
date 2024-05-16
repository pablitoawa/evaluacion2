import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [TablaComponent, FormularioComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(OrdenesService);
  ordenes: any;
  filtro = 100;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.servicio.getOrdenes().subscribe(params => {
      this.ordenes = params;
    });
  }

}

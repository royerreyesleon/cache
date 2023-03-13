import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor, Receta, RecetarioResponse } from 'src/app/interfaces/recetario';
import { RecetarioService } from 'src/app/services/recetario.service';

import { environment } from '../../environments/environment';

declare let $: any;

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.css']
})
export class RecetarioComponent implements OnInit {
    
    public logo_ujat: string    = environment.logo_ujat;
    public logo_uag: string     = environment.logo_uag;
    public logo_empresa: string = environment.logo_empresa;
    public receta?: Receta;
    public doctor?: Doctor;
    public recetas?: Receta[] = [];
    public recetarioResponse?: RecetarioResponse;
    // public cargando: boolean = true;
    public searchTerm: string = '';
    
    constructor(private recetarioService:RecetarioService){}
    
    ngOnInit(): void {
        this.getData()
    }
    
    getData() {
        this.recetarioService.getData().subscribe(
            (data) => {
                localStorage.setItem('recetas', JSON.stringify(data));
                this.recetarioResponse = data;
                this.recetas = data.recetas;
                console.log('success', data)
            },
            (error) => {
                console.log('oops', error)
                this.recetarioResponse = JSON.parse(localStorage.getItem('recetas')!);
                this.recetas = this.recetarioResponse?.recetas;
                console.log('localStorage', this.recetarioResponse);
            }
        );
    }
    
    showModal(receta: Receta) {
        console.log('receta', receta);
        this.receta = receta;
        this.doctor = this.searchDoctor(receta.rec_fkdoctor);
    }
    
    printPdf() {
        $('.areaPdf').printThis({
            importCSS: true,
            importStyle: true,
        });
    }
    
    searchDoctor(id: number) {
        const doctor = this.recetarioResponse?.doctores.find(element => element.per_id == id);
        return doctor;
    }
    
    // search(value: string): void {
        // this.recetas = this.recetarioResponse?.recetas.filter((val) =>
            // val.rec_folio.toLowerCase().includes(value)
        // );
    // }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetarioComponent } from './recetario/recetario.component';
import { Error404Component } from './error404/error404.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@NgModule({
  declarations: [
    RecetarioComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
        Error404Component,
    SearchFilterPipe
    ],
    
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { RecetarioComponent } from './pages/recetario/recetario.component';

const routes: Routes = [
    { path: 'recetario', component: RecetarioComponent },
    // { path: 'pagina1', component: Pagina1Component },
    // { path: 'pagina2', component: Pagina2Component },
    // { path: 'pagina3', component: Pagina3Component },
    { path: '', redirectTo: 'recetario', pathMatch: 'full' },
    { path: '**', redirectTo: 'recetario' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true, // <- Indicar que se use el hash
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

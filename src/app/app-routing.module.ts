import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {FormularioComponent} from "./components/formulario/formulario.component";
import {BuscadorComponent} from "./components/buscador/buscador.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'buscador', component: BuscadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

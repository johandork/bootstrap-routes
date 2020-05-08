import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HolaComponent } from "./componentes/hola/hola.component";
import { HelloComponent } from "./hello.component";
import { MyComponentComponent } from "./componentes/my-component/my-component.component";

const routes: Routes = [
  { path: 'login', component: MyComponentComponent },
      { path: 'home', component: HolaComponent },
      { path: 'catalog', component: HelloComponent },
      { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ AppComponent, HelloComponent, MyComponentComponent],
})

export class AppRoutingModule { }
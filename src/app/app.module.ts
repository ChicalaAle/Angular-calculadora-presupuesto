import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ResumenComponent } from './resumen/resumen.component';
import { FormsModule } from '@angular/forms';
import { MovementsService } from './movements.service';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresosComponent } from './ingresos/ingresos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgregarComponent,
    ResumenComponent,
    EgresosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InerpolationComponent } from './components/inerpolation/inerpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    InerpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

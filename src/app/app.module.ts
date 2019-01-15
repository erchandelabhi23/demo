import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AbhishekComponent } from './abhishek/abhishek.component';
import { ChildComponent } from './child/child.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AbhishekComponent,
    ChildComponent,
    CustomPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

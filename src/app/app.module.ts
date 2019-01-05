import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatDatepickerModule } from '@angular/material';
// import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {TableModule} from 'primeng/table';
import { SliderComponent } from './Component/slider/slider.component';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './Component/breadcrumb/breadcrumb.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './Component/auth/auth.guard';
import { TestComponent } from './test/test.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { Test2Component } from './test2/test2.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    SliderComponent,
    TestComponent,
    Test2Component,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule,
    MatDatepickerModule
  ],
})
export class AppModule {}

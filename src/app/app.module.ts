import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './Component/breadcrumb/breadcrumb.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './Component/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

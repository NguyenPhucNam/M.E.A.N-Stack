import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { CategoryComponent } from './Component/category/category.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { DetailsComponent } from './Component/details/details.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HosoComponent } from './Component/hoso/hoso.component';
import { SellerPageComponent } from './Component/seller-page/seller-page.component';
import { ErrorComponent } from './Component/error/error.component';
import { AddPageComponent } from './Component/add-page/add-page.component';
import { EditPageComponent } from './Component/edit-page/edit-page.component';
import { AuthGuard } from './Component/auth/auth.guard';
import { CommonComponent } from './Component/common/common.component';

const routesConfig: Routes = [
    { path: "", component: HomepageComponent },
    { path: "danh-muc", component: CategoryComponent },
    { path: "san-pham/chi-tiet/:id", component: DetailsComponent },
    { path: "gioi-thieu", component: AboutComponent },
    { path: "lien-he", component: ContactComponent },
    { path: "kenh-nguoi-ban", component: SellerPageComponent, canActivate: [AuthGuard] },
    { path: "kenh-nguoi-ban/them", component: AddPageComponent, canActivate: [AuthGuard] },
    { path: "kenh-nguoi-ban/chinh-sua/:id", component: EditPageComponent, canActivate: [AuthGuard] },
    { path: "tai-khoan/dang-nhap", component: LoginComponent },
    { path: "tai-khoan/dang-ky", component: SignupComponent },
    { path: "tai-khoan/ho-so/:id", component: HosoComponent, canActivate: [AuthGuard] },
    { path: "tai-khoan/dang-xuat", redirectTo: "/", pathMatch: "full" },
    { path: "**", component: ErrorComponent }
];

@NgModule({
    declarations: [
        HomepageComponent,
        CategoryComponent,
        AboutComponent,
        ContactComponent,
        DetailsComponent,
        LoginComponent,
        SignupComponent,
        HosoComponent,
        SellerPageComponent,
        AddPageComponent,
        EditPageComponent,
        ErrorComponent,
        CommonComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routesConfig)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

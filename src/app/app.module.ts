import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerService } from './services/customer.service';

const routes: Routes = [
  {path: 'update', component: CustomerFormComponent},
  {path: 'add', component: CustomerFormComponent},
  {path: 'list', component: CustomerListComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', redirectTo: '/list', pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

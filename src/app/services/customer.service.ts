import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import { Customer } from 'src/app/common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  status: string;

  private baseUrl = 'http://localhost:8080/customers';
  private errorMessage: any;

  constructor(private httpClient: HttpClient) { }

  getListCustomers(): Observable<Customer[]>{
    const searchUrl = `${this.baseUrl}/`;
    return this.getCustomers(searchUrl);
  }

  getCustomerById(id: number): Observable<Customer>{
    const searchUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Customer>(searchUrl);
  }

  private getCustomers(searchUrl: string): Observable<Customer[]> {
    return this.httpClient.get<GetResponseCustomers>(searchUrl).pipe(
      map(response => response._embedded.customers)
    );
  }

  sendCustomer(customer: Customer): void{
    const searchUrl = `${this.baseUrl}`;
    if (customer.id === undefined){
      this.httpClient.post(searchUrl, customer)
        .subscribe(() => {
          this.status = 'Add successful';
          this.getCustomers(searchUrl);
      });
    }
    else{
      this.httpClient.put(searchUrl, customer)
        .subscribe(() => {
          this.status = 'Update successful';
          this.getCustomers(searchUrl);
        });
    }
  }

  deleteCustomer(id: number): void{
    const searchUrl = `${this.baseUrl}/${id}`;
    this.httpClient.delete(searchUrl)
      .subscribe(() => this.status = 'Delete successful');

  }
}

interface GetResponseCustomers {
  _embedded: {
    customers: Customer[];
  };
}

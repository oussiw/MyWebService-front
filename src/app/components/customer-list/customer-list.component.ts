import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  variable: number;

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(): void{
    this.service.getListCustomers().subscribe(data => {
        this.customers = data;
        this.variable = this.customers.length;
      });
  }

  deleteCustomer(id: number): void{
    this.service.deleteCustomer(id);
  }

}

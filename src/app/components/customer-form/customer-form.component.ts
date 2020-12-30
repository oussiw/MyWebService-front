import { Component, OnInit } from '@angular/core';
import {Customer} from '../../common/customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  addCustomer(): void{
    this.service.sendCustomer(this.customer);
  }
}

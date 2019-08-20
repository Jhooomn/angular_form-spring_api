import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerServicesService } from 'src/app/services/customer-services.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  customer: Customer = new Customer();
  customerList: Customer[];

  constructor(private service: CustomerServicesService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.getCustomers();
  }


  getCustomers() {
    this.service.getCustomers().subscribe(data => (this.customerList = data));
  }


  addCustomer(event, customer: Customer) {

    if (customer.id === undefined) {
      console.log('u will create');
      this.service.createCustomer(customer).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your have created a Customer!',
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      this.service.updateCustomer(customer).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your have updated a  Customer!',
          showConfirmButton: false,
          timer: 1500
        });
      });
      this.getCustomers();
      this.ngOnInit();
    }
  }

  editCustomer(event, customer: Customer) {
    this.customer = customer;
  }

  deleteCustomer(event, customer: Customer) {
    swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete this customer?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yup, delete!',
      cancelButtonText: 'Cencel'
    }).then(result => {
      if (result.value) {
        this.service.deleteCustomer(customer.id).subscribe(data => {
          console.log('data', data);
        });
        this.getCustomers();
        this.ngOnInit();
        swal.fire('Deleted!', 'Customer has been deleted.', 'success');
        console.log('id:', customer.id);
      }
    });
  }


}

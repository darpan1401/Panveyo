import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-get-started',
  imports: [CommonModule,FormsModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {
  loading = false;

formData = {
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}


  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
    this.contactService.sendContactForm({ sheet1: this.formData }).subscribe({
      next: (res) => {
        console.log('Data sent successfully:', res);
        this.loading = false;
        form.resetForm();

        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your message has been successfully sent. We will get back to you soon.',
          confirmButtonColor: '#d11a1a'
        });
      },
      error: (err) => {
        this.loading = false;
        console.error('Error sending data:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#d11a1a'
        });
      }
    });
  }
}
  onReset(form: NgForm) {
    form.resetForm();
    this.formData = {
      name: '',
      phone: '',
      email: '',
      city: '',
      message: ''
    };
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products = [
    {
      id: 'laptop',
      title: 'QR-Based Attendance System',
      description: 'A smart attendance solution using dynamic QR codes to ensure security and efficiency.',
      status: 'Coming Soon'
    },
    {
      id: 'laptop',
      title: 'Billing Software',
      description: 'A fast, efficient, and easy-to-use billing solution for small businesses.',
      status: 'Coming Soon'
    },
    {
      id: 'laptop',
      title: 'Payroll & HR Tools',
      description: 'Automate payroll, track attendance, and manage HR tasks effortlessly.',
      status: 'In Planning'
    },
    {
      id: 'laptop',
      title: 'AI-Based Business Forecasting',
      description: 'Leverage AI to predict business trends and optimize your operations.',
      status: 'Upcoming'
    }
  ];

  viewProduct(productId: string) {
    // Placeholder for navigation or modal
    alert(`Product details for "${productId}" will be shown here.`);
  }

  contact() {
    // Placeholder for redirection or popup
    alert('Redirecting to contact form...');
  }}


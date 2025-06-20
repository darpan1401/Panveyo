import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  founder = {
    name: 'Darpan Dasani',
    role: 'Founder & CEO, Panveyo',
    photo: 'darpan.jpg'
  };

  stats = [
    { number: '18+', label: 'Modules in Development' },
    { number: '4', label: 'Planned Phases' },
    { number: '1000+', label: 'Target Outlets' }
  ];

  phases = [
    {
      title: 'Phase 1: POS & Restaurant Tools',
      description: 'Empowering food and retail businesses with core tools for daily operations.',
      keywords: [
        'Restaurant POS',
        'Inventory Management',
        'Menu Manager',
        'Customer CRM',
        'QR Ordering',
        'Reports Dashboard'
      ]
    },
    {
      title: 'Phase 2: Payroll & HR',
      description: 'Automation tools to manage staff, salaries, shifts, and leaves.',
      keywords: [
        'Payroll Processing',
        'Attendance Tracking',
        'Leave Management',
        'Self-Service App'
      ]
    },
    {
      title: 'Phase 3: AI & Forecasting',
      description: 'Bringing predictive power to business intelligence.',
      keywords: [
        'Analytics Dashboard',
        'Sales Prediction',
        'Inventory Forecasting',
        '"What-if" Simulations'
      ]
    },
    {
      title: 'Phase 4: Business Add-ons',
      description: 'Expanding into vendor, franchise, accounting, and customer engagement tools.',
      keywords: [
        'GST Invoicing',
        'Vendor System',
        'Franchise Management',
        'Field Sales Tracker'
      ]
    }
  ];

  team = [
    { name: 'Riya Mehta', role: 'Product Manager', photo: 'riya.png' },
    { name: 'Arjun Rao', role: 'Frontend Developer', photo: 'arjun.png' },
    { name: 'Priya Joshi', role: 'Backend Engineer', photo: 'priya.png' }
  ];
}

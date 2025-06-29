import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopService } from './services/scroll-top.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'panveyo';

  constructor(
    private scrollService: ScrollTopService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.setSEOTags();
  }

  setSEOTags() {
    this.titleService.setTitle('Panveyo - Smart Business Software Suite');

    this.metaService.addTags([
      {
        name: 'description',
        content: 'Panveyo offers cutting-edge software solutions including POS, CRM, Payroll, and Business Analytics for restaurants and enterprises.'
      },
      {
        name: 'keywords',
        content: 'Panveyo, POS, CRM, Payroll Software, Business Analytics, SaaS, restaurant software'
      },
      {
        name: 'author',
        content: 'Panveyo Tech'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]);
  }
}

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
      { name: 'description', content: 'Panveyo offers cutting-edge POS, CRM, Payroll, and Business Analytics for restaurants and enterprises.' },
      { name: 'keywords', content: 'Panveyo, POS Software, Restaurant Management, CRM, Payroll, SaaS, India' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Panveyo Tech' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'og:title', content: 'Panveyo - Smart Business Software Suite' },
      { name: 'og:description', content: 'Run your restaurant or business smarter with Panveyo’s advanced tools.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.panveyo.com' },
      { name: 'og:image', content: 'https://www.panveyo.com/assets/og-image.jpg' }
    ]);
  }
}

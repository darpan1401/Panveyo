import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollTopService {
  constructor(router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        document.documentElement.scrollTop = 0; // For most browsers
        document.body.scrollTop = 0;            // For Safari and fallback
      });
  }
}

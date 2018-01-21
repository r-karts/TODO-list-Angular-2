import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'purchase-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css'],
})
export class AppComponent {

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    navIsFixed: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const number = window.pageYOffset ||
            this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 200) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && number < 10) {
            this.navIsFixed = false;
        }
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }


}

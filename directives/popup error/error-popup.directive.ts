import {Directive, ElementRef, HostListener, Input, OnInit, Renderer} from '@angular/core';


@Directive ({
    selector : '[errorPopup]',
})

export class ErrorPopupDirective {

    @Input() errorPopup : string;

    constructor(private el: ElementRef, private renderer : Renderer) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        if (this.errorPopup)
            this.renderer.setElementClass(this.el.nativeElement, 'error-popup', true);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setElementClass(this.el.nativeElement, 'error-popup', false);
    }

}
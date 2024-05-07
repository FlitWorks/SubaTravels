import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconsImmutable } from '../shared/icons-immutable';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  readonly icons: IconsImmutable = new IconsImmutable();
  constructor(private activeRoute: ActivatedRoute) {}
  activeFragment;
  ngOnInit() {
    this.activeFragment = this.activeRoute.fragment.pipe(share());
    this.activeRoute.fragment.subscribe((data) => {
      this.jumpToSection(data);
    });
  }
  jumpToSection(value) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
  }
  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}

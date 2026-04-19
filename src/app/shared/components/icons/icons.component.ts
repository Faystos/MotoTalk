import {Component, computed, inject, input} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {ICON_REGISTRY} from "./icon-registry";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  imports: []
})
export class IconsComponent {
  readonly #sanitizer = inject(DomSanitizer);

  readonly  name = input.required<string>();

  safeIcon = computed(() => {
    const svg = ICON_REGISTRY[this.name()];
    if (!svg) {
      console.warn(`Icon "${this.name()}" not found`);
      return '';
    }
    return this.#sanitizer.bypassSecurityTrustHtml(svg);
  });
}

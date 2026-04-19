import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class RouteService {
  readonly #router = inject(Router);

  navigateTo(path: string): void {
    this.#router.navigate([path]);
  }
}

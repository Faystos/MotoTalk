import { Component, inject } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { IconsComponent } from "../../shared/components/icons/icons.component";
import { RouteService } from "../../shared/services/route/route.service";

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [IonContent, IconsComponent]
})
export class MainPageComponent {
  readonly #routeService = inject(RouteService);

  navigateToDeviceSearch(): void {
    this.#routeService.navigateTo('/device-search');
  }
}

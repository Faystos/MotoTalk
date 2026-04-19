import { Component, inject } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { RouteService } from "../../shared/services/route/route.service";
import {IconsComponent} from "../../shared/components/icons/icons.component";

@Component({
  selector: 'app-device-search',
  templateUrl: './device-search.component.html',
  styleUrls: ['./device-search.component.scss'],
  imports: [IonContent, IconsComponent]
})
export class DeviceSearchComponent {
  readonly #routeService = inject(RouteService);

  navigateToMainPage(): void {
    this.#routeService.navigateTo('/main');
  }
}

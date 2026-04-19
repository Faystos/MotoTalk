import { Component } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import {IconsComponent} from "../../shared/components/icons/icons.component";

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [IonContent, IconsComponent]
})
export class MainPageComponent {}

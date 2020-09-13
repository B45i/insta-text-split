import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { TextServiceService } from "../text-service.service";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  constructor(
    public navCtrl: NavController,
    public textService: TextServiceService
  ) {}

  onClick(event: any) {
    event.target.select()
    document.execCommand('copy');
  }
}

import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TextServiceService } from "../text-service.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title: string;
  content: string;
  footer: string;

  constructor(
    public navCtrl: NavController,
    public textService: TextServiceService
  ) {}
}

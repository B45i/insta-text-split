import { Component } from '@angular/core';
import { TextService } from '../text.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  isReverse = false;
  constructor(
    public textService: TextService,
    public toastController: ToastController
  ) {}

  onClick(event: any) {
    event.target.select();
    document.execCommand('copy');
    this.toastController
      .create({
        message: 'Text copied to clip board',
        duration: 2000,
      })
      .then((toast) => toast.present());
  }
}

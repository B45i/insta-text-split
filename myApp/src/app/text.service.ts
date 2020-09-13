import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  constructor() {}

  parts: Array<string> = [];

  genarateText(title: string, content: string, footer: string = '') {
    let partial = '';
    content
      .trim()
      .split(' ')
      .forEach((w, i) => {
        const frag = `${title} - PART: ${
          this.parts.length + 1
        }\n\n${partial}\n\n${footer}`;

        if ((frag + w).length > 2150) {
          this.parts.push(frag);
          partial = w;
        } else {
          partial = `${partial} ${w}`;
        }
      });
    this.parts.push(
      `${title} - PART: ${this.parts.length + 1}\n\n${partial}\n\n${footer}`
    );
  }
}

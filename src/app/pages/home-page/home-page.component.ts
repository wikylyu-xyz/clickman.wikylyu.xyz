import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  talks: any[] = [
    {
      text: 'I feel relieved if the United States is under the protection of ClickMan.',
      name: 'Steven Rogers',
    },
    {
      text: 'ClickMan is the most powerful person I have ever met in my life',
      name: 'Tony Stark',
    },
    {
      text: 'ClickMan is the only one who can stop Google from collecting the Infinity Stones.',
      name: 'Stephen Strange',
    },
  ];
}

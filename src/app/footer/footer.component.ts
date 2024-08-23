import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
}

import { Component, OnInit} from '@angular/core';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Process the form data here
      console.log('Form submitted:', this.contactForm.value);
      // You can also integrate a service to send the data to a server
    }
  }
}

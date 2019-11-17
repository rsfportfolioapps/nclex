import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {
  showLogin = false;
  readonly links = [
    {
      value: '/about',
      label: 'About',
      sub: [
        {
          value: '/about',
          label: 'Who we are',
        },
        {
          value: '/faqs',
          label: 'FAQs',
        }
      ]
    },
    {
      value: '/expertbanks',
      label: 'ExpertBanks'
    },
    {
      value: '/nclex-rn',
      label: 'NCLEX-RN'
    },
    {
      value: '/institution',
      label: 'Institution'
    },
    {
      value: '/pricing',
      label: 'Pricing'
    },
    {
      value: '/contact',
      label: 'Contact'
    },
    {
      value: '/blog',
      label: 'Blog'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickLogin() {
    this.showLogin = !this.showLogin;
  }

  onClickSignup() {
    alert('@onClick Signup');
  }

}

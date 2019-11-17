import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss']
})
export class FooterNavigationComponent implements OnInit {
  logoLink = '/';
  logoTitle = 'Expert Academy Logo';
  logoUrl = './assets/images/global/footer_logo.png';

  appLink = '/';
  appTitle = 'Expert Academy';
  appLabel = 'www.expertacademy.com';

  helpText = 'Help';

  copyrightText = '©2019 NCLEX ExpertAcademy. All rights reserved.';

  socialMedias = [
    {
      id: '1',
      link: 'https://www.facebook.com',
      title: 'Facebook',
      icon: 'facebook-f'
    },
    {
      id: '2',
      link: 'https://www.twitter.com',
      title: 'Twitter',
      icon: 'twitter'
    },
    {
      id: '3',
      link: 'https://www.linkedin.com',
      title: 'LinkedIn',
      icon: 'linkedin-in'
    }
  ];

  navlinks = [
    {
      id: '1',
      link: '/institution',
      title: 'Institution',
    },
    {
      id: '2',
      link: '/terms-of-use',
      title: 'Terms of use',
    },
    {
      id: '3',
      link: '/contact',
      title: 'Contact',
    },
    {
      id: '4',
      link: '/privacy-policy',
      title: 'Privacy Policy',
    },
    {
      id: '5',
      link: '/faq',
      title: 'FAQ',
    },
    {
      id: '6',
      link: '/blog',
      title: 'Blog',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

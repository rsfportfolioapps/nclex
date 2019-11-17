import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {
  pages = [
    {
      id: 'home',
      name: 'Home Page',
      sections: [
        {
          id: '1',
          name: 'Hero Section'
        },
        {
          id: '2',
          name: 'Universities Section'
        },
        {
          id: '3',
          name: 'Career Benefits Section'
        },
        {
          id: '4',
          name: 'Accreditations Section'
        },
        {
          id: '5',
          name: 'Expert Banks Section'
        },
        {
          id: '6',
          name: 'Statistics Section'
        },
        {
          id: '7',
          name: 'News Section'
        },
        {
          id: '8',
          name: 'Registration Form Section'
        },
        {
          id: '9',
          name: 'Testimonials Section'
        },
        {
          id: '10',
          name: 'Newsletter Section'
        }
      ]
    },
    {
      id: 'about',
      name: 'Who we are',
      sections: []
    },
    {
      id: 'faqs',
      name: 'FAQs',
      sections: []
    },
    {
      id: 'expertbanks',
      name: 'Expert Banks',
      sections: []
    },
    {
      id: 'nclex',
      name: 'NCLEX-RN',
      sections: []
    },
    {
      id: 'institution',
      name: 'Institution',
      sections: []
    },
    {
      id: 'pricing',
      name: 'Pricing',
      sections: []
    },
    {
      id: 'contact',
      name: 'Contact',
      sections: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

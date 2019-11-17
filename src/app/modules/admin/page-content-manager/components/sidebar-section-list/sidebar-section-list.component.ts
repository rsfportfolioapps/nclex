import { Component, OnInit } from '@angular/core';
import { SectionListItemModel } from '../../models/section-list-item';

@Component({
  selector: 'app-sidebar-section-list',
  templateUrl: './sidebar-section-list.component.html',
  styleUrls: ['./sidebar-section-list.component.scss']
})
export class SidebarSectionListComponent implements OnInit {
  sections: SectionListItemModel[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section',
  imports: [CommonModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  ip: string = "";
  isp: string = "";
  country: string = "";
  browser: string = "";

  constructor(private geolocation: GeolocationService) {}

  async ngOnInit() {
    this.ip = await this.geolocation.loadIpData();
    this.isp = await this.geolocation.loadIspData();
    this.country = await this.geolocation.loadCountryData();
    this.browser = navigator.userAgent.split("/")[0];
  }
}

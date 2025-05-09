import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  API_URL = "http://ip-api.com/json/";
  
  constructor() {}


  async loadDataFromApi() {
    let response = await fetch(this.API_URL);
    let responseData = await response.json();
    return responseData
  }

  async loadIpData() {
    let responseData = await this.loadDataFromApi();
    return responseData.query;
  }

  async loadIspData() {
    let responseData = await this.loadDataFromApi();
    return responseData.isp;
  } 
  
  async loadCountryData() {
    let responseData = await this.loadDataFromApi();
    return responseData.country;
  } 
}

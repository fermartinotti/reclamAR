import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class Geocoder {

    constructor(private http: Http) {}
 
    getLocation(lat: string, long:string){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat + ',' + long+'&key=AIzaSyCCmSSC-ooBccku86fEmRa1coVThfluAU0')
        .toPromise()
        .then((response) => Promise.resolve(response.json()))
        .catch((error) => Promise.resolve(error.json()));
    } 
}
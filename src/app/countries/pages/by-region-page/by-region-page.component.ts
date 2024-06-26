import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

    public countries: Country[] = [];

    constructor(private countriesService: CountriesService){


    };


  SearchByRegion(term: string): void {

    this.countriesService.searchRegion(term)
    .subscribe(countries =>{

        this.countries = countries;

    });

  }

}

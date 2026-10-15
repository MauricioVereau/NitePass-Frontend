import { Component, HostListener, inject, signal } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'home-page',
  templateUrl: './home-page.html',
})
export class HomePage {
  private readonly cityService = inject(CityService);

  protected readonly cities = rxResource({
    stream: () => this.cityService.getAllCities(),
  });

  protected readonly title = signal('NitePass');
  protected selectedCity = 'Todas las ciudades';

  protected readonly dateOptions = [
    'Cualquier fecha',
    'Hoy',
    'Este fin de semana',
    'Próxima semana',
    'Este mes',
  ];

  protected selectedDate = this.dateOptions[0];
  protected openFilter: 'city' | 'date' | null = null;

  @HostListener('document:click', ['$event'])
  protected closeFiltersOnOutsideClick(event: MouseEvent): void {
    const target = event.target;
    if (target instanceof Element && !target.closest('.filter-select')) {
      this.openFilter = null;
    }
  }

  @HostListener('document:keydown.escape')
  protected closeFiltersOnEscape(): void {
    this.openFilter = null;
  }

  protected toggleFilter(filter: 'city' | 'date'): void {
    this.openFilter = this.openFilter === filter ? null : filter;
  }

  protected selectCity(city: string): void {
    this.selectedCity = city;
    this.openFilter = null;
  }

  protected selectDate(date: string): void {
    this.selectedDate = date;
    this.openFilter = null;
  }
}

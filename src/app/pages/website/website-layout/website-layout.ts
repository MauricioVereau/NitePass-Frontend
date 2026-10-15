import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';


@Component({
  imports: [RouterOutlet, Navbar, Footer],
  selector: 'website-layout',
  templateUrl: './website-layout.html',
})
export class WebsiteLayout {}

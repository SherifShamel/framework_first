import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Welcomepage } from "./welcomepage/welcomepage";
import { Copyright } from "./copyright/copyright";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Welcomepage, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment1');
}

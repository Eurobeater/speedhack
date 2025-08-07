import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './componentes/home/home';
import { Navbar } from "./componentes/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('speedhack');
}

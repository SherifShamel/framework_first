import { Component } from '@angular/core';
import { Star } from "../components/star/star";

interface IPortfolio {
  id: number;
  imageSrc: string;
  title: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  portfolioItems: IPortfolio[] = [
    { id: 1, imageSrc: './images/port1.png', title: 'Item One' },
    { id: 2, imageSrc: './images/port2.png', title: 'Item Two' },
    { id: 3, imageSrc: './images/port3.png', title: 'Item Three' },
    { id: 4, imageSrc: './images/port2.png', title: 'Item Four' },
    { id: 5, imageSrc: './images/port3.png', title: 'Item Five' },
    { id: 6, imageSrc: './images/port1.png', title: 'Item Six' },
  ];
}

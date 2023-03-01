import { Component } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-monthlyexpenseschart',
  templateUrl: './monthlyexpenseschart.component.html',
  styleUrls: ['./monthlyexpenseschart.component.scss']
})
export class MonthlyexpenseschartComponent {

  constructor() {}

  ngOnInit(): void{
    this.RenderChart();
  }

  RenderChart(){

    new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    
  }
}

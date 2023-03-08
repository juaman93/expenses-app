import { Component } from '@angular/core'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-monthlyexpenseschart',
  templateUrl: './monthlyexpenseschart.component.html',
  styleUrls: ['./monthlyexpenseschart.component.scss']
})
export class MonthlyexpenseschartComponent {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart()
  }

  RenderChart() {
    new Chart('monthlyexpenseschart', {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}

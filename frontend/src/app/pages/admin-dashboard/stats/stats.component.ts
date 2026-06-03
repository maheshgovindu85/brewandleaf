import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Stats } from '../../../models/brew-and-leaf.models';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: Stats = {
    total_revenue: 0,
    total_orders: 0,
    total_products: 0,
    total_inventory: 0
  };
  
  @ViewChild('salesChart') salesChartRef!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.apiService.getSummaryStats().subscribe(data => {
      this.stats = data;
      this.initChart();
    });
  }

  initChart(): void {
    this.apiService.getDailyStats().subscribe(data => {
        if (!this.salesChartRef) return;
        const ctx = this.salesChartRef.nativeElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.date),
                datasets: [{
                    label: 'Daily Revenue',
                    data: data.map(d => d.revenue),
                    borderColor: '#4B3621',
                    backgroundColor: 'rgba(75, 54, 33, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    });
  }
}

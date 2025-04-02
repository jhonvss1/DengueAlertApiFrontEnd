import { Component, OnInit } from '@angular/core';
import { DengueService } from 'src/app/services/dengue.service';
import { DengueAlert } from 'src/app/model/dengue-alert';
import { DateUtils } from 'src/app/utils/date-util';

@Component({
  selector: 'app-dengue',
  templateUrl: './dengue.component.html',
  styleUrls: ['./dengue.component.css'],
})
export class DengueComponent implements OnInit {
  allAlerts: DengueAlert[] = [];
  lastThreeWeeksAlerts: DengueAlert[] = [];
  loading = true;
  error = false;

  constructor(
    private dengueService: DengueService,
  ) {}

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts(): void {
    this.dengueService.getAllAlerts().subscribe({
      next: (data: DengueAlert[]) => {
        this.allAlerts = data;
        this.filterLastThreeWeeks();
        this.loading = false;
      },
      error: (err: any) => {
        this.error = true;
        this.loading = false;
        console.error('Error loading alerts:', err);
      },
    });
  }

  private filterLastThreeWeeks(): void {
    const lastThreeWeeks = DateUtils.getLastThreeWeeks();
  
    this.lastThreeWeeksAlerts = this.allAlerts
      .filter(alert => lastThreeWeeks.includes(alert.epidemologicalWeek))
      .sort((a, b) => b.epidemologicalWeek - a.epidemologicalWeek);
  
    console.log('Semanas filtradas:', lastThreeWeeks);
    console.log('Alertas filtrados:', this.lastThreeWeeksAlerts);

    this.lastThreeWeeksAlerts = this.allAlerts
      .filter((alert) => lastThreeWeeks.includes(alert.epidemologicalWeek))
      .sort((a, b) => b.epidemologicalWeek - a.epidemologicalWeek);

    console.log('Dados filtrados:', this.lastThreeWeeksAlerts);
  }

  formatForDisplay(alert: DengueAlert): any {
    const weekStr = alert.epidemologicalWeek.toString();
    return {
      ...alert,
      week: weekStr,
      weekNumber: weekStr.slice(4),
      reportedCases: alert.reporteCases, // Corrige o nome
      alertLevelText: this.getAlertLevelText(alert.alertLevel),
    };
  }

  getAlertLevelClass(level: number): string {
    return (
      [
        'level-green', // 1
        'level-yellow', // 2
        'level-orange', // 3
        'level-red', // 4
      ][level - 1] || 'level-gray'
    );
  }

  getAlertLevelText(level: number): string {
    return (
      [
        'Baixo', // 1
        'Moderado', // 2
        'Alto', // 3
        'Crítico', // 4
      ][level - 1] || 'Desconhecido'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { DengueService } from 'src/app/services/dengue.service';
import { DengueAlert } from 'src/app/model/dengue-alert';
import { DateUtils } from 'src/app/utils/date-util';
import { take } from 'rxjs';

@Component({
  selector: 'app-dengue',
  templateUrl: './dengue.component.html',
  styleUrls: ['./dengue.component.css'],
})
export class DengueComponent implements OnInit {
  [x: string]: any;
  allAlerts: DengueAlert[] = [];
  lastThreeWeeksAlerts: DengueAlert[] = [];
  loading = true;
  error = false;

  constructor(private dengueService: DengueService) {}

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts(): void {
    this.dengueService
      .getAllAlerts()
      .pipe(take(1))
      .subscribe({
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
    console.log('Semanas para filtrar:', lastThreeWeeks);

    this.lastThreeWeeksAlerts = this.allAlerts
      .filter(
        (alert, index, self) =>
          index === self.findIndex((a) => a.id === alert.id) &&
          lastThreeWeeks.includes(alert.epidemologicalWeek)
      )
      .sort((a, b) => b.epidemologicalWeek - a.epidemologicalWeek);

    console.log('Dados após filtro:', this.lastThreeWeeksAlerts);
  }

  trackById(index: number, item: DengueAlert): number {
    return item.id; 
  }

  formatForDisplay(alert: DengueAlert): any {
    const weekStr = alert.epidemologicalWeek.toString();
    return {
      ...alert,
      week: weekStr,
      weekNumber: weekStr.slice(4),
      reportedCases: alert.reporteCases, 
      alertLevelText: this.getAlertLevelText(alert.alertLevel),
      createdAt: new Date(alert.createdAt).toLocaleDateString('pt-BR')
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

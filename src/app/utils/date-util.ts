export class DateUtils {
    static getCurrentEpiWeek(): string {
      const date = new Date();
      return this.calculateEpiWeek(date);
    }
  
    static getLastThreeWeeks(): number[] { 
      const weeks: number[] = [];
      for (let i = 0; i < 4; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (i * 7));
        const weekStr = this.calculateEpiWeek(date);
        weeks.push(Number(weekStr)); // Converte para número
      }
      return weeks;
    }
  
    private static calculateEpiWeek(date: Date): string {
      const year = date.getFullYear();
      const oneJan = new Date(year, 0, 1);
      const dayIndex = (date.getDay() + 6) % 7;
      const days = Math.floor((date.getTime() - oneJan.getTime()) / 86400000);
      const week = Math.floor((days + oneJan.getDay() - dayIndex) / 7) + 1;
      
      return `${year}${week.toString().padStart(2, '0')}`;
    }
  }
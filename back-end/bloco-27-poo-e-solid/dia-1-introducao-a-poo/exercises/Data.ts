class Data {

  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {

    const formatData = `${year}-${month}-${day}`;

    if(new Date(formatData).getDate() !== day) {
      day = 1;
      month = 1;
      year = 1900;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  public setDay(day: number): void {
    this._day = day;
  }

  public getDay(): number {
    return this._day;
  }

  public setMonth(month: number): void {
    this._month = month;
  }

  public getMonth(): number {
    return this._month;
  }

  public getMonthName() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this._month - 1]; // pq o array começa com índice zero
  }

  public isLeapYear(year: number): boolean {
    return (year % 4 === 0);
  }

  public setYear(year: number): void {
    this._year = year;
  }

  public compare() {}

}

const newData = new Data(20, 5, 2022);
console.log(newData);
console.log(newData.getMonthName());
console.log(newData.isLeapYear(2024));
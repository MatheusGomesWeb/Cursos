export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDif() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDif / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDif / (60 * 60 * 1000));
  }
  get minuts() {
    return Math.floor(this._timeStampDif / (60 * 1000));
  }
  get secounds() {
    return Math.floor(this._timeStampDif / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minuts = this.minuts % 60;
    const secounds = this.secounds % 60;
    return {
      days,
      hours,
      minuts,
      secounds
    }
  }
}
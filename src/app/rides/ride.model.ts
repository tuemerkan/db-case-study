export class Ride {
  public from: string;
  public to: string;
  public starttime: Date;
  public endtime: Date;

  constructor(from: string, to: string, starttime: string, endtime: string) {
    this.from = from;
    this.to = to;
    this.starttime = new Date(starttime);
    this.endtime = new Date(endtime);
  }
}

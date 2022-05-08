export class Skill{
 public id: number = 0
  public get getid(): number {
    return this.id
  }
  public set setid(value: number) {
    this.id = value
  }
  public title: String = ""
  public get gettitle(): String {
    return this.title
  }
  public set settitle(value: String) {
    this.title = value
  }
  public subtitle: String = ""
  public get getsubtitle(): String {
    return this.subtitle
  }
  public set setsubtitle(value: String) {
    this.subtitle = value
  }
  public percent: number = 0
  public get getpercent(): number {
    return this.percent
  }
  public set setpercent(value: number) {
    this.percent = value
  }

constructor(){
this.id=0
this.percent=0
this.title=""
this.subtitle=""
}
}

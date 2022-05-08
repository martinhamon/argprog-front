export class Education{
  public id: number
  public get getid(): number {
    return this.id
  }
  public set setid(value: number) {
    this.id = value
  }
  public logo: String
  public get getlogo(): String {
    return this.logo
  }
  public set setlogo(value: String) {
    this.logo = value
  }
  public title: String
  public get gettitle(): String {
    return this.title
  }
  public set settitle(value: String) {
    this.title = value
  }
  public subTitle: String
  public get getsubTitle(): String {
    return this.subTitle
  }
  public set setsubTitle(value: String) {
    this.subTitle = value
  }
  public description: String
  public get getdescription(): String {
    return this.description
  }
  public set setdescription(value: String) {
    this.description = value
  }
  public start: String
  public get getstart(): String {
    return this.start
  }
  public set setstart(value: String) {
    this.start = value
  }
  public end: String
  public get getend(): String {
    return this.end
  }
  public set setend(value: String) {
    this.end = value
  }

  constructor  (){
    this.id=0
    this.logo=""
    this.title=""
    this.subTitle=""
    this.description=""
    this.start=""
    this.end=""
}

}

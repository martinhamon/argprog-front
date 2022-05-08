export class Project{
  public id: number
  public get getid(): number {
    return this.id
  }
  public set setid(value: number) {
    this.id = value
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
  public   description: String
  public get getdescription(): String {
    return this.description
  }
  public set setdescription(value: String) {
    this.description = value
  }
  public url: String
  public get geturl(): String {
    return this.url
  }
  public set seturl(value: String) {
    this.url = value
  }
  constructor  (){
    this.id=0

    this.title=""
    this.subTitle=""
    this.description=""
    this.url=""

}

}

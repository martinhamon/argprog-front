export class Job{
   public id: number
  public get getId(): number {
    return this.id
  }
  public set setId(value: number) {
    this.id = value
  }
  public logo: String
  public get getLogo(): String {
    return this.logo
  }
  public set setLogo(value: String) {
    this.logo = value
  }
  public title: String
  public get getTitle(): String {
    return this.title
  }
  public set setTtitle(value: String) {
    this.title = value
  }
  public subTitle: String
  public get getSubTitle(): String {
    return this.subTitle
  }
  public set setSubTitle(value: String) {
    this.subTitle = value
  }
  public tasks: String
  public get getTasks(): String {
    return this.tasks
  }
  public set setTasks(value: String) {
    this.tasks = value
  }
  public start: String
  public get getStart(): String {
    return this.start
  }
  public set setStart(value: String) {
    this.start = value
  }
  public end: String



  public get getEnd(): String {
    return this.end
  }
  public set setEnd(value: String) {
    this.end = value
  }




   constructor  (){
        this.id=0
        this.logo=""
        this.title=""
        this.subTitle=""
        this.tasks=""
        this.start=""
        this.end=""
   }


}



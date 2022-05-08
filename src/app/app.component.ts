import { Component, HostBinding } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  @HostBinding('class') compoentCssClass: any;
  

constructor( public overlayContainer : OverlayContainer){}


  onClickButtonNavBarLogOutLogIn(event : boolean){
  //  console.log(event);
  }
  onSetTheme(e:string){
    //Se carga eñ poverñay por si material tiene algun elemento flotante
    this.overlayContainer.getContainerElement().classList.add(e);

    this.compoentCssClass = e;
    

  }
}

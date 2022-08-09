import { Component, ViewChild } from '@angular/core';
import { ScriptService } from './script.service';
declare let pdfMake: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell-element';
  @ViewChild('facebookCardContainer', { static: true }) public titleContainer: any;
  public newTitleElem: any;

  constructor(private scriptService: ScriptService) {
    console.log('Loading External Scripts');
    this.scriptService.load(
      'pdfMake', 
      'vfsFonts', 
      //'cardElement',
      'heroLists'
      );
  }

  generatePdf() {
    //const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    //pdfMake.createPdf(documentDefinition).open(); 
  }

  loadFacebookCard() {
    //const newTitleElem = document.createElement('facebook-card');
    //this.titleContainer.nativeElement.appendChild(newTitleElem);
  }

  loadHeros() {
    const newTitleElem = document.createElement('custom-main-mfe');
    this.titleContainer.nativeElement.appendChild(newTitleElem);
  }

}

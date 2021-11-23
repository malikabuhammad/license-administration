import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  myScriptFile:HTMLScriptElement;

  seconScript:HTMLScriptElement;

  @Input() image1 :number|undefined ;

  constructor(public client:ClientService) {



    this.myScriptFile=document.createElement("script")

       this.myScriptFile.src="../../../assets/js/about.js"

       this.seconScript=document.createElement("script")

        document.body.appendChild(this.myScriptFile)

    }
    GetAllImageslider(){
      this.client.GetAllImageslider().subscribe((res:any)=>{
        this.client.GetImagesliderData=res;
      },
   
  
      );
    }
  ngOnInit(): void {
    this.GetAllImageslider();

  }

}

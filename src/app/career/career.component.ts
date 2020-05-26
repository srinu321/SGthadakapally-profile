import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  vanguard: boolean = true;
  nationwide: boolean = false;
  gordian: boolean = false;
  crsa: boolean = false;
  value:string

  constructor() { }

  ngOnInit(): void {
  }



  resume(resumeName: String) {

    switch (resumeName) {
     
      case "vanguard":
        this.vanguard = true;
        this.nationwide = false;
        this.gordian = false;
        this.crsa = false;
        console.log("Result: vanguard");
        break;
      
      case "nationwide":
        this.nationwide = true;
        this.vanguard = false;
        this.gordian = false;
        this.crsa = false;
        console.log("Result: nationwide");
        break;
     
      case "gordian":
        this.gordian = true;
        this.vanguard = false;
        this.nationwide = false;
        this.crsa = false;
        console.log("Result: gordian");
        break;

      case "crsa":
        this.crsa = true;
        this.vanguard = false;
        this.nationwide = false;
        this.gordian = false;
        console.log("Result: crsa");
        break;
     
    }

  }
}

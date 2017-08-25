import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uren-lijst',
  templateUrl: './uren-lijst.component.html',
  styleUrls: ['./uren-lijst.component.css']
})
export class UrenLijstComponent implements OnInit {
  uren: Number[];

  constructor() { }

  ngOnInit() {
  }

  setDateElements(event) {
    this.uren = new Array(event.target.value);
    console.log(this.uren);
  }

}

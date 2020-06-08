import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  @Input()
  categoryName: any;

  constructor() { }

  ngOnInit(): void {
  }

}

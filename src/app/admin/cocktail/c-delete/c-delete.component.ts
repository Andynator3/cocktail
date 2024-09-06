import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-c-delete',
  templateUrl: './c-delete.component.html',
  styleUrls: ['./c-delete.component.css']
})
export class CDeleteComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  workNumber:string;
  constructor(private router: Router,private location: Location) { }

  ngOnInit() {
    this.workNumber=window.localStorage.getItem("work_number");
  }

 logout()
 {  
    window.location.reload();
    this.router.navigate(['/login']);
 }
}

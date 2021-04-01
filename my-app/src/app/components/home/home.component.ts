import { Component, OnInit,  Injectable, Injector } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "home";

  public lista;



  constructor(public service: HttpService) {

    //this.service.getUsers();
   }

  ngOnInit(): void {

    this.service.getUsers().subscribe(data => {
      //console.log(data);
      /* istanbul ignore next */
      this.lista = data;
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Flights } from './../../../models/flights'
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-fligts-table',
  templateUrl: './fligts-table.component.html',
  styleUrls: ['./fligts-table.component.scss']
})
export class FligtsTableComponent  {
  flightRes :any;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        this.flightRes = data;
    });
}

public getJSON(): Observable<any> {
    return this.http.get("/assets/flights.json");
}
}
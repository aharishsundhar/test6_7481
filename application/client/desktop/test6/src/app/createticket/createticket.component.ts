import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    public users = {
        firstname: '',
        lastname: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createticketService.GpCreate(this.users).subscribe(data => {
            this.users.firstname = ''
 	 	this.users.lastname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}
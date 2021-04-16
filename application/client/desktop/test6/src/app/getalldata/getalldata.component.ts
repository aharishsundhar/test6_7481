import { Component, OnInit } from '@angular/core';
import { GetalldataService } from './getalldata.service';

@Component({
  selector: 'app-getalldata',
  templateUrl: './getalldata.component.html',
  styleUrls: ['./getalldata.component.scss'],
})

export class GetalldataComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Address', field: 'address'  },{ headerName: 'Phone', field: 'phone'  },];
    public Datas = {
        address: '',
        phone: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getalldataService: GetalldataService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.getalldataService.GpCreate(this.Datas).subscribe(data => {
            this.Datas.address = ''
 	 	this.Datas.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.getalldataService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}
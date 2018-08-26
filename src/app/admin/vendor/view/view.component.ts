

import { Component, OnInit,ViewChild  } from '@angular/core';
import { data } from '../add/datasource'
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-ng-grids';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewVendorComponent implements OnInit {

    public data: Object[];
    public initialPage: Object;
    public scrollSettings;
    

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.scrollSettings = { width: 400, height: 300 };
        this.data = data;

        this.initialPage = { pageSizes: true, pageCount: 4 };
    }

    rowSelected(args: RowSelectEventArgs) {
        
        let selectedrecords: Object[] = this.grid.getSelectedRecords();  // Get the selected records.
   
        console.log(selectedrecords);
    }
    
}
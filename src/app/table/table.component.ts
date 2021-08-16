import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table-service.service'

interface CustomObject {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  page = 1;
  pageSize = 6;
  collectionSize = 0;
  objects: CustomObject[] = [];

  constructor(private service: TableService) {
    this.service.getData().subscribe(data => {
      this.objects = data as Array<CustomObject>
      this.collectionSize = this.objects.length
      this.refreshCountries();
    })
  }


  ngOnInit(): void {
  }

  refreshCountries() {
    this.objects = this.objects.map((obj: CustomObject, i: number) => ({ id: i + 1, ...obj }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}


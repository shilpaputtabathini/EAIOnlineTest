import { Component, OnInit } from '@angular/core';
import { PostDataServices } from '../service/post-data-services';
import { interval } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  detailsIS = [];
  selectedData = {};

  constructor(private postDataServices: PostDataServices) { }

  ngOnInit() {
    this.getData();
    this.fetchDataForFewSeconds();
  }

  //get List of data from given URL
  getData() {
    this.postDataServices.getPostData().subscribe(list => {
      this.detailsIS = list['hits'];
    })
  }

  //Fetch the data for every few seconds
  fetchDataForFewSeconds() {
    interval(10000).subscribe(timerIs => {
      this.getData();
    })
  }

  //get selected row details
  getRowData(rowData) {
    this.selectedData = rowData;
    $("#showSelectedData").modal("show");
  }
}

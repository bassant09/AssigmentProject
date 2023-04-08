import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  piplineValues: any[] = [
    { Name: 'Potential Value', data: [] },
    { Name: 'Focus', data: [] },
    { Name: 'Contact Made', data: [] },
    { Name: 'Offer Sent', data: [] },
    { Name: 'Getting Ready', data: [] },
  ];
  contactData: any[] = [];
  localData!: any[];
  selectedData: any;
  filterSearch: any;
  searchedData: any;
  dataLength:any[]=[];
  piplineLength={
    PotentialValue:"",
    Focus:"",
    ContactMade:"",
    OfferSent:"",
    GettingReady:""
  }
  constructor(private services: ContactService) {}

  ngOnInit(): void {
    this.getContact();
    this.updataPipeline();
  }
  getContact() {
    if (localStorage.getItem('clientData') == null) {
      this.services.getContact().subscribe((res: any) => {
        this.piplineValues.forEach((element) => {
          element.data = res.deals.filter((e: any) => {
            return e.status == element.Name;
          });
        });

        localStorage.setItem('clientData', JSON.stringify(this.piplineValues));

        //this.contactData=res;
      });
    } else {
      this.piplineValues = JSON.parse(localStorage.getItem('clientData')!);
    }
    this.searchedData = [...this.piplineValues];
  }

  updateStatus(dragData: any) {
    let pipData = this.piplineValues.filter((e: any) => {
      return e.Name == dragData.status;
    });
    if (pipData.length > 0) {
      pipData[0].data = pipData[0].data.filter((e: any) => {
        return e.id != dragData.id;
      });
    }
    dragData.status = dragData.newStatus;
    let NewpipData = this.piplineValues.filter((e: any) => {
      return e.Name == dragData.newStatus;
    });
    NewpipData[0].data.push(dragData);
    localStorage.setItem('clientData', JSON.stringify(this.piplineValues));
    this.updataPipeline();
   
  }
  onChange() {
    this.searchedData=[];
    this.piplineValues.forEach((e:any)=>{
      this.searchedData.push(Object.assign({},e))
    })
    console.log(this.piplineValues);
    if (this.filterSearch=='') return;
    this.filterSearch = this.filterSearch.toLowerCase();
    this.searchedData.forEach((elemnt: any) => {
      elemnt.data = elemnt.data.filter((e: any) => {
        //console.log(e.first_name)
        let lowerFirst_name = e.first_name.toLowerCase();
        let lowerLast_name = e.last_name.toLowerCase();
        let lowerEmail = e.email.toLowerCase();
        return (
          lowerFirst_name.includes(this.filterSearch) ||
          lowerLast_name.includes(this.filterSearch) ||
          lowerEmail.includes(this.filterSearch)
        );
      });
    });
  }
  updataPipeline(){
    this.dataLength=[];
    this.piplineValues.forEach((element:any) => {
      this.dataLength.push(element.data.length);
      });
     // console.log(this.dataLength)
     this.piplineLength.PotentialValue=this.dataLength[0];
     this.piplineLength.Focus=this.dataLength[1];
     this.piplineLength.ContactMade=this.dataLength[2];
     this.piplineLength.OfferSent=this.dataLength[3];
     this.piplineLength.GettingReady=this.dataLength[4];
     console.log(this.piplineLength)
  }
}

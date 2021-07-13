import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerServiceData:any[] = [
    {
      "Name": "Radha Krishna",
      "Picture": "../../../../assets/images/Radha Krishna oil paint.jpg",
      "Format": ".jpg",
      "Cost": 599,
      "Size": "18MB"
    },
    {
      "Name": "K L Rahul",
      "Picture": "../../../../assets/images/K L Rahul.jpg",
      "Format": ".jpg",
      "Cost": 459,
      "Size": "20MB"
    },
    {
      "Name": "IRONAMN",
      "Picture": "../../../../assets/images/IRONAMN.jpg",
      "Format": ".jpg",
      "Cost": 999,
      "Size": "15MB"
    },
    {
      "Name": "DHONI",
      "Picture": "../../../../assets/images/DHONI.jpg",
      "Format": ".jpg",
      "Cost": 899,
      "Size": "28MB"
    },
    {
      "Name": "House Design",
      "Picture": "../../../../assets/images/House Design.jpg",
      "Format": ".jpg",
      "Cost": 659,
      "Size": "30MB"
    }
  ];
  public getDataFromService(){
    return this.customerServiceData;
  }
  constructor() { }
}

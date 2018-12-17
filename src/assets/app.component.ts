import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];
  arrBirdsRegion: string [];
  
arrSort: string [];
  ngOnInit () {
 var regionSorted
 var stateSorted; 
 var countySorted;
 var parent;
 var sid;
    this.httpService.get('https://api.myjson.com/bins/dbg52').subscribe(
      data => {
        // console.log(data);
        this.arrBirds = data as string [];	 
// Fetch Regions
      this.arrBirds.forEach(function(label){
     
        if(label.parent === null)
        {
         
          regionSorted = label;
            console.log(regionSorted);
        }   
      
      });   
      this.regionSorted = regionSorted as string[];
      //Fetch States
      this.arrBirds.forEach(function(label2){

        if(regionSorted.id === label2.parent)
{
  stateSorted = label2;
  console.log('states ',label2.name)
}
});


this.arrBirds.forEach(function(label3){
  if(stateSorted.id ===label3.parent)
  {
    countySorted = label3;
    console.log("Counties", countySorted);
  }

  });
      
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    }
    );
  //jquery
//   $("#arrBirds").html($("#arrBirds option").sort(function (a, b) {
//     return a[parent] === b[id] ? 1 : a[id] < b[county] ? -1 : 1;
// }))
  }

}




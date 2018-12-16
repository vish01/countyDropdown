import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
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
 var regionSorted;
    this.httpService.get('https://api.myjson.com/bins/dbg52').subscribe(
      data => {
        // console.log(data);
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     for(let i = 0; i< this.arrBirds.length; i++) {
    //       //the property after data[i]. needs to match the exact name that is on your JSON file... So, name is a different property than Name
    //       this.arrBirds.push({label: data[i].name, value: data[i].level});
    //  }
      //  for(let i=0; i<= this.arrBirds.length; i++)
      //  {
      //    if(this.arrBirds[i] =="New York")
      //    {
      //      console.log("FOUND");
      //    }
      //    else{
      //      console.log("Not Found");
      //    }
      //  }

      this.arrBirds.forEach(function(label){
      
        if(label.parent === null)
        {
         
          regionSorted = label;
            console.log(regionSorted);
        }   
      });   

      this.arrBirds.forEach(function(label2){

        if(regionSorted.id=== label2.parent)
{
  console.log('tatudu ',label2.parent)
}
  });




        // this.arrBirdsRegion = this.arrBirds;
        // console.log(this.arrBirdsRegion);
        // console.log(this.arrBirdsRegion);
        // this.arrBirds.sort((name,level) => (name.level - level.id));
        // //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
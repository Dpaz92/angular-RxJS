import { Component, OnInit, VERSION } from '@angular/core';
import {of, from} from 'rxjs'
import {map, take, tap} from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of (2, 4, 6, 8).subscribe(console.log);
    from([10,26,4,8]).pipe(
      tap(item => console.log(`Original item is ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if (item < 0) {
          throw new Error ('Value is less than 0');
        }
        return item;
      }),
      take(2)
    ).subscribe(
      item => console.log(`Resulting item ... ${item}`),
      err => console.error(`Resulting error .. ${err}`),
      () => console.log(`Complete`)
    )

   of ("Diego", "Caro", "Martin", "Dani").subscribe(
     item => console.log(`Este miembro de la familia se llama ${item}`),
     err => console.error(`Resulting error .. ${err}`),
     () => console.log(`Completed!`)
   )

  }

}

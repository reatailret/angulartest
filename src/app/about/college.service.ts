import { AboutInterface } from './about.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

constructor() { }

public getCollege():Observable<AboutInterface>{
  let college = {} as AboutInterface;
  college.id=1;
  college.about='coll description';
  college.name='CoolColl';
  college.photo = 'https://via.placeholder.com/150';
  return of(college);
}

}

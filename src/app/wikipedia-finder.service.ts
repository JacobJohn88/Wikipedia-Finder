import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WikipediaFinderService {

  constructor(private http:HttpClient) { }

  search(term:string){
    return this.http.get(
      'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=' +
      term
      );
  }
}

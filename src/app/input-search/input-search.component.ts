import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import{WikipediaFinderService} from '../wikipedia-finder.service'
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  searchvalue:string='';
  Users:any=[];

  @Output() searchevent=new EventEmitter<string>();
  constructor(private WikipediaFinderService:WikipediaFinderService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.WikipediaFinderService.search(this.searchvalue)
    .subscribe(res =>{
      this.Users=res;
      this.Users=this.Users.query.search;
      console.log(this.Users);
      this.searchevent.emit(this.Users);
    });
  }

}

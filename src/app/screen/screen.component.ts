import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  
  lang = this.route.snapshot.params['lang'];
  loading: boolean = false;
  results;
  repos;
  searchField: FormControl
  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.service.getData(this.lang).subscribe((data) => {
      this.loading = false
      this.results = data.items
    });

    this.searchField = new FormControl('', Validators.required);
    this.searchField.valueChanges
        .distinctUntilChanged()
        .filter(data => this.searchField.valid)
        .switchMap( term => this.service.repo(term))
        .subscribe( value => this.repos= value.items);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  loading: boolean = false;
  results;
  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.service.repo(this.route.snapshot.params['name']).subscribe((data) => {
      this.loading = false
      this.results = data.items
    });
  }

}

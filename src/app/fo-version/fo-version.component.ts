import { Component, OnInit } from '@angular/core';
import { FoService } from '../services/fo.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-fo-version',
  templateUrl: './fo-version.component.html',
  styleUrls: ['./fo-version.component.css']
})
export class FoVersionComponent implements OnInit {

  title = 'Fo Version';


  constructor(private foService: FoService) { }

  ngOnInit() {
    let version;
    this.version = this.foService.getVersion().subscribe(version => this.version = version);
  }

}

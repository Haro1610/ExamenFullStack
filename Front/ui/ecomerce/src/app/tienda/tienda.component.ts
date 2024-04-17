import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
  products: any[] = [];
  cols: number = 4; // Valor inicial
  //isHandset$: Observable<boolean>;
  isHandset$: Observable<boolean> | undefined;

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/Ropa_Hombre').subscribe(data => {
      this.products = data;
    });

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.cols = 2; // En modo móvil, usa 2 columnas
      } else {
        this.cols = 4; // En modo escritorio, usa 4 columnas
      }
    });
  }
}

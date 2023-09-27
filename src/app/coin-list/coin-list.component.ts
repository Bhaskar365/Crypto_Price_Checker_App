import { AfterViewInit, Component, ViewChild , OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit{

  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  bannerData:any = [];
  currency : string = "INR";

  constructor(private api:ApiService, private route:Router,private currencyServ:CurrencyService) {}

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyServ.getCurrency().subscribe(res=>{
        this.currency = res;
        this.getAllData();
        this.getBannerData();
    });
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency).subscribe(res=>{
      // console.log(res);
      this.bannerData = res;
    });
  }

  getAllData(){
    this.api.getCurrency(this.currency).subscribe(res=>{
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoDetails(row:any){
    this.route.navigate(['coin-detail',row.id]);
  }

}

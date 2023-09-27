import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailComponent } from './coin-detail.component';

describe('CoinDetailComponent', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinDetailComponent]
    });
    fixture = TestBed.createComponent(CoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

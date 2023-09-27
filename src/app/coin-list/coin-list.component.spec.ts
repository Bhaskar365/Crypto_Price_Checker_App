import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponent } from './coin-list.component';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinListComponent]
    });
    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDetailsComponent } from './stocks-details.component';

describe('StocksDetailsComponent', () => {
  let component: StocksDetailsComponent;
  let fixture: ComponentFixture<StocksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSharedComponent } from './erp-shared.component';

describe('ErpSharedComponent', () => {
  let component: ErpSharedComponent;
  let fixture: ComponentFixture<ErpSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

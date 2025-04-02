import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueComponent } from './dengue.component';

describe('DengueComponent', () => {
  let component: DengueComponent;
  let fixture: ComponentFixture<DengueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DengueComponent]
    });
    fixture = TestBed.createComponent(DengueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

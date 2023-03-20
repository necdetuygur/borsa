import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrbComponent } from './srb.component';

describe('SrbComponent', () => {
  let component: SrbComponent;
  let fixture: ComponentFixture<SrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

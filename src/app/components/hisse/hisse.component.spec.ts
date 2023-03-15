import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisseComponent } from './hisse.component';

describe('HisseComponent', () => {
  let component: HisseComponent;
  let fixture: ComponentFixture<HisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

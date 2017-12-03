import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoVersionComponent } from './fo-version.component';

describe('FoVersionComponent', () => {
  let component: FoVersionComponent;
  let fixture: ComponentFixture<FoVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

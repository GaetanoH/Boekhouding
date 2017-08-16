import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrenLijstComponent } from './uren-lijst.component';

describe('UrenLijstComponent', () => {
  let component: UrenLijstComponent;
  let fixture: ComponentFixture<UrenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

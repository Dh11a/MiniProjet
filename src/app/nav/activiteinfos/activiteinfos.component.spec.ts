import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteinfosComponent } from './activiteinfos.component';

describe('ActiviteinfosComponent', () => {
  let component: ActiviteinfosComponent;
  let fixture: ComponentFixture<ActiviteinfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteinfosComponent]
    });
    fixture = TestBed.createComponent(ActiviteinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

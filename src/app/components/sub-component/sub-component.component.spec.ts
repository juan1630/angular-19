import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentComponent } from './sub-component.component';

describe('SubComponentComponent', () => {
  let component: SubComponentComponent;
  let fixture: ComponentFixture<SubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

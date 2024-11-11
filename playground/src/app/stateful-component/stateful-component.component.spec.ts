import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulComponentComponent } from './stateful-component.component';

describe('StatefulComponentComponent', () => {
  let component: StatefulComponentComponent;
  let fixture: ComponentFixture<StatefulComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatefulComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatefulComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfexampleComponent } from './ifexample.component';

describe('IfexampleComponent', () => {
  let component: IfexampleComponent;
  let fixture: ComponentFixture<IfexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

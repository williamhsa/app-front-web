import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraReactiveFormsComponent } from './ordem-compra-reactive-forms.component';

describe('OrdemCompraReactiveFormsComponent', () => {
  let component: OrdemCompraReactiveFormsComponent;
  let fixture: ComponentFixture<OrdemCompraReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraDataBindingComponent } from './ordem-compra-data-binding.component';

describe('OrdemCompraDataBindingComponent', () => {
  let component: OrdemCompraDataBindingComponent;
  let fixture: ComponentFixture<OrdemCompraDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListarComponent } from './genero-listar.component';

describe('GeneroListarComponent', () => {
  let component: GeneroListarComponent;
  let fixture: ComponentFixture<GeneroListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryGroupComponent } from './add-category-group.component';

describe('AddCategoryGroupComponent', () => {
  let component: AddCategoryGroupComponent;
  let fixture: ComponentFixture<AddCategoryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

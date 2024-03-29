import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPageComponent } from './bookmark-page.component';

describe('SharedCompanyComponent', () => {
  let component: BookmarkPageComponent;
  let fixture: ComponentFixture<BookmarkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

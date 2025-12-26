import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponentListComponent } from './post-component-list.component';

describe('PostComponentListComponent', () => {
  let component: PostComponentListComponent;
  let fixture: ComponentFixture<PostComponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

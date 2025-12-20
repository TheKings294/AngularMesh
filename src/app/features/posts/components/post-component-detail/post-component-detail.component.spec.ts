import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponentDetailComponent } from './post-component-detail.component';

describe('PostComponentDetailComponent', () => {
  let component: PostComponentDetailComponent;
  let fixture: ComponentFixture<PostComponentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

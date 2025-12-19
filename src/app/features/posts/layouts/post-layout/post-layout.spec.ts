import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLayout } from './post-layout';

describe('PostLayout', () => {
  let component: PostLayout;
  let fixture: ComponentFixture<PostLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

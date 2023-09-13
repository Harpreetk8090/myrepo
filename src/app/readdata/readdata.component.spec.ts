import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddataComponent } from './readdata.component';

describe('ReaddataComponent', () => {
  let component: ReaddataComponent;
  let fixture: ComponentFixture<ReaddataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaddataComponent]
    });
    fixture = TestBed.createComponent(ReaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyWrapperComponent } from './spotify-wrapper.component';

describe('SpotifyWrapperComponent', () => {
  let component: SpotifyWrapperComponent;
  let fixture: ComponentFixture<SpotifyWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

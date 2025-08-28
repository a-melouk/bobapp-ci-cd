import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JokesService } from './services/jokes.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let jokesServiceSpy: jasmine.SpyObj<JokesService>;

  beforeEach(async () => {
    jokesServiceSpy = jasmine.createSpyObj('JokesService', [
      'joke$',
      'getRandomJoke',
    ]);
    jokesServiceSpy.joke$.and.returnValue(
      of({ id: 1, joke: 'Funny joke', response: 'ok' })
    );

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: JokesService, useValue: jokesServiceSpy }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a joke$ observable', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.joke$).toBeDefined();
  });

  it('should call getRandomJoke on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // 👈 déclenche ngOnInit()
    expect(jokesServiceSpy.getRandomJoke).toHaveBeenCalled();
  });
});

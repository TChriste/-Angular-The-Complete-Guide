import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DataService } from '../shared/data.service';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();

    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(compiled.querySelector('p')?.textContent).toContain(app.user.name);
  });

  it("shouldn't display the user name if user is not logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(
      app.user.name
    );
  });

  it("shouldn't fetch data successfully if not called asynchronously", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDestails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('shoul fetch data successfully if called asynchronously', waitForAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDestails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  it('shoul fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDestails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));
});
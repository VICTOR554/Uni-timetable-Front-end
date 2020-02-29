import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverduePage } from './overdue.page';

describe('OverduePage', () => {
  let component: OverduePage;
  let fixture: ComponentFixture<OverduePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverduePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

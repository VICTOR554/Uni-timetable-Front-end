import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaticmapComponent } from './staticmap.component';

describe('StaticmapComponent', () => {
  let component: StaticmapComponent;
  let fixture: ComponentFixture<StaticmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticmapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaticmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

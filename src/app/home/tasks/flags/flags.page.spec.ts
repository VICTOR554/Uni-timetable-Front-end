import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlagsPage } from './flags.page';

describe('FlagsPage', () => {
  let component: FlagsPage;
  let fixture: ComponentFixture<FlagsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

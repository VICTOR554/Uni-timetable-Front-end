import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllTasksPage } from './all-tasks.page';

describe('AllTasksPage', () => {
  let component: AllTasksPage;
  let fixture: ComponentFixture<AllTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

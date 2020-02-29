import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTasksPage } from './new-tasks.page';

describe('NewTasksPage', () => {
  let component: NewTasksPage;
  let fixture: ComponentFixture<NewTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

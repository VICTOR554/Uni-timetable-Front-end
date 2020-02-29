import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTasksPage } from './edit-tasks.page';

describe('EditTasksPage', () => {
  let component: EditTasksPage;
  let fixture: ComponentFixture<EditTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewNotesPage } from './new-notes.page';

describe('NewNotesPage', () => {
  let component: NewNotesPage;
  let fixture: ComponentFixture<NewNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

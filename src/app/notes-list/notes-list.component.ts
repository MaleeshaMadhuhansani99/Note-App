import { Component } from '@angular/core';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl:[ './notes-list.component.html'],
  styleUrls: ['./notes-list.component.css'],
  template: `
    <p>
      notes-list works!
    </p>
  `,
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

}

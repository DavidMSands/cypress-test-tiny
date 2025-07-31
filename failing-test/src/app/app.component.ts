import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 newOutput = output();
 @Output() oldOutput: EventEmitter<void> = new EventEmitter();

 onButtonClick() {
   this.newOutput.emit();
   this.oldOutput.emit();
 }
}

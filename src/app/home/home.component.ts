import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe'; // Ensure this path is correct

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightPipe]
})
export class HomeComponent {
  searchTerm: string = '';
  paragraph: string = 'This is a sample paragraph that includes some words to search for.';

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}

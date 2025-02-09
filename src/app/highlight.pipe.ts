import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true // Make it standalone
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    if (!searchText) {
      return value;
    }
    const regex = new RegExp(`(${searchText})`, 'gi');
    return value.replace(regex, '<span class="highlight">$1</span>');
  }
}

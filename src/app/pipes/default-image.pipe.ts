import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: false
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, defaultPath: string = 'assets/default.jpg'): string {
    // If value is empty, null, or contains only spaces, return the default image
    if (!value || value.trim().length === 0) {
      return defaultPath;
    }
    return value; // Otherwise, return the original path
  }

}

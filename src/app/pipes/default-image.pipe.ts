import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: false
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string | undefined | null, fallback: string): string {
    return value && value.trim() ? value : fallback;
  }
}

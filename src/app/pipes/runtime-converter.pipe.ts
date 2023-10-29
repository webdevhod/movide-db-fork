import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtimeConverter',
})
export class RuntimeConverterPipe implements PipeTransform {
  /**
   *
   * @param value Runtime value in minutes
   * @returns Runtime in the following format hh:mm
   */
  transform(value: number | undefined): string {
    if(value === undefined) {
      throw new Error("Undefined value")
    }
    return `${value/60 ^ 0}h ${value%60}m`
  }

}

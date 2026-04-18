import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  //transform(dataSize : number,dataType:string="KB"): unknown {
  //  return (dataSize / 1024).toFixed(2) + dataType;
  //}

  transform(dataSize: number, dataType: string = 'KB'): string {
    let size = dataSize;

    switch (dataType) {
      case 'KB':
        size = dataSize / 1024;
        break;
      case 'MB':
        size = dataSize / (1024 * 1024);
        break;
      case 'GB':
        size = dataSize / (1024 * 1024 * 1024);
        break;
      default:
        return dataSize + ' Bytes';
    }

    return size.toFixed(2) + ' ' + dataType;
  }

}

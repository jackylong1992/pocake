import {Pipe, PipeTransform} from '@angular/core';
import { DataService } from './data.service';
@Pipe({
    name: 'mappingBlockName'
})
export class MapBlockNamePipe implements PipeTransform {
  constructor(private dataService: DataService) {

  }
  transform(value: string): string {
    // let message = "Welcome to " + value;
    var blockList = this.dataService.getBlockListMap();
    var relatedBLockInfo = blockList.filter(obj => {
      return obj.blockId == value;
    })
    console.log("related block info =", relatedBLockInfo[0]);
    return relatedBLockInfo[0] ? relatedBLockInfo[0].blockName : "";
  }
} 

@Pipe({
  name: 'mappingBlockNameArray'
})
export class MapBlockNamePipeArray implements PipeTransform {
constructor(private dataService: DataService) {

}
transform(valueArr: string[]): string[] {
  // let message = "Welcome to " + value;
  let blockList = this.dataService.getBlockListMap();
   let ret = valueArr.map((value)=> {
    let relatedBLockInfo = blockList.filter(obj => {
      return obj.blockId == value;
    })
    return relatedBLockInfo[0] ? relatedBLockInfo[0].blockName : "";
  })
  return ret;
  
  // console.log("related block info =", relatedBLockInfo[0]);
  // return relatedBLockInfo[0] ? relatedBLockInfo[0].blockName : "";
}
} 
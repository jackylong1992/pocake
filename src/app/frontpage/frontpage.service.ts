import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  @Output() showConfigBlock: EventEmitter<any> = new EventEmitter();
  @Output() hideConfigBlock: EventEmitter<any> = new EventEmitter();

  _showConfigBlock(blockId) {
    this.showConfigBlock.emit(blockId);
  }
  _hideConfigBlock() {
    this.hideConfigBlock.emit();
  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LeftBarService {

  @Output() updateHighlighter: EventEmitter<any> = new EventEmitter();

  updateLeftMenu(menuName) {
    this.updateHighlighter.emit(menuName);
  }
  constructor() { }
}

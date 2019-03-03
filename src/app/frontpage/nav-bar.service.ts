import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  @Output() updateBotTitle: EventEmitter<any> = new EventEmitter();
  @Output() showingMode: EventEmitter<any> = new EventEmitter();
  @Output() displayProgressBar: EventEmitter<any> = new EventEmitter();
  @Output() hideProgressBar: EventEmitter<any> = new EventEmitter();
  @Output() changeSaveStatus: EventEmitter<any> = new EventEmitter();

  toggle(botTitle) {
    this.updateBotTitle.emit(botTitle);
  }
  changeMode(mode) {
    this.showingMode.emit(mode);
  }
  displayProgressbar () {
    this.displayProgressBar.emit("");
  }
  hideProgressbar() {
    this.hideProgressBar.emit("");
  }
  _changeSaveStatus(isSaved) {
    this.changeSaveStatus.emit(isSaved);
  }
  constructor() { }
}

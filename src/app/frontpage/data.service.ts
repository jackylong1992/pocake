import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

const httpOptionsOrigin = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNmQ5OGNjNDQwZGQ0MGJlOTI0YjVlMiIsInNpZCI6OTgzNCwiZXhwIjoxNTM5MTQ0NTA3LCJpYXQiOjE1MzM5NjA1MDd9.ehzOud1ECUfFY6RwSNa-UKOg5jcJ2vCHByiunuqtdo0'
  })
};

const loginHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private botListURL = 'http://api.smax.ai/api/bot';
  private loginURL = 'http://api.smax.ai/api/user/login';
  private botId = "";
  private blockId = "";
  private blockList = [];
  private httpOptions = {};
  private token = "";
  private currentFilterList: any;
  private currentFilterGroupList: any;
  private botInfo: any;
  private startBlockId: string;
  // INFO: REMOVE when intergrate token
  // private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNmQ5OGNjNDQwZGQ0MGJlOTI0YjVlMiIsInNpZCI6OTgzNCwiZXhwIjoxNTM5MTQ0NTA3LCJpYXQiOjE1MzM5NjA1MDd9.ehzOud1ECUfFY6RwSNa-UKOg5jcJ2vCHByiunuqtdo0";

  constructor(private http: HttpClient) {
    console.log("ok");
    // INFO: REMOVE when intergrate token
    // this.httpOptions = httpOptionsOrigin;
    this.token = this.getCookie("token");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
  }

  ngOnInit(): void {
    console.log("init data service");
    this.getBlockListMapAsync().then((blockList:any) => {
      this.blockList = blockList;
    })
  }
  setCookie(cname, cvalue, exmins) {
      var d = new Date();
      d.setTime(d.getTime() + (exmins * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
    }
  setToken (token) {
    // INFO: ENABLE when intergrate token
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    this.token = token;
    // INFO: save token to cookie
    console.log("--------------- set tooken");
    this.setCookie("token", this.token, 10000);

    // INFO: REMOVE when intergrate token
    // this.httpOptions = httpOptionsOrigin;
    // this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNmQ5OGNjNDQwZGQ0MGJlOTI0YjVlMiIsInNpZCI6OTgzNCwiZXhwIjoxNTM5MTQ0NTA3LCJpYXQiOjE1MzM5NjA1MDd9.ehzOud1ECUfFY6RwSNa-UKOg5jcJ2vCHByiunuqtdo0";
  }
  getToken () {
    var retValue = "";
    if (this.token.length) {
      retValue = this.token;
    } else {
      retValue = this.getCookie("token");
      console.log('get data from cookie = ', retValue);
    }

    return retValue;
  }
  login(params) {
    return this.http.post(this.loginURL, {
      "user": params
    }, loginHttpOptions)
  }
  getBotId() {
    if (!this.botId) {
      this.botId = localStorage.getItem("botId");
    }
    return this.botId;
  }
  getBotList() :any {
    return this.http.get(this.botListURL, this.httpOptions);
  }

  createNewBot(botName) {
    return this.http.post(this.botListURL, {
      "bot" : {
        "name": botName
      }
    }, this.httpOptions);
  }

  modifyBot(botName, botId) {
    return this.http.put(this.botListURL + "/" + botId, {
      "bot" : {
        "name": botName
      }
    }, this.httpOptions);
  }

  deleteBot(botId) {
    return this.http.delete(this.botListURL + "/" + botId, this.httpOptions);
  }

  

  

  getGroupList (botId):any {
    return this.http.get(this.botListURL + "/" + botId + "/group", this.httpOptions);
  }

  createNewGroup(params) {
    return this.http.post(this.botListURL + "/" + this.botId + "/group", params, this.httpOptions);
  }

  // FILTER AND FILTER GROUP

  getFilterGroup() {
    let botId = this.botId.length ? this.botId : localStorage.getItem("botId");
    return this.http.get(this.botListURL + "/" + botId + "/filtergroup", this.httpOptions);
  }

  createNewFilterGroup(params) {
    return this.http.post(this.botListURL + "/" + this.botId + "/filtergroup", params , this.httpOptions);
  }

  modifyFilterGroup(params, filterGroupId) {
    return this.http.put(this.botListURL + "/" + this.botId + "/filtergroup/" + filterGroupId,{
      filtergroup: params
    }, this.httpOptions);
  }
  
  removeFilterGroup(filterGroupId) {
    return this.http.delete(this.botListURL  + "/" + this.botId + "/filtergroup" + "/"  + filterGroupId, this.httpOptions);
  }

  getFilter () {
    let botId = this.botId.length ? this.botId : localStorage.getItem("botId");
    return this.http.get(this.botListURL + "/" + botId + "/filter", this.httpOptions);
  }

  saveCurrentFilterList (filterList: {name: string, _id: string}) {
    this.currentFilterList = _.cloneDeep(filterList);
  }

  getCurrentFilterList() {
    return _.cloneDeep(this.currentFilterList);
  }

  saveCurrentFilterGroupList (filterGroupList: {name: string, _id: string}) {
    this.currentFilterGroupList = _.cloneDeep(filterGroupList);
  }

  getCurrentFilterGroupList () {
    return _.cloneDeep(this.currentFilterGroupList);
  }

  createNewFilter (params) {
    return this.http.post(this.botListURL + "/" + this.botId + "/filter", params , this.httpOptions);
  }

  modifyFilter(params, filterId) {
    return this.http.put(this.botListURL + "/" + this.botId + "/filter/" + filterId, params , this.httpOptions);
  }

  removeFilter(filterId) {
    return this.http.delete(this.botListURL  + "/" + this.botId + "/filter" + "/"  + filterId, this.httpOptions);
  }

  // FILTER AND FILTER GROUP

  deleteGroup(groupId) {
    return this.http.delete(this.botListURL  + "/" + this.botId + "/group" + "/"  + groupId, this.httpOptions);
  }

  modifyGroup(groupName, groupId, groupType) {
    return this.http.put(this.botListURL + "/" + this.botId + "/group" + "/"  + groupId, {
      "group" : {
        "name": groupName,
        "type": groupType ? groupType : "text"
      }
    }, this.httpOptions);
  }

  getBotInfo (botId):any {
    // this.botId = botId;
    return this.http.get(this.botListURL + "/" + botId, this.httpOptions);
  }

  getBlockList (botId, groupId) {
    return this.http.get(this.botListURL + "/" + botId + "/group", this.httpOptions);
  }

  createNewBlock(name, groupId, botId) {
    return this.http.post(this.botListURL  + "/" + botId + "/block", {
      "block": {
        "name": name,
        "group": groupId
      }
    }, this.httpOptions);
  }

  modifyBlock(params) {
    return this.http.put(this.botListURL  + "/" + this.botId + "/block" + "/"  + this.blockId, {
      "block": params
    }, this.httpOptions);
  }

  getCardList (botId, groupId, blockId) {
    return this.http.get(this.botListURL + "/" + botId + "/group", this.httpOptions);
  }

  setLocalBotInfo(botInfo) {
    this.botInfo = botInfo;
    localStorage.setItem("botInfoId", this.botInfo._id);
    localStorage.setItem("botInfoTitle", this.botInfo.name);
  }

  getLocalBotInfo () {
    if (!this.botInfo) {
      this.botId = localStorage.getItem("botInfoId");
      return {_id: localStorage.getItem("botInfoId"), name: localStorage.getItem("botInfoTitle")};
    }
    return this.botInfo;
  }
  // createNewKeywordCard(params) {
  //   return this.http.post(this.botListURL  + "/" + this.botId + "/card", {
  //     "card": params
  //   }, this.httpOptions);
  // }

  createNewCard(params) {
    return this.http.post(this.botListURL  + "/" + this.botId + "/card", {
      "card": params
    }, this.httpOptions);
  }


  updateCard(params, cardId) {
    return this.http.put(this.botListURL  + "/" + this.botId + "/card" + "/"  + cardId, {
      "card": params
    }, this.httpOptions);
  }

  removeCard(cardId) {
    return this.http.delete(this.botListURL  + "/" + this.botId + "/card" + "/"  + cardId, this.httpOptions);
  }

  

  removeBlock(blockId) {
    return this.http.delete(this.botListURL  + "/" + this.botId + "/block" + "/"  + blockId, this.httpOptions);
  }

  updateBotAndBlockId (botId, blockId) {
    if (botId && botId.length) {
      this.botId = botId;
      localStorage.setItem("botId", this.botId);
    }
    if (blockId && blockId.length) {
      this.blockId = blockId;
    }
  }

  updateBlockList (data) {
    this.blockList = _.cloneDeep(data);
  }

  getBlockListMap () {
    return _.cloneDeep(this.blockList);
  }

  getBlockListMapAsync () {
    return new Promise((resolve, reject) => {
      if (this.blockList && this.blockList.length) {
        resolve(_.cloneDeep(this.blockList)); 
      } else {
        // async action, getting data from server here
        let blockList = [];
        this.botId = this.botId?this.botId:this.getBotId();
        this.getBotInfo(this.botId).subscribe(
          data => {
            console.log('receive bot data here', data.data)
            // INFO: in here we will map block name and block id
            for (var singleGroup of data.data.script_groups) {
              for (var singleBlock of singleGroup.blocks) {
                blockList.push({
                  "blockName": singleBlock.name,
                  "blockId": singleBlock._id
                });
              }
            }
            this.updateBlockList(blockList);
            resolve(blockList);
          },
          error => {
            // window.alert("API failed, redirect to main bot menu");
            // this.router.navigate(['/botlist']);
            reject("async api failed");
          } 
        );
      }
    })
    
    
  }
  setMainBlockId (id) {
    this.startBlockId = id;
  }
  getMainBlockId () {
    // console.log(this.blockList);
    return this.startBlockId ? this.startBlockId : this.blockList[0].blockId;
  }
  getBlockNameById (id) {
    // console.log("id = ", id);
    var name:any = this.blockList.filter(block => {
      // console.log(block);
      return block.blockId == id;
    });
    return name[0].blockName;
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

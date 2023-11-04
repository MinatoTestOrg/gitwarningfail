import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "infiniteScroll" : false,
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "27feb3ea-fc8d-454a-9f75-5fc871622903",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "data" : "homeTile1",
          "field" : "homeTile",
          "infiniteScroll" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "343c2b05-8a77-467d-8152-d314ba16801c",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "data" : "homeTile2",
          "field" : "homeTile",
          "infiniteScroll" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "a7de5b6f-f284-4dc7-b76a-3c3761338a55",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "data" : "homeTile3",
          "field" : "homeTile",
          "infiniteScroll" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}
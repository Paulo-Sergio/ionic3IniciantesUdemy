import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let config_KEY_name = "config"


@Injectable()
export class ConfigProvider {

  constructor(public http: Http) { }

  // recupera dados do localStorage
  public getConfigData(): any {
    return localStorage.getItem(config_KEY_name)
  }

  // grava dados do localStorage
  public setConfigData(showSlide?: boolean, name?: string, userName?: string): void {
    let config = {
      showSlide: true,
      name: '',
      userName: ''
    }

    if (showSlide) {
      config.showSlide = showSlide
    }
    if (name) {
      config.name = name
    }
    if (userName) {
      config.userName = userName
    }

    localStorage.setItem(config_KEY_name, JSON.stringify(config))
  }

}

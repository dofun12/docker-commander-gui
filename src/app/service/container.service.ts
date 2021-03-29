import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private httpClient: HttpClient) { }

  get_list_containers(){
    return this.httpClient.get(environment.apiUrl+"containers");
  }

  start(containerId){
    return this.httpClient.post(environment.apiUrl+"container/start",{'containerId':containerId});
  }

  stop(containerId){
    return this.httpClient.post(environment.apiUrl+"container/stop",{'containerId':containerId});
  }
}

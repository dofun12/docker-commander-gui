import { Component, OnInit } from '@angular/core';
import {ContainerService} from "../../service/container.service";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {
  containers = null;
  faCoffee  = faCoffee;
  faStop = faStop;
  faPlay = faPlay;
  filterValue = '';
  states = [];

  constructor(private containerService: ContainerService) { }

  stop( containerId ){
    this.containerService.stop(containerId).subscribe(response => {
      console.log(response);
      this.listContainers();
    });
  }

  getPorts(container){
    if(!container.Ports){
      return ""
    }
    let ports = "";
    for(let p of container.Ports){
      let puplicPort = p.PublicPort;
      if(!puplicPort){
        puplicPort = ":"
      }
      ports = ports + "," + puplicPort + ":"+ p.PrivatePort;
    }
    return ports.substring(1);

  }

  start( containerId ){
    this.containerService.start(containerId).subscribe(response => {
      console.log(response);
      this.listContainers();
    });
  }

  ngOnInit(): void {
    this.listContainers();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  listContainers(){
    this.containerService.get_list_containers().subscribe(response => {
      console.log(response);
      this.containers = response;
      let tempArray = [];
      for(let container of this.containers){
        tempArray.push(container.State);
      }
      this.states = tempArray.filter(this.onlyUnique);

    });
  }

}

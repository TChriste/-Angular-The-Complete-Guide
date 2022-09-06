import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {ServersService} from './servers.service';
import {Injectable} from '@angular/core';

interface ServerModel {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerModel> {

  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerModel> | Promise<ServerModel> | ServerModel {
    return this.serversService.getServer(+route.params['id']);
  }
}

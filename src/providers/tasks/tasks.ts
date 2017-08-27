import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environment/environment";

@Injectable()
export class TasksProvider {

    resourcePath;

    constructor(public http: Http) {
        this.resourcePath = environment.url + 'tasks';    
    }

    createTasks(task) {
        return this.http.post(this.resourcePath, task)
                .map(res => res.json())
    }
}
import {HttpClient} from "@angular/common/http";


export class PostService {


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}

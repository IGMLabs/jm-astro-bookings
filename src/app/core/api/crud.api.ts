import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


export abstract class CrudApi<T> {

  private url = environment.apiUrl + this.endPoint + "/";

  constructor(private http: HttpClient, private endPoint: string){  }

  public getAll$(): Observable<T[]>{
    return this.http.get<T[]>(this.url);
  }

  public getById$(id: string): Observable<T>{
    return this.http.get<T>(this.url + id);
  }

  public post$(payload: Partial<T>) {
    return this.http.post<T>(this.url, payload);
  }

  public put$(id: string, payload: Partial<T>){
    return this.http.put<T>(this.url + id, payload);
  }

  public delete(id:string){
    return this.http.delete<T>(this.url + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl = environment.apiUrl;
  formData: Waitlist;

  constructor(private http: HttpClient) { }

  Form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    pn: new FormControl(''),
    partDescription: new FormControl(''),
    qoh: new FormControl(''),
    location: new FormControl(''),
    notes: new FormControl('')
  });

  getWaitlists() {
    return this.http.get(this.baseUrl + 'waitlists/getWaitlists');
  }

  updateWaitlist(id: number, waitlist: Waitlist) {
    return this.http.put(this.baseUrl + 'waitlists/' + id, waitlist);
  }

  createWaitlist(waitlist: Waitlist) {
    return this.http.post(this.baseUrl + 'waitlists/createWaitlist', waitlist);
  }

  getWaitlist(id): Observable<Waitlist> {
    return this.http.get<Waitlist>(this.baseUrl + 'waitlists/' + id);
  }

  deleteWaitlist(id: number, waitlist: Waitlist) {
    return this.http.post(this.baseUrl + 'waitlists/' + id, waitlist);
  }

}
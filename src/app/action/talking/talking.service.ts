import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, mapTo, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TalkingService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  sendMessage(form) {
    const data= { 
                    'name': form.name,
                    'email': form.email,
                    'message': form.message
                }    

    return this.firestore.collection('talking').add(data);                                
  }

}
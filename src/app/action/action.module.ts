import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TalkingComponent } from './talking/talking.component';
import { ProfileComponent } from './profile/profile.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment.prod';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(
            {
                positionClass :'toast-bottom-right'
            }
        ),
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
        
    ],
    declarations: [
        TalkingComponent,
        ProfileComponent
    ]
})
export class ActionModule { }

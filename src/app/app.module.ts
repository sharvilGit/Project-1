import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule, MatInputModule, MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MaterialFileInputModule } from 'ngx-material-file-input';

import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';

// import { AngularFireModule } from '@angular/fire';
// import { environment } from 'src/environments/environment';
// import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateAccountComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // MaterialFileInputModule
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; // atraves desse alias, temos acesso a todos os recursos do firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app3';

  constructor() {}


  ngOnInit(): void {
    /*
      aqui estamos recuperando o sdk do firebase e configurando a comunicação do sdk
      para com o backend
    */
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyDuFS3u4POohQ9zqwclP9OlECho14u-9pE',
      authDomain: 'jta-instagram-clone-da597.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-da597.firebaseio.com',
      projectId: 'jta-instagram-clone-da597',
      storageBucket: 'jta-instagram-clone-da597.appspot.com',
      messagingSenderId: '468135957999',
      appId: '1:468135957999:web:5274024369be59352dd21a',
      measurementId: 'G-J0X7RZBZBQ'
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}

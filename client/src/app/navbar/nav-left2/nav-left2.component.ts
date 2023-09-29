import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-left2',
  templateUrl: './nav-left2.component.html',
  styleUrls: ['./nav-left2.component.scss']
})
export class NavLeft2Component {

  onClickCerrar() {
    localStorage.removeItem('token');
  }

}

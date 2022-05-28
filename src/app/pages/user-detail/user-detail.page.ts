import { offMenu } from './../../store/clickMenu/clickMenu.actions';
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { GitUser } from './../../interfaces/git-user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GituserService } from 'src/app/service/git/gituser.service';
import { Store } from '@ngrx/store';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  User: GitUser;
  public clickMenu$: Observable<boolean>;
  searchUser: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _gitUserService: GituserService,
    private iab: InAppBrowser,
    private store: Store<{ clickMenu: boolean }>
  ) {
    // ? Get param send to de page
    activatedRoute.params.subscribe(async (params) => {
      const user = params.idUser;
      if (user !== 'search') {
        // ? Requesting data of the user
        this.User = await this._gitUserService.getGitUser(user);
        this.searchUser = this.User.login;
      }
    });
  }

  openBlog(Url: string) {
    //? Lauch InAppBrowser
    const browser = this.iab.create(Url, '_system');
  }

  ngOnInit() {
    //? Get any change of state if user click on menu or not
    this.clickMenu$ = this.store.select('clickMenu');
    this.clickMenu$.subscribe((res) => {
      if (res) {
        this.searchUser = '';
      }
    });
  }

  //?Search the user
  async searchUserButoon() {
    this.User = await this._gitUserService.getGitUser(this.searchUser);
    this.store.dispatch(offMenu());
  }
}

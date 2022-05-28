import { offMenu } from './../../store/clickMenu/clickMenu.actions';
import { Store } from '@ngrx/store';
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { GitUser } from './../../interfaces/git-user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GituserService } from 'src/app/service/git/gituser.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Users: GitUser[];
  pages = 1;

  constructor(private _gitUserService: GituserService, private store: Store) {}

  async ngOnInit() {
    this.Users = await this.loadUsers(this.pages);
  }
  // !Load fist data
  async loadUsers(page): Promise<GitUser[]> {
    // eslint-disable-next-line no-underscore-dangle
    return await this._gitUserService.getGitUsers(page);
  }

  // !Load data for the infinity scroll
  async loadData(event) {
    //? If pages are more than 5 stop requesting data
    if (this.pages >= 5) {
      event.target.disabled = true;
      return;
    }
    // ? Request new data
    const Users = await this._gitUserService.getGitUsers(this.pages++);
    this.Users.push(...Users);
    event.target.complete();
  }

  // ? Its set value to false
  offMenu() {
    this.store.dispatch(offMenu());
  }
}

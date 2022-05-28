import { GitUser } from './../../interfaces/git-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GituserService {
  url = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // ? Gets all user by pages
  async getGitUsers(page: number): Promise<GitUser[]> {
    const url = this.url + '/users?page=' + page;
    return await this.http.get<GitUser[]>(url).toPromise();
  }

  // ? Get user by login name
  async getGitUser(user: string): Promise<GitUser> {
    const url = this.url + `/users/${user}`;
    return await this.http.get<GitUser>(url).toPromise();
  }
}

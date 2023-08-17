import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessToken: string = 'access_token';
  private refreshToken: string = 'refresh_token';

  constructor() { }

  getAccessToken(): string | null{
    return localStorage.getItem(this.accessToken);
  }

  getRefreshToken(): string | null{
    return localStorage.getItem(this.refreshToken);
  }

  setAccessToken(access_token: string): void{
    localStorage.setItem(this.accessToken, access_token);
  }

  setRefreshToken(refresh_token: string): void{
    localStorage.setItem(this.refreshToken, refresh_token);
  }

  clearTokens(): void{
    localStorage.clear();
  }
}

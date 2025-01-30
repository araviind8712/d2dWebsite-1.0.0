import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Set item in localStorage
  setLocalStorage(key: string, value: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Get item from localStorage
  getLocalStorage(key: string): any {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  // Remove item from localStorage
  removeLocalStorage(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  // Set item in sessionStorage
  setSessionStorage(key: string, value: any): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Get item from sessionStorage
  getSessionStorage(key: string): any {
    if (typeof window !== 'undefined') {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  // Remove item from sessionStorage
  removeSessionStorage(key: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(key);
    }
  }
}

import { HashLocationStrategy, PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class MicroFrontendLocationStrategy extends HashLocationStrategy {
  constructor(public platformLocation: PlatformLocation) {
    super(platformLocation);
  }

  override pushState(state: any, title: string, path: string, queryParams: string): void {
    super.pushState(state, title, path, queryParams);
    const urlEvent = new CustomEvent('MICRO_FRONTEND_URL_EVENT');

    globalThis.dispatchEvent(urlEvent);
  }

  override replaceState(state: any, title: string, path: string, queryParams: string): void {
    super.replaceState(state, title, path, queryParams);
    const urlEvent = new CustomEvent('MICRO_FRONTEND_URL_EVENT');

    globalThis.dispatchEvent(urlEvent);
  }
}
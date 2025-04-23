import { loadRemoteModule } from "@angular-architects/native-federation";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, Input, OnInit } from "@angular/core";

export interface WrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
}

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class LoaderMicroFrontendComponent implements OnInit {
  elm = inject(ElementRef);
  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }
}
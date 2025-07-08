import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) {}
  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    this.toastr[toastrOptions.messageType](message,title, {
      positionClass: toastrOptions.position
    });
  }  
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition;
}

export enum ToastrMessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export enum ToastrPosition {
  TopLeft = 'toast-top-left',
  TopRight = 'toast-top-right',
  BottomLeft = 'toast-bottom-left',
  BottomRight = 'toast-bottom-right',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
  BottomFullWidth = 'toast-bottom-full-width',
  TopFullWidth = 'toast-top-full-width'
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _locationStack: Array<string> = [];
  private _location = new BehaviorSubject<string>('');

  location$ = this._location.asObservable()

  constructor() { }

  private joinStackAndSend(stack) {
    const location = stack.join(' > ');
    this._location.next(location);
  }

  addItemToStack(item) {
    this._locationStack.push(item);
    this.joinStackAndSend(this._locationStack);
  }

  removeItemFromStack() {
    this._locationStack.pop();
    this.joinStackAndSend(this._locationStack);
  }

  changeStackRoot(item: string) {
    this._locationStack = [item];
    this.joinStackAndSend(this._locationStack);
  }

  changeItemAtIndex(item: string, i: number) {
    this._locationStack = this._locationStack.slice(0, i).concat(item);
    this.joinStackAndSend(this._locationStack);
  }

  changeItemAtRoot(item: string, root: string) {
    const rootIndex = this._locationStack.indexOf(root);
    this.changeItemAtIndex(item, rootIndex+1);
  }

}

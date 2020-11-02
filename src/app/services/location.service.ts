import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _location = new Subject<string>();
  private _locationStack: Array<string> = [];

  location$ = this._location.asObservable()

  constructor() { }

  private joinStackAndSend(stack) {
    const location = stack.join(' > ');
    this._location.next(location);
  }

  finishComposition() {
    this.joinStackAndSend(this._locationStack);
  }

  addItemToStack(item) {
    this._locationStack.push(item);
  }

  removeItemFromStack() {
    this._locationStack.pop();
  }

  changeStackRoot(item: string) {
    this._locationStack = [item];
  }

  changeItemAtIndex(item: string, i: number) {
    this._locationStack = this._locationStack.slice(0, i).concat(item);
  }

  replaceItemsFromEnd(position, items) {
    this._locationStack = this._locationStack.slice(0, -position);
    this._locationStack = this._locationStack.concat(items);
  }

  changeItemAtRoot(item: string, root: string) {
    const rootIndex = this._locationStack.indexOf(root);
    this.changeItemAtIndex(item, rootIndex+1);
  }

  

}

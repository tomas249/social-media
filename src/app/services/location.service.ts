import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _states = [];

  private _location = new BehaviorSubject<string>('');
  private _locationStack: Array<string> = [];

  location$ = this._location.asObservable()

  constructor() { }

  private joinStackAndSend(stack) {
    const location = stack.join(' > ');
    this._location.next(location);
  }

  setStack(stack) {
    if (!stack) return;
    this._locationStack = stack;
    this.joinStackAndSend(this._locationStack);
  }

  addItemToStack(stack) {
    this._locationStack = this._locationStack.concat(stack);
    this.joinStackAndSend(this._locationStack);
  }

  changeStackByAction(action, stack?) {
    if (action === 'none') return;
    const actions = {
      set: (stack) => this.setStack(stack),
      add: (stack) => this.addItemToStack(stack)
    };
    actions[action](stack);
  }

  removeItemFromStack(count=1) {
    this._locationStack.splice(this._locationStack.length-count);
  }

  saveState() {
    this._states.push(this._locationStack);
  }

  restoreState() {
    this._locationStack = this._states[this._states.length-1];
    this.joinStackAndSend(this._locationStack);
    this._states.pop();
  }










  finishComposition(text?) {
    // this.joinStackAndSend(this._locationStack);
  }

  // addItemToStack(item) {
  //   if (Array.isArray(item)) {
  //     item.forEach(l => this._locationStack.push(l))
  //   }
  //   else {
  //     this._locationStack.push(item);
  //   }
  // }

  // removeItemFromStack() {
  //   this._locationStack.pop();
  // }

  changeStackRoot(item: string) {
    // this._locationStack = [item];
  }

  changeItemAtIndex(item: string, i: number) {
    // this._locationStack = this._locationStack.slice(0, i).concat(item);
  }

  replaceItemsFromEnd(position, items) {
    // this._locationStack = this._locationStack.slice(0, -position);
    // this._locationStack = this._locationStack.concat(items);
  }

  changeItemAtRoot(item: string, root: string) {
    // const rootIndex = this._locationStack.indexOf(root);
    // this.changeItemAtIndex(item, rootIndex+1);
  }

}

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

  changeStackByAction(config:{action:string, stack?:Array<string>, remove?:number}) {
    const {action, stack, remove} = config;

    if (action === 'none') return;

    // Remove stack if specified
    if (remove) {
      this.removeItemFromStack(remove);
    }

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
    // Must be a copy because otherwise methods like pop, slice...
    // will affect the saved state
    this._states.push([...this._locationStack]);
  }

  restoreState() {
    this._locationStack = this._states[this._states.length-1];
    this.joinStackAndSend(this._locationStack);
    this._states.pop();
  }

}

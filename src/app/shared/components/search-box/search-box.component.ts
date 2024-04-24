import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'search-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent {

  @Output() onValue = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';


  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}

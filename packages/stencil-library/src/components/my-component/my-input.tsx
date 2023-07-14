import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
// import '@nds/core'

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {
  @Prop() label: string;
  @Prop() value: string;
  @Event() valueChange: EventEmitter<string>;

  handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input  class="nds-primary-color nds-error-background" type="text" value={this.value} onInput={event => this.handleChange(event)} />
      </div>
    );
  }
}

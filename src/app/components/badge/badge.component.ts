import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { convertToClasses } from '../../shared/class-helper';

const SIZE_CLASSES = {
  base: ['rounded', 'px-2', 'py-0.5', 'text-xs'],
  lg: ['rounded-md', 'px-2.5', 'py-0.5', 'text-sm'],
};

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() size: 'base' | 'lg' = 'base';
  @Input() class: string = '';

  @Input({ transform: booleanAttribute })
  get checked(): boolean {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
  }
  private _checked: boolean = false;

  get badgeClasses(): string {
    return convertToClasses([
      this.class,
      SIZE_CLASSES[this.size],
      {
        'bg-white text-black': this.checked,
        'border-2 border-zinc-800': !this.checked,
      },
    ]);
  }
}

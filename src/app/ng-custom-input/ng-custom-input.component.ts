import { CommonModule } from '@angular/common';
import { Component, computed, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EyeComponent } from '../eye/eye.component';
import { EyeSlashComponent } from '../eye-slash/eye-slash.component';


export type InputType = 'text' | 'password' | 'number' | 'tel'
export type IconPosition = 'front' | 'back'

@Component({
  selector: 'app-ng-custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule, EyeComponent, EyeSlashComponent],
  templateUrl: './ng-custom-input.component.html',
  styleUrl: './ng-custom-input.component.css'
})
export class NgCustomInputComponent {

  type = input<InputType>('text')
  icon = input<string | undefined>(undefined)
  iconPosition = input<IconPosition>('front');
  placeholder = input<string>('')
  maxLength = input<number | undefined>(undefined)
  minLength = input<number | undefined>(undefined)
  disabled = input<boolean>(false)

  modelValue = model<string>('')

  private showPasswordSignal = signal(false)
  private errorMessageSignal = signal<string | undefined>(undefined)

  protected showPassword = computed(() => this.showPasswordSignal())
  protected errorMessage = computed(() => this.errorMessageSignal())
  protected error = computed(() => !!this.errorMessageSignal())



  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    if (this.type() === 'number') {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (this.maxLength()) {
        input.value = numericValue.slice(0, this.maxLength());
        this.modelValue.set(input.value);
      }
    } else {
      this.modelValue.set(value);
    }
  }


  togglePassword(): void {
    this.showPasswordSignal.update(value => !value);
  }
}

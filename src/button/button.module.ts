import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LibButtonComponent],
  exports: [LibButtonComponent]
})
export class LibButtonModule {}

import {NgModule} from '@angular/core';

import {LibButtonModule} from './button/button.module';
export {LibButtonModule} from './button/button.module';

const libModules = [LibButtonModule];

@NgModule({imports: libModules, exports: libModules})
export class NgbModule {}

// export * from './button/button.module';

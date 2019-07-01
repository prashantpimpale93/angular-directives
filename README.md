# DirectiveExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Simple Custom Directive Example:
To generate Directive :

```
ng g d my-awesome-directive
```

then in app.module.ts:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { My-Awesome-Directive } from './my-awesome-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    My-Awesome-Directive <-- Add in declarations array
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Then use it in HTML as:

```
<div My-Awesome-Directive>{{ name }}</div>
```

<h2>About Angular Directive:</h2>
<div>
  <ul>
    <li>The Angular pipe is used when you want to modify look and feel of the UI</li>
    <li>Need to import and has be to added in <b>declarations</b> array of module</li>
  </ul>
</div>


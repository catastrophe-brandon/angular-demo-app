import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// file extension of module source file is implied (no .ts)
// This is a named import, indicated by curly braces.
// The thing being imported requires the export in the module def.
// Makes the ColorToolModule available to this file, does not lexically import the source.
import { ColorToolModule } from './color-tool/color-tool.module';
import { AppComponent } from './app.component';


// @NgModule is a typescript thing
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

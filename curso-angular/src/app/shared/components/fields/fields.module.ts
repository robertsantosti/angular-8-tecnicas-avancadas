import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputDateComponent } from "./input-date/input-date.component";
import { SelectComponent } from "./select/select.component";
import { InputNumberComponent } from "./input-number/input-number.component";
import { TextAreaComponent } from "./text-area/text-area.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";

@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    SelectComponent,
    InputNumberComponent,
    TextAreaComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    InputTextComponent,
    InputDateComponent,
    SelectComponent,
    InputNumberComponent,
    TextAreaComponent
  ]
})
export class FieldsModule {}

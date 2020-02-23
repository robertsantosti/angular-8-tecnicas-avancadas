import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidateInputsService } from "../../campos/validate-inputs.service";

@Component({
  selector: "dio-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"]
})
export class TextAreaComponent {
  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validate: ValidateInputsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

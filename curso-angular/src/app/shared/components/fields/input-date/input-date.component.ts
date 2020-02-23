import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidateInputsService } from "../../campos/validate-inputs.service";

@Component({
  selector: "dio-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.scss"]
})
export class InputDateComponent {
  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validate: ValidateInputsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

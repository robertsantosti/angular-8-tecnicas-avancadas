import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidateInputsService } from "../../campos/validate-inputs.service";

@Component({
  selector: "dio-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.scss"]
})
export class InputNumberComponent implements OnInit {
  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() minimum = 0;
  @Input() maximum = 10;
  @Input() step = 1;

  constructor(public validate: ValidateInputsService) {}

  ngOnInit() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

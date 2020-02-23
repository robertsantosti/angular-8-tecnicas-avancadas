import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidateInputsService } from "../../campos/validate-inputs.service";

@Component({
  selector: "dio-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"]
})
export class InputTextComponent implements OnInit {
  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validate: ValidateInputsService) {}

  ngOnInit() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

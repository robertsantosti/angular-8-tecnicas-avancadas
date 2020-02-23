import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidateInputsService } from "../../campos/validate-inputs.service";

@Component({
  selector: "dio-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validate: ValidateInputsService) {}

  ngOnInit() {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

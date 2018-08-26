
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { addItem } from 'src/app/model/add.item';
import { NgForm } from "@angular/forms";
import { ItemService } from 'src/app/services/item.service';
declare var $: any;
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'AddItem',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddItemComponent implements OnInit {
  addnewItem: addItem = new addItem();
  formSubmitted: boolean = false;
  @ViewChild('closeItemModal') closeItemModal: ElementRef;

  form: FormGroup;
  loading: boolean = false;
  uploadedFileName: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private itemService: ItemService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
  }


  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {

    var _validFileExtensions = [".xls", ".xlsx"];

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      console.log(event.target.files.length);
      let file = event.target.files[0];

      var blnValid = false;
      for (var j = 0; j < _validFileExtensions.length; j++) {
        var sCurExtension = _validFileExtensions[j];
        if (file.name.substr(file.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
          blnValid = true;
          break;
        }
      }

      if (!blnValid) {
        alert("Sorry, " + file.name + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
        return false;
      }


      alert("file is valid");
      let formData = new FormData();

      formData.append('type', 'uploadProductImage');
      formData.append('document', file);

      this.itemService.uploadImage(formData).subscribe(res => {

        if (res["type"] === "success") {

          this.uploadedFileName = res["result"].name
        }
      })
        , err => {
          console.log("Error Occured " + err);
        }
    }
  }


  addItems(form: NgForm) {
    this.formSubmitted = true;
    this.addnewItem.type = "AddNewItem";
    this.addnewItem.unit_measureid = $('#selectedMeasurement').find(":selected").val();
    this.addnewItem.is_active = 1;
    this.addnewItem.item_image = this.uploadedFileName;

    if (form.valid) {


      this.itemService.saveItem(this.addnewItem).subscribe(res => {

        console.log(res);

        // this.closeItemModal.nativeElement.click();

      })
        , err => {
          console.log("Error Occured " + err);
        }
    }
    $('#selectedMeasurement').val(0);

    this.addnewItem = new addItem();
    form.reset();
    this.formSubmitted = false;
  }


}

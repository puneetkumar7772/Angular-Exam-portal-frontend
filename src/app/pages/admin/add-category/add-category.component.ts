import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"],
})
export class AddCategoryComponent {
  addCategoryForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryservice: CategoryService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.addCategoryForm = this.fb.group({
      category: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  submitForm() {
    const body = this.addCategoryForm.value;
    console.log("+++++++++++", body);

    this.categoryservice.addCategory(body).subscribe(
      (res) => {
        console.log("---------", res);
        this.snackBar.open("Category Added successfully", "Close", {
          duration: 2000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["/admin/viewcategory"]);

        this.addCategoryForm.reset();
      },
      (error) => {
        console.log(error);
        if (error.status === 409) {
          this.addCategoryForm
            .get("categoryName")
            .setErrors({ duplicateCategory: true });
        } else {
          this.snackBar.open("Duplicate category is not allowed", "Close", {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        }
      }
    );
  }
}

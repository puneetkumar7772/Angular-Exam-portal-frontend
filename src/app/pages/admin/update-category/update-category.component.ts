import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-update-category",
  templateUrl: "./update-category.component.html",
  styleUrls: ["./update-category.component.css"],
})
export class UpdateCategoryComponent {
  updateCategoryForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryservice: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.updateCategoryForm = this.fb.group({
      category: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }
  data: any;
  id: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.categoryservice.getCategoryById(this.id).subscribe((res) => {
        this.data = res;
        if (this.data?.data) {
          this.updateCategoryForm.patchValue({
            category: this.data.data.category,
            description: this.data.data.description,
          });
        }
      });
    });
  }

  submitUpdateCategoryData() {
    const body = this.updateCategoryForm.value;
    this.categoryservice
      .getCategoryByIdAndUpdate(this.id, body)
      .subscribe((res) => {
        this.snackBar.open("Category Updated successfully", "Close", {
          duration: 2000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(["/admin/viewcategory"]);
      });
  }
}

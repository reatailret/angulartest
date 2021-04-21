import { Component, Inject, OnInit } from "@angular/core";
import { COLLEGE_ABOUT$ } from "../about.providers";
import { Observable } from "rxjs";
import { AboutInterface } from "../about.interface";

@Component({
  selector: "app-college",
  templateUrl: "./college.component.html",
  styleUrls: ["./college.component.scss"],
})
export class CollegeComponent implements OnInit {
  college?: AboutInterface;
  isLoading = true;

  constructor(
    @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
  ) {}

  ngOnInit() {
    this.getCollege();
  }

  getCollege(): void {
    this.college$.subscribe((college) => {
      setTimeout(() => {
        this.college = college;
        this.isLoading = false;
      }, 1000);
    });
  }
}

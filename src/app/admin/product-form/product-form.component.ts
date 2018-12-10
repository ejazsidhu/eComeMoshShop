import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(private catService: CategoryService, private productService: ProductService, private router: Router) {
    this.categories$ = catService.getCategories();
  }

  ngOnInit() {
  }



  save(product) {
    // console.log(product.valid);
    // console.log(product.value)

    if (product.valid) {
      this.productService.create(product.value);
      this.router.navigate(['/admin/products'])
    }
  }

}

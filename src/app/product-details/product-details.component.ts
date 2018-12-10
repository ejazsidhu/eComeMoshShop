import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product$;
  categories$: any;
  product:any={}

  constructor(private router:Router,private catService:CategoryService,private productService: ProductService, private route: ActivatedRoute) {
    this.categories$ = this.catService.getCategories();

    var id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(p=>{
      this.product=p;
      console.log('selected product is: ', this.product);
    });

  }

  ngOnInit() {
  }

  save(product) {

    if (product.valid) {
      this.productService.update(this.product.$key,product.value);
       this.router.navigate(['/admin/products'])
    }
  }

}

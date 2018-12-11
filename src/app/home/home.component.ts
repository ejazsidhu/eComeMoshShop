import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: any = [];
  filterProducts: any[];
  categories$;
  loading = true;
  category: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private catService: CategoryService) {

    this.productService.getAllProducts().subscribe(p => {
      this.products$ = p;
      this.filterProducts = p;
    });
    this.route.queryParamMap.subscribe(params => {
      // console.log(params.get('category'));
      this.category = params.get('category');
      this.filterProducts = (this.categories$) ?
        this.products$.filter(c => c.category === this.category) : this.products$ = this.products$;
    });
    // this.products$ =


    this.categories$ = this.catService.getCategories();

    if (this.categories$.lenght > 0) {
      this.loading = false;
    }
  }

  ngOnInit() {
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(p => {
      this.products$ = p;
      this.filterProducts = p;
    });

  }

}

import { Product } from "./Product";

export class ProductsRow  {

	private products: Product[] = [];
	private ROW_LENGTH = 3;
	id: number
	constructor(id:number){
		this.id = id;
	}

	addProduct(product: Product): boolean {
		if(this.products.length === this.ROW_LENGTH){
			return false
		}
		this.products.push(product)
		return true
	}

	getProducts(): Product[] {
		return this.products
	}

	swapRow(): void {
		[this.products[0], this.products[1]] = [this.products[1], this.products[0]]
	}

}
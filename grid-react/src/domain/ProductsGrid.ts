import { Product } from "./Product";
import { ProductsRow } from "./ProductsRow";

export class ProductsGrid {

	rows: ProductsRow[]
	constructor(
			public products: Product[]
		) {
		this.rows = this.createRows()
	}


	private createRows(): ProductsRow[]{
		const { starred, normal } = this.getFilteredProducts()
		const rows : ProductsRow[] = []
		let normalIndex = 0, rowIndex = 0, starredIndex = 0
		while(normalIndex < normal.length){
			const row = new ProductsRow(rowIndex)
			if(starredIndex < starred.length){
				row.addProduct(starred[starredIndex])
				starredIndex++
			}
			while(row.addProduct(normal[normalIndex])){
				normalIndex++
			}
			if(starredIndex % 2 === 0) {
				row.swapRow()
			}
			rows.push(row)
			rowIndex++
		}
		return rows
	}

	getProducts(categoryId? :string): Product[] {
		const products: Product[] = []
		this.rows.forEach(row => products.push(...row.getProducts()))
		return categoryId ? products.filter(product => product?.categories.includes(categoryId)) : products

	}

	private getFilteredProducts(): { starred: Product[], normal: Product[] } {
		const starred: Product[] = [], normal: Product[] = []
		this.products.forEach(product =>{
			if(product.type === "star") {
				starred.push(product)
				return
			}
			normal.push(product)
		})
		return { starred , normal }
	}

}
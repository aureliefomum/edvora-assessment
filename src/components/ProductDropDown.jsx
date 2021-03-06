import React from "react";
import "./ProductDropDown.module.css";
export default function ProductDropDown({
	productsArr,
	setSelectedName,
	selectedName,
}) {
	return (
		<div className="product-dropdown-container">
			<label htmlFor="products"></label>
			<select
				defaultValue="Products"
				name="products"
				onChange={(e) => setSelectedName(e.target.value)}
				value={selectedName}
			>
				<option value="">Products</option>
				{productsArr.map((product, prodIdx) => {
					return (
						<option key={prodIdx} value={product}>
							{product}
						</option>
					);
				})}
			</select>
		</div>
	);
}

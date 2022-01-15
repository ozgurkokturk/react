import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>

      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        type="text"
        onChange={onChange}
        error="Hata"
      />

      <SelectInput
        name="categoryId"
        label="Category"
        onChange={onChange}
        defaultOption="Seçiniz"
        value={product.categoryId || ""}
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        error
      />

      <TextInput
        name="quantityPerUnit"
        label="quantity Per Unit"
        value={product.quantityPerUnit}
        type="text"
        onChange={onChange}
        error="Hata"
      />

      <TextInput
        name="unitPrice"
        label="unit Price"
        value={product.unitPrice}
        type="text"
        onChange={onChange}
        error="Hata"
      />

      <TextInput
        name="unitsInStock"
        label="units In Stock"
        value={product.unitsInStock}
        type="text"
        onChange={onChange}
        error="Hata"
      />
      

      <button type="submit" className="btn btn-success">
        {product.id ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
};

export default ProductDetail;

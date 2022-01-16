import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <div>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>

      <form onSubmit={onSave}>

        <TextInput
          name="productName"
          label="Product Name"
          value={product.productName}
          type="text"
          onChange={onChange}
          error={errors.productName}
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
          error={errors.categoryId}
        />

        <TextInput
          name="quantityPerUnit"
          label="quantity Per Unit"
          value={product.quantityPerUnit}
          type="text"
          onChange={onChange}
          error={errors.quantityPerUnit}
        />

        <TextInput
          name="unitPrice"
          label="unit Price"
          value={product.unitPrice}
          type="text"
          onChange={onChange}
          error={errors.unitPrice}
        />

        <TextInput
          name="unitsInStock"
          label="units In Stock"
          value={product.unitsInStock}
          type="text"
          onChange={onChange}
          error={errors.unitsInStock}
        />

        <button type="submit" className="btn btn-success">
          {product.id ? "Güncelle" : "Ekle"}
        </button>
      </form>
    </div>
  );
};

export default ProductDetail;

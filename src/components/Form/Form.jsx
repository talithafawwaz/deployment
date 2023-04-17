import React, { useState } from "react"
import Header from "../Header/header";
import uuid from 'react-uuid';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Products/productsSlice";

const Form = () => {

  const dispatch = useDispatch() 

  const [product, setProduct] = useState({
        productId: "",
        productName: "",
        productCategory: "",
        imageOfProduct: "",
        productFreshness: "",
        additionalDescription: "",
        productPrice: "",
    })

  const notEmptyRegex = /([^\s])/;
  const lessThan10Regex = /^.{11,}$/;

  const [errorProductName, seterrorProductName] = useState ('');
  const [errorProductCategory, seterrorProductCategory] = useState ('');
  const [errorImageOfProduct, seterrorImageOfProduct] = useState ('');
  const [errorProductFreshness, seterrorProductFreshness] = useState ('');
  const [errorAdditionalDescription, seterrorAdditionalDescription] = useState ('');
  const [errorProductPrice, seterrorProductPrice] = useState ('');

  const validate = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    console.log(value)
    console.log(product)

    if (!notEmptyRegex.test(product.productName)) {
      seterrorProductName("Product name field must be filled in")
    }
    else if (lessThan10Regex.test(product.productName)) {
      seterrorProductName("Product name cannot exceed 10 characters")
    }
    else {
      seterrorProductName("")
    }

    if (!notEmptyRegex.test(product.productCategory)) {
      seterrorProductCategory("Product category field must be filled in")
    }
    else {
      seterrorProductCategory("")
    }

    if (!notEmptyRegex.test(product.imageOfProduct)) {
      seterrorImageOfProduct("Image of product field must be filled in")
    }
    else {
      seterrorImageOfProduct("")
    }

    if (!notEmptyRegex.test(product.productFreshness)) {
      seterrorProductFreshness("Product freshness field must be filled in")
    }
    else {
      seterrorProductFreshness("")
    }

    if (!notEmptyRegex.test(product.additionalDescription)) {
      seterrorAdditionalDescription("Additional description field must be filled in")
    }
    else {
      seterrorAdditionalDescription("")
    }

    if (!notEmptyRegex.test(product.productPrice)) {
      seterrorProductPrice("Product price field must be filled in")
    }
    else {
      seterrorProductPrice("")
    }
  }

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    //read file image
    if(name === "imageOfProduct"){
      const files = e.target.files[0];
      const reader = new FileReader()
      reader.addEventListener("load", () => {

        setProduct((prev) => ({
          ...prev,
          [name] : reader.result
    
        }))
      });
      reader.readAsDataURL(files);
      console.log(reader.result)
    }

    setProduct((prev) => ({
      ...prev,
      [name] : value
    }))     
    validate(e);
  }

  const handleSubmit = e => {
    e.preventDefault();
    validate(e);
    if(notEmptyRegex.test(product.productName) && notEmptyRegex.test(product.productCategory)
    && notEmptyRegex.test(product.imageOfProduct) && notEmptyRegex.test(product.productFreshness)
    && notEmptyRegex.test(product.additionalDescription) && notEmptyRegex.test(product.productPrice)){
      const newData = {
        productId: uuid(),
        productName: product.productName,
        productCategory: product.productCategory,
        imageOfProduct: product.imageOfProduct,
        productFreshness: product.productFreshness,
        additionalDescription: product.additionalDescription,
        productPrice: product.productPrice,
      }
      dispatch(addProduct(newData))
    }
  }

  const validProductName = !errorProductName ? null : 'is-invalid';
  const validProductCategory = !errorProductCategory ? null : 'is-invalid';
  const validImageOfProduct = !errorImageOfProduct ? null : 'is-invalid';
  const validProductFreshness = !errorProductFreshness ? null : 'is-invalid';
  const validAdditionalDescription = !errorAdditionalDescription ? null : 'is-invalid';
  const validProductPrice = !errorProductPrice ? null : 'is-invalid';

    return(
      <>
        <div className="container text-center mt-5">
          <div className="container">
            <Header/>
          </div>
        </div>
        
        {/* form inputan */}
        <div className="container p-5" style={{ maxWidth: 600 }}>
          <h4 className="mb-3">Detail Product</h4>
          <form onSubmit={handleSubmit} name="data" id="form" action="#">
            <div className="mb-5">
              <label htmlFor=" productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className={`form-control ${validProductName}`}
                id="productName"
                value={product.productName}
                name="productName"
                onChange= {handleInput}
              />
              <small id="error-name" className="text-danger">
                {errorProductName}
              </small>
            </div>

            <div className="mb-5">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className={`form-control ${validProductCategory}`}
                id="productCategory"
                name="productCategory"
                value={product.productCategory}
                onChange={handleInput}
              >
                <option hidden="" />
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kids">Kids</option>
              </select>
              <small id="error-category" className="text-danger">{errorProductCategory}</small>
            </div>

            <div className="mb-5 custom-file-button">
              <label htmlFor="imageOfProduct" className="form-label">
                Image of Product
              </label>
              <input
                className={`form-control ${validImageOfProduct}`}
                type="file"
                id="imageOfProduct"
                name="imageOfProduct"
                onChange={handleInput}
              />
              <small id="error-image" className="text-danger">{errorImageOfProduct}</small>
            </div>

            <div className="mb-5">
              <label htmlFor="productFreshness">
                Product Freshness
              </label>
              <div className={`form-check ${validProductFreshness}`}>
                <input
                  type="radio"
                  name="productFreshness"
                  id="productFreshness1"
                  defaultValue="Brand New"
                  onChange={handleInput}
                />
                <label htmlFor="productFreshness1">
                  Brand New
                </label>
              </div>
              <div className={`form-check ${validProductFreshness}`}>
                <input
                  type="radio"
                  name="productFreshness"
                  id="productFreshness2"
                  defaultValue="Second Hand"
                  onChange={handleInput}
                />
                <label htmlFor="productFreshness2">
                  Second Hand
                </label>
              </div>
              <div className={`form-check ${validProductFreshness}`}>
                <input
                  type="radio"
                  name="productFreshness"
                  id="productFreshness3"
                  defaultValue="Refurbished"
                  onChange={handleInput}
                />
                <label htmlFor="productFreshness3">
                  Refurbished
                </label>
              </div>
              <small id="error-freshness" className="text-danger">{errorProductFreshness}</small>
            </div>

            <div className="mb-5">
              <label htmlFor="additionalDescription" className="form-label">
                Additional Description
              </label>
              <textarea
                className={`form-control ${validAdditionalDescription}`}
                id="additionalDescription"
                style={{ height: 100 }}
                name="additionalDescription"
                value={product.additionalDescription}
                onChange={handleInput}
              />
              <small id="error-description" className="text-danger">{errorAdditionalDescription}</small>
            </div>

            <div className="mb-5">
              <label htmlFor="productPrice">
                Product Price
              </label>
              <input
                type="number"
                placeholder="$ 1"
                className={`form-control ${validProductPrice}`}
                id="productPrice"
                name="productPrice"
                value={product.productPrice}
                onChange={handleInput}
              />
              <small id="error-price" className="text-danger">{errorProductPrice}</small>
            </div>

            <div className="d-grid mx-3" style={{ marginTop: 138 }}>
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
}

export default Form
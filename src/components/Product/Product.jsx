import {React, useState} from "react"
import Button from "../Button/Button"
import RandomButton from "../Button/RandomButton"
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/Products/productsSlice"

const Product = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [isUpdate, setUpdate] = useState(false)
    const [tempData, setTempData] = useState({})

    const updateHandler = (data) => {
        setUpdate(true)
        setTempData(data)
    }

    const saveHandler = () => {
        setUpdate(false)
        setTempData(tempData)
    }

    return(
        <div className="content-2">
            <h1>List Product</h1>
            <table className="table table-striped" id="output">
                <thead id="product">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Image of Product</th>
                        <th scope="col">Product Freshness</th>
                        <th scope="col">Additional Description</th>
                        <th scope="col">Product Price</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {products.listProduct.map((data) => {
                            return(
                                <tr className={isUpdate && "bg-dark"}>
                                    <td
                                        className={isUpdate && "text-white"} 
                                    >
                                        {data.productId}
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => setTempData(prev => ({...prev, productName: e.target.textContent}))}
                                        contentEditable={isUpdate}
                                    >
                                        {data.productName}
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productCategory: e.target.textContent}))} 
                                        contentEditable={isUpdate}
                                    >
                                        {data.productCategory}
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, imageOfProduct: e.target.textContent}))} 
                                        contentEditable={isUpdate}
                                    >
                                        <img src={data.imageOfProduct} alt="Gambar" />
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productFreshness: e.target.textContent}))} 
                                        contentEditable={isUpdate}
                                    >
                                        {data.productFreshness}
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, additionalDescription: e.target.textContent}))} 
                                        contentEditable={isUpdate}
                                    >
                                        {data.additionalDescription}
                                    </td>
                                    <td
                                        className={isUpdate && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productPrice: e.target.textContent}))} 
                                        contentEditable={isUpdate}
                                    >
                                        {data.productPrice}
                                    </td>
                                    <div className="btn-group" role="group" aria-label="Basic">
                                    <td>
                                        <Button
                                        onClick={() => {
                                            dispatch(deleteProduct(data.productId)) 
                                        }}
                                        className="btn btn-danger text-light"
                                        label="Delete"
                                        />
                                    </td>
                                    <td>
                                        {isUpdate ? 
                                            (
                                                <Button
                                                    onClick={() => saveHandler()}
                                                    className="btn btn-success"
                                                    label="Save"
                                                />
                                            ) :
                                            (
                                                <Button
                                                    onClick={() => updateHandler()}
                                                    className="btn btn-secondary"
                                                    label="Edit"
                                                />
                                            )

                                        }
                                    </td>
                                    </div>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            
            {/* tombol delete dan random */}
            <div className="operation">
                <input type="text" id="search" name="search" className="form-control" />
                <div className="btn-group" role="group" aria-label="Basic">
                <button type="button" className="btn btn-primary" id="delete">
                    Deletion
                </button>
                <RandomButton/>
                </div>
            </div>
        </div>
    )
}

export default Product
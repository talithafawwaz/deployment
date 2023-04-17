import React from "react"
import Button from "../Button/Button"
import RandomButton from "../Button/RandomButton"

const Product = ({datas, setTable}) => {

    const deleteProduct = (id) => {
        if (window.confirm("Apakah anda ingin menghapus data?")) {
            const filter = datas.filter(data => data.productId != id)
            setTable([...filter])
        }
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
                    {datas.map((data) => {
                        return(
                            <tr key={data.productId}>
                                <td>{data.productId}</td>
                                <td>{data.productName}</td>
                                <td>{data.productCategory}</td>
                                <td>
                                    <img src={data.imageOfProduct} alt="image" />
                                </td>
                                <td>{data.productFreshness}</td>
                                <td>{data.additionalDescription}</td>
                                <td>{data.productPrice}</td>
                                <td><Button
                                    onClick={() => deleteProduct(data.productId)}
                                    className="btn btn-danger"
                                    label="Delete"
                                />
                                </td>
                                <td>
                                <Button
                                    className="btn btn-success"
                                    label="Edit"
                                />
                                </td>
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
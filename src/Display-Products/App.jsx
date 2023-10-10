import { useState } from "react"

export const App = () => {
    // Store input values in object
    const [productsArray, setProductsArray] = useState({
        productName: '',
        productPrice: ''
    })

    // To make controlled input
    const handleChange = (e) => {
        setProductsArray({
            ...productsArray,
            [e.target.name]: e.target.value
        })
    }

    // To store array of objects
    const [prodArray, setProdArray] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        setProdArray([productsArray, ...prodArray]);
        setProductsArray({
            productName: '',
            productPrice: ''
        })
    }

    // Calculate sum
    const total = prodArray.reduce((accu, obj) => {
        return accu + Number(obj.productPrice)
    }, 0)

    return (
        <>
            <h1 className="text-center my-2 display-4 text-primary">
                Display Products
            </h1>

            <div className="form-inline mx-2">
                <input 
                    type="text" 
                    name="productName"
                    value={productsArray.productName}
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Enter Product Name"
                    onChange={handleChange}
                />
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            $
                        </div>
                    </div>
                    <input 
                        type="text" 
                        name="productPrice" 
                        value={productsArray.productPrice}
                        className="form-control"
                        placeholder="Enter Product Price"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="btn"
                    className="btn btn-secondary mb-2"
                    onClick={handleSubmit}
                >
                    Submit 
                </button>
            </div>

            {
                prodArray?.length>0 && <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>
                                Name 
                            </th>
                            <th>
                                Price 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prodArray.map((ele,i) => {
                                const{productName,productPrice} = ele 
                                return (
                                    <tr key={i}>
                                        <td>
                                            {productName}
                                        </td>
                                        <td>
                                            {productPrice}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            {
                prodArray.length > 0 ? <h3>
                    Calculate total - {total}
                </h3> : ''
            }
        </>
    )
}
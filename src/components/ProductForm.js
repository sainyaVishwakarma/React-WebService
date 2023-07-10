import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import ProductService from "../Service/ProductService"
const ProductForm=(props)=>{
    let [formdetails,setformdetails]=useState({pid:"",pname:"",qty:"",price:""});
    let navigate=useNavigate();
    let addproduct=()=>{
        if(formdetails.pid==="" || formdetails.pname=== "" || formdetails.qty==="" || formdetails.price=== ""){
            alert("pls fill all the feilds");
            return;
        }

        ProductService.addnewProduct(formdetails)
        .then((response)=>{
            console.log(response.data);
            navigate("/table");
        })
        .catch()
    }
    return(
        <div>
          <form>
                <div className="form-group">
                        <label htmlFor="pid">Product Id</label>
                        <input
                        type="text"
                        className="form-control"
                        name="pid"
                        id="pid"
                        value={formdetails.pid}
                        onChange={(event)=>{setformdetails({...formdetails,pid:event.target.value})}}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="pname">Product Name</label>
                    <input
                    type="text"
                    className="form-control"
                    name="pname"
                    id="pname"
                    value={formdetails.pname}
                    onChange={(event)=>{setformdetails({...formdetails,pname:event.target.value})}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qty">Product quantity</label>
                    <input
                    type="text"
                    className="form-control"
                    name="qty"
                    id="qty"
                    value={formdetails.qty}
                    onChange={(event)=>{setformdetails({...formdetails,qty:event.target.value})}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Product price</label>
                    <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    value={formdetails.price}
                    onChange={(event)=>{setformdetails({...formdetails,price:event.target.value})}}
                    />
                </div>
  
            <button type="button" className="btn btn-primary" onClick={addproduct}>
                Add new product
            </button>
</form>

        </div>
    )

}

export default ProductForm;
import {useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';

import ProductService from '../Service/ProductService';
const ProductEdit=(props)=>{
    let [formdetails,setformdetails]=useState({pid:"",pname:"",qty:"",price:""});
    let navigate=useNavigate();
    let params=useParams();
    useEffect(()=>{
      ProductService.getById(params.pid)
      .then((response)=>{
         setformdetails({...response.data})
      })
      .catch();

    },[])

    let updateproduct=()=>{
        if(formdetails.pid==="" || formdetails.pname=== "" || formdetails.qty==="" || formdetails.price=== ""){
            alert("pls fill all the feilds");
            return;
        }

        ProductService.updateProduct(formdetails)
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
                        readOnly
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
  
            <button type="button" className="btn btn-primary" onClick={updateproduct}>
                update product
            </button>
</form>

        </div>
    )


}
export default ProductEdit;
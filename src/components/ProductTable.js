
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProductService from '../Service/ProductService'
 class ProductTable extends Component {
constructor(props){
    super(props);
    this.state={
        prodarr:[],
        searcharr:[],
        searchtext:""
    }

}
//initialize array 
componentDidMount(){
    this.fetchdata()
}

fetchdata(){
    ProductService.getAllProduct()
    .then((response)=>{
        this.setState({...this.state,prodarr:[...response.data],searcharr:[...response.data]})
    }).catch()
}
deleteProduct(pid){
   ProductService.deleteById(pid)
   .then((response)=>{
        this.fetchdata()
   })
   .catch()
}
  render() {
    return (
      <div>
      
  <input type="text" name="search" id="search"></input>&nbsp;&nbsp;&nbsp;
  <Link to='/form'>
     <button type="button" name="btn" id="btn" className="btn btn-success">Add new product</button>  
  </Link> 
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    {
        this.state.searcharr.map(product=>
            <tr key={product.pid}>
                <td scope="row">{product.pid}</td>
                <td>{product.pname}</td>
                <td>{product.qty}</td>
                <td>{product.price}</td>
                <td>

                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={()=>this.deleteProduct(product.pid)}>delete</button> &nbsp;&nbsp;&nbsp; 
                <Link to={`/edit/${product.pid}`}>
                <button type="button" name="btn" id="btn" className="btn btn-primary">edit</button> &nbsp;&nbsp;&nbsp; 
                </Link>
                <button type="button" name="btn" id="btn" className="btn btn-info">view</button> 
                </td>
            </tr>
        )
    }
      
      
    </tbody>
  </table>
</div>
    )
  }
}

export default ProductTable;
import axios from 'axios';
const baseUrl="http://localhost:8080/SpringRESTJdbcWebService/products";
class ProductService{
    getAllProduct(){
        return axios.get(baseUrl);
    }
    getById(pid){
        return axios.get(baseUrl+"/"+pid);
    }
    addnewProduct(p){
        return axios.post(baseUrl+"/"+p.pid,p); //{header:{"content-type":"application/json"}})
    }
    updateProduct(p){
        return axios.put(baseUrl+"/"+p.pid,p); //{header:{"content-type":"application/json"}})
    }
    deleteById(pid){
        return axios.delete(baseUrl+"/"+pid)
    }
    
}
export default new ProductService();
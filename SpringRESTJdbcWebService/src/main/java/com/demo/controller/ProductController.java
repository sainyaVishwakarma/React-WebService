package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Product;
import com.demo.service.ProductService;
@CrossOrigin(origins="*")
@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productService.getAllProduct();
	}
	
	@GetMapping("/products/{pid}")
	public ResponseEntity<Product> getById(@PathVariable int pid) {
		Product p= productService.getById(pid);
		if(p!=null) {
			return ResponseEntity.ok(p);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@PostMapping("/products/{pid}")
	public ResponseEntity<String> addNewProduct(@RequestBody Product p){
		int n=productService.addNewProduct(p);
		if(n>0) {
			return ResponseEntity.ok("Added successfully");
		}else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/products/{pid}")
	public ResponseEntity<String> updateById(@RequestBody Product p){
		int n=productService.updateById(p);
		if(n>0) {
			return ResponseEntity.ok("Modified successfully");
		}else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/products/{pid}")
	public ResponseEntity<String> deleteById(@PathVariable int pid){
		int n=productService.deleteById(pid);
		if(n>0) {
			return new ResponseEntity("Deleted successfully",HttpStatus.OK);
		}else {
			return new ResponseEntity("Data not found "+pid,HttpStatus.NOT_FOUND);
		}
	}
}

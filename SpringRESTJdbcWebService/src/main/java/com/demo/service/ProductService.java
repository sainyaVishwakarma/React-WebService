package com.demo.service;

import java.util.List;

import com.demo.beans.Product;

public interface ProductService {

	List<Product> getAllProduct();

	Product getById(int pid);

	int addNewProduct(Product p);

	int updateById(Product p);

	int deleteById(int pid);

}

package com.demo.dao;

import java.util.List;

import com.demo.beans.Product;

public interface ProductDao {

	List<Product> findAllProduct();

	Product findById(int pid);

	int addNewProduct(Product p);

	int updateById(Product p);

	int deleteById(int pid);

}

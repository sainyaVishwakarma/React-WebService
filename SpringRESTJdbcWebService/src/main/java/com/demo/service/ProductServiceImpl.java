package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Product;
import com.demo.dao.ProductDao;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductDao productDao;
	@Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return productDao.findAllProduct();
	}
	@Override
	public Product getById(int pid) {
		// TODO Auto-generated method stub
		return productDao.findById(pid);
	}
	@Override
	public int addNewProduct(Product p) {
		// TODO Auto-generated method stub
		return productDao.addNewProduct(p);
	}
	@Override
	public int updateById(Product p) {
		// TODO Auto-generated method stub
		return productDao.updateById(p);
	}
	@Override
	public int deleteById(int pid) {
		// TODO Auto-generated method stub
		return productDao.deleteById(pid);
	}

}

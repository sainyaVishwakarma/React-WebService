package com.demo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.demo.beans.Product;

@Repository
public class ProductDaoImpl implements ProductDao{
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public List<Product> findAllProduct() {
		// TODO Auto-generated method stub
		return jdbcTemplate.query("select * from prod",(rs,num)->{
			Product p=new Product();
			p.setPid(rs.getInt(1));
			p.setPname(rs.getString(2));
			p.setQty(rs.getInt(3));
			p.setPrice(rs.getFloat(4));
			return p;
		});
	
	}
	@Override
	public Product findById(int pid) {
		// TODO Auto-generated method stub
		return jdbcTemplate.queryForObject("select * from prod where pid=?", new Object[] {pid},BeanPropertyRowMapper.newInstance(Product.class));
	}
	@Override
	public int addNewProduct(Product p) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("insert into prod values(?,?,?,?)",new Object[] {
				p.getPid(),p.getPname(),p.getQty(),p.getPrice()
		});
	}
	@Override
	public int updateById(Product p) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("update prod set pname=?,qty=?,price=? where pid=?",new Object[] {
				p.getPname(),p.getQty(),p.getPrice(),p.getPid()
		});
	}
	@Override
	public int deleteById(int pid) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("delete from prod where pid=?",new Object[] {pid});
	}
	

}


import React, { useState, useEffect } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBlogs, setShowBlogs] = useState(true);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowBlogs(true);
  };

  const toggleShowBlogs = () => {
    setShowBlogs(!showBlogs);
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/categories/');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/blogPost/');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  const filterBlogs = (categoryId) => {
    if (categoryId === 'all') {
      return blogs;
    } else {
      const selectedCategoryObj = categories.find((category) => category.id === categoryId);
      return selectedCategoryObj ? selectedCategoryObj.blog : [];
    }
  };

  const filteredBlogs = filterBlogs(selectedCategory);

  return (
    <div>
      <h4>Category LIST</h4>
      <div className="d-flex justify-content-end">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => handleCategoryClick(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      {selectedCategory !== 'all' && (
        <button className="btn btn-primary" onClick={toggleShowBlogs}>
          {showBlogs ? 'Hide Blogs' : 'Show Blogs'}
        </button>
      )}
      <br />
      {showBlogs &&
        filteredBlogs.map((blogPost) => (
          <div key={blogPost.id}>
            <h3>{blogPost.name}</h3>
            <p>{blogPost.content}</p>
          </div>
        ))}
    </div>
  );
}

export default CategoryList;
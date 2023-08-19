import React, { useState } from 'react';

function CategoryList(props) {
    // const { categories,blog } = props;
    const [categories,setCategories]= useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showBlogs, setShowBlogs] = useState(true);

    const handleCategoryClick = (categoryId) => {
        if (selectedCategory === categoryId) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryId);
        }
    };

    const toggleShowBlogs = () => {
        setShowBlogs(!showBlogs);
    };

    const fetchCategories = () => {
        fetch('http://127.0.0.1:5000/categories/', {
          method: 'GET',
          headers: {
            "Content-Type": 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(resp => setCategories(resp))
          .catch(error => console.log(error));
      }

    return (
        <div>
            <h4>Category LIST</h4>
            {/* Categories */}
            {categories && categories.length > 0 ? (
                <div>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h2 onClick={() => handleCategoryClick(category.id)}>
                                {category.name}
                            </h2>
                            {selectedCategory === category.id && (
                                <button onClick={toggleShowBlogs}>
                                    {showBlogs ? 'Hide Blogs' : 'Show Blogs'}
                                </button>
        
                            )}
                            <br/>
                            {selectedCategory === category.id && showBlogs && (
                                <div>
                                    {/* Display blog posts under the selected category */}
                                    {category.blog.map((blogPost) => (
                                        <div key={blogPost.id}>
                                            <h3>{blogPost.title}</h3>
                                            <p>{blogPost.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default CategoryList;

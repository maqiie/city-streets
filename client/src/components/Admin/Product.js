
// import React, { Component } from 'react';
// import axios from 'axios';
// import './Produc.css';

// class ProductForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         description: '',
//         price: '',
//         image_url: '',
//         shoe_type: '',
//         shoe_design: '',
//         gender: '',
//         shoe_size: '',
//         brand_id: '', // Add input field for brand_id
//       };
      
//     }
  
//     handleChange = (e) => {
//         const { name, value } = e.target;
//         // Remove 'product[' and ']' from the field name if present
//         const fieldName = name.replace('product[', '').replace(']', '');
//         this.setState({ [fieldName]: value });
//       };
      
  
//     // handleSubmit = (e) => {
//     //   e.preventDefault();
  
//     //   const productData = {
//     //     name: this.state.name,
//     //     description: this.state.description,
//     //     price: parseFloat(this.state.price),
//     //     image_url: this.state.image_url,
//     //     shoe_type: this.state.shoe_type,
//     //     shoe_design: this.state.shoe_design,
//     //     gender: this.state.gender,
//     //     shoe_size: this.state.shoe_size,
//     //     brand_id: parseInt(this.state.brand_id),
//     //   };
  
//     //   // Send a POST request using Axios
//     //   axios
//     //     .post('http://localhost:3001/admin/products', productData)
//     //     .then((response) => {
//     //       // Handle the response from the server (e.g., show success message, redirect, etc.)
//     //       console.log('Product created:', response.data);
//     //     })
//     //     .catch((error) => {
//     //       console.error('Error creating product:', error);
//     //     });
//     // };
//     handleSubmit = (e) => {
//         e.preventDefault();
      
//         const productData = {
//           name: this.state.name,
//           description: this.state.description,
//           price: parseFloat(this.state.price),
//           image_url: this.state.image_url,
//           shoe_type: this.state.shoe_type,
//           shoe_design: this.state.shoe_design,
//           gender: this.state.gender,
//           shoe_size: this.state.shoe_size,
//           brand_id: parseInt(this.state.brand_id),
//         };
      
//         // Log the data being sent to the server (for debugging)
//         console.log('Sending product data to the server:', productData);
      
//         // Send a POST request using Axios
//         axios
//           .post('http://localhost:3001/admin/products', productData)
//           .then((response) => {
//             // Handle the response from the server (e.g., show success message, redirect, etc.)
//             console.log('Product created:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error creating product:', error);
//           });
//       };
      



//   render() {
//     return (
//       <div className="product-form-card">
//         <h2>Create a New Product</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={this.state.description}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Price:</label>
//             <input
//               type="number"
//               name="price"
//               value={this.state.price}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Image URL:</label>
//             <input
//               type="text"
//               name="image_url"
//               value={this.state.image_url}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Shoe Type:</label>
//             <input
//               type="text"
//               name="shoe_type"
//               value={this.state.shoe_type}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Shoe Design:</label>
//             <input
//               type="text"
//               name="shoe_design"
//               value={this.state.shoe_design}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Gender:</label>
//             <input
//               type="text"
//               name="gender"
//               value={this.state.gender}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Shoe Size:</label>
//             <input
//               type="text"
//               name="shoe_size"
//               value={this.state.shoe_size}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Brand ID:</label>
//             <input
//               type="number"
//               name="brand_id"
//               value={this.state.brand_id}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button type="submit">Create Product</button>

//         </form>
//       </div>
//     );
//   }
// }

// export default ProductForm;
import React, { Component } from 'react';
import axios from 'axios';
import './Produc.css';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        description: '',
        price: '',
        image_url: '',
        shoe_type: '',
        shoe_design: '',
        gender: '',
        style: '',
        brand_id: 1, // Default brand_id
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request using Axios
    axios
      .post('http://localhost:3001/admin/products', { product: this.state.product })
      .then((response) => {
        // Handle the response from the server (e.g., show success message, redirect, etc.)
        console.log('Product created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

  render() {
    const { product } = this.state;

    return (
      <div className='product-form-card'>
        <h2>Create a New Product</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="image_url"
              value={product.image_url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Shoe Type:</label>
            <input
              type="text"
              name="shoe_type"
              value={product.shoe_type}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Shoe Design:</label>
            <input
              type="text"
              name="shoe_design"
              value={product.shoe_design}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              value={product.gender}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Style:</label>
            <input
              type="text"
              name="style"
              value={product.style}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  }
}

export default ProductForm;

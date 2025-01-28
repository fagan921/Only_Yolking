// import { useState } from 'react';
// import { useMutation } from '@apollo/client';

// const [createOrder] = useMutation(CREATE_ORDER);
// const CheckoutForm = ({ totalAmount, products }) => {
//     const [formData, setFormData] = useState({
//       fullName: '',
//       email: '',
//       address: '',
//       city: '',
//       state: '',
//       zip: '',
//       country: '',
//     });
  

  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const payments = window.Square.payments('your-app-id', 'sandbox'); 
//       const card = await payments.card();
//       await card.attach('#card-container');
  
//       const result = await card.tokenize();
//       if (result.status === 'OK') {
//         const paymentToken = result.token;
  
//         const response = await createOrder({
//           variables: {
//             input: {
//               ...formData,
//               paymentToken,
//               totalAmount,
//               products,
//             },
//           },
//         });
  
//         if (response.data.createOrder.success) {
//           alert('Order created successfully!');
//         } else {
//           alert('Order creation failed: ' + response.data.createOrder.message);
//         }
//       } else {
//         alert('Payment failed. Please try again.');
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <div id="card-container"></div>
  
//         <input name="fullName" placeholder="Full Name" onChange={handleInputChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleInputChange} required />
//         <input name="address" placeholder="Address" onChange={handleInputChange} required />
//         <input name="city" placeholder="City" onChange={handleInputChange} required />
//         <input name="state" placeholder="State" onChange={handleInputChange} required />
//         <input name="zip" placeholder="ZIP Code" onChange={handleInputChange} required />
//         <input name="country" placeholder="Country" onChange={handleInputChange} required />
  
//         <button type="submit">Submit Payment</button>
//       </form>
//     );
//   };
  
//   export default CheckoutForm;
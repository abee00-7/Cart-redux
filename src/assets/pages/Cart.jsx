import React from 'react'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'

function Cart() {
  const ourCart = useSelector(state => state.cartReducer)

  return (
    <div>
          <Header/>
          <div style={{marginTop:'150px'}} className='container'>
            {
              ourCart?.length>0 ?
              <div className="cart">
              <h1>Cart Summary</h1>
              <div className="row mt-4">
                <div className="col-lg-8">
                   <table className='table shadow'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>...</th>
                      </tr>
                    </thead>
                     <tbody>
                      {
                        ourCart?.map((product,index) => (
                        <tr key={product?.id}>
                          <td>{index+1}</td>
                          <td>{product?.title.slice(0,20)}...</td>
                          <td><img width={'50px'} src={product?.thumbnail}  alt="product-image" /></td>
                          <td>
                            <div className="d-flex">
                              <button className='btn fw-bolder'>-</button>
                              <input value={product?.quantity} className='fw-bolder me1 ms-1' style={{width:'50px'}} type="text" readOnly/>
                              <button className='btn fw-bolder'>+</button>
                            </div>
                          </td>
                          <td>$ {product?.totalPrice}</td>
                          <td> <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                        </tr>))
                      }
                     </tbody>
                   </table>
                </div>
                <div className="col-lg-4">
                  
                  </div>

              </div>
            </div>
            :
            <div style={{height:'60vh'}} className="d-flex justify-content-center align-items-center flex-column">
                 <img width={'400px'} height={'400'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2161427-1815069.png" alt="empty" />
               <h3 className='text-danger'>
                     Your Cart is Empty
                      </h3>
            </div>
            }
          </div>
    </div>
  )
}

export default Cart

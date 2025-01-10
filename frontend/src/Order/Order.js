import React, { useState, useEffect } from "react";
import "./order.css";
import { mPesaLogo } from "../assets/assets";
import Subtotals from "../cart/Subtotals";
import { FaLocationDot } from "react-icons/fa6";

const CheckoutPage = ({ cartItems }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
      phoneNumber: "",
    };
  });

  const clearFormData = () => {
    localStorage.removeItem("formData");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of Ksh 11,800 initiated for ${formData.email}`);
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="checkout-container">
      {/* Delivery Information */}
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-btn">
            Proceed To Payment
          </button>
          <button type="button" onClick={clearFormData}>Clear Form</button>
        </form>
      </div>

      {/* Payment Summary */}
      <div className="checkout-form">
        {formData.firstName &&
          <div className="shipping-container">
          <h6 className="shipping-heading">Shipping Information</h6>
          <div className="shipping-info">
            <FaLocationDot className="shipping-icon" />
            <div>
              <div className="name-phone">
                <span>{formData.firstName} {formData.lastName}</span>
                <span className="phone">{formData.phoneNumber}</span>
              </div>
              <div className="address">
                {`${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipCode}, ${formData.country}`}
              </div>
            </div>
          </div>
        </div>
        }
        <h1>CheckOut</h1>
        <p>Please complete the purchase by providing payment details</p>
        <div className="payment-icons">
          <img src={mPesaLogo} alt="Mpesa" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Mpesa Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Mpesa phone number"
              required
            />
          </div>
          <div className="payment-summary">
            <Subtotals cartItems={cartItems}  />
          </div>
          <button type="submit" className="pay-button">
            Make Delivery Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
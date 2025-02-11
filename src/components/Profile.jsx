import React, { useState } from "react";
import Saved from "./Saved"; // Import the Saved component

function Profile() {
  // Fake user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
    bio: "Food lover and sustainability enthusiast.",
    favoriteRestaurants: [
      { id: 1, name: "Green Bites", address: "123 Eco St, City" },
      { id: 2, name: "Urban Harvest", address: "456 Green Ave, City" },
    ],
    orderHistory: [
      {
        id: 1,
        restaurant: "Green Bites",
        date: "2023-10-01",
        items: ["Vegan Surprise Bag", "Organic Smoothie"],
        total: "$15.00",
      },
      {
        id: 2,
        restaurant: "Urban Harvest",
        date: "2023-09-25",
        items: ["Seasonal Veggie Box", "Fresh Bread"],
        total: "$12.50",
      },
    ],
  };

  // Menu options
  const menuOptions = [
    {
      id: 1,
      title: "Personal Information",
      content: (
        <div>
          <h5>Personal Information</h5>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Favorite Restaurants",
      content: (
        <div>
          <h5>Favorite Restaurants</h5>
          {user.favoriteRestaurants.length > 0 ? (
            <ul className="list-group">
              {user.favoriteRestaurants.map((restaurant) => (
                <li key={restaurant.id} className="list-group-item">
                  <strong>{restaurant.name}</strong>
                  <br />
                  <small>{restaurant.address}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No favorite restaurants yet.</p>
          )}
        </div>
      ),
    },
    {
      id: 3,
      title: "Order History",
      content: (
        <div>
          <h5>Order History</h5>
          {user.orderHistory.length > 0 ? (
            <ul className="list-group">
              {user.orderHistory.map((order) => (
                <li key={order.id} className="list-group-item">
                  <strong>{order.restaurant}</strong>
                  <br />
                  <small>Date: {order.date}</small>
                  <br />
                  <small>Items: {order.items.join(", ")}</small>
                  <br />
                  <small>Total: {order.total}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders yet.</p>
          )}
        </div>
      ),
    },
    {
      id: 4,
      title: "Settings",
      content: (
        <div>
          <h5>Settings</h5>
          <p>Update your profile settings here.</p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Payment Methods",
      content: (
        <div>
          <h5>Payment Methods</h5>
          <p>Manage your payment methods here.</p>
        </div>
      ),
    },
  ];

  // State to manage the selected menu option
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0]);

  return (
    <div className="container mt-5">
      

      {/* Add the Saved component at the top */}
      <Saved />
        <br />
      <h2>Profile</h2>

      {/* Split Layout: Menu on the Left, Content on the Right */}
      <div className="row">
        {/* Menu (Left Side) */}
        <div className="col-md-3">
          <div className="list-group">
            {menuOptions.map((option) => (
              <button
                key={option.id}
                className={`list-group-item list-group-item-action ${
                  selectedMenu.id === option.id ? "bg-secondary text-white" : ""
                }`}
                onClick={() => setSelectedMenu(option)}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content (Right Side) */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">{selectedMenu.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
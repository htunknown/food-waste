function Restaurants() {
    const restaurantData = [
      {
        id: 1,
        name: "Restaurant 1",
        point: "Point 1",
        collectTime: "30 mins",
        distance: "2 km",
        description: "Restaurant 1 explanation comes here.",
        price: "$20",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      {
        id: 2,
        name: "Restaurant 2",
        point: "Point 2",
        collectTime: "25 mins",
        distance: "3 km",
        description: "Restaurant 2 explanation comes here.",
        price: "$25",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Restaurant 3",
        point: "Point 3",
        collectTime: "5 mins",
        distance: "8 km",
        description: "Restaurant 3 explanation comes here.",
        price: "$25",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Restaurant 3",
        point: "Point 3",
        collectTime: "5 mins",
        distance: "8 km",
        description: "Restaurant 3 explanation comes here.",
        price: "$25",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Restaurant 3",
        point: "Point 3",
        collectTime: "5 mins",
        distance: "8 km",
        description: "Restaurant 3 explanation comes here.",
        price: "$25",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      {
        id: 3,
        name: "Restaurant 3",
        point: "Point 3",
        collectTime: "5 mins",
        distance: "8 km",
        description: "Restaurant 3 explanation comes here.",
        price: "$25",
        image: "https://cdn.getiryemek.com/restaurants/1602261583142_1125x522.jpeg",
        link: "https://www.instagram.com",
      },
      

      // More restaurant objects can be added here
    ];
  
    return (
      <div style={{ padding: "20px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Distribute space between cards
            gap: "20px", // Add spacing between cards
            flexWrap: "wrap", // Allow wrapping to the next line if needed
          }}
        >
          {restaurantData.map((restaurant) => (
            <div
              key={restaurant.id}
              style={{
                flex: "1 1 300px", // Allow cards to grow and shrink, with a base width of 300px
                maxWidth: "calc(33.333% - 20px)", // Limit card width to fit 3 cards per row
                boxSizing: "border-box", // Ensure padding and border are included in the width
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <a href={restaurant.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div
                  style={{
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h5 style={{ fontSize: "1.25rem", margin: 0 }}>
                      {restaurant.name}
                    </h5>
                    <span>{restaurant.point}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span>Collect time: {restaurant.collectTime}</span>
                    <span>Distance: {restaurant.distance}</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#555", flexGrow: 1 }}>
                    {restaurant.description}
                  </p>
                  <div style={{ textAlign: "center", marginTop: "auto" }}>
                    <span>{restaurant.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Restaurants;
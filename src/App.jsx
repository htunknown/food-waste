import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Saved from "./components/Saved";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <>
      <Navbar />
      <Saved />
      <Map /> {/* This will render the map */}

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row", // Default layout: Filters on the left, Restaurants on the right
          gap: "20px", // Spacing between Filters and Restaurants
          flexWrap: "wrap", // Allow wrapping on smaller screens
        }}
      >
        {/* Filters Section */}
        <div
          style={{
            flex: "1 1 250px", // Flex-grow, flex-shrink, and base width
            maxWidth: "300px", // Maximum width for Filters
          }}
        >
          <h5>Filters</h5>
          <Filter />
        </div>

        {/* Restaurants Section */}
        <div
          style={{
            flex: "3 1 600px", // Takes up more space than Filters
            minWidth: "300px", // Minimum width for Restaurants
          }}
        >
          <h5>Restaurants</h5>
          <Restaurants />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
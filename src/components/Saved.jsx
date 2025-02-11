function Saved() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Adjust the space between the elements
    alignItems: "center",
  };

  const headingStyle = {
    margin: "0", // Remove any default margin on h2
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        CO2 Saved <span className="badge text-bg-secondary">CO2 Amount</span>
      </h2>
      <h2 style={headingStyle}>
        Money Saved <span className="badge text-bg-secondary">Money Amount</span>
      </h2>
      <h2 style={headingStyle}>
        Tree Planted <span className="badge text-bg-secondary">Tree Amount</span>
      </h2>
    </div>
  );
}

export default Saved;
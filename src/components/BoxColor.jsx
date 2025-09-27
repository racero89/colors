function boxColor ({color, value}) {
   const isMatch = color.toLowerCase() === inputValue.toLowerCase();
   <div
      className="box"
      style={{
        backgroundColor: isMatch ? color : "lightgray", // Fondo gris si no coincide
      }}
    >
      <p>{inputValue}</p>
      <p>{isMatch ? `Soy el color ${color}` : "No soy el color"}</p>
    </div>
  
}

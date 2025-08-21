exports.generateSKU = (productName,productId) => { 
  const prefix = productName.substring(0, 3).toUpperCase();  
  // Pad productId to 5 digits
  productId= "12345";
  const idPart = String(productId).padStart(5, "0");
  return `${prefix}-${idPart}`;
}
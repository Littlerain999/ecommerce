const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for a mobile product
const mobileSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  }, // Name of the mobile phone (e.g., iPhone 14)
  
  brand: { 
    type: String, 
    required: true 
  }, // Mobile brand (e.g., Apple, Samsung)
  
  model: { 
    type: String, 
    required: true 
  }, // Model name or number
  
  price: { 
    type: Number, 
    required: true 
  }, // Price of the mobile phone
  
  description: { 
    type: String, 
    required: true 
  }, // A brief description of the product
  
  specifications: {
    screenSize: { 
      type: String, 
      required: true 
    }, // e.g., "6.1 inch"
    
    storage: { 
      type: String, 
      required: true 
    }, // e.g., "128GB", "256GB"
    
    ram: { 
      type: String, 
      required: true 
    }, // e.g., "4GB", "6GB"
    
    processor: { 
      type: String, 
      required: true 
    }, // e.g., "A15 Bionic", "Snapdragon 888"
    
    camera: {
      front: { 
        type: String, 
        required: true 
      }, // Front camera specification, e.g., "12MP"
      
      rear: { 
        type: String, 
        required: true 
      } // Rear camera specification, e.g., "48MP"
    },
    
    battery: { 
      type: String, 
      required: true 
    }, // e.g., "3500mAh"
    
    color: { 
      type: [String], 
      required: true 
    }, // Available colors, e.g., ["Black", "Blue", "Red"]
    
    operatingSystem: { 
      type: String, 
      required: true 
    }, // e.g., "iOS", "Android"
    
    is5GEnabled: { 
      type: Boolean, 
      required: true 
    } // Whether the phone supports 5G
  },

  images: [ 
    { 
      type: String 
    } 
  ], // Array of image URLs for the product
  
  stockQuantity: { 
    type: Number, 
    default: 0 
  }, // How many units are available
  
  isAvailable: { 
    type: Boolean, 
    default: true 
  }, // Availability status (whether the product is available for purchase)
  
  dateAdded: { 
    type: Date, 
    default: Date.now 
  }, // Date when the product was added to the catalog
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;

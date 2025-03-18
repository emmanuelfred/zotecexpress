import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    city: "Abakaliki",
    region: "Ebonyi",
    country: "NG",
    delivery_price: 4000, // Default price for Abakaliki
  });

  const statesData = [
    {
      "region": "Enugu",
      "cities": [
        { "city": "Enugu", "delivery_price": 3500 },
        { "city": "Nsukka", "delivery_price": 3700 }
      ]
    },
    {
      "region": "Ebonyi",
      "cities": [
        { "city": "Abakaliki", "delivery_price": 4000 },
        { "city": "Afikpo", "delivery_price": 4200 }
      ]
    },
    {
      "region": "Anambra",
      "cities": [
        { "city": "Awka", "delivery_price": 4500 },
        { "city": "Onitsha", "delivery_price": 4600 },
        { "city": "Nnewi", "delivery_price": 4700 }
      ]
    }
  ];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io/json?token=821d4364214fb7"
        );

        const { city, region, country } = response.data;

        // Find matching region in JSON data
        const matchedRegion = statesData.find((state) => state.region === region);
        let matchedCity = null;
        let deliveryPrice = 4000; // Default price for Abakaliki, Ebonyi

        if (matchedRegion) {
          // Find matching city within the region
          matchedCity = matchedRegion.cities.find((c) => c.city === city);
          if (matchedCity) {
            deliveryPrice = matchedCity.delivery_price;
          } else {
            // If city not found, default to the first city in that region
            deliveryPrice = matchedRegion.cities[0].delivery_price;
          }
        }

        // Set location
        setLocation({
          city: matchedCity ? matchedCity.city : "Abakaliki",
          region: matchedRegion ? matchedRegion.region : "Ebonyi",
          country: country || "NG",
          delivery_price: deliveryPrice
        });

        // Save to localStorage
        localStorage.setItem(
          "userLocation",
          JSON.stringify({
            city: matchedCity ? matchedCity.city : "Abakaliki",
            region: matchedRegion ? matchedRegion.region : "Ebonyi",
            country,
            delivery_price: deliveryPrice
          })
        );
      } catch (error) {
        console.warn("Could not fetch location. Using default:", error);
      }
    };

    // Check localStorage first
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    } else {
      fetchLocation();
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

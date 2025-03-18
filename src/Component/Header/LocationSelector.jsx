import { useContext } from "react";
 // Adjust based on folder structure
import { FaMapMarkerAlt } from "react-icons/fa";
import { LocationContext } from "../../Context/LocationContext";

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

const LocationSelector = () => {
  const { location, setLocation } = useContext(LocationContext);

  // Extract allowed states dynamically
  const allowedStates = statesData.map(state => state.region);

  const handleChange = (event) => {
    const selectedRegion = event.target.value;

    // Find the selected region's first city as the default city
    const matchedState = statesData.find(state => state.region === selectedRegion);
    const defaultCity = matchedState ? matchedState.cities[0].city : "Abakaliki";

    // Update the location state
    setLocation({
      ...location,
      region: selectedRegion,
      city: defaultCity, 
    });
  };

  return (
    <div className="location-selector">
      <FaMapMarkerAlt size={24} color="#014925" />
      <select value={location.region} onChange={handleChange}>
        {allowedStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;

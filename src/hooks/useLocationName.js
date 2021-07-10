import { useState, useEffect } from "react";
import { ACTION_TYPES } from "../context/types";
import locationAPI from "../service/locationAPI";
import { weatherAPI } from "../service/weatherAPI";

function useLocationName(location) {
  const [locationDetails, setlocationDetails] = useState(null);

  useEffect(() => {
    function getPlaceName() {
      locationAPI
        .getLocationName({ lat: location.latitude, lon: location.longitude })
        .then((response) => {
          setlocationDetails(response);
        });
    }
    location && location.latitude && getPlaceName();
  }, [location]);
  return locationDetails;
}

export default useLocationName;

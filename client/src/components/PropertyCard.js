import React from "react";
import "./styles/PropertyCard.css";

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card-container">
            <div className="property-card">
                <img src={property.photos} alt={`${property.street_name} ${property.building_number}`}
                    className="property-card-img" />

                <div className="property-card-details">
                    <h2 className="property-card-title">{property.building_number} {property.street_name}</h2>
                    <p className="property-card-location">{property.zip_code} {property.neighborhood}</p>
                    <p className="property-card-rooms">Beds · {property.total_bedrooms} Baths · {property.total_bathrooms}</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
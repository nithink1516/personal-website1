import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import './Travel.css';

const INDIA_TOPO_JSON = "/india-states.json";

const locations = [
    { name: "Chennai", coordinates: [80.2785, 13.0878], description: "The cultural capital of South India." },
    { name: "Pondicherry", coordinates: [79.8083, 11.9416], description: "French colonial architecture." },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], description: "The city of dreams." },
    { name: "Gokarna", coordinates: [74.3188, 14.5479], description: "Serene beaches and temples." },
    { name: "Bellary", coordinates: [76.9214, 15.1394], description: "Historical significance." },
    { name: "Bangalore", coordinates: [77.5946, 12.9716], description: "The Silicon Valley of India." },
];

const Travel = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <section className="travel-section" id="travel">
            <div className="travel-title">
                <h2 className="section-title">My <span className="gradient-text">Travels</span></h2>
                <p>Exploring India, one city at a time.</p>
            </div>

            <div className="map-container">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 1000,
                        center: [78.9629, 22.5937] // Adjusted center for better visibility
                    }}
                    width={800}
                    height={600}
                >
                    <Geographies geography={INDIA_TOPO_JSON}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: "#2a2a2a",
                                            stroke: "#333",
                                            strokeWidth: 0.5,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#3a3a3a",
                                            stroke: "#444",
                                            strokeWidth: 0.7,
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#2a2a2a",
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {locations.map(({ name, coordinates, description }) => (
                        <Marker key={name} coordinates={coordinates} onClick={() => setSelectedLocation({ name, description })}>
                            <circle r={6} fill="#6366f1" className="marker-circle" stroke="#fff" strokeWidth={2} />
                            <text textAnchor="middle" y={-10} className="marker-text" fill="#fff">
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>

            <div className={`location-modal-overlay ${selectedLocation ? 'active' : ''}`} onClick={() => setSelectedLocation(null)}>
                <div className="location-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setSelectedLocation(null)}>&times;</button>
                    {selectedLocation && (
                        <div className="modal-content">
                            <h3>{selectedLocation.name}</h3>
                            <p>{selectedLocation.description}</p>
                            <div className="modal-images">
                                {/* Placeholders for now */}
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="modal-img-placeholder">
                                        <img src={`https://picsum.photos/200/200?random=${i}&travel`} alt="Travel" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Travel;

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Travel.css';

import mumbai1 from '../assets/travel/mumbai/mumbai1.jpg';
import mumbai2 from '../assets/travel/mumbai/mumbai2.jpg';
import mumbai3 from '../assets/travel/mumbai/mumbai3.jpg';
import mumbai4 from '../assets/travel/mumbai/mumbai4.jpg';
import mumbai5 from '../assets/travel/mumbai/mumbai5.jpg';

import gokarna1 from '../assets/travel/gokarna/gokarna1.jpg';
import gokarna2 from '../assets/travel/gokarna/gokarna2.jpg';
import gokarna3 from '../assets/travel/gokarna/gokarna3.jpg';
import gokarna4 from '../assets/travel/gokarna/gokarna4.jpg';
import gokarna5 from '../assets/travel/gokarna/gokarna5.jpg';
import gokarna6 from '../assets/travel/gokarna/gokarna6.jpg';
import gokarna7 from '../assets/travel/gokarna/gokarna7.jpg';
import gokarna8 from '../assets/travel/gokarna/gokarna8.jpg';
import gokarna9 from '../assets/travel/gokarna/gokarna9.jpg';

const INDIA_TOPO_JSON = "/india-states.json";

const locations = [
    { name: "Chennai", coordinates: [80.2785, 13.0878], description: "The cultural capital of South India." },
    { name: "Pondicherry", coordinates: [79.8083, 11.9416], description: "French colonial architecture." },
    {
        name: "Mumbai",
        coordinates: [72.8777, 19.0760],
        description: "The city of dreams.",
        images: [mumbai1, mumbai2, mumbai3, mumbai4, mumbai5]
    },
    {
        name: "Gokarna",
        coordinates: [74.3188, 14.5479],
        description: "Serene beaches and temples.",
        images: [gokarna1, gokarna2, gokarna3, gokarna4, gokarna5, gokarna6, gokarna7, gokarna8, gokarna9]
    },
    { name: "Bellary", coordinates: [76.9214, 15.1394], description: "Historical significance." },
    { name: "Bangalore", coordinates: [77.5946, 12.9716], description: "The Silicon Valley of India." },
    { name: "Wayanad", coordinates: [76.083, 11.605], description: "Nature's tranquil abode." },
    { name: "Hampi", coordinates: [76.460, 15.335], description: "Ruins of the Vijayanagara Empire." },
    { name: "Sriharikota", coordinates: [80.210, 13.742], description: "India's Spaceport." },
    { name: "Tirupati", coordinates: [79.420, 13.636], description: "Spiritual capital of Andhra Pradesh." },
    { name: "Honnavar", coordinates: [74.444, 14.280], description: "Coastal beauty and backwaters." },
];

const Travel = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        if (!selectedLocation || !selectedLocation.images) return;
        setSelectedImageIndex((prev) => (prev + 1) % selectedLocation.images.length);
    };

    const prevImage = () => {
        if (!selectedLocation || !selectedLocation.images) return;
        setSelectedImageIndex((prev) => (prev - 1 + selectedLocation.images.length) % selectedLocation.images.length);
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, selectedLocation]);

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

                    {locations.map(({ name, coordinates, description, images }) => (
                        <Marker key={name} coordinates={coordinates} onClick={() => setSelectedLocation({ name, description, images })}>
                            <circle
                                r={6}
                                fill="#6366f1"
                                className="marker-circle"
                                stroke="#fff"
                                strokeWidth={2}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={name}
                            />
                        </Marker>
                    ))}
                </ComposableMap>
                <Tooltip id="my-tooltip" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "8px" }} />
            </div>

            <div className={`location-modal-overlay ${selectedLocation ? 'active' : ''}`} onClick={() => setSelectedLocation(null)}>
                <div className="location-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setSelectedLocation(null)}>&times;</button>
                    {selectedLocation && (
                        <div className="modal-content">
                            <h3>{selectedLocation.name}</h3>
                            <p>{selectedLocation.description}</p>
                            <div className="modal-images">
                                {selectedLocation.images ? (
                                    selectedLocation.images.map((img, i) => (
                                        <div key={i} className="modal-img-placeholder" onClick={() => openLightbox(i)} style={{ cursor: 'pointer' }}>
                                            <img src={img} alt={`${selectedLocation.name} ${i + 1}`} />
                                        </div>
                                    ))
                                ) : (
                                    /* Placeholders for now */
                                    [1, 2, 3].map((i) => (
                                        <div key={i} className="modal-img-placeholder">
                                            <img src={`https://picsum.photos/200/200?random=${i}&travel`} alt="Travel" />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <div className={`lightbox-overlay ${selectedImageIndex !== null ? 'active' : ''}`} onClick={closeLightbox}>
                <button className="lightbox-close-btn" onClick={closeLightbox}>&times;</button>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    {selectedLocation && selectedLocation.images && selectedImageIndex !== null && (
                        <>
                            <button className="lightbox-nav-btn lightbox-prev" onClick={prevImage}>&#10094;</button>
                            <img
                                src={selectedLocation.images[selectedImageIndex]}
                                alt={`Full screen view ${selectedImageIndex + 1}`}
                                className="lightbox-image"
                            />
                            <button className="lightbox-nav-btn lightbox-next" onClick={nextImage}>&#10095;</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Travel;

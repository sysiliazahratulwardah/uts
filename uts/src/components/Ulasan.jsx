// src/components/Ulasan.js
import React from 'react';
import fm1Image from '../tes.jpg';
import fm2Image from '../tes1.jpg';

const UlasanList = ({ title, description, imageUrl }) => {
    return (
        <div id ='testi'className="Ulasan">
            <img src={imageUrl} alt={title} className="Ulasan-image" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

const Ulasan = () => {
    const ulasanData = [
        {
            imageUrl: fm1Image,
        },
        {
            imageUrl: fm2Image,
        },
        // Anda bisa menambahkan lebih banyak ulasan di sini
    ];

    return (
        <div className="UlasanList">
            <h1>ULASAN PELANGGAN</h1>
            {ulasanData.map((ulasan, index) => (
                <UlasanList
                    key={index} 
                    title={ulasan.title} 
                    description={ulasan.description} 
                    imageUrl={ulasan.imageUrl} 
                />
            ))}
        </div>
    );
};

export default Ulasan;
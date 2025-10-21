import React from 'react'
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import FeatureSection from '../components/FeatureSection';

export default function Home() {
  return (
    <><section className="text-center py-2">
        <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to ThriftStore!
        </h1>
        
    </section>
    <HeroSection />
    <br />
    <ProductGrid products={[
     { id: 11, name: "Vintage Thrift Shirt", price: 2500, image: "/TH.1.JPG" },
    { id: 12, name: "Casual Thrift Shirt", price: 2500, image: "/TH.2.JPG" },
    { id: 13, name: "New Balance Shoes", price: 5500, image: "/TH.4.JPG" },
    { id: 14, name: "Nike Tech", price: 5500, image: "/NT.1.avif" },
    { id: 15, name: "Calvin Klein Men Boxers", price: 500, image: "/CK.1.webp" },
    { id: 16, name: "Calvin Klein Women Jacket", price: 4000, image: "/SPJ.webp" },
    { id: 17, name: "Calvin Klein Monogram Sweatpants", price: 4000, image: "/MS.webp" },
    { id: 19, name: "Icon Cotton Modal Bikini", price: 4500, image: "/ICMB.webp" },
    ]} />
    <br />

    <FeatureSection />
  
    </>
  );
}

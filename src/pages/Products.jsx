import ProductCard from "../components/ProductCard";

export default function Products() {
  const sampleProducts = [
    { id: 1, name: "Nike Sneakers", price: 6500, image: "/AIR.avif" },
    { id: 2, name: "Blue Nike Pants", price: 3200, image: "/B.PANT.avif" },
    {id: 3, name: "New Balance Shoes", price: 10000, image: "/TH.5.JPG" },
    { id: 4, name: "Nike Tech Hoodie", price: 4000, image: "/NT.2.H.avif" },
    { id: 5, name: "Godspeed Thrift Shirt", price: 10000, image: "/TH.3.JPG" },
    { id: 6, name: "Nike Tech Baggy Hoodie", price: 4500, image: "/NT.3.H.avif" },
    { id: 7, name: "Adidas Crew KIds Set", price: 8000, image: "/ACS.avif" },
    { id: 8, name: "Adidas Fleece Sweatpants", price: 4500, image: "/AFS.avif" },
    { id: 9, name: "Adidas Campus 00s Beta Shoes", price: 8500, image: "/ACSH.avif" },
    {id: 10, name: "Nike Tech", price: 2500, image: "/NT.3.avif" },
    { id: 11, name: "Vintage Thrift Shirt", price: 2500, image: "/TH.1.JPG" },
    { id: 12, name: "Casual Thrift Shirt", price: 2500, image: "/TH.2.JPG" },
    { id: 13, name: "New Balance Shoes", price: 5500, image: "/TH.4.JPG" },
    { id: 14, name: "Nike Tech", price: 5500, image: "/NT.1.avif" },
    { id: 15, name: "Calvin Klein Men Boxers", price: 500, image: "/CK.1.webp" },
    { id: 16, name: "Calvin Klein Women Jacket", price: 4000, image: "/SPJ.webp" },
    { id: 17, name: "Calvin Klein Monogram Sweatpants", price: 4000, image: "/MS.webp" },
    { id: 18, name: "Calvin Klein Mettalic Knit Beanie", price: 2000, image: "/MNB.webp" },
    { id: 19, name: "Icon Cotton Modal Bikini", price: 4500, image: "/ICMB.webp" },
    { id: 20, name: "Classic Trucker Jacket", price: 5500, image: "/CTJ.webp" },
    { id: 21, name: "Raised Logo Round Backpack", price: 6000, image: "/RLRB.webp" },
    { id: 22, name: "Utility Reporter Bag", price: 5000, image: "/URB.webp" },
    { id: 23, name: "Sherpa Shoulder Bag", price: 6500, image: "/SSB.webp" },
    { id : 24, name: "Foil Logo Tote Bag", price: 9000, image: "/FLTB.webp" },
    { id: 25, name: "Frogging Embroidery Leather Jacket", price: 30000, image: "/FELJ.avif" },
    { id: 26, name: "Nike Cortez By You", price: 9000, image: "/custom-nike-cortez-by-you.avif" },
    { id: 27, name: "New Balance Skirt", price: 4000, image: "/NBS.webp" },
    { id: 28, name: "Alice+Olivia Casual Dress", price: 7000, image: "/A0.webp" },
    { id: 29, name: "Tory Burch Wool Cardigan", price: 5000, image: "/TB.webp" },
    { id: 30, name: "Maeve by Anthropologie Casual Dress", price: 5000, image: "/MbA.webp" },
    { id: 31, name: "XTI Size 8 Boots", price: 4000, image: "/XTI.webp" },
    { id: 32, name: "Free People Faux Leather Skirt", price: 4000, image: "/FLS.webp" },
  { id: 33, name: "Free People Pullover Sweater", price: 5000, image: "/PS.jpg" },
  { id: 34, name: "Lululenon Athletica Dress Pants", price: 7500, image: "/DP.webp" },
  { id: 35, name: "Coach One Size Shoulder Bag", price: 3000, image: "/CB.webp" },
  { id: 36, name: "Adidas Kids Track Pants ", price: 5000, image: "/ATP.jpg" },
  { id: 37, name: "Under Armour Size 2 Baby Sneakers", price: 4000, image: "/UA.webp" },
  { id: 38, name: "Air Jordan Medium Casual Pants", price: 3000, image: "/JCP.jpg" },
  { id: 39, name: "Lululemon Athletica Belt Bag", price: 4500, image: "/BB.webp" },
  { id: 40, name: "Metallic New Balance Hoodie ", price: 4000, image: "/MNB.2.webp" }, 
  { id: 41, name: "Burberry Brown Leather Briefcase Bag", price: 7000, image: "/BLBB.jpg" },
  { id: 42, name: "Nike Training Crew Socks", price: 1000, image: "/NS.png" },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
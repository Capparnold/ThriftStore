import ProductCard from "../components/ProductCard";

export default function Products() {
  const sampleProducts = [
    { id: 1, name: "Nike Sneakers", price: 6500, image: "/public/AIR.avif" },
    { id: 2, name: "Blue Nike Pants", price: 3200, image: "/public/B.PANT.avif" },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
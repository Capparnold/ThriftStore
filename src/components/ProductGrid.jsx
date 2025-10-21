import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-300 text-center mb-8">Featured Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
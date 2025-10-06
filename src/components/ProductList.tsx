import { ProductCard } from "./ProductCard";

const products = [
  { name: "iTunes(Apple)", price: "1$", icon: "🍎" },
  { name: "Steam", price: "1$", icon: "🎮" },
  { name: "Razer Gold", price: "1$", icon: "🐍" },
  { name: "Xbox", price: "1$", icon: "🎯" },
  { name: "eBay", price: "1$", icon: "🛒" },
  { name: "Sephora", price: "1$", icon: "💄" },
  { name: "Vanilla", price: "1$", icon: "🍦" },
];

export const ProductList = () => {
  return (
    <div className="mx-4 space-y-3 pb-24">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          price={product.price}
          icon={product.icon}
        />
      ))}
    </div>
  );
};

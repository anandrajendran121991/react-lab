import { useState } from "react";
import type { Product } from "../../interface/Ecommerce";
import Card from "./Card";
import Cart from "./Cart"; // ✅ use your Cart component

function List() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Laptop",
      description:
        "Powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for work and play.",
      url: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      price: 4000,
    },
    {
      id: 2,
      name: "Phone",
      description:
        "Flagship smartphone with AMOLED display, triple camera system, and 5G connectivity.",
      url: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      price: 1500,
    },
    {
      id: 3,
      name: "iPad",
      description:
        "Apple iPad with 10.2-inch Retina display, A13 Bionic chip, and Apple Pencil support.",
      url: "https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg",
      price: 2000,
    },
  ]);

  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ add product to cart
  const addToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product && !cart.find((c) => c.id === id)) {
      setCart([...cart, product]);
    }
  };

  // ✅ remove product from cart
  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            🛍️ Product Store
          </h1>

          {/* Cart Icon (clickable) */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 2.293a1 1 0 00.707 1.707H19m0 0a2 2 0 11-4 0m4 0a2 2 0 104 0"
              />
            </svg>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Available Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              inCart={cart.some((c) => c.id === product.id)}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      {/* ✅ Use Cart component */}
      {isCartOpen && (
        <Cart
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
}

export default List;

import type { CardProps } from "../../interface/Ecommerce";

function Card({ product, inCart, addToCart }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          src={product.url}
          alt={product.name}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-52">
        <div>
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {product.name}
          </h5>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product.id)}
            disabled={inCart}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
              inCart
                ? "bg-green-600 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {inCart ? "✓ Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

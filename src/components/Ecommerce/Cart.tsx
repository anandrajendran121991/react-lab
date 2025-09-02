import type { CartProps } from "../../interface/Ecommerce";

function Cart({ cart, onClose, onRemove }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl flex flex-col z-[9999]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          ✕
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">
            Your cart is empty 🛒
          </p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover shadow"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-4 border-t bg-gray-50 sticky bottom-0">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

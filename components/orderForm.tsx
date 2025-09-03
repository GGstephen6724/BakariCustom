// components/OrderForm.tsx
export default function OrderForm() {
  return (
    <form className="max-w-md mx-auto flex flex-col gap-4 bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Schedule Your Order</h2>
      <input type="text" placeholder="Name" className="p-2 rounded border" />
      <input type="email" placeholder="Email" className="p-2 rounded border" />
      <input type="tel" placeholder="Phone" className="p-2 rounded border" />
      <input type="date" className="p-2 rounded border" />
      <textarea placeholder="Order Details" className="p-2 rounded border"></textarea>
      <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold p-2 rounded">
        Submit
      </button>
    </form>
  );
}
"use client";

import { useState } from "react";
import Navbar from "../../../components/navbar";

export default function OrderFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    notes: "",
  });


  // Add more menu items here
  const products = [
    "Chocolate Chip Cookies",
    "S'mores Brownie",
    "Cowboy Sweet Rolls",
    "Chocolate Peanut Butter Swirl Brownies",
    "Browned butter banana nut chocolate chip coffee cake muffin",
    "Chai pumpkin spice cakes",
    "Honey Lavender Cheesecake",
    "Chocolate Swirl Cheesecake",
    "Baguette",
    "Custom Birthday Cake",
    "Macarons",
    "Bagels",
    "Custom Wedding Cake",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Order submitted!"); // later you can replace with API call
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        {/* Navbar */}
        <Navbar />

        {/* Order Form */}
        <div className="mt-24 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Schedule an Order</h1>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Product Dropdown */}
        <div className="flex flex-col">
        <label htmlFor="product" className="mb-2">What would you like?</label>
        <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
            <option value="" className="text-gray-400">Select a product</option>
            {products.map((p) => (
            <option key={p} value={p} className="text-black">{p}</option>
            ))}
        </select>

        {/* Conditional note */}
        {(formData.product === "Custom Birthday Cake" ||
        formData.product === "Custom Wedding Cake") && (
        <p className="mt-2 text-sm text-yellow-300">
            For custom cakes, please use the “Special Notes” section below to describe exactly what you’d like. This helps me create your perfect cake!
        </p>
        )}
        </div>

        {/* Special Notes */}
        <div className="flex flex-col">
          <label htmlFor="notes" className="mb-2">Special Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 transition rounded-xl py-3 font-semibold text-white"
        >
          Submit Order
        </button>
      </form>
      </div>
    </main>
  );
}

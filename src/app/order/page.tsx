"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OrderFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    notes: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await res.json(); // safely parse JSON
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        alert("Something went wrong. Please try again.");
        return;
      }

      if (data.success) {
        alert("Order submitted! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", product: "", notes: "" });
      } else {
        alert("Error submitting order: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8 relative">

      {/* Logo in top-left (from Navbar) */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="BakariCustom Logo"
            width={80}
            height={80}
            className="h-auto w-16 sm:w-20"
          />
        </Link>
      </div>

      {/* Order Form */}
      <div className="mt-24 flex justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 sm:space-y-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Schedule an Order</h1>

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
              className="p-3 rounded-lg bg-white/20 border border-white/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="p-3 rounded-lg bg-white/20 border border-white/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="p-3 rounded-lg bg-white/20 border border-white/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="p-3 rounded-lg bg-white/20 border border-white/30 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="" className="text-gray-400">Select a product</option>
              {products.map((p) => (
                <option key={p} value={p} className="text-black">{p}</option>
              ))}
            </select>

            {(formData.product === "Custom Birthday Cake" ||
              formData.product === "Custom Wedding Cake") && (
              <p className="mt-2 text-sm sm:text-base text-yellow-300">
                For custom cakes, please use the “Special Notes” section below to describe
                exactly what you’d like. This helps me create your perfect cake!
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
              className="p-3 rounded-lg bg-white/20 border border-white/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition rounded-xl py-3 font-semibold text-white text-sm sm:text-base"
          >
            Submit Order
          </button>
        </form>
      </div>
    </main>
  )
}

"use client";

import { useState } from "react";
import Button from "../Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="inquiryType"
              value="sayHi"
              className="text-green-500"
              onChange={handleInputChange}
            />
            <span>Say Hi</span>
          </label>
        </div>
        <div className="flex-1">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="inquiryType"
              value="getQuote"
              className="text-green-500"
              onChange={handleInputChange}
            />
            <span>Get a Quote</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-4 border border-black rounded-lg"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-4 border border-black rounded-lg"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message*</label>
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="w-full p-4 border border-black rounded-lg resize-none"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>

      <Button type="submit" variant="primary" size="lg">
        Send Message
      </Button>
    </form>
  );
}

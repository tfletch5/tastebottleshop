"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import doubleGlassImage from "../assets/double-glass.jpg";

const MailingList = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="bg-white w-full">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={doubleGlassImage}
            alt="Wine glasses"
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-md w-full space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#990000] mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#990000]">
                JOIN OUR MAILING LIST!
              </h2>
              <p className="text-gray-700 text-lg">
                We will send you updates on new products and events.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#990000] focus:ring-2 focus:ring-[#990000]/20 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#990000] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#880000] transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailingList;

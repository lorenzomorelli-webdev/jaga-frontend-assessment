"use client";

import React from 'react';

interface FooterProps {
  // Define your props here
}

export default function FooterNavbar(props: FooterProps) {
  return (
    <footer className="w-full py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Add your footer content here */}
          <p className="text-gray-600">© 2024 Product Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

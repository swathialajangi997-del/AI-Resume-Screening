import React, { useState } from "react";
import Logo from "./Logo";
import Upload from "./Upload";

export default function Navbar() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-3 items-center">
          <button
            className="px-3 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
            onClick={() => setShowUpload(!showUpload)}
          >
            Upload
          </button>
          <button className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Conditional rendering for Upload Component */}
      {showUpload && <Upload />}
    </div>
  );
}

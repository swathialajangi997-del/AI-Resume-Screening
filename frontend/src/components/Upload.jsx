import React from "react";

export default function Upload() {
  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-xl mt-4 shadow-lg border border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-blue-400">Upload Resumes</h2>
      <div className="flex flex-col gap-3">
        <input
          type="file"
          multiple
          className="bg-[#1e293b] border border-gray-600 p-3 rounded-lg text-sm text-gray-300 cursor-pointer"
        />
        <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">
          Submit
        </button>
      </div>
    </div>
  );
}

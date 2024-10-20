import { useState } from "react";

export default function Extrainput() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 my-5 rounded-lg shadow-lg p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">
        Hi there, <span className="text-purple-600">John</span>
      </h1>
      <h2 className="text-xl mb-8">What would you like to know?</h2>

      {/* Prompt Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <p className="text-lg font-semibold">Write a to-do list for a personal project or task</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <p className="text-lg font-semibold">Generate an email to reply to a job offer</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <p className="text-lg font-semibold">Summarise this article or text for me in one paragraph</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <p className="text-lg font-semibold">How does AI work in a technical capacity</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-4xl">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
          placeholder="Ask whatever you want..."
          rows="3"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
              Add Attachment
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
              Use Image
            </button>
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

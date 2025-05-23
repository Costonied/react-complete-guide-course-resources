import { useState } from "react";

export default function ProjectCreateForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <form className="max-w-7xl mx-auto mt-10 p-8">
      <div className="flex justify-end items-center mb-6">
        <button type="button" className="text-gray-700 mr-2 hover:underline">Cancel</button>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded shadow-none hover:bg-gray-800 transition">Save</button>
      </div>
      <div className="mb-4">
        <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="dueDate">
          Due Date
        </label>
        <div className="relative">
          <input
            id="dueDate"
            type="date"
            placeholder="dd.mm.yyyy"
            className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800 pr-10"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
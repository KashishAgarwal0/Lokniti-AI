import { useState } from "react";
import { FaUser, FaCog, FaHistory, FaFolder } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-5 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Lokniti</h1>
        <nav className="flex flex-col gap-3">
          <button className="flex items-center gap-2"><FaUser /> Profile</button>
          <button className="flex items-center gap-2"><FaCog /> Settings</button>
          <button className="flex items-center gap-2"><FaHistory /> Search History</button>
          <button className="flex items-center gap-2"><FaFolder /> Cases</button>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2">
            <Button className="bg-blue-500">Upload</Button>
            <Button className="bg-green-500">Capture</Button>
            <Button className="bg-purple-500">Voice</Button>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Search Results</h2>
          <div className="bg-gray-800 p-4 mt-2 rounded">
            <h3 className="font-semibold">Case Title #1</h3>
            <p className="text-sm text-gray-400">Brief description of the case and its details...</p>
          </div>
          <div className="bg-gray-800 p-4 mt-2 rounded">
            <h3 className="font-semibold">Case Title #2</h3>
            <p className="text-sm text-gray-400">Brief description of the case and its details...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

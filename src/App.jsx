import { useState } from "react";
import "./index.css";

const trips = [
  {
    id: 1,
    title: "Surfing at Kuta Beach",
    text: "Catch the waves at Bali’s most famous surf spot.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    type: "Surfing",
  },
  {
    id: 2,
    title: "White Water Rafting in Ubud",
    text: "Feel the rush as you navigate Bali’s scenic rivers.",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    type: "Rafting",
  },
  {
    id: 3,
    title: "Mount Batur Volcano Hike",
    text: "Watch the sunrise from above the clouds.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    type: "Volcano Hikes",
  },
  {
    id: 4,
    title: "Beginner Surf Camp in Canggu",
    text: "Learn to surf with expert instructors.",
    image:
      "https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    type: "Surfing",
  },
  {
    id: 5,
    title: "Ayung River Adventure",
    text: "An exciting rafting journey through lush rainforests.",
    image:
      "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    type: "Rafting",
  },
  {
    id: 6,
    title: "Volcano Trek + Hot Springs",
    text: "Relax in natural hot springs after your climb.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    type: "Volcano Hikes",
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredTrips =
    filter === "All" ? trips : trips.filter((t) => t.type === filter);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-2">
        Bali Adventure Trips
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Find the perfect adventure for your next getaway
      </p>

      <div className="flex justify-center mb-10">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
          <option>All</option>
          <option>Surfing</option>
          <option>Rafting</option>
          <option>Volcano Hikes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{trip.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{trip.text}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Deals
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

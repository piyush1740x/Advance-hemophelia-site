import React from "react";
import { useNavigate } from "react-router-dom";

const meetingsData = [
  {
    id: 1,
    name: "Hemophilia Awareness Workshop",
    date: "2024-01-15",
    distribution: "Distribution of pamphlets, educational materials, and medical kits.",
    image: "/images/meeting1.jpg",
    details: "This workshop was aimed at spreading awareness about Hemophilia and providing medical kits to patients.",
  },
  {
    id: 2,
    name: "Hemophilia Support Group Meeting",
    date: "2024-03-10",
    distribution: "Distribution of support group guidelines and emotional support materials.",
    image: "/images/meeting2.jpg",
    details: "A meeting to provide emotional support and share resources with Hemophilia patients and their families.",
  },
  {
    id: 3,
    name: "Annual Hemophilia Fundraiser",
    date: "2024-06-25",
    distribution: "Funds raised for treatment and awareness campaigns.",
    image: "/images/meeting3.jpg",
    details: "A fundraiser to support Hemophilia treatments and awareness campaigns across the country.",
  },
];

const Meetings = () => {
  const navigate = useNavigate(); // Hook to navigate to the meeting details page

  const handleViewDetails = (id) => {
    navigate(`/meeting/${id}`); // Navigate to the detailed page of the selected meeting
  };

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Meetings & Events</h2>
        <p className="text-lg text-gray-700 mb-12">
          Below are the details of our past meetings and events where we spread
          awareness and support for Hemophilia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetingsData.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meeting.image}
                alt={meeting.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {meeting.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong> {meeting.date}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Distribution:</strong> {meeting.distribution}
                </p>
                <button
                  onClick={() => handleViewDetails(meeting.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetings;

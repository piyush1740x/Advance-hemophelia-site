import React from "react";

// Function to format the date in a readable format
const formatDate = (date) => {
  return new Intl.DateTimeFormat("hi-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
};

const NextMeeting = () => {
  // Hardcoded timetable data with date, time, month, year, and detailed info
  const meetings = [
    {
      date: new Date("2024-12-30T10:00:00"),
      title: "अगली बैठक",
      description: "यह बैठक अगले प्रोजेक्ट की रणनीतियों पर चर्चा करने के लिए है।",
    },
  ];

  return (
    <section id="next-meeting" className="py-16  bg-red-50">
      <div className="container mx-auto px-4 anm3">
        {/* Meetings List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {meeting.title}
              </h3>
              <hr />
              <p className="text-lg text-gray-600 mb-4">
                {meeting.description}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                बैठक {formatDate(meeting.date)} को होगी।
              </p>

              {/* Button to add to calendar */}
              <a
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  meeting.title
                )}&dates=${meeting.date
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "")}/${meeting.date
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                अपने कैलेंडर में जोड़ें{" "}
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextMeeting;

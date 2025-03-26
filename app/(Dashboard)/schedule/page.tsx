"use client";

import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  PlusIcon,
  X,
  Edit,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  type: "Stream" | "Event";
  date: Date;
  startTime: string;
  endTime: string;
  description?: string;
  location?: string;
  store?: string;
  products?: { name: string; price: number }[];
  color: string;
}

export default function CalendarSchedulingApp() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Modified to load events from localStorage on initial render
  const [events, setEvents] = useState<Event[]>(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("calendarEvents");
      if (savedEvents) {
        // Parse saved events and convert date strings back to Date objects
        return JSON.parse(savedEvents).map((event: Event) => ({
          ...event,
          date: new Date(event.date),
        }));
      }
    }
    // Default events if nothing is saved
    return [
      {
        id: "1",
        title: "Product Launch Stream",
        type: "Stream",
        date: new Date(2028, 3, 3),
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        description: "Spring Collection Stream",
        location: "Online",
        store: "Jessica Carter",
        products: [
          { name: "Hair Cleanser", price: 29 },
          { name: "Hair Conditioner", price: 29 },
        ],
        color: "bg-orange",
      },
    ];
  });

  // Effect to save events to localStorage whenever events change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("calendarEvents", JSON.stringify(events));
    }
  }, [events]);

  const validateEvent = (event: Event) => {
    const errors: { [key: string]: string } = {};

    // Title validation
    if (!event.title.trim()) {
      errors.title = "Title is required";
    }

    // Date validation
    if (!event.date) {
      errors.date = "Date is required";
    }

    // Time validation
    if (!event.startTime) {
      errors.startTime = "Start time is required";
    }
    if (!event.endTime) {
      errors.endTime = "End time is required";
    }
    if (event.startTime && event.endTime) {
      const start = new Date(`2000-01-01T${event.startTime}`);
      const end = new Date(`2000-01-01T${event.endTime}`);
      if (end <= start) {
        errors.endTime = "End time must be after start time";
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEventChange = (field: keyof Event, value: string | Date) => {
    if (editingEvent) {
      setEditingEvent({
        ...editingEvent,
        [field]: value,
      });
      // Clear validation error for the field being edited
      if (validationErrors[field as string]) {
        const newErrors = { ...validationErrors };
        delete newErrors[field as string];
        setValidationErrors(newErrors);
      }
    }
  };

  const handleSaveEvent = () => {
    if (editingEvent) {
      // Validate the event before saving
      if (!validateEvent(editingEvent)) {
        return;
      }

      if (editingEvent.id) {
        // Update existing event
        const updatedEvents = events.map((event) =>
          event.id === editingEvent.id ? editingEvent : event
        );
        setEvents(updatedEvents);
      } else {
        // Add new event
        const newEvent = {
          ...editingEvent,
          id: `event-${Date.now()}`,
          color: editingEvent.type === "Stream" ? "bg-orange" : "bg-purple-100",
        };
        setEvents([...events, newEvent]);
      }

      setIsModalOpen(false);
      setEditingEvent(null);
      setValidationErrors({});
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter(
        (event) => event.id !== selectedEvent.id
      );
      setEvents(updatedEvents);
      setSelectedEvent(null);
      setIsModalOpen(false);
    }
  };

  const renderCalendarDays = () => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });

    return (
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-500 p-2">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const eventsForDay = events.filter(
            (event) => event.date.toDateString() === day.toDateString()
          );
          return (
            <div
              key={day.toString()}
              className="border p-2 h-36 relative cursor-pointer hover:bg-gray-50 overflow-auto"
              onClick={() => {
                setEditingEvent({
                  id: "",
                  title: "",
                  type: "Event",
                  date: day,
                  startTime: "",
                  endTime: "",
                  description: "",
                  location: "",
                  store: "",
                  products: [],
                  color: "bg-orange",
                });
                setIsModalOpen(true);
                setValidationErrors({});
              }}
            >
              <span className="absolute top-1 left-1 text-sm font-semibold">
                {day.getDate()}
              </span>
              {eventsForDay.map((event) => (
                <div
                  key={event.id}
                  className={`${event.color} rounded-lg p-2 mt-1 text-xs space-y-1`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                  }}
                >
                  <div className="font-bold truncate">{event.title}</div>
                  <div className="flex items-center space-x-1">
                    <Clock size={10} />
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="text-[10px] opacity-75 truncate">
                    {event.description}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  const renderEventSidebar = () => {
    if (!selectedEvent) return null;

    return (
      <div className="w-96 bg-white border-l p-6 fixed right-0 top-0 bottom-0 shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{selectedEvent.title}</h2>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => {
                setEditingEvent(selectedEvent);
                setIsModalOpen(true);
              }}
            >
              <Edit size={20} />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => setSelectedEvent(null)}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span
              className={`px-2 py-1 rounded text-xs ${selectedEvent.color}`}
            >
              {selectedEvent.type}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock size={16} />
              <span>
                {selectedEvent.startTime} - {selectedEvent.endTime}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16} />
              <span>{selectedEvent.location || "No location"}</span>
            </div>
          </div>

          {selectedEvent.description && (
            <div>
              <strong className="block mb-1">Description:</strong>
              <p className="text-gray-700 bg-gray-50 p-2 rounded">
                {selectedEvent.description}
              </p>
            </div>
          )}

          {selectedEvent.products && (
            <div>
              <strong className="block mb-2">Products:</strong>
              <div className="space-y-1">
                {selectedEvent.products.map((product) => (
                  <div
                    key={product.name}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <span className="font-medium">{product.name}</span>
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign size={14} />
                      <span>{product.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderEventModal = () => {
    const event = editingEvent || {
      id: "",
      title: "",
      type: "Event" as const,
      date: new Date(),
      startTime: "",
      endTime: "",
      description: "",
      location: "",
      store: "",
      products: [],
      color: "bg-orange",
    };

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isModalOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => {
            setIsModalOpen(false);
            setEditingEvent(null);
            setValidationErrors({});
          }}
        ></div>
        <div className="bg-white p-6 rounded-lg z-60 w-[500px] relative shadow-xl">
          <button
            className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-1"
            onClick={() => {
              setIsModalOpen(false);
              setEditingEvent(null);
              setValidationErrors({});
            }}
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            {editingEvent?.id ? "Edit Event" : "Create New Event"}
          </h2>

          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Event Title"
                className={`w-full p-2 border rounded focus:ring-2 ${
                  validationErrors.title
                    ? "border-red-500 focus:ring-red-200"
                    : "focus:ring-orange"
                }`}
                value={event.title}
                onChange={(e) => handleEventChange("title", e.target.value)}
              />
              {validationErrors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.title}
                </p>
              )}
            </div>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-orange"
              value={event.type}
              onChange={(e) =>
                handleEventChange("type", e.target.value as "Event" | "Stream")
              }
            >
              <option value="Event">Event</option>
              <option value="Stream">Stream</option>
            </select>
            <div>
              <input
                type="date"
                className={`w-full p-2 border rounded focus:ring-2 ${
                  validationErrors.date
                    ? "border-red-500 focus:ring-red-200"
                    : "focus:ring-orange"
                }`}
                value={format(event.date, "yyyy-MM-dd")}
                onChange={(e) =>
                  handleEventChange("date", new Date(e.target.value))
                }
              />
              {validationErrors.date && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.date}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <div className="w-full">
                <label className="block text-sm mb-1 text-gray-600">
                  Start Time
                </label>
                <input
                  type="time"
                  className={`w-full p-2 border rounded focus:ring-2 ${
                    validationErrors.startTime
                      ? "border-red-500 focus:ring-red-200"
                      : "focus:ring-orange"
                  }`}
                  value={event.startTime}
                  onChange={(e) =>
                    handleEventChange("startTime", e.target.value)
                  }
                />
                {validationErrors.startTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.startTime}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1 text-gray-600">
                  End Time
                </label>
                <input
                  type="time"
                  className={`w-full p-2 border rounded focus:ring-2 ${
                    validationErrors.endTime
                      ? "border-red-500 focus:ring-red-200"
                      : "focus:ring-orange"
                  }`}
                  value={event.endTime}
                  onChange={(e) => handleEventChange("endTime", e.target.value)}
                />
                {validationErrors.endTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.endTime}
                  </p>
                )}
              </div>
            </div>
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-orange"
              rows={3}
              value={event.description}
              onChange={(e) => handleEventChange("description", e.target.value)}
            ></textarea>

            <div className="flex space-x-2">
              <button
                className="w-full bg-orange text-white p-2 rounded hover:bg-orange transition-colors"
                onClick={handleSaveEvent}
              >
                {editingEvent?.id ? "Update Event" : "Create Event"}
              </button>
              {editingEvent?.id && (
                <button
                  className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                  onClick={handleDeleteEvent}
                >
                  Delete Event
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <button
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          >
            <ChevronRight />
          </button>
          <span className="text-xl font-semibold">
            {format(currentDate, "MMMM yyyy")}
          </span>
        </div>
        <div className="flex space-x-2">
          {(["day", "week", "month"] as const).map((mode) => (
            <button
              key={mode}
              className={`px-4 py-2 rounded ${
                viewMode === mode ? "bg-orange text-white" : "bg-gray-100"
              }`}
              onClick={() => setViewMode(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
          <button
            className="bg-orange text-white px-4 py-2 rounded flex items-center hover:bg-orange transition-colors"
            onClick={() => {
              setEditingEvent({
                id: "",
                title: "",
                type: "Event",
                date: new Date(),
                startTime: "",
                endTime: "",
                description: "",
                location: "",
                store: "",
                products: [],
                color: "bg-orange",
              });
              setIsModalOpen(true);
            }}
          >
            <PlusIcon className="mr-2" /> New Schedule
          </button>
        </div>
      </div>

      {renderCalendarDays()}

      {selectedEvent && renderEventSidebar()}
      {isModalOpen && renderEventModal()}
    </div>
  );
}

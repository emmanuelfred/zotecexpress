import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io"; // Importing an icon for notifications
import { Link } from 'react-router-dom'
import './NotificationDropdown.css'
const notifications = [
  { id: 1, subject: "Order Shipped", date: "Feb 28, 2025", time: "10:30 AM" },
  { id: 2, subject: "Payment Received", date: "Feb 27, 2025", time: "2:00 PM" },
  { id: 3, subject: "New Message", date: "Feb 26, 2025", time: "5:45 PM" },
];

const NotificationDropdown = () => {
  return (
    <div className="dropdown">
      {/* Notification Bell Icon */}
      <Link data-bs-toggle="dropdown"aria-expanded="false" className="notification">
       
        <IoMdNotificationsOutline size={27} />
        {notifications.length > 0 && (
          <span >
            {/*notifications.length*/}
          </span>
        )}
      </Link>

      {/* Dropdown Menu */}
      <ul className="dropdown-menu dropdown-menu-end p-2 shadow" style={{ width: "300px" }}>
        <li><h6 className="dropdown-header">Notifications</h6></li>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className="dropdown-item">
              <strong>{notification.subject}</strong>
              <br />
              <small className="text-muted text-end">{notification.date} | {notification.time}</small>
            </li>
          ))
        ) : (
          <li className="dropdown-item text-muted">No new notifications</li>
        )}
      </ul>
    </div>
  );
};

export default NotificationDropdown;

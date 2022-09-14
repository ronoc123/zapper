import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  ManageProject,
  ManageRole,
  MyTickets,
  Register,
  UserProfile,
  Home,
  Error,
  ProtectedRoute,
  AddProject,
  SharedLayout,
  SingleProjectPage,
  AddTicket,
  AddDevToProject,
  AddDevToTicket,
  SingleTicketPage,
  EditProject,
  EditTicket,
  AboutPage,
} from "./pages/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="role" element={<ManageRole />} />
            <Route path="ticket" element={<MyTickets />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="addproject" element={<AddProject />} />
            <Route path="project" element={<ManageProject />} />
            <Route path="addticket/:id" element={<AddTicket />} />
            <Route path="project/:id" element={<SingleProjectPage />} />
            <Route path="projectdev/:id" element={<AddDevToProject />} />
            <Route path="ticketdev/:id" element={<AddDevToTicket />} />
            <Route path="singleticket/:id" element={<SingleTicketPage />} />
            <Route path="editproject/:id" element={<EditProject />} />
            <Route path="editticket/:id" element={<EditTicket />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

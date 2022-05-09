import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ isAllowed }) {
  return isAllowed ? <Outlet /> : <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
};

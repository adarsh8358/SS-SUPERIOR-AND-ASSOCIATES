import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LowercaseRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lower = location.pathname.toLowerCase();

    if (location.pathname !== lower) {
      navigate(lower, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}

export default LowercaseRedirect;
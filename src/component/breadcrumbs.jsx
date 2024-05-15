import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="px-5 py-3 text-white">
      <ol className="list-reset flex">
        <li>
          <Link to="/Dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        {pathnames.length > 0 && pathnames[0] !== "Dashboard" && (
          <>
            <span className="mx-2">/</span>
            <li>
              <span className="text-white capitalize">{pathnames[0]}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

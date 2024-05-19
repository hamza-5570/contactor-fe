import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="px-5 py-3 text-white">
      <ol className="list-reset flex">
        <li>
          <Link to="/Panel" className="text-white hover:text-gray-300">
            Panel
          </Link>
        </li>
        {pathnames.length > 0 && pathnames[0] !== "Panel" && (
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

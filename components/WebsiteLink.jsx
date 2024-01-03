import React from "react";
import { Link } from "@mui/material";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { logEvent, CATEGORY } from "../utils/analytics";

const WebsiteLink = ({ href, label, color }) => (
  <Link
    href={href}
    target="_blank"
    color={color}
    rel="noopener noreferrer"
    onClick={() => {
      logEvent(CATEGORY.LINK_CLICKED, href);
    }}
  >
    {label} <OpenInNew fontSize="inherit" />
  </Link>
);

WebsiteLink.defaultProps = {
  href: "",
  label: "",
  color: "primary",
};

export default WebsiteLink;

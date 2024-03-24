import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import "./Styles.scss";
import { Links } from "./data";
import { EasterEgg } from "../easter-egg/EasterEgg";
import { isEasterHoliday } from "../../utils/isEasterHoliday";

export const Header = () => {
  const [selectedSection, setSelectedSection] = useState<string>("/");
  const notify = () => toast("Happy Easter!");
  return (
    <header>
      <h1>Don Jeere</h1>
      <nav>
        <ul>
          {Links.map(({ friendly, href }) => (
            <Link
              key={href}
              className={selectedSection === href ? "link-active" : "link"}
              onClick={() => setSelectedSection(href)}
              href={href}
            >
              {friendly}
            </Link>
          ))}
          {/*Easter Egg*/}
          {isEasterHoliday({ currentTimeStamp: new Date().getTime() }) && (
            <EasterEgg handleClick={notify} />
          )}
        </ul>
      </nav>
    </header>
  );
};

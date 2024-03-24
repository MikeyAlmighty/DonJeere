import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import "./Styles.scss";
import { Links } from "./data";
import { EasterEgg } from "../easter-egg/EasterEgg";
import {useEaster} from "../../context/EasterContext";

export const Header = () => {
  const [selectedSection, setSelectedSection] = useState<string>("/");
  const isEaster = useEaster();

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
          {
              isEaster && (<EasterEgg handleClick={notify} />
          )}
        </ul>
      </nav>
    </header>
  );
};

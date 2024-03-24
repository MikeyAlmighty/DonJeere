import Image from "next/image";

import "./Style.scss";

export const Convoy = () => (
  <span className="convoy-container">
    <Image
      src={"/tractor.svg"}
      alt="Tractor Logo"
      height={350}
      aria-label="Tractor Logo"
      width={200}
      className="tractor"
    />
  </span>
);

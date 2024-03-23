import Image from "next/image";

import "./Style.scss"

export const Convoy = () => (
  <span className="convoy-container">
     <Image
         src={'/tractor.svg'}
         alt='Tractor SVG Icon'
         height={350}
         width={200}
         className="tractor"
     />
  </span>
)
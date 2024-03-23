import Image from "next/image";

interface EasterEggProps {
    handleClick: () => void
}

export const EasterEgg = ({ handleClick }: EasterEggProps) => (
    <Image
        width={35}
        height={50}
        src={"/easter-egg.svg"}
        alt={"Easter Egg SVG Icon"}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
    />
);
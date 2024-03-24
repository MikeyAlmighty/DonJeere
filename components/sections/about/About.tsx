import "./Styles.scss";
import Image from "next/image";

import { Bubble } from "../../bubble/Bubble";

export const About = () => (
  <span id="about">
    <p className="heading">About Us</p>
    <span className="aboutContainer">
      <p className="text-left">
        Welcome to <text className="highlight-word-primary">Don Jeere</text>! At{" "}
        <text className="highlight-word-primary">Don Jeere</text>, we're driven
        by a passion for agriculture and a commitment to providing top-quality
        tractors and agricultural equipment to farmers worldwide. Our journey
        began over 2 years ago, rooted in the heart of the farming community,
        with a vision to revolutionize the way farmers work the land. We pride
        ourselves on our heritage of innovation and reliability. Our team of
        engineers and agricultural experts work tirelessly to design and
        manufacture tractors that are not just powerful and efficient, but also
        durable and easy to maintain. With a focus on cutting-edge technology
        and sustainable practices, we ensure that our tractors meet the evolving
        needs of modern farming while minimizing their environmental footprint.
      </p>
      <Image
        src="https://picsum.photos/500/600"
        alt="Random Image from Picsum"
        aria-label="Random Image from Picsum"
        className={"image-container"}
        width={500}
        height={600}
      />
    </span>
    <span className="bubble-container">
      <Bubble text={"Friendly Team"} />
      <Bubble primary={false} text={"24/7 Assistance"} />
      <Bubble text={"Involved"} />
    </span>
  </span>
);

import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "DSTM Systems Website",
    img: "DSTm.png",
    desc: "Explore innovative solutions at DSTM Systems, where cutting-edge technology meets reliable service. From software development to IT consulting, we deliver excellence tailored to your business needs. Visit us today!",
  },
  {
    id: 2,
    title: "ApricotInn Hotel Website",
    img: "APRICOT.png",
    desc: "Indulge in serene hospitality at Apricot Inn. Our boutique hotel offers luxurious accommodations, personalized service, and unforgettable experiences amidst breathtaking surroundings. Book your stay for an exquisite getaway.",
  },
  {
    id: 3,
    title: "Telegram Landing Page",
    img: "Landing page.png",
    desc: "Discover the power of Telegram Trading. Our streamlined landing page provides instant access to trading insights, signals, and community discussions. Join us today and elevate your trading experience to new heights!",
  },
  {
    id: 4,
    title: "Small Business Surgeon(Portfolio)",
    img: "SMS.png",
    desc: "At Small Business Surgeon, we specialize in revitalizing small enterprises. From strategic consultations to operational enhancements, we offer tailored solutions for sustainable growth. Let's elevate your business together.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://github.com/heyansul"><button>See More</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown
} from "react-icons/md";
import "./value.css";
import { HiShieldCheck } from "react-icons/hi";
// Demo styles, see 'Styles' section below for some notes on use.

const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "Rapid Prototyping",
    detail:
    "WeDAA accelerates your development cycle, transforming design concepts into fully functional prototypes within minutes. Witness your ideas come to life faster than you ever thought possible."  },
  {
    icon: <HiShieldCheck />,
    heading: "Smart Architecture",
    detail:
    "Our intelligent templating system ensures that you're building applications with the best architectural practices in place from the very beginning. Say goodbye to guesswork and hello to robust software foundations."  },
  {
    icon: <HiShieldCheck />,
    heading: "Effortless Integration",
    detail:
    "WeDAA seamlessly integrates design and development, enabling you to iterate swiftly and effectively. No more back-and-forth between teams; it's all here in one cohesive platform."  },
];

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./raxgif.gif" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">About</span>

          <span className="primaryText">Why Choose WeDAA?.</span>

          <span className="secondaryText">
          Join the league of forward-thinking developers who are
            <br />
            shaping the future of software architecture.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                        {/* just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span
                        className="primaryText"
                      >
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

import { S } from "./work/Works_Styles";
import { SectionTitle } from "../../../components/SectionTitile";
import { TabMenu, TabsStatusType } from "./tabmenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/work";
import socialImg from "../../../assets/images/socialNet.png";
import timer from "../../../assets/images/timer.png";
import { Countainer } from "../../../components/Countainer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const tabsItems = ["All", "Landing Page", "React", "SPA"];

const tabsItems: Array<{
  status: TabsStatusType;
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: socialImg,
    type: "spa",
    id: 1,
  },

  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timer,
    type: "react",
    id: 2,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: socialImg,
    type: "spa",
    id: 3,
  },

  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timer,
    type: "react",
    id: 4,
  },
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: socialImg,
    type: "spa",
    id: 5,
  },

  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enimsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timer,
    type: "react",
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Countainer>
        <SectionTitle> My Works.</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          <AnimatePresence>
            {filteredWorks.map((s) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={s.id}
                >
                  <Work title={s.title} key={s.id} text={s.text} src={s.src} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Countainer>
    </S.Works>
  );
};

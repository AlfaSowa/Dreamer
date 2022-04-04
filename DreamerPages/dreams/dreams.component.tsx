import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import DreamsCard from "../../components/dreams/card/dreams-card.component";
import DreamsList from "../../components/dreams/list/dreams-list.component";
import { useDreams } from "../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DreamsPage: FC = () => {
  const { currentDreamType } = useDreams();

  return (
    <div className={styles.root}>
      <DreamsList>
        {currentDreamType?.children.map((item) => (
          <DreamsCard
            parentLink={currentDreamType?.id}
            item={item}
            key={item.id}
          />
        ))}
      </DreamsList>
    </div>
  );
};

export default DreamsPage;

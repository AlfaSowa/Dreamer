import { FC } from "react";
import DreamsCollectionCard from "../../../components/dreams/collection/card/card";
import DreamsCollectionList from "../../../components/dreams/collection/list/list";
import { useDreams } from "../../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DreamsCollectionPage: FC = () => {
  const { currentDreamType } = useDreams();

  return (
    <div className={styles.root}>
      <DreamsCollectionList>
        {currentDreamType?.children.map((item) => (
          <DreamsCollectionCard
            parentLink={currentDreamType?.id}
            item={item}
            key={item.id}
          />
        ))}
      </DreamsCollectionList>
    </div>
  );
};

export default DreamsCollectionPage;

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC, useCallback, useEffect, useState } from "react";
import DreamsItemCard from "../../../components/dreams/item/card/card";
import DreamsItemList from "../../../components/dreams/item/list/list";
import DreamsItemRow from "../../../components/dreams/item/row/row";
import { useDreams } from "../../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DREAM_STEPS = [
  {
    id: 1,
    tasks: [
      {
        id: 11,
        parentId: 1,
        name: "йцуйц",
        close: true,
      },
      {
        id: 12,
        parentId: 1,
        name: "йцу",
        close: true,
      },
    ],
  },
  {
    id: 2,
    tasks: [
      {
        id: 21,
        parentId: 2,
        name: "йцу",
        close: true,
      },
      {
        id: 22,
        parentId: 2,
        name: "йцу 1231231 123йуйцуйц",
        close: false,
      },
      {
        id: 23,
        parentId: 2,
        name: "йцу123 12313 1231231",
        close: true,
      },
      {
        id: 24,
        parentId: 2,
        name: "йцу12312 1231231",
        close: false,
      },
    ],
  },
  {
    id: 3,
    tasks: [
      {
        id: 31,
        parentId: 3,
        close: false,
      },
    ],
  },
];

const DreamsItemPage: FC = () => {
  const { updateDreamsItemDetails } = useDreams();

  useEffect(
    () => () => {
      updateDreamsItemDetails(null);
    },
    [updateDreamsItemDetails]
  );

  return (
    <div className={styles.root}>
      <DreamsItemList>
        {DREAM_STEPS.map((item) => (
          <DreamsItemRow key={item.id} rowId={item?.id}>
            {item.tasks.map((task) => (
              <DreamsItemCard
                onClick={updateDreamsItemDetails}
                item={task}
                key={task.id}
              />
            ))}
          </DreamsItemRow>
        ))}
      </DreamsItemList>
    </div>
  );
};

export default DreamsItemPage;

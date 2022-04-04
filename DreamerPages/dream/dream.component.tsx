/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import DreamCard from "../../components/dream/card/dream-card.component";
import DreamList from "../../components/dream/list/dream-list.component";
import DreamRow from "../../components/dream/row/dream-row.component";
import { useDreams } from "../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DREAM_STEPS = [
  {
    id: 1,
    tasks: [
      {
        id: 11,
        name: "йцуйц",
        close: true,
      },
      {
        id: 12,
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
        name: "йцу",
        close: true,
      },
      {
        id: 22,
        name: "йцу 1231231 123йуйцуйц",
        close: false,
      },
      {
        id: 23,
        name: "йцу123 12313 1231231",
        close: true,
      },
      {
        id: 24,
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
        close: false,
      },
    ],
  },
];

const DreamPage: FC = () => {
  const [details, setDetails] = useState(null);
  const handleClick = useCallback((elem) => {
    console.log("elem", elem);
    setDetails(elem);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <DreamList>
          {DREAM_STEPS.map((item) => (
            <DreamRow key={item.id}>
              {item.tasks.map((task) => (
                <DreamCard onClick={handleClick} item={task} key={task.id} />
              ))}
            </DreamRow>
          ))}
        </DreamList>

        {details && (
          <div className={styles.description}>
            <div>{details?.close ? "Закрыт" : "Открыт"}</div>
            <div>{details?.name || "Без имени"}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DreamPage;

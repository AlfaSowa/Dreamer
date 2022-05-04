import Link from "next/link";
import { FC } from "react";
import { IDreamtype } from "../../../../interfaces/dreamersTypes";

interface IDreamstypesCard {
  item: IDreamtype;
}

const DreamsTypesCard: FC<IDreamstypesCard> = ({ item }) => (
  <div>
    <Link href={`dreams/${item.id}`}>
      <a className="flex flex-col h-20 p-2">
        <div className="flex-auto">{item.name}</div>
      </a>
    </Link>
  </div>
);

export default DreamsTypesCard;

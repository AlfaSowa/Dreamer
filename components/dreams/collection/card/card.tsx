import Link from "next/link";
import { FC } from "react";
import { IDream } from "../../../../interfaces/dreamersTypes";

interface IDreamsCard {
  item: IDream;
  parentLink: string;
}

const DreamsCollectionCard: FC<IDreamsCard> = ({ item, parentLink }) => (
  <div className="rounded cursor-pointer text-xs bg-[color:var(--color-card-bg)] hover:bg-[color:var(--color-card-bg-hover)]">
    <Link href={`/dreams/${parentLink}/${item.id}`}>
      <a className="flex flex-col h-[80px] p-[8px]">
        <div className="flex-auto">{item.name}</div>
        <div className="h-[4px] w-full bg-red-80 relative">
          <div
            className="absolute top-0 h-[4px] bg-red-100"
            style={{ width: `${Math.random() * 100}%` }}
          />
        </div>
      </a>
    </Link>
  </div>
);

export default DreamsCollectionCard;

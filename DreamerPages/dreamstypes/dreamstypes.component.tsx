import { FC } from "react";
import DreamstypesCard from "../../components/dreamstypes/card/dreamstypes-card.component";
import DreamstypesList from "../../components/dreamstypes/list/dreamstypes-list.component";
import { useDreams } from "../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DreamstypesPage: FC = () => {
  const { dreamsTypes } = useDreams();

  return (
    <div className={styles.root}>
      <DreamstypesList>
        {dreamsTypes.map((item) => (
          <DreamstypesCard item={item} key={item.id} />
        ))}
      </DreamstypesList>

      <div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nulla magnam amet fugiat dignissimos
          perferendis aperiam, harum nostrum ipsam suscipit optio error animi
          omnis, sint provident explicabo autem laudantium consectetur corrupti.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magnam
          amet fugiat dignissimos perferendis aperiam, harum nostrum ipsam
          suscipit optio error animi omnis, sint provident explicabo autem
          laudantium consectetur corrupti.
        </div>
      </div>
    </div>
  );
};

export default DreamstypesPage;

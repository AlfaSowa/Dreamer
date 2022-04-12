import { FC } from "react";
import DreamsTypesCard from "../../../components/dreams/types/card/card";
import DreamsTypesList from "../../../components/dreams/types/list/list";
import { useDreams } from "../../../hooks/account/useDreams";
import styles from "./styles.module.scss";

const DreamsTypesPage: FC = () => {
  const { dreamsTypes } = useDreams();

  return (
    <div className={styles.root}>
      <DreamsTypesList>
        {dreamsTypes.map((item) => (
          <DreamsTypesCard item={item} key={item.id} />
        ))}
      </DreamsTypesList>

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

export default DreamsTypesPage;

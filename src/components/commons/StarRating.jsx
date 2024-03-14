import { StarBorder } from '@manulife/mux-cds-icons';

const StarRating = () => {
  const numberOfStar = 4;

  return (
    <>
      {
        [...Array(numberOfStar)].map((_item, index) => {
          return (
            <StarBorder style={{ cursor: "pointer", color: colors.m_green, fontSize: "45px" }}/>
          )
        })
      }
    </>
  );
};

export default StarRating;
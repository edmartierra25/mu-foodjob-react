import { StarBorder, StarFilled } from '@manulife/mux-cds-icons';
import { colors } from '@manulife/mux';

const StarRating = ({ ratings = 0 }) => {
  const numberOfStar = 4;
  console.log("StarRating", ratings);
  return (
    <>
      {
        [...Array(numberOfStar)].map((_item, index) => {
          return index < ratings ?
              <StarFilled style={{ color: colors.m_green, fontSize: "45px" }}/>
            : <StarBorder style={{ color: colors.m_green, fontSize: "45px" }}/>
        })
      }
    </>
  );
};

export default StarRating;
import { useMemo } from "react";

const CardContainer = ({ imageCaption, eventDate, newsTitle, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[141px] left-[491px] w-[314px] h-[90px] text-left text-smi text-darkgray font-title-2"
      style={groupDivStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[90px] h-[90px] object-cover"
        alt=""
        src={imageCaption}
      />
      <b className="absolute top-[0px] left-[106px] leading-[120%]">
        {eventDate}
      </b>
      <b className="absolute top-[21px] left-[106px] text-lgi leading-[120%] inline-block text-dimgray w-52">
        {newsTitle}
      </b>
    </div>
  );
};

export default CardContainer;

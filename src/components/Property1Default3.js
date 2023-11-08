import { useMemo } from "react";

const Property1Default3 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default3Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[1440px] h-[635px] text-left text-21xl text-white font-title-2"
      style={property1Default3Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[635px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[635px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className="absolute top-[201px] left-[90px] leading-[120%]">
        The Best Academic School
      </div>
      <b className="absolute top-[259px] left-[90px] text-41xl leading-[120%]">
        <p className="m-0">Manava Bharati</p>
        <p className="m-0">International School</p>
      </b>
    </div>
  );
};

export default Property1Default3;

import { useMemo } from "react";

const Property1Default2 = ({
  rectangle33,
  dussheraCelebration,
  property1DefaultPosition,
  property1DefaultFlexShrink,
  dussheraCelebrationLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultPosition, property1DefaultFlexShrink]);

  const dussheraCelebrationStyle = useMemo(() => {
    return {
      left: dussheraCelebrationLeft,
    };
  }, [dussheraCelebrationLeft]);

  return (
    <div
      className="rounded-3xs w-80 h-[350px] overflow-hidden text-center text-lgi text-white font-title-2"
      style={property1Default2Style}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle33}
      />
      <b
        className="absolute top-[86.57%] left-[16.56%] leading-[120%]"
        style={dussheraCelebrationStyle}
      >
        {dussheraCelebration}
      </b>
      <div className="absolute h-full w-full top-[105.71%] right-[0%] bottom-[-105.71%] left-[0%] rounded-3xs bg-gray-400" />
      <div className="absolute h-[87.43%] w-[77.81%] top-[115.43%] left-[10.94%] text-base leading-[120%] text-left inline-block">{`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tempor convallis ante, quis laoreet urna condimentum consequat. Nunc vitae egestas est, quis laoreet felis.Aenean eros nibh, volutpat ornare ullamcorper nec, iaculis nec magna. Vivamus pellentesque enim eu justo pulvinar, a finibus erat malesuada. `}</div>
    </div>
  );
};

export default Property1Default2;

import { useMemo } from "react";

const Property1Frame1 = ({
  home,
  property1Frame1Width,
  property1Frame1Position,
  property1Frame1Top,
  property1Frame1Left,
  property1Frame1Right,
}) => {
  const property1Frame1Style = useMemo(() => {
    return {
      width: property1Frame1Width,
      position: property1Frame1Position,
      top: property1Frame1Top,
      left: property1Frame1Left,
      right: property1Frame1Right,
    };
  }, [
    property1Frame1Width,
    property1Frame1Position,
    property1Frame1Top,
    property1Frame1Left,
    property1Frame1Right,
  ]);

  return (
    <div
      className="bg-white w-[68px] h-[90px] overflow-hidden text-left text-base text-gray-200 font-title-2"
      style={property1Frame1Style}
    >
      <div className="absolute top-[78px] left-[-73px] bg-steelblue w-[68px] h-3" />
      <div className="absolute top-[35px] left-[10px] leading-[120%]">
        {home}
      </div>
    </div>
  );
};

export default Property1Frame1;

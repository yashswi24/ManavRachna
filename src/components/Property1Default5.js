import { useMemo } from "react";

const Property1Default5 = ({
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default5Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <div
      className="w-[98px] h-5 text-left text-sm text-silver font-title-2"
      style={property1Default5Style}
    >
      <div className="absolute top-[0%] left-[0%] font-medium">
        Registration
      </div>
    </div>
  );
};

export default Property1Default5;

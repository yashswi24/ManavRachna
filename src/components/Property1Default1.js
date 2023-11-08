import { useMemo } from "react";

const Property1Default1 = ({
  readMore,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultOverflow,
  readMoreColor,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      overflow: property1DefaultOverflow,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultOverflow,
  ]);

  const readMoreStyle = useMemo(() => {
    return {
      color: readMoreColor,
    };
  }, [readMoreColor]);

  return (
    <div
      className="w-[81px] h-4 text-left text-smi text-white font-title-2"
      style={property1Default1Style}
    >
      <b
        className="absolute top-[0%] left-[0%] leading-[120%]"
        style={readMoreStyle}
      >
        {readMore}
      </b>
    </div>
  );
};

export default Property1Default1;

import { useMemo } from "react";

const Property1Default = ({
  link,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  linkWhiteSpace,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const linkStyle = useMemo(() => {
    return {
      whiteSpace: linkWhiteSpace,
    };
  }, [linkWhiteSpace]);

  return (
    <div
      className="w-[30px] h-[19px] text-left text-base text-darkgray font-title-2"
      style={property1DefaultStyle}
    >
      <div
        className="absolute top-[0%] left-[0%] leading-[120%]"
        style={linkStyle}
      >
        {link}
      </div>
    </div>
  );
};

export default Property1Default;

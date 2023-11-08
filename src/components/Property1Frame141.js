import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";

const Property1Frame141 = ({
  property1Frame14Position,
  property1Frame14Top,
  property1Frame14Left,
}) => {
  const property1Frame141Style = useMemo(() => {
    return {
      position: property1Frame14Position,
      top: property1Frame14Top,
      left: property1Frame14Left,
    };
  }, [property1Frame14Position, property1Frame14Top, property1Frame14Left]);

  return (
    <div
      className="w-[629px] h-[312px] overflow-hidden text-center text-lgi text-white font-title-2"
      style={property1Frame141Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[629px] h-[312px] object-cover"
        alt=""
        src="/rectangle-451@2x.png"
      />
      <b className="absolute top-[269px] left-[205px] leading-[120%]">{`LAURELS & ACCOLADES`}</b>
      <div className="absolute top-[349px] left-[0px] bg-gray-500 w-[629px] h-[312px]" />
      <b className="absolute top-[378px] left-[205px] leading-[120%]">{`LAURELS & ACCOLADES`}</b>
      <div className="absolute top-[422px] left-[55px] leading-[120%] inline-block w-[518px] h-[184px]">
        We value and encourage our students and teachers to engage with various
        issues and subjects demanding critical thinking and perspectives. We
        celebrate such successes, preserve accolades and excellences and
        treasure them.
      </div>
      <Property1Default1
        readMore={`Read More >`}
        property1DefaultPosition="absolute"
        property1DefaultTop="598px"
        property1DefaultLeft="279px"
        property1DefaultOverflow="unset"
        readMoreColor="#fff"
      />
    </div>
  );
};

export default Property1Frame141;

import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";

const Property1Frame14 = ({
  property1Frame14Position,
  property1Frame14Top,
  property1Frame14Left,
}) => {
  const property1Frame14Style = useMemo(() => {
    return {
      position: property1Frame14Position,
      top: property1Frame14Top,
      left: property1Frame14Left,
    };
  }, [property1Frame14Position, property1Frame14Top, property1Frame14Left]);

  return (
    <div
      className="w-[629px] h-[312px] overflow-hidden text-center text-lgi text-white font-title-2"
      style={property1Frame14Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[629px] h-[312px] object-cover"
        alt=""
        src="/rectangle-45@2x.png"
      />
      <b className="absolute top-[269px] left-[136px] leading-[120%]">
        COMMUNITY ENGAGEMENT PROGRAM
      </b>
      <div className="absolute top-[345px] left-[0px] bg-gray-500 w-[629px] h-[312px]" />
      <b className="absolute top-[374px] left-[136px] leading-[120%]">
        COMMUNITY ENGAGEMENT PROGRAM
      </b>
      <div className="absolute top-[418px] left-[55px] leading-[120%] inline-block w-[518px] h-[184px]">
        Students of Manava Bharati International School, Patna visited Dehradun
        region from 23 May to 28 May 2019 to understand the Bio-diversity, folk
        culture and music, agriculture pattern, the organic farming system of
        Uttarakhand. Students shared important aspects of Bihar with the
        students of Uttarakhand. During this visit, students had a face to face
        ...
      </div>
      <Property1Default1
        readMore={`Read More >`}
        property1DefaultPosition="absolute"
        property1DefaultTop="612px"
        property1DefaultLeft="279px"
        property1DefaultOverflow="hidden"
        readMoreColor="#fff"
      />
    </div>
  );
};

export default Property1Frame14;

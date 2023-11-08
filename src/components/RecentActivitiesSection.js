import Property1Default1 from "./Property1Default1";
import CardContainer from "./CardContainer";

const RecentActivitiesSection = () => {
  return (
    <div className="absolute top-[2323px] left-[0px] bg-whitesmoke-100 w-[1440px] h-[594px] overflow-hidden text-left text-9xl text-darkgray font-title-2">
      <img
        className="absolute top-[0px] left-[843px] w-[597px] h-[594px] object-cover"
        alt=""
        src="/rectangle-35@2x.png"
      />
      <b className="absolute top-[40px] left-[89px] leading-[120%] text-darkslateblue">
        Recent Activities
      </b>
      <b className="absolute top-[40px] left-[891px] leading-[120%] text-white">
        School Notice Board
      </b>
      <Property1Default1
        readMore={`Read All >`}
        property1DefaultPosition="absolute"
        property1DefaultTop="80px"
        property1DefaultLeft="89px"
        property1DefaultOverflow="unset"
        readMoreColor="#808080"
      />
      <div className="absolute top-[141px] left-[89px] w-[362px] h-[362px] text-smi">
        <img
          className="absolute top-[0px] left-[0px] w-[362px] h-[258px] object-cover"
          alt=""
          src="/rectangle-36@2x.png"
        />
        <b className="absolute top-[272px] left-[2px] leading-[120%]">{`OCT 25, 2023 `}</b>
        <b className="absolute top-[293px] left-[0px] text-lgi leading-[120%] inline-block text-dimgray w-[360px]">
          Winners Of International General Knowledge Olympiad: Big Achievement,
          Manava Bharati ...
        </b>
      </div>
      <CardContainer
        imageCaption="/rectangle-37@2x.png"
        eventDate="OCT 05, 2023 "
        newsTitle="MBIS  Joins Interschool Budget Discussion"
      />
      <CardContainer
        imageCaption="/rectangle-38@2x.png"
        eventDate="JAN 26, 2023 "
        newsTitle="Republic Day Celebration: Let us remember the ..."
        propTop="277px"
      />
      <CardContainer
        imageCaption="/rectangle-39@2x.png"
        eventDate="JAN 23, 2023 "
        newsTitle="Netaji SC Bose Jayanti: We should have but one desire.."
        propTop="413px"
      />
      <div className="absolute top-[57px] left-[351px] bg-gainsboro-200 w-[460px] h-1" />
      <div className="absolute top-[594px] left-[0px] w-[1440px] h-[650px] overflow-hidden" />
    </div>
  );
};

export default RecentActivitiesSection;

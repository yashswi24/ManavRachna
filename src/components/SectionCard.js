import Property1Default2 from "./Property1Default2";

const SectionCard = () => {
  return (
    <div className="absolute top-[1693px] left-[0px] bg-white w-[1440px] h-[630px] text-left text-9xl text-darkslateblue font-title-2">
      <div className="absolute top-[197px] left-[91px] w-[1259px] overflow-x-auto flex flex-row items-end justify-start gap-[50px]">
        <Property1Default2
          rectangle33="/rectangle-33@2x.png"
          dussheraCelebration="Navaratri Celebration"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="16.25%"
        />
        <Property1Default2
          rectangle33="/rectangle-331@2x.png"
          dussheraCelebration="Janmashtami"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="27.81%"
        />
        <Property1Default2
          rectangle33="/rectangle-332@2x.png"
          dussheraCelebration="International Girl Child Day"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="8.44%"
        />
        <Property1Default2
          rectangle33="/rectangle-333@2x.png"
          dussheraCelebration="Gandhi Jayanti"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="26.25%"
        />
        <Property1Default2
          rectangle33="/rectangle-334@2x.png"
          dussheraCelebration=" हिन्दी दिवस"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="34.38%"
        />
        <Property1Default2
          rectangle33="/rectangle-335@2x.png"
          dussheraCelebration="SPIC-MACAY"
          property1DefaultPosition="relative"
          property1DefaultFlexShrink="0"
          dussheraCelebrationLeft="29.69%"
        />
      </div>
      <b className="absolute top-[50px] left-[529px] leading-[120%]">{`Social & Cultural Activities`}</b>
      <b className="absolute top-[108px] left-[632px] leading-[120%] text-black">{` `}</b>
      <div className="absolute top-[97px] left-[390px] text-base leading-[120%] text-gray-100 text-center inline-block w-[661px]">
        <p className="m-0">{`Embrace, Engage and Enlighten: `}</p>
        <p className="m-0">{`Our Social and cultural activities t students to Embrace diversity, `}</p>
        <p className="m-0">
          Engage in meaningful interactions and be Enlightened by new
          perspectives
        </p>
      </div>
    </div>
  );
};

export default SectionCard;

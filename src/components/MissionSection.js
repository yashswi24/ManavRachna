import Property1Default1 from "./Property1Default1";

const MissionSection = () => {
  return (
    <div className="absolute top-[1444px] left-[0px] bg-darkslateblue w-[1440px] h-[248px] overflow-hidden text-left text-4xl text-white font-title-2">
      <img
        className="absolute top-[-56px] left-[272px] w-[896px] h-[828px] object-cover hidden"
        alt=""
        src="/mbis-logo-3@2x.png"
      />
      <div className="absolute top-[42px] left-[91px] w-[414px] h-[163px]">
        <b className="absolute top-[0px] left-[0px] leading-[120%]">
          Our Mission
        </b>
        <div className="absolute top-[38px] left-[0px] text-base leading-[120%] inline-block w-[414px]">
          Our mission is to ensure all round development of the child by
          providing quality education, with a scientific temper, adaptive to the
          changing needs of time. Encourage active participation in extra and
          co-curricular activities.
        </div>
        <Property1Default1
          readMore={`Read More >`}
          property1DefaultPosition="absolute"
          property1DefaultTop="147px"
          property1DefaultLeft="0px"
          property1DefaultOverflow="unset"
          readMoreColor="#fff"
        />
      </div>
      <div className="absolute top-[42px] left-[737px] w-[569px] h-[163px]">
        <b className="absolute top-[0px] left-[0px] leading-[120%]">
          Our Vision
        </b>
        <div className="absolute top-[38px] left-[0px] text-base leading-[120%] inline-block w-[569px] h-[95px]">
          As envisioned by our founder, we strive to provide a dynamic learning
          environment to enable the child’s physical, cognitive, emotional,
          social and spiritual growth. ‘Manava Bharati’ encapsulates the
          aforesaid vision – ‘Manava’ being a man with an awakened consciousness
          and ‘Bharati’ meaning wisdom and learning
        </div>
        <Property1Default1
          readMore={`Read More >`}
          property1DefaultPosition="absolute"
          property1DefaultTop="147px"
          property1DefaultLeft="0px"
          property1DefaultOverflow="unset"
          readMoreColor="#fff"
        />
      </div>
    </div>
  );
};

export default MissionSection;

import Property1Default5 from "./Property1Default5";
import Property1Default4 from "./Property1Default4";

const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[70px] text-left text-smi text-silver font-title-2">
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[70px]" />
      <Property1Default5
        property1DefaultWidth="85px"
        property1DefaultPosition="absolute"
        property1DefaultTop="25px"
        property1DefaultLeft="1048px"
      />
      <Property1Default4
        property1DefaultWidth="130px"
        property1DefaultPosition="absolute"
        property1DefaultTop="25px"
        property1DefaultLeft="1158px"
      />
      <div className="absolute top-[26px] left-[240px] w-[378px] h-[18px]">
        <div className="absolute top-[1px] left-[26px] leading-[120%]">{`+91-810-245-0507, 790-331-2446,  895-577-6622 (IVR) `}</div>
        <img
          className="absolute top-[0px] left-[0px] w-[19px] h-[18px] overflow-hidden"
          alt=""
          src="/phonesolid-3-1.svg"
        />
      </div>
      <div className="absolute h-[25.71%] w-[12.01%] top-[37.14%] right-[43.06%] bottom-[37.14%] left-[44.93%]">
        <img
          className="absolute h-full w-[13.87%] top-[0%] right-[86.13%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <div className="absolute top-[1px] left-[39px] leading-[120%]">
          info@mbispatna.org
        </div>
      </div>
      <img
        className="absolute top-[26px] left-[1313px] w-5 h-5 overflow-hidden"
        alt=""
        src="/component-7.svg"
      />
      <img
        className="absolute top-[24px] left-[89px] w-[23px] h-[23px]"
        alt=""
        src="/group-33.svg"
      />
      <img
        className="absolute top-[24px] left-[122px] w-[23px] h-[23px]"
        alt=""
        src="/group-34.svg"
      />
      <img
        className="absolute top-[24px] left-[155px] w-[23px] h-[23px]"
        alt=""
        src="/group-37.svg"
      />
      <img
        className="absolute top-[24px] left-[188px] w-[23px] h-[23px]"
        alt=""
        src="/group-36.svg"
      />
    </div>
  );
};

export default Header;

import Property1Frame1 from "./Property1Frame1";

const HomeContainer = () => {
  return (
    <div className="absolute top-[70px] left-[0px] w-[1440px] h-[90px]">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[90px]" />
      <Property1Frame1
        home="Home"
        property1Frame1Width="68px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="unset"
        property1Frame1Right="890px"
      />
      <Property1Frame1
        home="About "
        property1Frame1Width="68px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="550px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Academic"
        property1Frame1Width="99px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="618px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Mandatory Disclosure"
        property1Frame1Width="197px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="717px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Admission"
        property1Frame1Width="106px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="914px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Infrastructure"
        property1Frame1Width="141px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="1020px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Junior Wing"
        property1Frame1Width="113px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="1161px"
        property1Frame1Right="unset"
      />
      <Property1Frame1
        home="Career"
        property1Frame1Width="74px"
        property1Frame1Position="absolute"
        property1Frame1Top="0px"
        property1Frame1Left="1274px"
        property1Frame1Right="unset"
      />
      <img
        className="absolute top-[17px] left-[82px] w-[300px] h-[61px] object-cover"
        alt=""
        src="/mbis-logo-1@2x.png"
      />
    </div>
  );
};

export default HomeContainer;

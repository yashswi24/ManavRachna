import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";

const Property1Frame12 = ({
  property1Frame12Position,
  property1Frame12Top,
  property1Frame12Left,
}) => {
  const property1Frame12Style = useMemo(() => {
    return {
      position: property1Frame12Position,
      top: property1Frame12Top,
      left: property1Frame12Left,
    };
  }, [property1Frame12Position, property1Frame12Top, property1Frame12Left]);

  return (
    <div
      className="bg-white w-[1261px] h-[454px] text-left text-base text-dimgray font-title-2"
      style={property1Frame12Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[512px] h-[454px] object-cover"
        alt=""
        src="/rectangle-42@2x.png"
      />
      <div className="absolute top-[130px] left-[541px] leading-[120%] inline-block w-[699px] h-[270px]">
        We are not focused only on academic grades -our vision is to offer an
        enabling environment where the children are encouraged and inspired to
        learn together to rediscover themselves the essence that make them
        transformational and empathetic -collaboration, reflection and
        exploration being the Mantras. In today’s world creating this
        environment is not that easy. We have, therefore, developed a team which
        is committed to and capable of fostering the above.Our academic team is
        led by a psychologist with proven record of mentoring school and
        university students. We have members with exposure to highest portals of
        learning in science and technology and others who have long standing
        experience of teaching and research in pedagogical science.Besides the
        teachers, we have a panel of experts offering special inputs in
        different areas-science technology, art and culture, policy and climate
        sciences. The academic structure offers freedom to the teachers to
        evolve suitable classes, programs and pedagogies. We have divided
        specific verticals each headed by a designated teacher to pursue various
        subjects and themes.
      </div>
      <b className="absolute top-[81px] left-[539px] text-9xl leading-[120%] text-darkslateblue">
        The Team
      </b>
      <div className="absolute top-[1px] left-[512px] bg-whitesmoke-200 w-[749px] h-[62px]" />
      <div className="absolute top-[1px] left-[512px] bg-white w-[249.7px] h-[62px]" />
      <b className="absolute top-[22px] left-[541px] leading-[120%]">{`The Team `}</b>
      <b className="absolute top-[22px] left-[791px] leading-[120%] text-darkgray">
        The Founder
      </b>
      <b className="absolute top-[22px] left-[1040px] leading-[120%] text-darkgray">
        The Mentor
      </b>
      <Property1Default1
        readMore={`Read More >`}
        property1DefaultPosition="absolute"
        property1DefaultTop="415px"
        property1DefaultLeft="541px"
        property1DefaultOverflow="unset"
        readMoreColor="#808080"
      />
    </div>
  );
};

export default Property1Frame12;

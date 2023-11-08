import { useMemo } from "react";

const Property1Frame6 = ({
  button,
  property1Frame6Position,
  property1Frame6Top,
  property1Frame6Left,
}) => {
  const property1Frame6Style = useMemo(() => {
    return {
      position: property1Frame6Position,
      top: property1Frame6Top,
      left: property1Frame6Left,
    };
  }, [property1Frame6Position, property1Frame6Top, property1Frame6Left]);

  return (
    <div
      className="rounded-10xs bg-white w-[120px] h-[42px] flex flex-row items-center justify-center py-2.5 px-[30px] box-border text-left text-smi text-steelblue font-title-2"
      style={property1Frame6Style}
    >
      <b className="relative leading-[120%]">{button}</b>
    </div>
  );
};

export default Property1Frame6;

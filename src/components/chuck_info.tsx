import React from "react";

interface ChuckInfoProp {
  whalesSaved: number;
  roundHouseKicks: number;
}

const ChuckInfo: React.FC<ChuckInfoProp> = ({
  whalesSaved,
  roundHouseKicks,
}) => {
  return (
    <>
      <p>Number of Whales Saved: {whalesSaved}</p>

      <p>Number of Round House Kicks ({roundHouseKicks}): </p>
    </>
  );
};

export default ChuckInfo;

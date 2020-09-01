import React from "react";
import { LaunchListQuery } from "../../generated/graphql";

interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h3>Launches</h3>
      <ol>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li key={i}>
                  {/* <a class={`launch.flight_number`}> */}
                  {launch.mission_name} ({launch.launch_year}){/* </a> */}
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default LaunchList;

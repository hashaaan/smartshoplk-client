import React from "react";
import moment from "moment";

const TimeAgo = ({ timestamp, className, style }) => {
  return (
    <div className={className} style={style}>
      {moment(timestamp).fromNow()}
    </div>
  );
};

export default TimeAgo;

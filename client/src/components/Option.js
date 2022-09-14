import React from "react";

const Option = ({ user_name, user_id }) => {
  return (
    <option className="option-input-devs" value={user_id}>
      {user_name}
    </option>
  );
};

export default Option;

import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAuthInfoAsUser } from "../../store/actions/Auth";
import { authenticationState } from "../../store/reducers/Auth";

const Authentication: React.FC = () => {
  const authenticationCache = useAppSelector(authenticationState);
  const dispatch = useAppDispatch();

  console.log(authenticationCache);

  const handleButtonClick = () => {
    dispatch(getAuthInfoAsUser());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default Authentication;

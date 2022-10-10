import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAuthInfoAsUser } from "../../store/actions/Auth";
import { authenticationState } from "../../store/reducers/Auth";

const Authentication: React.FC = () => {
  const authenticationCache = useAppSelector(authenticationState);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(getAuthInfoAsUser());
  };
  console.log(authenticationCache);

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default Authentication;

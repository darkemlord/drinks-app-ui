/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAuthInfoAsUser } from "../../store/actions/Auth";
import { authenticationState } from "../../store/reducers/Auth";

const authTest = {
  email: "emanuel@email.com",
  password: "sabroso1234",
};

const Authentication: React.FC = () => {
  const authenticationCache = useAppSelector(authenticationState);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(getAuthInfoAsUser(authTest));
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default Authentication;

import styled from "styled-components";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //if there is no authenticated user, redirect to the /login

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //while loading, show as spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

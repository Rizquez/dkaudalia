import { useEffect } from "react";

import { setGetTokenHandler } from "@/core/auth/token";
import { useAuth } from "@clerk/react";

const AuthTokenHandler = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    setGetTokenHandler(getToken);
  }, [getToken]);

  return null;
};

export default AuthTokenHandler;

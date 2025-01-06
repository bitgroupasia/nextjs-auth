"use client";
import { useEffect } from "react";
import Sdk from "sso-js-sdk";
import sdkConfig from "@/app/conf";

const Login = () => {
  useEffect(() => {
    const SsoSDK = new Sdk(sdkConfig);
    SsoSDK.signin_redirect();
  }, []);

  return <></>;
};

export default Login;

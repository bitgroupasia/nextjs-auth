"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Sdk from "casdoor-js-sdk";
import sdkConfig from "@/app/conf";

export const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const SsoSDK = new Sdk(sdkConfig);

    SsoSDK.exchangeForAccessToken()
      .then((res) => {
        if (res && res.access_token) {
          return SsoSDK.getUserInfo(res.access_token);
        } else {
          throw new Error(res.error_description);
        }
      })
      .then((res) => {
        const ssoUserInfo = res;
        Cookies.set("ssoUser", JSON.stringify(ssoUserInfo));
        router.push("/profile");
      })
      .catch((error) => {
        console.error("Failed to get access_token:", error);
        router.push("/");
      });
  }, []);

  return <div>signing...</div>;
};

export default AuthCallback;

"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import "@/app/global.css";

export default function Page() {
  const router = useRouter();
  const user = Cookies.get("ssoUser");
  const userJson = user ? JSON.parse(user) : {};

  const handleLogout = () => {
    Cookies.remove("ssoUser");
    router.push("/");
  };

  return (
    <>
      <h1>Hello {userJson.name}!</h1>
      <hr />
      <div className="container">
        <table>
          <tbody>
          <tr>
            <td>Username</td>
            <td>{userJson.preferred_username}</td>
          </tr>
          <tr>
            <td>Display Name</td>
            <td>{userJson.name}</td>
          </tr>
          <tr>
            <td>User ID</td>
            <td>{userJson.sub}</td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <img src={userJson.picture}></img>
            </td>
          </tr>
          </tbody>
        </table>
        <br/>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

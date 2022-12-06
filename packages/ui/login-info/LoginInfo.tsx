import React, { useMemo } from "react";
import { useStore } from "../../store";

export function LoginInfo() {
  const { user, setUser } = useStore();

  return (
    <div
      style={{
        borderRadius: "4px",
        border: "2px solid lightgray",
        padding: "7px 12px",
        fontSize: "1.25rem",
      }}
    >
      <p>Dummy login info. [only good for dummy login & test on host app.]</p>
      {user ? (
        <button onClick={() => setUser("")}>Sign out</button>
      ) : (
        <button onClick={() => setUser("loged in user name")}>Sign in</button>
      )}
    </div>
  );
}

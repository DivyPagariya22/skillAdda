import React from "react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";

export default function Signout() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    }
    Router.push({
      pathname: "/",
    });
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

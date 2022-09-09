import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../store/slices/userSlice";

export default function MyScreen() {
  const user = useSelector(logedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return <div>MyScreen</div>;
}

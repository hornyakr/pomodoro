import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../store/slices/userSlice";

export default function HomeScreen() {
  const user = useSelector(logedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${user.id}`);
    }
  }, [user, navigate]);
  return <div>HomeScreen</div>;
}

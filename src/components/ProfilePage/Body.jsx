import React from "react";

import UserProfileDisplay from "./UserProfileDisplay";
import UserProfileEditForm from "./UserProfileEditForm";
import UpdateButton from "./UpdateButton";
import FeedbackNotification from "./FeedbackNotification";

const Body = () => {
  return (
    <div>
      <UserProfileDisplay />
      <UserProfileEditForm />
      <UpdateButton />
      <FeedbackNotification />
    </div>
  );
};

export default Body;

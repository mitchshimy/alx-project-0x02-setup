import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPost(data);
    };
    if (session?.user.id) fetchPost();
  }, []);

  const handleEdit = () => {
    
  };

  const handleDelete = () => {};

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={post}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;

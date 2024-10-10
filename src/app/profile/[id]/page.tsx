"use client";
import { useParams } from "next/navigation";

export default function ProfileID() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      My profile Id page
      <div>Profile of {params.id}</div>
    </div>
  );
}

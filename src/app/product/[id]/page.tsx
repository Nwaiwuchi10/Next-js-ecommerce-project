"use client";
import { useParams } from "next/navigation";
export default function Home() {
  const params = useParams();
  return (
    <div>
      <main>product{params.id}</main>
    </div>
  );
}

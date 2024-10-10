"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      My profile page
      <div>
        <ol>
          <li onClick={() => router.push("/profile/1")}>Profile 1</li>
          <li onClick={() => router.push("/profile/2")}>Profile 2</li>
          <li onClick={() => router.push("/profile/3")}>Profile 3</li>
          <li onClick={() => router.push("/profile/4")}>Profile 4</li>
          <li onClick={() => router.push("/profile/5")}>Profile 5</li>
          <li>
            <Link href="/profile/6">Profile 6</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

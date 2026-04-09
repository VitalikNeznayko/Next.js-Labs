"use client";

import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function UsersPage() {
  const { data, mutate, isLoading } = useSWR("/api/users", fetcher);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    if (!name || !email) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    // optimistic UI update
    mutate([...data, newUser], false);

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    mutate(); // sync with server

    setName("");
    setEmail("");
  };

  const deleteUser = async (id: number) => {
    // optimistic delete
    mutate(
      data.filter((user: any) => user.id !== id),
      false,
    );

    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    mutate();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        <div className="bg-slate-900 p-4 rounded-xl mb-6">
          <div className="flex gap-3">
            <input
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={createUser}
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Create
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {data?.map((user: any) => (
            <div
              key={user.id}
              className="bg-slate-900 p-4 rounded-xl flex justify-between"
            >
              <div>
                <div className="font-semibold">{user.name}</div>
                <div className="text-sm text-gray-400">{user.email}</div>
              </div>

              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

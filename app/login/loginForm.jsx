"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { useFormStatus } from "react-dom";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white/50 rounded-lg shadow-lg">
      <form action={loginAction} className="flex max-w-[300px] mx-auto flex-col gap-2">
        <div className="flex flex-col gap-2">
          <input id="email" name="email" placeholder="Email" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        </div>
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email}</p>
        )}

        <div className="flex flex-col gap-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="w-full bg-gray-700 text-white font-medium p-3 rounded-lg hover:bg-gray-900 transition-all">
      Login
    </button>
  );
}

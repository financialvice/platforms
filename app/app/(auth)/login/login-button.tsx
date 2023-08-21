"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signIn("google");
      }}
      className={`${
        loading
          ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
      } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {loading ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <>
          <svg
            className="h-4 w-4 text-black dark:text-white"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.8412 8.18377C15.8412 7.63996 15.7971 7.0932 15.7031 6.5582H8.15723V9.63885H12.4784C12.2991 10.6324 11.7229 11.5114 10.8793 12.0699V14.0688H13.4572C14.9711 12.6754 15.8412 10.6177 15.8412 8.18377Z"></path>
            <path d="M8.15723 16.0001C10.3149 16.0001 12.1344 15.2916 13.4602 14.0688L10.8822 12.0699C10.1649 12.5578 9.23898 12.8342 8.16017 12.8342C6.07308 12.8342 4.30347 11.4261 3.66853 9.53303H1.00823V11.5937C2.3663 14.2951 5.13242 16.0001 8.15723 16.0001Z"></path>
            <path d="M3.66559 9.53303C3.33048 8.53946 3.33048 7.46358 3.66559 6.47001V4.40938H1.00823C-0.126441 6.6699 -0.126441 9.33314 1.00823 11.5937L3.66559 9.53303Z"></path>
            <path d="M8.15723 3.16595C9.29777 3.14831 10.4001 3.57749 11.2261 4.36529L13.5102 2.08126C12.0639 0.723181 10.1444 -0.0234656 8.15723 5.08294e-05C5.13242 5.08294e-05 2.3663 1.70499 1.00823 4.40938L3.66559 6.47001C4.29759 4.574 6.07014 3.16595 8.15723 3.16595Z"></path>
          </svg>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Login with Google
          </p>
        </>
      )}
    </button>
  );
}

"use client";

import { SessionProvider } from "next-auth/react";

const GoogleProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider >{children}</SessionProvider>
    )
}

export { GoogleProvider };
"use client";

import AuthGuard from "@/components/auth/AuthGuard";
import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthGuard>{children}</AuthGuard>
    </>
  );
}

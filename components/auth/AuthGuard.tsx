"use client";
import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthGaurd({
    children
}:{children:React.ReactNode}){
    const router = useRouter();
    const {status} = useAppSelector((state)=>state.auth);

    useEffect(()=>{
        if(status === 'unauthenticated'){
            router.replace("/login");
        }
    },[status,router]);

    if(status === 'checking'){
        return <div>Loading session...</div>
    }

    if(status !== 'authenticated'){
        return null;
    }

    return <>{children}</>
}
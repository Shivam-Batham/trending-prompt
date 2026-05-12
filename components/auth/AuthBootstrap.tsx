"use client";
import { refreshSession } from "@/lib/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import  { useEffect, useRef } from "react";

export default function AuthBootstrap(){
    const dispatch =  useAppDispatch();
    const {status} = useAppSelector((state)=>state.auth);
    const initialRender =  useRef(false);
    useEffect(()=>{
        if(initialRender.current == false && status === "idle"){
            console.log(initialRender.current)
            initialRender.current =  true
            dispatch(refreshSession());
        }
    },[status,initialRender])

    return null;
}
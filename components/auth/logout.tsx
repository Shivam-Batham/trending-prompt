import { logoutUser } from "@/lib/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { token, } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logoutUser());
    if (!token) router.replace("/");
  };

  return (
    <div
      onClick={handleLogout}
      className="p-1 pl-1.5 hover:bg-violet-400/30 rounded-full cursor-pointer"
    >
      <LogOut className=" hover:rounded-full text-violet-400" />
    </div>
  );
}

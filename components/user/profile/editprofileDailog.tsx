"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAppSelector } from "@/lib/store";
import axiosInstance from "@/utils/axiosIntance";
import { toast } from "sonner";

type Profile = {
  name: string;
  email: string;
  avatar: File | null;
};

export function EditProfile() {

  const {user } = useAppSelector((state)=> state.user);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<Profile>({
    name: "",
    email: "",
    avatar: null,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "file"
          ? files?.[0] || null
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("email", formData.email);

      if (formData.avatar) {
        payload.append("avatar", formData.avatar);
      }

      await axiosInstance.put(
        `/api/user/update-user/${user?._id}`,
        payload,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast("User profile updated.")
      setOpen(false);
    } catch (error) {
      toast("Profile data update failed.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="mt-20 sm:mt-24 px-5 py-2 rounded-full text-sm font-semibold bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-sm">
          Edit
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              Edit profile
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile
              here. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="my-4 space-y-4">
            <Field>
              <Label htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label htmlFor="avatar">
                Avatar
              </Label>
              <Input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
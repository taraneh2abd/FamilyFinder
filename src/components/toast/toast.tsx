"use client";

import { toast } from "sonner";
import Button from "@/components/Button/Button";

export default function ToastDemo() {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          toast.success("عملیات موفق بود", {
            description: "اطلاعات با موفقیت ذخیره شد",
          })
        }
      >
        Success
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast.error("خطا رخ داد", {
            description: "لطفاً دوباره تلاش کنید",
          })
        }
      >
        Error
      </Button>

      <Button
        onClick={() =>
          toast("پیام عادی", {
            description: "این یک toast معمولی است",
          })
        }
      >
        Default
      </Button>
    </div>
  );
}
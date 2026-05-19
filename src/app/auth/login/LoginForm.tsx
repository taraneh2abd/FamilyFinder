"use client";
import { toast } from "sonner";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import SaveButton from "@/components/SaveButton/SaveButton";

export default function Login() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-10">
      <div
        className="w-[350px] max-w-4xl h-[400px] flex flex-col items-center justify-center rounded-[20px] shadow-lg"
        style={{
          backgroundColor: "var(--navbarcolor)",
          gap: "30px",
        }}
      >
        لاگین و ساین اپ
<div className="flex items-center" style={{ gap: "12px" }}>
  <Input placeholder="Enter text..." />
  <SaveButton />
</div>
<div className="flex items-center" style={{ gap: "12px" }}>
  <Input placeholder="Enter text..." />
  <SaveButton />
</div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant="primary"
            onClick={() =>
              toast.success("عملیات موفق بود", {
                description: "اطلاعات با موفقیت ذخیره شد",
              })
            }
          >
            primary
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              toast.error("خطا رخ داد", {
                description: "لطفاً دوباره تلاش کنید",
              })
            }
          >
            destructive
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              toast("پیام عادی", {
                description: "این یک toast معمولی است",
              })
            }
          >
            secondary
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("پیام عادی", {
                description: "این یک toast معمولی است",
              })
            }
          >
            outline
          </Button>
        </div>
      </div>
    </div>
  );
}
import { cn } from "@/utils/classNameMerge";

export default function Title({ title, className }: { title: string; className: string }) {
  return <h1 className={cn("text-black", className)}>{title}</h1>;
}

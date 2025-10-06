"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FORM_URL } from "@/lib/constants";

interface FormDialogProps {
	triggerText: string;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
	className?: string;
}

export function FormDialog({
	triggerText,
	variant = "default",
	size = "lg",
	className,
}: FormDialogProps) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant={variant} size={size} className={className}>
					{triggerText}
				</Button>
			</DialogTrigger>
			<DialogContent className="w-[95vw] sm:max-w-4xl ">
				<DialogHeader className="px-6 pt-6 pb-4 gap-1.5">
					<DialogTitle className="text-xl sm:text-2xl">
						填寫分享表單
					</DialogTitle>
					<DialogDescription className="text-sm sm:text-base">
						請填寫以下表單以累積您的 GP 點數，感謝您的熱情分享！
					</DialogDescription>
				</DialogHeader>
				<div className="flex-1 px-6 pb-6 overflow-hidden h-[80dvh] sm:h-[70dvh] md:h-[75dvh]">
					{/* 只在 Dialog 開啟時才載入 iframe（效能優化） */}
					{open && (
						<iframe
							src={FORM_URL}
							className="w-full h-full border-0 rounded-md"
							title="雞婆鄰里互助會分享表單"
							loading="lazy"
						/>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}

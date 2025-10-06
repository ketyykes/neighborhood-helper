"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
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

type ConfettiEffect = "basic" | "fireworks" | "sideCannons";

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
	confettiEffect?: ConfettiEffect;
}

// Confetti 效果配置
const confettiConfigs = {
	basic: {
		particleCount: 100,
		spread: 70,
		origin: { y: 0.6 },
	},
	fireworks: async () => {
		const count = 200;
		const defaults = {
			origin: { y: 0.7 },
		};

		function fire(particleRatio: number, opts: confetti.Options) {
			confetti({
				...defaults,
				...opts,
				particleCount: Math.floor(count * particleRatio),
			});
		}

		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		});
		fire(0.2, {
			spread: 60,
		});
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		});
	},
	sideCannons: async () => {
		const end = Date.now() + 400;

		const colors = ["#FAB538", "#E5A429", "#ffffff"];

		(function frame() {
			confetti({
				particleCount: 3,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors: colors,
			});
			confetti({
				particleCount: 3,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors: colors,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
	},
};

export function FormDialog({
	triggerText,
	variant = "default",
	size = "lg",
	className,
	confettiEffect,
}: FormDialogProps) {
	const [open, setOpen] = useState(false);

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// 觸發 confetti 效果
		if (confettiEffect) {
			const config = confettiConfigs[confettiEffect];
			if (typeof config === "function") {
				await config();
			} else {
				await confetti(config);
			}
		}

		// 開啟 Dialog
		setOpen(true);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant={variant}
					size={size}
					className={className}
					onClick={handleClick}
				>
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
					<iframe
						src={FORM_URL}
						className="w-full h-full border-0 rounded-md"
						title="雞婆鄰里互助會分享表單"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}

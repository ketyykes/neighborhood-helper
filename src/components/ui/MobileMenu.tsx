"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/MyButton";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	// 防止背景滾動
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* 遮罩 */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/50 z-40 lg:hidden"
						onClick={onClose}
					/>

					{/* 側邊選單 */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween", duration: 0.3 }}
						className={cn(
							"fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px]",
							"bg-white shadow-2xl z-50 lg:hidden",
							"flex flex-col"
						)}
					>
						{/* 標題和關閉按鈕 */}
						<div className="flex items-center justify-between p-4 border-b border-[#E5E8EB]">
							<h2 className="text-lg font-bold text-[#171712]">選單</h2>
							<button
								onClick={onClose}
								className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
								aria-label="Close menu"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
						</div>

						{/* 導航項目 */}
						<nav className="flex-1 overflow-y-auto py-4">
							<ul className="space-y-1">
								{NAV_ITEMS.map((item) => (
									<li key={item.label}>
										<Link
											href={item.href}
											onClick={onClose}
											className={cn(
												"block px-6 py-3 text-base font-medium",
												"text-[#171712] hover:bg-[#FAB538]/10 hover:text-[#FAB538]",
												"transition-colors"
											)}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* CTA 按鈕 */}
						<div className="p-4 border-t border-[#E5E8EB]">
							<Button variant="primary" size="lg" onClick={onClose}>
								立即分享
							</Button>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;

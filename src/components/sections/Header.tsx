"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { FormDialog } from "@/components/ui/FormDialog";
import MobileMenu from "@/components/ui/MobileMenu";
import { NAV_ITEMS } from "@/lib/constants";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-30 border-b border-[#E5E8EB] bg-white">
			<Container>
				<div className="flex items-center justify-between py-3">
					{/* Logo 和標題 */}
					<div className="flex items-center gap-2 sm:gap-4">
						<div className="w-4 h-4 relative flex-shrink-0">
							<Image
								src="/images/chicken.png"
								alt="Logo"
								fill
								className="object-contain"
							/>
						</div>
						{/* 完整標題 - 桌面版 */}
						<h1 className="hidden lg:block text-lg font-bold text-[#171712]">
							雞婆鄰里互助會
						</h1>
						{/* 縮短標題 - 平板版 */}
						<h1 className="hidden sm:block lg:hidden text-base font-bold text-[#171712]">
							雞婆互助會
						</h1>
						{/* 極簡標題 - 手機版 */}
						<h1 className="block sm:hidden text-sm font-bold text-[#171712]">
							雞婆
						</h1>
					</div>

					{/* 桌面版導航選單 */}
					<nav className="hidden lg:flex items-center gap-9">
						<div className="flex items-center gap-9">
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									className="text-sm font-medium text-[#171712] hover:text-[#FAB538] transition-colors"
								>
									{item.label}
								</Link>
							))}
						</div>
						<FormDialog
							triggerText="立即分享"
							variant="default"
							size="lg"
							className="bg-[#FAB538] text-[#171712] hover:bg-[#E5A429] focus-visible:ring-[#FAB538]"
						/>
					</nav>

					{/* 漢堡選單按鈕 - 手機和平板版 */}
					<button
						onClick={() => setIsMobileMenuOpen(true)}
						className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
						aria-label="Open menu"
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
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					</button>
				</div>
			</Container>

			{/* 行動選單 */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</header>
	);
};

export default Header;

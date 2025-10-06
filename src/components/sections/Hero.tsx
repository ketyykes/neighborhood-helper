import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/constants";

const Hero = () => {
	return (
		<section className="relative h-[300px] sm:h-[360px] lg:h-[480px] flex items-center justify-center">
			{/* 背景圖片 */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/chicken-bg.png"
					alt="Hero Background"
					fill
					className="object-cover  object-top"
					priority
				/>
				{/* 漸層遮罩 */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40" />
			</div>

			{/* 內容 */}
			<div className="relative z-10 w-full max-w-[896px] text-center px-4 sm:px-6">
				<div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 lg:mb-10">
					<h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight tracking-tight">
						{HERO.title}
					</h2>
					<p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
						{HERO.subtitle}
					</p>
				</div>
				<div className="flex justify-center">
					<Button variant="default" size="lg" className="w-full sm:w-auto bg-[#FAB538] text-[#171712] hover:bg-[#E5A429] focus-visible:ring-[#FAB538]">
						{HERO.cta}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;

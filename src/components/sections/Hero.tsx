import Image from "next/image";
import { FormDialog } from "@/components/ui/FormDialog";
import { TextAnimate } from "@/components/ui/text-animate";
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
					<TextAnimate
						as="h2"
						animation="slideLeft"
						by="character"
						className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight tracking-tight"
					>
						{HERO.title}
					</TextAnimate>
					<TextAnimate
						as="p"
						animation="slideLeft"
						by="character"
						className="text-sm sm:text-base text-white max-w-2xl mx-auto"
					>
						{HERO.subtitle}
					</TextAnimate>
				</div>
				<div className="flex justify-center">
					<FormDialog
						triggerText={HERO.cta}
						variant="default"
						size="lg"
						className="w-full sm:w-auto bg-[#FAB538] text-[#171712] hover:bg-[#E5A429] focus-visible:ring-[#FAB538]"
						confettiEffect="sideCannons"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;

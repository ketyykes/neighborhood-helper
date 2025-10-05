import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { CHANNEL_FEATURES, CHANNEL_NOTE } from "@/lib/constants";

const Channel = () => {
	return (
		<Section id="channel" background="white">
			<Container maxWidth="xl">
				<div className="px-4 sm:px-5">
					<h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-4 sm:mb-5">
						雞婆互助頻道
					</h2>
					<p className="text-sm sm:text-base text-[#171712] mb-5 sm:mb-6 leading-relaxed">
						加入我們的 Slack 頻道，掌握最新分享資訊，查詢你的 GP 點數！
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
						{CHANNEL_FEATURES.map((feature) => (
							<Card
								key={feature.title}
								variant="bordered"
								className="p-5 sm:p-6 hover:shadow-md transition-shadow"
							>
								<div className="space-y-3 sm:space-y-4">
									{/* 圖示 */}
									<div className="w-8 h-8 sm:w-10 sm:h-10 relative">
										<Image
											src={feature.icon}
											alt={feature.title}
											fill
											className="object-contain"
										/>
									</div>

									{/* 內容 */}
									<div className="space-y-2">
										<h3 className="text-base sm:text-lg font-bold text-[#171712] leading-tight">
											{feature.title}
										</h3>
										<p className="text-sm text-[#8C7D5E] leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* 備註 */}
					<p className="text-xs sm:text-sm text-[#8C7D5E] text-center mt-6 sm:mt-8">
						{CHANNEL_NOTE}
					</p>
				</div>
			</Container>
		</Section>
	);
};

export default Channel;

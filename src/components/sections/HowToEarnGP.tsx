import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { FormDialog } from "@/components/ui/FormDialog";
import { GP_METHODS, GP_NOTE, GP_PS } from "@/lib/constants";

const HowToEarnGP = () => {
	return (
		<Section id="earn-gp" background="white">
			<Container maxWidth="xl">
				<div className="px-4 sm:px-5">
					<h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-4 sm:mb-5">
						如何累積 GP
					</h2>

					{/* 桌面版表格 */}
					<Card className="hidden md:block">
						{/* 表頭 */}
						<div className="flex bg-white">
							<div className="flex-[309] px-4 py-3 border-b border-[#E5E8EB]">
								<p className="text-sm text-[#171712] font-medium">分享項目</p>
							</div>
							<div className="flex-[317] px-4 py-3 border-b border-[#E5E8EB]">
								<p className="text-sm text-[#171712] font-medium">分享內容</p>
							</div>
							<div className="flex-[300] px-4 py-3 border-b border-[#E5E8EB]">
								<p className="text-sm text-[#171712] font-medium">獲得 GP</p>
							</div>
						</div>

						{/* 表格內容 */}
						<div>
							{GP_METHODS.map((method, index) => (
								<div
									key={method.title}
									className={`flex ${
										index !== GP_METHODS.length - 1
											? "border-b border-[#E5E8EB]"
											: ""
									}`}
								>
									<div className="flex-[309] px-4 py-2 flex items-center justify-center">
										<p className="text-sm text-[#171712]">{method.title}</p>
									</div>
									<div className="flex-[317] px-4 py-2 flex items-center justify-center">
										<p className="text-sm text-[#8C7D5E]">
											{method.description}
										</p>
									</div>
									<div className="flex-[300] px-4 py-2 flex items-center justify-center">
										<p className="text-sm text-[#8C7D5E]">{method.gp}</p>
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* 手機和平板版卡片式佈局 */}
					<div className="md:hidden space-y-3">
						{GP_METHODS.map((method) => (
							<Card key={method.title} className="p-4">
								<CardContent className="space-y-3 p-0">
									<div className="flex items-start justify-between gap-4">
										<div className="flex-1">
											<h3 className="text-base font-bold text-[#171712] mb-1">
												{method.title}
											</h3>
											<p className="text-sm text-[#8C7D5E] leading-relaxed">
												{method.description}
											</p>
										</div>
										<div className="flex-shrink-0 bg-[#FAB538]/10 px-3 py-1.5 rounded-md">
											<p className="text-sm font-bold text-[#FAB538]">
												{method.gp}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* 備註說明 */}
					<div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
						<p className="text-sm sm:text-base text-[#171712] leading-relaxed">
							{GP_NOTE}
						</p>
						<p className="text-xs sm:text-sm text-[#8C7D5E] italic leading-relaxed">
							{GP_PS}
						</p>

						{/* 表單按鈕 */}
						<div className="flex justify-center pt-2">
							<FormDialog
								triggerText="填寫表單，累積 GP"
								variant="default"
								size="lg"
								className="w-full sm:w-auto bg-[#FAB538] text-[#171712] hover:bg-[#E5A429] focus-visible:ring-[#FAB538]"
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default HowToEarnGP;

"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/card";
import { FAQ_ITEMS } from "@/lib/constants";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Section id="faq" background="white">
			<Container maxWidth="xl">
				<div className="px-4 sm:px-5">
					<h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-4 sm:mb-5">
						常見問題
					</h2>

					<div className="space-y-2 sm:space-y-3">
						{FAQ_ITEMS.map((item, index) => (
							<Card key={item.question} className="px-3 sm:px-4 py-2 gap-0">
								<button
									onClick={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
									className="w-full flex items-center justify-between gap-4 sm:gap-6 py-2"
								>
									<span className="text-sm sm:text-base font-medium text-[#171712] text-left">
										{item.question}
									</span>
									<div className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
										<Image
											src="/images/arrow-icon-1.svg"
											alt="Toggle"
											fill
											className={`object-contain transition-transform duration-200 ${
												openIndex === index ? "rotate-180" : ""
											}`}
										/>
									</div>
								</button>
								{openIndex === index && (
									<div className="pb-2 pt-1 animate-in fade-in slide-in-from-top-2 duration-200">
										<p className="text-sm text-[#8C7D5E] leading-relaxed">
											{item.answer}
										</p>
									</div>
								)}
							</Card>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default FAQ;

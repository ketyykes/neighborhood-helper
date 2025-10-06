import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FOOTER_CTA, FORM_URL } from "@/lib/constants";

const FooterCTA = () => {
	return (
		<section className="py-12 sm:py-16 lg:py-20">
			<Container maxWidth="xl">
				<div className="px-4 sm:px-6 lg:px-10 text-center space-y-6 sm:space-y-8">
					<div className="max-w-[720px] mx-auto">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171712] leading-tight tracking-tight">
							{FOOTER_CTA.title}
						</h2>
					</div>
					<div className="flex justify-center">
						<Link href={FORM_URL} target="_blank" rel="noopener noreferrer">
							<Button variant="default" size="lg" className="w-full sm:w-auto bg-[#FAB538] text-[#171712] hover:bg-[#E5A429] focus-visible:ring-[#FAB538]">
								{FOOTER_CTA.cta}
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FooterCTA;

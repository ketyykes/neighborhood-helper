import Container from "@/components/ui/Container";

const Footer = () => {
	return (
		<footer className="py-6 sm:py-8 lg:py-10 bg-white border-t border-[#E5E8EB]">
			<Container maxWidth="xl">
				<div className="px-4 sm:px-5 text-center">
					<p className="text-sm sm:text-base text-[#8C7D5E]">
						© 2025 Neighborhood Helper
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

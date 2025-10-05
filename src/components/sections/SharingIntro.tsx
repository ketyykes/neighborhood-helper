import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { SHARING_INTRO } from '@/lib/constants';

const SharingIntro = () => {
  return (
    <Section id="sharing-intro" background="white">
      <Container maxWidth="xl">
        <div className="px-4 sm:px-5 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171712] mb-3 sm:mb-4">
            {SHARING_INTRO.title}
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#FAB538] mb-4 sm:mb-5">
            {SHARING_INTRO.subtitle}
          </p>
          <p className="text-sm sm:text-base text-[#171712] leading-relaxed">
            {SHARING_INTRO.description}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default SharingIntro;

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { ABOUT_PARAGRAPHS } from '@/lib/constants';

const AboutUs = () => {
  return (
    <Section id="about">
      <Container maxWidth="xl">
        <div className="px-4 sm:px-5">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-4 sm:mb-5">
            關於我們
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-[#171712] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;

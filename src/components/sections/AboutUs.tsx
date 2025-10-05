import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const AboutUs = () => {
  return (
    <Section id="about">
      <Container maxWidth="xl">
        <div className="px-4">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-2 sm:mb-3">
            About Us
          </h2>
          <p className="text-sm sm:text-base text-[#171712] leading-relaxed">
            In our community, we believe sharing is key to building strong neighborhoods.
            Our goal is to create a platform where residents can share skills, resources,
            and time, fostering a supportive community.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const FooterCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container maxWidth="xl">
        <div className="px-4 sm:px-6 lg:px-10 text-center space-y-6 sm:space-y-8">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171712] leading-tight tracking-tight">
              Join Our Community, Share and Create Together
            </h2>
          </div>
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Start Sharing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterCTA;

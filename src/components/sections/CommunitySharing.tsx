import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { COMMUNITY_FEATURES } from '@/lib/constants';

const CommunitySharing = () => {
  return (
    <Section id="community">
      <Container maxWidth="xl">
        <div className="px-4 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-2 sm:mb-3">
            Community Sharing
          </h2>
          <p className="text-sm sm:text-base text-[#171712] mb-3 sm:mb-4">
            In our community, we offer multiple sharing channels for you to interact with neighbors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {COMMUNITY_FEATURES.map((feature) => (
              <Card key={feature.title} variant="bordered" className="p-4 sm:p-5 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* 圖示 */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* 內容 */}
                  <div className="space-y-1 sm:space-y-2">
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
        </div>
      </Container>
    </Section>
  );
};

export default CommunitySharing;

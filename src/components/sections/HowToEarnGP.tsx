import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { GP_METHODS } from '@/lib/constants';

const HowToEarnGP = () => {
  return (
    <Section id="earn-gp">
      <Container maxWidth="xl">
        <div className="px-4">
          <h2 className="text-xl sm:text-[22px] font-bold text-[#171712] mb-4 sm:mb-5">
            How to Earn GP
          </h2>

          {/* 桌面版表格 */}
          <Card variant="bordered" className="hidden md:block">
            {/* 表頭 */}
            <div className="flex bg-white">
              <div className="flex-[309] px-4 py-3 border-b border-[#E5E8EB]">
                <p className="text-sm text-[#171712] font-medium">Sharing Item</p>
              </div>
              <div className="flex-[317] px-4 py-3 border-b border-[#E5E8EB]">
                <p className="text-sm text-[#171712] font-medium">Sharing Content</p>
              </div>
              <div className="flex-[300] px-4 py-3 border-b border-[#E5E8EB]">
                <p className="text-sm text-[#171712] font-medium">Earn GP</p>
              </div>
            </div>

            {/* 表格內容 */}
            <div>
              {GP_METHODS.map((method, index) => (
                <div
                  key={method.title}
                  className={`flex ${index !== GP_METHODS.length - 1 ? 'border-b border-[#E5E8EB]' : ''}`}
                >
                  <div className="flex-[309] px-4 py-2 flex items-center justify-center">
                    <p className="text-sm text-[#171712]">{method.title}</p>
                  </div>
                  <div className="flex-[317] px-4 py-2 flex items-center justify-center">
                    <p className="text-sm text-[#8C7D5E]">{method.description}</p>
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
              <Card key={method.title} variant="bordered" className="p-4">
                <div className="space-y-3">
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowToEarnGP;

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { GOOGLE_BONUS } from '@/lib/constants';

const GoogleBonus = () => {
  return (
    <Section id="google-bonus">
      <Container maxWidth="xl">
        <div className="px-4 sm:px-5">
          <Card variant="bordered" className="p-6 sm:p-8 bg-gradient-to-br from-[#FAB538]/5 to-[#FAB538]/10 border-[#FAB538]/20">
            <div className="space-y-5 sm:space-y-6">
              {/* 標題和描述 */}
              <div className="text-center space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#171712]">
                  {GOOGLE_BONUS.title}
                </h2>
                <p className="text-sm sm:text-base text-[#171712] leading-relaxed max-w-2xl mx-auto">
                  {GOOGLE_BONUS.description}
                </p>
              </div>

              {/* 獎勵列表 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {GOOGLE_BONUS.rewards.map((reward, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E8EB]"
                  >
                    <span className="text-2xl flex-shrink-0">{reward.icon}</span>
                    <p className="text-sm text-[#171712] leading-relaxed">
                      {reward.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* 步驟說明 */}
              <div className="bg-white rounded-lg p-5 sm:p-6 border border-[#E5E8EB]">
                <h3 className="text-base sm:text-lg font-bold text-[#171712] mb-3 sm:mb-4">
                  如何獲得加碼？
                </h3>
                <ol className="space-y-3">
                  {GOOGLE_BONUS.steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm sm:text-base text-[#171712] leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FAB538] text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="flex-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default GoogleBonus;

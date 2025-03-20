/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import { CSSProperties } from 'react';
import { getDeviceType } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqV2Props {
  data?: any;
  style?: CSSProperties;
}

const faqCollape = [
  {
    question: '1. NVBPlay là gì?',
    answer:
      '- NVBPlay là nền tảng thương mại điện tử hàng đầu chuyên cung cấp thời trang và dụng cụ thể thao chất lượng cao, đặc biệt là cầu lông và pickleball. Chúng tôi mang đến trải nghiệm mua sắm nhanh chóng, an toàn, cùng hệ thống tin tức về xu hướng thể thao và cộng đồng.',
  },
  {
    question: '2. Làm sao để bắt đầu dùng NVBPlay?',
    answer: `Hướng dẫn từng bước:<br>
             - Tải NVBPlay từ App Store hoặc CH Play.<br>
             - Đăng ký bằng email hoặc số điện thoại, hoặc đăng nhập qua Google/Facebook.<br>
             - Bắt đầu khám phá sản phẩm hoặc đọc tin tức thể thao ngay trên app.`,
  },
  {
    question: '3. Làm sao để mua hàng trên NVBPlay?',
    answer:
      '- Vào mục "Cửa hàng", chọn sản phẩm (như vợt cầu lông, giày thể thao), thêm vào giỏ hàng, sau đó nhập địa chỉ giao hàng và thanh toán. Bạn sẽ nhận xác nhận đơn hàng ngay lập tức.',
  },
  {
    question: '4. NVBPlay có những tính năng gì?',
    answer: `NVBPlay cung cấ:<br>
             - Mua sắm dụng cụ và thời trang thể thao từ các thương hiệu hàng đầu.<br>
             - Tin tức thể thao với bài viết chuyên sâu về cầu lông, pickleball, đánh giá sản phẩm và hướng dẫn kỹ thuật.<br>
             - Ưu đãi độc quyền và giao hàng nhanh chóng.<br>
             - Kết nối với cộng đồng người yêu thể thao trên toàn thế giới.`,
  },
  {
    question: '5. Làm sao để đọc tin tức trên NVBPlay?',
    answer: `Vào mục "Tin tức" trong app, bạn sẽ thấy các bài viết mới nhất về xu hướng thể thao, đánh giá sản phẩm và tin tức cộng đồng cầu lông, pickleball. Chỉ cần nhấn để đọc ngay.`,
  },
  {
    question: '6. Phải làm gì nếu thanh toán không thành công?',
    answer: `- Kiểm tra kết nối internet và số dư tài khoản/thẻ của bạn.<br>
      - Thử lại hoặc chọn phương thức thanh toán khác (ví dụ: thẻ tín dụng, ví điện tử).<br>
      - Nếu vẫn không được, liên hệ hỗ trợ qua email support@nvbplay.vn.`,
  },
  {
    question: '7. Dữ liệu cá nhân của tôi có an toàn không?',
    answer:
      '- Có, NVBPlay sử dụng mã hóa tiên tiến để bảo vệ thông tin cá nhân và giao dịch của bạn, đảm bảo an toàn tuyệt đối.',
  },
  {
    question: '8. Làm sao để theo dõi đơn hàng?',
    answer:
      '- Vào mục "Đơn hàng" trong app, chọn đơn hàng bạn muốn kiểm tra. App sẽ hiển thị trạng thái cập nhật từ lúc đặt hàng đến khi giao đến tay bạn.',
  },
  {
    question: '9. Tôi có thể đổi trả hàng không?',
    answer:
      '- Có, bạn có thể đổi trả trong vòng 7 ngày nếu sản phẩm lỗi hoặc không đúng mô tả. Vào mục "Hỗ trợ" để gửi yêu cầu và làm theo hướng dẫn.',
  },
];

const FaqV2 = ({ data, style }: FaqV2Props) => {
  const sizeScreen = getDeviceType();
  const isMobile = sizeScreen === 'mobile';
  const title = _.get(data, 'title', 'Title Header');

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div className=" h-[100vh] flex w-full items-center justify-center pt-[120px] 2xl:pt-0">
      <div className="flex flex-col w-full max-w-[960px] px-4 lg:px-0">
        <div className="flex flex-col gap-2 2xl:gap-6 items-center">
          <h2 className="text-base lg:text-[42px] heading-1 text-center flex items-center gap-2 tracking-[-1.4px]">
            NVBPlay
          </h2>
          <h4 className="text-base lg:text-[24px]">Cần hỗ trợ hoặc có thắc mắc?</h4>
        </div>
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full py-[36px] max-lg:py-[16px] flex flex-col gap-3 max-lg:gap-[24px]"
            defaultValue="0"
          >
            {faqCollape.map((item, index) => {
              const updatedAnswer = item.answer.replace(
                /support@chaincapmarket.com/g,
                `<span style="font-weight: 400; color: #eb2a2a;">support@chaincapmarket.com</span>`
              );

              return (
                <AccordionItem
                  value={index.toString()}
                  key={`faq-${index}`}
                  className="bg-white/[0.08] rounded-md lg:rounded-3xl "
                >
                  <AccordionTrigger className="px-[42px] max-lg:px-[16px]">
                    <p className="text-heading3 max-lg:text-[12px]">{item.question}</p>
                  </AccordionTrigger>
                  <AccordionContent className="px-[42px] pb-6 max-lg:pb-[12px] max-lg:px-[12px]">
                    <div
                      dangerouslySetInnerHTML={{ __html: updatedAnswer }}
                      className="text-paragraph1 text-left text-description5 max-lg:text-[13px]"
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqV2;

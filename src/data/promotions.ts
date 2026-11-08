// Sửa nội dung ưu đãi tháng 11 ở file này.

/** Campaign month, 1-indexed. 1/11/2026 is a Sunday. */
export const CAMPAIGN = { year: 2026, month: 11, days: 30 };

// ⚠ Placeholders carried over from the design. Replace before launch.
export const CONTACT = {
  /** Target of the main "Đặt bàn ngay" button in the booking section. */
  bookingHref: "#dat-ban",
  hotline: "1900 xxxx",
};

export const CATEGORIES = {
  nhom: { label: "Đi nhóm & tiệc", color: "#456534" },
  ngaythuong: { label: "Ngày thường", color: "#be5d38" },
  dip: { label: "Dịp đặc biệt", color: "#9a2220" },
  giaohang: { label: "Giao hàng", color: "#5e7085" },
} as const;

export type CategoryId = keyof typeof CATEGORIES;

export const DOW_LABELS = [
  "Chủ nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

/** Day of week for a day in the campaign month: 0 = Chủ nhật. */
export const dayOfWeek = (day: number) => (day - 1) % 7;

const allDays = Array.from({ length: CAMPAIGN.days }, (_, i) => i + 1);
const onWeekdays = (weekdays: number[]) =>
  allDays.filter((day) => weekdays.includes(dayOfWeek(day)));
const between = (from: number, to: number) =>
  allDays.filter((day) => day >= from && day <= to);

export type Promotion = {
  id: string;
  category: CategoryId;
  tag: string;
  title: string;
  description: string;
  when: string;
  where: string;
  conditions: string;
  photo: string;
  cta: string;
  days: number[];
};

export const PROMOTIONS: Promotion[] = [
  {
    id: "nhom-4",
    category: "nhom",
    tag: "Nhóm 4 người — tặng Gà lạnh",
    title: "Đi 4 người, Gà lạnh Koh mời",
    description:
      "Bàn từ 4 người được tặng 1 đĩa Gà lạnh kèm sốt chấm nhà Koh: chua chanh trước, cay ớt sau.",
    when: "Thứ 2 – Thứ 5 · cả tháng",
    where: "Cả 6 đảo",
    conditions:
      "Hóa đơn từ 4 suất chính. Mỗi bàn 1 phần tặng. Không áp dụng cùng ưu đãi khác.",
    photo: "/assets/photos/food-ban-tiec.jpg",
    cta: "Đặt bàn nhóm",
    days: onWeekdays([1, 2, 3, 4]),
  },
  {
    id: "sinh-nhat",
    category: "nhom",
    tag: "Sinh nhật — tặng xôi xoài",
    title: "Sinh nhật tháng 11 ở nhà Koh",
    description:
      "Sinh tháng 11? Koh tặng 1 phần xôi xoài và cả quán hát mừng bằng tiếng Thái cho bạn.",
    when: "01 – 30/11",
    where: "Cả 6 đảo",
    conditions:
      "Xuất trình giấy tờ có ngày sinh tháng 11. Đặt bàn trước ít nhất 1 ngày, bàn từ 4 người.",
    photo: "/assets/photos/interior-ghe-xanh-hong.jpg",
    cta: "Đặt tiệc",
    days: allDays,
  },
  {
    id: "trua-vp",
    category: "ngaythuong",
    tag: "Set trưa 129K",
    title: "Trưa văn phòng, no tới chiều",
    description:
      "Cơm hoặc bún, 1 món yam và 1 trà Thái. Ra món trong 15 phút, kịp giờ quay lại bàn làm việc.",
    when: "11:00 – 14:00 · Thứ 2 – Thứ 6",
    where: "Cả 6 đảo",
    conditions: "Chỉ áp dụng ăn tại quán. Món trong set có thể thay đổi theo ngày.",
    photo: "/assets/photos/food-bo-kho-thai.jpg",
    cta: "Xem set trưa",
    days: onWeekdays([1, 2, 3, 4, 5]),
  },
  {
    id: "thu-ba-cay",
    category: "ngaythuong",
    tag: "Món cay cấp 3 — giảm 20%",
    title: "Thứ Ba leo Núi Lửa",
    description:
      "Gọi món ở mức cay cấp 3 vào thứ Ba, Koh giảm 20% món đó. Leo tới đỉnh là hết sợ cay.",
    when: "Mọi thứ Ba",
    where: "Cả 6 đảo",
    conditions: "Giảm trên giá món cay cấp 3, tối đa 2 món mỗi bàn.",
    photo: "/assets/photos/food-bo-kho-thai.jpg",
    cta: "Đặt bàn ngay",
    days: onWeekdays([2]),
  },
  {
    id: "tra-chieu",
    category: "ngaythuong",
    tag: "Trà Thái mua 1 tặng 1",
    title: "Giờ trà chiều 15h – 17h",
    description:
      "Trà sữa Thái, trà chanh Thái: mua 1 tặng 1 cho khách ngồi tại quán. Thêm xôi xoài cho đủ vị.",
    when: "15:00 – 17:00 · Thứ 2 – Thứ 6",
    where: "Cả 6 đảo",
    conditions: "Tặng món cùng loại hoặc giá thấp hơn. Không áp dụng mang đi.",
    photo: "/assets/photos/interior-chu-thai.jpg",
    cta: "Ghé chiều nay",
    days: onWeekdays([1, 2, 3, 4, 5]),
  },
  {
    id: "thay-co",
    category: "dip",
    tag: "Thầy cô — giảm 11%",
    title: "20/11, Koh mời thầy cô",
    description:
      "Thầy cô và nhóm học trò đi cùng được giảm 11% tổng hóa đơn. Sawasdee khoo!",
    when: "18 – 20/11",
    where: "Cả 6 đảo",
    conditions: "Xuất trình thẻ giáo viên hoặc giấy xác nhận. Tối đa 10 người mỗi bàn.",
    photo: "/assets/photos/facade-giang-vo.jpg",
    cta: "Đặt bàn tri ân",
    days: between(18, 20),
  },
  {
    id: "thu-sau",
    category: "dip",
    tag: "Hóa đơn 800K — voucher 100K",
    title: "Cuối tháng, mâm vẫn đầy",
    description: "Hóa đơn từ 800K nhận voucher 100K cho lần ghé sau trong tháng 12.",
    when: "27 – 29/11",
    where: "Cả 6 đảo",
    conditions: "Voucher dùng từ 01/12 – 31/12/2026, 1 voucher mỗi hóa đơn.",
    photo: "/assets/photos/food-ban-tiec.jpg",
    cta: "Đặt bàn ngay",
    days: between(27, 29),
  },
  {
    id: "giao-hang",
    category: "giaohang",
    tag: "Đơn từ 300K — miễn phí giao",
    title: "Koh giao tận nhà, cay vẫn đủ",
    description: "Đặt qua Zalo OA Koh Yam, đơn từ 300K miễn phí giao trong bán kính 5 km.",
    when: "10:00 – 21:00 · cả tháng",
    where: "Cả 6 đảo · qua Zalo OA",
    conditions:
      "Chỉ áp dụng đặt trực tiếp qua Zalo OA hoặc hotline, không áp dụng app giao hàng.",
    photo: "/assets/photos/facade-2d-quang-trung.jpg",
    cta: "Đặt giao hàng",
    days: allDays,
  },
];

export const ISLANDS = [
  {
    slug: "giang-vo",
    short: "Giảng Võ",
    title: "Rừng Giòn: gắp trước, kẻo hết",
    description: "Bàn từ 3 người tặng 1 đĩa khoai môn chiên giòn.",
    when: "Cả tháng 11",
    address: "116K1 Giảng Võ",
  },
  {
    slug: "quang-trung-34a",
    short: "34A Q.Trung",
    title: "Biển Đỏ: ra khơi cùng cả bàn",
    description: "Lẩu Tom Yum hải sản giảm 15% cho bàn từ 6 người.",
    when: "Thứ 6 – Chủ nhật",
    address: "34A Quang Trung",
  },
  {
    slug: "quang-trung-2d",
    short: "2D Q.Trung",
    title: "Tặng chè khúc bạch Thái",
    description: "Mỗi hóa đơn từ 500K tặng 1 phần chè tráng miệng.",
    when: "Cả tháng 11",
    address: "2D Quang Trung",
  },
  {
    slug: "ba-trieu",
    short: "Bà Triệu",
    title: "Suối Thảo Mộc: trà sả miễn phí",
    description: "Trà sả gừng nóng miễn phí cho cả bàn khi trời trở lạnh.",
    when: "Thứ 2 – Thứ 5",
    address: "Bà Triệu",
  },
  {
    slug: "ho-tung-mau",
    short: "Hồ Tùng Mậu",
    title: "Sông Băng: mát giữa mâm cay",
    description: "Thêm 1 ly trà Thái đá xay chỉ 19K khi gọi món cay.",
    when: "Cả tháng 11",
    address: "Hồ Tùng Mậu",
  },
  {
    slug: "ba-huyen-thanh-quan",
    short: "BH Thanh Quan",
    title: "Núi Lửa: hết sợ cay",
    description: "Ăn hết món cay cấp 5 được tặng 1 xôi xoài và lên bảng vàng của đảo.",
    when: "Thứ 7 – Chủ nhật",
    address: "Bà Huyện Thanh Quan",
  },
];

export const FAQS = [
  {
    question: "Có được dùng nhiều ưu đãi cùng lúc không?",
    answer:
      "Mỗi hóa đơn dùng 1 ưu đãi chung. Ưu đãi riêng của từng đảo có thể cộng thêm, trừ khi điều kiện ghi khác.",
  },
  {
    question: "Có cần đặt bàn trước không?",
    answer:
      "Nên đặt trước cho bàn từ 4 người và các chương trình sinh nhật, 20/11. Nhắn mã ưu đãi khi đặt để Koh chuẩn bị sẵn.",
  },
  {
    question: "Ưu đãi có áp dụng cho ngày lễ không?",
    answer:
      "Các chương trình áp dụng theo đúng lịch đã ghi. Koh sẽ báo trước nếu có thay đổi trên Fanpage và Zalo OA.",
  },
  {
    question: "Đặt qua app giao hàng có được ưu đãi không?",
    answer: "Ưu đãi giao hàng chỉ áp dụng khi đặt trực tiếp qua Zalo OA Koh Yam hoặc hotline.",
  },
  {
    question: "Giá đã gồm VAT chưa?",
    answer: "Giá và mức giảm tính trên giá menu, chưa gồm VAT và phí dịch vụ (nếu có).",
  },
];

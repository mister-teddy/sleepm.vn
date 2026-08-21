export type Lang = "en" | "vi";
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = "vi";

export const languages: Record<Lang, { code: Lang; label: string; native: string; locale: string }> = {
  en: { code: "en", label: "English", native: "English", locale: "en-US" },
  vi: { code: "vi", label: "Vietnamese", native: "Tiếng Việt", locale: "vi-VN" },
};

export const langCodes = Object.keys(languages) as Lang[];

export const siteMeta = {
  name: "SleepM",
  description: {
    en: "Vietnamese information website for SleepM Global Inc., BioCrystal technology, products, research and official contact channels.",
    vi: "Cổng thông tin tiếng Việt về SleepM Global Inc., công nghệ BioCrystal, sản phẩm, nghiên cứu và kênh liên hệ chính thức.",
  },
};

export function tx<T>(lang: Lang, value: Localized<T>): T {
  return value[lang] ?? value.en;
}

export function pathFor(lang: Lang, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized === "/" ? "/" : normalized}`;
}

export function switchPath(pathname: string, lang: Lang) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "vi") parts.shift();
  const rest = parts.length ? `/${parts.join("/")}/` : "/";
  return pathFor(lang, rest);
}

export const common = {
  nav: {
    home: { en: "Home", vi: "Home" },
    about: { en: "About", vi: "About" },
    products: { en: "Products", vi: "Products" },
    crystals: { en: "Biocrystals", vi: "Biocrystals" },
    warranty: { en: "Warranty", vi: "Warranty" },
    sleepHealth: { en: "Sleep Health", vi: "Sleep Health" },
    redefining: { en: "Redefining the sleep standard", vi: "Redefining the sleep standard" },
    testimonials: { en: "Testimonials", vi: "Testimonials" },
    constellation: { en: "Ingredients", vi: "Thành phần" },
    nightWire: { en: "Blog", vi: "Tin tức" },
    family: { en: "About", vi: "Về SleepM" },
    distributors: { en: "Legal FAQ", vi: "FAQ pháp lý" },
    signIn: { en: "Global Site", vi: "Website toàn cầu" },
    contact: { en: "Contact us", vi: "Contact us" },
  },
  labels: {
    collection: { en: "Product line", vi: "Dòng sản phẩm" },
    allProducts: { en: "All products", vi: "Tất cả sản phẩm" },
    askFamily: { en: "Request information", vi: "Gửi yêu cầu thông tin" },
    becomeDistributor: { en: "Terms-Conditions", vi: "Terms-Conditions" },
    backCollection: { en: "Back to the collection", vi: "Quay lại bộ sưu tập" },
    exploreCollection: { en: "Explore the collection", vi: "Khám phá bộ sưu tập" },
    learnMore: { en: "Learn more", vi: "Tìm hiểu thêm" },
    enter: { en: "Enter", vi: "Xem" },
    language: { en: "Language", vi: "Ngôn ngữ" },
    menu: { en: "Menu", vi: "Menu" },
    close: { en: "Close", vi: "Đóng" },
    theme: { en: "Light mode", vi: "Chế độ sáng" },
    send: { en: "Send", vi: "Gửi" },
  },
  footer: {
    nightKept: { en: "Sleep Better, Live Better.", vi: "Ngủ ngon hơn, sống tốt hơn." },
    disclaimer: {
      en: "sleepm.vn is an informational Vietnamese website about SleepM Global Inc. It is not a Vietnam ecommerce store, does not process orders or payments, and does not represent a separate SleepM Vietnam legal entity. SleepM products are wellness and comfort products, not medical devices, and are not intended to diagnose, treat, cure, or prevent any disease.",
      vi: "sleepm.vn là website thông tin tiếng Việt về SleepM Global Inc. Website không phải cửa hàng thương mại điện tử tại Việt Nam, không xử lý đặt hàng hoặc thanh toán, và không thể hiện có pháp nhân SleepM Việt Nam riêng biệt. Sản phẩm SleepM là sản phẩm chăm sóc sự thoải mái và sức khỏe tổng quát, không phải thiết bị y tế và không nhằm chẩn đoán, điều trị, chữa khỏi hoặc phòng ngừa bệnh.",
    },
    appTitle: { en: "Global resources", vi: "Tài nguyên toàn cầu" },
    appText: {
      en: "Scan with your phone camera to open SleepM resources and app information when available.",
      vi: "Quét bằng camera điện thoại để mở tài nguyên SleepM và thông tin ứng dụng khi có.",
    },
    legalTitle: { en: "Everything else", vi: "Thông tin khác" },
  },
  noPrices: {
    eyebrow: { en: "Information only", vi: "Chỉ cung cấp thông tin" },
    title: { en: "Request product information through official channels.", vi: "Gửi yêu cầu tìm hiểu sản phẩm qua kênh chính thức." },
    text: {
      en: "sleepm.vn does not show prices, create carts, confirm orders, process payments, or conclude local ecommerce transactions.",
      vi: "sleepm.vn không hiển thị giá, không tạo giỏ hàng, không xác nhận đơn, không xử lý thanh toán và không giao kết giao dịch thương mại điện tử nội địa.",
    },
  },
};

export const navLinks = [
  { key: "home", path: "/" },
  { key: "about", path: "/about/" },
  { key: "crystals", path: "/crystals/" },
  { key: "warranty", path: "/warranty/" },
  { key: "products", path: "/products/" },
  { key: "sleepHealth", path: "/sleep-health/" },
  { key: "redefining", path: "/redefining-the-sleep-standard/" },
  { key: "testimonials", path: "/testimonials/" },
] as const;

export const footerLinks = [
  { label: { en: "Sleep Health", vi: "Sleep Health" }, path: "/sleep-health/" },
  { label: { en: "Redefining the sleep standard", vi: "Redefining the sleep standard" }, path: "/redefining-the-sleep-standard/" },
  { label: { en: "Testimonials", vi: "Testimonials" }, path: "/testimonials/" },
  { label: { en: "No ecommerce", vi: "Không TMĐT" }, path: "/payments/" },
  { label: { en: "Warranty", vi: "Warranty" }, path: "/warranty/" },
  { label: { en: "Terms-Conditions", vi: "Terms-Conditions" }, path: "/terms/" },
  { label: { en: "Privacy", vi: "Quyền riêng tư" }, path: "/privacy/" },
] as const;

export const productNav = [
  { label: { en: "Sleepm Mattress", vi: "Sleepm Mattress" }, slug: "mattress" },
  { label: { en: "Sleepm Toppers", vi: "Sleepm Toppers" }, slug: "topper" },
  { label: { en: "Sleepm Pillows", vi: "Sleepm Pillows" }, slug: "pillows" },
  { label: { en: "Sleepm Mini Biocrystal Pad", vi: "Sleepm Mini Biocrystal Pad" }, slug: "heating-pad" },
  { label: { en: "Sleepm Eye Mask", vi: "Sleepm Eye Mask" }, slug: "eye-mask" },
] as const;

export type Product = {
  slug: string;
  image: string;
  gallery: string[];
  name: Localized;
  eyebrow: Localized;
  title: Localized;
  summary: Localized;
  collectionLine: Localized;
  details: Localized<string[]>;
  features: { title: Localized; text: Localized }[];
  specs: { label: Localized; value: Localized }[];
};

export const products: Product[] = [
  {
    slug: "mattress",
    image: "/images/wp/mattress-hero.png",
    gallery: ["/images/wp/mattress-hero.png", "/images/wp/mattress-room.png"],
    name: { en: "Sleepm Mattress", vi: "Sleepm Mattress" },
    eyebrow: { en: "SLEEPM Mattresses", vi: "SLEEPM Mattresses" },
    title: {
      en: "Premium natural mattress with 16 BioCrystal types, gold and silver.",
      vi: "Nệm thủ công hữu cơ tự nhiên cao cấp với công nghệ 16 loại Pha Lê Sinh Học, bạc và vàng.",
    },
    summary: {
      en: "SleepM presents its mattress as a sleep wellness product made in the United States and Canada with premium materials and a BioCrystal insert.",
      vi: "SleepM giới thiệu nệm pha lê sinh học như sản phẩm chăm sóc sức khỏe giấc ngủ, được thiết kế và sản xuất tại Mỹ và Canada bằng vật liệu chất lượng cao.",
    },
    collectionLine: {
      en: "The flagship SleepM product with BioCrystal, cooling foam, Thai natural latex, activated carbon and micro-coil technology.",
      vi: "Sản phẩm chủ lực với BioCrystal, bọt mát lạnh, cao su thiên nhiên Thái Lan, than hoạt tính và công nghệ micro-coil.",
    },
    details: {
      en: [
        "The WordPress backup describes the SleepM mattress as a breakthrough orthopedic sleep product combining modern materials with ancient BioCrystal properties.",
        "The mattress is presented with cooling gel memory foam, activated carbon, Thai natural latex and medical copper micro-coils for airflow and support.",
      ],
      vi: [
        "Backup WordPress mô tả nệm pha lê sinh học SleepM là thành tựu kỹ thuật của nệm chỉnh hình, phối hợp vật liệu hiện đại với đặc tính pha lê sinh học.",
        "Cấu tạo được giới thiệu gồm Cool Gel Memory Foam, than hoạt tính, cao su thiên nhiên Thái Lan và kỹ nghệ ống đồng y khoa micro-coil để tăng độ thoáng và nâng đỡ.",
      ],
    },
    features: [
      {
        title: { en: "BioCrystal mixture", vi: "Hỗn hợp pha lê sinh học" },
        text: {
          en: "Sixteen crystal types are combined with gold and silver in the SleepM insert.",
          vi: "Miếng đệm chèn gồm 16 loại pha lê sinh học phối hợp với bạc và vàng theo nội dung backup.",
        },
      },
      {
        title: { en: "Made in USA and Canada", vi: "Sản xuất tại Mỹ và Canada" },
        text: {
          en: "The restored content states that SleepM mattresses are designed and produced with high-quality materials in the United States and Canada.",
          vi: "Nội dung backup nêu rằng nệm được thiết kế và sản xuất bằng vật liệu chất lượng cao tại Hoa Kỳ và Canada.",
        },
      },
      {
        title: { en: "Comfort materials", vi: "Vật liệu tiện nghi" },
        text: {
          en: "Cooling gel memory foam, activated carbon and Thai natural latex are presented as core comfort layers.",
          vi: "Bọt mát lạnh, than hoạt tính và cao su thiên nhiên Thái Lan được trình bày là các lớp vật liệu chính.",
        },
      },
      {
        title: { en: "Micro-coil support", vi: "Nâng đỡ micro-coil" },
        text: {
          en: "The backup describes approximately 2,000 small copper micro-coils used to support breathability and pressure relief.",
          vi: "Backup mô tả khoảng 2.000 ống đồng y khoa nhỏ trên một nệm để hỗ trợ thông thoáng và giảm sức ép.",
        },
      },
    ],
    specs: [
      { label: { en: "Single / Twin", vi: "Nệm cỡ đơn" }, value: { en: "39 x 75 in / 99.06 x 190.5 cm", vi: "39 x 75 inch / 99,06 x 190,5 cm" } },
      { label: { en: "Double", vi: "Nệm đôi" }, value: { en: "54 x 75 in / 137.16 x 190.5 cm", vi: "54 x 75 inch / 137,16 x 190,5 cm" } },
      { label: { en: "Queen", vi: "Nệm cỡ Queen" }, value: { en: "60 x 80 in / 152.4 x 203.2 cm", vi: "60 x 80 inch / 152,4 x 203,2 cm" } },
      { label: { en: "King", vi: "Nệm cỡ King" }, value: { en: "76 x 80 in / 193.04 x 203.2 cm", vi: "76 x 80 inch / 193,04 x 203,2 cm" } },
      { label: { en: "California King", vi: "Nệm cỡ King California" }, value: { en: "72 x 84 in / 182.88 x 213.36 cm", vi: "72 x 84 inch / 182,88 x 213,36 cm" } },
    ],
  },
  {
    slug: "topper",
    image: "/images/wp/topper.jpg",
    gallery: ["/images/wp/topper.jpg", "/images/wp/mattress-room.png"],
    name: { en: "Sleepm Toppers", vi: "Sleepm Toppers" },
    eyebrow: { en: "Classic Biocrystal Toppers", vi: "Classic Biocrystal Toppers" },
    title: {
      en: "Classic BioCrystal topper for an existing mattress.",
      vi: "Đệm ngủ pha lê sinh học truyền thống SleepM cho chiếc nệm đang sử dụng.",
    },
    summary: {
      en: "The backup presents SleepM toppers as layered smart sleep technology with temperature-responsive memory foam and the same BioCrystal concept used in the mattress.",
      vi: "Backup giới thiệu Topper SleepM là công nghệ ngủ thông minh nhiều lớp, dùng memory foam phản ứng với nhiệt độ và công nghệ BioCrystal tương tự nệm SleepM.",
    },
    collectionLine: {
      en: "A topper option for customers who want BioCrystal benefits while keeping their existing mattress.",
      vi: "Lựa chọn cho khách muốn dùng thêm lớp BioCrystal nhưng vẫn giữ chiếc nệm yêu thích hiện tại.",
    },
    details: {
      en: [
        "The restored product page describes the classic topper, 7-zone black diamond series and 7-zone blue diamond series.",
        "The topper content highlights smart foam, cool-channel ventilation, activated carbon, Thai natural latex and breathable mesh.",
      ],
      vi: [
        "Trang backup nhắc đến Biocrystal Classic Series, 7-Zone Black Diamond Series và 7-Zone Blue Diamond Series.",
        "Nội dung tập trung vào bọt thông minh, rãnh thông gió làm mát, than hoạt tính, cao su thiên nhiên Thái Lan và vỏ bọc lưới thoáng khí.",
      ],
    },
    features: [
      {
        title: { en: "Temperature-responsive foam", vi: "Bọt thông minh cảm ứng nhiệt" },
        text: {
          en: "The backup describes smart foam that responds to temperature and supports a cooler sleep surface.",
          vi: "Backup mô tả bọt thông minh phản ứng với nhiệt độ, hỗ trợ bề mặt ngủ mát mẻ hơn.",
        },
      },
      {
        title: { en: "7-zone pressure relief", vi: "Thiết kế 7 vùng" },
        text: {
          en: "The multi-surface design is presented as adding support and easing pressure points.",
          vi: "Thiết kế đa bề mặt được giới thiệu để tăng nâng đỡ và giảm các điểm áp lực.",
        },
      },
      {
        title: { en: "BioCrystal insert", vi: "Miếng đệm BioCrystal" },
        text: {
          en: "The topper includes the BioCrystal concept for customers who do not want to replace the full mattress.",
          vi: "Topper sử dụng công nghệ BioCrystal cho khách hàng chưa muốn thay toàn bộ nệm.",
        },
      },
    ],
    specs: [
      { label: { en: "Series", vi: "Dòng sản phẩm" }, value: { en: "Biocrystal Classic, 7-Zone Black Diamond, 7-Zone Blue Diamond", vi: "Biocrystal Classic, 7-Zone Black Diamond, 7-Zone Blue Diamond" } },
      { label: { en: "Materials", vi: "Vật liệu" }, value: { en: "Cool gel memory foam, BioCrystal mixture, Thai natural latex, activated carbon", vi: "Cool Gel Memory Foam, hỗn hợp BioCrystal, cao su thiên nhiên Thái Lan, than hoạt tính" } },
      { label: { en: "Purpose", vi: "Mục đích" }, value: { en: "Add a BioCrystal layer to an existing mattress", vi: "Bổ sung lớp BioCrystal cho nệm hiện tại" } },
    ],
  },
  {
    slug: "pillows",
    image: "/images/wp/pillow.jpg",
    gallery: ["/images/wp/pillow.jpg", "/images/wp/mattress-room.png"],
    name: { en: "Sleepm Pillows", vi: "Sleepm Pillows" },
    eyebrow: { en: "BioCrystal Pillow", vi: "BioCrystal Pillow" },
    title: {
      en: "Find the pillow that's right for you.",
      vi: "Chọn chiếc gối phù hợp cho tư thế ngủ và cột sống cổ.",
    },
    summary: {
      en: "The backup presents Butterfly, Polar Bear, Panda and Camel pillows for different feel, support and height needs.",
      vi: "Backup giới thiệu bốn dòng gối Butterfly, Polar Bear, Panda và Camel cho các nhu cầu nâng đỡ, chất liệu và độ cao khác nhau.",
    },
    collectionLine: {
      en: "Four SleepM pillow types: Butterfly, Polar Bear, Panda and Camel.",
      vi: "Bốn kiểu gối SleepM: Butterfly, Polar Bear, Panda và Camel.",
    },
    details: {
      en: [
        "The restored page states that a proper pillow affects comfortable sleep and cervical spine support.",
        "SleepM pillow shapes are described as supporting the curve of the neck and the back of the skull.",
      ],
      vi: [
        "Trang backup nêu rằng chọn gối phù hợp có tác động quan trọng đến giấc ngủ thoải mái và sức khỏe cột sống cổ.",
        "Gối SleepM được mô tả là nâng đỡ phần cong của cổ và phần lồi hộp sọ phía sau đầu để đầu, cổ và vai được nghỉ ngơi.",
      ],
    },
    features: [
      {
        title: { en: "Butterfly", vi: "Butterfly" },
        text: { en: "Magnetic therapy and BioCrystal support.", vi: "Trị liệu từ tính pha lê sinh học, theo nội dung backup." },
      },
      {
        title: { en: "Polar Bear", vi: "Polar Bear" },
        text: { en: "Memory foam pillow option.", vi: "Gối năng lượng bọt gel hoạt tính pha lê sinh học." },
      },
      {
        title: { en: "Panda", vi: "Panda" },
        text: { en: "Latex bounce pillow option.", vi: "Gối năng lượng đàn hồi pha lê sinh học." },
      },
      {
        title: { en: "Camel", vi: "Camel" },
        text: { en: "Height-adjust pillow option.", vi: "Gối năng lượng đa năng, hỗ trợ điều chỉnh độ cao." },
      },
    ],
    specs: [
      { label: { en: "Types", vi: "Kiểu gối" }, value: { en: "Butterfly, Polar Bear, Panda, Camel", vi: "Butterfly, Polar Bear, Panda, Camel" } },
      { label: { en: "Focus", vi: "Trọng tâm" }, value: { en: "Cervical spine support, comfort and posture", vi: "Hỗ trợ cột sống cổ, sự thoải mái và tư thế ngủ" } },
      { label: { en: "Backup note", vi: "Ghi chú từ backup" }, value: { en: "The page also describes shoulder support and adjustable height.", vi: "Trang backup cũng mô tả nâng đỡ vai và hai độ cao để lựa chọn." } },
    ],
  },
  {
    slug: "heating-pad",
    image: "/images/wp/biocrystal-pad.jpg",
    gallery: ["/images/wp/biocrystal-pad.jpg"],
    name: { en: "Sleepm Mini Biocrystal Pad", vi: "Sleepm Mini Biocrystal Pad" },
    eyebrow: { en: "Mini Biocrystal Pad", vi: "Đệm cá nhân năng lượng pha lê sinh học" },
    title: {
      en: "Personal BioCrystal pad with the SleepM crystal formula.",
      vi: "Đệm cá nhân năng lượng pha lê sinh học với công thức tinh thể SleepM.",
    },
    summary: {
      en: "The backup presents the mini BioCrystal pad as a personal pad using the 16-crystal, gold and silver mixture.",
      vi: "Backup giới thiệu đệm cá nhân BioCrystal như sản phẩm dùng miếng đệm chèn gồm 16 loại pha lê sinh học phối hợp bạc và vàng.",
    },
    collectionLine: {
      en: "A personal BioCrystal pad referenced by the backup as portable support for daily rest routines.",
      vi: "Đệm cá nhân BioCrystal được backup mô tả cho các thói quen nghỉ ngơi hằng ngày.",
    },
    details: {
      en: [
        "The restored page states that each BioCrystal insert takes about 140 to 160 hours to complete by hand.",
        "The backup also notes a washable graphite pouch and asks visitors to contact a distributor for purchasing options.",
      ],
      vi: [
        "Trang backup nêu mỗi miếng đệm chèn mất khoảng 140 - 160 tiếng thủ công để hoàn tất theo công thức khoa học.",
        "Nội dung backup cũng nhắc đến túi graphite có thể giặt và ghi chú liên hệ nhà phân phối để biết lựa chọn mua hàng; sleepm.vn hiện chỉ cung cấp thông tin.",
      ],
    },
    features: [
      {
        title: { en: "Crystal formula", vi: "Công thức pha lê" },
        text: {
          en: "SleepM describes the insert as a 16-crystal blend with gold and silver.",
          vi: "SleepM mô tả miếng đệm chèn gồm 16 loại pha lê sinh học phối hợp bạc và vàng.",
        },
      },
      {
        title: { en: "Handmade insert", vi: "Miếng đệm thủ công" },
        text: {
          en: "The backup states that each insert takes around 140 to 160 hours to complete.",
          vi: "Backup nêu mỗi miếng đệm chèn mất khoảng 140 - 160 tiếng để hoàn tất.",
        },
      },
      {
        title: { en: "Information only", vi: "Chỉ cung cấp thông tin" },
        text: {
          en: "The backup says retail is not sold directly; sleepm.vn does not process orders or payments.",
          vi: "Backup ghi không bán lẻ trực tiếp; sleepm.vn không xử lý đặt hàng hoặc thanh toán.",
        },
      },
    ],
    specs: [
      { label: { en: "Formula", vi: "Công thức" }, value: { en: "16 BioCrystal types with gold and silver", vi: "16 loại pha lê sinh học phối hợp bạc và vàng" } },
      { label: { en: "Production note", vi: "Ghi chú sản xuất" }, value: { en: "About 140-160 hours per insert, according to the backup", vi: "Khoảng 140 - 160 tiếng cho mỗi miếng đệm, theo backup" } },
      { label: { en: "Transaction status", vi: "Trạng thái giao dịch" }, value: { en: "No local retail checkout on sleepm.vn", vi: "Không bán lẻ hoặc checkout nội địa trên sleepm.vn" } },
    ],
  },
  {
    slug: "eye-mask",
    image: "/images/wp/eye-mask.webp",
    gallery: ["/images/wp/eye-mask.webp", "/images/wp/eye-mask-benefits.png"],
    name: { en: "Sleepm Eye Mask", vi: "Sleepm Eye Mask" },
    eyebrow: { en: "Crystal Eye Mask", vi: "Mặt nạ pha lê sinh học" },
    title: {
      en: "A SleepM eye mask page restored from the backup.",
      vi: "Mặt nạ mắt SleepM theo nội dung và hình ảnh từ backup.",
    },
    summary: {
      en: "The restored Eye Mask page mainly contains product imagery and a bilingual benefits chart. sleepm.vn presents it as product information only.",
      vi: "Trang Eye Mask trong backup chủ yếu gồm hình sản phẩm và bảng công dụng song ngữ. sleepm.vn trình bày nội dung này để tham khảo sản phẩm.",
    },
    collectionLine: {
      en: "Product imagery and benefits chart from the WordPress backup.",
      vi: "Hình sản phẩm và bảng công dụng từ WordPress backup.",
    },
    details: {
      en: [
        "The backup labels the product as Crystal Eye Mask and shows an English/Vietnamese benefits list.",
        "This static page keeps those visuals while avoiding direct medical treatment claims by presenting them as informational product material.",
      ],
      vi: [
        "Backup ghi Crystal Eye Mask và hiển thị bảng công dụng tiếng Anh/tiếng Việt.",
        "Trang static giữ lại hình ảnh đó, đồng thời trình bày dưới dạng thông tin sản phẩm, không phải hướng dẫn điều trị y tế.",
      ],
    },
    features: [
      {
        title: { en: "Backup visual", vi: "Hình ảnh từ backup" },
        text: { en: "The main product image comes from the Eye Mask page referenced in the backup.", vi: "Ảnh chính lấy từ trang Eye Mask được backup tham chiếu." },
      },
      {
        title: { en: "Benefits chart", vi: "Bảng công dụng" },
        text: { en: "The WordPress backup included a bilingual chart for eye mask benefits.", vi: "Backup WordPress có bảng công dụng song ngữ cho mặt nạ mắt." },
      },
      {
        title: { en: "Information only", vi: "Chỉ cung cấp thông tin" },
        text: { en: "No order, cart or checkout is provided on sleepm.vn.", vi: "sleepm.vn không cung cấp đặt hàng, giỏ hàng hoặc thanh toán." },
      },
    ],
    specs: [
      { label: { en: "Backup label", vi: "Tên trong backup" }, value: { en: "Crystal Eye Mask", vi: "Crystal Eye Mask / Mặt nạ pha lê sinh học" } },
      { label: { en: "Visible materials", vi: "Tài liệu hiển thị" }, value: { en: "Product image and bilingual benefits chart", vi: "Ảnh sản phẩm và bảng công dụng song ngữ" } },
      { label: { en: "Website role", vi: "Vai trò website" }, value: { en: "Product information only", vi: "Chỉ cung cấp thông tin sản phẩm" } },
    ],
  },
];

export const crystalIntro = {
  eyebrow: { en: "Experience Better Sleep with SleepM BioCrystal", vi: "Trải nghiệm giấc ngủ tốt hơn với SleepM BioCrystal" },
  title: { en: "BioCrystal mixture: sixteen crystals plus gold and silver.", vi: "Hỗn hợp tinh thể sinh học: 16 loại pha lê phối hợp với vàng và bạc." },
  text: {
    en: "The restored WordPress page describes BioCrystal as a unique mixture of 16 ancient crystal types amplified by gold and silver. This ingredient story is product information, not medical advice.",
    vi: "Trang WordPress backup mô tả BioCrystal là hỗn hợp 16 loại pha lê sinh học cổ xưa được khuếch đại qua vàng và bạc. Nội dung thành phần là thông tin sản phẩm, không phải tư vấn y tế.",
  },
};

export const crystals = [
  { key: "amethyst", img: "/images/crystals/amethyst.webp", name: { en: "Amethyst", vi: "Đá Thạch Anh tím" }, role: { en: "protection stone", vi: "năng lượng bảo vệ" }, lore: { en: "The backup says Amethyst is associated with protection, hormone production, endocrine activity and a calmer spirit.", vi: "Mang năng lượng bảo vệ mạnh mẽ, hỗ trợ sản xuất hoc môn, kích thích hoạt động nội tiết và sự trao đổi chất. Giúp trí óc và tinh thần hưng phấn, bớt nóng giận, giảm lo sợ, hồi hộp." } },
  { key: "aventurine", img: "/images/crystals/aventurine.webp", name: { en: "Aventurine", vi: "Đá pha lê xanh" }, role: { en: "green crystal", vi: "tinh thần lạc quan" }, lore: { en: "The backup associates Aventurine with environmental pollutants, electromagnetic smog, inflammation and positive emotions.", vi: "Giúp giảm thiểu sự xâm nhập vào cơ thể từ ô nhiễm môi trường và sóng điện từ, chống viêm sưng khớp, hỗ trợ tim, phổi, tiết niệu, cơ bắp. Giúp tinh thần lạc quan, chống trầm cảm và suy nghĩ tiêu cực." } },
  { key: "citrine", img: "/images/crystals/citrine.webp", name: { en: "Citrine", vi: "Đá Thạch Anh Xi tren vàng" }, role: { en: "yellow quartz", vi: "cân bằng chuyển hóa" }, lore: { en: "The backup says Citrine is associated with chemical balance, digestion, blood circulation and constipation.", vi: "Đóng vai trò tích cực trong cân bằng chuyển hóa sinh học nội sinh, giúp hệ thần kinh, tiêu hóa tốt, lá lách, tuyến tụy, ổn định đường huyết do bệnh tiểu đường, giúp nhuận trường." } },
  { key: "fluorspar", img: "/images/crystals/fluorspar.webp", name: { en: "Fluorspar", vi: "Đá Huỳnh Thạch tím" }, role: { en: "fluorite", vi: "bảo vệ từ trường" }, lore: { en: "The backup describes Fluorspar as a protective crystal associated with electromagnetic smog and emotional calm.", vi: "Phát ra năng lượng từ trường bảo vệ sự xâm nhập của sóng điện từ, giúp tinh thần thư giãn, xua tan cảm giác tiêu cực, sợ hãi." } },
  { key: "heliotrope", img: "/images/crystals/heliotrope.webp", name: { en: "Heliotrope", vi: "Đá Huyết / Heliotrope" }, role: { en: "bloodstone", vi: "điều hòa máu huyết" }, lore: { en: "Also known as Bloodstone, the backup associates this crystal with circulation, purification and revitalization.", vi: "Đá vòi voi trong địa chất còn gọi là đá huyết, rất mạnh mẽ hỗ trợ điều hòa máu huyết, giúp lọc và tạo máu mới." } },
  { key: "dalmatian-jasper", img: "/images/crystals/dalmatian-jasper.webp", name: { en: "Dalmatian Jasper", vi: "Đá beo đốm" }, role: { en: "spotted jasper", vi: "đào thải độc tố" }, lore: { en: "The backup notes that the black spots are black tourmaline deposits and associates the stone with cleansing and immune support.", vi: "Các đốm đen của đá được gọi là đốm trầm tích đen, giúp cơ thể có khả năng tự đào thải độc tố, hỗ trợ trực tiếp hệ thống miễn dịch." } },
  { key: "leopard-jasper", img: "/images/crystals/leopard-jasper.webp", name: { en: "Jasper Leopard", vi: "Đá Jasper đốm vàng" }, role: { en: "stability", vi: "ổn định bức xạ" }, lore: { en: "The backup associates its vibrational frequency with stability and openness.", vi: "Tần số rung động của đá pha lê này có khả năng ổn định bức xạ xấu từ môi trường xung quanh. Giúp chúng ta cảm thấy mạnh mẽ, cởi mở và hào phóng hơn." } },
  { key: "natural-jasper", img: "/images/crystals/natural-jasper.webp", name: { en: "Jasper Natural", vi: "Đá Jasper tự nhiên" }, role: { en: "balance", vi: "giảm căng thẳng" }, lore: { en: "The backup says Natural Jasper is associated with stress balance, tranquility and electromagnetic pollution in the environment.", vi: "Giảm căng thẳng thần kinh, tích cực khi kết hợp với các pha lê tổng hợp khác. Giúp đầu óc nhẹ nhàng, thanh thản là yếu tố quan trọng cho giấc ngủ ngon." } },
  { key: "orange-calcite", img: "/images/crystals/orange-calcite.webp", name: { en: "Orange Calcite", vi: "Đá can xít cam" }, role: { en: "creative energy", vi: "sáng tạo và trầm tĩnh" }, lore: { en: "The backup describes Orange Calcite as energizing, cleansing and supportive of emotional balance.", vi: "Loại đá này hỗ trợ năng lực kỳ diệu cho trí não có sức sáng tạo phong phú. Đồng thời cũng giúp bài trừ sóng điện từ có hại từ môi trường xung quanh, giúp trầm cảm, giúp tinh thần trầm tĩnh dễ chịu." } },
  { key: "rose-quartz", img: "/images/crystals/rose-quartz.webp", name: { en: "Rose Quartz", vi: "Đá Thạch Anh Hồng" }, role: { en: "trust and harmony", vi: "chữa lành tinh thần" }, lore: { en: "The backup associates Rose Quartz with trust, harmony, openness and emotional healing.", vi: "Tinh thể của đá này tỏa ra từ trường năng lượng vô hình nhẹ nhàng, giúp chữa lành và hồi phục sự đau đớn về tinh thần, giúp chúng ta có niềm tin vào cuộc sống." } },
  { key: "selenite", img: "/images/crystals/selenite.webp", name: { en: "Selenite", vi: "Đá xelenit trắng sữa" }, role: { en: "purifying", vi: "thanh lọc" }, lore: { en: "The backup associates Selenite with purifying, clearing and creating a clean environment for sleep.", vi: "Tinh thể của đá này có vai trò thanh lọc và bài trừ điện từ xấu từ môi trường xung quanh để giúp não hoàn thành quá trình đi vào giấc ngủ êm ái, nhẹ nhàng." } },
  { key: "serpentine-jade", img: "/images/crystals/serpentine-jade.webp", name: { en: "Serpentine Jade", vi: "Ngọc Serpentine" }, role: { en: "snake jade", vi: "trẻ hóa" }, lore: { en: "The backup calls it snake jade and associates it with health, rejuvenation and positive energy.", vi: "Hay còn gọi là ngọc rắn, biểu tượng của sự trẻ hóa, lành mạnh và khỏe mạnh cho tinh thần và thể xác. Luôn tạo ra xung từ trường tích cực giúp tế bào liên tục tạo ra năng lượng mới, chống tiêu cực, buồn phiền, chán nản." } },
  { key: "sodalite", img: "/images/crystals/sodalite.webp", name: { en: "Sodalite", vi: "Đá xô da lit xanh dương" }, role: { en: "truth and immunity", vi: "trao đổi chất" }, lore: { en: "The backup associates Sodalite with metabolism, immune function and electromagnetic smog.", vi: "Từ trường của tinh thể đá này hỗ trợ sự trao đổi chất và hệ thống miễn dịch hoạt động ổn định. Chống bức xạ và điện từ, chữa lành bệnh mất ngủ kinh niên." } },
  { key: "quartz", img: "/images/crystals/quartz.webp", name: { en: "Clear Quartz", vi: "Thạch anh trắng" }, role: { en: "listed BioCrystal", vi: "thành phần BioCrystal" }, lore: { en: "Listed as part of the 16-crystal BioCrystal story used across SleepM products.", vi: "Được trình bày như một thành phần trong câu chuyện 16 loại pha lê sinh học dùng trong dòng sản phẩm SleepM." } },
  { key: "red-jasper", img: "/images/crystals/red-jasper.webp", name: { en: "Red Jasper", vi: "Jasper đỏ" }, role: { en: "listed BioCrystal", vi: "thành phần BioCrystal" }, lore: { en: "Listed as part of the 16-crystal BioCrystal story used across SleepM products.", vi: "Được trình bày như một thành phần trong câu chuyện 16 loại pha lê sinh học dùng trong dòng sản phẩm SleepM." } },
  { key: "flint", img: "/images/crystals/flint.webp", name: { en: "Flint", vi: "Đá lửa" }, role: { en: "listed BioCrystal", vi: "thành phần BioCrystal" }, lore: { en: "Listed as part of the 16-crystal BioCrystal story used across SleepM products.", vi: "Được trình bày như một thành phần trong câu chuyện 16 loại pha lê sinh học dùng trong dòng sản phẩm SleepM." } },
] as const;

export const metals = [
  { key: "gold", img: "/images/crystals/gold.webp", name: { en: "Gold", vi: "Vàng" }, lore: { en: "Included as one of the two noble metals in the BioCrystal blend.", vi: "Một trong hai kim loại quý trong hỗn hợp BioCrystal." } },
  { key: "silver", img: "/images/crystals/silver.webp", name: { en: "Silver", vi: "Bạc" }, lore: { en: "Included with gold to complete the BioCrystal blend.", vi: "Kết hợp cùng vàng để hoàn thiện hỗn hợp BioCrystal." } },
] as const;

export const wireItems = [
  { source: "Sleepm", title: { en: "Sleepm product line", vi: "Dòng sản phẩm Sleepm" }, note: { en: "Mattress, topper, pillows, warming products, massage accessories, light, dot and app.", vi: "Nệm, topper, gối, sản phẩm làm ấm, phụ kiện massage, đèn, dot và ứng dụng." }, url: "https://sleepm.com/products/" },
  { source: "Sleepm", title: { en: "BioCrystal mattress details", vi: "Chi tiết nệm BioCrystal" }, note: { en: "Materials, sizes and the BioCrystal insert used in Sleepm mattresses.", vi: "Vật liệu, kích thước và lớp lót BioCrystal dùng trong nệm Sleepm." }, url: "https://sleepm.com/mattress/" },
  { source: "Sleepm", title: { en: "Warranty claim process", vi: "Quy trình yêu cầu bảo hành" }, note: { en: "How customers should prepare photos, measurements and product details.", vi: "Khách hàng cần chuẩn bị ảnh, số đo và thông tin sản phẩm như thế nào." }, url: "https://sleepm.com/warranty-claim/" },
  { source: "Sleepm", title: { en: "Sleep health information", vi: "Thông tin sức khỏe giấc ngủ" }, note: { en: "Educational content about sleep quality and everyday wellness.", vi: "Nội dung tham khảo về chất lượng giấc ngủ và sức khỏe hằng ngày." }, url: "https://sleepm.com/sleep-health/" },
  { source: "Sleepm", title: { en: "Global contact channels", vi: "Kênh liên hệ toàn cầu" }, note: { en: "Use sleepm.com for current headquarters, support and store contact information.", vi: "Dùng sleepm.com để xem thông tin hiện hành về trụ sở, hỗ trợ và cửa hàng." }, url: "https://sleepm.com/contact/" },
  { source: "sleepm.vn", title: { en: "Vietnamese information website", vi: "Website thông tin tiếng Việt" }, note: { en: "sleepm.vn is informational and does not process local ecommerce orders or payments.", vi: "sleepm.vn là website thông tin và không xử lý đặt hàng hoặc thanh toán TMĐT nội địa." }, url: "https://sleepm.vn/" },
] as const;

export const family = {
  hero: {
    eyebrow: { en: "About SleepM Global Inc.", vi: "About SleepM Global Inc." },
    title: { en: "Founded in Toronto with a mission around better sleep.", vi: "SleepM Global được thành lập tại Toronto với sứ mệnh về giấc ngủ ngon." },
    text: {
      en: "The restored About page describes SleepM Global as a company founded in Toronto, Canada in 2018, focused on sleep wellness products built around BioCrystal technology.",
      vi: "Trang About trong backup mô tả SleepM Global được thành lập tại Toronto, Canada vào năm 2018, tập trung vào sản phẩm chăm sóc sức khỏe giấc ngủ với công nghệ BioCrystal.",
    },
  },
  chapters: [
    {
      year: "2018",
      title: { en: "Toronto, Canada", vi: "Toronto, Canada" },
      text: { en: "The backup states that SleepM Global was founded in the busy community of Toronto, Canada in 2018.", vi: "Backup nêu SleepM Global được thành lập tại thành phố Toronto, Canada vào năm 2018." },
    },
    {
      year: "BioCrystal",
      title: { en: "Sleep wellness product platform", vi: "Nền tảng sản phẩm sức khỏe giấc ngủ" },
      text: { en: "The About content says the founders wanted a product different from conventional bedding and centered on better sleep quality.", vi: "Nội dung About nêu các nhà sáng lập muốn tạo sản phẩm khác với giường nệm thông thường, tập trung vào cải thiện chất lượng giấc ngủ." },
    },
    {
      year: "Global",
      title: { en: "Vietnamese information website", vi: "Website thông tin tiếng Việt" },
      text: { en: "sleepm.vn presents this backup content in Vietnamese while avoiding a separate SleepM Vietnam company or local ecommerce claim.", vi: "sleepm.vn trình bày nội dung backup bằng tiếng Việt, đồng thời không tự nhận có Công ty SleepM Việt Nam hoặc mô hình bán hàng TMĐT nội địa." },
    },
  ],
};

export const people = [
  { name: "Eric Sternberg", role: { en: "Chairman message", vi: "Thông điệp từ Chủ tịch SleepM" }, img: "/images/wp/eric-sternberg.jpg", bio: { en: "The restored About page includes a chairman message welcoming visitors to SleepM Global Inc. and describing the intent to create a meaningful sleep wellness product.", vi: "Trang About backup có thông điệp chào mừng từ Chủ tịch SleepM Global Inc., nói về mong muốn tạo ra một sản phẩm sức khỏe giấc ngủ có giá trị." } },
  { name: "Emma He, Ph.D", role: { en: "Chief Executive Officer", vi: "Giám đốc điều hành SleepM Global" }, img: "/images/wp/emma-he.jpg", bio: { en: "The backup describes Emma He as a business administration PhD, former university instructor and one of the founders of SleepM Global.", vi: "Backup mô tả Emma He là tiến sĩ điều hành kinh doanh, từng là giảng viên đại học và là một trong những nhà sáng lập SleepM Global." } },
  { name: "Oliver Tang, Ph.D", role: { en: "Vice President", vi: "Phó Chủ Tịch" }, img: "/images/wp/oliver-tang.jpg", bio: { en: "The restored page describes Oliver Tang as leading international market development for SleepM Global.", vi: "Trang backup mô tả Oliver Tang điều hành phương thức phát triển kinh doanh thị trường quốc tế cho SleepM Global." } },
] as const;

export const advisors = [
  { name: "Dr. Sheila McKenzie, Ph.D", role: { en: "Sleep Consultant", vi: "Tư vấn giấc ngủ" }, img: "/images/wp/sheila-mckenzie.jpg", bio: { en: "The backup identifies Dr. Sheila McKenzie as president of the World Organization of Natural Medicine.", vi: "Backup giới thiệu Dr. Sheila McKenzie là chủ tịch của Tổ Chức Y Học Tự Nhiên Thế Giới." } },
  { name: "Dr. Jeffry Parker", role: { en: "Wellness Consultant", vi: "Tư vấn sức khỏe" }, img: "/images/wp/jeffry-parker.jpg", bio: { en: "The restored content presents Dr. Jeffry Parker as a wellness consultant with a background in physical therapy.", vi: "Nội dung backup giới thiệu Dr. Jeffry Parker là cố vấn sức khỏe, có nền tảng chuyên khoa vật lý trị liệu." } },
  { name: "Dr. Deborah Drake", role: { en: "Sleep Consultant", vi: "Tư vấn giấc ngủ" }, img: "/images/wp/deborah-drake.jpg", bio: { en: "The backup presents Dr. Deborah Drake as a natural sleep consultant and medical professional in traditional healing approaches.", vi: "Backup giới thiệu Dr. Deborah Drake là cố vấn giấc ngủ tự nhiên và bác sĩ y khoa chuyên môn về phương pháp chữa lành dược liệu đông y." } },
] as const;

export const offices = [
  { region: { en: "Canada - Headquarters", vi: "Canada - Trụ sở" }, city: "Toronto", address: ["2600 John St. Unit 205", "Markham, ON L3R 3W3"], phone: "+1 905-604-5558", email: "info@sleepm.com" },
  { region: { en: "United States - West", vi: "Hoa Kỳ - Miền Tây" }, city: "Baldwin Park", address: ["365 Cloverleaf Drive Suite A", "Baldwin Park, CA 91706"], phone: "+1 626-333-4212", email: "support@sleepm.com" },
  { region: { en: "United States - East", vi: "Hoa Kỳ - Miền Đông" }, city: "New York", address: ["499 7TH AVE 14N", "New York, NY 10018"], phone: "", email: "" },
] as const;

export const vietnamInfoContact = {
  role: {
    en: "Vietnamese information contact from the backup/customer requirements, not a legal representative office of SleepM Global Inc. in Vietnam.",
    vi: "Đầu mối tiếp nhận thông tin tiếng Việt theo backup/yêu cầu khách hàng, không phải văn phòng đại diện pháp lý của SleepM Global Inc. tại Việt Nam.",
  },
  address: ["Diamond Plaza 34 Le Duan Blvd", "Suite 903, 9th Floor, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam"],
  phoneVN: "0933 993 739",
  phoneUS: "+1 714 719 1789",
  emails: ["mececilia1932@gmail.com", "edccentersleepm@gmail.com", "turojo23@gmail.com"],
  image: "/images/wp/diamond-meeting-room.jpg",
} as const;

export const genericPages = {
  "sleep-health": {
    eyebrow: { en: "Sleep Health", vi: "Sleep Health" },
    title: { en: "Mini BioCrystal pad and user experience notes.", vi: "Đệm mini Pha Lê Sinh Học và ghi nhận trải nghiệm người dùng." },
    text: {
      en: "The restored Sleep Health page describes the mini BioCrystal pad as a personal pad used at home, at work or after long drives as part of a comfort routine.",
      vi: "Trang Sleep Health trong backup mô tả đệm mini Pha Lê Sinh Học như miếng đệm cá nhân có thể dùng ở nhà, nơi làm việc hoặc sau khi lái xe đường dài trong thói quen nghỉ ngơi.",
    },
    cards: [
      { metric: "Mini Pad", label: { en: "The backup says the personal pad can be used for daily rest routines.", vi: "Backup nêu miếng đệm cá nhân có thể dùng cho các thói quen nghỉ ngơi hằng ngày." } },
      { metric: "WONM", label: { en: "The page includes practitioner and user experience references from WONM-related material.", vi: "Trang có phần ghi nhận trải nghiệm từ bác sĩ/người dùng trong tài liệu liên quan WONM." } },
      { metric: "Note", label: { en: "These are user experiences and product information, not medical advice.", vi: "Đây là trải nghiệm người dùng và thông tin sản phẩm, không phải tư vấn y tế." } },
    ],
  },
  testimonials: {
    eyebrow: { en: "Testimonials", vi: "Testimonials" },
    title: { en: "The Sleepm BioCrystal Experience.", vi: "The Sleepm BioCrystal Experience." },
    text: {
      en: "The backup presents SleepM as a new standard mattress for sleep health and includes recognition, product quality and mission sections.",
      vi: "Backup giới thiệu SleepM như một tiêu chuẩn nệm mới cho sức khỏe giấc ngủ, cùng các phần ghi nhận, chất lượng sản phẩm và sứ mệnh.",
    },
    cards: [
      { metric: "New Standard", label: { en: "The backup headline says Biocrystal Orthopedic Mattresses for you and your family.", vi: "Headline backup nói về Biocrystal Orthopedic Mattresses cho bạn và gia đình." } },
      { metric: "Made to last", label: { en: "The page says SleepM BioCrystal mattresses are made to last up to 10 years.", vi: "Trang backup nêu nệm BioCrystal SleepM được làm để dùng đến 10 năm." } },
      { metric: "Mission", label: { en: "The mission section says SleepM wants to share sleep wellness through high-quality products.", vi: "Phần sứ mệnh nêu SleepM muốn chia sẻ giá trị sức khỏe giấc ngủ qua sản phẩm chất lượng cao." } },
    ],
  },
  "redefining-the-sleep-standard": {
    eyebrow: { en: "Redefining the sleep standard", vi: "Redefining the sleep standard" },
    title: { en: "The Experiences of BioCrystal Users.", vi: "The Experiences of BioCrystal Users." },
    text: {
      en: "The restored page includes user and practitioner experiences with SleepM BioCrystal products. These are presented as personal experiences, not guaranteed outcomes.",
      vi: "Trang backup gồm trải nghiệm của người dùng và chuyên gia với sản phẩm BioCrystal SleepM. Nội dung được trình bày như trải nghiệm cá nhân, không phải kết quả bảo đảm.",
    },
    cards: [
      { metric: "Carlos Newton", label: { en: "Former UFC Champion Carlos Newton says he looks forward to returning to his SleepM BioCrystal mattress and pillow after travel.", vi: "Cựu vô địch UFC Carlos Newton chia sẻ trải nghiệm trở về với nệm và gối BioCrystal SleepM sau các chuyến đi." } },
      { metric: "Dr. Deborah Drake", label: { en: "The page includes a practitioner experience about chronic neck tension and whiplash recovery.", vi: "Trang backup có trải nghiệm chuyên gia về căng cổ mãn tính và hồi phục sau chấn thương whiplash." } },
      { metric: "Dr. Sheila McKenzie", label: { en: "The backup records a pillow experience related to stiffness and heaviness relief.", vi: "Backup ghi nhận trải nghiệm dùng gối liên quan cảm giác cứng và nặng vùng cổ/gáy." } },
    ],
  },
  payments: {
    eyebrow: { en: "No local ecommerce", vi: "Không TMĐT nội địa" },
    title: { en: "sleepm.vn does not sell, quote or process payment in Vietnam.", vi: "sleepm.vn không bán hàng, báo giá hoặc xử lý thanh toán tại Việt Nam." },
    text: {
      en: "This website is intentionally informational until the responsible seller, ecommerce obligations, tax, import, warranty and complaint-handling structure are clearly defined.",
      vi: "Website này được định hướng là cổng thông tin cho đến khi chủ thể bán hàng, nghĩa vụ TMĐT, thuế, nhập khẩu, bảo hành và cơ chế xử lý khiếu nại được xác định rõ.",
    },
    cards: [
      { metric: "No cart", label: { en: "No cart, checkout or direct order confirmation is provided on sleepm.vn.", vi: "Không có giỏ hàng, thanh toán hoặc xác nhận đơn hàng trực tiếp trên sleepm.vn." } },
      { metric: "No prices", label: { en: "The site does not publish Vietnam retail prices or transaction terms.", vi: "Website không công bố giá bán lẻ hoặc điều kiện giao dịch tại Việt Nam." } },
      { metric: "Global", label: { en: "Visitors are directed to official SleepM global channels for current product and support information.", vi: "Người xem được dẫn đến kênh toàn cầu chính thức của SleepM để cập nhật thông tin sản phẩm và hỗ trợ." } },
    ],
  },
  warranty: {
    eyebrow: { en: "Warranty", vi: "Warranty" },
    title: { en: "Mattress warranty self-assessment.", vi: "Tự đánh giá bảo hành nệm." },
    text: {
      en: "The backup warranty page explains a simple online warranty pre-assessment requiring photos and measurements before contacting SleepM support.",
      vi: "Trang Warranty trong backup hướng dẫn tự kiểm tra bảo hành online, chuẩn bị hình ảnh và số đo trước khi liên hệ kênh hỗ trợ SleepM.",
    },
    cards: [
      { metric: "Camera", label: { en: "A digital camera is listed as one of the required tools.", vi: "Máy ảnh kỹ thuật số là một trong các dụng cụ cần chuẩn bị." } },
      { metric: "Ruler", label: { en: "The backup asks for a ruler or measuring tape plus a yardstick, broom or similar straight object.", vi: "Backup yêu cầu thước hoặc thước dây cùng thước dài, cán chổi hoặc vật thẳng tương tự." } },
      { metric: "Support", label: { en: "After pre-assessment, contact 1-844-8SLEEPM or email support@sleepm.com / info@sleepm.com depending on location.", vi: "Sau khi tự đánh giá, liên hệ 1-844-8SLEEPM hoặc email support@sleepm.com / info@sleepm.com tùy khu vực." } },
    ],
  },
  terms: {
    eyebrow: { en: "Legal notes", vi: "Lưu ý pháp lý" },
    title: { en: "The domain is protected as a brand asset and used as an information website.", vi: "Tên miền được bảo vệ như tài sản thương hiệu và dùng làm website thông tin." },
    text: {
      en: "Renewing sleepm.vn protects the brand domain. Domain renewal and using the website for local ecommerce are separate issues.",
      vi: "Gia hạn sleepm.vn giúp bảo vệ tài sản tên miền/thương hiệu. Việc gia hạn tên miền và việc dùng website để kinh doanh thương mại điện tử nội địa là hai vấn đề khác nhau.",
    },
    cards: [
      { metric: "SleepM Global Inc.", label: { en: "The international entity is identified transparently; the site does not claim a separate SleepM Vietnam company.", vi: "Chủ thể quốc tế được nêu minh bạch; website không tự nhận có công ty SleepM Việt Nam riêng." } },
      { metric: "No Vietnam office claim", label: { en: "No Vietnam address is presented as an official SleepM Global Inc. office unless legally established.", vi: "Không công bố địa chỉ tại Việt Nam là văn phòng chính thức của SleepM Global Inc. nếu chưa có căn cứ pháp lý tương ứng." } },
      { metric: "Law 122 / Decree 248", label: { en: "Vietnam ecommerce compliance must be reviewed before any local transaction features are added.", vi: "Nghĩa vụ TMĐT tại Việt Nam cần được rà soát trước khi thêm bất kỳ chức năng giao dịch nội địa nào." } },
    ],
  },
  privacy: {
    eyebrow: { en: "Privacy", vi: "Quyền riêng tư" },
    title: { en: "Only ask for what helps us answer.", vi: "Chỉ hỏi những gì giúp chúng tôi phản hồi." },
    text: {
      en: "SleepM asks for contact details only so the appropriate official channel or information contact can reply.",
      vi: "SleepM chỉ hỏi thông tin liên hệ để kênh chính thức hoặc đầu mối thông tin phù hợp có thể phản hồi.",
    },
    cards: [
      { metric: "Contact", label: { en: "Name, email and message are used to reply.", vi: "Tên, email và lời nhắn được dùng để phản hồi." } },
      { metric: "Care", label: { en: "Personal details should be handled by approved Sleepm systems.", vi: "Thông tin cá nhân cần được xử lý bởi hệ thống Sleepm đã phê duyệt." } },
      { metric: "Choice", label: { en: "Visitors can email instead of submitting a form.", vi: "Khách truy cập có thể gửi email thay cho biểu mẫu." } },
    ],
  },
} as const;

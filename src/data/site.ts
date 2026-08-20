export type Lang = "en" | "vi";
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = "en";

export const languages: Record<Lang, { code: Lang; label: string; native: string; locale: string }> = {
  en: { code: "en", label: "English", native: "English", locale: "en-US" },
  vi: { code: "vi", label: "Vietnamese", native: "Tiếng Việt", locale: "vi-VN" },
};

export const langCodes = Object.keys(languages) as Lang[];

export const siteMeta = {
  name: "Sleepm",
  description: {
    en: "Luxury BioCrystal sleep products shared person to person.",
    vi: "Các sản phẩm giấc ngủ BioCrystal sang trọng được chia sẻ trực tiếp qua cộng đồng.",
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
    home: { en: "Home", vi: "Trang chủ" },
    products: { en: "Products", vi: "Sản phẩm" },
    crystals: { en: "The Crystals", vi: "Tinh thể" },
    constellation: { en: "The Constellation", vi: "Chòm sao" },
    nightWire: { en: "The Night Wire", vi: "Bản tin đêm" },
    family: { en: "The Family", vi: "Gia đình" },
    distributors: { en: "Distributors", vi: "Nhà phân phối" },
    signIn: { en: "Sign In", vi: "Đăng nhập" },
    contact: { en: "Contact", vi: "Liên hệ" },
  },
  labels: {
    collection: { en: "The collection", vi: "Bộ sưu tập" },
    allProducts: { en: "All products", vi: "Tất cả sản phẩm" },
    askFamily: { en: "Ask the family", vi: "Hỏi gia đình Sleepm" },
    becomeDistributor: { en: "Become a distributor", vi: "Trở thành nhà phân phối" },
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
    nightKept: { en: "the night, kept.", vi: "giữ trọn đêm an lành." },
    disclaimer: {
      en: "Sleepm products are wellness and comfort products, not medical devices, and are not intended to diagnose, treat, cure, or prevent any disease. Crystal and noble-metal traditions are shared as lore and heritage.",
      vi: "Sản phẩm Sleepm là sản phẩm chăm sóc sức khỏe và sự thoải mái, không phải thiết bị y tế, không dùng để chẩn đoán, điều trị, chữa khỏi hoặc phòng ngừa bệnh. Truyền thống về tinh thể và kim loại quý được chia sẻ như di sản văn hóa.",
    },
    appTitle: { en: "Get the app", vi: "Tải ứng dụng" },
    appText: {
      en: "Scan with your phone camera for the Sleepm app.",
      vi: "Quét bằng camera điện thoại để mở ứng dụng Sleepm.",
    },
    legalTitle: { en: "Everything else", vi: "Thông tin khác" },
  },
  noPrices: {
    eyebrow: { en: "No prices here", vi: "Không niêm yết giá tại đây" },
    title: { en: "Sleepm travels hand to hand.", vi: "Sleepm được trao tận tay." },
    text: {
      en: "Every Sleepm is shared through the family - someone near you, in your language, who sleeps on it too. Financing is available.",
      vi: "Mỗi sản phẩm Sleepm được chia sẻ qua cộng đồng - bởi một người gần bạn, nói ngôn ngữ của bạn và cũng đang ngủ trên Sleepm. Có hỗ trợ tài chính tùy khu vực.",
    },
  },
};

export const navLinks = [
  { key: "home", path: "/" },
  { key: "products", path: "/products/" },
  { key: "crystals", path: "/crystals/" },
  { key: "nightWire", path: "/night-wire/" },
  { key: "family", path: "/family/" },
  { key: "distributors", path: "/distributors/" },
  { key: "signIn", path: "/sign-in/" },
] as const;

export const footerLinks = [
  { label: { en: "Sleep Health", vi: "Sức khỏe giấc ngủ" }, path: "/sleep-health/" },
  { label: { en: "Testimonials", vi: "Cảm nhận" }, path: "/testimonials/" },
  { label: { en: "Payments", vi: "Thanh toán" }, path: "/payments/" },
  { label: { en: "Warranty", vi: "Bảo hành" }, path: "/warranty/" },
  { label: { en: "Terms", vi: "Điều khoản" }, path: "/terms/" },
  { label: { en: "Privacy", vi: "Quyền riêng tư" }, path: "/privacy/" },
] as const;

export const productNav = [
  { label: { en: "Mattress", vi: "Nệm" }, slug: "mattress" },
  { label: { en: "Topper", vi: "Topper" }, slug: "topper" },
  { label: { en: "Pillows", vi: "Gối" }, slug: "pillows" },
  { label: { en: "Heating Pad", vi: "Đệm sưởi" }, slug: "heating-pad" },
  { label: { en: "Eye Mask", vi: "Mặt nạ mắt" }, slug: "eye-mask" },
  { label: { en: "Knee Massager", vi: "Máy massage gối" }, slug: "knee-massager" },
  { label: { en: "Light", vi: "Đèn ngủ" }, slug: "light" },
  { label: { en: "Dot", vi: "Dot" }, slug: "dot" },
  { label: { en: "App", vi: "Ứng dụng" }, slug: "app" },
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
    image: "/images/products/mattress.webp",
    gallery: ["/images/products/mattress.webp", "/images/products/mattress-exploded.webp"],
    name: { en: "BioCrystal Mattress", vi: "Nệm BioCrystal" },
    eyebrow: { en: "The BioCrystal Mattress", vi: "Nệm BioCrystal" },
    title: { en: "The bed the night was waiting for.", vi: "Chiếc nệm mà đêm nghỉ đã chờ đợi." },
    summary: {
      en: "Sixteen crystals, gold and silver, and premium sleep materials layered into one mattress crafted in America and Canada.",
      vi: "Mười sáu tinh thể, vàng, bạc và vật liệu ngủ cao cấp được xếp lớp trong một chiếc nệm sản xuất tại Mỹ và Canada.",
    },
    collectionLine: {
      en: "The foundation - sixteen crystals and noble metals, sealed beneath you.",
      vi: "Nền tảng của giấc ngủ - mười sáu tinh thể và kim loại quý được đặt dưới bạn.",
    },
    details: {
      en: [
        "A quilted Euro-top, pressure-relieving comfort layers, natural latex, cooling graphene and the Sleepm BioCrystal layer.",
        "Five classic sizes make it easy to fit the crystal cloud into real bedrooms.",
      ],
      vi: [
        "Euro-top chần bông, các lớp nâng đỡ giảm áp lực, latex tự nhiên, graphene làm mát và lớp BioCrystal đặc trưng của Sleepm.",
        "Năm kích thước quen thuộc giúp bạn đưa chiếc nệm mây tinh thể vào phòng ngủ thực tế.",
      ],
    },
    features: [
      {
        title: { en: "GREENGUARD Gold certified", vi: "Chứng nhận GREENGUARD Gold" },
        text: { en: "Independently tested for low chemical emissions.", vi: "Được kiểm nghiệm độc lập về phát thải hóa chất thấp." },
      },
      {
        title: { en: "Natural latex support", vi: "Nâng đỡ bằng latex tự nhiên" },
        text: { en: "Responsive, breathable layers help the body settle without sinking.", vi: "Các lớp thoáng khí phản hồi tốt giúp cơ thể được nâng đỡ mà không bị lún." },
      },
      {
        title: { en: "Pocket and nano coils", vi: "Lò xo túi và nano coil" },
        text: { en: "Two levels of spring support contour to the sleeper and reduce motion transfer.", vi: "Hai tầng lò xo ôm theo cơ thể và giảm rung động khi trở mình." },
      },
    ],
    specs: [
      { label: { en: "Sizes", vi: "Kích thước" }, value: { en: "Twin, Double, Queen, King, California King", vi: "Twin, Double, Queen, King, California King" } },
      { label: { en: "Core materials", vi: "Vật liệu chính" }, value: { en: "Latex, graphene foam, pocket coils, organic wool", vi: "Latex, foam graphene, lò xo túi, len hữu cơ" } },
      { label: { en: "Made in", vi: "Sản xuất tại" }, value: { en: "USA and Canada", vi: "Mỹ và Canada" } },
    ],
  },
  {
    slug: "topper",
    image: "/images/products/topper.webp",
    gallery: ["/images/products/topper.webp", "/images/products/topper-detail.webp"],
    name: { en: "BioCrystal Topper", vi: "Topper BioCrystal" },
    eyebrow: { en: "The Luxury Topper", vi: "Topper cao cấp" },
    title: { en: "Turn the mattress you love into something deeper.", vi: "Biến chiếc nệm bạn yêu thành một giấc ngủ sâu hơn." },
    summary: {
      en: "Organic cotton, Thai latex, graphene foam and the BioCrystal layer soften and cool the bed you already own.",
      vi: "Cotton hữu cơ, latex Thái Lan, foam graphene và lớp BioCrystal giúp chiếc nệm hiện tại mềm hơn và mát hơn.",
    },
    collectionLine: {
      en: "The whole philosophy, laid over the bed you already love.",
      vi: "Triết lý Sleepm được đặt lên chiếc nệm bạn đang yêu thích.",
    },
    details: {
      en: [
        "A breathable organic cover rests over natural latex, organic wool, graphene memory foam and the BioCrystal blend.",
        "Built for years of daily sleep, with elegant embroidery and a quiet hand-tufted finish.",
      ],
      vi: [
        "Lớp vỏ hữu cơ thoáng khí nằm trên latex tự nhiên, len hữu cơ, memory foam graphene và hỗn hợp BioCrystal.",
        "Được làm để sử dụng hằng đêm trong nhiều năm, hoàn thiện bằng thêu tinh tế và chi tiết tufting nhẹ nhàng.",
      ],
    },
    features: [
      {
        title: { en: "Graphene cooling", vi: "Làm mát bằng graphene" },
        text: { en: "Spreads warmth across the surface instead of letting heat pool.", vi: "Phân tán nhiệt trên bề mặt thay vì để hơi nóng tích tụ." },
      },
      {
        title: { en: "Organic cotton touch", vi: "Bề mặt cotton hữu cơ" },
        text: { en: "A soft, breathable cover sits gently against the skin.", vi: "Lớp vỏ mềm và thoáng khí tiếp xúc nhẹ nhàng với da." },
      },
      {
        title: { en: "Easy upgrade", vi: "Nâng cấp dễ dàng" },
        text: { en: "Adds the BioCrystal layer without replacing the entire mattress.", vi: "Thêm lớp BioCrystal mà không cần thay toàn bộ nệm." },
      },
    ],
    specs: [
      { label: { en: "Profile", vi: "Độ dày" }, value: { en: "Low-profile luxury comfort layer", vi: "Lớp tiện nghi cao cấp mỏng gọn" } },
      { label: { en: "Cover", vi: "Vỏ bọc" }, value: { en: "Organic cotton", vi: "Cotton hữu cơ" } },
      { label: { en: "Core", vi: "Lõi" }, value: { en: "Thai latex, wool, graphene foam, BioCrystal layer", vi: "Latex Thái Lan, len, foam graphene, lớp BioCrystal" } },
    ],
  },
  {
    slug: "pillows",
    image: "/images/products/pillows.webp",
    gallery: ["/images/products/pillows.webp", "/images/products/pillow-butterfly.webp"],
    name: { en: "BioCrystal Pillows", vi: "Gối BioCrystal" },
    eyebrow: { en: "Four pillows", vi: "Bốn kiểu gối" },
    title: { en: "One perfect night for every neck.", vi: "Một đêm vừa vặn cho từng dáng cổ." },
    summary: {
      en: "Butterfly, Polar Bear, Panda and Camel shapes answer different shoulders, sleep styles and neck curves.",
      vi: "Butterfly, Polar Bear, Panda và Camel đáp ứng các dáng vai, tư thế ngủ và đường cong cổ khác nhau.",
    },
    collectionLine: {
      en: "The closest thing to your dreams, all night.",
      vi: "Người bạn gần giấc mơ nhất trong suốt đêm.",
    },
    details: {
      en: [
        "The shaped edge supports the neck curve while the back of the head rests lower.",
        "Every option carries the Sleepm BioCrystal layer inside.",
      ],
      vi: [
        "Cạnh gối được tạo hình để nâng đỡ đường cong cổ trong khi sau đầu được thả thấp hơn.",
        "Mỗi phiên bản đều có lớp BioCrystal Sleepm bên trong.",
      ],
    },
    features: [
      {
        title: { en: "Butterfly", vi: "Butterfly" },
        text: { en: "The classic contour pillow with magnet accents.", vi: "Gối contour cổ điển với điểm nhấn nam châm." },
      },
      {
        title: { en: "Polar Bear", vi: "Polar Bear" },
        text: { en: "Slow-sinking memory foam for sleepers who like to be held.", vi: "Memory foam lún chậm cho người thích cảm giác được ôm đỡ." },
      },
      {
        title: { en: "Panda and Camel", vi: "Panda và Camel" },
        text: { en: "Latex bounce or two heights in one pillow.", vi: "Độ đàn hồi latex hoặc hai độ cao trong một chiếc gối." },
      },
    ],
    specs: [
      { label: { en: "Shapes", vi: "Kiểu dáng" }, value: { en: "Butterfly, Polar Bear, Panda, Camel", vi: "Butterfly, Polar Bear, Panda, Camel" } },
      { label: { en: "Focus", vi: "Trọng tâm" }, value: { en: "Neck curve support", vi: "Nâng đỡ đường cong cổ" } },
      { label: { en: "Inside", vi: "Bên trong" }, value: { en: "BioCrystal layer", vi: "Lớp BioCrystal" } },
    ],
  },
  {
    slug: "heating-pad",
    image: "/images/products/heating-pad.webp",
    gallery: ["/images/products/heating-pad.webp"],
    name: { en: "Heating Pad", vi: "Đệm sưởi" },
    eyebrow: { en: "The Heating Pad", vi: "Đệm sưởi Sleepm" },
    title: { en: "Warmth where the day left its weight.", vi: "Hơi ấm cho nơi cơ thể còn giữ mệt mỏi." },
    summary: {
      en: "Deep, even warmth with the BioCrystal blend inside and a washable graphite pouch outside.",
      vi: "Hơi ấm sâu và đều với hỗn hợp BioCrystal bên trong cùng túi graphite có thể giặt bên ngoài.",
    },
    collectionLine: {
      en: "Warmth where the day left its weight.",
      vi: "Hơi ấm cho nơi cơ thể còn giữ mệt mỏi.",
    },
    details: {
      en: [
        "Designed for steady warmth across the full pad surface with no sharp hot spots.",
        "The removable graphite pouch keeps daily use easy to refresh.",
      ],
      vi: [
        "Thiết kế để tỏa nhiệt đều trên toàn bộ bề mặt, hạn chế điểm quá nóng.",
        "Túi graphite tháo rời giúp việc vệ sinh hằng ngày đơn giản hơn.",
      ],
    },
    features: [
      {
        title: { en: "Even heat", vi: "Nhiệt đều" },
        text: { en: "A soft, consistent glow across shoulders, back or knees.", vi: "Hơi ấm mềm và ổn định cho vai, lưng hoặc đầu gối." },
      },
      {
        title: { en: "Washable pouch", vi: "Túi có thể giặt" },
        text: { en: "The graphite pouch slips off for simple care.", vi: "Túi graphite có thể tháo ra để vệ sinh." },
      },
      {
        title: { en: "Cozy BioCrystal layer", vi: "Lớp BioCrystal ấm áp" },
        text: { en: "The house blend at its coziest.", vi: "Hỗn hợp đặc trưng của Sleepm ở trạng thái ấm áp nhất." },
      },
    ],
    specs: [
      { label: { en: "Use", vi: "Công dụng" }, value: { en: "Localized comfort warmth", vi: "Làm ấm và thư giãn từng vùng" } },
      { label: { en: "Care", vi: "Vệ sinh" }, value: { en: "Removable pouch", vi: "Túi tháo rời" } },
      { label: { en: "Inside", vi: "Bên trong" }, value: { en: "BioCrystal blend", vi: "Hỗn hợp BioCrystal" } },
    ],
  },
  {
    slug: "eye-mask",
    image: "/images/products/eye-mask.webp",
    gallery: ["/images/products/eye-mask.webp"],
    name: { en: "Eye Mask", vi: "Mặt nạ mắt" },
    eyebrow: { en: "The Eye Mask", vi: "Mặt nạ mắt" },
    title: { en: "A small dark sky you can carry anywhere.", vi: "Một bầu trời tối nhỏ gọn mang theo mọi nơi." },
    summary: {
      en: "A soft blackout ritual for travel, naps and rooms that never get quite dark enough.",
      vi: "Một nghi thức che sáng mềm mại cho những chuyến đi, giấc ngủ ngắn và căn phòng chưa đủ tối.",
    },
    collectionLine: {
      en: "A small dark sky you can carry anywhere.",
      vi: "Bầu trời tối nhỏ gọn cho mọi hành trình.",
    },
    details: {
      en: [
        "Soft around the eyes, secure around the head, and easy to pack.",
        "A travel-size Sleepm ritual for hotel rooms, flights and bright mornings.",
      ],
      vi: [
        "Mềm quanh mắt, ôm vừa đầu và dễ mang theo.",
        "Một nghi thức Sleepm nhỏ gọn cho khách sạn, chuyến bay và buổi sáng nhiều ánh sáng.",
      ],
    },
    features: [
      {
        title: { en: "Blackout comfort", vi: "Che sáng thoải mái" },
        text: { en: "Helps make a darker sleep space wherever you land.", vi: "Giúp tạo không gian ngủ tối hơn ở bất cứ đâu." },
      },
      {
        title: { en: "Travel-ready", vi: "Sẵn sàng du lịch" },
        text: { en: "Lightweight, compact and easy to keep in a night bag.", vi: "Nhẹ, gọn và dễ để trong túi đi đêm." },
      },
      {
        title: { en: "Quiet ritual", vi: "Nghi thức yên tĩnh" },
        text: { en: "A signal to close the day and let the room disappear.", vi: "Một tín hiệu khép lại ngày dài và để căn phòng lùi xa." },
      },
    ],
    specs: [
      { label: { en: "Best for", vi: "Phù hợp" }, value: { en: "Travel, naps, bright bedrooms", vi: "Du lịch, ngủ ngắn, phòng nhiều sáng" } },
      { label: { en: "Feel", vi: "Cảm giác" }, value: { en: "Soft blackout comfort", vi: "Mềm mại và che sáng" } },
      { label: { en: "Pack", vi: "Mang theo" }, value: { en: "Compact", vi: "Gọn nhẹ" } },
    ],
  },
  {
    slug: "knee-massager",
    image: "/images/products/knee-massager.webp",
    gallery: ["/images/products/knee-massager.webp"],
    name: { en: "Knee Massager", vi: "Máy massage gối" },
    eyebrow: { en: "The Knee Massager", vi: "Máy massage đầu gối" },
    title: { en: "Quiet comfort for hard-working knees.", vi: "Sự dễ chịu yên tĩnh cho đôi gối làm việc nhiều." },
    summary: {
      en: "Wearable warmth and soft vibration for evenings after standing, training or travel.",
      vi: "Hơi ấm đeo được và rung nhẹ cho buổi tối sau khi đứng lâu, luyện tập hoặc di chuyển.",
    },
    collectionLine: {
      en: "Soothing heat and quiet comfort for hard-working knees.",
      vi: "Nhiệt êm và sự thoải mái cho đôi gối hoạt động nhiều.",
    },
    details: {
      en: [
        "Wraps comfortably around the knee and stays useful on the couch, at the desk or after a walk.",
        "Built for comfort routines, not medical treatment.",
      ],
      vi: [
        "Quấn thoải mái quanh đầu gối và hữu ích khi ngồi sofa, làm việc hoặc sau một buổi đi bộ.",
        "Được thiết kế cho thói quen chăm sóc cơ thể, không phải điều trị y tế.",
      ],
    },
    features: [
      {
        title: { en: "Wearable warmth", vi: "Hơi ấm có thể đeo" },
        text: { en: "Localized heat without being tied to the bed.", vi: "Làm ấm từng vùng mà không cần nằm trên giường." },
      },
      {
        title: { en: "Soft vibration", vi: "Rung nhẹ" },
        text: { en: "A quiet comfort setting for tired joints.", vi: "Chế độ dễ chịu cho khớp mỏi." },
      },
      {
        title: { en: "Portable ritual", vi: "Nghi thức linh hoạt" },
        text: { en: "Use it wherever the evening finds you.", vi: "Dùng ở bất cứ nơi nào buổi tối đưa bạn đến." },
      },
    ],
    specs: [
      { label: { en: "Mode", vi: "Chế độ" }, value: { en: "Heat and vibration", vi: "Nhiệt và rung" } },
      { label: { en: "Form", vi: "Kiểu dáng" }, value: { en: "Wearable wrap", vi: "Dạng quấn đeo" } },
      { label: { en: "Use", vi: "Cách dùng" }, value: { en: "Knees, elbows and targeted comfort", vi: "Đầu gối, khuỷu và vùng cần thư giãn" } },
    ],
  },
  {
    slug: "light",
    image: "/images/products/light.jpg",
    gallery: ["/images/products/light.jpg"],
    name: { en: "Sleepm Light", vi: "Đèn Sleepm" },
    eyebrow: { en: "The Sleepm Light", vi: "Đèn Sleepm" },
    title: { en: "A sunset to sleep by, a sunrise to wake to.", vi: "Hoàng hôn để ngủ, bình minh để thức dậy." },
    summary: {
      en: "A bedside light experience shaped around softer evenings and clearer mornings.",
      vi: "Trải nghiệm ánh sáng đầu giường dành cho buổi tối dịu hơn và buổi sáng rõ ràng hơn.",
    },
    collectionLine: {
      en: "A sunset to sleep by, a sunrise to wake to.",
      vi: "Hoàng hôn cho giờ ngủ, bình minh cho lúc thức.",
    },
    details: {
      en: [
        "Warm dimming light helps the room slow down before sleep.",
        "Gentle morning brightness gives the day a softer start.",
      ],
      vi: [
        "Ánh sáng ấm giảm dần giúp căn phòng chậm lại trước giờ ngủ.",
        "Độ sáng buổi sáng dịu nhẹ giúp ngày mới bắt đầu êm hơn.",
      ],
    },
    features: [
      {
        title: { en: "Evening dim", vi: "Giảm sáng buổi tối" },
        text: { en: "A quieter way to leave the day.", vi: "Cách nhẹ nhàng hơn để khép lại ngày." },
      },
      {
        title: { en: "Morning glow", vi: "Ánh sáng buổi sáng" },
        text: { en: "A wake-up cue that feels less abrupt.", vi: "Tín hiệu thức dậy không quá đột ngột." },
      },
      {
        title: { en: "Bedside scale", vi: "Kích thước đầu giường" },
        text: { en: "Small enough for the nightstand, bright enough for the ritual.", vi: "Đủ nhỏ cho bàn đầu giường, đủ sáng cho nghi thức ngủ." },
      },
    ],
    specs: [
      { label: { en: "Best for", vi: "Phù hợp" }, value: { en: "Wind-down and wake-up routines", vi: "Thói quen thư giãn và thức dậy" } },
      { label: { en: "Light feel", vi: "Cảm giác ánh sáng" }, value: { en: "Warm, gradual, soft", vi: "Ấm, chuyển dần, dịu" } },
      { label: { en: "Place", vi: "Vị trí" }, value: { en: "Nightstand", vi: "Bàn đầu giường" } },
    ],
  },
  {
    slug: "dot",
    image: "/images/products/dot.png",
    gallery: ["/images/products/dot.png"],
    name: { en: "Sleepm Dot", vi: "Sleepm Dot" },
    eyebrow: { en: "The Dot", vi: "Dot" },
    title: { en: "The smallest member of the night watch.", vi: "Thành viên nhỏ nhất của đội canh đêm." },
    summary: {
      en: "A compact sleep companion designed to keep the Sleepm ritual close.",
      vi: "Một người bạn ngủ nhỏ gọn giúp giữ nghi thức Sleepm luôn bên cạnh.",
    },
    collectionLine: {
      en: "The smallest member of the night watch.",
      vi: "Người bạn nhỏ nhất của đêm yên tĩnh.",
    },
    details: {
      en: [
        "Small footprint, simple presence, designed for the bedside or travel bag.",
        "Pairs naturally with the app and evening routines.",
      ],
      vi: [
        "Gọn nhẹ, hiện diện đơn giản, phù hợp cho đầu giường hoặc túi du lịch.",
        "Kết hợp tự nhiên với ứng dụng và thói quen buổi tối.",
      ],
    },
    features: [
      {
        title: { en: "Compact", vi: "Gọn nhẹ" },
        text: { en: "Built for small spaces and easy travel.", vi: "Dành cho không gian nhỏ và dễ mang theo." },
      },
      {
        title: { en: "Companion device", vi: "Thiết bị đồng hành" },
        text: { en: "A quiet anchor for the nightly routine.", vi: "Một điểm neo yên tĩnh cho thói quen trước ngủ." },
      },
      {
        title: { en: "App-friendly", vi: "Thân thiện với ứng dụng" },
        text: { en: "Designed to sit beside the Sleepm digital experience.", vi: "Được thiết kế để đồng hành với trải nghiệm số của Sleepm." },
      },
    ],
    specs: [
      { label: { en: "Form", vi: "Kiểu dáng" }, value: { en: "Compact bedside companion", vi: "Thiết bị đầu giường gọn nhẹ" } },
      { label: { en: "Pairs with", vi: "Kết hợp với" }, value: { en: "Sleepm App", vi: "Ứng dụng Sleepm" } },
      { label: { en: "Use", vi: "Cách dùng" }, value: { en: "Night routine and travel", vi: "Thói quen buổi tối và du lịch" } },
    ],
  },
  {
    slug: "app",
    image: "/images/app/app-platforms.webp",
    gallery: ["/images/app/app-platforms.webp", "/images/app/app-phone.png"],
    name: { en: "The Sleepm App", vi: "Ứng dụng Sleepm" },
    eyebrow: { en: "The Sleepm App", vi: "Ứng dụng Sleepm" },
    title: { en: "The only app that wants to be closed.", vi: "Ứng dụng duy nhất muốn bạn đóng lại để đi ngủ." },
    summary: {
      en: "A quiet companion for sleep rituals, distributor support and the Sleepm family.",
      vi: "Người bạn đồng hành yên tĩnh cho nghi thức ngủ, hỗ trợ nhà phân phối và cộng đồng Sleepm.",
    },
    collectionLine: {
      en: "The only app that wants to be closed.",
      vi: "Ứng dụng muốn bạn tắt máy và nghỉ ngơi.",
    },
    details: {
      en: [
        "Quick access to product stories, app downloads, support and family resources.",
        "Designed to help you prepare for sleep, then get out of the way.",
      ],
      vi: [
        "Truy cập nhanh câu chuyện sản phẩm, tải ứng dụng, hỗ trợ và tài nguyên cộng đồng.",
        "Được thiết kế để giúp bạn chuẩn bị cho giấc ngủ, rồi lùi lại đúng lúc.",
      ],
    },
    features: [
      {
        title: { en: "Product library", vi: "Thư viện sản phẩm" },
        text: { en: "Keep the Sleepm story close when sharing or learning.", vi: "Giữ câu chuyện Sleepm trong tầm tay khi chia sẻ hoặc tìm hiểu." },
      },
      {
        title: { en: "Family resources", vi: "Tài nguyên cộng đồng" },
        text: { en: "Support for distributors and new members.", vi: "Hỗ trợ nhà phân phối và thành viên mới." },
      },
      {
        title: { en: "Mobile-first", vi: "Tối ưu cho điện thoại" },
        text: { en: "Built for the phone already on the nightstand.", vi: "Dành cho chiếc điện thoại đang nằm cạnh giường." },
      },
    ],
    specs: [
      { label: { en: "Platforms", vi: "Nền tảng" }, value: { en: "iOS and Android", vi: "iOS và Android" } },
      { label: { en: "For", vi: "Dành cho" }, value: { en: "Customers and distributors", vi: "Khách hàng và nhà phân phối" } },
      { label: { en: "Access", vi: "Truy cập" }, value: { en: "QR code and mobile links", vi: "Mã QR và liên kết di động" } },
    ],
  },
];

export const crystalIntro = {
  eyebrow: { en: "The Sleepm BioCrystals", vi: "BioCrystal của Sleepm" },
  title: { en: "Meet the magic in your mattress.", vi: "Gặp điều kỳ diệu trong chiếc nệm của bạn." },
  text: {
    en: "Sixteen naturally formed crystals are held in balance by gold and silver, then sealed into every Sleepm.",
    vi: "Mười sáu tinh thể tự nhiên được cân bằng bởi vàng và bạc, rồi được đưa vào mỗi sản phẩm Sleepm.",
  },
};

export const crystals = [
  { key: "amethyst", img: "/images/crystals/amethyst.webp", name: { en: "Amethyst", vi: "Thạch anh tím" }, role: { en: "the calmer", vi: "sự bình tĩnh" }, lore: { en: "Violet quiet, long kept beside sleepers for racing minds.", vi: "Sắc tím yên tĩnh, từ lâu được đặt bên người ngủ để làm dịu tâm trí." } },
  { key: "selenite", img: "/images/crystals/selenite.webp", name: { en: "Selenite", vi: "Selenite" }, role: { en: "the moonstone", vi: "đá mặt trăng" }, lore: { en: "Named for the moon, luminous and famously serene.", vi: "Mang tên mặt trăng, sáng dịu và nổi tiếng với vẻ tĩnh lặng." } },
  { key: "quartz", img: "/images/crystals/quartz.webp", name: { en: "Clear Quartz", vi: "Thạch anh trắng" }, role: { en: "the clarifier", vi: "sự trong sáng" }, lore: { en: "A clear-eyed anchor for the whole blend.", vi: "Điểm neo trong trẻo cho toàn bộ hỗn hợp." } },
  { key: "rose-quartz", img: "/images/crystals/rose-quartz.webp", name: { en: "Rose Quartz", vi: "Thạch anh hồng" }, role: { en: "the soft one", vi: "sự dịu dàng" }, lore: { en: "Blush-pink, gentle by reputation, fitting for a bed.", vi: "Hồng phấn, nổi tiếng dịu dàng và hợp với giường ngủ." } },
  { key: "citrine", img: "/images/crystals/citrine.webp", name: { en: "Citrine", vi: "Citrine" }, role: { en: "bottled sunrise", vi: "bình minh thu nhỏ" }, lore: { en: "Warm as late sun on the floorboards.", vi: "Ấm như nắng chiều còn đọng trên sàn gỗ." } },
  { key: "sodalite", img: "/images/crystals/sodalite.webp", name: { en: "Sodalite", vi: "Sodalite" }, role: { en: "deep water", vi: "nước sâu" }, lore: { en: "Royal blue, veined in white, tied to clear thoughts.", vi: "Xanh thẳm có vân trắng, gắn với sự sáng rõ trong suy nghĩ." } },
  { key: "aventurine", img: "/images/crystals/aventurine.webp", name: { en: "Aventurine", vi: "Aventurine" }, role: { en: "the gardener", vi: "người làm vườn" }, lore: { en: "Soothing green, long linked with renewal.", vi: "Sắc xanh dịu, từ lâu gắn với sự tái tạo." } },
  { key: "fluorspar", img: "/images/crystals/fluorspar.webp", name: { en: "Fluorspar", vi: "Fluorit" }, role: { en: "the focus stone", vi: "viên đá tập trung" }, lore: { en: "Banded violet and sea-green, kept for order in a busy head.", vi: "Vân tím và xanh biển, được gìn giữ cho sự ngăn nắp trong tâm trí bận rộn." } },
  { key: "orange-calcite", img: "/images/crystals/orange-calcite.webp", name: { en: "Orange Calcite", vi: "Calcite cam" }, role: { en: "the ember", vi: "than hồng" }, lore: { en: "Radiant amber warmth, like coals settling for the night.", vi: "Sắc hổ phách ấm như than hồng lắng xuống trong đêm." } },
  { key: "serpentine-jade", img: "/images/crystals/serpentine-jade.webp", name: { en: "Serpentine Jade", vi: "Ngọc Serpentine" }, role: { en: "snake jade", vi: "ngọc rắn" }, lore: { en: "Prized across centuries as a token of vitality.", vi: "Được trân quý qua nhiều thế kỷ như biểu tượng của sức sống." } },
  { key: "red-jasper", img: "/images/crystals/red-jasper.webp", name: { en: "Red Jasper", vi: "Jasper đỏ" }, role: { en: "the anchor", vi: "điểm neo" }, lore: { en: "Earthy, steady and unhurried.", vi: "Mộc mạc, vững vàng và không vội vã." } },
  { key: "dalmatian-jasper", img: "/images/crystals/dalmatian-jasper.webp", name: { en: "Dalmatian Jasper", vi: "Jasper đốm" }, role: { en: "the playful one", vi: "nét vui tươi" }, lore: { en: "Speckled and light-hearted among the stones.", vi: "Lốm đốm và nhẹ nhàng giữa các tinh thể." } },
  { key: "leopard-jasper", img: "/images/crystals/leopard-jasper.webp", name: { en: "Leopard Jasper", vi: "Jasper da báo" }, role: { en: "the steady wild", vi: "hoang dã vững vàng" }, lore: { en: "Patterned, earthy and famously grounding.", vi: "Có hoa văn, mộc mạc và nổi tiếng với cảm giác kết nối đất." } },
  { key: "natural-jasper", img: "/images/crystals/natural-jasper.webp", name: { en: "Natural Jasper", vi: "Jasper tự nhiên" }, role: { en: "the raw one", vi: "vẻ nguyên sơ" }, lore: { en: "Unpolished proof that the blend begins in nature.", vi: "Vẻ chưa mài giũa nhắc rằng hỗn hợp bắt đầu từ tự nhiên." } },
  { key: "flint", img: "/images/crystals/flint.webp", name: { en: "Flint", vi: "Đá lửa" }, role: { en: "the elder", vi: "bậc trưởng lão" }, lore: { en: "Old as firelight, an ancient grounding stone.", vi: "Xưa như ánh lửa, một viên đá neo giữ cổ xưa." } },
  { key: "heliotrope", img: "/images/crystals/heliotrope.webp", name: { en: "Heliotrope", vi: "Huyết thạch" }, role: { en: "the traveler", vi: "người lữ hành" }, lore: { en: "Bloodstone of old caravans, kept for long journeys.", vi: "Huyết thạch của những đoàn lữ hành cũ, đồng hành với chuyến đi dài." } },
] as const;

export const metals = [
  { key: "gold", img: "/images/crystals/gold.webp", name: { en: "Gold", vi: "Vàng" }, lore: { en: "Warmth in the weave.", vi: "Hơi ấm trong từng sợi kết nối." } },
  { key: "silver", img: "/images/crystals/silver.webp", name: { en: "Silver", vi: "Bạc" }, lore: { en: "Cool clarity beside every stone.", vi: "Sự trong trẻo mát lành bên mỗi tinh thể." } },
] as const;

export const wireItems = [
  { source: "Mass General Brigham", title: { en: "Body-clock study finds calories burned after meals peak in the morning", vi: "Nghiên cứu đồng hồ sinh học cho thấy đốt calo sau bữa ăn đạt đỉnh vào buổi sáng" }, note: { en: "Circadian timing keeps showing up in metabolic research.", vi: "Nhịp sinh học tiếp tục xuất hiện trong các nghiên cứu chuyển hóa." }, url: "https://www.massgeneralbrigham.org/en/about/newsroom/articles/body-clock-influence-on-calories-after-meal" },
  { source: "Sleep Foundation", title: { en: "Green noise joins the growing palette of sleep sounds people try", vi: "Green noise gia nhập nhóm âm thanh ngủ được nhiều người thử nghiệm" }, note: { en: "Another shade in the soundscape for winding down.", vi: "Một sắc thái mới trong không gian âm thanh trước giờ ngủ." }, url: "https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise" },
  { source: "University of Washington", title: { en: "Research suggests human sleep shifts subtly with the lunar cycle", vi: "Nghiên cứu gợi ý giấc ngủ con người thay đổi nhẹ theo chu kỳ mặt trăng" }, note: { en: "The old sky keeps earning fresh attention.", vi: "Bầu trời cũ vẫn tiếp tục thu hút sự quan tâm mới." }, url: "https://www.washington.edu/news/2021/01/27/moon-sleep/" },
  { source: "Sleep Foundation", title: { en: "What researchers say is happening during sleep paralysis", vi: "Các nhà nghiên cứu nói gì về hiện tượng bóng đè" }, note: { en: "A clearer view of a frightening but common sleep event.", vi: "Một góc nhìn rõ hơn về hiện tượng đáng sợ nhưng khá phổ biến." }, url: "https://www.sleepfoundation.org/parasomnias/sleep-paralysis" },
  { source: "Frontiers in Public Health", title: { en: "A 2026 study looks at bedroom humidity, not just temperature", vi: "Nghiên cứu năm 2026 xem xét độ ẩm phòng ngủ, không chỉ nhiệt độ" }, note: { en: "Comfort is a full-room equation.", vi: "Sự thoải mái là bài toán của cả căn phòng." }, url: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1748619/full" },
  { source: "Frontiers in Physiology", title: { en: "A tai chi routine linked to deeper sleep in older adults", vi: "Thói quen thái cực quyền được liên kết với giấc ngủ sâu hơn ở người lớn tuổi" }, note: { en: "Slow movement continues to meet sleep science.", vi: "Chuyển động chậm tiếp tục gặp gỡ khoa học giấc ngủ." }, url: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2026.1795646/full" },
] as const;

export const family = {
  hero: {
    eyebrow: { en: "Our story and our people", vi: "Câu chuyện và con người Sleepm" },
    title: { en: "One dream. One family.", vi: "Một giấc mơ. Một gia đình." },
    text: {
      en: "Sleepm began with a simple wish: help more people sleep the way they deserve. Today that wish moves through a family across continents.",
      vi: "Sleepm bắt đầu từ một mong muốn giản dị: giúp nhiều người ngủ theo cách họ xứng đáng. Hôm nay, mong muốn ấy được lan tỏa qua một gia đình trên nhiều châu lục.",
    },
  },
  chapters: [
    {
      year: "2018",
      title: { en: "The wish", vi: "Mong muốn ban đầu" },
      text: { en: "Sleep should leave people feeling cared for, from joints to spirit.", vi: "Giấc ngủ nên khiến con người cảm thấy được chăm sóc, từ khớp xương đến tinh thần." },
    },
    {
      year: "Croatia",
      title: { en: "The stones", vi: "Những viên đá" },
      text: { en: "Old crystal traditions led the founders to suppliers whose lore became part of Sleepm.", vi: "Những truyền thống tinh thể lâu đời dẫn đội ngũ sáng lập tới các nhà cung cấp, nơi câu chuyện của họ trở thành một phần Sleepm." },
    },
    {
      year: "Today",
      title: { en: "The family", vi: "Gia đình" },
      text: { en: "Every product is made in America and Canada, then shared person to person.", vi: "Mỗi sản phẩm được sản xuất tại Mỹ và Canada, rồi được chia sẻ trực tiếp giữa con người với con người." },
    },
  ],
};

export const people = [
  { name: "Emma He, PhD", role: { en: "Chief Executive Officer", vi: "Tổng giám đốc" }, img: "/images/people/emma-he.webp", bio: { en: "A management PhD and former professor who helped carry Sleepm from idea to global family.", vi: "Tiến sĩ quản trị và cựu giáo sư, người góp phần đưa Sleepm từ ý tưởng thành cộng đồng toàn cầu." } },
  { name: "Dr. Nancy Xu, MD, PhD", role: { en: "Chief Health Officer", vi: "Giám đốc sức khỏe" }, img: "/images/people/nancy-xu.webp", bio: { en: "Two decades across clinical research and global biopharma, bringing rigor to the wellness mission.", vi: "Hai thập kỷ trong nghiên cứu lâm sàng và dược sinh học toàn cầu, mang tính nghiêm cẩn vào sứ mệnh chăm sóc sức khỏe." } },
  { name: "Alex Baron", role: { en: "Chief Operating Officer", vi: "Giám đốc vận hành" }, img: "/images/people/alex-baron.webp", bio: { en: "Finance, product and technology leadership focused on making bold ideas work in real homes.", vi: "Kinh nghiệm tài chính, sản phẩm và công nghệ, tập trung biến ý tưởng lớn thành trải nghiệm thực trong gia đình." } },
] as const;

export const advisors = [
  { name: "Dr. Sheila McKenzie, PhD", role: { en: "Sleep Consultant", vi: "Cố vấn giấc ngủ" }, img: "/images/people/sheila-mckenzie.webp", bio: { en: "President of the World Organization of Natural Medicine.", vi: "Chủ tịch World Organization of Natural Medicine." } },
  { name: "Dr. Jeffry Parker", role: { en: "Wellness Consultant", vi: "Cố vấn wellness" }, img: "/images/people/jeffrey-parker.webp", bio: { en: "A long-practicing wellness professional who treats rest as a foundation.", vi: "Chuyên gia wellness lâu năm, xem nghỉ ngơi là nền tảng." } },
] as const;

export const offices = [
  { region: { en: "Canada - Headquarters", vi: "Canada - Trụ sở" }, city: "Toronto", address: ["2600 John St. Unit 205", "Markham, ON L3R 3W3"], phone: "+1 905-604-5558", email: "info@sleepm.com" },
  { region: { en: "United States - West", vi: "Hoa Kỳ - Miền Tây" }, city: "Los Angeles", address: ["11837 Goldring Rd", "Arcadia, CA 91006"], phone: "+1 (626) 678-5919", email: "support@sleepm.com" },
  { region: { en: "United States - Store", vi: "Hoa Kỳ - Cửa hàng" }, city: "Las Vegas", address: ["3160 W Sahara Ave, Suite A11", "Las Vegas, NV 89102"], phone: "+1 (702) 797-0441", email: "info@sleepm.com" },
  { region: { en: "United States - East", vi: "Hoa Kỳ - Miền Đông" }, city: "New York", address: ["499 7th Ave", "Floor 14N", "New York, NY 10018"], phone: "+1 929-966-8689", email: "support@sleepm.com" },
] as const;

export const genericPages = {
  "sleep-health": {
    eyebrow: { en: "The Sleepm wellness mission", vi: "Sứ mệnh wellness của Sleepm" },
    title: { en: "Rest is the foundation.", vi: "Nghỉ ngơi là nền tảng." },
    text: {
      en: "We built Sleepm around a simple idea: a better night changes the whole day. Mood, focus, energy and recovery all begin with rest.",
      vi: "Sleepm được xây dựng quanh một ý tưởng giản dị: một đêm ngon làm thay đổi cả ngày. Tâm trạng, sự tập trung, năng lượng và phục hồi đều bắt đầu từ nghỉ ngơi.",
    },
    cards: [
      { metric: "37M", label: { en: "Americans have trouble falling asleep most nights.", vi: "người Mỹ khó ngủ vào hầu hết các đêm." } },
      { metric: "1 in 3", label: { en: "adults describe their sleep as fair or poor.", vi: "người trưởng thành mô tả giấc ngủ chỉ ở mức tạm hoặc kém." } },
      { metric: "2x", label: { en: "good sleepers report higher life-satisfaction scores.", vi: "người ngủ tốt báo cáo mức hài lòng cuộc sống cao hơn." } },
    ],
  },
  testimonials: {
    eyebrow: { en: "Testimonials", vi: "Cảm nhận" },
    title: { en: "In their own words.", vi: "Bằng chính lời của họ." },
    text: {
      en: "Athletes, performers and everyday sleepers describe the difference they feel after changing their nights.",
      vi: "Vận động viên, nghệ sĩ và những người ngủ mỗi ngày chia sẻ khác biệt họ cảm nhận sau khi thay đổi giấc ngủ.",
    },
    cards: [
      { metric: "Carlos Newton", label: { en: "Former UFC Champion: better alignment and faster recovery after travel.", vi: "Cựu vô địch UFC: cảm nhận sự thẳng hàng tốt hơn và phục hồi nhanh hơn sau chuyến bay." } },
      { metric: "Simmi Hundal", label: { en: "Musical artist: rest that helps the morning begin ready.", vi: "Nghệ sĩ âm nhạc: giấc nghỉ giúp buổi sáng bắt đầu sẵn sàng hơn." } },
      { metric: "Joe Cariati", label: { en: "Taekwondo leader: energy for demanding classes.", vi: "Lãnh đạo Taekwondo: năng lượng cho những lớp học cường độ cao." } },
    ],
  },
  payments: {
    eyebrow: { en: "Flexible payments", vi: "Thanh toán linh hoạt" },
    title: { en: "Rest now, settle softly.", vi: "Nghỉ ngon hôm nay, thanh toán nhẹ nhàng." },
    text: {
      en: "Sleepm can be paired with financing options through local offices and distributors where available.",
      vi: "Sleepm có thể đi kèm các lựa chọn hỗ trợ tài chính thông qua văn phòng và nhà phân phối địa phương khi có áp dụng.",
    },
    cards: [
      { metric: "Synchrony", label: { en: "Flexible financing on approved credit.", vi: "Tài chính linh hoạt khi được phê duyệt tín dụng." } },
      { metric: "Progressive", label: { en: "Lease-to-own options in supported markets.", vi: "Lựa chọn thuê để sở hữu tại các thị trường hỗ trợ." } },
      { metric: "Local help", label: { en: "A distributor can walk you through the available path.", vi: "Nhà phân phối có thể hướng dẫn lựa chọn phù hợp." } },
    ],
  },
  warranty: {
    eyebrow: { en: "Warranty", vi: "Bảo hành" },
    title: { en: "We stand behind every night.", vi: "Chúng tôi đồng hành sau mỗi đêm ngủ." },
    text: {
      en: "Prepare photos, measurements and your product details, then contact support for the current warranty process.",
      vi: "Chuẩn bị ảnh, số đo và thông tin sản phẩm, sau đó liên hệ hỗ trợ để nhận quy trình bảo hành hiện hành.",
    },
    cards: [
      { metric: "Photos", label: { en: "Capture the mattress surface and any visible concern.", vi: "Chụp bề mặt nệm và vấn đề có thể thấy." } },
      { metric: "Measure", label: { en: "Use a straight edge and tape measure.", vi: "Dùng thước thẳng và thước dây." } },
      { metric: "Support", label: { en: "Call 1-844-8SLEEPM or email support.", vi: "Gọi 1-844-8SLEEPM hoặc email bộ phận hỗ trợ." } },
    ],
  },
  terms: {
    eyebrow: { en: "Terms", vi: "Điều khoản" },
    title: { en: "Clear terms for a person-to-person brand.", vi: "Điều khoản rõ ràng cho thương hiệu chia sẻ trực tiếp." },
    text: {
      en: "Sleepm product stories, community content and distributor conversations are shared to help visitors make informed choices.",
      vi: "Câu chuyện sản phẩm, nội dung cộng đồng và trao đổi với nhà phân phối được chia sẻ để giúp khách truy cập có lựa chọn rõ ràng hơn.",
    },
    cards: [
      { metric: "Use", label: { en: "Use the site for product learning and contact.", vi: "Sử dụng website để tìm hiểu sản phẩm và liên hệ." } },
      { metric: "Content", label: { en: "Product stories are wellness information, not medical advice.", vi: "Câu chuyện sản phẩm là thông tin wellness, không phải tư vấn y tế." } },
      { metric: "Updates", label: { en: "Terms may be updated for launch markets.", vi: "Điều khoản có thể được cập nhật theo thị trường ra mắt." } },
    ],
  },
  privacy: {
    eyebrow: { en: "Privacy", vi: "Quyền riêng tư" },
    title: { en: "Only ask for what helps us answer.", vi: "Chỉ hỏi những gì giúp chúng tôi phản hồi." },
    text: {
      en: "Sleepm asks for contact details only so the right team member or distributor can reply.",
      vi: "Sleepm chỉ hỏi thông tin liên hệ để đúng thành viên hoặc nhà phân phối có thể phản hồi.",
    },
    cards: [
      { metric: "Contact", label: { en: "Name, email and message are used to reply.", vi: "Tên, email và lời nhắn được dùng để phản hồi." } },
      { metric: "Care", label: { en: "Personal details should be handled by approved Sleepm systems.", vi: "Thông tin cá nhân cần được xử lý bởi hệ thống Sleepm đã phê duyệt." } },
      { metric: "Choice", label: { en: "Visitors can email instead of submitting a form.", vi: "Khách truy cập có thể gửi email thay cho biểu mẫu." } },
    ],
  },
} as const;

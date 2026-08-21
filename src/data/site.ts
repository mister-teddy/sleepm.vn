export type Lang = "en" | "vi";
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = "vi";

export const languages: Record<Lang, { code: Lang; label: string; native: string; locale: string }> = {
  en: { code: "en", label: "English", native: "English", locale: "en-US" },
  vi: { code: "vi", label: "Vietnamese", native: "Tiếng Việt", locale: "vi-VN" },
};

export const langCodes = Object.keys(languages) as Lang[];

export const siteMeta = {
  name: "Sleepm",
  description: {
    en: "Sleepm BioCrystal mattresses, toppers, pillows and wellness sleep products.",
    vi: "Nệm, topper, gối và sản phẩm chăm sóc giấc ngủ BioCrystal của Sleepm.",
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
    crystals: { en: "BioCrystal", vi: "Tinh thể sinh học" },
    constellation: { en: "Ingredients", vi: "Thành phần" },
    nightWire: { en: "Blog", vi: "Tin tức" },
    family: { en: "About", vi: "Về Sleepm" },
    distributors: { en: "Become a Distributor", vi: "Trở thành nhà phân phối" },
    signIn: { en: "Member Login", vi: "Đăng nhập thành viên" },
    contact: { en: "Contact Us", vi: "Liên hệ" },
  },
  labels: {
    collection: { en: "Product line", vi: "Dòng sản phẩm" },
    allProducts: { en: "All products", vi: "Tất cả sản phẩm" },
    askFamily: { en: "Contact Sleepm", vi: "Liên hệ Sleepm" },
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
    nightKept: { en: "Sleep Better, Live Better.", vi: "Ngủ ngon hơn, sống tốt hơn." },
    disclaimer: {
      en: "Sleepm products are wellness and comfort products, not medical devices, and are not intended to diagnose, treat, cure, or prevent any disease. Crystal and noble-metal traditions are shared as lore and heritage.",
      vi: "Sản phẩm Sleepm là sản phẩm chăm sóc sức khỏe và sự thoải mái, không phải thiết bị y tế, không dùng để chẩn đoán, điều trị, chữa khỏi hoặc phòng ngừa bệnh. Truyền thống về tinh thể và kim loại quý được chia sẻ như di sản văn hóa.",
    },
    appTitle: { en: "Get the app", vi: "Tải ứng dụng" },
    appText: {
      en: "Scan with your phone camera to open the Sleepm app download.",
      vi: "Quét bằng camera điện thoại để mở trang tải ứng dụng Sleepm.",
    },
    legalTitle: { en: "Everything else", vi: "Thông tin khác" },
  },
  noPrices: {
    eyebrow: { en: "Pricing and support", vi: "Giá và hỗ trợ" },
    title: { en: "Talk to a Sleepm distributor.", vi: "Trao đổi với nhà phân phối Sleepm." },
    text: {
      en: "Sleepm is sold through distributors and local offices. Product pricing, financing and availability can vary by market.",
      vi: "Sleepm được bán qua nhà phân phối và văn phòng địa phương. Giá, hỗ trợ tài chính và tình trạng hàng có thể khác nhau theo thị trường.",
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
    title: { en: "Improve wellness through better sleep.", vi: "Cải thiện sức khỏe bằng giấc ngủ tốt hơn." },
    summary: {
      en: "Sleepm combines a BioCrystal layer of 16 natural crystals with gold and silver, cooling comfort foams, natural latex and coil support.",
      vi: "Sleepm kết hợp lớp BioCrystal gồm 16 tinh thể tự nhiên cùng vàng, bạc, foam làm mát, latex tự nhiên và hệ lò xo nâng đỡ.",
    },
    collectionLine: {
      en: "The core Sleepm product: BioCrystal technology, cooling foam, latex and coil support.",
      vi: "Sản phẩm chủ lực của Sleepm: công nghệ BioCrystal, foam làm mát, latex và hệ lò xo nâng đỡ.",
    },
    details: {
      en: [
        "Built in the United States and Canada with premium materials, breathable comfort layers and the Sleepm BioCrystal insert.",
        "The mattress uses cooling gel memory foam, activated charcoal, natural Thai latex, independent pocket coils and micro-coil support.",
      ],
      vi: [
        "Được sản xuất tại Hoa Kỳ và Canada với vật liệu cao cấp, các lớp thoáng khí và lớp lót BioCrystal của Sleepm.",
        "Nệm sử dụng memory foam gel làm mát, than hoạt tính, latex Thái Lan tự nhiên, lò xo túi độc lập và công nghệ micro-coil.",
      ],
    },
    features: [
      {
        title: { en: "BioCrystal blend", vi: "Hỗn hợp BioCrystal" },
        text: { en: "Sixteen natural crystals are combined with gold and silver in the Sleepm insert.", vi: "Mười sáu tinh thể tự nhiên được kết hợp với vàng và bạc trong lớp lót Sleepm." },
      },
      {
        title: { en: "Cooling and odor control", vi: "Làm mát và kiểm soát mùi" },
        text: { en: "Cooling gel memory foam and activated charcoal help keep the sleep surface fresher.", vi: "Memory foam gel làm mát và than hoạt tính giúp bề mặt ngủ thoáng và sạch hơn." },
      },
      {
        title: { en: "Latex and coil support", vi: "Latex và lò xo nâng đỡ" },
        text: { en: "Natural Thai latex, independent coils and micro-coils provide responsive support and airflow.", vi: "Latex Thái Lan tự nhiên, lò xo độc lập và micro-coil tạo độ nâng đỡ phản hồi tốt và luồng khí thoáng." },
      },
    ],
    specs: [
      { label: { en: "Sizes", vi: "Kích thước" }, value: { en: "Twin 39 x 75, Double 54 x 75, Queen 60 x 80, King 76 x 80, California King 72 x 84 in", vi: "Twin 39 x 75, Double 54 x 75, Queen 60 x 80, King 76 x 80, California King 72 x 84 inch" } },
      { label: { en: "Core materials", vi: "Vật liệu chính" }, value: { en: "BioCrystal insert, natural latex, cooling gel memory foam, activated charcoal, pocket coils", vi: "Lớp BioCrystal, latex tự nhiên, memory foam gel làm mát, than hoạt tính, lò xo túi" } },
      { label: { en: "Made in", vi: "Sản xuất tại" }, value: { en: "USA and Canada", vi: "Mỹ và Canada" } },
    ],
  },
  {
    slug: "topper",
    image: "/images/products/topper.webp",
    gallery: ["/images/products/topper.webp", "/images/products/topper-detail.webp"],
    name: { en: "BioCrystal Topper", vi: "Topper BioCrystal" },
    eyebrow: { en: "BioCrystal Topper", vi: "Topper BioCrystal" },
    title: { en: "Add BioCrystal comfort to the mattress you already own.", vi: "Thêm tiện nghi BioCrystal vào chiếc nệm bạn đang dùng." },
    summary: {
      en: "The topper layers temperature-responsive foam, Thai natural latex, activated charcoal and the Sleepm BioCrystal insert over your existing bed.",
      vi: "Topper phủ thêm các lớp foam phản ứng theo nhiệt độ, latex Thái Lan tự nhiên, than hoạt tính và lớp lót BioCrystal lên chiếc nệm hiện tại.",
    },
    collectionLine: {
      en: "A practical upgrade with cooling channels, latex support and BioCrystal technology.",
      vi: "Nâng cấp thực tế với rãnh thông gió làm mát, latex nâng đỡ và công nghệ BioCrystal.",
    },
    details: {
      en: [
        "The classic topper is designed to relieve pressure points and improve airflow with cool-channel ventilation.",
        "Carbon-infused smart foam helps neutralize odors while natural latex adds resilient support.",
      ],
      vi: [
        "Topper cổ điển được thiết kế để giảm các điểm áp lực và tăng luồng khí bằng rãnh thông gió làm mát.",
        "Foam thông minh chứa carbon hỗ trợ trung hòa mùi, trong khi latex tự nhiên tạo độ nâng đỡ đàn hồi.",
      ],
    },
    features: [
      {
        title: { en: "7-zone comfort", vi: "Tiện nghi 7 vùng" },
        text: { en: "A multi-surface design gives extra support where the body needs pressure relief.", vi: "Thiết kế nhiều bề mặt bổ sung nâng đỡ tại những vùng cơ thể cần giảm áp lực." },
      },
      {
        title: { en: "Cool-channel ventilation", vi: "Rãnh thông gió làm mát" },
        text: { en: "Ventilation channels and breathable fabric help the surface stay cooler.", vi: "Rãnh thông gió và lớp vải thoáng khí giúp bề mặt dễ chịu hơn." },
      },
      {
        title: { en: "BioCrystal insert", vi: "Lớp BioCrystal" },
        text: { en: "Adds Sleepm BioCrystal technology without replacing the full mattress.", vi: "Thêm công nghệ BioCrystal của Sleepm mà không cần thay toàn bộ nệm." },
      },
    ],
    specs: [
      { label: { en: "Design", vi: "Thiết kế" }, value: { en: "Classic multi-layer topper", vi: "Topper cổ điển nhiều lớp" } },
      { label: { en: "Comfort", vi: "Tiện nghi" }, value: { en: "Cool-channel ventilation and 7-zone pressure relief", vi: "Rãnh thông gió làm mát và giảm áp lực 7 vùng" } },
      { label: { en: "Core", vi: "Lõi" }, value: { en: "Thai natural latex, carbon smart foam, BioCrystal insert", vi: "Latex Thái Lan tự nhiên, foam carbon thông minh, lớp BioCrystal" } },
    ],
  },
  {
    slug: "pillows",
    image: "/images/products/pillows.webp",
    gallery: ["/images/products/pillows.webp", "/images/products/pillow-butterfly.webp"],
    name: { en: "BioCrystal Pillows", vi: "Gối BioCrystal" },
    eyebrow: { en: "Four pillows", vi: "Bốn kiểu gối" },
    title: { en: "Pillow support for different sleep positions.", vi: "Gối nâng đỡ cho nhiều tư thế ngủ." },
    summary: {
      en: "Butterfly, Polar Bear, Panda and Camel pillows use different contours and materials for neck alignment, airflow and BioCrystal comfort.",
      vi: "Gối Butterfly, Polar Bear, Panda và Camel dùng các đường cong và vật liệu khác nhau để hỗ trợ cổ, luồng khí và tiện nghi BioCrystal.",
    },
    collectionLine: {
      en: "Four BioCrystal pillow options for back, side and combination sleepers.",
      vi: "Bốn lựa chọn gối BioCrystal cho người nằm ngửa, nằm nghiêng và hay đổi tư thế.",
    },
    details: {
      en: [
        "Sleepm pillow shapes are built around the neck curve so the head can rest while the shoulders stay supported.",
        "Each model brings a different feel: contour foam, memory foam, latex rebound or a dual-height format.",
      ],
      vi: [
        "Các dáng gối Sleepm được thiết kế quanh đường cong cổ để đầu được nghỉ trong khi vai vẫn có điểm tựa.",
        "Mỗi mẫu có cảm giác riêng: foam contour, memory foam, độ nảy latex hoặc cấu trúc hai độ cao.",
      ],
    },
    features: [
      {
        title: { en: "Butterfly", vi: "Butterfly" },
        text: { en: "A contoured BioCrystal pillow with a neck-support shape and magnet accents.", vi: "Gối BioCrystal dạng contour với đường nâng đỡ cổ và điểm nhấn nam châm." },
      },
      {
        title: { en: "Polar Bear", vi: "Polar Bear" },
        text: { en: "Slow-rebound memory foam for a softer, more cradled feel.", vi: "Memory foam đàn hồi chậm cho cảm giác mềm và ôm đỡ hơn." },
      },
      {
        title: { en: "Panda and Camel", vi: "Panda và Camel" },
        text: { en: "Choose latex rebound or a dual-height pillow for changing sleep positions.", vi: "Chọn độ nảy latex hoặc gối hai độ cao cho người thường đổi tư thế." },
      },
    ],
    specs: [
      { label: { en: "Shapes", vi: "Kiểu dáng" }, value: { en: "Butterfly, Polar Bear, Panda, Camel", vi: "Butterfly, Polar Bear, Panda, Camel" } },
      { label: { en: "Focus", vi: "Trọng tâm" }, value: { en: "Neck curve, shoulder support and airflow", vi: "Đường cong cổ, nâng đỡ vai và luồng khí" } },
      { label: { en: "Inside", vi: "Bên trong" }, value: { en: "BioCrystal comfort layer by model", vi: "Lớp tiện nghi BioCrystal tùy mẫu" } },
    ],
  },
  {
    slug: "heating-pad",
    image: "/images/products/heating-pad.webp",
    gallery: ["/images/products/heating-pad.webp"],
    name: { en: "Heating Pad", vi: "Đệm sưởi" },
    eyebrow: { en: "The Heating Pad", vi: "Đệm sưởi Sleepm" },
    title: { en: "Targeted warmth for daily relaxation.", vi: "Làm ấm từng vùng để thư giãn hằng ngày." },
    summary: {
      en: "Deep, even warmth with the BioCrystal blend inside and a washable graphite pouch outside.",
      vi: "Hơi ấm sâu và đều với hỗn hợp BioCrystal bên trong cùng túi graphite có thể giặt bên ngoài.",
    },
    collectionLine: {
      en: "Portable BioCrystal warmth for shoulders, back, knees and daily comfort routines.",
      vi: "Hơi ấm BioCrystal linh hoạt cho vai, lưng, đầu gối và thói quen thư giãn hằng ngày.",
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
    title: { en: "Portable blackout comfort for rest and travel.", vi: "Che sáng gọn nhẹ cho nghỉ ngơi và du lịch." },
    summary: {
      en: "A soft blackout ritual for travel, naps and rooms that never get quite dark enough.",
      vi: "Một nghi thức che sáng mềm mại cho những chuyến đi, giấc ngủ ngắn và căn phòng chưa đủ tối.",
    },
    collectionLine: {
      en: "A compact sleep accessory for flights, naps and bright bedrooms.",
      vi: "Phụ kiện ngủ gọn nhẹ cho chuyến bay, giấc ngủ ngắn và phòng nhiều sáng.",
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
    title: { en: "Heat and vibration for targeted joint comfort.", vi: "Nhiệt và rung cho vùng khớp cần thư giãn." },
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
    title: { en: "A compact Sleepm companion device.", vi: "Thiết bị đồng hành nhỏ gọn của Sleepm." },
    summary: {
      en: "A compact sleep companion designed to keep the Sleepm ritual close.",
      vi: "Một người bạn ngủ nhỏ gọn giúp giữ nghi thức Sleepm luôn bên cạnh.",
    },
    collectionLine: {
      en: "A small bedside or travel companion for the Sleepm digital experience.",
      vi: "Thiết bị nhỏ cho đầu giường hoặc du lịch, đồng hành với trải nghiệm số Sleepm.",
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
    title: { en: "Product information, app downloads and member resources.", vi: "Thông tin sản phẩm, tải app và tài nguyên thành viên." },
    summary: {
      en: "Mobile access for product information, support links and distributor resources.",
      vi: "Truy cập di động cho thông tin sản phẩm, liên kết hỗ trợ và tài nguyên nhà phân phối.",
    },
    collectionLine: {
      en: "Mobile access for product learning, support and distributor resources.",
      vi: "Truy cập di động để xem sản phẩm, hỗ trợ và tài nguyên nhà phân phối.",
    },
    details: {
      en: [
        "Quick access to product information, app downloads, support and distributor resources.",
        "Designed to help you prepare for sleep, then get out of the way.",
      ],
      vi: [
        "Truy cập nhanh thông tin sản phẩm, tải ứng dụng, hỗ trợ và tài nguyên nhà phân phối.",
        "Được thiết kế để giúp bạn chuẩn bị cho giấc ngủ, rồi lùi lại đúng lúc.",
      ],
    },
    features: [
      {
        title: { en: "Product library", vi: "Thư viện sản phẩm" },
        text: { en: "Keep the Sleepm story close when sharing or learning.", vi: "Giữ câu chuyện Sleepm trong tầm tay khi chia sẻ hoặc tìm hiểu." },
      },
      {
        title: { en: "Distributor resources", vi: "Tài nguyên nhà phân phối" },
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
  eyebrow: { en: "Sleepm BioCrystal blend", vi: "Hỗn hợp BioCrystal của Sleepm" },
  title: { en: "Sixteen crystals, gold and silver.", vi: "Mười sáu tinh thể, vàng và bạc." },
  text: {
    en: "Sleepm presents its BioCrystal insert as a wellness heritage blend used inside the mattress, topper, pillows and comfort accessories.",
    vi: "Sleepm giới thiệu lớp lót BioCrystal như một hỗn hợp wellness mang tính di sản, dùng trong nệm, topper, gối và các phụ kiện thư giãn.",
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
  { key: "gold", img: "/images/crystals/gold.webp", name: { en: "Gold", vi: "Vàng" }, lore: { en: "Included as one of the two noble metals in the BioCrystal blend.", vi: "Một trong hai kim loại quý trong hỗn hợp BioCrystal." } },
  { key: "silver", img: "/images/crystals/silver.webp", name: { en: "Silver", vi: "Bạc" }, lore: { en: "Included with gold to complete the BioCrystal blend.", vi: "Kết hợp cùng vàng để hoàn thiện hỗn hợp BioCrystal." } },
] as const;

export const wireItems = [
  { source: "Sleepm", title: { en: "Sleepm product line", vi: "Dòng sản phẩm Sleepm" }, note: { en: "Mattress, topper, pillows, warming products, massage accessories, light, dot and app.", vi: "Nệm, topper, gối, sản phẩm làm ấm, phụ kiện massage, đèn, dot và ứng dụng." }, url: "https://sleepm.com/products/" },
  { source: "Sleepm", title: { en: "BioCrystal mattress details", vi: "Chi tiết nệm BioCrystal" }, note: { en: "Materials, sizes and the BioCrystal insert used in Sleepm mattresses.", vi: "Vật liệu, kích thước và lớp lót BioCrystal dùng trong nệm Sleepm." }, url: "https://sleepm.com/mattress/" },
  { source: "Sleepm", title: { en: "Warranty claim process", vi: "Quy trình yêu cầu bảo hành" }, note: { en: "How customers should prepare photos, measurements and product details.", vi: "Khách hàng cần chuẩn bị ảnh, số đo và thông tin sản phẩm như thế nào." }, url: "https://sleepm.com/warranty-claim/" },
  { source: "Sleepm", title: { en: "Sleep health information", vi: "Thông tin sức khỏe giấc ngủ" }, note: { en: "Educational content about sleep quality and everyday wellness.", vi: "Nội dung tham khảo về chất lượng giấc ngủ và sức khỏe hằng ngày." }, url: "https://sleepm.com/sleep-health/" },
  { source: "Sleepm Global", title: { en: "Global office locations", vi: "Văn phòng toàn cầu" }, note: { en: "Canada, United States, Vietnam and international Sleepm contacts.", vi: "Thông tin liên hệ Sleepm tại Canada, Hoa Kỳ, Việt Nam và các thị trường quốc tế." }, url: "https://www.sleepm.net/Category/index/id/5.html" },
  { source: "Sleepm", title: { en: "Contact Sleepm", vi: "Liên hệ Sleepm" }, note: { en: "Use the official office and support channels for product questions.", vi: "Dùng kênh văn phòng và hỗ trợ chính thức để hỏi về sản phẩm." }, url: "https://sleepm.com/contact/" },
] as const;

export const family = {
  hero: {
    eyebrow: { en: "About Sleepm", vi: "Về Sleepm" },
    title: { en: "A BioCrystal sleep company with a global distributor network.", vi: "Công ty giấc ngủ BioCrystal với mạng lưới nhà phân phối toàn cầu." },
    text: {
      en: "Sleepm focuses on mattresses, toppers, pillows and wellness accessories that combine modern comfort materials with its BioCrystal insert.",
      vi: "Sleepm tập trung vào nệm, topper, gối và phụ kiện wellness, kết hợp vật liệu tiện nghi hiện đại với lớp lót BioCrystal.",
    },
  },
  chapters: [
    {
      year: "BioCrystal",
      title: { en: "Product platform", vi: "Nền tảng sản phẩm" },
      text: { en: "The brand story centers on 16 natural crystals plus gold and silver used across the Sleepm line.", vi: "Câu chuyện thương hiệu xoay quanh 16 tinh thể tự nhiên cùng vàng và bạc trong dòng sản phẩm Sleepm." },
    },
    {
      year: "USA / Canada",
      title: { en: "North American manufacturing", vi: "Sản xuất tại Bắc Mỹ" },
      text: { en: "Core mattress products are presented as made in the United States and Canada with certified material partners.", vi: "Các sản phẩm nệm chủ lực được giới thiệu là sản xuất tại Hoa Kỳ và Canada cùng các đối tác vật liệu có chứng nhận." },
    },
    {
      year: "Global",
      title: { en: "Distributor model", vi: "Mô hình nhà phân phối" },
      text: { en: "Products are introduced through local offices, showrooms and independent distributors.", vi: "Sản phẩm được giới thiệu thông qua văn phòng, showroom và nhà phân phối độc lập tại địa phương." },
    },
  ],
};

export const people = [
  { name: "Emma He, PhD", role: { en: "Chief Executive Officer", vi: "Tổng giám đốc" }, img: "/images/people/emma-he.webp", bio: { en: "A management PhD and former professor focused on developing Sleepm as a global wellness brand.", vi: "Tiến sĩ quản trị và cựu giáo sư, tập trung phát triển Sleepm như một thương hiệu wellness toàn cầu." } },
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
  { region: { en: "Vietnam - Representative office", vi: "Việt Nam - Văn phòng đại diện" }, city: "Ho Chi Minh City", address: ["Room 903, 9th Floor", "No. 34 Le Duan Street, Sai Gon Ward", "Ho Chi Minh City"], phone: "", email: "", note: { en: "Use the contact form or email support for current Vietnam appointments.", vi: "Vui lòng dùng form liên hệ hoặc email hỗ trợ để đặt lịch làm việc tại Việt Nam." } },
] as const;

export const genericPages = {
  "sleep-health": {
    eyebrow: { en: "The Sleepm wellness mission", vi: "Sứ mệnh wellness của Sleepm" },
    title: { en: "Better sleep supports better days.", vi: "Giấc ngủ tốt hỗ trợ một ngày tốt hơn." },
    text: {
      en: "Sleep quality affects daily energy, concentration, mood and recovery. Sleepm positions its products as comfort and wellness tools for improving the sleep environment.",
      vi: "Chất lượng giấc ngủ ảnh hưởng đến năng lượng, sự tập trung, tâm trạng và phục hồi hằng ngày. Sleepm định vị sản phẩm như công cụ tiện nghi và wellness để cải thiện môi trường ngủ.",
    },
    cards: [
      { metric: "8h", label: { en: "The common target for a full night's rest for many adults.", vi: "Mục tiêu phổ biến cho một đêm nghỉ đầy đủ của nhiều người trưởng thành." } },
      { metric: "Comfort", label: { en: "Temperature, pressure relief and support all affect perceived sleep quality.", vi: "Nhiệt độ, giảm áp lực và nâng đỡ đều ảnh hưởng đến cảm nhận về giấc ngủ." } },
      { metric: "Routine", label: { en: "A consistent bedtime routine helps the bedroom feel easier to rest in.", vi: "Thói quen trước ngủ đều đặn giúp phòng ngủ dễ nghỉ ngơi hơn." } },
    ],
  },
  testimonials: {
    eyebrow: { en: "Testimonials", vi: "Cảm nhận" },
    title: { en: "In their own words.", vi: "Bằng chính lời của họ." },
    text: {
      en: "Customer and ambassador stories are included as personal experiences, not guaranteed outcomes.",
      vi: "Câu chuyện của khách hàng và đại sứ được trình bày như trải nghiệm cá nhân, không phải kết quả bảo đảm.",
    },
    cards: [
      { metric: "Carlos Newton", label: { en: "Former UFC Champion: better alignment and faster recovery after travel.", vi: "Cựu vô địch UFC: cảm nhận sự thẳng hàng tốt hơn và phục hồi nhanh hơn sau chuyến bay." } },
      { metric: "Simmi Hundal", label: { en: "Musical artist: rest that helps the morning begin ready.", vi: "Nghệ sĩ âm nhạc: giấc nghỉ giúp buổi sáng bắt đầu sẵn sàng hơn." } },
      { metric: "Joe Cariati", label: { en: "Taekwondo leader: energy for demanding classes.", vi: "Lãnh đạo Taekwondo: năng lượng cho những lớp học cường độ cao." } },
    ],
  },
  payments: {
    eyebrow: { en: "Flexible payments", vi: "Thanh toán linh hoạt" },
    title: { en: "Financing may be available through local offices.", vi: "Có thể có hỗ trợ tài chính qua văn phòng địa phương." },
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
    title: { en: "Prepare the right details before contacting support.", vi: "Chuẩn bị đúng thông tin trước khi liên hệ hỗ trợ." },
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

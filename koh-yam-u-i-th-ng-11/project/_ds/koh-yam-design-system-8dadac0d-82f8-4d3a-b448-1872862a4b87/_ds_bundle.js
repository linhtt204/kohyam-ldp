/* @ds-bundle: {"format":4,"namespace":"KohYamDesignSystem_8dadac","components":[{"name":"CTAButton","sourcePath":"components/actions/CTAButton.jsx"},{"name":"LocationTag","sourcePath":"components/actions/LocationTag.jsx"},{"name":"PromoTag","sourcePath":"components/actions/PromoTag.jsx"},{"name":"PromoNumber","sourcePath":"components/actions/PromoTag.jsx"},{"name":"IslandStamp","sourcePath":"components/brand/IslandStamp.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PatternBand","sourcePath":"components/brand/PatternBand.jsx"},{"name":"Postmark","sourcePath":"components/brand/Postmark.jsx"},{"name":"StampLogo","sourcePath":"components/brand/StampLogo.jsx"},{"name":"ISLANDS","sourcePath":"components/content/IslandPalette.jsx"},{"name":"IslandCard","sourcePath":"components/content/IslandPalette.jsx"},{"name":"IslandPalette","sourcePath":"components/content/IslandPalette.jsx"},{"name":"LANDMARKS","sourcePath":"components/content/LandmarkCard.jsx"},{"name":"LandmarkCard","sourcePath":"components/content/LandmarkCard.jsx"},{"name":"SoSanhPhuongAn","sourcePath":"components/content/SoSanhPhuongAn.jsx"},{"name":"SocialPost","sourcePath":"components/social/SocialPost.jsx"}],"sourceHashes":{"components/actions/CTAButton.jsx":"5051e98d4aed","components/actions/LocationTag.jsx":"6ed68f43643c","components/actions/PromoTag.jsx":"4670f3675bee","components/brand/IslandStamp.jsx":"7559c2e41cef","components/brand/Logo.jsx":"afd67c6ac871","components/brand/PatternBand.jsx":"3e919833c6da","components/brand/Postmark.jsx":"b09e4b3168ae","components/brand/StampLogo.jsx":"eb8f42c58da9","components/content/IslandPalette.jsx":"2559f985bf75","components/content/LandmarkCard.jsx":"2bcbac09201c","components/content/SoSanhPhuongAn.jsx":"0a8815ff2dbe","components/social/SocialPost.jsx":"05d54e7ef84b","ui_kits/social-posts/Posts.jsx":"65c98c835743","ui_kits/social-posts/Studio.jsx":"0b26bf97ca31"},"inlinedExternals":[],"unexposedExports":[{"name":"logoSrc","sourcePath":"components/brand/Logo.jsx"}]} */

(() => {

const __ds_ns = (window.KohYamDesignSystem_8dadac = window.KohYamDesignSystem_8dadac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/CTAButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTAButton({
  variant = "primary",
  size = "md",
  small,
  label,
  href,
  children,
  className = "",
  ...rest
}) {
  const cls = ["ky-cta", variant === "outline" ? "ky-cta--outline" : "", variant === "stack" ? "ky-cta--stack" : "", size === "sm" ? "ky-cta--sm" : "", className].filter(Boolean).join(" ");
  const body = variant === "stack" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("small", null, small || "Comment post"), /*#__PURE__*/React.createElement("strong", null, label || children)) : label || children;
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), body);
}
Object.assign(__ds_scope, { CTAButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CTAButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/LocationTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LocationTag({
  island,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ky-location", className].filter(Boolean).join(" "),
    "data-island": island
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
  })), children);
}
Object.assign(__ds_scope, { LocationTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/LocationTag.jsx", error: String((e && e.message) || e) }); }

// components/actions/PromoTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoTag({
  size = "md",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ky-promo", size === "sm" ? "ky-promo--sm" : "", className].filter(Boolean).join(" ")
  }, rest), children);
}
function PromoNumber({
  value = "10",
  sup = "%",
  suffix = "OFF",
  size = 120,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ky-promo-number",
    style: {
      fontSize: size,
      ...style
    }
  }, rest), value, sup ? /*#__PURE__*/React.createElement("sup", null, sup) : null, suffix ? /*#__PURE__*/React.createElement("em", null, suffix) : null);
}
Object.assign(__ds_scope, { PromoTag, PromoNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/PromoTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/IslandStamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IslandStamp({
  island = "giang-vo",
  kicker = "Đảo Koh",
  name = "Tomyum",
  sub = "116K1 Giảng Võ",
  date = "28.10.2026",
  tilt = -8,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ky-island-stamp",
    "data-island": island,
    style: {
      transform: `rotate(${tilt}deg)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ky-island-stamp__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ky-island-stamp__kicker"
  }, kicker), /*#__PURE__*/React.createElement("span", {
    className: "ky-island-stamp__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "ky-island-stamp__sub"
  }, sub), /*#__PURE__*/React.createElement("span", {
    className: "ky-island-stamp__date"
  }, date)));
}
Object.assign(__ds_scope, { IslandStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IslandStamp.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = b => b ?? (typeof window !== "undefined" && window.KOHYAM_ASSETS) ?? "assets/";
function logoSrc({
  layout = "stacked",
  tagline = false,
  ink = "brown",
  assetBase
} = {}) {
  return `${base(assetBase)}logos/kohyam-logo-${layout}${tagline ? "-tagline" : ""}-${ink}.svg`;
}
function Logo({
  layout = "stacked",
  tagline = false,
  ink = "brown",
  height = 56,
  tab = false,
  tabBg,
  assetBase,
  src,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: src || logoSrc({
      layout,
      tagline,
      ink,
      assetBase
    }),
    alt: "Koh Yam",
    style: {
      height,
      width: "auto",
      display: "block",
      ...(tab ? {} : style)
    }
  }, tab ? {} : rest));
  if (!tab) return img;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ky-logo-tab",
    style: {
      ...(tabBg ? {
        "--tab-bg": tabBg
      } : {}),
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { logoSrc, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = b => b ?? (typeof window !== "undefined" && window.KOHYAM_ASSETS) ?? "assets/";
function PatternBand({
  pattern = "05",
  height = 56,
  opacity = 1,
  background,
  assetBase,
  position = "center",
  style,
  ...rest
}) {
  const n = String(pattern).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ky-pattern-band",
    "aria-hidden": "true",
    style: {
      height,
      opacity,
      backgroundColor: background,
      backgroundImage: `url(${base(assetBase)}patterns/kohyam_graphic_pattern-${n}.png)`,
      backgroundPosition: position,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PatternBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/Postmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let uid = 0;
function Postmark({
  top = "Summer taste",
  bottom = "Thai food",
  center = "2026",
  color,
  size = 112,
  style,
  ...rest
}) {
  const id = React.useMemo(() => `pm${++uid}`, []);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: "ky-postmark",
    viewBox: "0 0 120 120",
    role: "img",
    "aria-label": `${top} ${bottom}`,
    style: {
      width: size,
      height: size,
      ...(color ? {
        color
      } : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: `${id}-t`,
    d: "M 18 60 A 42 42 0 0 1 102 60"
  }), /*#__PURE__*/React.createElement("path", {
    id: `${id}-b`,
    d: "M 14 60 A 46 46 0 0 0 106 60"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "56",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "31",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", null, /*#__PURE__*/React.createElement("textPath", {
    href: `#${id}-t`,
    startOffset: "50%",
    textAnchor: "middle"
  }, top)), /*#__PURE__*/React.createElement("text", null, /*#__PURE__*/React.createElement("textPath", {
    href: `#${id}-b`,
    startOffset: "50%",
    textAnchor: "middle",
    dominantBaseline: "hanging"
  }, bottom)), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "66",
    textAnchor: "middle",
    style: {
      fontSize: 16,
      letterSpacing: "0.04em"
    }
  }, center));
}
Object.assign(__ds_scope, { Postmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Postmark.jsx", error: String((e && e.message) || e) }); }

// components/brand/StampLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const INK = {
  gold: "cream",
  cream: "brown",
  green: "cream",
  island: "cream"
};
function StampLogo({
  variant = "gold",
  island,
  tilt = 0,
  logoHeight = 56,
  tagline = false,
  assetBase,
  children,
  style,
  className = "",
  ...rest
}) {
  const cls = ["ky-stamp", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    "data-island": island,
    "data-stamp": variant !== "gold" ? variant : undefined,
    style: {
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ky-stamp__face"
  }, children || /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.logoSrc({
      layout: "stacked",
      tagline,
      ink: INK[variant] || "cream",
      assetBase
    }),
    alt: "Koh Yam",
    style: {
      height: logoHeight
    }
  })));
}
Object.assign(__ds_scope, { StampLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StampLogo.jsx", error: String((e && e.message) || e) }); }

// components/content/IslandPalette.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ISLANDS = [{
  slug: "giang-vo",
  name: "Koh Tomyum",
  addr: "116K1 Giảng Võ",
  tone: "Cam đất · phụ xanh Koh",
  status: "Đã xác nhận"
}, {
  slug: "quang-trung-34a",
  name: "(tên đảo cần chốt)",
  addr: "34A Quang Trung",
  tone: "Đỏ · phụ xanh Koh",
  status: "Đã xác nhận màu"
}, {
  slug: "quang-trung-2d",
  name: "Koh Sawasdee",
  addr: "2D Quang Trung",
  tone: "Hồng phấn · phụ xanh ghi nhạt",
  status: "Đã xác nhận"
}, {
  slug: "ba-trieu",
  name: "Koh Ngõ Nhỏ",
  addr: "Bà Triệu",
  tone: "Vàng cát · phụ nâu mái",
  status: "Đề xuất"
}, {
  slug: "ho-tung-mau",
  name: "Koh Ban Công",
  addr: "Hồ Tùng Mậu, Q1",
  tone: "Xanh ghi lam · phụ lam nhạt",
  status: "Đề xuất"
}, {
  slug: "ba-huyen-thanh-quan",
  name: "Koh San Hô",
  addr: "Bà Huyện Thanh Quan, Q3",
  tone: "San hô · phụ cam đào",
  status: "Đề xuất"
}];
function IslandCard({
  slug,
  name,
  addr,
  tone,
  status
}) {
  const draft = status === "Đề xuất";
  return /*#__PURE__*/React.createElement("div", {
    className: "ky-island-card",
    "data-island": slug
  }, /*#__PURE__*/React.createElement("div", {
    className: "ky-island-card__face"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ky-island-card__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "ky-island-card__addr"
  }, addr)), /*#__PURE__*/React.createElement("div", {
    className: "ky-island-card__meta"
  }, /*#__PURE__*/React.createElement("div", null, tone), /*#__PURE__*/React.createElement("span", {
    className: `ky-island-card__status${draft ? " ky-island-card__status--draft" : ""}`
  }, status)));
}
function IslandPalette({
  islands = ISLANDS,
  only,
  style,
  ...rest
}) {
  const list = only ? islands.filter(i => only.includes(i.slug)) : islands;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ky-row",
    style: {
      alignItems: "stretch",
      ...style
    }
  }, rest), list.map(i => /*#__PURE__*/React.createElement(IslandCard, _extends({
    key: i.slug
  }, i))));
}
Object.assign(__ds_scope, { ISLANDS, IslandCard, IslandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IslandPalette.jsx", error: String((e && e.message) || e) }); }

// components/content/LandmarkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LANDMARKS = {
  "suoi-thao-moc": {
    name: "Suối Thảo Mộc",
    quote: "Danh thắng đã đặt tên cho Koh."
  },
  "bien-do": {
    name: "Biển Đỏ",
    quote: "Ra khơi cùng cả bàn."
  },
  "nui-lua": {
    name: "Núi Lửa",
    quote: "Leo tới đỉnh là hết sợ cay."
  },
  "song-bang": {
    name: "Sông Băng",
    quote: "Dòng sông mát nhất giữa mâm cay."
  },
  "rung-gion": {
    name: "Rừng Giòn",
    quote: "Gắp trước, kẻo hết."
  }
};
function LandmarkCard({
  landmark = "nui-lua",
  kicker = "Cẩm nang đảo Koh",
  name,
  dish,
  quote,
  rows = [],
  style,
  ...rest
}) {
  const d = LANDMARKS[landmark] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ky-landmark",
    "data-landmark": landmark,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ky-landmark__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ky-landmark__kicker"
  }, kicker), /*#__PURE__*/React.createElement("div", {
    className: "ky-landmark__name"
  }, name || d.name), dish ? /*#__PURE__*/React.createElement("div", {
    className: "ky-landmark__dish"
  }, dish) : null), /*#__PURE__*/React.createElement("div", {
    className: "ky-landmark__quote"
  }, quote || d.quote), /*#__PURE__*/React.createElement("ul", {
    className: "ky-landmark__rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, r[0]), r[1]))));
}
Object.assign(__ds_scope, { LANDMARKS, LandmarkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LandmarkCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SoSanhPhuongAn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SW = {
  A: ["#456534", "#293d1f", "#d8a459", "#fcf7ef", "#eba7b8"],
  B: ["#28231c", "#d8a459", "#fcf7ef", "#e7c899", "#9a9a95"]
};
function SoSanhPhuongAn({
  pick = "A",
  style,
  ...rest
}) {
  const col = (k, title, theme, bullets) => /*#__PURE__*/React.createElement("div", {
    className: `ky-compare__col${pick === k ? " ky-compare__col--pick" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ky-compare__title"
  }, title, pick === k ? /*#__PURE__*/React.createElement("span", {
    className: "ky-compare__badge"
  }, "\u0110ang ch\u1ECDn") : null), /*#__PURE__*/React.createElement("div", {
    className: "ky-compare__swatches"
  }, SW[k].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      background: c,
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      fontWeight: 700,
      color: "var(--koh-brown-600)"
    }
  }, "Theme: ", theme), /*#__PURE__*/React.createElement("ul", {
    className: "ky-compare__list"
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, b))));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ky-compare",
    style: style
  }, rest), col("A", "A · Xanh làm chủ", "kem + xanh", ["Nhận diện trên feed cao: nền xanh lặp lại", "Khớp nội thất ghế xanh–hồng", "Màu đảo chỉ ở tab logo, tem, nhãn địa chỉ", "Rủi ro: đảo không được chọn xanh lá"]), col("B", "B · Trung tính làm chủ", "b-kem + b-nau", ["Gần guideline 2021 nhất", "Màu đảo / mùa làm nhân vật chính", "Nhận diện trên feed thấp: mỗi bài một màu", "Rủi ro: lặp lại tình trạng “mỗi bài một kiểu”"]));
}
Object.assign(__ds_scope, { SoSanhPhuongAn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SoSanhPhuongAn.jsx", error: String((e && e.message) || e) }); }

// components/social/SocialPost.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = b => b ?? (typeof window !== "undefined" && window.KOHYAM_ASSETS) ?? "assets/";

/* Two standard 1:1 layouts from the brand book:
   layout="xanh" — promo/event: green surface, framed photo, gold logo tab top-right, stacked CTA bottom-centre
   layout="kem"  — dish/story: cream surface, large rounded photo, stamp logo top-left, h3 title + caption + small CTA */
function SocialPost({
  size = 540,
  style,
  ...props
}) {
  const k = size / 540;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: "none",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      height: 540,
      transform: k === 1 ? undefined : `scale(${k})`,
      transformOrigin: "0 0"
    }
  }, /*#__PURE__*/React.createElement(PostBody, props)));
}
function PostBody({
  layout = "xanh",
  photo,
  title,
  caption,
  cta = "Đặt bàn ngay",
  ctaSmall = "Comment post",
  island,
  address,
  assetBase,
  children,
  ...rest
}) {
  const img = photo || `${base(assetBase)}photos/food-ban-tiec.jpg`;
  if (layout === "kem") {
    return /*#__PURE__*/React.createElement("div", _extends({
      "data-theme": "kem",
      className: "ky-post"
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "ky-post__photo",
      style: {
        top: "6%",
        left: "6%",
        right: "6%",
        bottom: "30%",
        boxShadow: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "3%",
        left: "3%"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.StampLogo, {
      variant: island ? "island" : "gold",
      island: island,
      tilt: -4,
      logoHeight: 40,
      assetBase: assetBase
    })), address ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: "8%",
        top: "62%"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.LocationTag, {
      island: island
    }, address)) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "6%",
        right: "6%",
        bottom: "5%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h3",
      style: {
        color: "var(--brand)",
        textWrap: "pretty"
      }
    }, title), caption ? /*#__PURE__*/React.createElement("div", {
      className: "caption",
      style: {
        color: "var(--ink-muted)",
        maxWidth: 300
      }
    }, caption) : null), /*#__PURE__*/React.createElement(__ds_scope.CTAButton, {
      size: "sm",
      label: cta
    })), children);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": "xanh",
    className: "ky-post"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ky-post__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "ky-post__tab"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tab: true,
    tagline: true,
    ink: "gold",
    assetBase: assetBase
  })), title ? /*#__PURE__*/React.createElement("div", {
    className: "h2",
    style: {
      position: "absolute",
      left: "12%",
      top: "14%",
      maxWidth: "52%",
      color: "var(--koh-cream-50)",
      fontWeight: 700,
      textShadow: "0 2px 12px rgba(40,35,28,.45)"
    }
  }, title) : null, address ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "12%",
      bottom: "17%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LocationTag, {
    island: island
  }, address)) : null, /*#__PURE__*/React.createElement("div", {
    className: "ky-post__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.CTAButton, {
    variant: "stack",
    small: ctaSmall,
    label: cta
  })), children);
}
Object.assign(__ds_scope, { SocialPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social-posts/Posts.jsx
try { (() => {
// Koh Yam social post templates — composed from the design-system primitives.
const {
  SocialPost,
  PromoTag,
  PromoNumber,
  Postmark,
  PatternBand,
  LocationTag
} = window.KohYamDesignSystem_8dadac;
const A = "../../assets/";
function PromoPost({
  title,
  cta,
  size
}) {
  return /*#__PURE__*/React.createElement(SocialPost, {
    layout: "xanh",
    size: size,
    title: title,
    cta: cta,
    photo: A + "photos/food-ban-tiec.jpg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "12%",
      bottom: "17%"
    }
  }, /*#__PURE__*/React.createElement(PromoTag, {
    size: "sm"
  }, "Nh\xF3m 4 ng\u01B0\u1EDDi \xB7 th\u1EE9 2\u20135")));
}
function DishPost({
  title,
  caption,
  cta,
  size
}) {
  return /*#__PURE__*/React.createElement(SocialPost, {
    layout: "kem",
    size: size,
    title: title,
    caption: caption,
    cta: cta,
    photo: A + "photos/food-bo-kho-thai.jpg"
  });
}
function IslandPost({
  title,
  caption,
  cta,
  size
}) {
  return /*#__PURE__*/React.createElement(SocialPost, {
    layout: "kem",
    size: size,
    island: "giang-vo",
    address: "116K1 Gi\u1EA3ng V\xF5",
    title: title,
    caption: caption,
    cta: cta,
    photo: A + "photos/facade-giang-vo.jpg"
  });
}
function TrungThuPost({
  title,
  cta,
  size
}) {
  return /*#__PURE__*/React.createElement(SocialPost, {
    layout: "xanh",
    size: size,
    title: title,
    cta: cta,
    photo: A + "photos/interior-ghe-xanh-hong.jpg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 18,
      transform: "rotate(-10deg)"
    }
  }, /*#__PURE__*/React.createElement(Postmark, {
    top: "Trung thu",
    bottom: "Nh\xE0 Koh",
    center: "2026",
    color: "var(--campaign-trungthu)",
    size: 96
  })));
}
function OfferPost({
  title,
  cta,
  size
}) {
  return /*#__PURE__*/React.createElement(SocialPost, {
    layout: "kem",
    size: size,
    title: title,
    caption: "\xC1p d\u1EE5ng \u0111\u1EBFn 30.11 \xB7 kh\xF4ng c\u1ED9ng d\u1ED3n \u01B0u \u0111\xE3i kh\xE1c.",
    cta: cta,
    photo: A + "photos/food-ban-tiec.jpg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "9%",
      top: "44%",
      background: "var(--koh-cream-50)",
      borderRadius: 14,
      padding: "6px 14px 2px",
      boxShadow: "var(--shadow-sticker)"
    }
  }, /*#__PURE__*/React.createElement(PromoNumber, {
    size: 72
  })));
}
const TEMPLATES = [{
  id: "promo",
  label: "Khuyến mãi · nền xanh",
  C: PromoPost,
  title: "Cả bàn đều có món mình mê",
  caption: "",
  cta: "Đặt bàn ngay"
}, {
  id: "dish",
  label: "Bài món · nền kem",
  C: DishPost,
  title: "Núi Lửa · Bò khô Thái",
  caption: "Leo tới đỉnh là hết sợ cay.",
  cta: "Xem menu"
}, {
  id: "island",
  label: "Bài đảo · Giảng Võ",
  C: IslandPost,
  title: "Sawasdee từ đảo Tomyum",
  caption: "Mặt tiền cam đất, ghế xanh hồng, lẩu sôi sẵn.",
  cta: "Chỉ đường"
}, {
  id: "trungthu",
  label: "Mùa · Trung thu",
  C: TrungThuPost,
  title: "Trăng tròn, cả nhà tròn bàn",
  caption: "",
  cta: "Đặt bàn ngay"
}, {
  id: "offer",
  label: "Ưu đãi · con số",
  C: OfferPost,
  title: "Ghé Koh, yam cho vừa",
  caption: "",
  cta: "Đặt bàn ngay"
}];
Object.assign(window, {
  TEMPLATES,
  PromoPost,
  DishPost,
  IslandPost,
  TrungThuPost,
  OfferPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social-posts/Posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social-posts/Studio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Studio shell: template picker + copy fields + live post + feed strip.
const {
  CTAButton: KyCTA,
  Logo: KyLogo,
  PatternBand: KyBand
} = window.KohYamDesignSystem_8dadac;
function Field({
  label,
  value,
  onChange,
  hint,
  max
}) {
  const over = max && value.trim().split(/\s+/).filter(Boolean).length > max;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      font: "500 15px/1.4 var(--font-text)",
      color: "var(--ink)",
      background: "var(--koh-cream-50)",
      border: 0,
      boxShadow: `inset 0 0 0 1px ${over ? "var(--koh-chili-700)" : "var(--line)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "10px 12px",
      outline: "none"
    }
  }), hint ? /*#__PURE__*/React.createElement("span", {
    className: "caption",
    style: {
      color: over ? "var(--koh-chili-700)" : "var(--ink-muted)"
    }
  }, hint) : null);
}
function Studio() {
  const [id, setId] = React.useState(() => localStorage.getItem("ky-studio-tpl") || "promo");
  const [copy, setCopy] = React.useState(() => Object.fromEntries(TEMPLATES.map(t => [t.id, {
    title: t.title,
    caption: t.caption,
    cta: t.cta
  }])));
  React.useEffect(() => localStorage.setItem("ky-studio-tpl", id), [id]);
  const t = TEMPLATES.find(x => x.id === id) || TEMPLATES[0];
  const c = copy[t.id];
  const set = k => v => setCopy(s => ({
    ...s,
    [t.id]: {
      ...s[t.id],
      [k]: v
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-alt)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px",
      background: "var(--koh-green-900)"
    }
  }, /*#__PURE__*/React.createElement(KyLogo, {
    layout: "horizontal",
    ink: "gold",
    height: 30
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--koh-green-200)"
    }
  }, "B\xE0i \u0111\u0103ng \xB7 1080 \xD7 1080")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(260px,320px) minmax(0,1fr)",
      gap: 32,
      padding: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "M\u1EABu"), TEMPLATES.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => setId(x.id),
    style: {
      textAlign: "left",
      font: "700 14px/1.2 var(--font-display)",
      padding: "11px 14px",
      borderRadius: "var(--radius-sm)",
      border: 0,
      cursor: "pointer",
      background: x.id === id ? "var(--koh-green-700)" : "var(--koh-cream-50)",
      color: x.id === id ? "var(--koh-cream-50)" : "var(--ink)",
      boxShadow: x.id === id ? "var(--shadow-sticker)" : "inset 0 0 0 1px var(--line)"
    }
  }, x.label))), /*#__PURE__*/React.createElement(Field, {
    label: "Th\xF4ng \u0111i\u1EC7p",
    value: c.title,
    onChange: set("title"),
    max: 8,
    hint: "M\u1ED9t th\xF4ng \u0111i\u1EC7p, t\u1ED1i \u0111a 8 ch\u1EEF."
  }), t.caption !== "" ? /*#__PURE__*/React.createElement(Field, {
    label: "C\xE2u ng\u1EAFn",
    value: c.caption,
    onChange: set("caption")
  }) : null, /*#__PURE__*/React.createElement(Field, {
    label: "CTA",
    value: c.cta,
    onChange: set("cta"),
    max: 4,
    hint: "\u0110\u1ED9ng t\u1EEB + \u0111\xEDch, 2\u20134 ch\u1EEF."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(KyCTA, {
    size: "sm",
    label: "Xu\u1EA5t \u1EA3nh"
  }), /*#__PURE__*/React.createElement(KyCTA, {
    size: "sm",
    variant: "outline",
    label: "Nh\xE2n b\u1EA3n"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "0 0 0 1px var(--line), var(--shadow-sticker)"
    }
  }, /*#__PURE__*/React.createElement(t.C, {
    size: 540,
    title: c.title,
    caption: c.caption,
    cta: c.cta
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, TEMPLATES.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => setId(x.id),
    style: {
      padding: 0,
      border: 0,
      cursor: "pointer",
      borderRadius: 4,
      overflow: "hidden",
      outline: x.id === id ? "3px solid var(--koh-green-700)" : "none",
      outlineOffset: 2,
      background: "none"
    }
  }, /*#__PURE__*/React.createElement(x.C, _extends({
    size: 96
  }, copy[x.id]))))))), /*#__PURE__*/React.createElement(KyBand, {
    pattern: "05",
    height: 28,
    background: "var(--koh-cream-100)"
  }));
}
window.Studio = Studio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social-posts/Studio.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CTAButton = __ds_scope.CTAButton;

__ds_ns.LocationTag = __ds_scope.LocationTag;

__ds_ns.PromoTag = __ds_scope.PromoTag;

__ds_ns.PromoNumber = __ds_scope.PromoNumber;

__ds_ns.IslandStamp = __ds_scope.IslandStamp;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PatternBand = __ds_scope.PatternBand;

__ds_ns.Postmark = __ds_scope.Postmark;

__ds_ns.StampLogo = __ds_scope.StampLogo;

__ds_ns.ISLANDS = __ds_scope.ISLANDS;

__ds_ns.IslandCard = __ds_scope.IslandCard;

__ds_ns.IslandPalette = __ds_scope.IslandPalette;

__ds_ns.LANDMARKS = __ds_scope.LANDMARKS;

__ds_ns.LandmarkCard = __ds_scope.LandmarkCard;

__ds_ns.SoSanhPhuongAn = __ds_scope.SoSanhPhuongAn;

__ds_ns.SocialPost = __ds_scope.SocialPost;

})();

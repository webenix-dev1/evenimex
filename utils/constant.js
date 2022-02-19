export const seoDetail = {
  title: "",
  canonical: "",
  desc: "",
  image: "/images/YoYoBoat_Logo.png",
  keywords: "Yoyoboat, boat, rental",
  siteName: "",
  siteIcon: "",
};

export const monthArray = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

export const handArray = [
  { value: "1", label: "Left Hand" },
  { value: "0", label: "Right Hand" },
  { value: "2", label: "Switch" },
];

export const dateArray = [
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
];

export const yearArray = () => {
  let currentYear = new Date().getFullYear();
  let yrArr = [];
  for (let yr = 1930; yr <= currentYear; yr++) {
    yrArr.push({ value: yr, label: yr });
  }
  return yrArr;
};

export const cardBrand = {
  Visa: { image: "/images/visa.svg" },
  MasterCard: { image: "/images/mastercard.svg" },
  "American Express": { image: "/images/american-express.svg" },
  JCB: { image: "/images/JCB-logo-card.svg" },
  "Diners Club": { image: "/images/diners-club-seeklogo.svg" },
  Discover: { image: "/images/discover.svg" },
  UnionPay: { image: "/images/UnionPay-card.svg" },
  noImage: { image: "/images/svg/credit-card-icon.svg" },
};

export const titleMeta = "GAMESENSE";

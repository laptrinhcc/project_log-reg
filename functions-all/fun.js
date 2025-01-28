export {
  C_TagFETO,
  C_TagFOTO,
  C_Tag,
  Pp_ToBody,
  C_TagTag1sTag2,
  Select_Tag,
  Change_PropTag,
  Select_Tags,
  Change_PropTags,
  ApC_ToHead,
  attsToStrCss,
  PoppinsHref,
  loadFont,
  applyAttsToAllElm,
  ChangePseudoClass_PropsTag,
};
// Hàm tạo phần tử:C_TagFETO (FE=>forEach,TO=>toán tử 3 ngôi)
const C_TagFETO = (tag, att = {}, children = []) => {
  const elm = document.createElement(tag);
  Object.entries(att).forEach(([key, value]) => elm.setAttribute(key, value));
  (Array.isArray(children) ? children : [children]).forEach((child) =>
    elm.appendChild(
      typeof child === "string" ? document.createTextNode(child) : child
    )
  );
  return elm;
};
// ***** Hoặc dùng C_TagFETO thay cho C_TagFOTO *****//
// Hàm tạo phần tử C_TagFOTO (FO=>for...of,TO=>ternary operator)
const C_TagFOTO = (tag, att = {}, children = []) => {
  const elm = document.createElement(tag);
  for (const [key, value] of Object.entries(att)) {
    elm.setAttribute(key, value);
  }
  for (const child of children) {
    elm.appendChild(
      typeof child === "string" ? document.createTextNode(child) : child
    );
  }
  return elm;
};
// Hàm tạo phần tử đơn (chưa có atts,chưa có content):
const C_Tag = (tag) => document.createElement(tag);
// Hàm thêm phần tử vào đầu thẻ body:
const Pp_ToBody = (elm) => document.body.prepend(elm);

// Hàm thêm nội dung [contents] cho các thẻ
const C_ContentsTags = (tag, att = {}, contents = []) =>
  contents.map((content) => C_TagFOTO(tag, att, content));
// Hàm tạo thẻ Tag chứa nhiều thẻ Tag1 và 1 thẻ Tag2
const C_TagTag1sTag2 = (
  tag,
  att = {},
  content,
  tag1,
  att1 = {},
  content1s = [],
  tag2,
  att2 = {},
  content2
) =>
  C_TagFOTO(tag, att, [
    content,
    ...C_ContentsTags(tag1, att1, content1s),
    C_TagFOTO(tag2, att2, content2),
  ]);
// Hàm chọn phần tử:
const Select_Tag = (tag) => {
  const Tag = document.querySelector(tag);
  return Tag;
};
// Hàm thay đổi thuộc tính cho 1 phần tử
const Change_PropTag = (tag, att = {}) => {
  const Tag = Select_Tag(tag);
  if (Tag) {
    Object.assign(Tag.style, att);
  }
  return Tag;
};
// Hàm chọn tất cả phần tử :
const Select_Tags = (tag) => {
  const Tags = document.querySelectorAll(tag);
  return Tags;
};
// Hàm thay đổi thuộc tính các phần tử :
const Change_PropTags = (tags, atts = {}) => {
  const Tags = Select_Tags(tags);
  if (Tags.length > 0) {
    Tags.forEach((tag) => {
      Object.assign(tag.style, atts);
    });
  }
  return Tags;
};
// Hàm thêm phần tử vào cuối thẻ head:
const ApC_ToHead = (tag) => document.head.appendChild(tag);
// Hàm href của Font Poppins:
const PoppinsHref = () => {
  const hrefLink = `https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap;`;
  return hrefLink;
};
// Hàm loadFont Poppins:
const loadFont = () => {
  const Link = C_Tag("link");
  Link.href = PoppinsHref();
  Link.rel = "stylesheet";
  ApC_ToHead(Link);
};
// Hàm chuyển đối tượng thuộc tính thành chuỗi css:
const attsToStrCss = (atts) => {
  const cssStr = Object.entries(atts)
    .map(
      ([key, value]) =>
        `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`
    )
    .join(" ");
  return cssStr;
};
// Hàm áp dụng các thuộc tính cho toàn trang:
const applyAttsToAllElm = (atts = {}) => {
  const cssStr = attsToStrCss(atts);
  const Style = C_Tag("style");
  Style.textContent = `* {${cssStr}}`;
  ApC_ToHead(Style);
};
const ChangePseudoClass_PropsTag = (select, atts = {}) => {
  const styleEl = C_Tag("style");
  ApC_ToHead(styleEl);
  const cssRules = Object.entries(atts)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  styleEl.sheet.insertRule(`${select} { ${cssRules} }`, 0);
};

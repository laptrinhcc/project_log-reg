export {
  propBody,
  propHeader,
  propLogo,
  propImg,
  propAlink,
  propHoverAlinkB,
  propHoverAlinkA,
  propNavBtnLogin,
};
import {
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
} from "./functions-all/fun.js";
const propBody = (
  display,
  justifyContent,
  position,
  alignItems,
  minHeight,
  background
) => {
  Change_PropTag("body", {
    display,
    justifyContent,
    position,
    alignItems,
    minHeight,
    background,
  });
};
const propHeader = (
  position,
  top,
  left,
  width,
  padding,
  background,
  display,
  justifyContent,
  alignItems,
  zIndex
) => {
  Change_PropTag("header", {
    position,
    top,
    left,
    width,
    padding,
    background,
    display,
    justifyContent,
    alignItems,
    zIndex,
  });
};
const propLogo = (position) => {
  Change_PropTag(".logo", { position });
};
const propImg = (position, width, top, left, boderRadius) => {
  Change_PropTag("img", {
    position,
    width,
    top,
    left,
    boderRadius,
  });
};
const propAlink = (
  position,
  fontSize,
  textDecoration,
  fontWeight,
  marginLeft
) => {
  Change_PropTags(".navbar a", {
    position,
    fontSize,
    textDecoration,
    fontWeight,
    marginLeft,
  });
};
const propHoverAlinkB = (color) => {
  ChangePseudoClass_PropsTag(".navbar a", {
    color,
  });
};
const propHoverAlinkA = (color) => {
  ChangePseudoClass_PropsTag(".navbar a:hover", {
    color,
  });
};
const propNavBtnLogin = (
  position,
  width,
  height,
  boderRadius,
  outline,
  border,
  fontSize,
  fontWeight,
  cursor,
  marginLeft,
  transition
) => {
  Change_PropTag(".navbar .btnLogin", {
    position,
    width,
    height,
    boderRadius,
    outline,
    border,
    fontSize,
    fontWeight,
    cursor,
    marginLeft,
    transition,
  });
};

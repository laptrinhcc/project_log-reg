import { propAlink, propBody, propHeader, propHoverAlinkB,propHoverAlinkA, propImg, propLogo, propNavBtnLogin } from "./css.js";
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
  ChangePseudoClass_PropsTag,
  ApC_ToHead,
  attsToStrCss,
  PoppinsHref,
  loadFont,
  applyAttsToAllElm,
} from "./functions-all/fun.js";

// Hàm tạo khối input-box
const inputBoxBlock = (type, iconName, id, label, extraChild = null) =>
  C_TagFOTO(
    "div",
    { class: "input-box" },
    [
      C_TagFOTO("span", { class: "icon" }, [
        C_TagFOTO("ion-icon", { name: iconName }),
      ]),
      C_TagFOTO("input", { type, id, required: "" }),
      C_TagFOTO("label", {}, label),
      extraChild,
    ].filter(Boolean)
  );

// Hàm tạo khối rememberforgot
const rememberForgotBlock = (label, type, linkText) =>
  C_TagFOTO("div", { class: "remember-forgot" }, [
    C_TagFOTO("label", {}, [C_TagFOTO("input", { type }), label]),
    C_TagFOTO("a", { href: "#" }, linkText),
  ]);

// Hàm tạo khối login/register thông báo
const loginRegisterBlock = (pText, aText, aClass) =>
  C_TagFOTO("div", { class: "login-register" }, [
    C_TagFOTO("p", {}, [
      pText,
      C_TagFOTO("a", { href: "#", class: aClass }, aText),
    ]),
  ]);

// Hàm tạo form
const formBlock = (
  type,
  h2Id,
  h2Text,
  actionId,
  actionClass,
  buttonText,
  toggleText,
  toggleClass,
  toggleLink,
  fields
) =>
  C_TagFOTO("div", { class: `form-box ${type}` }, [
    C_TagFOTO("h2", { id: h2Id }, h2Text),
    C_TagFOTO("form", { action: "#", id: actionId }, [
      ...fields,
      type === "register"
        ? rememberForgotBlock(
            "I agree to the terms & conditions",
            "checkbox",
            ""
          )
        : rememberForgotBlock("Remember me", "checkbox", "Forgot Password"),
      C_TagFOTO("button", { type: "submit", class: actionClass }, buttonText),
      loginRegisterBlock(toggleText, toggleLink, toggleClass),
    ]),
  ]);

// Hàm tạo khối wrapper
const wrapperBlock = () =>
  C_TagFOTO("div", { class: "wrapper" }, [
    C_TagFOTO("span", { class: "icon-close" }, [
      C_TagFOTO("ion-icon", { name: "close" }),
    ]),
    formBlock(
      "login",
      "h2Login",
      "Login",
      "loginForm",
      "btn",
      "Login",
      "Don't have an account?",
      "register-link",
      "Register",
      [
        inputBoxBlock("email", "mail", "loginEmail", "Email"),
        inputBoxBlock(
          "password",
          "lock-closed",
          "loginPassword",
          "Password",
          C_TagFOTO("div", { id: "loginMessage" })
        ),
      ]
    ),
    formBlock(
      "register",
      "h2Register",
      "Register",
      "registerForm",
      "btn",
      "Register",
      "Already have an account?",
      "login-link",
      "Login",
      [
        inputBoxBlock("text", "person", "registerUsername", "Username"),
        inputBoxBlock("email", "mail", "registerEmail", "Email"),
        inputBoxBlock(
          "password",
          "lock-closed",
          "registerPassword",
          "Password",
          C_TagFOTO("div", { id: "registerMessage" })
        ),
      ]
    ),
  ]);

// Thêm khối vào body
Pp_ToBody(wrapperBlock());
Pp_ToBody(
  C_TagFOTO("header", {}, [
    C_TagFOTO("h1", { class: "logo" }, [
      C_TagFOTO("img", { src: "./Img/logo.png", width: "40" }),
    ]),
    C_TagTag1sTag2(
      "nav",
      { class: "navbar" },
      "",
      "a",
      { href: "#" },
      ["Home", "Github", "Youtube", "About Me"],
      "button",
      { class: "btnLogin" },
      "Login/Register"
    ),
  ])
);
// ****************** CSS ***************** //
// Gọi hàm loadFont để tải font và Gọi hàm
// applyAttsToAllElm áp dụng các thuộc tính:
loadFont();
applyAttsToAllElm({
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  fontFamily: `"Poppins",sans-serif`,
});
propBody("flex", "center", "relative", "center", "100vh", "rgb(0, 0, 0, 0.9)");
propHeader(
  "fixed",
  "0",
  "0",
  "100%",
  "10px 100px",
  "#162938",
  "flex",
  "space-between",
  "center",
  99
);
propLogo("relative");
propImg("absolute", "40px", "-20px", "-60px", "50%");
propAlink("relative","1.1em","none","500","40px")
propHoverAlinkB("rgb(170, 170, 170, 0.4)")
propHoverAlinkA("rgb(170, 170, 170, 0.8)");

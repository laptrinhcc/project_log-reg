const C_TagFOTO = (tag, att = {}, children = []) => {
  const elm = document.createElement(tag);
  Object.entries(att).forEach(([key, value]) => elm.setAttribute(key, value));
  (Array.isArray(children) ? children : [children]).forEach((child) =>
    elm.appendChild(
      typeof child === "string" ? document.createTextNode(child) : child
    )
  );
  return elm;
};

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

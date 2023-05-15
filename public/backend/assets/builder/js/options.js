const lang = window.document.querySelector("html").attributes.lang.value;

const myProjectID = template ? '' : project_id

const language = {
  /*------Body------*/
  body: lang == "ar" ? "جسم الصفحة" : "Body",
  fontF: lang == "ar" ? "خطوط الصفحة" : "Font family",
  fontS: lang == "ar" ? "حجم الخط" : "Font size",
  lineH: lang == "ar" ? "ارتفاع السطور" : "Line height",
  fontC: lang == "ar" ? "لون الخط" : "Font color",
  padding: lang == "ar" ? "هوامش داخلية" : "Padding",
  bgImg: lang == "ar" ? "صورة الخلفية" : "Background image",
  bgPos: lang == "ar" ? "تموضع الخلفية" : "Background Position",
  bgRep: lang == "ar" ? "تكرار الخلفية" : "Background Repeat",
  bgSiz: lang == "ar" ? "حجم الخلفية" : "Background Size",
  bgCol: lang == "ar" ? "لون الخلفية" : "Background Color",

  /*------Sections------*/
  
  sections: lang == "ar" ? "أقسام" : "Sections",
  Secmargin: lang == "ar" ? "هوامش خارجية" : "Margin",
  SecColorSeperator: lang == "ar" ? "لون الفاصل" : "Separator color",
  defaultBack: lang == "ar" ? "الخلفية الافتراضية" : "Default background",
  /*------H1, H2, H3, H4------*/
  h1: lang == "ar" ? "<bdo dir='rtl'>ترويسة 1H</bdo>" : "H1",
  h2: lang == "ar" ? "<bdo dir='rtl'>ترويسة 2H</bdo>" : "H2",
  h3: lang == "ar" ? "<bdo dir='rtl'>ترويسة 3H</bdo>" : "H3",
  h4: lang == "ar" ? "<bdo dir='rtl'>ترويسة 4H</bdo>" : "H4",
  fontW: lang == "ar" ? "سمك الخطا" : "Font weight",
  letterSpacing: lang == "ar" ? "تباعد الحروف" : "Letter spacing",
  fontStyle: lang == "ar" ? "شكل الخط" : "Font style",
  textDecoration: lang == "ar" ? "تزيين الخط" : "Text decoration",
  textTransform: lang == "ar" ? "تحويل النص" : "Text transform",
  textShadow: lang == "ar" ? "ظل النصوص" : "Text shadow",
  /*------Link------*/
  link: lang == "ar" ? "روابط" : "Link",
  linkColor: lang == "ar" ? "لون الرابط" : "Color",
  linkHover: lang == "ar" ? "لون الهوفر" : "Hover color",
  linkHoverTextDecorration:
    lang == "ar" ? "هوفر تزيين الخطا" : "Hover text decoration",
  /*------Navigation------*/
  navigation: lang == "ar" ? "القوائم" : "Navigation",
  hoverFontColor: lang == "ar" ? "هوفر لون الخط" : "Hover font color",
  decoration: lang == "ar" ? "التزيين" : "Decoration",
  hoverDecoration: lang == "ar" ? "هوفر التزيين" : "Hover decoration",
  background: lang == "ar" ? "الخلفية " : "Background",
  hoverBackground: lang == "ar" ? "هوفر الخلفية" : "Hover background",
  /*------Tabs------*/
  tabs: lang == "ar" ? "نوافذ التبويب" : "Tabs",
  activeFontcolor: lang == "ar" ? "لون الخط النشط" : "Active font color",
  borderColor: lang == "ar" ? "لون الحدود" : "Border color",
  activeBorderColor: lang == "ar" ? "لون الحدود النشط" : "Active border color",
  activeBackground: lang == "ar" ? "الخلفية النشطة" : "Active background",
  /*------Pagination------*/
  pagination: lang == "ar" ? "ترقيم الصفحات" : "Pagination",
  /*------Buttons------*/
  buttons: lang == "ar" ? "الأزرار" : "Buttons",
  borderRadius: lang == "ar" ? "الحدود المحدبة" : "Border radius",
  borderWidth: lang == "ar" ? "عرض الحدود " : "Border width",
  /*------Buttons primary, Buttons secondary------*/
  buttonsPrimary: lang == "ar" ? "الأزرار الأساسية" : "Buttons primary",
  buttonsSecondary: lang == "ar" ? "الأزرار التانوية" : "Buttons secondary",
  borderHover: lang == "ar" ? "هوفر لحدود" : "Border :hover",
  fontOutline: lang == "ar" ? "حدود الخط الخارجية" : "Font outline",
  fontOutlineHover:
    lang == "ar" ? "هوفر حدود الخط الخارجية " : "Font outline :hover",
  fontHover: lang == "ar" ? "هوفر الخط " : "Font :hover",
  /*------Forms------*/
  forms: lang == "ar" ? "نماذج الإدخال" : "Forms",
  fieldMargin: lang == "ar" ? "هوامش الحقل" : "Field margin",
  fieldBorderRadius:
    lang == "ar" ? "حدود الحقل المحدبة" : "Field border radius",
  fieldBorderWidth: lang == "ar" ? "عرض حدود الحقل" : "Field border width",
  fieldBorderColor: lang == "ar" ? "لون حدود الحقل" : "Field border color",
  fieldBackgroundColor:
    lang == "ar" ? "لون خلفية الحقل" : "Field background color",
  fieldPlaceholder: lang == "ar" ? "الكلام التلقائي داخل الحقل" : "Placeholder",
  fieldactiveElmColor:
    lang == "ar" ? "لون العنصر النشط" : "Active element color",
  /*------Icons and decor------*/
  iconAndDecor: lang == "ar" ? "أيقونات وديكور" : "Icons and decor",
  iconAndDecorDefault: lang == "ar" ? "الإعتيادي" : "Default",
  iconAndDecorPrimary: lang == "ar" ? "الأولي" : "Primary",
  iconAndDecorSecondary: lang == "ar" ? "التانوي" : "Secondary",
  /*------Gallery------*/
  gallery: lang == "ar" ? " معرض صور  " : "Gallery",
  /*------Carousel------*/
  carousel: lang == "ar" ? "سلايدر" : "Carousel",
  carouselPagination: lang == "ar" ? "ترقيم" : "Paginator",
  carouselPaginationHover:
    lang == "ar" ? "الترقيم عند الهوفر" : "Paginator :hover",
  carouselArrows: lang == "ar" ? "الأسهم" : "Paginator :hover",
  carouselArrowsHover: lang == "ar" ? "الأسهم عند هوفر" : "Paginator :hover",
  /*------Other------*/
  other: lang == "ar" ? "إعدادات اخرى" : "Other",
  otherTextPrimary: lang == "ar" ? "الخط الرئيسي" : "Text primary",
  otherTextSecondary: lang == "ar" ? "الخط التانوي" : "Text secondary",
  otherBorderx2Color:
    lang == "ar" ? "<bdo dir='rtl'>لون الحدود x2</bdo>" : "Border-x2 color",
  /*------Preloader------*/
  preloader: lang == "ar" ? "زر تحميل الصفحة" : "Preloader",
  /*----------Text Size-----------*/
  textSizeBox: lang == "ar" ? "حجم الخط" : "Text size",
  textSizeBoxSmall: lang == "ar" ? "صغير" : "Small",
  textSizeBoxLead: lang == "ar" ? "كبير" : "Lead",
  /*----------Text color-----------*/
  textColorBox: lang == "ar" ? "حجم الخط" : "Text size",
  textColorBoxPrimary: lang == "ar" ? "اولي" : "Text size",
  textColorBoxSecondary: lang == "ar" ? "تانوي" : "Text size",
  /*----------Text Effect-----------*/
  textEffect: lang == "ar" ? "تأتيرات النص" : "Text Effect",
  tEshadow: "<bdo dir='rtl'>ضل</bdo>",
  tEThinShadow: "<bdo dir='rtl'>ظل خفيف</bdo>",
  tEHardShadow: "<bdo dir='rtl'>ظل ضاهر</bdo>",
  tEPushedShadow: "<bdo dir='rtl'>ظل ملتصق</bdo>",
  tEFlatShadow: "<bdo dir='rtl'>ظل مسطح</bdo>",
  tEGlowShadow: "<bdo dir='rtl'>مشع</bdo>",
  tE3DShadow: "<bdo dir='rtl'>تلاتي الأبعاد</bdo>",
  tEIsometricShadow: "<bdo dir='rtl'>متساوي القياس</bdo>",
  tEAnaglyphicShadow: "<bdo dir='rtl'>شتت للإنتباه</bdo>",
  /*----------Section options-----------*/
  sectionOptions: "<bdo dir='rtl'>خيارات الاقسام</bdo>",
  fullHeight: "<bdo dir='rtl'>ارتفاع كامل</bdo>",
  boxed: "<bdo dir='rtl'>وضع في صندوق</bdo>",
  margin: "<bdo dir='rtl'>هامِش</bdo>",
  marginX2: "<bdo dir='rtl'>الهامش x2</bdo>",
  marginX3: "<bdo dir='rtl'>الهامش x3</bdo>",
  overall: "<bdo dir='rtl'>إجمالي  </bdo>",
  separatorScreen: "<bdo dir='rtl'>فاصل الشاشة  </bdo>",
  separatorContent: "<bdo dir='rtl'>فاصل المحتوى</bdo>",
  /*----------Button effect-----------*/
  btnEffect: "<bdo dir='rtl'>تاتيرات الأزرار</bdo>",
  be_3D: "<bdo dir='rtl'>تلاتي ابعاد</bdo>",
  be_Pill: "<bdo dir='rtl'>حبة</bdo>",
  be_Zoom: "<bdo dir='rtl'>تكبير</bdo>",
  be_Up: "<bdo dir='rtl'>اعلى</bdo>",
  be_Shadow: "<bdo dir='rtl'>ضل</bdo>",
  be_Shadow2: "<bdo dir='rtl'>ضل 2</bdo>",
  be_Hiddenicon: "<bdo dir='rtl'>ايقونة مخفية</bdo>",
  be_Blick: "<bdo dir='rtl'>بليك</bdo>",
  be_Wave: "<bdo dir='rtl'>متموج</bdo>",
  be_Glow: "<bdo dir='rtl'>مشع</bdo>",
  /*----------Button type-----------*/
  btnType: "<bdo dir='rtl'>نوع الزر</bdo>",
  prm: "<bdo dir='rtl'>اولي</bdo>",
  sec: "<bdo dir='rtl'>تانوي</bdo>",
  sus: "<bdo dir='rtl'>نجاح</bdo>",
  dng: "<bdo dir='rtl'>خطر</bdo>",
  war: "<bdo dir='rtl'>تحدير</bdo>",
  inf: "<bdo dir='rtl'>معلومة</bdo>",
  lgt: "<bdo dir='rtl'>ابيض</bdo>",
  drk: "<bdo dir='rtl'>اسود</bdo>",
  fab: "<bdo dir='rtl'>فيسبوك</bdo>",
  gog: "<bdo dir='rtl'>جوجل</bdo>",
  twt: "<bdo dir='rtl'>تويتر</bdo>",
  lked: "<bdo dir='rtl'>لانكدين</bdo>",
  lnk: "<bdo dir='rtl'>رابط</bdo>",
  /*----------Form type-----------*/
  formType: "<bdo dir='rtl'>نوع الحقل</bdo>",
  verticale: "<bdo dir='rtl'>عمودي</bdo>",
  horizontal: "<bdo dir='rtl'>أفقي</bdo>",
  /*----------Box options-----------*/
  boxOption: "<bdo dir='rtl'>خيارات الصندوق</bdo>",
  border: "<bdo dir='rtl'>الحواف</bdo>",
  borderx2: "<bdo dir='rtl'>x2 الحواف</bdo>",
  paddingx2: "<bdo dir='rtl'>x2 هوامش داخلية</bdo>",
  paddingx3: "<bdo dir='rtl'>x3 هوامش داخلية</bdo>",
  paddingx4: "<bdo dir='rtl'>x4 هوامش داخلية</bdo>",
  marginX4: "<bdo dir='rtl'>x4 هوامش خارجية</bdo>",
  rounded: "<bdo dir='rtl'>مدور</bdo>",
  circle: "<bdo dir='rtl'>دائري</bdo>",
  /*---------- Color scheme -----------*/
  colorScheme: "<bdo dir='rtl'>نظام الألوان</bdo>",
  light: "<bdo dir='rtl'>مضيئ</bdo>",
  dark: "<bdo dir='rtl'>داكن</bdo>",
  dream: "<bdo dir='rtl'>حلم</bdo>",
  apple: "<bdo dir='rtl'>ابل</bdo>",
  mono: "<bdo dir='rtl'>موحد</bdo>",
  clean: "<bdo dir='rtl'>نظيف</bdo>",
  night: "<bdo dir='rtl'>ليلي</bdo>",
  /*---------- Navbar position -----------*/
  navbarPosition: "<bdo dir='rtl'>تموضع القائمة</bdo>",
  absoluteTop: "<bdo dir='rtl'>الوضع الإعتيادي</bdo>",
  stickyTop: "<bdo dir='rtl'>وضع متبث فوق الصفحة</bdo>",
  fixedTop: "<bdo dir='rtl'>تتبيث اعلى</bdo>",
  fixedButtom: "<bdo dir='rtl'>تتبيث أسفل</bdo>",
  showOnScroll: "<bdo dir='rtl'>إضهار اتناء التحريك</bdo>",
  hideOnScroll: "<bdo dir='rtl'>إخفاء اتناء التحريك</bdo>",
  /*---------- Navbar options -----------*/
  navbarOptions: "<bdo dir='rtl'>خيارات القائمة</bdo>",
  SeparatorScreen: "<bdo dir='rtl'>فاصل الشاشة</bdo>",
  SeparatorContent: "<bdo dir='rtl'>فاصل المحتوى</bdo>",
  /*---------- SVG options -----------*/
  svgOptions: "<bdo dir='rtl'>خيارات</bdo> SVG",
  /*---------- Sub Navigation options -----------*/
  subNavOptions: "<bdo dir='rtl'>إعدادات القائمة الفرعية</bdo>",
  /*---------- galleryItemOptions -----------*/
  galleryItemOptionsTitle: "<bdo dir='rtl'>خيارات معرض الصور</bdo>",
  styleNumber: "<bdo dir='rtl'>شكل رقم </bdo>"


};
var builderOptions = {
  sectionElementList: [
    {
      domIdentif: [
        "section:not(.modal-alert):not(.section-carousel)",
        "footer",
        "header:not(.section-carousel)",
      ],
      controlsElements: [
        "AddElementDom",
        "ID",
        "UpSection",
        "DownSection",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Section settings",
        elements: [
          "SectionSkin",
          "SectionVisibility",
          "SectionMediaTextAlign",
          "SectionPaddingSettings",
          "SectionCBS(sectionOptions)",
        ],
      },
    },
    {
      domIdentif: ["div.modal-alert"],
      controlsElements: [
        "AddElementDom",
        "ID",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Section settings",
        elements: [
          "SectionSkin",
          "SectionVisibility",
          "SectionCountDown",
          "SectionMediaTextAlign",
          "SectionPaddingSettings",
          "SectionCBSCustomPosition(modalAlertOptions)",
          "SectionCBSCustomPosition(modalAlertAnimation)",
        ],
      },
    },
    {
      domIdentif: ["div.modal-panel"],
      controlsElements: [
        "AddElementDom",
        "ID",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Section settings",
        elements: [
          "SectionSkin",
          "SectionVisibility",
          "SectionMediaTextAlign",
          "SectionPaddingSettings",
          "SectionCBS(modalPanelOptions)",
          "SectionCBS(modalPanelAnimation)",
        ],
      },
    },
    {
      domIdentif: ["section.section-carousel", "header.section-carousel"],
      controlsElements: [
        "AddElementDom",
        "ID",
        "UpSection",
        "DownSection",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Section settings",
        elements: [
          "SectionSkin",
          "SectionVisibility",
          "SectionMediaTextAlign",
          "SectionPaddingSettings",
          "SectionCBS(sectionOptions)",
          "SectionCBS(carouselDots)",
          "SectionCBS(carouselNavigation)",
        ],
      },
    },
    {
      domIdentif: ["nav.navbar"],
      controlsElements: [
        "AddElementDom",
        "ID",
        "UpSection",
        "DownSection",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Navigation settings",
        elements: [
          "SectionSkin",
          "SectionVisibility",
          "SectionCBSCustomPosition(navBarPosition)",
          "SectionCBSCustomPosition(navBarOptions)",
        ],
      },
    },
    {
      domIdentif: [".modal .modal-dialog"],
      controlsElements: [
        "AddElementDom",
        "ID",
        "BgSection",
        "SettingsSection",
        "CodeEditor",
        "Copy",
        "Del",
      ],
      positionControl: "inside-top",
      settingsSection: {
        title: "Modal settings",
        elements: [
          "SectionSkin",
          "SectionMediaTextAlign",
          "SectionCountDown",
          "SectionCBS(modalPopupOptions)",
          "SectionCBS(modalPopupAnimation)",
        ],
      },
    },
  ],
  globalStyle: {
    mediaResolution: {
      mobile: "max-width: 576px",
      tablet: "max-width: 1279px",
      desktop: "min-width: 1280px",
    },
    sections: ["section", "footer", "header", "nav", ".modal"],
    defaultActiveMedia: "default",
    defaultActiveMode: "light",
    defaultPropertiesForTags: [
      {
        name: language.body,
        tag: " ",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "'OpenSans'",
                },
                dark: {
                  value: "'OpenSans'",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "14px",
                },
                dark: {
                  value: "14px",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "1.5",
                },
                dark: {
                  value: "1.5",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#555",
                },
                dark: {
                  value: "#ffffff",
                },
              },
            },
          },
        ],
      },
      {
        name: language.body,
        tag: "body",
        elements: [
          {
            name: "Padding",
            title: language.padding,
            property: "padding",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BackgroundImage",
            title: language.bgImg,
            property: "background-image",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BackgroundPosition",
            title: language.bgPos,
            property: "background-position",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BackgroundRepeat",
            title: language.bgRep,
            property: "background-repeat",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BackgroundSize",
            title: language.bgSiz,
            property: "background-size",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.bgCol,
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#fff",
                },
                dark: {
                  value: "#232122",
                },
              },
            },
          },
        ],
      },
      {
        name: language.sections,
        tag: ["section", "footer", "header"],
        elements: [
          {
            name: "Margin",
            title: language.Secmargin,
            property: "margin",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.sections,
        tag: [".section-line", ".section-line-container::after"],
        elements: [
          {
            name: "BorderColor",
            title: language.SecColorSeperator,
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "#888888",
                },
              },
            },
          },
        ],
      },
      {
        name: language.sections,
        tag: [".bg-wrap", ".bg-default"],
        elements: [
          {
            name: "BackgroundColor",
            title: language.defaultBack,
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#fff",
                },
                dark: {
                  value: "#232122",
                },
              },
            },
          },
        ],
      },
      {
        name: language.h1,
        tag: "h1",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "'Montserrat'",
                },
                dark: {
                  value: "'Montserrat'",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "100px",
                },
                dark: {
                  value: "100px",
                },
              },
              tablet: {
                light: {
                  value: "70px",
                },
                dark: {
                  value: "70px",
                },
              },
              mobile: {
                light: {
                  value: "40px",
                },
                dark: {
                  value: "40px",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "200",
                },
                dark: {
                  value: "200",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontStyle",
            title: language.fontStyle,
            property: "font-style",
            media: {
              default: {
                light: {
                  value: "normal",
                },
                dark: {
                  value: "normal",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.textDecoration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextTransform",
            title: language.textTransform,
            property: "text-transform",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#222",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextShadow",
            title: language.textShadow,
            property: "text-shadow",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.h2,
        tag: "h2",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "'Montserrat'",
                },
                dark: {
                  value: "'Montserrat'",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "50px",
                },
                dark: {
                  value: "50px",
                },
              },
              tablet: {
                light: {
                  value: "40px",
                },
                dark: {
                  value: "40px",
                },
              },
              mobile: {
                light: {
                  value: "30px",
                },
                dark: {
                  value: "30px",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "300",
                },
                dark: {
                  value: "300",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontStyle",
            title: language.fontStyle,
            property: "font-style",
            media: {
              default: {
                light: {
                  value: "normal",
                },
                dark: {
                  value: "normal",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.textDecoration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextTransform",
            title: language.textTransform,
            property: "text-transform",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#222",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextShadow",
            title: language.textShadow,
            property: "text-shadow",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.h3,
        tag: "h3",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "'Montserrat'",
                },
                dark: {
                  value: "'Montserrat'",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "35px",
                },
                dark: {
                  value: "35px",
                },
              },
              mobile: {
                light: {
                  value: "25px",
                },
                dark: {
                  value: "25px",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "300",
                },
                dark: {
                  value: "300",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontStyle",
            title: language.fontStyle,
            property: "font-style",
            media: {
              default: {
                light: {
                  value: "normal",
                },
                dark: {
                  value: "normal",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.textDecoration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextTransform",
            title: language.textTransform,
            property: "text-transform",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextShadow",
            title: language.textShadow,
            property: "text-shadow",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.h4,
        tag: "h4",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            order: "1",
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "'Montserrat'",
                },
                dark: {
                  value: "'Montserrat'",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "18px",
                },
                dark: {
                  value: "18px",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "400",
                },
                dark: {
                  value: "400",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontStyle",
            title: language.fontS,
            property: "font-style",
            media: {
              default: {
                light: {
                  value: "normal",
                },
                dark: {
                  value: "normal",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.textDecoration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextTransform",
            title: language.textTransform,
            property: "text-transform",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#555",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextShadow",
            title: language.textShadow,
            property: "text-shadow",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.link,
        tag: "a:not(.btn)",
        elements: [
          {
            name: "FontColor",
            title: language.linkColor,
            property: "color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.textDecoration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.link,
        tag: "a:not(.btn):hover",
        elements: [
          {
            name: "FontColor",
            title: language.linkHover,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#000000",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.linkHoverTextDecorration,
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "underline",
                },
                dark: {
                  value: "underline",
                },
              },
            },
          },
        ],
      },
      {
        name: language.navigation,
        tag: ".navbar-nav a",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            order: "1",
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            order: "2",
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            order: "3",
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LineHeight",
            title: language.lineH,
            order: "4",
            property: "line-height",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            order: "5",
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontStyle",
            title: language.fontStyle,
            order: "6",
            property: "font-style",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontColor",
            title: language.fontC,
            order: "7",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#777",
                },
                dark: {
                  value: "#aaa",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.decoration,
            order: "9",
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "none",
                },
                dark: {
                  value: "none",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "11",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "rgba(255,255,255,0)",
                },
                dark: {
                  value: "rgba(255,255,255,0)",
                },
              },
            },
          },
        ],
      },
      {
        name: language.navigation,
        tag: [
          ".navbar-nav a.nav-link:hover",
          ".navbar-nav .nav-item:hover > a.nav-link",
          ".navbar-nav a.nav-link.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.hoverFontColor,
            order: "8",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#222",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "TextDecoration",
            title: language.hoverDecoration,
            order: "10",
            property: "text-decoration",
            media: {
              default: {
                light: {
                  value: "none",
                },
                dark: {
                  value: "none",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.hoverBackground,
            order: "12",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "rgba(255,255,255,0)",
                },
                dark: {
                  value: "rgba(255,255,255,0)",
                },
              },
            },
          },
        ],
      },
      {
        name: language.tabs,
        tag: ".nav-tabs a.nav-link",
        elements: [
          {
            name: "FontColor",
            title: language.fontC,
            order: "1",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#A2AAB1",
                },
                dark: {
                  value: "rgba(255,255,255,0.2)",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "5",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.tabs,
        tag: ".nav-tabs",
        elements: [
          {
            name: "BorderColor",
            title: language.borderColor,
            order: "3",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "rgba(255,255,255,0.2)",
                },
              },
            },
          },
        ],
      },
      {
        name: language.tabs,
        tag: [".nav-tabs a.nav-link:hover", ".nav-tabs a.nav-link.active"],
        elements: [
          {
            name: "FontColor",
            title: language.activeFontcolor,
            order: "2",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BorderColor",
            title: language.activeBorderColor,
            order: "4",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.activeBackground,
            order: "6",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.pagination,
        tag: ".pagination .page-link",
        elements: [
          {
            name: "FontColor",
            title: language.fontC,
            order: "1",
            property: "color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BorderColor",
            title: language.borderColor,
            order: "3",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "5",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.pagination,
        tag: [".pagination .page-link:hover", ".pagination .page-link.active"],
        elements: [
          {
            name: "FontColor",
            title: language.activeFontcolor,
            order: "2",
            property: "color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BorderColor",
            title: language.activeBorderColor,
            order: "4",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.activeBackground,
            order: "6",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttons,
        tag: ".btn",
        elements: [
          {
            name: "FontFamily",
            title: language.fontF,
            order: "1",
            property: "font-family",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontSize",
            title: language.fontS,
            property: "font-size",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "FontWeight",
            title: language.fontW,
            property: "font-weight",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "LetterSpacing",
            title: language.letterSpacing,
            property: "letter-spacing",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "TextTransform",
            title: language.textTransform,
            property: "text-transform",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
          {
            name: "BorderRadius",
            title: language.borderRadius,
            property: "border-radius",
            media: {
              default: {
                light: {
                  value: "0px 0px 0px 0px",
                },
                dark: {
                  value: "0px 0px 0px 0px",
                },
              },
            },
          },
          {
            name: "BorderWidth",
            title: language.borderWidth,
            property: "border-width",
            media: {
              default: {
                light: {
                  value: "2px 2px 2px 2px",
                },
                dark: {
                  value: "2px 2px 2px 2px",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: [".btn-primary", ".badge-primary"],
        elements: [
          {
            name: "FontColor",
            title: language.fontC,
            order: "1",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#FFF",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "7",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#AF9F8C",
                },
                dark: {
                  value: "#AF9F8C",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: [
          ".btn-primary:hover",
          ".btn-primary:active",
          ".btn-primary.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.fontHover,
            order: "2",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#FFF",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.hoverBackground,
            order: "8",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#998B7A",
                },
                dark: {
                  value: "#998B7A",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: ".btn-outline-primary",
        elements: [
          {
            name: "FontColor",
            title: language.fontOutline,
            order: "3",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#AF9F8C",
                },
                dark: {
                  value: "#AF9F8C",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: [
          ".btn-outline-primary:hover",
          ".btn-outline-primary:active",
          ".btn-outline-primary.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.fontOutlineHover,
            order: "4",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#998B7A",
                },
                dark: {
                  value: "#998B7A",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: [".btn-primary", ".btn-outline-primary"],
        elements: [
          {
            name: "BorderColor",
            title: language.borderColor,
            order: "5",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#AF9F8C",
                },
                dark: {
                  value: "#AF9F8C",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsPrimary,
        tag: [
          ".btn-primary:hover",
          ".btn-primary:active",
          ".btn-primary.active",
          ".btn-outline-primary:hover",
          ".btn-outline-primary:active",
          ".btn-outline-primary.active",
        ],
        elements: [
          {
            name: "BorderColor",
            title: language.borderHover,
            order: "6",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#998B7A",
                },
                dark: {
                  value: "#998B7A",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: [".btn-secondary", ".badge-secondary"],
        elements: [
          {
            name: "FontColor",
            title: language.fontC,
            order: "1",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#FFF",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "7",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#A2AAB1",
                },
                dark: {
                  value: "#444",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: [
          ".btn-secondary:hover",
          ".btn-secondary:active",
          ".btn-secondary.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.fontHover,
            order: "2",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#FFF",
                },
                dark: {
                  value: "#FFF",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.hoverBackground,
            order: "8",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#91989F",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: ".btn-outline-secondary",
        elements: [
          {
            name: "FontColor",
            title: language.fontOutline,
            order: "3",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#A2AAB1",
                },
                dark: {
                  value: "#888",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: [
          ".btn-outline-secondary:hover",
          ".btn-outline-secondary:active",
          ".btn-outline-secondary.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.fontOutlineHover,
            order: "4",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#91989F",
                },
                dark: {
                  value: "#888",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: [".btn-secondary", ".btn-outline-secondary"],
        elements: [
          {
            name: "BorderColor",
            title: language.borderColor,
            order: "5",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#A2AAB1",
                },
                dark: {
                  value: "#444",
                },
              },
            },
          },
        ],
      },
      {
        name: language.buttonsSecondary,
        tag: [
          ".btn-secondary:hover",
          ".btn-secondary:active",
          ".btn-secondary.active",
          ".btn-outline-secondary:hover",
          ".btn-outline-secondary:active",
          ".btn-outline-secondary.active",
        ],
        elements: [
          {
            name: "BorderColor",
            title: language.borderHover,
            order: "6",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#91989F",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
        ],
      },
      {
        name: language.forms,
        tag: ".form-group",
        elements: [
          {
            name: "Margin",
            title: language.fieldMargin,
            order: "1",
            property: "margin",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.forms,
        tag: [".form-control", ".form-inline>.btn-link"],
        elements: [
          {
            name: "BorderRadius",
            title: language.fieldBorderRadius,
            order: "2",
            property: "border-radius",
            media: {
              default: {
                light: {
                  value: "0px 0px 0px 0px",
                },
                dark: {
                  value: "0px 0px 0px 0px",
                },
              },
            },
          },
          {
            name: "BorderWidth",
            title: language.fieldBorderWidth,
            order: "3",
            property: "border-width",
            media: {
              default: {
                light: {
                  value: "0px 0px 1px 0px",
                },
                dark: {
                  value: "0px 0px 1px 0px",
                },
              },
            },
          },
          {
            name: "BorderColor",
            title: language.fieldBorderColor,
            order: "4",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "rgba(0,0,0,0.2)",
                },
                dark: {
                  value: "rgba(255,255,255,0.2)",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.fieldBackgroundColor,
            order: "6",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "",
                },
                dark: {
                  value: "",
                },
              },
            },
          },
        ],
      },
      {
        name: language.forms,
        tag: [".form-control::placeholder", ".form-control .placeholder"],
        elements: [
          {
            name: "FontColor",
            title: language.fieldPlaceholder,
            order: "5",
            property: "color",
            media: {
              default: {
                light: {
                  value: "#aaa",
                },
                dark: {
                  value: "#aaa",
                },
              },
            },
          },
        ],
      },
      {
        name: language.forms,
        tag: [
          "input[type=checkbox]+.lbl::after",
          "input[type=radio]+.lbl::after",
        ],
        elements: [
          {
            name: "BackgroundColor",
            title: language.fieldactiveElmColor,
            order: "7",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#A48F77",
                },
                dark: {
                  value: "#A48F77",
                },
              },
            },
          },
        ],
      },
      {
        name: language.iconAndDecor,
        tag: "svg.svg-default",
        elements: [
          {
            name: "FontColor",
            title: language.iconAndDecorDefault,
            property: "fill",
            media: {
              default: {
                light: {
                  value: "#555",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
        ],
      },
      {
        name: language.iconAndDecor,
        tag: "svg.svg-primary",
        elements: [
          {
            name: "FontColor",
            title: language.iconAndDecorPrimary,
            property: "fill",
            media: {
              default: {
                light: {
                  value: "#c3b6a5",
                },
                dark: {
                  value: "#c3b6a5",
                },
              },
            },
          },
        ],
      },
      {
        name: language.iconAndDecor,
        tag: "svg.svg-secondary",
        elements: [
          {
            name: "FontColor",
            title: language.iconAndDecorSecondary,
            property: "fill",
            media: {
              default: {
                light: {
                  value: "#bbc3cc",
                },
                dark: {
                  value: "#555",
                },
              },
            },
          },
        ],
      },
      {
        name: language.gallery,
        tag: [
          ".gallery-item:not(.masonry-item)",
          ".masonry-item.gallery-item .wrapper",
        ],
        elements: [
          {
            name: "BackgroundColor",
            title: language.background,
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#ffffff",
                },
                dark: {
                  value: "#232122",
                },
              },
            },
          },
        ],
      },
      {
        name: language.carousel,
        tag: [".owl-prev", ".owl-next"],
        elements: [
          {
            name: "BorderColor",
            title: language.carouselArrows,
            order: "3",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.background,
            order: "5",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#fff",
                },
                dark: {
                  value: "#444",
                },
              },
            },
          },
        ],
      },
      {
        name: language.carousel,
        tag: [".owl-prev:hover", ".owl-next:hover"],
        elements: [
          {
            name: "BorderColor",
            title: language.carouselArrowsHover,
            order: "4",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.hoverBackground,
            order: "6",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#ded8d0",
                },
                dark: {
                  value: "#af9f8c",
                },
              },
            },
          },
        ],
      },
      {
        name: language.carousel,
        tag: ".owl-dot>span",
        elements: [
          {
            name: "BorderColor",
            title: language.carouselPagination,
            order: "1",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "#444",
                },
              },
            },
          },
        ],
      },
      {
        name: language.carousel,
        tag: [".owl-dot.active>span", ".owl-dot:hover>span"],
        elements: [
          {
            name: "BorderColor",
            title: language.carouselPaginationHover,
            order: "2",
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#444",
                },
                dark: {
                  value: "#fff",
                },
              },
            },
          },
        ],
      },
      {
        name: language.other,
        tag: ["[class*=border]", "hr", ".separate-list li", ".media"],
        elements: [
          {
            name: "BorderColor",
            title: language.borderColor,
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "rgba(255,255,255,0.2)",
                },
              },
            },
          },
        ],
      },
      {
        name: language.preloader,
        tag: [
          "#preloader>div",
          "#preloader>div>*",
          "#preloader>div::before",
          "#preloader>div::after",
        ],
        elements: [
          {
            name: "BorderColor",
            title: language.borderColor,
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#DDD",
                },
                dark: {
                  value: "#888",
                },
              },
            },
          },
          {
            name: "BackgroundColor",
            title: language.bgCol,
            order: "6",
            property: "background-color",
            media: {
              default: {
                light: {
                  value: "#DDD",
                },
                dark: {
                  value: "#888",
                },
              },
            },
          },
        ],
      },
      {
        name: language.other,
        tag: ".border-x2",
        elements: [
          {
            name: "BorderColor",
            title: language.otherBorderx2Color,
            property: "border-color",
            media: {
              default: {
                light: {
                  value: "#D1D7DD",
                },
                dark: {
                  value: "rgba(255,255,255,0.2)",
                },
              },
            },
          },
        ],
      },
      {
        name: language.other,
        tag: ".text-primary",
        elements: [
          {
            name: "FontColor",
            title: language.otherTextPrimary,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#AF9F8C",
                },
                dark: {
                  value: "#AF9F8C",
                },
              },
            },
          },
        ],
      },
      {
        name: language.other,
        tag: [
          ".text-secondary",
          ".breadcrumb-item + .breadcrumb-item::before",
          ".breadcrumb-item.active",
        ],
        elements: [
          {
            name: "FontColor",
            title: language.otherTextSecondary,
            property: "color",
            media: {
              default: {
                light: {
                  value: "#A2AAB1",
                },
                dark: {
                  value: "rgba(255,255,255,0.5)",
                },
              },
            },
          },
        ],
      },
    ],
  },
  editElementsList: [
    {
      group: "button",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".btn:not(button)"],
      positionControl: "outside-top",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "DragElement",
        "StaticLink",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "ElementCBS(buttonType)",
        "MarginSettings",
        "ElementButtonSize",
        "ElementButtonIcon",
        "ElementButtonWidth",
        "ElementCBS(buttonOptions)",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderColorES",
        "BorderStyleES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
      ],
    },
    {
      group: "form-button",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["form [type=submit]"],
      positionControl: "outside-top",
      controlsElements: ["ElementSettings", "ElementStyle"],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
      elementSettings: [
        "ElementSkin",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(buttonType)",
        "ElementButtonSize",
        "ElementButtonIcon",
        "ElementButtonWidth",
        "ElementCBS(buttonOptions)",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderColorES",
        "BorderStyleES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
      ],
    },
    {
      group: "images",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["*:not(.spr-gallery) img:not(.item-img):not([alt=button])"],
      positionControl: "outside-top-right",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "DragElement",
        "ImageSettings",
        "Link",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementParallax",
        // "ElementCBS(styleBoxOptions)",
      ],
      elementStyle: [
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "PositionES",
        "ZIndexES",
        "CoordinatesES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
    },
    {
      group: "images-in-gallery",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".spr-gallery > img.item-img"],
      positionControl: "inside-top",
      controlsElements: [
        "ImageSettings",
        "Link",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementParallax",
        // ElementCBS(styleBoxOptions),
      ],
      elementStyle: [
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "PositionES",
        "ZIndexES",
        "CoordinatesES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
    },
    {
      group: "svg",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["svg:not(.item-img):not(.icon):not(.circular-chart)"],
      positionControl: "inside-top",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "ImageSettings",
        "Link",
        "ElementSettings",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementParallax",
        "ElementCBS(colorSvgOptions)",
      ],
    },
    {
      group: "svg",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["svg.circular-chart"],
      positionControl: "inside-top",
      controlsElements: ["ElementStyle", "DelElement"],
      elementStyle: ["StrokeColorES"],
    },
    {
      group: "icons",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["svg.icon"],
      positionControl: "inside-top",
      controlsElements: [
        "ImageSettings",
        "Link",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(colorSvgOptions)",
        // ElementCBS(styleBoxOptions),
      ],
      elementStyle: [
        "FillColorES",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderColorES",
        "BorderStyleES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
      ],
    },
    {
      group: "hr",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["hr"],
      positionControl: "inside-top",
      controlsElements: [
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: ["ElementSkin", "Visibility", "MarginSettings"],
      elementStyle: [
        "BorderWidthES",
        "BorderColorES",
        "BorderStyleES",
        "SizeES",
      ],
    },
    {
      group: "countdown",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".countdown"],
      positionControl: "outside-top",
      controlsElements: [
        "SettingsCountdownElement",
        "AOSSettings",
        "ElementSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "iframe",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".video-iframe"],
      positionControl: "outside-top",
      controlsElements: [
        "VideoLink(iframe)",
        "ElementSettings",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "contactform",
      mode: "edit-elements",
      btnContlType: "nowrap",
      editType: "-form",
      domIdentif: ["form.contact_form"],
      positionControl: "outside-top",
      controlsElements: [
        "FormSettings",
        "ConstructorForm",
        "ElementSettings",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(FormOptions)",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "text",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["p", "small"],
      positionControl: "outside-top",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "DragElement",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
        "TextLink",
        "TextAlignLeft",
        "TextAlignCenter",
        "TextAlignRight",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "ElementCBS(styleTextOptions)",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "PositionES",
        "ZIndexES",
        "CoordinatesES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
      ],
    },
    {
      group: "list",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["ul:not(.navbar-nav):not(.nav-tabs):not(.sub-menu)"],
      positionControl: "outside-top",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "DragElement",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementStyle: [
        "FontColorES",
        "FontFamilyES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextShadowES",
        "TextTransformES",
        "ElementCBS(styleTextOptions)",
        "MarginES",
        "PaddingES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        
      ],
    },
    {
      group: "list-item",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["ul:not(.navbar-nav):not(.nav-tabs)>li", "ol>li"],
      positionControl: "outside-top",
      controlsElements: ["DragElement", "CopyElement", "DelElement"],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
        "TextLink",
        "TextAlignLeft",
        "TextAlignCenter",
        "TextAlignRight",
      ],
    },
    {
      group: "navbar-list-item",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["ul.navbar-nav>li"],
      positionControl: "outside-top",
      controlsElements: [
        "StaticLink(a)",
        "ElementSettings(a)",
        "CopyElement",
        "DelElement",
      ],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
      elementSettings: ["Visibility", "ElementButtonIcon"],
    },
    {
      group: "navtab-list-item",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["ul.nav-tabs>li"],
      positionControl: "outside-top",
      controlsElements: ["CopyElement", "DelElement"],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
    },
    {
      group: "accordion-header",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".accordion-header"],
      positionControl: "outside-top",
      controlsElements: ["ElementSettings", "ElementStyle"],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "ElementMediaTextAlign",
        "ElementButtonIcon",
      ],
    },
    {
      group: "masonry-filter-button",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".masonry-filter .btn-group button"],
      positionControl: "outside-top",
      controlsElements: [
        "DragElement",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
      ],
      elementSettings: [
        "ElementSkin",
        "ElementMediaTextAlign",
        "ElementCBS(buttonType)",
        "MarginSettings",
        "ElementButtonSize",
        "ElementButtonIcon",
        "ElementButtonWidth",
        "ElementCBS(buttonOptions)",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
      ],
    },
    {
      group: "h",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["h1", "h2", "h3", "h4"],
      positionControl: "outside-top",
      context: "row",
      dragItems: "p, h1, h2, h3, h4, .btn, ul, img, svg",
      controlsElements: [
        "DragElement",
        "ElementH",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      typography: [
        "TextBold",
        "TextItalic",
        "TextUpper",
        "TextUnderline",
        "TextStrikethrough",
        "TextMarker",
        "TextRtl",
        "TextLink",
        "TextAlignLeft",
        "TextAlignCenter",
        "TextAlignRight",
      ],
      elementStyle: [
        "FontFamilyES",
        "FontColorES",
        "FontSizeES",
        "FontStyleES",
        "FontWeightES",
        "LetterSpacingES",
        "LineHeightES",
        "TextDecorationES",
        "TextTransformES",
        "TextShadowES",
        "ElementCBS(styleTextOptions)",
        "MarginES",
        "PaddingES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        
      ],
    },
    {
      group: "element-copy-del",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".content-box"],
      positionControl: "outside-top",
      context: "row",
      dragItems: ".content-box",
      controlsElements: [
        "DragElement",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "PositionES",
        "CoordinatesES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "gallery-item-element",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: ["*:not(.masonry-item) > .gallery-item:not(.masonry-item)"],
      positionControl: "outside-top",
      controlsElements: [
        "ImageSettings(img, svg)",
        "Link(img, svg)",
        "ElementSettings(.gallery-item)",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(galleryItemOptions)",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "gallery-masonry-item-element",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".masonry-item"],
      positionControl: "outside-top",
      controlsElements: [
        "ImageSettings(img, svg)",
        "Link(img, svg)",
        "ElementSettings",
        "ElementStyle",
        "AOSSettings",
        "CopyElement",
        "DelElement",
      ],
      elementStyle: [
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundColorES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "BorderWidthES",
        "BorderStyleES",
        "BorderColorES",
        "BorderRadiusES",
        "BoxShadowES",
        "MarginES",
        "PaddingES",
        "SizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(galleryItemOptions)",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "filter buttons",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".masonry-filter .controls"],
      positionControl: "inside-top",
      controlsElements: [
        "ElementSettings",
        "ElementStyle",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaJustifyAlign",
        "PaddingSettings",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
      ],
    },
    {
      group: "element-half-bg",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".bg-box"],
      positionControl: "inside-top",
      controlsElements: [
        "AOSSettings",
        "ElementSettings",
        "ElementStyle",
        "DelElement",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        // ElementCBS(styleBoxOptions),
      ],
    },
    {
      group: "megamenu-bg",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".sub-menu", ".mega-menu-container", ".offcanvas"],
      positionControl: "inside-top",
      controlsElements: ["ElementSettings", "ElementStyle", "DelElement"],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "ElementCBS(styleSubNavOptions)",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
      ],
    },
    {
      group: "slider-bg",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".carousel-single .item"],
      positionControl: "inside-top",
      controlsElements: [
        "ElementSettings",
        "ElementStyle",
        "CopyElement",
        "DelElement",
      ],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "PaddingSettings",
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
      ],
    },
    {
      group: "element-tabs",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".tab-content"],
      positionControl: "outside-top",
      controlsElements: ["ElementSettings", "ElementStyle"],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        // ElementCBS(styleBoxOptions),
      ],
      elementStyle: [
        "BackgroundColorES",
        "BackgroundImageES",
        "BackgroundPositionES",
        "BackgroundRepeatES",
        "BackgroundSizeES",
        "MarginES",
        "PaddingES",
      ],
    },
    {
      group: "element-del-settings",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".form-container", ".spr-settings-del"],
      positionControl: "outside-top",
      controlsElements: ["ElementSettings", "DelElement"],
      elementSettings: [
        "ElementSkin",
        "Visibility",
        "ElementMediaTextAlign",
        "MarginSettings",
        "ElementCBS(styleTextOptions)",
      ],
    },
    {
      group: "element-del",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".share-list li", ".spr-option-del"],
      positionControl: "outside-top",
      controlsElements: ["DelElement"],
    },
    {
      group: "linkItem",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".social-list li"],
      positionControl: "outside-top",
      controlsElements: ["Link(a)", "CopyElement", "DelElement"],
    },
    {
      group: "map",
      mode: "edit-elements",
      btnContlType: "nowrap",
      domIdentif: [".g-map"],
      positionControl: "inside-top",
      controlsElements: ["GMapSettings", "DelElement"],
    },
  ],
  customControlElements: {
    navBarPosition: {
      title: language.navbarPosition,
      buttons: [
        {
          title: language.stickyTop,
          innerHTML:
            '<img alt="Sticky top" src="images/builder-thumbs/sticky.png"/>',
          value: "sticky-top",
        },
        {
          title: language.absoluteTop,
          innerHTML:
            '<img alt="Absolute top" src="images/builder-thumbs/absolute-top.png"/>',
          value: "absolute-top",
        },
        {
          title: language.fixedTop,
          innerHTML:
            '<img alt="Fixed top" src="images/builder-thumbs/fixed-top.png"/>',
          value: "fixed-top",
        },
        {
          title: language.fixedButtom,
          innerHTML:
            '<img alt="Fixed bottom" src="images/builder-thumbs/fixed-bottom.png"/>',
          value: "fixed-bottom",
        },
        {
          title: language.showOnScroll,
          innerHTML:
            '<img alt="show-on-scroll" src="images/builder-thumbs/hide-on-scroll.png"/>',
          value: "show-on-scroll",
        },
        {
          title: language.hideOnScroll,
          innerHTML:
            '<img alt="show-on-scroll" src="images/builder-thumbs/hide-on-scroll.png"/>',
          value: "hide-on-scroll",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    navBarOptions: {
      title: language.navbarOptions,
      buttons: [
        {
          title: language.boxed,
          innerHTML: '<img alt="Boxed" src="images/builder-thumbs/boxed.png"/>',
          value: "boxed",
        },
        {
          title: language.be_Shadow,
          innerHTML:
            '<img alt="Shadow" src="images/builder-thumbs/shadow.png"/>',
          value: "shadow",
        },
        {
          title: language.margin,
          innerHTML:
            '<img alt="Margin" src="images/builder-thumbs/margin.png"/>',
          value: "margin",
        },
        {
          title: language.marginX2,
          innerHTML:
            '<img alt="Margin x2" src="images/builder-thumbs/margin.png"/>',
          value: "margin-x2",
        },
        {
          title: language.padding,
          innerHTML:
            '<img alt="Padding" src="images/builder-thumbs/padding.png"/>',
          value: "padding",
        },
        {
          title: language.paddingx2,
          innerHTML:
            '<img alt="Padding x2" src="images/builder-thumbs/padding.png"/>',
          value: "padding-x2",
        },
        {
          title: language.separatorScreen,
          innerHTML:
            '<img alt="Border bottom" src="images/builder-thumbs/border-bottom.png"/>',
          value: "border-bottom",
        },
        {
          title: language.separatorContent,
          innerHTML:
            '<img alt="Border bottom" src="images/builder-thumbs/border-bottom-container.png"/>',
          value: "border-bottom-container",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
    sectionOptions: {
      title: language.sectionOptions,
      buttons: [
        {
          title: language.fullHeight,
          innerHTML:
            '<img alt="100% height" src="images/builder-thumbs/full-height.png"/>',
          value: "full-height",
        },
        {
          title: language.boxed,
          innerHTML: '<img alt="Boxed" src="images/builder-thumbs/boxed.png"/>',
          value: "boxed",
        },
        {
          title: language.margin,
          innerHTML:
            '<img alt="Margin" src="images/builder-thumbs/margin.png"/>',
          value: "margin",
        },
        {
          title: language.marginX2,
          innerHTML:
            '<img alt="Margin x2" src="images/builder-thumbs/margin.png"/>',
          value: "margin-x2",
        },
        {
          title: language.marginX3,
          innerHTML:
            '<img alt="Margin x2" src="images/builder-thumbs/margin.png"/>',
          value: "margin-x3",
        },
        {
          title: language.overall,
          innerHTML:
            '<img alt="Overall" src="images/builder-thumbs/overall.png"/>',
          value: "overall",
        },
        {
          title: language.separatorScreen,
          innerHTML:
            '<img alt="Border bottom" src="images/builder-thumbs/border-bottom.png"/>',
          value: "section-line",
        },
        {
          title: language.separatorContent,
          innerHTML:
            '<img alt="Border bottom" src="images/builder-thumbs/border-bottom-container.png"/>',
          value: "section-line-container",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
    modalAlertOptions: {
      title: "Alert position",
      buttons: [
        {
          title: "Fixed top",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/fixed-top.png"/>',
          value: "fixed-top",
        },
        {
          title: "Fixed bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/fixed-bottom.png"/>',
          value: "fixed-bottom",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    modalAlertAnimation: {
      title: "Alert animation",
      buttons: [
        {
          title: "Slide",
          innerHTML: '<img alt="Slide" src="images/builder-thumbs/slide.png"/>',
          value: "slide",
        },
        {
          title: "Fade",
          innerHTML: '<img alt="Fade" src="images/builder-thumbs/fade.png"/>',
          value: "fade",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    modalPanelOptions: {
      title: "Panel position",
      buttons: [
        {
          title: "Fixed left",
          innerHTML:
            '<img alt="Fixed left" src="images/builder-thumbs/fixed-left.png"/>',
          value: "fixed-left",
        },
        {
          title: "Fixed center",
          innerHTML:
            '<img alt="Fixed center" src="images/builder-thumbs/fixed-center.png"/>',
          value: "fixed-center",
        },
        {
          title: "Fixed right",
          innerHTML:
            '<img alt="Fixed right" src="images/builder-thumbs/fixed-right.png"/>',
          value: "fixed-right",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    modalPanelAnimation: {
      title: "Panel animation",
      buttons: [
        {
          title: "Slide",
          innerHTML: '<img alt="Slide" src="images/builder-thumbs/slide.png"/>',
          value: "slide",
        },
        {
          title: "Fade",
          innerHTML: '<img alt="Fade" src="images/builder-thumbs/fade.png"/>',
          value: "fade",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    modalPopupOptions: {
      title: "Popup options",
      buttons: [
        {
          title: "Shadow",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/shadow.png" />',
          value: "shadow",
        },
        {
          title: "Rounded",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/rounded.png" />',
          value: "rounded",
        },
        {
          title: "Border",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/border.png"/>',
          value: "border",
        },
        {
          title: "Border x2",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/border-x2.png"/>',
          value: "border-x2",
        },
        {
          title: "Padding",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/padding.png" />',
          value: "padding",
        },
        {
          title: "Padding x2",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/padding.png" />',
          value: "padding-x2",
        },
        {
          title: "Padding x3",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/padding.png" />',
          value: "padding-x3padding",
        },
        {
          title: "Padding x4",
          innerHTML:
            '<img alt="Full height" src="images/builder-thumbs/padding.png" />',
          value: "padding-x4",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
    modalPopupAnimation: {
      title: "Popup animation",
      buttons: [
        {
          title: "Slide",
          innerHTML: '<img alt="Slide" src="images/builder-thumbs/slide.png"/>',
          value: "slide",
        },
        {
          title: "Zoom",
          innerHTML: '<img alt="Zoom" src="images/builder-thumbs/zoom.png"/>',
          value: "zoom",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    carouselDots: {
      title: "Carousel dots",
      buttons: [
        {
          title: "None",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-none.png"/>',
          value: "carousel-dots-none",
        },
        {
          title: "Center",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-center.png"/>',
          value: "carousel-dots-center-bottom",
        },
        {
          title: "Left bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-lb.png"/>',
          value: "carousel-dots-left-bottom",
        },
        {
          title: "Right bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-rb.png"/>',
          value: "carousel-dots-right-bottom",
        },
        {
          title: "Fluid top",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-at.png"/>',
          value: "carousel-dots-aside-top",
        },
        {
          title: "Fluid bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-dots-ab.png"/>',
          value: "carousel-dots-aside-bottom",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    carouselNavigation: {
      title: "Carousel navigation",
      buttons: [
        {
          title: "None",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-none.png"/>',
          value: "carousel-nav-none",
        },
        {
          title: "Center",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-center.png"/>',
          value: "carousel-nav-center-bottom",
        },
        {
          title: "Left bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-lb.png"/>',
          value: "carousel-nav-left-bottom",
        },
        {
          title: "Right bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-rb.png"/>',
          value: "carousel-nav-right-bottom",
        },
        {
          title: "Fluid center",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-ac.png"/>',
          value: "carousel-nav-aside-center",
        },
        {
          title: "Fluid bottom",
          innerHTML:
            '<img alt="Option" src="images/builder-thumbs/carousel-nav-ab.png"/>',
          value: "carousel-nav-aside-bottom",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    styleTextOptions: {
      title: language.textEffect,
      buttons: [
        {
          title: language.tEshadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-shadow"><strong>T</strong></h3></div>',
          value: "fx-text-shadow",
        },
        {
          title: language.tEThinShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-thin-shadow"><strong>T</strong></h3></div>',
          value: "fx-text-thin-shadow",
        },
        {
          title: language.tEHardShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-hard-shadow"><strong>T</strong></h3></div>',
          value: "fx-text-hard-shadow",
        },
        {
          title: language.tEPushedShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-pushed-shadow"><strong>T</strong></h3></div>',
          value: "fx-text-pushed-shadow",
        },
        {
          title: language.tEFlatShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-isometric-shadow"><strong>T</strong></h3></div>',
          value: "fx-text-isometric-shadow",
        },
        {
          title: language.tEGlowShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-glow"><strong>T</strong></h3></div>',
          value: "fx-text-glow",
        },
        {
          title: language.tE3DShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-3d"><strong>T</strong></h3></div>',
          value: "fx-text-3d",
        },
        {
          title: language.tEIsometricShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-isometric"><strong>T</strong></h3></div>',
          value: "fx-text-isometric",
        },
        {
          title: language.tEAnaglyphicShadow,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><h3 class="fx-text-anaglyphic"><strong>T</strong></h3></div>',
          value: "fx-text-anaglyphic",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    sizeTextOptions: {
      title: language.textSizeBox,
      buttons: [
        {
          title: language.textSizeBoxSmall,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><span class="small">Text</span></div>',
          value: "small",
        },
        {
          title: language.textSizeBoxLead,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><span class="lead">Text</span></div>',
          value: "lead",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    colorTextOptions: {
      title: language.textColorBox,
      buttons: [
        {
          title: language.textColorBoxPrimary,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><strong class="text-primary">Text</strong></div>',
          value: "text-primary",
        },
        {
          title: language.textColorBoxSecondary,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><strong class="text-secondary">Text</strong></div>',
          value: "text-secondary",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    FormOptions: {
      title: language.formType,
      buttons: [
        {
          title: language.verticale,
          innerHTML:
            '<img alt="Shadow" src="images/builder-thumbs/form-vertical.png" />',
          value: "form-vertical",
        },
        {
          title: language.horizontal,
          innerHTML:
            '<img alt="Shadow" src="images/builder-thumbs/form-inline.png" />',
          value: "form-inline",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    styleBoxOptions: {
      title: language.boxOption,
      buttons: [
        {
          title: language.be_Shadow,
          innerHTML:
            '<img alt="Shadow" src="images/builder-thumbs/shadow.png" />',
          value: "shadow",
        },
        {
          title: language.defaultBack,
          innerHTML:
            '<img alt="Default bg" src="images/builder-thumbs/default-bg.png"/>',
          value: "bg-default",
        },
        {
          title: language.border,
          innerHTML:
            '<img alt="Border" src="images/builder-thumbs/border.png"/>',
          value: "border",
        },
        {
          title: language.borderx2,
          innerHTML:
            '<img alt="Border x2" src="images/builder-thumbs/border-x2.png"/>',
          value: "border-x2",
        },
        {
          title: language.padding,
          innerHTML:
            '<img alt="Padding" src="images/builder-thumbs/padding.png" />',
          value: "padding",
        },
        {
          title: language.paddingx2,
          innerHTML:
            '<img alt="Padding x2" src="images/builder-thumbs/padding.png" />',
          value: "padding-x2",
        },
        {
          title: language.paddingx3,
          innerHTML:
            '<img alt="Padding x3" src="images/builder-thumbs/padding.png" />',
          value: "padding-x3",
        },
        {
          title: language.paddingx4,
          innerHTML:
            '<img alt="Padding x4" src="images/builder-thumbs/padding.png" />',
          value: "padding-x4",
        },
        {
          title: language.margin,
          innerHTML:
            '<img alt="margin" src="images/builder-thumbs/margin.png" />',
          value: "margin",
        },
        {
          title: language.marginX2,
          innerHTML:
            '<img alt="margin x2" src="images/builder-thumbs/margin.png" />',
          value: "margin-x2",
        },
        {
          title: language.marginX3,
          innerHTML:
            '<img alt="margin x3" src="images/builder-thumbs/margin.png" />',
          value: "margin-x3",
        },
        {
          title: language.marginX4,
          innerHTML:
            '<img alt="margin x4" src="images/builder-thumbs/margin.png" />',
          value: "margin-x4",
        },
        {
          title: language.rounded,
          innerHTML:
            '<img alt="Rounded" src="images/builder-thumbs/rounded.png"/>',
          value: "rounded",
        },
        {
          title: language.circle,
          innerHTML:
            '<img alt="Circle" src="images/builder-thumbs/rounded-circle.png"/>',
          value: "rounded-circle",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
    galleryItemOptions: {
      title: language.galleryItemOptionsTitle,
      buttons: [
        {
          title: `${language.styleNumber}: 1`,
          innerHTML:
            '<img alt="Item style 1" src="images/builder-thumbs/gallery-style-1.png" />',
          value: "gallery-style-1",
        },
        {
          title: `${language.styleNumber}: 2`,
          innerHTML:
            '<img alt="Item style 2" src="images/builder-thumbs/gallery-style-2.png" />',
          value: "gallery-style-2",
        },
        {
          title: `${language.styleNumber}: 3`,
          innerHTML:
            '<img alt="Item style 3" src="images/builder-thumbs/gallery-style-3.png" />',
          value: "gallery-style-3",
        },
        {
          title: `${language.styleNumber}: 4`,
          innerHTML:
            '<img alt="Item style 4" src="images/builder-thumbs/gallery-style-4.png" />',
          value: "gallery-style-4",
        },
        {
          title: `${language.styleNumber}: 5`,
          innerHTML:
            '<img alt="Item style 5" src="images/builder-thumbs/gallery-style-5.png" />',
          value: "gallery-style-5",
        },
        {
          title: `${language.styleNumber}: 6`,
          innerHTML:
            '<img alt="Item style 6" src="images/builder-thumbs/gallery-style-6.png" />',
          value: "gallery-style-6",
        },
        {
          title: `${language.styleNumber}: 7`,
          innerHTML:
            '<img alt="Item style 7" src="images/builder-thumbs/gallery-style-7.png" />',
          value: "gallery-style-7",
        },
        {
          title: `${language.styleNumber}: 8`,
          innerHTML:
            '<img alt="Item style 8" src="images/builder-thumbs/gallery-style-8.png" />',
          value: "gallery-style-8",
        },
        {
          title: `${language.styleNumber}: 9`,
          innerHTML:
            '<img alt="Item style 9" src="images/builder-thumbs/gallery-style-9.png" />',
          value: "gallery-style-9",
        },
        {
          title: `${language.styleNumber}: 10`,
          innerHTML:
            '<img alt="Item style 10" src="images/builder-thumbs/gallery-style-10.png" />',
          value: "gallery-style-10",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    styleSubNavOptions: {
      title: language.subNavOptions,
      buttons: [
        {
          title: language.be_Shadow,
          innerHTML:
            '<img alt="Shadow" src="images/builder-thumbs/shadow.png" />',
          value: "shadow",
        },
        {
          title: language.defaultBack,
          innerHTML:
            '<img alt="Default bg" src="images/builder-thumbs/default-bg.png"/>',
          value: "bg-default",
        },
        {
          title: language.padding,
          innerHTML:
            '<img alt="Padding" src="images/builder-thumbs/padding.png" />',
          value: "padding",
        },
        {
          title: language.paddingx2,
          innerHTML:
            '<img alt="Padding x2" src="images/builder-thumbs/padding.png" />',
          value: "padding-x2",
        },
        {
          title: language.paddingx3,
          innerHTML:
            '<img alt="Padding x3" src="images/builder-thumbs/padding.png" />',
          value: "padding-x3",
        },
        {
          title: language.paddingx4,
          innerHTML:
            '<img alt="Padding x4" src="images/builder-thumbs/padding.png" />',
          value: "padding-x4",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
    //        styleImgOptions: {
    //            title: 'Image options',
    //            buttons: [
    //                {
    //                    title: 'Shadow',
    //                    innerHTML: '<img alt="Shadow" src="images/builder-thumbs/shadow.png" />',
    //                    value: 'shadow'
    //                }
    //                , {
    //                    title: 'Border',
    //                    innerHTML: '<img alt="Border" src="images/builder-thumbs/border.png"/>',
    //                    value: 'border'
    //                }
    //                , {
    //                    title: 'Border x2',
    //                    innerHTML: '<img alt="Border x2" src="images/builder-thumbs/border-x2.png"/>',
    //                    value: 'border-x2'
    //                }
    //                , {
    //                    title: 'Rounded',
    //                    innerHTML: '<img alt="Rounded" src="images/builder-thumbs/rounded.png"/>',
    //                    value: 'rounded'
    //                }
    //                , {
    //                    title: 'Circle',
    //                    innerHTML: '<img alt="Circle" src="images/builder-thumbs/rounded-circle.png"/>',
    //                    value: 'rounded-circle'
    //                }
    //            ],
    //            onlyOne: false,
    //            allowSelectNothing: true
    //        },
    colorSvgOptions: {
      title: language.svgOptions,
      buttons: [
        {
          title: language.default,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><svg width="80px" height="60px" viewBox="0 0 80 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-default"><path d="M40,46 C47.1797017,46 53,40.1797017 53,33 C53,28.2135322 48.6666667,21.8801988 40,14 C31.3333333,21.8801988 27,28.2135322 27,33 C27,40.1797017 32.8202983,46 40,46 Z" id="drop"></path></svg></div>',
          value: "svg-default",
        },
        {
          title: language.primary,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><svg width="80px" height="60px" viewBox="0 0 80 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-primary"><path d="M40,46 C47.1797017,46 53,40.1797017 53,33 C53,28.2135322 48.6666667,21.8801988 40,14 C31.3333333,21.8801988 27,28.2135322 27,33 C27,40.1797017 32.8202983,46 40,46 Z" id="drop"></path></svg></div>',
          value: "svg-primary",
        },
        {
          title: language.secondary,
          innerHTML:
            '<div class="preview-container d-flex align-items-center text-center"><svg width="80px" height="60px" viewBox="0 0 80 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-secondary"><path d="M40,46 C47.1797017,46 53,40.1797017 53,33 C53,28.2135322 48.6666667,21.8801988 40,14 C31.3333333,21.8801988 27,28.2135322 27,33 C27,40.1797017 32.8202983,46 40,46 Z" id="drop"></path></svg></div>',
          value: "svg-secondary",
        },
      ],
      onlyOne: true,
      allowSelectNothing: true,
    },
    mapColorScheme: {
      title: language.colorScheme,
      buttons: [
        {
          title: language.light,
          innerHTML:
            '<img alt="Light" src="images/builder-thumbs/map-light.png"/>',
          value: "light",
        },
        {
          title: language.dark,
          innerHTML:
            '<img alt="Dark" src="images/builder-thumbs/map-dark.png"/>',
          value: "dark",
        },
        {
          title: language.dream,
          innerHTML:
            '<img alt="Dream" src="images/builder-thumbs/map-dream.png"/>',
          value: "dream",
        },
        {
          title: language.apple,
          innerHTML:
            '<img alt="Apple" src="images/builder-thumbs/map-apple.png"/>',
          value: "apple",
        },
        {
          title: language.mono,
          innerHTML:
            '<img alt="Mono" src="images/builder-thumbs/map-mono.png"/>',
          value: "mono",
        },
        {
          title: language.clean,
          innerHTML:
            '<img alt="clean" src="images/builder-thumbs/map-clean.png"/>',
          value: "clean",
        },
        {
          title: language.night,
          innerHTML:
            '<img alt="night" src="images/builder-thumbs/map-night.png"/>',
          value: "night",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    buttonType: {
      title: language.btnType,
      buttons: [
        {
          innerHTML:
            '<button type="button" class="btn btn-primary">' + language.prm + '</button>',
          value: "btn-primary",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-primary">' + language.prm + '</button>',
          value: "btn-outline-primary",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-secondary">' + language.sec + '</button>',
          value: "btn-secondary",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-secondary">' + language.sec + '</button>',
          value: "btn-outline-secondary",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-success">' + language.sus + '</button>',
          value: "btn-success",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-success">' + language.sus + '</button>',
          value: "btn-outline-success",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-danger">' + language.dng + '</button>',
          value: "btn-danger",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-danger">' + language.dng + '</button>',
          value: "btn-outline-danger",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-warning">' + language.war + '</button>',
          value: "btn-warning",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-warning">' + language.war + '</button>',
          value: "btn-outline-warning",
        },
        {
          innerHTML: '<button type="button" class="btn btn-info">' + language.inf + '</button>',
          value: "btn-info",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-info">' + language.inf + '</button>',
          value: "btn-outline-info",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-light">' + language.lgt + '</button>',
          value: "btn-light",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-light">' + language.lgt + '</button>',
          value: "btn-outline-light",
        },
        {
          innerHTML: '<button type="button" class="btn btn-dark">' + language.drk + '</button>',
          value: "btn-dark",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-dark">' + language.drk + '</button>',
          value: "btn-outline-dark",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-fb">' + language.fab + '</button>',
          value: "btn-fb",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-fb">' + language.fab + '</button>',
          value: "btn-outline-fb",
        },
        {
          innerHTML: '<button type="button" class="btn btn-gp">' + language.gog + '</button>',
          value: "btn-gp",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-gp">' + language.gog + '</button>',
          value: "btn-outline-gp",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-tw">' + language.twt + '</button>',
          value: "btn-tw",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-tw">' + language.twt + '</button>',
          value: "btn-outline-tw",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-li">' + language.lked + '</button>',
          value: "btn-li",
        },
        {
          innerHTML:
            '<button type="button" class="btn btn-outline-li">' + language.lked + '</button>',
          value: "btn-outline-li",
        },
        {
          innerHTML: '<button type="button" class="btn btn-link">' + language.lnk + '</button>',
          value: "btn-link",
        },
      ],
      onlyOne: true,
      allowSelectNothing: false,
    },
    buttonOptions: {
      title: language.btnEffect,
      buttons: [
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-3d">' + language.be_3D + '</button>',
          value: "fx-btn-3d",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-pill">' + language.be_Pill + '</button>',
          value: "fx-btn-pill",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-zoom">' + language.be_Zoom + '</button>',
          value: "fx-btn-zoom",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-up">' + language.be_Up + '</button>',
          value: "fx-btn-up",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-shadow">' + language.be_Shadow + '</button>',
          value: "fx-btn-shadow",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-hard-shadow">' + language.be_Shadow2 + '</button>',
          value: "fx-btn-hard-shadow",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-hidden-icon">' + language.be_Hiddenicon + '</button>',
          value: "fx-btn-hidden-icon",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-blick">' + language.be_Blick + '</button>',
          value: "fx-btn-blick",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-wave">' + language.be_Wave + '</button>',
          value: "fx-btn-wave",
        },
        {
          title: "",
          innerHTML:
            '<button type="button" class="btn btn-primary fx-btn-glow">' + language.be_Glow + '</button>',
          value: "fx-btn-glow",
        },
      ],
      onlyOne: false,
      allowSelectNothing: true,
    },
  },
  baseFilesForProject: {
    css: [
      'bootstrap.weber.css',
      'fx.css',
      'swiper-bundle.css'
    ],
    js: [
      'jquery-2.1.4.min.js',
      'bootstrap.min.js',
      'swiper-bundle.min.js'
    ],
    plugins: [
      'https://maps.googleapis.com/maps/api/js?key=' + googleKey
      , 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js'
    ]
  }
  , fullVersionSource: '../../../../membership/extend'
  , previewSettings: {
    
    //Auth::user()->id
    dir:  userId + '/' + myProjectID //Directory to upload like /preview or /../preview
  },
};

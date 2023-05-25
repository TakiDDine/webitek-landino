class Core {
    constructor() {
      this.iframe = document.getElementById("main");
      this.windowIframe = this.iframe.contentWindow;
      this.documentIframe = this.windowIframe.document;
      this.main = this.documentIframe.querySelector(".main");
      this.globalScript = this.documentIframe.querySelector("#global-script");
      this.body = document.body;
      this.popupThumb = document.getElementById("modal-thumb");
      this.modalContainer = document.getElementById("modal-project-container");
      this.modalFormContainer = document.getElementById("modal-form-container");
      this.builderStyle = document.getElementById("builder-style");
      this.preloader = document.querySelector(".supra-preloader");
    }

    iframe = null;
    windowIframe = null;
    documentIframe = null;
    main = null;
    body = null;
    popupThumb = null;
    
    clickedBtn = null;
    clickedFrameElm = null;
    _leftNav = {};
    _controlPanel = {};
    _fixedRightSide = false;
    wrapDrag = null;
    _triggerDownload = false;
    _triggerExport = false;
    _triggerImport = false;
    
    pages = null;
    pagesToload = [];
    sections = null;
    projectSections = {};
    
    style = null;
    
    activePageObject = null;
    
    popupThumbArray = [];
    
    mediaButtonsOnControlStylePL2 = {};
    mediaButtonsOnControlStylePL2Trigger = {
        desktop: false,
        tablet: false,
        mobile: false,
    };
    
    globalStyle = null;
    globalStyleElements = [];
    
    _panelShown = false;
    
    leftPanel = null;
    
    _triggerElementEnter = false;
    _triggerElementEnter2 = false;
    activeEditElement = null;
    typographyEnter = false;
    _triggeredOffElement = null;
    
    _modeViewing = {
        desctop: {
        width: "100%",
        height: "100vh",
        },
        tablet: {
        width: "1024px",
        height: "768px",
        },
        mobile: {
        width: "375px",
        height: "667px",
        },
    };
    _activeModeViewing = "desctop";
    
    _dropImg = null;
    _dropX = 0;
    _dropY = 0;
    _touchY = 0;
    sectionClicked = null;
    _nextPageForHistory = null;
    _triggerClickSection = false;
    _sectionDropped = false;
    _touch = false;
    _markerSection = null;
    _triggerMoveSectionInMain = false;
    _triggerClickSectionInMain = false;
    _lockEndDrag = false;
    _draggableSection = null;
    _elCurGrabbing = null;
    
    editingText = false;
    
    sectionsName = [];
    _pages = [];
    _idActivePage = 0;
    _triggerInitProject = false;
    gMaps = [];
    plugins = [];
    
    activeFormModal = null;
    editingForm = null;
    forms = {};
    
    _style = {};
    defaultStyleType = "light";
    editingStyle = "light";
    modalContainerStyleHtml = null;
    arrayFontsOnProject = [];
    modalContainer = null;
    modalFormContainer = null;
    
    arrayPrevStep = [];
    arrayNextStep = [];
    triggerUndo = false;
    triggerRedo = false;
    triggerImport = false;
    
    _arrEditorText = [];
    _arrListenersEditElement = [];
    _arrListenersEditElementModal = [];
    _undo = null;
    _redo = null;
    
    _videoBg = false;
    _owlGallery = false;
    _formSection = false;
    _smooth = false;
    _parallax = false;
    _datepicker = false;
    _filefield = false;
    _countup = false;
    _instafeed = false;
    _twitterfeed = false;
    _countdown = false;
    _magnific = false;
    _aos = false;
    _masonryFilter = false;
    
    _magnificScript = "";
    
    _wrapEvetActiveClickEditElement = [];
    
    drGAndDropEl = null;

    Count = 0
    Depth = 4

    isDemo = document.querySelector('body').getAttribute('data-model') === 'bootstrap' ? true : false

  checkEditPrjID = project_id == "" ? false : true
  isPaused = template ? true : Core.prototype.checkEditPrjID
  afterSaveProjectID = project_id

    translateWord = {
        keywords_ar: {
            editSectionsLabel:"تعديل هذا القسم",
            downloadBtn: "<bdo dir='rtl'>تحميل المشروع</bdo>",
            dashboard: "<bdo dir='rtl'>لوحة التحكم</bdo>",
            preview: "<bdo dir='rtl'>معاينة المشروع</bdo>",
            save: "<bdo dir='rtl'>حفظ</bdo>",
            saveInProcess: "<bdo dir='rtl'>قيد التنفيذ</bdo>",
            afterSaveMsg: "<bdo dir='rtl'>تم الحفظ بنجاح</bdo>",
            editElements: "<bdo dir='rtl'>تعديل العناصر</bdo>",
            editSections: "<bdo dir='rtl'>تعديل الأقسام<bdo>",
            addNewPage: "<bdo dir='rtl'>إضافة صفحة جديدة</bdo>",
            iframeHead: "<bdo dir='rtl'>انشئ صفحة هبوط احترافية.</bdo>",
            iframeDescribe:
            "<bdo dir='rtl'>وفّر الوقت مثل باقي مستخدمي لاندينو الذين يقومون بإنشاء أكثر من 0008 قالب جميل كل أسبوع.<br>اسحب أي عنصر من اللوحة اليمنى.</bdo>",
            darkMode: "<bdo dir='rtl'> النمط الداكن </bdo>",
            lightMode: "<bdo dir='rtl'> النمط المشرق </bdo>",

            preloaderMessage:
            "<bdo dir='rtl'>جارٍ تحميل المشروع، يرجى الانتظار...</bdo>",

            rightPanel: {
            background_position: "<bdo dir='rtl'>تمركز الخلفية</bdo>",
            background_color: "<bdo dir='rtl'>لون الخلفية</bdo>",
            backgroundHoverColor: "<bdo dir='rtl'>لون الخلفية عند الهوفر</bdo>",
            background_image: "<bdo dir='rtl'>صورة الخلفية </bdo>",
            background_repeat: "<bdo dir='rtl'>تكرار الخلفية </bdo>",
            background_size: "<bdo dir='rtl'>حجم الخلفية </bdo>",
            border_radius: "<bdo dir='rtl'>الحواف  المحدبة</bdo>",
            border_width: "<bdo dir='rtl'>سمك الحواف</bdo>",
            border_color: "<bdo dir='rtl'>لون الحواف</bdo>",
            border_style: "<bdo dir='rtl'>شكل الحواف</bdo>",
            box_Shadow: "<bdo dir='rtl'>ضل العناصر</bdo>",
            position: "<bdo dir='rtl'>تموضع العنصر</bdo>",
            z_index: "<bdo dir='rtl'>ارتفاع طبقة العنصر</bdo>",
            coordinates: "<bdo dir='rtl'>احداتيات العنصر</bdo>",
            fontFamilly: "<bdo dir='rtl'>خطوط العنصر</bdo>",
            fontColor: "<bdo dir='rtl'>لون الخط</bdo>",
            fontHoverColor: "<bdo dir='rtl'>لون الخط عند الهوفر</bdo>",
            fontSize: "<bdo dir='rtl'>حجم الخط</bdo>",
            fontStyle: "<bdo dir='rtl'>شكل الخط</bdo>",
            fontWeight: "<bdo dir='rtl'>سمك الخطا</bdo>",
            letterSpacing: "<bdo dir='rtl'>تباعد الحروف</bdo>",
            lineHeight: "<bdo dir='rtl'>ارتفاع السطور</bdo> ",
            textDecoration: "<bdo dir='rtl'>تزيين الخط</bdo>",
            textTransform: "<bdo dir='rtl'>تحويل النص</bdo>",
            textShadow: "<bdo dir='rtl'>ظل النصوص</bdo>",
            margin: "<bdo dir='rtl'>هوامش خارجية</bdo>",
            padding: "<bdo dir='rtl'>هوامش داخلية</bdo>",
            size: "<bdo dir='rtl'>حجم العنصر (الطول - العرض)</bdo>",
            skin: "<bdo dir='rtl'>الجلد (ابيض - اسود)</bdo>",
            visibility: "<bdo dir='rtl'>إتاحة الرؤية</bdo>",
            textAlign: "<bdo dir='rtl'>محاذاة النص</bdo>",
            bgPath: "<bdo dir='rtl'>مسار الخلفية</bdo>",
            opacity: "<bdo dir='rtl'>الشفافية</bdo>",
            mp4Path: "<bdo dir='rtl'>mp4 مسار الفيديو</bdo>",
            ogvPath: "<bdo dir='rtl'>OGV مسار الفيديو</bdo>",
            posterPath: "<bdo dir='rtl'>صورة ملصق الفيديو (jpg. فقط)</bdo>",
            parallax: "<bdo dir='rtl'>سرعة المنظر</bdo>",
            linkType: "<bdo dir='rtl'>نوع الارتباط</bdo>",
            externLink: "<bdo dir='rtl'>رابط خارجي</bdo>",
            page: "<bdo dir='rtl'>الصفحة</bdo>",
            sectionLink: "<bdo dir='rtl'>رابط القسم</bdo>",
            imgLink: "<bdo dir='rtl'>رابط القسم</bdo>",
            videoLink: "<bdo dir='rtl'>رابط القسم</bdo>",
            modalElement: "<bdo dir='rtl'>عنصر مودال</bdo>",
            openNewWindow: "<bdo dir='rtl'>افتح في نافذة جديدة</bdo>",
            btnSize: "<bdo dir='rtl'>حجم الأزرار</bdo>",
            sm: "<bdo dir='rtl'>صغير </bdo>",
            lg: "<bdo dir='rtl'>كبير </bdo>",
            btnWidth: "<bdo dir='rtl'>عرض الأزرار %001</bdo>",
            resetText: "<bdo dir='rtl'>صغير </bdo>",
            codeTitle: "<bdo dir='rtl'>قسم محرر الأكواد</bdo>",
            apply: "<bdo dir='rtl'>تطبيق</bdo>",
            imgSettingsTitle: "<bdo dir='rtl'>إعدادات الصور</bdo>",
            secSettings: "<bdo dir='rtl'>إعدادات الأقسام</bdo>",
            navBackground: "<bdo dir='rtl'>خلفية الرابط</bdo>",
            latitude: "<bdo dir='rtl'>خط العرض</bdo>",
            longitude: "<bdo dir='rtl'>خط الطول</bdo>",
            zoom: "<bdo dir='rtl'>تكبير</bdo>",
            popoverContent: "<bdo dir='rtl'>محتوى منبثق</bdo>",

            linkSetting: "<bdo dir='rtl'>إعدادات الارتباط</bdo>",
            top: "اعلى",
            right: "يمين",
            bottom: "اسفل",
            left: "يسار",
            height: "ارتفاع",
            width: "عرض",
            light: "وضع ابيض",
            dark: "وضع اسود",
            image: "صورة",
            video: "فيديو",
            none: "بدون",
            buttonIcon: "زر الأيقونة",
            submitType: "<bdo dir='rtl'>نوع اللإرسال</bdo>",
            subject: "<bdo dir='rtl'>الموضوع</bdo>",
            address: "<bdo dir='rtl'>العنوان</bdo>",
            apiKey: "<bdo dir='rtl'> مفتاح </bdo>(Api Key)",
            listId: "<bdo dir='rtl'> معرف القائمة </bdo>(List ID)",
            campaingToken: "<bdo dir='rtl'> رمز الحملة</bdo> (Token)",
            accessUrl: "<bdo dir='rtl'>رابط الدخول</bdo> (API Access Url)",
            aweberUrl: "<bdo dir='rtl'>بيانات اعتماد حساب AWeber</bdo>",
            host: "<bdo dir='rtl'>الإستضافة</bdo>",
            userName: "<bdo dir='rtl'>اسم المستخدم</bdo>",
            pass: "<bdo dir='rtl'>كلمة السر</bdo>",
            secure: "<bdo dir='rtl'>طريقة التأمين</bdo>",
            port: "<bdo dir='rtl'>المنفد</bdo>",
            port: "<bdo dir='rtl'>المنفد</bdo>",
            url: "<bdo dir='rtl'>لرابط</bdo>",
            modalPopup: "<bdo dir='rtl'>نافذة منبثقة مشروطة</bdo>",
            confirm: "<bdo dir='rtl'>تأكيد</bdo>",
            msgDelete: "<bdo dir='rtl'>هل أنت متأكد أنك تريد حذف هذا القسم؟</bdo>",
            delete: "<bdo dir='rtl'>حدف</bdo>",
            cancel: "<bdo dir='rtl'>إلغاء</bdo>",
            imageSettings: "<bdo dir='rtl'>إعدادات الصور</bdo>",
            imgRetina: "<bdo dir='rtl'>صورة ريتينا (غير ضرورية)</bdo>",
            imgAlt: "<bdo dir='rtl'>النص البديل للصورة</bdo>",
            animation: "<bdo dir='rtl'>تأتيرات التحريك</bdo>",
            easeFunction: "<bdo dir='rtl'>انسيابية التاتيرات</bdo>",
            duration: "<bdo dir='rtl'>مدة التأتيرا</bdo>",
            delay: "<bdo dir='rtl'>مدة التأخير</bdo>",
            timingFunction: "<bdo dir='rtl'>وظيفة الوقت</bdo>",
            iframURL: "<bdo dir='rtl'>رابط مصدر</bdo> (iframe)",
            settings: "<bdo dir='rtl'>الإعدادات</bdo>",
            style: "<bdo dir='rtl'>تنسيق</bdo>",
            pageSettingsH4: "<bdo dir='rtl'>إعدادات الصفحة</bdo>",
            pageName: "<bdo dir='rtl'>إسم الصفحة</bdo>",
            pageTitle: "<bdo dir='rtl'>عنوان الصفحة</bdo>",
            pageFaveicon: "<bdo dir='rtl'>ايقونة الصفحة</bdo>",
            pageMetaKey: "<bdo dir='rtl'>الكلمات الدلالية  للصفحة</bdo>",
            pageMetaDes: "<bdo dir='rtl'>نبدة تعريفية عن الصفحة</bdo>",
            pageJsCdn: "<bdo dir='rtl'>إضافة ملفات الجفاسكربت</bdo>",
            none: "<bdo dir='rtl'>بدون</bdo>",
            pageGeneral: "<bdo dir='rtl'>عام</bdo>",
            pageSEO: "<bdo dir='rtl'>السيو</bdo>",
            pagePreloader: "<bdo dir='rtl'>تأثير التحميل المسبق</bdo>",
            imgUploadH4: "<bdo dir='rtl'>إختر صورة</bdo>",
            imgUploadaction: "<bdo dir='rtl'>رفع الصورة</bdo>",
            addItemBefore: "<bdo dir='rtl'>أضف أي عنصر على اللوحة لتفعيل قائمة الإعدادات.</bdo>",
            createAccount: "<bdo dir='rtl'>إنشاء حساب</bdo>",
            },
            popup: {
            form: {
                formConstructor: "<bdo dir='rtl'>منشئ النموذج </bdo>",
                textField: "<bdo dir='rtl'>حقل النص</bdo>",
                emailField: "<bdo dir='rtl'>حقل البريد الإلكتروني</bdo>",
                phoneNumber: "<bdo dir='rtl'>رقم الهاتف</bdo>",
                phoneField:"<bdo dir='rtl'>حقل الهاتف</bdo>",
                selectField: "<bdo dir='rtl'>حقل الاختيارات</bdo>",
                textArea: "<bdo dir='rtl'>حقل النص الطويل</bdo>",
                radioButton: "<bdo dir='rtl'>زر الراديو</bdo>",
                checkBox: "<bdo dir='rtl'>خانة الاختيارات</bdo>",
                date: "<bdo dir='rtl'>حقل التاريخ</bdo>",
                notation: "<bdo dir='rtl'>نص التعليق</bdo>",
                attachFile: "<bdo dir='rtl'>حقل إرفاق الملف</bdo>",
                placeHolder: "<bdo dir='rtl'>النص المساعد</bdo>",
                fieldName: "<bdo dir='rtl'>اسم الحقل</bdo>",
                required: "<bdo dir='rtl'>إجباري</bdo>",
                label: "<bdo dir='rtl'>التسمية</bdo>",
                default: "<bdo dir='rtl'>القيمة الافتراضية</bdo>",
                value: "<bdo dir='rtl'>قيمة</bdo>",
                valueText: "قيمة",
                addValue: "<bdo dir='rtl'>إضافة قيمة</bdo>",
                rows: "<bdo dir='rtl'>عدد الصفوف</bdo>",
                checked: "<bdo dir='rtl'>محدد</bdo>",
                labels:{
                googleSheets:"<bdo dir='rtl'>جوجل شيتس</bdo>",
                },
                getText:{
                textAdded:'<bdo dir="rtl">تم إضافة النص.</bdo>',
                paragraphAdded: '<bdo dir="rtl" class="">سيتم إضافة الفقرة، يُمكنك تعديل محتواها في منشئ الصفحات.<br>المرجو النقر مرتين على حقل نص التعليق في منشئ الصفحات!</bdo>'
                }
            },
            button: {
                apply: "<bdo dir='rtl'>تطبيق</bdo>",
                cancel: "<bdo dir='rtl'>إلغاء</bdo>",
                ok: "<bdo dir='rtl'>حسناً</bdo>",
            },
            demoMode:{
                msg: "<bdo dir='rtl'>هذه الميزة غير مسموح بها في فترة العرض ،<br> اشترك في نظامنا للحصول على الوظائف الكاملة.</bdo>",
                purchaseNow : "<bdo dir='rtl'>قم بالشراء الآن</bdo>",
                
            },
            trialMode:{
                msg: "<bdo dir='rtl'>أنت في فترة تجريبية ، لا تتوفر ميزة التنزيل إلا بعد ترقية حسابك.</bdo>",
                upgrandeNow: "<bdo dir='rtl'>قم بترقية حسابك الآن</bdo>"

            },
            addItem : "<bdo dir='rtl'>يرجى إضافة عنصر قبل تنزيل المشروع!</bdo>",
            cantAddItem : "<bdo dir='rtl'>عذراً، لا يسمح بإضافة قسمين من هذا العنصر!</bdo>",
            cancel: "<bdo dir='rtl'>إلغاء</bdo>",
            },
        },
    }
    iconSvg = {
        iframSvgAnimation: `
        <div class="showAnimation">
          <svg id="scene-1" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="bg">
              <path id="Vector" d="M1836.77 50.41H83.23C66.6615 50.41 53.23 63.8415 53.23 80.41V999.6C53.23 1016.17 66.6615 1029.6 83.23 1029.6H1836.77C1853.34 1029.6 1866.77 1016.17 1866.77 999.6V80.41C1866.77 63.8415 1853.34 50.41 1836.77 50.41Z" fill="#EFEFEF"/>
              <path id="Vector_2" d="M1415.06 50.41H1806.17C1839.61 50.41 1866.76 77.56 1866.76 111V999C1866.76 1015.88 1853.05 1029.59 1836.17 1029.59H1415.06V50.41Z" fill="white"/>
              <path id="Vector_3" d="M1866.77 131.06H53.23V80.4C53.23 63.84 66.67 50.4 83.23 50.4H1836.77C1853.33 50.4 1866.77 63.84 1866.77 80.4V131.06Z" fill="#3758F9"/>
              <path id="Vector_4" d="M217.52 175.02H108.75C103.52 175.02 99.28 179.26 99.28 184.49V202.69C99.28 207.92 103.52 212.16 108.75 212.16H217.52C222.75 212.16 226.99 207.92 226.99 202.69V184.49C226.99 179.26 222.75 175.02 217.52 175.02Z" fill="#3758F9"/>
              <path id="Vector_5" d="M372.13 175.02H263.36C258.13 175.02 253.89 179.26 253.89 184.49V202.69C253.89 207.92 258.13 212.16 263.36 212.16H372.13C377.36 212.16 381.6 207.92 381.6 202.69V184.49C381.6 179.26 377.36 175.02 372.13 175.02Z" fill="white"/>
              <path id="Vector_6" d="M1342.24 175.02H1233.47C1228.24 175.02 1224 179.26 1224 184.49V202.69C1224 207.92 1228.24 212.16 1233.47 212.16H1342.24C1347.47 212.16 1351.71 207.92 1351.71 202.69V184.49C1351.71 179.26 1347.47 175.02 1342.24 175.02Z" fill="white"/>
              <path id="Vector_7" d="M1188.27 175.02H1079.5C1074.27 175.02 1070.03 179.26 1070.03 184.49V202.69C1070.03 207.92 1074.27 212.16 1079.5 212.16H1188.27C1193.5 212.16 1197.74 207.92 1197.74 202.69V184.49C1197.74 179.26 1193.5 175.02 1188.27 175.02Z" fill="white"/>
              <path id="Vector_8" d="M1034.3 175.02H925.53C920.3 175.02 916.06 179.26 916.06 184.49V202.69C916.06 207.92 920.3 212.16 925.53 212.16H1034.3C1039.53 212.16 1043.77 207.92 1043.77 202.69V184.49C1043.77 179.26 1039.53 175.02 1034.3 175.02Z" fill="white"/>
              <path id="Vector_9" d="M765.57 175.02H558.76C553.74 175.02 549.67 179.09 549.67 184.11V203.07C549.67 208.09 553.74 212.16 558.76 212.16H765.57C770.59 212.16 774.66 208.09 774.66 203.07V184.11C774.66 179.09 770.59 175.02 765.57 175.02Z" fill="#D1D3D4"/>
              <path id="Vector_10" d="M1824.93 256.12H1667.1C1662.69 256.12 1659.11 259.697 1659.11 264.11V285.27C1659.11 289.683 1662.69 293.26 1667.1 293.26H1824.93C1829.34 293.26 1832.92 289.683 1832.92 285.27V264.11C1832.92 259.697 1829.34 256.12 1824.93 256.12Z" fill="#D1D3D4"/>
              <path id="Vector_11" d="M1823.83 175.02H1617.02C1612 175.02 1607.93 179.09 1607.93 184.11V203.07C1607.93 208.09 1612 212.16 1617.02 212.16H1823.83C1828.85 212.16 1832.92 208.09 1832.92 203.07V184.11C1832.92 179.09 1828.85 175.02 1823.83 175.02Z" fill="#3758F9"/>
              <path id="Vector_12" d="M1825.14 337.21H1466.79C1462.5 337.21 1459.02 340.689 1459.02 344.98V366.58C1459.02 370.871 1462.5 374.35 1466.79 374.35H1825.14C1829.43 374.35 1832.91 370.871 1832.91 366.58V344.98C1832.91 340.689 1829.43 337.21 1825.14 337.21Z" fill="#D1D3D4"/>
              <path id="Vector_13" d="M1827.05 418.31H1572.71C1569.47 418.31 1566.85 420.934 1566.85 424.17V458.31C1566.85 461.546 1569.47 464.17 1572.71 464.17H1827.05C1830.29 464.17 1832.91 461.546 1832.91 458.31V424.17C1832.91 420.934 1830.29 418.31 1827.05 418.31Z" fill="#D1D3D4"/>
              <path id="Vector_14" d="M1827.05 478.13H1572.71C1569.47 478.13 1566.85 480.754 1566.85 483.99V518.13C1566.85 521.366 1569.47 523.99 1572.71 523.99H1827.05C1830.29 523.99 1832.91 521.366 1832.91 518.13V483.99C1832.91 480.754 1830.29 478.13 1827.05 478.13Z" fill="#D1D3D4"/>
              <path id="Vector_15" d="M1827.05 537.96H1572.71C1569.47 537.96 1566.85 540.584 1566.85 543.82V577.96C1566.85 581.196 1569.47 583.82 1572.71 583.82H1827.05C1830.29 583.82 1832.91 581.196 1832.91 577.96V543.82C1832.91 540.584 1830.29 537.96 1827.05 537.96Z" fill="#D1D3D4"/>
              <path id="Vector_16" d="M1827.05 597.79H1572.71C1569.47 597.79 1566.85 600.414 1566.85 603.65V637.79C1566.85 641.026 1569.47 643.65 1572.71 643.65H1827.05C1830.29 643.65 1832.91 641.026 1832.91 637.79V603.65C1832.91 600.414 1830.29 597.79 1827.05 597.79Z" fill="#D1D3D4"/>
              <path id="Vector_17" d="M1827.05 657.61H1572.71C1569.47 657.61 1566.85 660.234 1566.85 663.47V697.61C1566.85 700.846 1569.47 703.47 1572.71 703.47H1827.05C1830.29 703.47 1832.91 700.846 1832.91 697.61V663.47C1832.91 660.234 1830.29 657.61 1827.05 657.61Z" fill="#D1D3D4"/>
              <path id="Vector_18" d="M1827.05 717.44H1572.71C1569.47 717.44 1566.85 720.064 1566.85 723.3V757.44C1566.85 760.676 1569.47 763.3 1572.71 763.3H1827.05C1830.29 763.3 1832.91 760.676 1832.91 757.44V723.3C1832.91 720.064 1830.29 717.44 1827.05 717.44Z" fill="#D1D3D4"/>
              <path id="Vector_19" d="M1827.05 777.27H1572.71C1569.47 777.27 1566.85 779.894 1566.85 783.13V817.27C1566.85 820.506 1569.47 823.13 1572.71 823.13H1827.05C1830.29 823.13 1832.91 820.506 1832.91 817.27V783.13C1832.91 779.894 1830.29 777.27 1827.05 777.27Z" fill="#D1D3D4"/>
              <path id="Vector_20" d="M1827.05 837.09H1572.71C1569.47 837.09 1566.85 839.714 1566.85 842.95V877.09C1566.85 880.326 1569.47 882.95 1572.71 882.95H1827.05C1830.29 882.95 1832.91 880.326 1832.91 877.09V842.95C1832.91 839.714 1830.29 837.09 1827.05 837.09Z" fill="#D1D3D4"/>
              <path id="Vector_21" d="M1827.05 896.92H1572.71C1569.47 896.92 1566.85 899.544 1566.85 902.78V936.92C1566.85 940.156 1569.47 942.78 1572.71 942.78H1827.05C1830.29 942.78 1832.91 940.156 1832.91 936.92V902.78C1832.91 899.544 1830.29 896.92 1827.05 896.92Z" fill="#D1D3D4"/>
              <path id="Vector_22" d="M1827.05 956.75H1572.71C1569.47 956.75 1566.85 959.374 1566.85 962.61V996.75C1566.85 999.986 1569.47 1002.61 1572.71 1002.61H1827.05C1830.29 1002.61 1832.91 999.986 1832.91 996.75V962.61C1832.91 959.374 1830.29 956.75 1827.05 956.75Z" fill="#D1D3D4"/>
              <path id="Vector_23" d="M1733.88 101.85C1740.02 101.85 1745 96.8714 1745 90.73C1745 84.5886 1740.02 79.61 1733.88 79.61C1727.74 79.61 1722.76 84.5886 1722.76 90.73C1722.76 96.8714 1727.74 101.85 1733.88 101.85Z" fill="#F4F5F7"/>
              <path id="Vector_24" d="M1777.84 101.85C1783.98 101.85 1788.96 96.8714 1788.96 90.73C1788.96 84.5886 1783.98 79.61 1777.84 79.61C1771.7 79.61 1766.72 84.5886 1766.72 90.73C1766.72 96.8714 1771.7 101.85 1777.84 101.85Z" fill="#F4F5F7"/>
              <path id="Vector_25" d="M1821.8 101.85C1827.94 101.85 1832.92 96.8714 1832.92 90.73C1832.92 84.5886 1827.94 79.61 1821.8 79.61C1815.66 79.61 1810.68 84.5886 1810.68 90.73C1810.68 96.8714 1815.66 101.85 1821.8 101.85Z" fill="#F4F5F7"/>
              <path id="Vector_26" d="M259.02 337.21H1207.01C1216.38 337.21 1223.99 344.82 1223.99 354.19V1029.59H242.04V354.19C242.04 344.82 249.65 337.21 259.02 337.21Z" fill="white"/>
              <g id="Group">
              <path id="Vector_27" d="M958.54 646.84H507.5C504.971 646.84 502.92 648.891 502.92 651.42V656.28C502.92 658.81 504.971 660.86 507.5 660.86H958.54C961.069 660.86 963.12 658.81 963.12 656.28V651.42C963.12 648.891 961.069 646.84 958.54 646.84Z" fill="#D1D3D4"/>
              <path id="Vector_28" d="M906.94 677.16H559.09C556.864 677.16 555.06 678.964 555.06 681.19V687.15C555.06 689.376 556.864 691.18 559.09 691.18H906.94C909.166 691.18 910.97 689.376 910.97 687.15V681.19C910.97 678.964 909.166 677.16 906.94 677.16Z" fill="#D1D3D4"/>
              <path id="Vector_29" d="M852.3 707.48H613.74C611.89 707.48 610.39 708.98 610.39 710.83V718.15C610.39 720 611.89 721.5 613.74 721.5H852.3C854.15 721.5 855.65 720 855.65 718.15V710.83C855.65 708.98 854.15 707.48 852.3 707.48Z" fill="#D1D3D4"/>
            </g>
            <path id="svgAddElementButton" d="M1491.05 256.12H1464.13C1461.31 256.12 1459.02 258.408 1459.02 261.23V288.15C1459.02 290.972 1461.31 293.26 1464.13 293.26H1491.05C1493.87 293.26 1496.16 290.972 1496.16 288.15V261.23C1496.16 258.408 1493.87 256.12 1491.05 256.12Z" fill="#3758F9"/>
            <g id="arrow">
            <path id="Vector_30" d="M1363.15 413.91C1350.14 395.05 1345.56 370.84 1350.47 348.48C1355.16 327.12 1368.73 308.62 1387.18 297.01C1397.21 290.7 1408.58 286.39 1420.36 284.9C1421.7 284.73 1422.86 283.87 1422.86 282.4C1422.86 281.18 1421.71 279.73 1420.36 279.9C1397.9 282.74 1376.93 294.52 1362.67 312.11C1355.31 321.19 1349.79 331.64 1346.69 342.93C1343.59 354.22 1342.8 366.85 1344.43 378.82C1346.26 392.24 1351.12 405.28 1358.83 416.44C1359.6 417.55 1361.02 418.05 1362.25 417.34C1363.35 416.7 1363.92 415.04 1363.15 413.92V413.91Z" fill="#1239F8"/>
            <path id="Vector_31" d="M1395.38 264.27C1404.85 268.09 1414.31 271.92 1423.78 275.74C1425.83 276.57 1427.95 277.31 1429.93 278.28C1431.29 278.95 1432.83 279.83 1433.14 281.45C1433.82 284.92 1429.87 288.04 1427.52 289.88C1424.15 292.53 1420.45 295.53 1419.75 300.03C1419.54 301.36 1420.09 302.72 1421.5 303.11C1422.69 303.44 1424.37 302.71 1424.58 301.36C1425.19 297.45 1428.91 295.13 1431.78 292.85C1435.14 290.19 1438.56 286.05 1438.17 281.48C1437.75 276.43 1433.4 274.26 1429.23 272.58C1424.19 270.54 1419.15 268.51 1414.11 266.48C1408.31 264.14 1402.51 261.79 1396.7 259.45C1395.45 258.94 1393.95 260 1393.62 261.2C1393.23 262.63 1394.11 263.77 1395.37 264.28L1395.38 264.27Z" fill="#1239F8"/>
          </svg>
        </div>
        `,
        downloadBtn: `
        <svg width="18" height="18" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.94001 4.12L4.77001 5.29C4.60001 5.46 4.33001 5.46 4.16001 5.29L2.99001 4.12" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M4.47 2.5V5.35" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M7.81001 3.95999V5.63999C7.81001 6.05999 7.47 6.39999 7.05 6.39999H1.89C1.47 6.39999 1.13 6.05999 1.13 5.63999V3.95999" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M4.47 1.59001V0.600006" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
        `,
        saveBtn: `
        <svg width="15" height="15" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.06001 0.350006H5.30001L6.64001 1.69001V5.93001C6.64001 6.32001 6.32001 6.64001 5.93001 6.64001H1.06001C0.670006 6.64001 0.350006 6.32001 0.350006 5.93001V1.06001C0.350006 0.670006 0.670006 0.350006 1.06001 0.350006Z" stroke="#1239F8" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.59 3.5H4.41L5.22 4.31V5.48H1.77V4.31L2.58 3.5H2.59Z" stroke="#1239F8" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.02 0.350006H2.05V2.34001H5.02V0.350006Z" stroke="#1239F8" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>    
        `,
        addNewPage: `
        <svg width="17" height="17" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="filledPath" d="M5.77 1.54999C5.90808 1.54999 6.02 1.43806 6.02 1.29999C6.02 1.16192 5.90808 1.04999 5.77 1.04999C5.63193 1.04999 5.52 1.16192 5.52 1.29999C5.52 1.43806 5.63193 1.54999 5.77 1.54999Z"  fill="#1239F8"/>
          <path d="M5.94001 0.350006H1.06001C0.667884 0.350006 0.350006 0.667884 0.350006 1.06001V5.94001C0.350006 6.33213 0.667884 6.65001 1.06001 6.65001H5.94001C6.33213 6.65001 6.65001 6.33213 6.65001 5.94001V1.06001C6.65001 0.667884 6.33213 0.350006 5.94001 0.350006Z" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M6.65001 2.23001H0.350006" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M3.37 3.38V5.53" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M4.43999 4.45999H2.28999" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path class="filledPath" d="M5.11 1.54999C5.24807 1.54999 5.36 1.43806 5.36 1.29999C5.36 1.16192 5.24807 1.04999 5.11 1.04999C4.97193 1.04999 4.86 1.16192 4.86 1.29999C4.86 1.43806 4.97193 1.54999 5.11 1.54999Z"  fill="#1239F8"/>
          <path class="filledPath" d="M4.45 1.54999C4.58807 1.54999 4.7 1.43806 4.7 1.29999C4.7 1.16192 4.58807 1.04999 4.45 1.04999C4.31193 1.04999 4.2 1.16192 4.2 1.29999C4.2 1.43806 4.31193 1.54999 4.45 1.54999Z"  fill="#1239F8"/>
        </svg>    
        `,
        editElement: `
        <svg width="15" height="15" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.17 1.61999L5.37 0.819985C5.09 0.539985 4.63 0.539985 4.36 0.819985L3.7 1.47999L5.51 3.28999L6.17 2.62999C6.31 2.48999 6.38 2.30999 6.38 2.11999C6.38 1.92999 6.31 1.74999 6.17 1.60999V1.61999Z" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10"/>
          <path d="M0.840008 4.43999L0.630008 6.05999C0.620008 6.14999 0.650008 6.23999 0.710008 6.29999C0.760008 6.34999 0.840008 6.37999 0.910008 6.37999C0.920008 6.37999 0.930007 6.37999 0.950007 6.37999L2.57001 6.16999C2.63001 6.16999 2.69001 6.12999 2.73001 6.08999L5.52001 3.29999L3.71001 1.48999L0.920008 4.27999C0.920008 4.27999 0.850008 4.37999 0.840008 4.43999Z" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10"/>
    </svg>
    
        
        `,
        editSection: `
        <svg width="15" height="15" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.12 0.92C0.98 0.92 0.87 1.03 0.87 1.17C0.87 1.31 0.98 1.42 1.12 1.42C1.26 1.42 1.37 1.31 1.37 1.17C1.37 1.03 1.26 0.92 1.12 0.92ZM4.65 0.00999975H0.96C0.43 0.00999975 0 0.44 0 0.97V5.84C0 6.37 0.43 6.8 0.96 6.8H5.83C6.36 6.8 6.79 6.37 6.79 5.84V2.15L4.64 0L4.65 0.00999975ZM6.1 2.16L5.42 2.83L3.97 1.38L4.65 0.7L6.11 2.16H6.1ZM5.07 3.19L4.8 3.46L3.14 3.67V3.64L3.35 1.99L3.61 1.73L5.06 3.18L5.07 3.19ZM0.5 0.97C0.5 0.71 0.71 0.51 0.96 0.51H4.13L3.43 1.21L2.99 1.65C2.94 1.7 2.92 1.78 2.89 1.85H0.49V0.98L0.5 0.97ZM6.3 5.84C6.3 6.1 6.09 6.3 5.84 6.3H0.97C0.71 6.3 0.51 6.09 0.51 5.84V2.34H2.81L2.66 3.55C2.62 3.72 2.68 3.91 2.79 4C2.89 4.12 3.03 4.18 3.18 4.18L4.88 3.96C4.99 3.94 5.1 3.89 5.18 3.81L5.62 3.37L6.32 2.67V5.84H6.3ZM2.45 0.91C2.31 0.91 2.2 1.02 2.2 1.16C2.2 1.3 2.31 1.41 2.45 1.41C2.59 1.41 2.7 1.3 2.7 1.16C2.7 1.02 2.59 0.91 2.45 0.91ZM1.79 0.91C1.65 0.91 1.54 1.02 1.54 1.16C1.54 1.3 1.65 1.41 1.79 1.41C1.93 1.41 2.04 1.3 2.04 1.16C2.04 1.02 1.93 0.91 1.79 0.91Z" fill="#1239F8"/>
        </svg>    
        `,
        backToDashboard: `
        <svg width="15" height="15" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.92 1.20999L5.74 3.02999C6 3.28999 6 3.71999 5.74 3.98999L3.92 5.80999" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M1.06 3.5H5.94" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M1.06 2.51999V4.47999" stroke="#1239F8" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>    
        `,
        previewPrj: `
          <svg width="25" height="25" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <defs>
              <style>
                .previewPrj-1 {
                  fill: none;
                  stroke: #1239f8;
                  stroke-linecap: round;
                  stroke-miterlimit: 10;
                  stroke-width: .5px;
                }
              </style>
            </defs>
            <path class="previewPrj-1" d="m8.69,4.35h1.27c.38,0,.69.31.69.69v4.92s0,.09-.01.14c-.07.31-.35.55-.68.55h-4.92c-.38,0-.69-.31-.69-.69v-1.26"/>
            <path class="previewPrj-1" d="m4.35,6.83v-1.8c0-.37.3-.68.68-.68h1.73"/>
            <line class="previewPrj-1" x1="7.41" y1="7.41" x2="4.55" y2="4.55"/>
          </svg>
        `,
        previewInProcess: `
            <defs>
              <style>
                .previewInProcess-1 {
                  fill: url(#linear-gradient-2);
                }
    
                .previewInProcess-2 {
                  fill: url(#linear-gradient);
                }
              </style>
              <linearGradient id="linear-gradient" x1="9.07" y1="7.5" x2="9.07" y2="11.15" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="#1239f8"/>
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="5.92" y1="7.5" x2="5.92" y2="3.85" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="#1239f8"/>
              </linearGradient>
            </defs>
            <path class="previewInProcess-2" d="m7.5,10.9c-.14,0-.25-.11-.25-.25s.11-.25.25-.25c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9c-.14,0-.25-.11-.25-.25s.11-.25.25-.25c1.87,0,3.4,1.53,3.4,3.4s-1.53,3.4-3.4,3.4Z"/>
            <path class="previewInProcess-1" d="m7.75,4.35c0,.14-.11.25-.25.25-1.6,0-2.9,1.3-2.9,2.9s1.3,2.9,2.9,2.9c-.14,0-.25.11-.25.25s.11.25.25.25c-1.87,0-3.4-1.52-3.4-3.4s1.53-3.4,3.4-3.4c.14,0,.25.11.25.25Z"/>
        `,
        previewInProcessBlue: `
              <defs>
              <style>
                .previewInProcess-1 {
                  fill: url(#linear-gradient-2)!important;
                }
    
                .previewInProcess-2 {
                  fill: url(#linear-gradient)!important;
                }
              </style>
              <linearGradient id="linear-gradient" x1="9.07" y1="7.5" x2="9.07" y2="11.15" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="#1239f8"/>
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="5.92" y1="7.5" x2="5.92" y2="3.85" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="#1239f8"/>
              </linearGradient>
            </defs>
            <path class="previewInProcess-2" d="m7.5,10.9c-.14,0-.25-.11-.25-.25s.11-.25.25-.25c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9c-.14,0-.25-.11-.25-.25s.11-.25.25-.25c1.87,0,3.4,1.53,3.4,3.4s-1.53,3.4-3.4,3.4Z"/>
            <path class="previewInProcess-1" d="m7.75,4.35c0,.14-.11.25-.25.25-1.6,0-2.9,1.3-2.9,2.9s1.3,2.9,2.9,2.9c-.14,0-.25.11-.25.25s.11.25.25.25c-1.87,0-3.4-1.52-3.4-3.4s1.53-3.4,3.4-3.4c.14,0,.25.11.25.25Z"/>
        `,
        darkMode: `
          <svg width="15" height="15" data-name="darkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.14 11.14">
            <defs>
              <style>
                .darkMode-1 {
                  fill: #231f20;
                }
              </style>
            </defs>
            <g>
              <path class="darkMode-1" d="m11.04,4.53c-.14.71-.48,1.39-1.04,1.95-1.48,1.48-3.87,1.48-5.34,0-1.48-1.48-1.48-3.87,0-5.34.55-.55,1.23-.9,1.95-1.04-.34-.06-.68-.1-1.04-.1C2.49,0,0,2.49,0,5.57s2.49,5.57,5.57,5.57,5.57-2.49,5.57-5.57c0-.36-.03-.7-.1-1.04Z"/>
            </g>
          </svg>
        `,
        lightMode: `
          <svg width="15" height="15" data-name="lightMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.52 14.51">
            <defs>
              <style>
                .lightMode-1 {
                  fill: #231f20;
                }
              </style>
            </defs>
            <g>
              <g>
                <circle class="lightMode-1" cx="7.26" cy="7.26" r="3.8"/>
                <g>
                  <path class="lightMode-1" d="m7.26,1.75c-.16,0-.29-.13-.29-.29V.29c0-.16.13-.29.29-.29s.29.13.29.29v1.17c0,.16-.13.29-.29.29Z"/>
                  <path class="lightMode-1" d="m7.26,14.51c-.16,0-.29-.13-.29-.29v-1.17c0-.16.13-.29.29-.29s.29.13.29.29v1.17c0,.16-.13.29-.29.29Z"/>
                  <path class="lightMode-1" d="m14.23,7.55h-1.17c-.16,0-.29-.13-.29-.29s.13-.29.29-.29h1.17c.16,0,.29.13.29.29s-.13.29-.29.29Z"/>
                  <path class="lightMode-1" d="m1.46,7.55H.29c-.16,0-.29-.13-.29-.29s.13-.29.29-.29h1.17c.16,0,.29.13.29.29s-.13.29-.29.29Z"/>
                  <path class="lightMode-1" d="m11.36,3.45c-.08,0-.15-.03-.21-.09-.11-.11-.11-.3,0-.41l.82-.82c.11-.11.3-.11.41,0s.11.3,0,.41l-.82.82c-.06.06-.13.09-.21.09h0Z"/>
                  <path class="lightMode-1" d="m2.34,12.47c-.08,0-.15-.03-.21-.09-.11-.11-.11-.3,0-.41l.82-.82c.11-.11.3-.11.41,0s.11.3,0,.41l-.82.82c-.06.06-.13.09-.21.09h0Z"/>
                  <path class="lightMode-1" d="m12.19,12.47c-.08,0-.15-.03-.21-.09l-.82-.82c-.11-.11-.11-.3,0-.41s.3-.11.41,0l.82.82c.11.11.11.3,0,.41-.06.06-.13.09-.21.09h0Z"/>
                  <path class="lightMode-1" d="m3.16,3.45c-.08,0-.15-.03-.21-.09l-.82-.82c-.11-.11-.11-.3,0-.41s.3-.11.41,0l.82.82c.11.11.11.3,0,.41-.06.06-.13.09-.21.09h0Z"/>
                </g>
              </g>
            </g>
          </svg>
        `,
    }

    getPageMode() {
        const page = this.getActivePageObject().getDOMSelf();
        const mode = page.className.match(/(page-mode-[^ ]*)\s?/i);
        return mode && mode[1] ? mode[1] : null;
    }
    
    trigger(eName, context, Obj) {
        Obj = Obj || { detail: "" };
        const event = new CustomEvent(eName, Obj);
        context.dispatchEvent(event);
    }
    
    getActivePageObject() {
        return this.activePageObject;
    }
    
    removeWrapDrag(pageHTML) {
        if (
        !(
            pageHTML instanceof HTMLElement ||
            pageHTML instanceof this.windowIframe.HTMLElement
        )
        ) {
        throw new TypeError("Expected type of HTMLElement");
        }
    
        const drag = this.documentIframe.querySelector(".wrap-drag");
        if (drag) {
        pageHTML.removeChild(drag);
        pageHTML.classList.remove("loading");
        }
    }
    
    addWrapDrag(pageHTML) {
        if (
        !(
            pageHTML instanceof HTMLElement ||
            pageHTML instanceof this.windowIframe.HTMLElement
        )
        ) {
        throw new TypeError("Expected type of HTMLElement");
        }
    
        const lang = Core.prototype.translateWord.keywords_ar;
        const iframSvgAnimation = Core.prototype.iconSvg.iframSvgAnimation;
    
        pageHTML.classList.add("loading");
        pageHTML.innerHTML = `
        <div class="wrap-drag">
            <div class="point-to-drag d-flex flex-column justify-content-center align-items-center">
            ${iframSvgAnimation}
            <p>${lang.iframeHead}</p>
            <p>${lang.iframeDescribe}</p>
            </div>
        </div>
        `;
    }
    
    selection(item, className, classActive) {
        classActive = classActive || "active";
        className = className || ".active";
        if (item) {
        if (!item.classList.contains(classActive)) {
            if (item.parentElement !== null) {
            if (item.parentElement.querySelector(className)) {
                item.parentElement
                .querySelector(className)
                .classList.remove(classActive);
            }
            item.classList.add(classActive);
            }
        }
        }
    }
    
    _selectionWithSelfUnactive(item) {
        if (!item.classList.contains("active")) {
        item.classList.add("active");
        } else {
        item.classList.remove("active");
        item.blur();
        }
    }

    _selfUnactive(item) {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          item.blur();
        }
    }
      
      detectLeftButton(evt) {
        evt = evt || window.event;
        if ("buttons" in evt) {
          return evt.buttons == 1;
        }
        const button = evt.which || evt.button;
        return button == 1;
      }
      
      findParent(el, arrElIdentif) {
        let DOM = el;
        for (let indx in arrElIdentif) {
          while (
            DOM !== null &&
            DOM.classList !== undefined &&
            !DOM.classList.contains(arrElIdentif[indx])
          ) {
            DOM = DOM.parentElement;
          }
      
          if (DOM === null) {
            DOM = el;
            while (
              DOM !== null &&
              DOM.tagName.toLowerCase() !== arrElIdentif[indx]
            ) {
              DOM = DOM.parentElement;
            }
            if (DOM === null && arrElIdentif.length > indx * 1 + 1) {
              DOM = el;
            } else {
              break;
            }
          } else {
            break;
          }
        }
        return DOM;
      }

      createPopupThumb(popup) {
        let toggle = "modal";
        let active = "";
        if (popup.classList.contains("modal-alert")) {
          toggle = "alert";
          if (popup.classList.contains("show")) active = " active";
        }
        if (popup.classList.contains("modal-panel")) {
          toggle = "panel";
          if (popup.classList.contains("show")) active = " active";
        }
        const item = document.createElement("div");
        item.className = "item" + active;
        item.dataset.toggle = toggle;
        item.dataset.target = "#" + popup.id;
        item.dataset.id = this.popupThumbArray.length;
        item.style.backgroundImage =
          "url('" + popup.parentElement.dataset.img + "')";
        this.popupThumbArray.push({
          id: popup.id,
          toggle: toggle,
          selfDom: popup,
        });
        this.popupThumb.querySelector(".container-thumb").appendChild(item);
        this.popupThumb.classList.add("collapse-thumb");
      
        item.addEventListener("click", this._showPopupThumb.bind(this, item));
      }

      _initThumbnails() {
        const popups = this.main.querySelectorAll(
          ".modal, .modal-panel, .modal-alert"
        );
      
        Array.prototype.forEach.call(popups, this.createPopupThumb.bind(this));
      }

      setEventListenersToModals() {
        const _this = this;
        if (project_file != "") {
          this._callEdit(project_file, project_file_name);
        }
        const modalShowHide = function (e) {
          const item = _this.popupThumb.querySelector(
            '[data-target="#' + e.target.id + '"]'
          );
          if (item) item.classList.toggle("active");
        };
      
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("open.alert", modalShowHide);
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("close.alert", modalShowHide);
      
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("open.panel", modalShowHide);
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("close.panel", modalShowHide);
      
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("hide.bs.modal", modalShowHide);
        _this.windowIframe
          .jQuery(_this.documentIframe)
          .on("show.bs.modal", modalShowHide);
      }

      _showPopupThumb(item) {
        const _this = this;
        _this.removeNowrapSuperStructure(
          _this.documentIframe,
          null,
          "without-spr-child"
        );
        if (item.dataset.toggle === "modal" && item.classList.contains("active")) {
          _this.windowIframe.jQuery(item.dataset.target).modal("hide");
          item.classList.remove("active");
        } else if (
          item.dataset.toggle === "modal" &&
          !item.classList.contains("active")
        ) {
          const el = item;
      
          const modalShow = function (el) {
            const $modal = _this.windowIframe.jQuery(el.dataset.target);
            const li = $modal[0].parentElement;
      
            $modal.modal("show");
            _this.activeFormModal = $modal[0];
      
            $modal.on("hide.bs.modal", function () {
              $modal.off("hide.bs.modal");
              li.removeAttribute("style");
            });
      
            li.style.display = "block";
            li.style.position = "fixed";
            li.style.top = "0";
            li.style.right = "0";
            li.style.bottom = "0";
            li.style.left = "0";
            li.style.zIndex = "1000050";
      
            const bg = $modal[0].querySelector(".bg");
            const map = $modal[0].querySelector(".g-map");
            if (bg.classList.contains("bg-video")) {
              $modal.on("shown.bs.modal", function () {
                bg.querySelector("video").style.height = "initial";
                $modal.off("shown.bs.modal");
              });
            }
            if (map) {
              $modal.on("shown.bs.modal", function () {
                _this.reloadScript(li);
                $modal.off("shown.bs.modal");
              });
            }
          };
      
          const active = _this.popupThumb.querySelector(
            ".item.active[data-toggle=modal]"
          );
          if (active) {
            const $activeModal = _this.windowIframe.jQuery(active.dataset.target);
      
            $activeModal.on("hidden.bs.modal", function () {
              modalShow(el);
              $activeModal.off("hidden.bs.modal");
            });
      
            $activeModal.modal("hide");
            active.classList.remove("active");
            return;
          }
      
          modalShow(el);
        } else if (
          item.dataset.toggle === "alert" &&
          item.classList.contains("active")
        ) {
          const $alert = _this.windowIframe.jQuery(item.dataset.target);
          $alert.removeClass("show");
      
          item.classList.remove("active");
        } else if (
          item.dataset.toggle === "alert" &&
          !item.classList.contains("active")
        ) {
          const $alert = _this.windowIframe.jQuery(item.dataset.target);
          $alert.addClass("show");
      
          const modalAlert = _this.main.querySelector(item.dataset.target);
          modalAlert.classList.add("show");
          item.classList.add("active");
        } else if (
          item.dataset.toggle === "panel" &&
          item.classList.contains("active")
        ) {
          const $panel = _this.windowIframe.jQuery(item.dataset.target);
          $panel.removeClass("show");
      
          item.classList.remove("active");
        } else if (
          item.dataset.toggle === "panel" &&
          !item.classList.contains("active")
        ) {
          const $panel = _this.windowIframe.jQuery(item.dataset.target);
          $panel.addClass("show");
      
          const modalPanel = _this.main.querySelector(item.dataset.target);
          modalPanel.classList.add("show");
          item.classList.add("active");
        }
      }

      _initCollapsePopupThumb() {
        this.collapsePopupThumbEl.addEventListener(
          "click",
          function () {
            this.popupThumb.classList.toggle("collapse-thumb");
          }.bind(this)
        );
      }

      copySectionWithNavTab(navTabs, sIndx, cloneSection) {
        const section = cloneSection.children[0];
        const tabs = navTabs.parentElement;
        const titleTabs = navTabs.querySelectorAll("li a");
        const contentTabs = tabs
          .querySelector(".tab-content")
          .querySelectorAll(".tab-pane");
        const sectionId = section.id.replace(/-/g, "_") + "_" + sIndx;
      
        Array.prototype.forEach.call(titleTabs, function (el, indx) {
          el.href = "#" + sectionId + "--" + indx;
          el.setAttribute("aria-controls", sectionId + "--" + indx);
          el.id = sectionId + "--" + indx + "-tab";
          contentTabs[indx].id = sectionId + "--" + indx;
          contentTabs[indx].setAttribute(
            "aria-labelledby",
            sectionId + "--" + indx + "-tab"
          );
        });
      }

      copySectionWithAccordion(accordion, sIndx, cloneSection) {
        const section = cloneSection.children[0];
        const titleAccordion = accordion.querySelectorAll(".content-box");
        const sectionId = section.id.replace(/-/g, "_") + "_" + sIndx;
        accordion.id = sectionId + "-accordion";
      
        Array.prototype.forEach.call(titleAccordion, function (el, indx) {
          const title = el.querySelector("a[data-toggle=collapse]");
          const collapse = el.querySelector(".collapse");
          title.href = "#" + sectionId + "--" + indx;
          title.dataset.parent = "#" + sectionId + "-accordion";
          title.setAttribute("aria-controls", sectionId + "--" + indx);
          collapse.id = sectionId + "--" + indx;
        });
      }
      reloadScript(container) {
        const _this = this;
        const scripts = container.querySelectorAll("script");
      
        Array.prototype.forEach.call(scripts, function (script) {
          const scriptHtml = script.innerHTML;
          const newScript = document.createElement("script");
          newScript.setAttribute("type", "text/javascript");
          const next = script.nextSibling;
          const parent = script.parentElement;
          parent.removeChild(script);
          if (next) {
            parent.insertBefore(newScript, next);
          } else {
            parent.appendChild(newScript);
          }
          newScript.innerHTML = scriptHtml;
        });
      
        const smooth = container.querySelectorAll("a.smooth");
        Array.prototype.forEach.call(smooth, function (a) {
          _this.windowIframe.jQuery(a).smoothScroll({
            speed: 800,
            exclude: [".spr-outline-control", ".spr-oc-show"],
            excludeWithin: [".spr-outline-control", ".spr-oc-show"],
          });
        });
      
        if (this.windowIframe.AOS) this.windowIframe.AOS.refresh();
      
        this.reloadGlobalScript();
      }

      reloadGlobalScript() {
        const scriptHtml = this.globalScript.innerHTML;
        const newScript = document.createElement("script");
        newScript.id = "global-script";
        newScript.setAttribute("type", "text/javascript");
        const next = this.globalScript.nextSibling;
        const parent = this.globalScript.parentElement;
        parent.removeChild(this.globalScript);
        if (next) {
          parent.insertBefore(newScript, next);
        } else {
          parent.appendChild(newScript);
        }
        newScript.innerHTML = scriptHtml;
        Core.prototype.globalScript = newScript;
      }
      EventMoseEnterOnChildActive(e) {
        var parent = this;
        parent.classList.add("spr-child-active");
      }
      EventMoseLeaveOnChildActive(e) {
        var parent = this;
        if (parent.classList.contains("spr-child-active")) {
          parent.classList.remove("spr-child-active");
        }
      }
      StylingWrapParent(li) {
        var _this = this;
      
        var elements = li.querySelectorAll(".buttons-control, .buttons-control-form");
        Array.prototype.forEach.call(elements, function (el) {
          var parent = controls.findParent(el.parentElement.parentElement, [
            "buttons-control",
            "buttons-control-form",
          ]);
          if (parent) {
            el.classList.add("child-event");
      
            el.addEventListener(
              "mouseenter",
              _this.EventMoseEnterOnChildActive.bind(parent)
            );
          }
        });
      }
      RebuildControl(wrap) {
        var _this = this;
        if (wrap.classList.contains("spr-oc-show")) {
          wrap.classList.remove("spr-oc-show");
      
          var li = _this.findParent(wrap, ["section-item"]);
          var controlGroup = li.querySelector(
            ".wrap-control-element.nowrap" +
            ", .wrap-control.nowrap" +
            ", .wrap-control-element-icons.nowrap" +
            ", .wrap-control-element-typography.nowrap"
          );
          if (controlGroup) {
            var arrControl = JSON.parse(controlGroup.dataset.controls);
            var arrTypography = controlGroup.dataset.typography
              ? JSON.parse(controlGroup.dataset.typography)
              : null;
            var arrSettings = controlGroup.dataset.settings
              ? JSON.parse(controlGroup.dataset.settings)
              : null;
            var arrStyle = controlGroup.dataset.style
              ? JSON.parse(controlGroup.dataset.style)
              : null;
            var draggableMode = controlGroup.dataset.draggableMode
              ? JSON.parse(controlGroup.dataset.draggableMode)
              : null;
            var context = controlGroup.dataset.context
              ? JSON.parse(controlGroup.dataset.context)
              : null;
            var classControls = controlGroup.className.replace(
              /btn-group|nowrap/gi,
              ""
            );
            builder.addWrapEvventMouseEnterEditEelement.call(
              builder,
              li,
              {
                controlsElements: arrControl,
                typography: arrTypography,
                elementSettings: arrSettings,
                elementStyle: arrStyle,
                draggableMode: draggableMode,
                context: context,
              },
              classControls,
              wrap
            );
      
            var pageMode = _this.getPageMode();
            pageMode = pageMode === "edit-style" ? "edit-elements" : pageMode;
      
            builder.setControlsElementOnSection(wrap, li, pageMode, false);
          }
          return;
        }
        var wrapControl = wrap.querySelectorAll(
          ".wrap-control, .wrap-control-element"
        );
        Array.prototype.forEach.call(wrapControl, function (element) {
          var arrControl = JSON.parse(element.dataset.controls);
          var objSettings = element.dataset.settings
            ? JSON.parse(element.dataset.settings)
            : null;
          var parent = element.parentElement;
          var el = parent.children[0];
          var ObjControl = null;
      
          if (element.dataset.objControl === "editor-text") {
            ObjControl = new EditorText(el);
          }
      
          if (element.classList.contains("wrap-control")) {
            el = parent;
          } else {
            var section = _this.findParent(parent, [
              "section-item",
              "modal-dialog",
            ]);
          }
      
          parent.removeChild(element);
          parent.appendChild(
            new ControlDOMSections(
              {
                controlsElements: arrControl,
                settingsSection: objSettings,
              },
              el,
              element.className,
              ObjControl
            )
          );
        });
      }
      ConvertImgToSvg(path, el, callback) {
        var $img = jQuery(el);
        var attributes = $img.prop("attributes");
        $.get(
          path,
          function (data) {
            var $svg = jQuery(data).find("svg");
      
            $svg = $svg.removeAttr("xmlns:a");
      
            $.each(attributes, function () {
              $svg.attr(this.name, this.value);
            });
            $img.replaceWith($svg);
      
            if (callback) callback($svg);
          },
          "xml"
        );
      }
      ConvertAllImagesToSvg(context) {
        var _this = this;
        context = context || this.documentIframe;
        var images = context.querySelectorAll('img[src$=".svg"]:not(.supra)');
        [].forEach.call(images, function (img) {
          _this.ConvertImgToSvg(img.getAttribute("src"), img);
        });
      }
      
      RemoveNowrapSuperStructure(li, typeElements, mode) {
        var _this = this;
        typeElements =
          typeElements ||
          ".wrap-control.nowrap" +
          ", .wrap-control-element.nowrap" +
          ", .wrap-control-element-icons.nowrap" +
          ", .wrap-control-element-typography.nowrap";
      
        var editedElements = li.querySelectorAll(
          ".edit-typography, .spr-outline-control, .spr-child-active, .spr-oc-show, [class*=spr-p-]"
        );
        if (editedElements.length > 0) {
          Array.prototype.forEach.call(editedElements, function (el) {
            let sidebarTriggerer = document.getElementById("sidebarTriggerer");
      
            if (!sidebarTriggerer.dataset.collapsed) {
              el.classList.add("spr-outline-control");
              el.setAttribute("contenteditable");
            }
      
            if (mode !== "without-spr-child") {
              el.classList.remove("spr-child-active");
            }
            el.classList.remove("spr-oc-show");
            el.classList.remove("edit-typography");
            el.classList.remove("spr-wout");
            el.setAttribute(
              "class",
              el.getAttribute("class").replace(/\s?spr-p-[0-9]*(\s|$)/, "$1")
            );
      
            if (el.hasAttribute("contenteditable")) {
              el.removeAttribute("contenteditable");
            }
          });
        }
        Core.prototype.editingText = false;
        Core.prototype.activeEditElement = null;
        Core.prototype._triggerElementEnter = false;
      
        if (Core.prototype.drGAndDropEl) {
          Core.prototype.drGAndDropEl.destroy();
          Core.prototype.drGAndDropEl = null;
        }
      
        var contEdit = li.querySelectorAll("[contenteditable]");
        if (contEdit.length > 0) {
          Array.prototype.forEach.call(contEdit, function (el) {
            el.removeAttribute("contenteditable");
          });
        }
      
        var controlGroups = li.querySelectorAll(typeElements);
        if (controlGroups.length > 0) {
          Array.prototype.forEach.call(controlGroups, function (el) {
            el.parentElement.removeChild(el);
          });
        }
      
        var breadcrumbs = document.body.querySelector(".breadcrumbs");
        if (breadcrumbs) breadcrumbs.parentElement.removeChild(breadcrumbs);
      
        _this.documentIframe.removeEventListener(
          "click",
          _this._clickOnDocumentIframeEditElementMode
        );
      
        if (_this._arrEditorText.length > 0) {
          _this._arrEditorText.forEach(function (editor) {
            editor.editor.mouseLeave();
            if (editor.el.parentElement)
              editor.el.parentElement.removeEventListener(
                "click",
                editor.editor.clickIngalleryEditTagA
              );
            editor.el.removeEventListener("mouseup", editor.editor.mouseUp);
            editor.el.removeEventListener("touchend", editor.editor.touchEnd);
            editor.el.removeEventListener("keydown", editor.editor.keyDown);
            editor.el.removeEventListener("mouseleave", editor.editor.mouseLeave);
            editor.el.removeEventListener("paste", editor.editor.paste);
          });
          Core.prototype._arrEditorText = [];
        }
      
        this._triggeredOffElement = null;
      }
      CloneOwlGallery(container) {
        var cloneSection = container.cloneNode(true);
        var gallery = cloneSection.querySelector(".spr-gallery");
        if (gallery) {
          var newGallery = gallery.cloneNode(true);
          this.RemoveOwlSuperstructure(newGallery);
          gallery.parentNode.insertBefore(newGallery, gallery);
          gallery.parentNode.removeChild(gallery);
          container.parentNode.insertBefore(cloneSection, container.nextSibling);
        }
        return cloneSection;
      }
      ClearGalleryOnPage(page) {
        var _this = this;
        var galleries = page.querySelectorAll(".spr-gallery");
        Array.prototype.forEach.call(galleries, function (gallery) {
          _this.RemoveOwlSuperstructure(gallery);
        });
      }
      RemoveOwlSuperstructure(gallery) {
        gallery.classList.remove("owl-carousel");
        gallery.classList.remove("owl-theme");
        gallery.classList.remove("owl-loaded");
        var items = gallery.querySelectorAll(".owl-item:not(.cloned) .item");
        gallery.innerHTML = "";
        Array.prototype.forEach.call(items, function (element) {
          gallery.appendChild(element);
        });
      }
      ClearInstafeed(page) {
        var _this = this;
        var instafeeds = page.querySelectorAll(".instafeed");
        Array.prototype.forEach.call(instafeeds, function (instafeed) {
          instafeed.innerHTML = "";
        });
      }
      RefreshParallax(target) {
        var _this = this;
        target = target || this.getActivePageObject().getDOMSelf();
        this.ClearParallaxSuperstructure(target);
      
        if (_this.windowIframe.rellax) {
          _this.windowIframe.rellax.destroy();
        }
      
        if (target.querySelector(".parallax")) {
          _this.windowIframe.rellax = new _this.windowIframe.Rellax(".parallax", {
            center: true,
          });
        }
      }
      ClearParallaxSuperstructure(page) {
        var bgArray = page.querySelectorAll(".parallax");
        Array.prototype.forEach.call(bgArray, function (parallax) {
          parallax.style.removeProperty("transform");
        });
      }
      ClearAnimationByClass(page) {
        var circularCharts = page.querySelectorAll(".circular-play");
        Array.prototype.forEach.call(circularCharts, function (circularChart) {
          circularChart.setAttribute(
            "class",
            circularChart.getAttribute("class").replace(/\s?circular-play/, "")
          );
        });
      }
      
      cloneObject(Obj) {
        var _this = this;
        this.count++;
        if (Obj instanceof Array) {
            var clone = [];
            Obj.forEach(function (el, item) {
            clone[item] = _this._checkElmtsForCloneObj(_this, el);
            });
        } else {
            var clone = {};
            for (var item in Obj) {
            clone[item] = _this._checkElmtsForCloneObj(_this, Obj[item]);
            }
        }

        this.count--;

        return clone;
    }
    _checkElmtsForCloneObj(_this, Obj) {
        var result = null;
        if (
            Obj instanceof HTMLElement ||
            Obj instanceof DocumentFragment ||
            Obj instanceof this.windowIframe.HTMLElement ||
            Obj instanceof this.windowIframe.DocumentFragment
        )
            result = Obj;
        else if (Obj instanceof Array && this.count > this.depth)
            result = cloneArray(Obj);
        else if (Obj instanceof Array && this.count <= this.depth)
            result = _this.cloneObject(Obj);
        else if (Obj && typeof Obj === "object") result = _this.cloneObject(Obj);
        else result = Obj;
        return result;
    }
    fromCamelCase(input) {
        var matches = input.match(
            /([A-Z][A-Z0-9]*(?=$|[A-Z][a-z0-9])|[A-Za-z][a-z0-9]+)/g
        );
        if (matches) {
            matches = matches.map(function (el) {
            return firstUp(el);
            });
            return matches.join(" ");
        } else {
            return input;
        }
    }
    uniqueName(name, arrNames) {
        arrNames = arrNames.sort(function (a, b) {
            if (
            a.split("--")[1] &&
            b.split("--")[1] &&
            a.split("--")[1] * 1 > b.split("--")[1] * 1
            ) {
            return 1;
            } else if (
            a.split("--")[1] &&
            b.split("--")[1] &&
            a.split("--")[1] * 1 < b.split("--")[1] * 1
            ) {
            return -1;
            } else if (a > b) {
            return 1;
            } else if (a < b) {
            return -1;
            }

            return 0;
        });

        arrNames.forEach(function (itemName) {
            var newName = name.split("--");
            if (newName[1] && itemName === name) {
            name = newName[0] + "--" + (newName[1] * 1 + 1);
            } else if (itemName === name) {
            name = newName[0] + "--0";
            }
        });

        return name;
    }
    uniqueSectionID(pageObj, li) {
        var section = li.children[0];
        var style = li.querySelector("style");

        while (pageObj.sections[section.id] !== undefined) {
            var args = section.id.split("--");
            if (args[1]) {
            section.id = args[0] + "--" + (args[1] * 1 + 1);
            } else {
            section.id = args[0] + "--0";
            }
        }

        if (section.id.split("--")[1]) {
            var pattern = new RegExp(
            "#" + section.id.split("--")[0] + "(--[0-9]*)?\\s",
            "gim"
            );
            style.innerHTML = style.innerHTML.replace(
            pattern,
            "#" + section.id + " "
            );
        }
    }
    _belongsTo(el, toElement) {
        while (toElement && toElement !== el) {
            toElement = toElement.parentElement;
        }

        if (el === toElement) {
            return true;
        }

        return false;
    }
    childOf(c, p) {
        while ((c = c.parentNode) && c !== p);
        return !!c;
    }
    setPosition(el, wrap, elementStylePosition, zIndex) {
        var computedStyle = window.getComputedStyle(el, null);
        var elementStyleTop = computedStyle.getPropertyValue("top");
        var elementStyleRight = computedStyle.getPropertyValue("right");
        var elementStyleBottom = computedStyle.getPropertyValue("bottom");
        var elementStyleLeft = computedStyle.getPropertyValue("left");
        var elementStyleFloat = computedStyle.getPropertyValue("float");

        wrap.style.position = elementStylePosition;
        wrap.style.top = elementStyleTop;
        wrap.style.right = elementStyleRight;
        wrap.style.bottom = elementStyleBottom;
        wrap.style.left = elementStyleLeft;
        wrap.style.zIndex = zIndex;
        var style = wrap.getAttribute("style");
        wrap.setAttribute("style", style + "float: " + elementStyleFloat + ";");
    }
    addNewForm(form, section, oldSection, copyElement) {
        var sectionId = section.id;
        if (copyElement) {
            oldSection = section.id;
            sectionId = this.uniqueName(sectionId, Object.keys(this.forms));
        }
        var condition = oldSection
            ? "#" + oldSection + "-form"
            : "\\.(?:contact|subscribe)_form";

        form.id = sectionId + "-form";
        Core.prototype.forms[sectionId] = { sendMode: "simple-mail-php" };

        var script = section.parentElement.querySelector("script");
        var patternForm = new RegExp(condition, "img");
        script.innerHTML = script.innerHTML.replace(
            patternForm,
            "#" + sectionId + "-form"
        );

        form
            .querySelector("button[type=submit]")
            .addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            });
    }
    addNewGMap(gMap, section) {
        var id = section.id.split("--")[0] + "-map";
        id = this.uniqueName(id, this.gMaps);
        gMap.id = id;
      
        Core.prototype.gMaps.push(id);
        return id;
      }
      
      changeIdGMapInScript(script, id, newId) {
        newId = newId || id;
        var funcId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var patternMapId = new RegExp(
          "(google\\.maps\\.Map\\(document\\.getElementById\\(')(?:" + id + "|map)",
          "im"
        );
        var patternMapFuncInit = new RegExp(
          "(initialize)(?:_" + oldId + "\\s*\\(|\\s*\\()",
          "img"
        );
        script.innerHTML = script.innerHTML.replace(
          patternMapFuncInit,
          "$1_" + funcId + "("
        );
        script.innerHTML = script.innerHTML.replace(patternMapId, "$1" + newId);
      }
      
      copyFunctionInitGmap(script, id, newId) {
        var funcId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var contextStart = funcId + "\\([\\s\\S]*?";
        var contextEnd = "[\\s\\S]*?" + funcId + "\\(";
      
        var patternMapFuncInit = new RegExp(
          "(initialize)(_" +
            oldId +
            ".*{)([\\s\\S]*?)(initialize)(_" +
            oldId +
            ".*)(\\(\\);)",
          "im"
        );
        var init = script.innerHTML.match(patternMapFuncInit);
        script.innerHTML = script.innerHTML.replace(
          patternMapFuncInit,
          "$1$2$3$4$5$6\n\nfunction " +
            init[1] +
            "_" +
            funcId +
            "() {\n" +
            init[3] +
            init[4] +
            "_" +
            funcId +
            init[6]
        );
      
        var patternMapId = new RegExp(
          "(" +
            contextStart +
            "google\\.maps\\.Map\\(document\\.getElementById\\(')[^']*(" +
            contextEnd +
            ")",
          "im"
        );
        script.innerHTML = script.innerHTML.replace(
          patternMapId,
          "$1" + newId + "$2"
        );
      }
      
      deleteFunctionInitGmap(script, id) {
        var funcId = id.replace(/-/gi, "_");
      
        var contextStart = funcId + "\\([\\s\\S]*?";
        var contextEnd = funcId + "\\(\\);";
      
        var patternMapFuncInit = new RegExp(
          "function[\\w\\s]*" + contextStart + contextEnd,
          "im"
        );
        var match = script.innerHTML.match(patternMapFuncInit);
        script.innerHTML = script.innerHTML.replace(patternMapFuncInit, "");
        return match;
      }
      
      changeIdCountUpInScript(script, id, newId) {
        newId = newId || id;
        var varId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var patternVariable = new RegExp("variableCountUp|" + oldId, "igm");
        var patternCountUpId = new RegExp("\\.counter-up|#" + id, "img");
        script.innerHTML = script.innerHTML.replace(patternVariable, varId);
        script.innerHTML = script.innerHTML.replace(patternCountUpId, "#" + newId);
      }
      
      changeIdCircularPlayInScript(script, id, newId) {
        newId = newId || id;
        var varId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var patternVariable = new RegExp("variableChart|" + oldId, "igm");
        var patternCircularPlay = new RegExp(
          "\\.circular-chart|#" + id + "\\s\\.circular-chart",
          "img"
        );
        script.innerHTML = script.innerHTML.replace(patternVariable, varId);
        script.innerHTML = script.innerHTML.replace(
          patternCircularPlay,
          "#" + newId + " .circular-chart"
        );
      }
      
      addNewCountDown(countDown, section) {
        var id = section.id.split("--")[0] + "-countdown";
        id = this.uniqueName(id, this.gMaps);
        countDown.id = id;
      
        Core.prototype.gMaps.push(id);
        return id;
      }
      
      changeIdCountDownInScript(script, id, newId) {
        newId = newId || id;
        var varId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var patternVariable = new RegExp("\\$countDown|\\$" + oldId, "igm");
        var patternCountDownId = new RegExp(
          "(\\$\\(\\')(?:\\.countdown|#" + id + ")",
          "img"
        );
        script.innerHTML = script.innerHTML.replace(patternVariable, "$" + varId);
        script.innerHTML = script.innerHTML.replace(
          patternCountDownId,
          "$1#" + newId
        );
      }
      
      copyCountDownInside(script, id, newId) {
        var varId = newId.replace(/-/gi, "_");
        var oldId = id.replace(/-/gi, "_");
      
        var contextStart = "\\/\\/start spr-countdown[\\s\\S]*?";
        var contextEnd = "[\\s\\S]*?\\);\\/\\/end spr-countdown";
      
        var patternNewCountDown = new RegExp(
          contextStart + "\\$" + oldId + contextEnd,
          "igm"
        );
        var newCountDown = script.innerHTML.match(patternNewCountDown);
        var newCountDownStr = "";
        if (newCountDown) {
          newCountDownStr = newCountDown[0];
          var patternVariable = new RegExp("\\$countDown|\\$" + oldId, "igm");
          var patternCountDownId = new RegExp(
            "(\\$\\(\\')(?:\\.spr-countdown|#" + id + ")",
            "img"
          );
          newCountDownStr = newCountDownStr.replace(patternVariable, "$" + varId);
          newCountDownStr = newCountDownStr.replace(
            patternCountDownId,
            "#" + newId
          );
        }
      
        script.innerHTML = script.innerHTML + "\n" + newCountDownStr;
      }
      
      deleteFunctionInitCountDown(script, id) {
        var oldId = id.replace(/-/gi, "_");
      
        var contextStart = "\\/\\/start spr-countdown[\\s\\S]*?";
        var contextEnd = "[\\s\\S]*?\\);\\/\\/end spr-countdown";
      
        var patternNewCountDown = new RegExp(
          contextStart + "\\$" + oldId + contextEnd,
          "igm"
        );
        script.innerHTML = script.innerHTML.replace(patternNewCountDown, "");
      }
      
      addNewInstafeed(plugin, section) {
        var id = section.id.split("--")[0] + "-instafeed";
        id = this.uniqueName(id, this.plugins);
        plugin.id = id;
      
        Core.prototype.plugins.push(id);
        return id;
      }
      
      changeIdInstafeedInScript(script, id, newId) {
        newId = newId || id;
      
        var patternPluginId = new RegExp("(?:instafeed-target|" + id + ")", "img");
        script.innerHTML = script.innerHTML.replace(patternPluginId, newId);
      }
      
      addNewTwitterfeed(plugin, section) {
        var id = section.id.split("--")[0] + "-twitterfeed";
        id = this.uniqueName(id, this.plugins);
        plugin.id = id;
      
        Core.prototype.plugins.push(id);
        return id;
      }

      changeIdTwitterfeedInScript(script, id, newId) {
        newId = newId || id;
    
        var patternPluginId = new RegExp(
          "(?:twitterfeed-target|" + id + ")",
          "img"
        );
        script.innerHTML = script.innerHTML.replace(patternPluginId, newId);
      }
      applyMagnificPopup(DOMElement) {
        var _this = this;
        if (DOMElement.tagName !== "A") DOMElement = DOMElement.parentElement;
        if (
          DOMElement.tagName === "A" &&
          DOMElement.href.search(/player\.vimeo\.com|embed/i) === -1 &&
          DOMElement.href.search(/vimeo\.com|youtube\.com/i) !== -1
        ) {
          _this.windowIframe.jQuery(DOMElement).magnificPopup({
            type: "iframe",
            key: "video-key",
            iframe: {
              patterns: {
                youtube: {
                  index: "www.youtube.com/",
                  id: "v=",
                  src: "https://www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "https://player.vimeo.com/video/%id%?autoplay=1",
                },
              },
            },
            disableOn: function () {
              if (_this.editingText) {
                return false;
              }
              return true;
            },
          });
    
          var li = _this.findParent(DOMElement, ["section-item", "modal-confirm"]);
          var script = li.querySelector("script");
          if (script.innerHTML.search(/\/\/magnific/im) === -1) {
            script.innerHTML +=
              "\n//magnific" +
              "\n//------------------------------------------------------------------------" +
              "\n//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS" +
              "\n//------------------------------------------------------------------------" +
              "\n" +
              "\n$('.video-popup').magnificPopup({" +
              "\n\ttype: 'iframe'" +
              "\n//delete" +
              "\n," +
              "disableOn: function() {" +
              "if(window.editingText) {" +
              "return false;" +
              "}" +
              "return true;" +
              "}" +
              "\n//deleteend" +
              "\n});" +
              "\n//magnificend";
          }
        }
      }
      applyMagnificPopupImage(DOMElement) {
        var _this = this;
        if (DOMElement.tagName !== "A") DOMElement = DOMElement.parentElement;
        if (
          DOMElement.tagName === "A" &&
          DOMElement.href.search(/\.(png|jpg|jpeg|gif|svg)/i) !== -1
        ) {
          _this.windowIframe.jQuery(DOMElement).magnificPopup({
            type: "image",
            key: "some-key",
            image: {
              titleSrc: function (item) {
                return item.el.find("img").attr("alt");
              },
            },
            disableOn: function () {
              if (_this.editingText) {
                return false;
              }
              return true;
            },
          });
    
          var li = _this.findParent(DOMElement, ["section-item", "modal-confirm"]);
          var script = li.querySelector("script");
          if (script.innerHTML.search(/\/\/magnific/im) === -1) {
            script.innerHTML +=
              "\n//magnific" +
              "\n//------------------------------------------------------------------------" +
              "\n//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS" +
              "\n//------------------------------------------------------------------------" +
              "\n" +
              "\n$('.image-popup').magnificPopup({" +
              "\n\ttype: 'image'," +
              "\n\timage: {\n" +
              "                    titleSrc: function (item) {\n" +
              "                        return item.el.find('img').attr('alt');\n" +
              "                    }\n" +
              "                }" +
              "\n//delete" +
              "\n," +
              "disableOn: function() {" +
              "if(window.editingText) {" +
              "return false;" +
              "}" +
              "return true;" +
              "}" +
              "\n//deleteend" +
              "\n});" +
              "\n//magnificend";
          }
        }
      }
      applyMagnificPopupGallery(gallery) {
        var _this = this;
        this.windowIframe.jQuery(gallery).magnificPopup({
          delegate: ".video-popup, .image-popup",
          type: "image",
          gallery: {
            enabled: true,
          },
          image: {
            titleSrc: function (item) {
              return item.el.find("img").attr("alt");
            },
          },
          callbacks: {
            open: function () {
              _this.windowIframe.jQuery(gallery).trigger("stop.owl.autoplay");
            },
            close: function () {
              _this.windowIframe.jQuery(gallery).trigger("play.owl.autoplay");
            },
          },
        });
      }
      _reloadMagnific(page) {
        var _this = this;
        var magnificGalleryItems = page.querySelectorAll(
          ".gallery .video-popup, .gallery .image-popup"
        );
        var magnificGallery = page.querySelectorAll(".gallery");
        if (magnificGallery) {
          Array.prototype.forEach.call(magnificGallery, function (gallery) {
            _this.applyMagnificPopupGallery(gallery);
          });
        }
    
        var magnific = page.querySelectorAll(".video-popup");
        if (magnific) {
          Array.prototype.forEach.call(magnific, function (anchor) {
            if ([].indexOf.call(magnificGalleryItems, anchor) !== -1) return;
            _this.applyMagnificPopup(anchor);
          });
        }
    
        var magnificImg = page.querySelectorAll(".image-popup");
        if (magnificImg) {
          Array.prototype.forEach.call(magnificImg, function (anchor) {
            if ([].indexOf.call(magnificGalleryItems, anchor) !== -1) return;
            _this.applyMagnificPopup(anchor);
          });
        }
      }
      _reloadVideoBg(page, mode) {
        var _this = this;
        var vides = page.querySelectorAll(".bg-video");
        if (vides) {
          Array.prototype.forEach.call(vides, function (vide, indx) {
            if (mode === "run") {
              if (_this.windowIframe.jQuery(vide).data("vide")) {
                _this.windowIframe.jQuery(vide).data("vide").destroy();
              }
              vide.innerHTML = "";
              _this.windowIframe.jQuery(vide).vide();
            } else if (mode === "reload") {
              var video = vide.querySelector("video");
              if (video.paused) video.play();
            } else if (mode === "clear") {
              vide.innerHTML = "";
            }
          });
        }
      }
      _getPositionInGallery(element, owl) {
        var countScreen = owl.querySelectorAll(".owl-item.active").length;
        var countItems = owl.querySelectorAll(".owl-item:not(.cloned)").length;
        var arr = owl.querySelectorAll(".owl-item");
        if (arr.length !== countItems)
          arr = Array.prototype.slice.call(arr, countScreen);
        var index = null;
        Array.prototype.forEach.call(arr, function (el, indx) {
          if (el === element) {
            index = indx;
          }
        });
    
        return index > countItems - 1 ? index - countItems - 1 : index;
      }
      removePreloader() {
        var preloader = this.preloader;
        document.body.classList.add("run");
        setTimeout(function () {
          if (preloader && preloader.parentElement) {
            preloader.parentElement.removeChild(preloader);
          }
        }, 1000);
      }
      _prepareContentPagesToSave(mode) {
        var _this = this;
        if (builder.activeFormModal) {
          $(builder.activeFormModal).modal("hide");
          builder.activeFormModal.style.display = "none";
        }
        var main = _this.main.cloneNode(true);
        _this.clearControlElements(main);
        _this._DeleteTransformFromAttribute(main);
    
        var sectionsName = JSON.stringify(Object.keys(_this.projectSections));
        var pagesStorageObj = JSON.stringify(_this.pages.getPagesObjInArray());
        var projectData = JSON.stringify(main.innerHTML);
        var modalContainer = JSON.stringify(_this.modalContainer.innerHTML);
        var modalFormContainer = JSON.stringify(_this.modalFormContainer.innerHTML);
        var forms = JSON.stringify(_this.forms);
        var video_bg = JSON.stringify(_this._videoBg);
        var gallery = JSON.stringify(_this._owlGallery);
        var form_section = JSON.stringify(_this._formSection);
        var smooth = JSON.stringify(_this._smooth);
        var parallax = JSON.stringify(_this._parallax);
        var datepicker = JSON.stringify(_this._datepicker);
        var filefield = JSON.stringify(_this._filefield);
        var countup = JSON.stringify(_this._countup);
        var countdown = JSON.stringify(_this._countdown);
        var gMaps = JSON.stringify(_this.gMaps);
        var plugins = JSON.stringify(_this.plugins);
        var builderStyle = _this.builderStyle.innerHTML;
        var gs = {};
        for (var item in _this.globalStyle.optionsStyle) {
          if (item === "defaultPropertiesForTags") {
            gs[item] = _this.globalStyle.optionsStyle[item].map(function (val) {
              var op = {};
              for (var item1 in val) {
                if (item1 === "elements") {
                  op[item1] = [];
                  val[item1].forEach(function (val2) {
                    var el = {};
                    for (var item2 in val2) {
                      if (item2 !== "controlElements") {
                        el[item2] = val2[item2];
                      }
                    }
                    op[item1].push(el);
                  });
                } else {
                  op[item1] = val[item1];
                }
              }
              return op;
            });
          } else {
            gs[item] = _this.globalStyle.optionsStyle[item];
          }
        }
        var optionsStyle = JSON.stringify(gs);
        var data = {
          sectionsName: sectionsName,
          pagesStorageObj: pagesStorageObj,
          projectData: projectData,
          modalContainer: modalContainer,
          modalFormContainer: modalFormContainer,
          forms: forms,
          video_bg: video_bg,
          gallery: gallery,
          form_section: form_section,
          smooth: smooth,
          parallax: parallax,
          datepicker: datepicker,
          filefield: filefield,
          countup: countup,
          countdown: countdown,
          gMaps: gMaps,
          plugins: plugins,
          optionsStyle: optionsStyle,
          builderStyle: builderStyle,
        };
        data = JSON.stringify(data);
        try {
          if (mode !== "no-storage") {
            delete window.localStorage.projectWeber;
            window.localStorage.projectWeber = data;
          }
        } catch (e) {}
    
        return data;
      }
      _loadProject(data, mode) {
        var _this = this;
        var data = JSON.parse(data);
        if (data.error) {
          var modal = new Modal("supra-modal", "Attention", {
            response: data.error,
          });
          $(modal).modal("show");
    
          _this.removePreloader();
          setTimeout(function () {
            _this.body.classList.remove("first-show");
          }, 1600);
    
          return;
        }
    
        var pagesStorageObj = JSON.parse(data.pagesStorageObj);
        var projectData = JSON.parse(data.projectData);
        var modalContainer = JSON.parse(data.modalContainer);
        var modalFormContainer = JSON.parse(data.modalFormContainer);
        var forms = data.forms ? JSON.parse(data.forms) : [];
        var gMaps = data.gMaps ? JSON.parse(data.gMaps) : [];
        var plugins = data.plugins ? JSON.parse(data.plugins) : [];
        var optionsStyle = data.optionsStyle
          ? JSON.parse(data.optionsStyle)
          : builderOptions.globalStyle;
        Core.prototype._videoBg = JSON.parse(data.video_bg);
        Core.prototype._owlGallery = JSON.parse(data.gallery);
        Core.prototype._formSection = JSON.parse(data.form_section);
        Core.prototype._smooth = JSON.parse(data.smooth);
        Core.prototype._parallax = JSON.parse(data.parallax);
        Core.prototype._datepicker = JSON.parse(data.datepicker);
        Core.prototype._filefield = JSON.parse(data.filefield);
        Core.prototype._countup = JSON.parse(data.countup);
        Core.prototype._countdown = JSON.parse(data.countdown);
    
        _this.triggerImport = true;
    
        var modeEdit = "edit-sections";
    
        if (mode === "import") {
          var datas = _this._prepareContentPagesToSave("no-storage");
    
          _this.pages.clearPagesObjInArray();
        }
        _this.main.innerHTML = "";
    
        if (typeof projectData === "string") {
          projectData = projectData.replace(/spr-outline-control/gi, "");
          _this.main.innerHTML = projectData;
        } else {
          _this.main.appendChild(projectData);
        }
    
        var panels = document.querySelectorAll(".control-panel");
        [].forEach.call(panels, function (panel) {
          panel.parentElement.removeChild(panel);
        });
    
        _this.globalStyle.load(optionsStyle);
        _this.builderStyle.innerHTML = data.builderStyle;
    
        Core.prototype.leftPanel = new LeftPanel();
    
        var sections = _this.main.querySelectorAll("ul.blr-active-page > li");
        var timeLoading = sections.length * 2;
        var loadPreloader = document.querySelector(".progress .load");
        var preloaderLogo = document.querySelector(".supra-preloader .logo-preloader:before");
    
        if (loadPreloader) {
          loadPreloader.style.transition = "width " + timeLoading + "s ease-out";
          loadPreloader.style.width = "100%";
      
        }
    
    
        setTimeout(function () {
          _this.removePreloader();
          setTimeout(function () {
            _this.body.classList.remove("first-show");
          }, 1600);
        }, timeLoading * 1000);
    
        _this.clearGalleryOnPage(_this.main);
        _this.clearInstafeed(_this.main);
    
        var ul = _this.leftPanel.cPanels["project-pages"]
          .getDOMSelf()
          .querySelector("ul");
        if (ul !== null) {
          var pageItems = ul.querySelectorAll("li");
          for (var i = 0; i < pageItems.length - 1; i++) {
            pageItems[i].parentNode.removeChild(pageItems[i]);
          }
        }
        var pages = _this.main.parentElement.querySelectorAll(".main > ul");
        var activePage = _this.main.parentElement.querySelector(
          ".main > ul.blr-active-page"
        );
    
        var popups = this.main.querySelectorAll(".modal.show");
        Array.prototype.forEach.call(popups, function (popup) {
          popup.classList.remove("show");
          popup.parentElement.removeAttribute("style");
        });
    
        var offcanvas = _this.main.querySelectorAll("nav ~ .show");
        [].forEach.call(offcanvas, function (el) {
          el.classList.remove("show");
        });
    
        pagesStorageObj = pagesStorageObj.filter(function (Obj) {
          return Obj;
        });
    
        _this._style.html = _this.main.children[0];
    
        Array.prototype.forEach.call(pages, function (page) {
          var pageHTML = null;
          pageHTML = page;
    
          var i = 0;
          while (pagesStorageObj[i].id !== page.dataset.id * 1) {
            i++;
          }
          var pageStgObj = pagesStorageObj[i];
    
          var pageObj = new Page({
            name: page.dataset.name,
            id: _this.pages.getPagesObjInArray().length,
            mode: "load",
            pageHTML: pageHTML,
            htmlText: pageStgObj.html,
          });
    
          _this.pages.setPagesObjInArray(pageObj);
    
    
          if (page.classList.contains("blr-active-page")) {
            Core.prototype.activePageObject = pageObj;
          }
    
          pageObj.setPageTitle(pageStgObj._title, true);
          pageObj.setPageFavicon(pageStgObj._favicon, true);
          pageObj.setMetaDes(pageStgObj._metaDes, true);
          pageObj.setMetaKey(pageStgObj._metaKey, true);
          pageObj.setJs(pageStgObj._metaJs, true);
          pageObj.preloader = pageStgObj.preloader;
        });
    
        Core.prototype.modalContainer.innerHTML = modalContainer;
        Core.prototype.modalFormContainer.innerHTML = modalFormContainer;
        Core.prototype.forms = forms;
        Core.prototype.gMaps = gMaps;
        Core.prototype.plugins = plugins;
    
        _this.reloadScript(activePage);
        _this._reloadVideoBg(activePage, "run");
    
        _this._setControlsElement(activePage.dataset.name, "edit-sections");
        _this._changePageMode(activePage, modeEdit);
        _this.leftPanel.cPanels["sections"].listenerSectionsMouseDown(activePage);
        Core.prototype._idActivePage = activePage.dataset.id;
    
        _this.leftPanel.cPanels["project-pages"]._addProjectPagesToRightSide();
    
        _this.popupThumb.querySelector(".container-thumb").innerHTML = "";
        _this.popupThumb.classList.remove("collapse-thumb");
        Core.prototype.popupThumbArray = [];
        _this._initThumbnails();
        _this.removeNowrapSuperStructure(activePage);
        _this._clearAnimationByClass(activePage);
        setTimeout(function () {
          _this._refreshParallax(activePage);
        }, 1000);
    
        document.title = _this.getActivePageObject().getPageTitle();
        document.querySelector("link[rel=icon]").href = _this
          .getActivePageObject()
          .getPageFavicon();
    
        _this.triggerImport = false;
      }
      _changePageMode(page, className) {
        var _this = this;
        if (page.className.search(/edit-/i) === -1) {
          page.classList.add(className);
          this.popupThumb.classList.add(className);
        } else {
          var editType = page.className.match(/edit-([^ ]*).*/i);
          page.classList.remove("edit-" + editType[1]);
          page.classList.add(className);
          if (this.popupThumb.className.search(/edit-/i) !== -1) {
            this.popupThumb.classList.remove("edit-" + editType[1]);
          }
          this.popupThumb.classList.add(className);
        }
    
        _this.windowIframe.disMouseDrag = false;
    
        if (className === "edit-typography") {
          _this.windowIframe.disMouseDrag = true;
        }
      }
      nowrapCorrectigPosition(el) {
        var li = this.findParent(el, ["section-item", "modal-dialog"]);
        var controlGroup = li.querySelector(
          ".wrap-control.nowrap" +
            ", .wrap-control-element.nowrap" +
            ", .wrap-control-element-icons.nowrap" +
            ", .wrap-control-element-typography.nowrap"
        );
    
        if (!controlGroup) return;
    
        var boundingEl = el.getBoundingClientRect();
        var boundingLi = li.getBoundingClientRect();
        var topEl = boundingEl.top;
        var leftEl = boundingEl.left;
        var heightEl = boundingEl.height;
        var topLi = boundingLi.top;
        var leftLi = boundingLi.left;
    
        var absoluteTop = topEl - topLi;
        var absoluteBottom = absoluteTop + heightEl;
        var absoluteLeft = leftEl - leftLi;
    
        if (controlGroup.children[0].getBoundingClientRect().height < heightEl) {
          controlGroup.style.top = absoluteTop + "px";
        } else {
          controlGroup.style.top = absoluteBottom + "px";
        }
        controlGroup.style.left = absoluteLeft + "px";
      }
      nowrapCorrectigSectionPosition(el) {
        var li = this.findParent(el, ["section-item", "modal-dialog"]);
        var controlGroup = li.querySelector(
          ".wrap-control.nowrap" +
            ", .wrap-control-element.nowrap" +
            ", .wrap-control-element-icons.nowrap" +
            ", .wrap-control-element-typography.nowrap"
        );
    
        if (!controlGroup) return;
    
        var boundingEl = el.getBoundingClientRect();
        var boundingLi = li.getBoundingClientRect();
        var topEl = boundingEl.top;
        var leftEl = boundingEl.left;
        var heightEl = boundingEl.height;
        var leftLi = boundingLi.left;
    
        var absoluteTop = topEl;
        var absoluteBottom = absoluteTop + heightEl;
        var absoluteLeft = leftEl - leftLi;
    
        controlGroup.style.top = absoluteTop + "px";
        controlGroup.style.bottom = absoluteBottom + "px";
        controlGroup.style.height = heightEl + "px";
    
        controlGroup.style.left = absoluteLeft + "px";
      }
      _stopFormValidation(page) {
        var forms = page.querySelectorAll("form");
        Array.prototype.forEach.call(forms, function (form) {
          form
            .querySelector("button[type=submit]")
            .addEventListener("click", function (e) {
              e.stopPropagation();
              e.preventDefault();
              e.stopImmediatePropagation();
              return false;
            });
        });
      }
      clearControlElements(page) {
        var _this = this;
    
        if (_this._arrListenersEditElementModal.length > 0 && !page) {
          _this._arrListenersEditElementModal.forEach(function (listenter) {
            listenter.el.removeEventListener("mouseover", listenter.func);
          });
        } else {
          if (_this._arrListenersEditElement.length > 0) {
            _this._arrListenersEditElement.forEach(function (listenter) {
              listenter.el.removeEventListener("mouseover", listenter.func);
            });
          }
    
          if (_this._wrapEvetActiveClickEditElement.length > 0) {
            var wEACEE = _this._wrapEvetActiveClickEditElement;
            wEACEE.forEach(function (wrap) {
              wrap.el.removeEventListener("click", wrap.func);
            });
            Core.prototype._wrapEvetActiveClickEditElement = [];
          }
    
          _this.clearControlButtons(page);
    
          if (_this._arrEditorText.length > 0) {
            _this._arrEditorText.forEach(function (editor) {
              if (editor.el.parentElement)
                editor.el.parentElement.removeEventListener(
                  "click",
                  editor.editor.clickIngalleryEditTagA
                );
              editor.el.removeEventListener("mouseup", editor.editor.mouseUp);
              editor.el.removeEventListener("touchend", editor.editor.touchEnd);
              editor.el.removeEventListener("keydown", editor.editor.keyDown);
              editor.el.removeEventListener("mouseleave", editor.editor.mouseLeave);
              editor.el.removeEventListener("paste", editor.editor.paste);
            });
          }
    
          var maps = page.querySelectorAll(".g-map");
          if (maps) {
            Array.prototype.forEach.call(maps, function (map) {
              var li = _this.findParent(map, ["section-item"]);
              map.innerHTML = "";
              map.removeAttribute("style");
              _this.reloadScript(li);
            });
          }
        }
    
        Core.prototype._arrEditorText = [];
        Core.prototype._arrListenersEditElement = [];
      }
      clearControlButtons(page) {
        var _this = this;
        var wraps = page.querySelectorAll(
          ".buttons-control, .buttons-control-form, .buttons-control-typography, .buttons-control-icons"
        );
        Array.prototype.forEach.call(wraps, function (element) {
          _this.clearEditElement(element);
        });
      }
      setStep(func) {
    
        if (this.triggerUndo) {
          this.arrayNextStep.push(func);
    
          if (this._redo.classList.contains("unactive")) {
            this._redo.classList.remove("unactive");
          }
        } else {
          if (!this.triggerRedo) Core.prototype.arrayNextStep = [];
          this.arrayPrevStep.push(func);
    
          if (this.arrayPrevStep.length > 20) {
            this.arrayPrevStep.shift();
          }
    
          if (this._undo.classList.contains("unactive")) {
            this._undo.classList.remove("unactive");
          }
          if (this.arrayNextStep.length < 1) {
            this._redo.classList.add("unactive");
          }
        }
    
        Core.prototype.triggerUndo = false;
        Core.prototype.triggerRedo = false;
      }
      selectElementText(el, win) {
        win = win || window;
        var doc = win.document,
          sel,
          range;
        if (win.getSelection && doc.createRange) {
          sel = win.getSelection();
          range = doc.createRange();
          range.selectNodeContents(el.childNodes[0]);
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (doc.body.createTextRange) {
          range = doc.body.createTextRange();
          range.moveToElementText(el.childNodes[0]);
          range.select();
        }
      }
      _findElForOptions(DOM) {
        var _this = this;
    
        var options = DOM.querySelectorAll(
          ".bg-video, .spr-gallery, form, .parallax, .video-popup," +
            " .image-popup, .smooth, .spr-magnific, [data-aos], .spr-date-field, .spr-file-field, .counter-up," +
            " .countdown, .instafeed, .twitterfeed, .masonry-filter"
        );
        Array.prototype.forEach.call(options, function (el) {
          if (el.classList.contains("bg-video")) {
            _this._videoBg = true;
          }
          if (el.classList.contains("spr-gallery")) {
            _this._owlGallery = true;
          }
          if (el.tagName === "FORM") {
            _this._formSection = true;
          }
          if (el.classList.contains("parallax")) {
            _this._parallax = true;
          }
          if (el.classList.contains("spr-date-field")) {
            _this._datepicker = true;
          }
          if (el.classList.contains("countdown")) {
            _this._countdown = true;
          }
          if (el.classList.contains("counter-up")) {
            _this._countup = true;
          }
          if (el.classList.contains("instafeed")) {
            _this._instafeed = true;
          }
          if (el.classList.contains("twitterfeed")) {
            _this._twitterfeed = true;
          }
          if (el.classList.contains("spr-file-field")) {
            _this._filefield = true;
          }
          if (el.classList.contains("smooth")) {
            _this._smooth = true;
          }
          if (
            el.classList.contains("video-popup") ||
            el.classList.contains("spr-magnific") ||
            el.classList.contains("image-popup")
          ) {
            _this._magnific = true;
    
            _this._setMagnificScript(true);
          }
          if (el.classList.contains("masonry-filter")) {
            _this._masonryFilter = true;
          }
          if (el.dataset.aos) {
            _this._aos = true;
          }
        });
      }
      _clearMasonryFilter(page) {
      }
      _clearOptionClasses(page) {
        var options = page.querySelectorAll("[class*=spr-], [class*=aos-]");
        Array.prototype.forEach.call(options, function (el) {
          if (el.getAttribute("class").match(/(\s?spr-[^\s]*)+/i)) {
            el.setAttribute(
              "class",
              el
                .getAttribute("class")
                .replace(/(\s?spr-[^\s]*)+/gi, "")
                .trim()
            );
            if (el.getAttribute("class") === "") el.removeAttribute("class");
          }
          if (
            el.getAttribute("class") &&
            el.getAttribute("class").match(/(\s?aos-[^\s]*)+/i)
          ) {
            el.setAttribute(
              "class",
              el
                .getAttribute("class")
                .replace(/(\s?aos-[^\s]*)+/gi, "")
                .trim()
            );
            if (el.getAttribute("class") === "") el.removeAttribute("class");
          }
        });
      }
      _resetIndExist() {
        this._videoBg = false;
        this._owlGallery = false;
        this._formSection = false;
        this._parallax = false;
        this._datepicker = false;
        this._countup = false;
        this._countdown = false;
        this._filefield = false;
        this._smooth = false;
        this._magnific = false;
        this._setMagnificScript(false);
      }
      _setMagnificScript(arg) {
        if (arg) {
          this._magnificScript =
            "\n$('.video-popup').each( function(indx, el){" +
            "\n\tif($(el).closest('.gallery').length === 0) {" +
            "\n\t\t$(el).magnificPopup({" +
            "\n\t\t\ttype: 'iframe'," +
            "\n\t\t\tiframe: {" +
            "\n\t\t\t\tpatterns: {" +
            "\n\t\t\t\t\tyoutube: {" +
            "\n\t\t\t\t\t\tindex: 'www.youtube.com/'," +
            "\n\t\t\t\t\t\tid: 'v='," +
            "\n\t\t\t\t\t\tsrc: 'https://www.youtube.com/embed/%id%?autoplay=1'" +
            "\n\t\t\t\t\t}" +
            "\n\t\t\t\t\t, vimeo: {" +
            "\n\t\t\t\t\t\tindex: 'vimeo.com/'," +
            "\n\t\t\t\t\t\tid: '/'," +
            "\n\t\t\t\t\t\tsrc: 'https://player.vimeo.com/video/%id%?autoplay=1'" +
            "\n\t\t\t\t\t}" +
            "\n\t\t\t\t}" +
            "\n\t\t\t}," +
            "\n\t\t\tdisableOn: function() {" +
            "\n\t\t\t\tif (!pAgree || pAgree !== '1') {" +
            "\n\t\t\t\t\treturn false;" +
            "\n\t\t\t\t}" +
            "\n\t\t\t\treturn true;" +
            "\n\t\t\t}" +
            "\n\t\t});" +
            "\n\t}" +
            "\n});" +
            "\n$('.image-popup').each( function(indx, el){" +
            "\n\tif($(el).closest('.gallery').length === 0) {" +
            "\n\t\t$(el).magnificPopup({" +
            "\n\t\t\ttype: 'image'" +
            "\n\t\t});" +
            "\n\t}" +
            "\n});";
        } else {
          this._magnificScript = "";
        }
      }
      ajax(form, urlAjax, callback, callbackError) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = ajaxbase + "?mode=" + urlAjax;
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (xhr.status == 200) {
              if (callback) callback(xhr.responseText);
            } else {
              var res = "There was a problem with the request " + xhr.status;
              if (callbackError) callbackError(xhr, res);
            }
          }
        };
        xhr.send(form);
      }
      _callEdit(URL, nameFile) {
        var _this = this;
        var request = new XMLHttpRequest();
    
        var csrf_field = document
          .getElementById("csrf_field")
          .querySelector("input").value;
        request.responseType = "blob";
        request.onload = function () {
          if (!_this._triggerImport) {
            _this._triggerImport = true;
            var form = new FormData();
            form.append("data", request.response);
            form.append("name_file", nameFile);
            form.append("_token", csrf_field);
            form.append("userId", userId);
            form.append("project_id", project_id);
            form.append("template", template);
            _this.ajax(
              form,
              "import",
              function (data) {
                var preloader = _this.preloader;
                preloader.querySelector(".load").removeAttribute("style");
                document.body.appendChild(preloader);
                document.body.classList.remove("run");
    
                var datas = _this._prepareContentPagesToSave("no-storage");
    
                var popup = _this.main.querySelector(".modal.show");
                _this.windowIframe.jQuery(popup).modal("hide");
                Core.prototype.popupThumbArray = [];
                _this.popupThumb.querySelector(".container-thumb").innerHTML = "";
                _this.popupThumb.className = "supra";
                _this.pages.clearPagesObjInArray();
    
                _this._triggerImport = false;
    
                try {
                  builder._loadProject(data, "load");
                } catch (e) {
                  _this.leftPanel.cPanels["project-pages"].createNewProject();
                  _this.removePreloader();
                  setTimeout(function () {
                    _this.body.classList.remove("first-show");
                  }, 1600);
                }
              },
              function (xhr, res) {
                document.body.removeChild(inputFile);
                _this._triggerImport = false;
              }
            );
          }
        };
        request.open("GET", URL);
        request.send();
      }
      _elementNoPx(elm) {
        let element = elm;
        if (!/\s/g.test(elm)) {
          const elemArray = elm.split("p");
          let elementDuplicate = elemArray[0];
          let elementNoPx =
            elementDuplicate +
            " " +
            elementDuplicate +
            " " +
            elementDuplicate +
            " " +
            elementDuplicate;
          element = elementNoPx;
        } else {
          let elemArray = elm.replace(/px/g, "").split(" ");
          if (elemArray.length === 2) {
            let elementStr =
              elemArray[0] +
              " " +
              elemArray[1] +
              " " +
              elemArray[0] +
              " " +
              elemArray[1];
            element = elementStr;
          } else if (elemArray.length === 3) {
            let elementStr =
              elemArray[0] +
              " " +
              elemArray[1] +
              " " +
              elemArray[2] +
              " " +
              elemArray[1];
            element = elementStr;
          } else if (elemArray.length === 4) {
            let elementStr =
              elemArray[0] +
              " " +
              elemArray[1] +
              " " +
              elemArray[2] +
              " " +
              elemArray[3];
            element = elementStr;
          }
        }
        return element;
      }
      _blockingDivHidder(disabledElm, globalStyleDiv, clickedFrom){
          let uls = Core.prototype.main.querySelectorAll("ul");
          let cameFrom = clickedFrom || null;
    
          
          if(clickedFrom.nodeName === 'STYLE') return
          Object.values(uls).forEach((ul, idx) => {
            if (
              cameFrom.classList.contains("blr-active-page") &&
              cameFrom.hasChildNodes() &&
              cameFrom.firstElementChild.nodeName == "DIV"
            ) {
              globalStyleDiv.style.overflowY = 'hidden'
              disabledElm.style.display = 'flex'
            } else {
              globalStyleDiv.style.overflowY = 'auto'
              disabledElm.style.display = 'none'
            }
    
          })  
      }
      _checkSave_N_Dom(element, saveBtn){
        let uls = Core.prototype.main.querySelectorAll("ul");
        Object.values(uls).forEach((ul, idx) => {
          if (
            ul.classList.contains("blr-active-page") &&
            ul.hasChildNodes()
          ) {
    
            if(ul.children[0].nodeName == "DIV"){
              if(element.classList.contains("download")) return element.classList.add("disabled")
              element.setAttribute("disabled", "");
              element.parentElement.style.display = "none";
              element.parentElement.style.opacity = "0.5";        
            }else{
              if(element.classList.contains("download")) return element.classList.remove("disabled")
              if (saveBtn.hasAttribute("disabled") && !element.classList.contains("download")) {
                element.parentElement.style.display = "block";
                element.parentElement.style.opacity = "1";
                element.removeAttribute("disabled");
              }
            }
    
          }
        });
      }
      _checkTheIframDom(){
        let _this = this
        let saveBtn = document.querySelector("#saveBtn__save .db")
        let uls = Core.prototype.main.querySelectorAll("ul");
        let blockingDiv = document.querySelector("#sidebar_contentHeader-right .global-style__container .before__getting-element")
        let globalStyle = document.querySelector("#sidebar_contentHeader-right .global-style__container")
    
    
        Object.values(uls).forEach((ul) => {
          if (
            ul.classList.contains("blr-active-page") &&
            ul.hasChildNodes()       
          ) {
            if(ul.children[0].nodeName == "DIV"){
              saveBtn.setAttribute("disabled", "");
              globalStyle.style.overflowY = 'hidden'
              blockingDiv.style.display = "flex"
            }else{
              saveBtn.removeAttribute("disabled");
              globalStyle.style.overflowY = 'auto'
              blockingDiv.style.display = "none"
            }
          }
        })
    
      }
      _DeleteTransformFromAttribute(DOM){
        let sections;
        if(DOM.classList.contains('main')) {
           sections = DOM.querySelectorAll("ul > li")
        } else sections = DOM.querySelectorAll("li")
        sections.forEach(section => {
          if(section.dataset.name.includes("slider")) {
            let swiperWrapper = section.querySelector(".swiper-wrapper")
            swiperWrapper.style.transform = 'translate3d(0px, 0px, 0px)'
          }
        })
      }

      checkifitworked(){
        console.log(`i'm working`);
      }
    
  }
  
export default Core;
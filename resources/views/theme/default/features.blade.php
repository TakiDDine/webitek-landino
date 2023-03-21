@extends('theme.default.layouts.website')

@section('title')

    لاندينو | المميزات
    
@endsection

@section('head')

    <!-- Primary Meta Tags -->
    <title>لاندينو | من نحن</title>
    <meta name="title" content="لاندينو | من نحن">
    <meta name="description"
        content="لاندينو هي فريق من المصممين والمبدعين ، يعملون على مساعدة المسوقين والمهتمين بالتجارة الإلكترونية من أجل جني المزيد من الأرباح">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://landino.io/features">
    <meta property="og:title" content="لاندينو | من نحن">
    <meta property="og:description"
        content="لاندينو هي فريق من المصممين والمبدعين ، يعملون على مساعدة المسوقين والمهتمين بالتجارة الإلكترونية من أجل جني المزيد من الأرباح">
    <meta property="og:image" content="https://landino.io/public/front/social-preview.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://landino.io/features">
    <meta property="twitter:title" content="لاندينو | من نحن">
    <meta property="twitter:description"
        content="لاندينو هي فريق من المصممين والمبدعين ، يعملون على مساعدة المسوقين والمهتمين بالتجارة الإلكترونية من أجل جني المزيد من الأرباح">
    <meta property="twitter:image" content="https://landino.io/public/front/social-preview.png">

@endsection

@section('content')
    <link rel="stylesheet" href="/public/assets/css/features.css">

    @include('theme.partials.header')

    <section class="bg-gray-100 border-b py-8 main-content">

        <h1 class="w-full mt-16 text-5xl font-black leading-tight text-center text-gray-800">
            أنشىء صفحة هبوط في خمس دقائق !
        </h1>

        <p class="text-center text-gray-500 mt-4">
            الآن أصبح بإمكانك إنشاء صفحات بيع احترافية ، بسهولة وبدون معرفة في التصميم و البرمجة<br> ، الأمر بسيط جداً ،
            اختر القالب والتصميم الذي يعجبك ، قم بتعديل النصوص والصور
        </p>

        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="relative">
                    <h3 class="text-2xl font-extrabold text-gray-800 tracking-tight sm:text-3xl">
                        القوالب
                    </h3>
                    <p class="mt-4 text-lg text-gray-500">
                        يمكنك بسهولة وبسرعة تحديد أحد القوالب الجاهزة لدينا وتحريرها ونشرها حسب رغبتك. نعم ، لم تعد حملاتك
                        الإعلانية مضطرة إلى الانتظار أيامًا وأسابيع للعملية المتكررة والمدمرة ، فقط من أجل تصميم صفحات
                        الهبوط وبرمجتها. استخدام هذه القوالب مجاني وسيزداد عددها كل شهر
                    </p>
                    <dl class="mt-10 space-y-10">
                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-12 text-lg leading-6 font-medium text-gray-800">قم باختيار التصميم الذي يعجبك
                                </p>
                            </dt>
                            <dd class="mt-2 ml-12 text-base text-gray-500">
                                لأن لدينا عشرات التصاميم لمختلف أنواع صفحات الهبوط والمبيعات سوف تجد التصميم الذي يناسبك من
                                اجل ان تبدأ بسرعة ولا توجد حاجة للبدء من الصفر

                            </dd>
                        </div>
                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-12 text-lg leading-6 font-medium text-gray-800">تركيب واضافة المحتوى
                                </p>
                            </dt>
                            <dd class="mt-2 ml-12 text-base text-gray-500">
                                الامر سهل للغاية فقط اضغط على النصوص وتستطيع ان تقوم بالتعديل عليها مباشرة

                            </dd>
                        </div>
                        <div class="relative">
                            <dt>
                                <div
                                    class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-12 text-lg leading-6 font-medium text-gray-800">انت جاهز للانطلاق
                                </p>
                            </dt>
                            <dd class="mt-2 ml-12 text-base text-gray-500">
                                بعدما قمت بإتمام التصميم وكتابة المحتوى وإدخال الصور والفيديوهات التي تعجبك
                                يمكنك معاينة الصفحة بشكل مباشر وتجربتها على الهاتف … كل ما عليك الان هو تحميل الصفحة
                                وتركيبها على استضافتك أو استخدام رابط وبدأ البيع مباشرة
                            </dd>
                        </div>
                    </dl>
                </div>
                <div class="mt-10 mx-6 relative lg:mt-4" aria-hidden="true">
                    <img class="relative mx-auto rounded-xl shadow-xl"
                        src="//getcoldturkey.com/assets/img/features/web-blocking.png"
                        alt="Screenshot of website blocking features">
                </div>
            </div>
        </div>
        <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="my-12 sm:my-16 lg:my-24">
                <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-2xl lg:px-8 lg:max-w-3xl">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-800">
                        قل وداعاً للإستضافات والدومينات المحدودة ..
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                        سوف تحصل على رابط خاص لكل صفحة هبوط ، جاهز من أجل أن تقوم باستخدامه في حملاتك الإعلانية

                    </p>
                </div>
                <div class="mt-12 mx-6">
                    <img class="shadow-xl rounded-xl mx-auto" src="//getcoldturkey.com/assets/img/features/block-page.png"
                        alt="Screenshot of block page">
                </div>
            </div>
            <div class="my-12 sm:my-16 lg:my-24">
                <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-2xl lg:px-8 lg:max-w-3xl">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-800">
                        فوائد لا غنى عنها
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                        نعلم أنه يوجد هناك العديد من المواقع تقدم هذه الخدمة <br> ، لكننا نحن الأفضل، لأننا نركز على تجربة
                        المستخدم
                    </p>
                </div>
            </div>
        </div>
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="relative mt-12 sm:mt-16 lg:mt-24">
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div class="lg:col-start-2">
                        <dl class="mt-10 space-y-10">
                            <div class="relative">
                                <dt>
                                    <div
                                        class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p class="ml-12 text-lg leading-6 font-medium text-gray-800">حفظ الصفحة واستخدامها
                                        وتعديلها عدة مرات
                                    </p>
                                </dt>
                                <dd class="mt-2 ml-12 text-base text-gray-500">
                                    بعد انتهائك من صفحة هبوط ، يمكنك حفظ القالب من أجل استخدامها مرة أخرى دون الحاجة الى
                                    العودة الى العمل من جديد
                                </dd>
                            </div>
                            <div class="relative">
                                <dt>
                                    <div
                                        class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p class="ml-12 text-lg leading-6 font-medium text-gray-800">تحميل الصفحة ورفعها الى
                                        استضافتك أو موقعك الخاص
                                    </p>
                                </dt>
                                <dd class="mt-2 ml-12 text-base text-gray-500">
                                    يمكنك كذلك تحميل ملفات العمل الذي قمت به ، إذا كنت ترغب في رفعه في استضافة خاصة
                                </dd>
                            </div>
                            <div class="relative">
                                <dt>
                                    <div
                                        class="absolute flex items-center justify-center h-8 w-8 rounded-md bg-blue text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p class="ml-12 text-lg leading-6 font-medium text-gray-800">
                                        صناعة نموذج الطلب بناء على فكرتك الخاصة
                                    </p>
                                </dt>
                                <dd class="mt-2 ml-12 text-base text-gray-500">
                                    سواء كنت تقوم باضافة نماذج الدفع عن الإستلام
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div class="mt-10 mx-6 relative lg:mt-0 lg:col-start-1">
                        <img class="relative mx-auto rounded-xl shadow-xl"
                            src="//getcoldturkey.com/assets/img/features/app-blocking.png"
                            alt="Screenshot of application blocking">
                    </div>
                </div>
            </div>
            <div class="my-12 sm:my-16 lg:my-24">
                <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-2xl lg:px-8 lg:max-w-3xl">
                    <h3 class="text-3xl font-extrabold tracking-tight text-gray-800">
                        هل انت جاهز لبدء الاستخدام
                    </h3>
                    <p class="mt-4 text-lg text-gray-500">
                        <a href="/register" class="btn btn--blue">
                            نعم انا جاهز اريد التسجيل الان
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>


    @include('theme.partials.footer')

@endsection

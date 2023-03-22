@extends('website.layout')

@section('title')
    لاندينو | الأسعار
@endsection

@section('head')

    <!-- Primary Meta Tags -->
    <title>لاندينو | الأسعار</title>
    <meta name="title" content="لاندينو | الأسعار">
    <meta name="description"
        content="أسعار لاندينو ، مناسبة لجميع الفئات ، أسعار معقولة مقارنة بنتائج وفوائد الأداة ، هي فرصة لكل مهتم بالتجارة الإلكترونية والتسويق">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://landino.io/pricing">
    <meta property="og:title" content="لاندينو | الأسعار">
    <meta property="og:description"
        content="أسعار لاندينو ، مناسبة لجميع الفئات ، أسعار معقولة مقارنة بنتائج وفوائد الأداة ، هي فرصة لكل مهتم بالتجارة الإلكترونية والتسويق">
    <meta property="og:image" content="">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://landino.io/pricing">
    <meta property="twitter:title" content="لاندينو | الأسعار">
    <meta property="twitter:description"
        content="أسعار لاندينو ، مناسبة لجميع الفئات ، أسعار معقولة مقارنة بنتائج وفوائد الأداة ، هي فرصة لكل مهتم بالتجارة الإلكترونية والتسويق">
    <meta property="twitter:image" content="">

@endsection

@section('content')
    <link rel="stylesheet" href="/public/assets/css/pricing.css">
    @include('website.partials.header')
    <section class="bg-gray-100 border-b py-8  main-content">
        <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full mt-16 text-5xl font-black leading-tight text-center text-gray-800">
                سعر الإشتراك في متناول الجميع
            </h1>
            <h3 class="w-full mt-8 px-12 text-xl leading-tight text-center text-gray-500">
                اذا كنت غير متأكد هو السعر ، نحن نتفهم ذلك . لماذا لا تقوم بالتسجيل وتجربته مجاناً ، قبل أن تقوم باتخاذ
                القرار الصحيح.
            </h3>
            <div class="mt-8 sm:mt-12">
                <div class="relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                        <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                            <h3 class="text-2xl font-extrabold text-gray-800 sm:text-3xl">
                                السعر لا يقارن بالفوائد والنتائج التي سوف تحصل عليها
                            </h3>
                            <p class="mt-6 text-base text-gray-500">
                                السعر يناسب جميع الفئات ، يمكنك لأي فئة أن تبدأ الآن بالإستفادة من خدمات لاندينو ، لم نرد ان
                                تكون خدامتنا حكراً على أحد … القرار الصحيح ليس بحاجة الى الكثير من التفكير
                            </p>
                            <div class="mt-8">
                                <div class="flex items-center">
                                    <h4
                                        class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-purple-600">
                                        على ماذا ستحصل؟
                                    </h4>
                                    <div class="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">على قوالب جاهزة بدون حدود</p>
                                    </li>
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">رابط خاص من أجل نشر صفحتك في حملاتك الإعلانية
                                        </p>
                                    </li>
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">حفظ الصفحات واستكمال العمل عليها</p>
                                    </li>
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">استخراج الصفحات وتحميلها</p>
                                    </li>
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">الدعم الفني</p>
                                    </li>
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">كل التحديثات والقوالب الجديدة دائماً مجاناً
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                            <p class="text-lg leading-6 font-medium text-gray-800">اشترك الآن</p>
                            <div class="mt-4 flex items-center justify-center text-3xl font-extrabold text-gray-800">
                                <span class="paddle-gross" data-product="598305">$24.00</span>
                            </div>
                            <div class="mt-6">
                                <div class="rounded-md shadow">
                                    <a id="purchase-button" data-upsell-title="Bundle Offer"
                                        data-upsell-text="Save 25% when buying all three products together"
                                        data-upsell-action="Yes, please!" data-allow-quantity="false" data-theme="none"
                                        class="paddle_button cursor-pointer flex w-full items-center justify-center px-5 py-3 border border-transparent text-lg font-bold rounded-md text-gray-50 bg-blue"
                                        data-init="true" data-product="598305" data-upsell="650405">
                                        اشترك الآن
                                    </a>
                                </div>
                            </div>
                            <div class="mt-4 text-sm">
                                <p class="font-medium text-xs text-gray-500" style="max-width: 200px">
                                    اشترك الآن واحصل على كل المميزات ،الأداة الأفضل في العالم العربي لصناعة صفحات الهبوط
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full mt-16 text-5xl font-black leading-tight text-center text-gray-800">
                أسئلة شائعة
            </h2>
            <h3 class="w-full mt-8 px-12 text-xl leading-tight text-center text-gray-500">
                لقد أجبنا على بعض الأسئلة الأكثر شيوعًا
            </h3>
            <div class="divide-y-2 divide-gray-200 py-24 px-12">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-800">
                            ما هو لاندينو
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            هي أداة صنعت خصيصاً من أجل أصحاب التجارة الإلكتروني و للشركات الناشئة والصانعين. يمكنك إنشاء
                            صفحة ويب احترافية ورائعة بسرعة !
                        </dd>
                    </div>
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-800">
                            هل احتاج لمعرفة البرمجة من أجل استخدام لاندينو ؟
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            لا أبداً ، انت لا تحتاج الى اي معرفة برمجية ، وبالرغم من ذلك ، اذا كنت مبرمج وتريد اضافة أكواد
                            خاصة فأنت قادر على ذلك
                        </dd>
                    </div>
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-800">
                            هل سوف افقد الأعمال التي قمت بها اذا لم استطع الدفع
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            لا تقلق ، سوف تبقى الصفحات والمشاريع التي قمت بها هناك حتى تقوم باسترجاع حسابك ، لا نحذف اي شيء
                            !

                        </dd>
                    </div>
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-800">
                            هل هناك رسوم منفصلة لاستخدام القوالب الجاهزة؟
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            لا ، تم تصميم جميع القوالب بواسطة مصممينا ذوي الخبرة ويمكن استخدامها مجانًا.
                        </dd>
                    </div>
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-800">
                            هل هناك حد لعدد الزيارات؟
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            لا ، ليس لدينا قيود على الزيارات. تتعامل البنية التحتية القوية لخادم لاندينو بسهولة مع ملايين
                            الزيارات يوميًا. أصغر مهمة لدينا هي إزالة المخاوف الفنية من فرق التسويق والشركات.

                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>

    @include('website.partials.footer')


@endsection

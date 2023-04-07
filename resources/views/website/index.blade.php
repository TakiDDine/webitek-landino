@extends('website.layout')

@section('title')
    لاندينو | أنشئ صفحة هبوط في خمس دقائق
@endsection


@section('head')
    <!-- Primary Meta Tags -->
    <meta name="title" content="لاندينو | أنشئ صفحة هبوط في خمس دقائق">
    <meta name="description"
        content="أداة لاندينو ، هي الأداة الأفضل في العالم العربي في صناعة صفحات الهبوط ، بدون حاجة لمعرفة في البرمجة والتصميم">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{env('APP_URL')}}">
    <meta property="og:title" content="لاندينو | أنشئ صفحة هبوط في خمس دقائق">
    <meta property="og:description"
        content="أداة لاندينو ، هي الأداة الأفضل في العالم العربي في صناعة صفحات الهبوط ، بدون حاجة لمعرفة في البرمجة والتصميم">
    <meta property="og:image" content="{{asset('/front/social-preview.png')}}">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://landino.io/">
    <meta property="twitter:title" content="لاندينو | أنشئ صفحة هبوط في خمس دقائق">
    <meta property="twitter:description"
        content="أداة لاندينو ، هي الأداة الأفضل في العالم العربي في صناعة صفحات الهبوط ، بدون حاجة لمعرفة في البرمجة والتصميم">
    <meta property="twitter:image" content="{{asset('/front/social-preview.png')}}">
@endsection

@section('title')
    الصفحة الرئيسية
@endsection

@section('content')
    <div class="page page-home">
        @include('website.partials.header')
        <section class="section section--nopadd intro">
            <div class="intro-center">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">
                            أنشئ صفحة بيع
                            <span class="slogan-wrapper">
                                <b>بسرعة</b>
                                <b>بسهولة</b>
                                <b>بأقل تكلفة</b>
                            </span>
                            أحسن من أي مكان آخر
                        </h2>
                        <p class="section-subtitle">
                            يمكنك إنشاء صفحة بيع خاصة بك ، لاكتساب العملاء المحتملين ، وإطلاق حملتك الإعلانية في أقرب وقت ،
                            لا تقلق ، لن يكون عليك تكاليف كثيرة من أجل صناعة صفحة هبوط
                        </p>
                    </header>
                </div>
                <div class="intro-img">


                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439.317"
                        height="286.307" viewBox="0 0 439.317 286.307">
                        <defs>
                            <filter id="Path_25800" x="114.272" y="120.605" width="151.642" height="74.911"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="2" dy="7" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="5" result="blur" />
                                <feFlood flood-color="#8a9baf" flood-opacity="0.702" />
                                <feComposite operator="in" in2="blur" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25720" x="94.81" y="0" width="275.745" height="218.461"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-10" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="15" result="blur-2" />
                                <feFlood flood-color="#40464e" flood-opacity="0.169" />
                                <feComposite operator="in" in2="blur-2" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5291" x="127.454" y="30.869" width="230.839" height="58.753"
                                filterUnits="userSpaceOnUse">
                                <feOffset dy="4" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="7.5" result="blur-3" />
                                <feFlood flood-color="#8a9baf" flood-opacity="0.102" />
                                <feComposite operator="in" in2="blur-3" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25765" x="138.673" y="105.577" width="119.365" height="89.452"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="9" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="12.5" result="blur-4" />
                                <feFlood flood-color="#8a9baf" flood-opacity="0.439" />
                                <feComposite operator="in" in2="blur-4" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5613" x="0" y="49.035" width="229.965" height="187.792"
                                filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="18" result="blur-5" />
                                <feFlood flood-color="#40464e" flood-opacity="0.251" />
                                <feComposite operator="in" in2="blur-5" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5512" x="101.343" y="133.017" width="50.456" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-6" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-6" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5512-2" x="262.562" y="77.172" width="50.456" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-7" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-7" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5615" x="101.343" y="152.927" width="50.456" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-8" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-8" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5513" x="116.463" y="139.947" width="35.292" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-9" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-9" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5513-2" x="277.682" y="84.102" width="35.292" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-10" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-10" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Rectangle_5614" x="116.463" y="159.867" width="35.292" height="15.387"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="2" result="blur-11" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.149" />
                                <feComposite operator="in" in2="blur-11" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25804" x="16.26" y="104.217" width="114.111" height="112.635"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-11" dy="14" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="11" result="blur-12" />
                                <feFlood flood-color="#8a9baf" flood-opacity="0.251" />
                                <feComposite operator="in" in2="blur-12" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25718" x="44.146" y="115.217" width="72.111" height="70.635"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-4" dy="4" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="4" result="blur-13" />
                                <feFlood flood-color="#3f98ee" flood-opacity="0.122" />
                                <feComposite operator="in" in2="blur-13" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25803" x="44.109" y="130.439" width="30.576" height="30.576"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-2" dy="2" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="3.5" result="blur-14" />
                                <feFlood flood-color="#0078ef" flood-opacity="0.251" />
                                <feComposite operator="in" in2="blur-14" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Ellipse_1306" x="144.54" y="130.495" width="24.888" height="24.888"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-4" dy="4" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="3" result="blur-15" />
                                <feFlood flood-color="#40464e" flood-opacity="0.122" />
                                <feComposite operator="in" in2="blur-15" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Ellipse_1307" x="144.54" y="150.665" width="24.888" height="24.888"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-4" dy="4" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="3" result="blur-16" />
                                <feFlood flood-color="#40464e" flood-opacity="0.122" />
                                <feComposite operator="in" in2="blur-16" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Union_4" x="117.269" y="154.738" width="92.808" height="92.986"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-5.968" dy="1.989" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="6.465" result="blur-17" />
                                <feFlood flood-color="#0a1626" flood-opacity="0.161" />
                                <feComposite operator="in" in2="blur-17" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25807" x="261.122" y="38.961" width="178.195" height="204.237"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="-10" dy="-5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="15" result="blur-18" />
                                <feFlood flood-color="#40464e" flood-opacity="0.2" />
                                <feComposite operator="in" in2="blur-18" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                            <filter id="Path_25800-2" x="169.187" y="209.921" width="154.206" height="76.386"
                                filterUnits="userSpaceOnUse">
                                <feOffset dx="2" dy="7" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="5" result="blur-19" />
                                <feFlood flood-color="#8a9baf" flood-opacity="0.702" />
                                <feComposite operator="in" in2="blur-19" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g id="Groupe_18" data-name="Groupe 18" transform="translate(-6224.59 2721.16)">
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25800)">
                                <path id="Path_25800-3" data-name="Path 25800"
                                    d="M116.046,12.238C78.325,30.245,35.469,41.005,0,0"
                                    transform="translate(132.24 130.18) rotate(7)" fill="none" stroke="#fff"
                                    stroke-linecap="round" stroke-width="2" stroke-dasharray="3 7" opacity="0.55" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25720)">
                                <path id="Path_25720-2" data-name="Path 25720"
                                    d="M6.368,0H179.377a6.213,6.213,0,0,1,6.368,6.045V122.412a6.213,6.213,0,0,1-6.368,6.045H6.368A6.213,6.213,0,0,1,0,122.412V6.045A6.213,6.213,0,0,1,6.368,0Z"
                                    transform="translate(149.81 40)" fill="#a5aebc" />
                            </g>
                            <circle id="Ellipse_21" data-name="Ellipse 21" cx="1.208" cy="1.208" r="1.208"
                                transform="translate(6387.826 -2677.02)" fill="#fff" opacity="0.5" />
                            <path id="Path_25724" data-name="Path 25724"
                                d="M1.208,0A1.208,1.208,0,1,1,0,1.208,1.208,1.208,0,0,1,1.208,0Z"
                                transform="translate(6384.022 -2677.02)" fill="#fff" opacity="0.5" />
                            <circle id="Ellipse_23" data-name="Ellipse 23" cx="1.208" cy="1.208" r="1.208"
                                transform="translate(6380.218 -2677.02)" fill="#fff" opacity="0.5" />
                            <path id="Rectangle_5486" data-name="Rectangle 5486"
                                d="M16,0H169.939c8.837,0,16.027,4.16,16.027,13l-.027,91.166a16,16,0,0,1-16,16H16a16,16,0,0,1-16-16l.092-91.18C.092,4.146,7.163,0,16,0Z"
                                transform="translate(6374.423 -2671.03)" fill="#fdfdfd" />
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5291)">
                                <path id="Rectangle_5291-2" data-name="Rectangle 5291" d="M0,0H185.839V13.753H0Z"
                                    transform="translate(149.95 49.37)" fill="#fff" />
                            </g>
                            <line id="Line_1853" data-name="Line 1853" x1="185.839"
                                transform="translate(6374.524 -2658.062)" fill="none" stroke="#f2f2f2" stroke-width="0.5" />
                            <rect id="Rectangle_5297" data-name="Rectangle 5297" width="19.427" height="7.491" rx="1"
                                transform="translate(6379.246 -2668.773)" fill="#62a9ef" />
                            <rect id="Rectangle_5297-2" data-name="Rectangle 5297" width="19.427" height="7.491" rx="1"
                                transform="translate(6400.762 -2668.772)" fill="#e3eef9" />
                            <path id="Path_25673" data-name="Path 25673" d="M5.55,0H0V5.55H5.55Z"
                                transform="translate(6550.239 -2667.652)" fill="none" />
                            <path id="Path_25674" data-name="Path 25674"
                                d="M3,7.156H6.277l-.828-.83L5.775,6,7.163,7.388,5.775,8.775l-.326-.326.828-.83H3Z"
                                transform="translate(6547.933 -2672.264)" fill="#8a9baf" />
                            <line id="Line_1884" data-name="Line 1884" y2="13.739" transform="translate(6545.811 -2671.801)"
                                fill="none" stroke="#f2f2f2" stroke-width="0.5" />
                            <line id="Line_1885" data-name="Line 1885" y2="13.739" transform="translate(6531.317 -2671.801)"
                                fill="none" stroke="#f2f2f2" stroke-width="0.5" />
                            <path id="Path_25653" data-name="Path 25653" d="M0,0H5.55V5.55H0Z"
                                transform="translate(6535.862 -2667.579)" fill="none" />
                            <path id="Path_25654" data-name="Path 25654"
                                d="M5.806,4.279a1.685,1.685,0,0,0,.013-.2,1.273,1.273,0,0,0-.016-.2l.441-.343A.107.107,0,0,0,6.271,3.4l-.418-.72a.106.106,0,0,0-.128-.047l-.52.208a1.532,1.532,0,0,0-.352-.2l-.078-.55A.1.1,0,0,0,4.671,2H3.835a.1.1,0,0,0-.1.088l-.078.55a1.573,1.573,0,0,0-.352.2l-.52-.208a.1.1,0,0,0-.128.047l-.42.723a.1.1,0,0,0,.026.132l.441.343a1.217,1.217,0,0,0,0,.4l-.441.343a.107.107,0,0,0-.026.132l.418.719a.106.106,0,0,0,.128.047l.52-.208a1.532,1.532,0,0,0,.352.2l.078.55a.106.106,0,0,0,.1.088h.835a.1.1,0,0,0,.1-.088l.078-.55a1.573,1.573,0,0,0,.352-.2l.52.208a.1.1,0,0,0,.128-.047l.418-.719a.1.1,0,0,0-.026-.132Zm-1.553.576a.779.779,0,1,1,.783-.779.779.779,0,0,1-.783.779Z"
                                transform="translate(6534.385 -2668.885)" fill="#8a9baf" />
                            <path id="Path_25706" data-name="Path 25706"
                                d="M.638,0h18.97a.694.694,0,0,1,.638.74V6.658a.694.694,0,0,1-.638.74H.638A.694.694,0,0,1,0,6.658V.74A.694.694,0,0,1,.638,0Z"
                                transform="translate(6461.5 -2668.552)" fill="#e3eef9" opacity="0.6" />
                            <path id="Path_25703" data-name="Path 25703" d="M0,0H4.189V4.438H0Z"
                                transform="translate(6475.986 -2667.073)" fill="none" />
                            <path id="Path_25707" data-name="Path 25707"
                                d="M.633,0h9.49V7.4H.633A.693.693,0,0,1,0,6.658V.74A.693.693,0,0,1,.633,0Z"
                                transform="translate(6461.5 -2668.552)" fill="#8a9baf" opacity="0.6" />
                            <path id="Path_25704" data-name="Path 25704" d="M0,0H4.189V4.438H0Z"
                                transform="translate(6464.992 -2667.073)" fill="none" />
                            <rect id="Rectangle_5719" data-name="Rectangle 5719" width="3.56" height="2.225"
                                transform="translate(6464.695 -2666.447)" fill="none" stroke="#fff" stroke-width="0.3" />
                            <line id="Line_1920" data-name="Line 1920" x2="1.78" transform="translate(6465.659 -2663.258)"
                                fill="none" stroke="#fff" stroke-width="0.3" />
                            <line id="Line_1921" data-name="Line 1921" y1="0.89" transform="translate(6466.549 -2664.148)"
                                fill="none" stroke="#fff" stroke-width="0.3" />
                            <rect id="Rectangle_5720" data-name="Rectangle 5720" width="2.077" height="3.189"
                                transform="translate(6475.599 -2666.447)" fill="none" stroke="#b2bfcd" stroke-width="0.3" />
                            <circle id="Ellipse_1317" data-name="Ellipse 1317" cx="0.222" cy="0.222" r="0.222"
                                transform="translate(6476.415 -2663.94)" fill="#b2bfcd" />
                            <path id="Path_25811" data-name="Path 25811" d="M0,0V93.806"
                                transform="translate(6543.329 -2644.78)" fill="none" stroke="#0ef" stroke-linecap="round"
                                stroke-width="1" stroke-dasharray="2 4" />
                            <rect id="Rectangle_5489" data-name="Rectangle 5489" width="77.192" height="2.946"
                                transform="translate(6458.254 -2603.682)" fill="#b0bfd1" opacity="0.44" />
                            <rect id="Rectangle_5490" data-name="Rectangle 5490" width="77.192" height="1.768"
                                transform="translate(6458.254 -2594.844)" fill="#b0bfd1" opacity="0.44" />
                            <rect id="Rectangle_5491" data-name="Rectangle 5491" width="77.192" height="1.768"
                                transform="translate(6458.254 -2590.131)" fill="#b0bfd1" opacity="0.44" />
                            <rect id="Rectangle_5492" data-name="Rectangle 5492" width="28.575" height="1.768"
                                transform="translate(6507.165 -2585.417)" fill="#b0bfd1" opacity="0.44" />
                            <line id="Line_1888" data-name="Line 1888" y2="95.675" transform="translate(6391.104 -2644.78)"
                                fill="none" stroke="#0ef" stroke-linecap="round" stroke-width="1" stroke-dasharray="2 4" />
                            <line id="Line_1894" data-name="Line 1894" x2="152.039"
                                transform="translate(6391.258 -2562.283)" fill="none" stroke="#0ef" stroke-width="1" />
                            <path id="Path_25812" data-name="Path 25812"
                                d="M1.762,0H32.394a1.762,1.762,0,0,1,1.762,1.762V5.728A1.762,1.762,0,0,1,32.394,7.49H1.762A1.762,1.762,0,0,1,0,5.728V1.762A1.762,1.762,0,0,1,1.762,0Z"
                                transform="translate(6450.128 -2565.885)" fill="#0ef" />
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25765)">
                                <path id="Path_25765-2" data-name="Path 25765"
                                    d="M2.4,0H41.965a2.4,2.4,0,0,1,2.4,2.4v9.652a2.4,2.4,0,0,1-2.4,2.4H2.4a2.4,2.4,0,0,1-2.4-2.4V2.4A2.4,2.4,0,0,1,2.4,0Z"
                                    transform="translate(181.17 134.08)" fill="#3f98ee" />
                            </g>
                            <path id="Path_25687" data-name="Path 25687"
                                d="M3.729,3.426H4.942v-.91h.91L4.335,1,2.819,2.516h.91Zm-.3.3h-.91v-.91L1,4.335,2.516,5.851v-.91h.91Zm4.245.606L6.154,2.819v.91h-.91V4.942h.91v.91Zm-2.729.91H3.729v.91h-.91L4.335,7.67,5.851,6.154h-.91Z"
                                transform="translate(6408.946 -2584.257)" fill="#fff" />
                            <path id="Path_25688" data-name="Path 25688" d="M0,0H7.277V7.277H0Z"
                                transform="translate(6409.643 -2583.56)" fill="none" />
                            <path id="Path_25689" data-name="Path 25689" d="M0,0H7.277V7.277H0Z"
                                transform="translate(6438.751 -2583.56)" fill="none" />
                            <path id="Path_25690" data-name="Path 25690"
                                d="M4.606,10a.606.606,0,1,0,.606.606A.606.606,0,0,0,4.606,10Zm3.638,0a.606.606,0,1,0,.606.606A.606.606,0,0,0,8.244,10ZM6.426,10a.606.606,0,1,0,.606.606A.606.606,0,0,0,6.426,10Z"
                                transform="translate(6435.964 -2590.528)" fill="#fff" />
                            <path id="Path_25691" data-name="Path 25691"
                                d="M5.729,3a2.729,2.729,0,0,0,0,5.458A.455.455,0,0,0,6.065,7.7a.453.453,0,0,1,.34-.755h.537A1.517,1.517,0,0,0,8.458,5.426,2.59,2.59,0,0,0,5.729,3ZM4.061,5.729A.454.454,0,1,1,4.383,5.6a.455.455,0,0,1-.322.133Zm.91-1.213a.454.454,0,1,1,.322-.133.455.455,0,0,1-.322.133Zm1.516,0a.454.454,0,1,1,.322-.133.455.455,0,0,1-.322.133ZM7.4,5.729A.454.454,0,1,1,7.722,5.6a.455.455,0,0,1-.322.133Z"
                                transform="translate(6422.107 -2585.65)" fill="#fff" />
                            <path id="Path_25692" data-name="Path 25692" d="M0,0H7.277V7.277H0Z"
                                transform="translate(6424.197 -2583.56)" fill="none" />
                            <path id="Path_25887" data-name="Path 25887"
                                d="M8.613,0A8.613,8.613,0,1,1,0,8.613,8.613,8.613,0,0,1,8.613,0Z"
                                transform="translate(6518.394 -2626.779)" fill="#d6dde5" />
                            <path id="Path_25666" data-name="Path 25666" d="M0,0H7.044V7.044H0Z"
                                transform="translate(6523.387 -2621.775)" fill="none" />
                            <path id="Path_25846" data-name="Path 25846"
                                d="M6.7,1H1.9a.906.906,0,0,0-.9.9V6.7a.906.906,0,0,0,.9.9H6.7a.906.906,0,0,0,.9-.9V1.9A.906.906,0,0,0,6.7,1Zm-4.8.44H6.7a.465.465,0,0,1,.465.465V5.531L5.558,3.926a.22.22,0,0,0-.311,0L3.827,5.345l-.953-.572a.219.219,0,0,0-.241.01L1.44,5.635V1.9a.465.465,0,0,1,.46-.46ZM6.7,7.163H1.9A.465.465,0,0,1,1.44,6.7V6.176l1.331-.951.977.586a.22.22,0,0,0,.269-.033L5.4,4.393,7.163,6.154V6.7a.465.465,0,0,1-.463.463Z"
                                transform="translate(6522.607 -2622.555)" fill="#fff" />
                            <path id="Path_25847" data-name="Path 25847"
                                d="M7.88,8.761A.88.88,0,1,0,7,7.88.88.88,0,0,0,7.88,8.761Zm0-1.321a.44.44,0,1,1-.44.44A.44.44,0,0,1,7.88,7.44Z"
                                transform="translate(6517.928 -2627.234)" fill="#fff" />
                            <rect id="Rectangle_4" data-name="Rectangle 4" width="57" height="42" rx="4"
                                transform="translate(6397 -2648)" fill="#d6dde5" />
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5613)">
                                <rect id="Rectangle_5613-2" data-name="Rectangle 5613" width="121.965" height="79.792"
                                    rx="5" transform="translate(54 100.03)" fill="#fafafb" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5512)">
                                <rect id="Rectangle_5512-3" data-name="Rectangle 5512" width="38.456" height="3.387"
                                    rx="1.694" transform="translate(112.34 134.02)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5512-2)">
                                <rect id="Rectangle_5512-4" data-name="Rectangle 5512" width="38.456" height="3.387"
                                    rx="1.694" transform="translate(273.56 78.17)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5615)">
                                <rect id="Rectangle_5615-2" data-name="Rectangle 5615" width="38.456" height="3.387"
                                    rx="1.694" transform="translate(112.34 153.93)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5513)">
                                <rect id="Rectangle_5513-3" data-name="Rectangle 5513" width="23.292" height="3.387"
                                    rx="1.694" transform="translate(127.46 140.95)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5513-2)">
                                <rect id="Rectangle_5513-4" data-name="Rectangle 5513" width="23.292" height="3.387"
                                    rx="1.694" transform="translate(288.68 85.1)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Rectangle_5614)">
                                <rect id="Rectangle_5614-2" data-name="Rectangle 5614" width="23.292" height="3.387"
                                    rx="1.694" transform="translate(127.46 160.87)" fill="#8a9baf" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25804)">
                                <path id="Path_25804-2" data-name="Path 25804"
                                    d="M23.055,0C35.789,0,46.111,9.992,46.111,22.318S35.788,44.635,23.055,44.635,0,34.643,0,22.317,10.322,0,23.054,0Z"
                                    transform="translate(61.26 124.22)" fill="#f6f9fd" stroke="#fff" stroke-width="2" />
                            </g>
                            <path id="Path_25717" data-name="Path 25717" d="M-7.5,283.5"
                                transform="translate(6298.275 -2911.695)" fill="none" stroke="#5621cc"
                                stroke-miterlimit="10" stroke-width="2" />
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25718)">
                                <path id="Path_25718-2" data-name="Path 25718"
                                    d="M10.555,283.5c12.734,0,23.056,9.992,23.056,22.318s-10.322,22.318-23.056,22.317S-12.5,318.143-12.5,305.817"
                                    transform="translate(73.65 -159.28)" fill="none" stroke="#3f96eb" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25803)">
                                <path id="Path_25803-2" data-name="Path 25803"
                                    d="M4.788,0A4.788,4.788,0,1,1,0,4.788,4.788,4.788,0,0,1,4.788,0Z"
                                    transform="translate(56.61 138.94)" fill="#3e97ed" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Ellipse_1306)">
                                <circle id="Ellipse_1306-2" data-name="Ellipse 1306" cx="3.444" cy="3.444" r="3.444"
                                    transform="translate(157.54 135.49)" fill="#3faeee" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Ellipse_1307)">
                                <circle id="Ellipse_1307-2" data-name="Ellipse 1307" cx="3.444" cy="3.444" r="3.444"
                                    transform="translate(157.54 155.66)" fill="#0ef" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Union_4)">
                                <path id="Union_4-2" data-name="Union 4"
                                    d="M40.328,44.7,30.282,35.467l-4.093,6.742a1.439,1.439,0,0,1-2.586-.186L12.731,14.761A1.44,1.44,0,0,1,14.6,12.89L41.854,23.763a1.441,1.441,0,0,1,.186,2.586l-7.387,4.719,9.812,9.419a1.439,1.439,0,0,1,0,2.036l-2.1,2.176a1.437,1.437,0,0,1-2.036,0ZM3.625,23.912a1.439,1.439,0,0,1,0-2.036l3.2-3.2a1.439,1.439,0,1,1,2.036,2.034l-3.2,3.2a1.438,1.438,0,0,1-2.037,0ZM1.441,15.677a1.44,1.44,0,1,1,0-2.879H5.968a1.44,1.44,0,1,1,0,2.879ZM7.483,9.52l-3.2-3.2A1.439,1.439,0,0,1,6.319,4.283l3.2,3.2A1.441,1.441,0,0,1,7.483,9.52Zm11.2-.662a1.439,1.439,0,0,1,0-2.036l3.2-3.2a1.44,1.44,0,1,1,2.036,2.037l-3.2,3.2a1.446,1.446,0,0,1-2.037,0ZM12.8,5.968V1.438a1.442,1.442,0,0,1,2.884,0v4.53a1.442,1.442,0,0,1-2.884,0Z"
                                    transform="matrix(0.97, 0.23, -0.23, 0.97, 152.95, 172.15)" fill="#fff" />
                            </g>
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25807)">
                                <path id="Path_25807-2" data-name="Path 25807"
                                    d="M7.895,0H80.3a7.834,7.834,0,0,1,7.9,7.772v98.692a7.834,7.834,0,0,1-7.895,7.772H7.895A7.834,7.834,0,0,1,0,106.463V7.772A7.834,7.834,0,0,1,7.9,0Z"
                                    transform="translate(316.12 88.96)" fill="#fcfcfd" />
                            </g>
                            <path id="Path_25715" data-name="Path 25715"
                                d="M1718.74,4759.03s4.592-1.808,7.284,5.133,5.748-3.251,5.748-3.251,4.125-14.358,10.623-4.242,8.645,7.1,11.348,5.733,6.166-5.746,8.762,1.759,8.167,9.062,11.342,1.507,7.984-27.754,14.95-16.323,14.09,5.23,20.5-2.972c1.616-2.065,6.69-8.735,6.69-8.735"
                                transform="translate(4822.902 -7331.409)" fill="none" stroke="#3e97ed"
                                stroke-linecap="round" stroke-width="2" />
                            <path id="Path_25809" data-name="Path 25809" d="M8.3,0A8.3,8.3,0,1,1,0,8.3,8.3,8.3,0,0,1,8.3,0Z"
                                transform="translate(6630.82 -2602.711)" fill="#f4346f" opacity="0.09" />
                            <path id="Path_25810" data-name="Path 25810"
                                d="M3.372,0A3.372,3.372,0,1,1,0,3.372,3.372,3.372,0,0,1,3.372,0Z"
                                transform="translate(6635.75 -2597.814)" fill="#3081e9" />
                            <path id="Path_25716" data-name="Path 25716"
                                d="M1714.16,4771.94s5.86-.5,9.64,2.135,6.075-2.135,6.075-2.135,5.45-6.767,9.381,0,7.484,8.074,10.487,5.562,6.994-3.355,9.7.859,9.372,2.952,10.384,1.208,7.023-9.055,13.774-4.5,14.367,12.289,17.529,14.607"
                                transform="translate(4827.773 -7335.499)" fill="none" stroke="#b0bfd1"
                                stroke-linecap="round" stroke-width="2" stroke-dasharray="3 6" opacity="0.27" />
                            <circle id="Ellipse_25" data-name="Ellipse 25" cx="2.323" cy="2.323" r="2.323"
                                transform="translate(6575.013 -2535.52)" fill="#3081e9" />
                            <circle id="Ellipse_26" data-name="Ellipse 26" cx="2.323" cy="2.323" r="2.323"
                                transform="translate(6615.931 -2535.52)" fill="#bebebe" />
                            <g transform="matrix(1, 0, 0, 1, 6224.59, -2721.16)" filter="url(#Path_25800-2)">
                                <path id="Path_25800-4" data-name="Path 25800"
                                    d="M109.2-25.371C103.5-12.057,33.776,21.7-5.21-18.141"
                                    transform="translate(191.26 247.43) rotate(7)" fill="none" stroke="#fff"
                                    stroke-linecap="round" stroke-width="5" stroke-dasharray="8 15" opacity="0.55" />
                            </g>
                            <path id="Path_25666-2" data-name="Path 25666" d="M0,0H7.044V7.044H0Z"
                                transform="translate(6466.387 -2621.775)" fill="none" />
                            <path id="Path_25846-2" data-name="Path 25846"
                                d="M6.7,1H1.9a.906.906,0,0,0-.9.9V6.7a.906.906,0,0,0,.9.9H6.7a.906.906,0,0,0,.9-.9V1.9A.906.906,0,0,0,6.7,1Zm-4.8.44H6.7a.465.465,0,0,1,.465.465V5.531L5.558,3.926a.22.22,0,0,0-.311,0L3.827,5.345l-.953-.572a.219.219,0,0,0-.241.01L1.44,5.635V1.9a.465.465,0,0,1,.46-.46ZM6.7,7.163H1.9A.465.465,0,0,1,1.44,6.7V6.176l1.331-.951.977.586a.22.22,0,0,0,.269-.033L5.4,4.393,7.163,6.154V6.7a.465.465,0,0,1-.463.463Z"
                                transform="translate(6465.607 -2622.555)" fill="#fff" />
                            <path id="Path_25847-2" data-name="Path 25847"
                                d="M7.88,8.761A.88.88,0,1,0,7,7.88.88.88,0,0,0,7.88,8.761Zm0-1.321a.44.44,0,1,1-.44.44A.44.44,0,0,1,7.88,7.44Z"
                                transform="translate(6460.928 -2627.234)" fill="#fff" />
                            <path id="Path_25666-3" data-name="Path 25666" d="M0,0H25.753V25.753H0Z"
                                transform="translate(6413.032 -2640.484)" fill="none" />
                            <path id="Path_25846-3" data-name="Path 25846"
                                d="M21.84,1H4.29A3.312,3.312,0,0,0,1,4.29V21.84a3.312,3.312,0,0,0,3.29,3.29H21.84a3.312,3.312,0,0,0,3.29-3.29V4.29A3.312,3.312,0,0,0,21.84,1ZM4.29,2.609H21.84a1.7,1.7,0,0,1,1.7,1.7V17.566L17.664,11.7a.8.8,0,0,0-1.137,0l-5.192,5.188L7.852,14.794a.8.8,0,0,0-.881.037L2.609,17.946V4.29A1.7,1.7,0,0,1,4.29,2.609ZM21.84,23.532H4.29A1.7,1.7,0,0,1,2.609,21.84V19.924l4.866-3.477,3.572,2.142a.8.8,0,0,0,.983-.121l5.056-5.064,6.446,6.438v2a1.7,1.7,0,0,1-1.693,1.693Z"
                                transform="translate(6412.836 -2640.68)" fill="#fff" />
                            <path id="Path_25847-3" data-name="Path 25847"
                                d="M10.217,13.436A3.217,3.217,0,1,0,7,10.215,3.217,3.217,0,0,0,10.217,13.436Zm0-4.83a1.609,1.609,0,1,1-1.609,1.609A1.609,1.609,0,0,1,10.217,8.606Z"
                                transform="translate(6411.666 -2641.848)" fill="#fff" />
                            <path id="Path_25715-2" data-name="Path 25715"
                                d="M1718.74,4748.441s2.319-.913,3.679,2.592,2.9-1.642,2.9-1.642,2.083-7.251,5.365-2.143,4.366,3.586,5.731,2.9,3.114-2.9,4.425.888,4.125,4.577,5.728.761,4.032-14.017,7.55-8.244,7.116,2.642,10.353-1.5c.816-1.043,3.379-4.411,3.379-4.411"
                                transform="matrix(0.875, -0.485, 0.485, 0.875, 2498.679, -5925.102)" fill="none"
                                stroke="#3e97ed" stroke-linecap="round" stroke-width="2" />
                        </g>
                    </svg>






                </div>
                <div class="intro-mobile">
                    <img src="/assets/media/home/intro-mobile.svg?v1" alt="Intro illustration">
                    <a href="" target="_blank" class="btn btn--blue btn--wide"> ابدأ الآن ! مجاناً </a>
                </div>
        </section>
        <article class="section section--about section--bg blue"
            style="background-image:url('/assets/media/home/about/about-bg.jpg')">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title">لماذا لاندينو
                    </h2>
                    <p class="section-subtitle">

                        نحن نساعدك على أن تكون أكثر نجاحًا في الفضاء الرقمي من أي وقت مضى

                    </p>
                </header>
                <div class="layout layout--about layout--3">
                    <div class="layout-col">
                        <section class="card-b">
                            <div class="card-b__icon"><img src="/assets/media/home/about/sell.svg" alt=""></div>
                            <h3 class="card-b__title">
                                زيادة مبيعاتك

                            </h3>
                            <p class="card-b__text">

                                تساعدك لاندينو على زيادة معدل التحويل وبالتالي مبيعات عملك من خلال إنشاء صفحة هبوط احترافية
                                بسرعة وبتكلفة منخفضة.

                            </p>
                        </section>
                    </div>
                    <div class="layout-col">
                        <section class="card-b">
                            <div class="card-b__icon"><img src="/assets/media/home/about/code.svg" alt=""></div>
                            <h3 class="card-b__title">
                                أنت لا تحتاج إلى البرمجة

                            </h3>
                            <p class="card-b__text">
                                يمكنك سحب وإفلات محرر تحت تصرفك بسهولة ودون الحاجة إلى البرمجة لإنشاء
                                صفحات البيع.
                            </p>
                        </section>
                    </div>
                    <div class="layout-col">
                        <section class="card-b">
                            <div class="card-b__icon"><img src="/assets/media/home/about/server.svg" alt=""></div>
                            <h3 class="card-b__title">
                                لا تحتاج الى البدأ من الصفر
                            </h3>
                            <p class="card-b__text">


                                صفحاتك المقصودة.



                            </p>
                        </section>
                    </div>
                </div>
                <div class="section-footer section-footer--about">
                    <div class="section-footer__btnWrap">
                        <a href="" class="btn btn--white" target="_blank"> أنشأ حسابك الآن مجاناً </a>
                        <button class="btn">
                            <svg class="icon icon--phone-call">
                                <use xlink:href="/assets/images/sprite.svg?v1.3.5#phone-call"></use>
                            </svg>
                            أحصل على مساعدة
                        </button>
                    </div>
                </div>
            </div>
        </article>
        <article class="section section--nopaddbottom">
            <div class="container">
                <div class="layout layout--flip">
                    <div class="layout-col">
                        <section class="card-a">
                            <h3 class="card-a__title">
                                محرر على الإنترنت لبناء الصفحات بكل سهولة

                            </h3>
                            <p class="card-a__text">
                                باستخدام محرر Landik عبر الإنترنت ، يمكنك بسهولة وبسرعة تحديد أحد القوالب الجاهزة لدينا
                                وتحريرها ونشرها حسب رغبتك. نعم ، لم تعد حملاتك الإعلانية مضطرة إلى الانتظار أيامًا وأسابيع
                                للعملية المتكررة والمدمرة لتصميم الصفحات المقصودة وبرمجتها.


                            </p>
                        </section>
                    </div>
                    <div class="layout-col first">
                        <div class="feature feature--editor">

                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="807.189" height="651.544" viewBox="0 0 807.189 651.544">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_3" data-name="Rectangle 3" width="807.189" height="651.544"
                                            fill="none" />
                                    </clipPath>
                                    <filter id="Path_25726" x="-0.004" y="22.308" width="796.255" height="629.236"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dy="45" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="49.5" result="blur" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.451" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Rectangle_5527" x="341.456" y="296.228" width="257.644" height="47.489"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-10" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="5" result="blur-2" />
                                        <feFlood flood-color="#376599" flood-opacity="0.051" />
                                        <feComposite operator="in" in2="blur-2" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Rectangle_5528" x="341.456" y="333.048" width="257.644" height="35.212"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-10" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="5" result="blur-3" />
                                        <feFlood flood-color="#376599" flood-opacity="0.051" />
                                        <feComposite operator="in" in2="blur-3" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Rectangle_5529" x="341.456" y="348.908" width="257.644" height="35.212"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-10" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="5" result="blur-4" />
                                        <feFlood flood-color="#376599" flood-opacity="0.051" />
                                        <feComposite operator="in" in2="blur-4" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Rectangle_5530" x="414.426" y="364.758" width="184.68" height="35.212"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-10" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="5" result="blur-5" />
                                        <feFlood flood-color="#376599" flood-opacity="0.051" />
                                        <feComposite operator="in" in2="blur-5" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="ines-alvarez-fdez-493717-unsplash" x="6.526" y="141.898" width="402.677"
                                        height="390.677" filterUnits="userSpaceOnUse">
                                        <feOffset dx="-12" dy="22" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="35" result="blur-6" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.251" />
                                        <feComposite operator="in" in2="blur-6" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_25765" x="167.09" y="355.927" width="204.167" height="117.1"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-5" dy="9" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="12.5" result="blur-7" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.251" />
                                        <feComposite operator="in" in2="blur-7" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Ellipse_1293" x="530.006" y="238.048" width="69.094" height="69.094"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-10" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="5" result="blur-8" />
                                        <feFlood flood-color="#376599" flood-opacity="0.071" />
                                        <feComposite operator="in" in2="blur-8" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_25725" x="41.032" y="0.004" width="766.165" height="303.305"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-12" dy="36" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="43.5" result="blur-9" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.251" />
                                        <feComposite operator="in" in2="blur-9" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Component_6_1" data-name="Component 6 – 1" clip-path="url(#clip-path)">
                                    <g id="Group_12827" data-name="Group 12827" transform="translate(123.526 125.808)">
                                        <g id="Group_12816" data-name="Group 12816">
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)" filter="url(#Path_25726)">
                                                <path id="Path_25726-2" data-name="Path 25726"
                                                    d="M16.636,0H482.619a16.636,16.636,0,0,1,16.636,16.636V315.6a16.636,16.636,0,0,1-16.636,16.636H16.636A16.636,16.636,0,0,1,0,315.6V16.636A16.636,16.636,0,0,1,16.636,0Z"
                                                    transform="translate(148.5 125.81)" fill="#fff" opacity="0.7" />
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)"
                                                filter="url(#Rectangle_5527)">
                                                <rect id="Rectangle_5527-2" data-name="Rectangle 5527" width="227.644"
                                                    height="17.489" transform="translate(366.46 299.23)" fill="#c1cad4" />
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)"
                                                filter="url(#Rectangle_5528)">
                                                <rect id="Rectangle_5528-2" data-name="Rectangle 5528" width="227.644"
                                                    height="5.212" transform="translate(366.46 336.05)" fill="#c1cad4" />
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)"
                                                filter="url(#Rectangle_5529)">
                                                <rect id="Rectangle_5529-2" data-name="Rectangle 5529" width="227.644"
                                                    height="5.212" transform="translate(366.46 351.91)" fill="#c1cad4" />
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)"
                                                filter="url(#Rectangle_5530)">
                                                <rect id="Rectangle_5530-2" data-name="Rectangle 5530" width="154.68"
                                                    height="5.212" transform="translate(439.43 367.76)" fill="#c1cad4" />
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)"
                                                filter="url(#ines-alvarez-fdez-493717-unsplash)">
                                                <rect id="ines-alvarez-fdez-493717-unsplash-2"
                                                    data-name="ines-alvarez-fdez-493717-unsplash" width="192.677"
                                                    height="180.677" rx="7" transform="translate(123.53 224.9)"
                                                    fill="rgba(0,0,0,0)" />
                                            </g>
                                            <g id="Group_12854" data-name="Group 12854"
                                                transform="translate(86.064 258.619)">
                                                <g transform="matrix(1, 0, 0, 1, -209.59, -384.43)"
                                                    filter="url(#Path_25765)">
                                                    <path id="Path_25765-2" data-name="Path 25765"
                                                        d="M7,0H122.167a7,7,0,0,1,7,7V35.1a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z"
                                                        transform="translate(209.59 384.43)" fill="#3f98ee" />
                                                </g>
                                                <g id="baseline-open_with-24px--inject-1"
                                                    transform="translate(11.296 10.253)">
                                                    <path id="Path_25687" data-name="Path 25687"
                                                        d="M8.944,8.061h3.531V5.413h2.648L10.709,1,6.3,5.413H8.944Zm-.883.883H5.413V6.3L1,10.709l4.413,4.413V12.475H8.061Zm12.357,1.765L16,6.3V8.944H13.357v3.531h2.648v2.648Zm-7.944,2.648H8.944v2.648H6.3l4.413,4.413,4.413-4.413H12.475Z"
                                                        transform="translate(-0.117 -0.117)" fill="#fff" />
                                                    <path id="Path_25688" data-name="Path 25688" d="M0,0H21.184V21.184H0Z"
                                                        fill="none" />
                                                </g>
                                                <g id="baseline-more_horiz-24px--inject-1"
                                                    transform="translate(96.032 10.253)">
                                                    <path id="Path_25689" data-name="Path 25689" d="M0,0H21.184V21.184H0Z"
                                                        fill="none" />
                                                    <path id="Path_25690" data-name="Path 25690"
                                                        d="M5.765,10A1.765,1.765,0,1,0,7.53,11.765,1.765,1.765,0,0,0,5.765,10Zm10.592,0a1.765,1.765,0,1,0,1.765,1.765A1.765,1.765,0,0,0,16.357,10Zm-5.3,0a1.765,1.765,0,1,0,1.765,1.765A1.765,1.765,0,0,0,11.057,10Z"
                                                        transform="translate(-0.469 -1.173)" fill="#fff" />
                                                </g>
                                                <g id="baseline-color_lens-24px--inject-1"
                                                    transform="translate(53.664 10.253)">
                                                    <path id="Path_25691" data-name="Path 25691"
                                                        d="M10.944,3a7.944,7.944,0,0,0,0,15.888,1.325,1.325,0,0,0,.98-2.216,1.319,1.319,0,0,1,.989-2.2h1.562a4.415,4.415,0,0,0,4.413-4.413C18.888,6.16,15.331,3,10.944,3ZM6.089,10.944a1.322,1.322,0,1,1,.937-.387A1.324,1.324,0,0,1,6.089,10.944ZM8.737,7.413a1.322,1.322,0,1,1,.937-.387,1.324,1.324,0,0,1-.937.387Zm4.413,0a1.322,1.322,0,1,1,.937-.388,1.324,1.324,0,0,1-.937.388Zm2.65,3.531a1.322,1.322,0,1,1,.936-.388,1.324,1.324,0,0,1-.936.388Z"
                                                        transform="translate(-0.352 -0.352)" fill="#fff" />
                                                    <path id="Path_25692" data-name="Path 25692" d="M0,0H21.184V21.184H0Z"
                                                        fill="none" />
                                                </g>
                                            </g>
                                            <g transform="matrix(1, 0, 0, 1, -123.53, -125.81)" filter="url(#Ellipse_1293)">
                                                <circle id="Ellipse_1293-2" data-name="Ellipse 1293" cx="19.547" cy="19.547"
                                                    r="19.547" transform="translate(555.01 241.05)" fill="#c1cad4" />
                                            </g>
                                            <g id="Group_13329" data-name="Group 13329"
                                                transform="translate(442.819 126.598)">
                                                <path id="Path_25666" data-name="Path 25666" d="M0,0H15.986V15.986H0Z"
                                                    fill="none" />
                                                <g id="Group_13140" data-name="Group 13140" transform="translate(0.5 0.5)">
                                                    <path id="Path_25846" data-name="Path 25846"
                                                        d="M13.933,1H3.054A2.056,2.056,0,0,0,1,3.054V13.933a2.056,2.056,0,0,0,2.054,2.054H13.933a2.057,2.057,0,0,0,2.054-2.054V3.054A2.056,2.056,0,0,0,13.933,1ZM3.054,2H13.933a1.056,1.056,0,0,1,1.055,1.055v8.23L11.344,7.641a.5.5,0,0,0-.706,0L7.417,10.862l-2.163-1.3a.5.5,0,0,0-.548.022L2,11.519V3.054A1.056,1.056,0,0,1,3.054,2ZM13.933,14.988H3.054A1.056,1.056,0,0,1,2,13.933V12.747l3.02-2.158,2.217,1.33a.5.5,0,0,0,.61-.075L10.991,8.7l4,4v1.236a1.056,1.056,0,0,1-1.058,1.052Z"
                                                        transform="translate(-1 -1)" fill="#fff" />
                                                    <path id="Path_25847" data-name="Path 25847"
                                                        d="M9,11A2,2,0,1,0,7,9,2,2,0,0,0,9,11ZM9,8A1,1,0,1,1,8,9,1,1,0,0,1,9,8Z"
                                                        transform="translate(-4.003 -4.003)" fill="#fff" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Group_12853" data-name="Group 12853" transform="translate(183.462 94.464)">
                                        <g id="Group_12812" data-name="Group 12812" transform="translate(0.07)">
                                            <g transform="matrix(1, 0, 0, 1, -183.53, -94.46)" filter="url(#Path_25725)">
                                                <path id="Path_25725-2" data-name="Path 25725"
                                                    d="M7.333,0h490.5c4.05,0,7.332,1.841,7.332,4.112V38.193c0,2.271-3.283,4.112-7.332,4.112H7.333C3.283,42.3,0,40.463,0,38.192V4.112C0,1.841,3.283,0,7.333,0Z"
                                                    transform="translate(183.53 94.5)" fill="#fff" />
                                            </g>
                                            <path id="Line_1853" data-name="Line 1853" d="M505.08,0"
                                                transform="translate(0.224 21.736)" fill="none" stroke="#8a9baf"
                                                stroke-width="1" opacity="0.2" />
                                            <g id="Group_12760" data-name="Group 12760" transform="translate(13.961 9.687)">
                                                <rect id="Rectangle_5297" data-name="Rectangle 5297" width="56.532"
                                                    height="23.961" rx="4" fill="#3f98ee" />
                                            </g>
                                            <g id="Group_12785" data-name="Group 12785" transform="translate(76.324 9.687)">
                                                <g id="Group_12823" data-name="Group 12823">
                                                    <rect id="Rectangle_5297-2" data-name="Rectangle 5297" width="56.532"
                                                        height="23.961" rx="4" fill="#eef4fb" />
                                                </g>
                                            </g>
                                            <g id="Group_12727" data-name="Group 12727"
                                                transform="translate(475.926 15.005)">
                                                <g id="baseline-keyboard_backspace-24px--inject-1">
                                                    <path id="Path_25673" data-name="Path 25673"
                                                        d="M16.152,0H0V16.152H16.152Z" fill="none" />
                                                    <path id="Path_25674" data-name="Path 25674"
                                                        d="M3,9.365h9.536L10.127,6.949,11.076,6l4.038,4.038-4.038,4.038-.949-.949,2.409-2.416H3Z"
                                                        transform="translate(-0.981 -1.962)" fill="#b8c2ce" />
                                                </g>
                                            </g>
                                            <line id="Line_1884" data-name="Line 1884" y2="43.508"
                                                transform="translate(463.037 -0.582)" fill="none" stroke="#8a9baf"
                                                stroke-width="1" opacity="0.15" />
                                            <line id="Line_1885" data-name="Line 1885" y2="43.508"
                                                transform="translate(420.861 -0.582)" fill="none" stroke="#8a9baf"
                                                stroke-width="1" opacity="0.15" />
                                            <g id="baseline-settings-20px--inject-1" transform="translate(434.087 15.093)">
                                                <path id="Path_25653" data-name="Path 25653" d="M0,0H16.152V16.152H0Z"
                                                    transform="translate(0 0)" fill="none" />
                                                <path id="Path_25654" data-name="Path 25654"
                                                    d="M12.652,8.633a4.9,4.9,0,0,0,.038-.589,3.7,3.7,0,0,0-.046-.589l1.284-1A.311.311,0,0,0,14,6.072L12.789,3.979a.31.31,0,0,0-.372-.136l-1.512.6a4.457,4.457,0,0,0-1.026-.589l-.228-1.6A.3.3,0,0,0,9.347,2H6.916a.3.3,0,0,0-.3.257l-.228,1.6a4.577,4.577,0,0,0-1.026.589l-1.512-.6a.3.3,0,0,0-.372.136L2.266,6.072a.292.292,0,0,0,.076.385l1.284,1a3.54,3.54,0,0,0-.008,1.178l-1.284,1a.311.311,0,0,0-.076.385l1.216,2.093a.31.31,0,0,0,.372.136l1.512-.6a4.457,4.457,0,0,0,1.026.589l.228,1.6a.309.309,0,0,0,.3.257H9.347a.29.29,0,0,0,.3-.257l.228-1.6a4.577,4.577,0,0,0,1.026-.589l1.512.6a.3.3,0,0,0,.372-.136L14,10.015a.292.292,0,0,0-.076-.385ZM8.131,10.31A2.266,2.266,0,1,1,10.41,8.044,2.266,2.266,0,0,1,8.131,10.31Z"
                                                    transform="translate(-0.054 0.019)" fill="#b8c2ce" />
                                            </g>
                                            <g id="Group_12821" data-name="Group 12821"
                                                transform="translate(218.419 9.379)">
                                                <path id="Path_25706" data-name="Path 25706"
                                                    d="M2.148,0H66.04a2.339,2.339,0,0,1,2.148,2.491V22.423a2.339,2.339,0,0,1-2.148,2.491H2.148A2.339,2.339,0,0,1,0,22.423V2.491A2.339,2.339,0,0,1,2.148,0Z"
                                                    transform="translate(0.006 0)" fill="#eef5fb" />
                                                <path id="Path_25703" data-name="Path 25703" d="M0,0H14.108V14.949H0Z"
                                                    transform="translate(48.796 4.983)" fill="none" />
                                                <path id="Path_25707" data-name="Path 25707"
                                                    d="M2.131,0H34.094V24.915H2.131A2.332,2.332,0,0,1,0,22.423V2.491A2.332,2.332,0,0,1,2.131,0Z"
                                                    transform="translate(0.006 0)" fill="#b2bfcd" />
                                                <path id="Path_25704" data-name="Path 25704" d="M0,0H14.108V14.949H0Z"
                                                    transform="translate(11.763 4.983)" fill="none" />
                                            </g>
                                            <g id="Group_13130" data-name="Group 13130"
                                                transform="translate(229.188 16.952)">
                                                <rect id="Rectangle_5719" data-name="Rectangle 5719" width="11.989"
                                                    height="7.493" rx="1" transform="translate(0 0)" fill="none"
                                                    stroke="#fff" stroke-width="1" />
                                                <line id="Line_1920" data-name="Line 1920" x2="5.995"
                                                    transform="translate(3.247 10.741)" fill="none" stroke="#fff"
                                                    stroke-width="1" />
                                                <line id="Line_1921" data-name="Line 1921" y1="2.997"
                                                    transform="translate(6.244 7.743)" fill="none" stroke="#fff"
                                                    stroke-width="1" />
                                            </g>
                                            <g id="Group_13131" data-name="Group 13131"
                                                transform="translate(265.91 16.952)">
                                                <rect id="Rectangle_5720" data-name="Rectangle 5720" width="6.994"
                                                    height="10.741" rx="1" transform="translate(0 0)" fill="none"
                                                    stroke="#b2bfcd" stroke-width="1" />
                                                <circle id="Ellipse_1317" data-name="Ellipse 1317" cx="0.749" cy="0.749"
                                                    r="0.749" transform="translate(2.748 8.445)" fill="#b2bfcd" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>



                        </div>
                    </div>
                </div>
                <div class="layout layout--flip">
                    <div class="layout-col first">
                        <div class="feature feature--templates">


                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="774.981" height="622.036" viewBox="0 0 774.981 622.036">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="774.981" height="622.036"
                                            fill="none" />
                                    </clipPath>
                                    <filter id="Path_25726" x="0" y="6.96" width="774.981" height="615.079"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dy="45" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="49.5" result="blur" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.451" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_25766" x="7.711" y="0" width="453.162" height="378.452"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="25" dy="25" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="35" result="blur-2" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.251" />
                                        <feComposite operator="in" in2="blur-2" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_25734" x="413.159" y="41.552" width="331.168" height="537.368"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dx="-12" dy="12" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="35" result="blur-3" />
                                        <feFlood flood-color="#8a9baf" flood-opacity="0.451" />
                                        <feComposite operator="in" in2="blur-3" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Groupe_15" data-name="Groupe 15" transform="translate(-7150.598 -237)">
                                    <g id="Component_5_1" data-name="Component 5 – 1" transform="translate(7150.598 237)"
                                        clip-path="url(#clip-path)">
                                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_25726)">
                                            <path id="Path_25726-2" data-name="Path 25726"
                                                d="M15.927,0H462.054a15.927,15.927,0,0,1,15.927,15.927V302.152a15.927,15.927,0,0,1-15.927,15.927H15.927A15.927,15.927,0,0,1,0,302.152V15.927A15.927,15.927,0,0,1,15.927,0Z"
                                                transform="translate(148.5 110.46)" fill="#fff" opacity="0.7" />
                                        </g>
                                        <path id="Path_25732" data-name="Path 25732" d="M0,0H30.214V30.214H0Z"
                                            transform="translate(210.281 277.538)" fill="none" />
                                        <g id="Group_12859" data-name="Group 12859" transform="translate(183.766 269.717)">
                                            <g id="Rectangle_5531" data-name="Rectangle 5531" fill="none" stroke="#d2d9df"
                                                stroke-width="2">
                                                <rect width="156.815" height="108.634" rx="7" stroke="none" />
                                                <rect x="1" y="1" width="154.815" height="106.634" rx="6" fill="none" />
                                            </g>
                                            <rect id="Rectangle_5535" data-name="Rectangle 5535" width="69.962"
                                                height="6.474" transform="translate(72.614 41.753)" fill="#ccd4db" />
                                            <rect id="Rectangle_5536" data-name="Rectangle 5536" width="69.727"
                                                height="2.677" transform="translate(72.849 54.81)" fill="#ccd4db" />
                                            <rect id="Rectangle_5537" data-name="Rectangle 5537" width="53.987"
                                                height="2.677" transform="translate(88.588 60.972)" fill="#ccd4db" />
                                            <circle id="Ellipse_1294" data-name="Ellipse 1294" cx="7.113" cy="7.113"
                                                r="7.113" transform="translate(128.35 20.233)" fill="#ccd4db" />
                                            <path id="Path_25733" data-name="Path 25733"
                                                d="M16.529,13.882V5.412A1.416,1.416,0,0,0,15.117,4H2.412A1.416,1.416,0,0,0,1,5.412v8.47a1.416,1.416,0,0,0,1.412,1.412h12.7A1.416,1.416,0,0,0,16.529,13.882ZM6.294,10l1.765,2.125,2.47-3.183L13.7,13.177H3.823Z"
                                                transform="translate(26.308 45.273)" fill="#ccd4db" />
                                            <rect id="Rectangle_5541" data-name="Rectangle 5541" width="29.248"
                                                height="8.356" rx="2" transform="translate(113.575 73.885)"
                                                fill="#ccd4db" />
                                        </g>
                                        <g id="Group_12866" data-name="Group 12866" transform="translate(87.711 80)">
                                            <g transform="matrix(1, 0, 0, 1, -87.71, -80)" filter="url(#Path_25766)">
                                                <path id="Path_25766-2" data-name="Path 25766"
                                                    d="M12,0H231.162a12,12,0,0,1,12,12V156.452a12,12,0,0,1-12,12H12a12,12,0,0,1-12-12V12A12,12,0,0,1,12,0Z"
                                                    transform="translate(87.71 80)" fill="#fff" />
                                            </g>
                                            <rect id="ines-alvarez-fdez-493717-unsplash--inject-2" width="75.155"
                                                height="114.029" rx="5" transform="translate(23.212 27.752)"
                                                fill="rgba(0,0,0,0)" />
                                            <rect id="Rectangle_5535-2" data-name="Rectangle 5535" width="99.501"
                                                height="10.038" transform="translate(121.582 64.743)" fill="#c4cdd7" />
                                            <rect id="Rectangle_5536-2" data-name="Rectangle 5536" width="99.137"
                                                height="4.15" transform="translate(121.946 84.99)" fill="#c4cdd7" />
                                            <rect id="Rectangle_5537-2" data-name="Rectangle 5537" width="83.715"
                                                height="4.15" transform="translate(137.368 94.546)" fill="#c4cdd7" />
                                            <circle id="Ellipse_1294-2" data-name="Ellipse 1294" cx="11.029" cy="11.029"
                                                r="11.029" transform="translate(199.024 31.373)" fill="#c4cdd7" />
                                            <rect id="Rectangle_5541-2" data-name="Rectangle 5541" width="45.352"
                                                height="12.958" rx="2" transform="translate(176.114 114.569)"
                                                fill="#c4cdd7" />
                                            <rect id="Rectangle_5549" data-name="Rectangle 5549" width="45.352"
                                                height="12.958" rx="2" transform="translate(124.283 114.569)"
                                                fill="#c4cdd7" />
                                        </g>
                                        <g id="Group_12864" data-name="Group 12864" transform="translate(353.403 146.877)">
                                            <g id="Rectangle_5531-2" data-name="Rectangle 5531" fill="none" stroke="#d2d9df"
                                                stroke-width="2">
                                                <rect width="156.815" height="108.634" rx="7" stroke="none" />
                                                <rect x="1" y="1" width="154.815" height="106.634" rx="6" fill="none" />
                                            </g>
                                            <g id="Group_12863" data-name="Group 12863"
                                                transform="translate(14.133 17.897)">
                                                <rect id="Rectangle_5535-3" data-name="Rectangle 5535" width="53.046"
                                                    height="6.474" transform="translate(75.396 36.39)" fill="#c9d1da" />
                                                <rect id="Rectangle_5536-3" data-name="Rectangle 5536" width="52.834"
                                                    height="2.677" transform="translate(75.608 49.447)" fill="#c9d1da" />
                                                <rect id="Rectangle_5537-3" data-name="Rectangle 5537" width="41.991"
                                                    height="2.677" transform="translate(86.451 55.61)" fill="#c9d1da" />
                                                <circle id="Ellipse_1294-3" data-name="Ellipse 1294" cx="7.113" cy="7.113"
                                                    r="7.113" transform="translate(114.217 14.87)" fill="#c9d1da" />
                                                <rect id="Rectangle_5542" data-name="Rectangle 5542" width="48.467"
                                                    height="73.537" rx="5" fill="#edf0f3" />
                                                <rect id="Rectangle_5543" data-name="Rectangle 5543" width="15.25"
                                                    height="2.677" transform="translate(17.092 11.555)" fill="#c9d1da" />
                                                <rect id="Rectangle_5544" data-name="Rectangle 5544" width="26.114"
                                                    height="2.677" transform="translate(11.243 17.404)" fill="#c9d1da" />
                                                <rect id="Rectangle_5541-3" data-name="Rectangle 5541" width="25.905"
                                                    height="8.356" rx="2" transform="translate(10.863 56.683)"
                                                    fill="#c9d1da" />
                                                <g id="Rectangle_5545" data-name="Rectangle 5545"
                                                    transform="translate(5.85 39.83)" fill="none" stroke="#cdd5de"
                                                    stroke-width="1">
                                                    <rect width="36.768" height="7.521" rx="2" stroke="none" />
                                                    <rect x="0.5" y="0.5" width="35.768" height="6.521" rx="1.5"
                                                        fill="none" />
                                                </g>
                                                <g id="Rectangle_5546" data-name="Rectangle 5546"
                                                    transform="translate(5.85 28.131)" fill="none" stroke="#cdd5de"
                                                    stroke-width="1">
                                                    <rect width="36.768" height="7.521" rx="2" stroke="none" />
                                                    <rect x="0.5" y="0.5" width="35.768" height="6.521" rx="1.5"
                                                        fill="none" />
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Group_12865" data-name="Group 12865" transform="translate(353.33 269.717)">
                                            <g id="Rectangle_5531-3" data-name="Rectangle 5531" fill="none" stroke="#d2d9df"
                                                stroke-width="2">
                                                <rect width="156.815" height="108.634" rx="7" stroke="none" />
                                                <rect x="1" y="1" width="154.815" height="106.634" rx="6" fill="none" />
                                            </g>
                                            <rect id="Rectangle_5535-4" data-name="Rectangle 5535" width="48.032"
                                                height="6.474" transform="translate(54.317 12.505)" fill="#cdd5de" />
                                            <rect id="Rectangle_5536-4" data-name="Rectangle 5536" width="118.446"
                                                height="2.677" transform="translate(19.22 24.727)" fill="#cdd5de" />
                                            <rect id="Rectangle_5537-4" data-name="Rectangle 5537" width="88.421"
                                                height="2.677" transform="translate(34.262 30.889)" fill="#cdd5de" />
                                            <path id="Path_25745" data-name="Path 25745"
                                                d="M5,0H51.824a5,5,0,0,1,5,5V50.988a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z"
                                                transform="translate(50.138 42.131)" fill="#eff1f3" />
                                            <rect id="Rectangle_5543-2" data-name="Rectangle 5543" width="15.25"
                                                height="2.677" transform="translate(71.03 49.273)" fill="#cdd5de" />
                                            <rect id="Rectangle_5541-4" data-name="Rectangle 5541" width="25.905"
                                                height="8.356" rx="2" transform="translate(65.18 83.078)" fill="#cdd5de" />
                                            <g id="Rectangle_5546-2" data-name="Rectangle 5546"
                                                transform="translate(55.989 69.707)" fill="none" stroke="#cdd5de"
                                                stroke-width="1">
                                                <rect width="44.412" height="7.521" rx="2" stroke="none" />
                                                <rect x="0.5" y="0.5" width="43.412" height="6.521" rx="1.5" fill="none" />
                                            </g>
                                            <g id="Rectangle_5547" data-name="Rectangle 5547"
                                                transform="translate(55.989 58.008)" fill="none" stroke="#cdd5de"
                                                stroke-width="1">
                                                <rect width="44.412" height="7.521" rx="2" stroke="none" />
                                                <rect x="0.5" y="0.5" width="43.412" height="6.521" rx="1.5" fill="none" />
                                            </g>
                                        </g>
                                        <g id="Group_12868" data-name="Group 12868" transform="translate(530.159 134.552)">
                                            <g transform="matrix(1, 0, 0, 1, -530.16, -134.55)" filter="url(#Path_25734)">
                                                <path id="Path_25734-2" data-name="Path 25734"
                                                    d="M9.192,0H111.976c5.077,0,9.192,3.689,9.192,8.24V319.128c0,4.551-4.115,8.24-9.192,8.24H9.192c-5.077,0-9.192-3.689-9.192-8.24V8.24C0,3.689,4.115,0,9.192,0Z"
                                                    transform="translate(530.16 134.55)" fill="#3f98ee" />
                                            </g>
                                            <g id="Group_12867" data-name="Group 12867" transform="translate(26.6 80.3)">
                                                <g id="Groupe_12" data-name="Groupe 12" transform="translate(0 -23)">
                                                    <line id="Ligne_2" data-name="Ligne 2" x2="58"
                                                        transform="translate(3.741 105.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                    <line id="Ligne_3" data-name="Ligne 3" x2="51"
                                                        transform="translate(8.741 109.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                </g>
                                                <g id="Groupe_14" data-name="Groupe 14" transform="translate(0 -107)">
                                                    <line id="Ligne_2-2" data-name="Ligne 2" x2="58"
                                                        transform="translate(3.741 105.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                    <line id="Ligne_3-2" data-name="Ligne 3" x2="51"
                                                        transform="translate(8.741 109.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                </g>
                                                <g id="Groupe_13" data-name="Groupe 13" transform="translate(0 23)">
                                                    <line id="Ligne_2-3" data-name="Ligne 2" x2="58"
                                                        transform="translate(3.741 105.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                    <line id="Ligne_3-3" data-name="Ligne 3" x2="51"
                                                        transform="translate(8.741 109.648)" fill="none" stroke="#b2d6f8"
                                                        stroke-width="1" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <text id="القوالب" transform="translate(7720 497)" fill="#fff" font-size="13"
                                        font-family="Vazir">
                                        <tspan x="0" y="0">القوالب</tspan>
                                    </text>
                                </g>
                            </svg>



                        </div>
                    </div>
                    <div class="layout-col">
                        <section class="card-a">
                            <h3 class="card-a__title">
                                أكثر من 100 قطعة مصممة مسبقًا

                                <br>



                            </h3>
                            <p class="card-a__text">
                                لقد أعد فريق التصميم لدينا بالفعل مجموعة متنوعة من كتل الصفحات المقصودة المستخدمة على نطاق
                                واسع في فئات ومجموعات مختلفة من أجلك. ما عليك سوى اختيار واحد ، وإضافة محتوى النص والصور
                                التي تريدها ، ووضعها في أي مكان على الصفحة المقصودة التي تريدها.


                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </article>
        <div class="section section--nopaddbottom section--templates" style="display:none;">
            <div class="container">
                <header class="section-header section-header--abs">
                    <h2 class="section-title">و ده‌ها قالب آماده‌ی لندینگ پیج</h2>
                    <p class="section-subtitle">استفاده از این قالب‌ها رایگان است و هر ماه به تعدادشان افزوده خواهد شد</p>
                </header>
                <div class="section-image">
                    <img src="/assets/media/home/templates.jpg?v0.0.1" alt="قالب های آماده">
                </div>
            </div>
        </div>
        <article class="section subscribe">
            <div class="container">
                <p class="subscribe-text">
                    لاندينو سهل الاستخدام ويتم تسجيلك في دقائق قليلة وبضع نقرات بسيطة.


                </p>
                <a href="{{url('/demo/editor')}}" target="_blank" title="ثبت‌نام در لندیک" class="btn btn--blue btn--wide">
                    إبدأ مجاناً
                </a>
            </div>
        </article>
        @include('website.partials.footer')
    </div>
@endsection

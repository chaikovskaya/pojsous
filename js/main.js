/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;
GLOBAL.columnsStartLength = GLOBAL.columnsStartLength || 0;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initScrollUp() {
    $(window).scroll(function(){
        var position = $(window).scrollTop(),
            positionBlock = $('.js-main-content').scrollTop();

        if (position > positionBlock) {
            $('body').addClass('main-content-animate');
        } else {
            $('body').removeClass('main-content-animate');
        }
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
            submitHandler: function(form) {
                if (typeof(ajaxSubmit) == 'function') {
                    ajaxSubmit(form);
                }
            }
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-mask-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        "tabThrough": true,
        "showMaskOnHover": false,
    });

    $('.js-mask-email').inputmask({
        alias: "email",
        "tabThrough": true,
        "showMaskOnHover": false,
    });
}

function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initSelect() {
    $('.js-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
    });
}

var sliderMainBanner;
function initSliderMainBanner() {
    jQuery('.js-slider-main-banner').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderMainBanner = new Swiper($slider[0], {
            loop: isStart,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            spaceBetween: 0,
            slidesPerView: 1,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                },
                992: {
                    simulateTouch: false,
                },
                1340: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderProducts;
function initSliderProducts() {
    jQuery('.js-slider-products').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderProducts = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 'auto',
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 30,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderServices = undefined;
function initSliderServices() {
    jQuery('.js-slider-services').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderServices = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderServices() {
    if (sliderServices) {
        sliderServices.destroy();
    }
    sliderServices = undefined;
}

var sliderProjects;
function initSliderProjects() {
    jQuery('.js-slider-projects').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderProjects = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 30,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderNews = undefined;
function initSliderNews() {
    jQuery('.js-slider-news').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderNews = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderNews() {
    if (sliderNews) {
        sliderNews.destroy();
    }
    sliderNews = undefined;
}

var sliderClients;
function initSliderClients() {
    jQuery('.js-slider-clients').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderClients = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            spaceBetween: 0,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                 },
                992: {
                    simulateTouch: false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderCatalogProducts = undefined;
function initSliderCatalogProducts() {
    jQuery('.js-slider-catalog-products').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCatalogProducts = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderCatalogProducts() {
    if (sliderCatalogProducts) {
        sliderCatalogProducts.destroy();
    }
    sliderCatalogProducts = undefined;
}

var sliderCategory = undefined;
function initSliderCategory() {
    jQuery('.js-slider-category').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCategory = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderCategory() {
    if (sliderCategory) {
        sliderCategory.destroy();
    }
    sliderCategory = undefined;
}

var sliderTabs = undefined;
function initSliderTabs() {
    jQuery('.js-slider-tabs').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderTabs = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                  },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderTabs() {
    if (sliderTabs) {
        sliderTabs.destroy();
    }
    sliderTabs = undefined;
}

var sliderProjectsSimilar = undefined;
function initSliderProjectsSimilar() {
    jQuery('.js-slider-projects-similar').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderProjectsSimilar = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 15,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 0,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderProjectsSimilar() {
    if (sliderProjectsSimilar) {
        sliderProjectsSimilar.destroy();
    }
    sliderProjectsSimilar = undefined;
}

var sliderCompany;
function initSliderCompany() {
    jQuery('.js-slider-company').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCompany = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            spaceBetween: 0,
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                },
                992: {
                    simulateTouch: false,
                },
                1340: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderCertificate;
function initSliderCertificate() {
    jQuery('.js-slider-certificate').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCertificate = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            spaceBetween: 0,
            slidesPerView: "auto",
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                },
                992: {
                    simulateTouch: false,
                },
                1340: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initForm() {
    jQuery('.js-form').each(function() {
        var $checkbox = $(this).find('.js-form-checkbox'),
            $button = $(this).find('.js-form-button'),
            classDisabled = $(this).data('form-disabled');

        if ($checkbox.is(':checked')) {
            $button.removeClass(classDisabled);
        } else {
            $button.addClass(classDisabled);
        }

        $checkbox.on("change", function(e) {
            e.stopPropagation();
            if ($checkbox.is(':checked')) {
                $button.prop("disabled", false);
                $button.removeClass(classDisabled);
            } else {
                $button.prop("disabled", true);
                $button.addClass(classDisabled);
            }
        });
    });
}

function initAjaxMore() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var lastElement,
        count = $('.JS-AjaxMore').find('.JS-AjaxMore-Count').text() || 0,
        countCommon = $('.JS-AjaxMore').find('.JS-AjaxMore-Common').text()|| 0;

    var common = {
        beforeSend: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderCatalogProducts != undefined) {
                    reInitSliderCatalogProducts();
                }
                lastElement = $(".js-slider-catalog-products .swiper-slide").length;
            }
        },
        success: function () {
            if ( GLOBAL.widthWindow == 'isTablet' || GLOBAL.widthWindow == 'isMobile') {
                if (sliderCatalogProducts == undefined) {
                    initSliderCatalogProducts();
                }
                sliderCatalogProducts.slideTo(lastElement, 1000, false);
            }
            var index = $('.JS-AjaxMore').find('.JS-AjaxMore-Content li:last-child').data('index');

            if ((index + Number(count)) > countCommon) {
                var newCount = countCommon - index;
                $('.JS-AjaxMore').find('.JS-AjaxMore-Count').text(newCount);
            }
        }
    };

    $('.JS-AjaxMore').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initAjaxMoreSimple() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var $elem = $('.JS-AjaxMore-Simple'),
        count = $elem.find('.JS-AjaxMore-Count').text() || 0,
        countCommon = $elem.find('.JS-AjaxMore-Common').text()|| 0;

    var common = {
        beforeSend: function () {
        },
        success: function () {
            var index = $elem.find('.JS-AjaxMore-Content li:last-child').data('index');

            if ((index + Number(count)) > countCommon) {
                var newCount = countCommon - index;

                $elem.find('.JS-AjaxMore-Count').text(newCount);
            }
        }
    };

    $elem.each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initDropdownSearch() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-DropSearch').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function openPopupCallback($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-callback');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        autoFocus: false,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupCallback() {
    $(".js-popup-callback").on('click', function() {
        $.fancybox.close();
        openPopupCallback($(this));
    });
}

function initSlidertab() {
    if (typeof(Slidertab) === 'undefined' || !jQuery.isFunction(Slidertab)) {
        return false;
    }

    var common = {};

    $('.JS-Slidertab').not('.JS-Slidertab-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('slidertab'));
        new Slidertab(this, jQuery.extend({}, common, local));
    });
}

function openPopupCalculate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-calculate');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        autoFocus: false,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initSlidertab();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupCalculate() {
    $(".js-popup-calculate").on('click', function() {
        $.fancybox.close();
        openPopupCalculate($(this));
    });
}

function initFind() {
    $('.js-find').each(function () {
        var $element = $(this),
            $input = $element.find('.js-find-input'),
            $item = $element.find('.js-find-container'),
            $value = $element.find('.js-find-value'),
            classHide = $element.data('find-hide') || 'find-hide',
            classShow = $element.data('find-show') || 'find-show';

        function startFind() {
            var value = $input.val().toUpperCase();

            $item.removeClass(classHide);
            $item.removeClass(classShow);

            if (value.length) {
                for (let i = 0; i < $value.length; i++) {
                    var text = $($value[i]).text().toUpperCase();
                    if (!(text.indexOf(value) + 1)) {
                        if (!$item.hasClass(classShow)) {
                            $item.addClass(classShow);
                        }
                        $($value[i]).closest('.js-find-container').addClass(classHide).removeClass(classShow);
                    }
                }
            }
        }
        startFind();

        $input.on('input', function(){
            startFind();
        });
    });
}

function initSearch() {
    $('.js-search').each(function(){
        var $element = $(this),
            classDynamic = $(this).data('search-dynamic'),
            $input = $(this).find('.js-search-input'),
            $link = $(this).find('.js-search-reset');

        $link.on('click', function(e, data) {
            $input.val('').trigger('keyup');
            $element.removeClass(classDynamic);
        });

        $input.on('input', function(e, data) {
            var val = $input.val();
            if (val != '') {
                $element.addClass(classDynamic);
            } else {
                $element.removeClass(classDynamic);
            }
        });
    });
}

function initPopupCity() {
    $(".js-popup-city").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        afterShow: function (data) {
            initScroll();
        },
    });
}

function initPopupCityMob() {
    $(".js-popup-city-mob").fancybox({
        toolbar  : false,
        smallBtn : true,
        touch: false,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>',
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "",
            },
        },
        beforeShow: function (data) {
            $('.fancybox-slide').addClass('fancybox-slide_simple');
        },
        afterShow: function (data) {
        },
    });
}

function openPopupSuccess(url) {
    if (typeof(url) == 'undefined') {
        url = '/';
    }

    $.fancybox.open({
        src  : url,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initPopupClose();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>',
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupClose() {
    $('.js-popup-close').on('click', function () {
        $.fancybox.close();
    });
}

function initFix() {
    if (typeof(Fix) === 'undefined' || !jQuery.isFunction(Fix)) {
        return false;
    }

    var common = {
        update: function (){
        }
    };

    $('.JS-Fix').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('fix'));
        new Fix(this, jQuery.extend({}, common, local));
    });
}

function initTextFilter() {
    $('.js-textfilter').each(function(){
        var $input = $(this).find('.js-textfilter-input');

        $input.jcOnPageFilter({
            animateHideNShow: true,
            focusOnLoad: true,
            highlightColor: "transparent",
            textColorForHighlights: "inherit",
            caseSensitive: false,
            hideNegatives: false,
            parentLookupClass: "js-textfilter-parent",
            childBlockClass: "js-textfilter-child"
        });
    });
}

function initTextFilterSearch() {
    $('.js-textfilter-search').each(function(){
        var $input = $(this).find('.js-textfilter-search-input');

        $input.jcOnPageFilter({
            animateHideNShow: true,
            focusOnLoad: true,
            highlightColor: "transparent",
            textColorForHighlights: "inherit",
            caseSensitive: false,
            hideNegatives: false,
            parentLookupClass: "js-textfilter-search-parent",
            childBlockClass: "js-textfilter-search-child"
        });
    });
}

function initTextFilterCity() {
    $('.js-textfilter-city').each(function(){
        var $element = $(this),
            $input = $(this).find('.js-textfilter-city-input'),
            $list = $element.find('.js-textfilter-city-list'),
            classActive = $element.data('textfilter-class') || 'active';

        $input.jcOnPageFilter({
            animateHideNShow: true,
            focusOnLoad: true,
            highlightColor: "transparent",
            textColorForHighlights: "inherit",
            caseSensitive: false,
            hideNegatives: true,
            parentSectionClass: "js-textfilter-city-list",
            parentLookupClass: "js-textfilter-city-parent",
            childBlockClass: "js-textfilter-city-child"
        });

        $input.keyup(function(e) {
            var len = $element.find('.js-textfilter-city-child span').length;
            if (len > 0) {
                $element.addClass(classActive);
            } else {
                $element.removeClass(classActive);
            }
        });
    });
}

function initTextFilterCityMob() {
    $('.js-textfilter-city-mob').each(function(){
        var $element = $(this),
            $input = $element.find('.js-textfilter-city-mob-input'),
            $list = $element.find('.js-textfilter-city-mob-list'),
            classActive = $element.data('textfilter-class') || 'active';

        $input.jcOnPageFilter({
            animateHideNShow: true,
            focusOnLoad: true,
            highlightColor: "transparent",
            textColorForHighlights: "inherit",
            caseSensitive: false,
            hideNegatives: true,
            parentSectionClass: "js-textfilter-city-mob-list",
            parentLookupClass: "js-textfilter-city-mob-parent",
            childBlockClass: "js-textfilter-city-mob-child"
        });

        $input.keyup(function(e) {
            var len = $element.find('.js-textfilter-city-mob-child span').length;
            if (len > 0) {
                $list.addClass(classActive);
            } else {
                $list.removeClass(classActive);
            }
        });
    });
}

function initScrollTop() {
    var $scrolltop = $('.js-scrolltop'),
        scrolltopActiveClass = $scrolltop.data('scrolltop');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
            $scrolltop.addClass(scrolltopActiveClass);
        } else {
            $scrolltop.removeClass(scrolltopActiveClass);
        }
    });
    $scrolltop.click(function(){
        $('html, body').animate({scrollTop: '0px'}, 500);
        return false;
    });
}

function initTab() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Tab').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initHorizontalScroll() {
    $('.js-horizontal-scroll').each(function () {
        var $customScroll = $(this),
            $buttonLeft = $('.js-horizontal-scroll-left'),
            $buttonRight = $('.js-horizontal-scroll-right'),
            classActive = $customScroll.data('active'),
            step = 180;

        new SimpleBar(this, {
            autoHide: false,
        });

        var $content = $customScroll.find('.simplebar-content-wrapper'),
            $track = $customScroll.find('.simplebar-horizontal');

        if ($track.css('visibility') == 'visible') {
            $customScroll.addClass(classActive);
        }

        $buttonLeft.on('click', function() {
            $content.animate( { scrollLeft: '-=' + step }, 100);
        });

        $buttonRight.on('click', function() {
            $content.animate( { scrollLeft: '+=' + step }, 100);
        });
    });
}

function initBanner() {
    $('.js-banner').each(function () {
        var $element = $(this),
            $item = $element.find('.js-banner-item'),
            classMiddle = $element.data('class-middle'),
            classWide = $element.data('class-wide'),
            classHide = $element.data('class-hide');

        var itemWidth = $item.innerWidth(),
            elementWidth = $element.width();

        $item.removeClass(classHide)
             .removeClass(classMiddle)
             .removeClass(classWide);

        if (itemWidth == (elementWidth/2)) {
            $item.addClass(classMiddle);
        }

        if (itemWidth > (elementWidth/2)) {
            $item.addClass(classWide);
        }

        if (elementWidth == itemWidth) {
            $item.addClass(classHide);
        }
    });
}

function initGalleryCard() {
    var galleryThumbs = new Swiper(".js-gallery-card-thumbs", {
        loop: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        spaceBetween: 12,
        slidesPerView: "auto",
        autoHeight: true,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        navigation: false,
        pagination: false,
        breakpoints: {
            0: {
                spaceBetween: 18,
            },
            720: {
                spaceBetween: 15,
            },
        }
    });
    var galleryTop = new Swiper(".js-gallery-card-main", {
        loop: true,
        direction: "horizontal",
        spaceBetween: 40,
        navigation: {
            nextEl: ".js-slider-next",
            prevEl: ".js-slider-prev",
        },
        pagination: {
            el: ".js-slider-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        thumbs: {
            swiper: galleryThumbs
        },
        slidesPerView: "auto",
        breakpoints: {
            0: {
                spaceBetween: 18,
            },
            720: {
                spaceBetween: 15,
            },
        }
    });
};

function initPopupGallery() {
    $(".js-popup-gallery").fancybox({
        loop: true,
        infobar: false,
        toolbar  : false,
        smallBtn : true,
        arrows : false,
        animationEffect: "fade",
        hash : false,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10.4461 0.553928C10.1401 0.248002 9.64414 0.248002 9.33821 0.553928L5.5 4.39214L1.66179 0.553929C1.35586 0.248002 0.859855 0.248002 0.553928 0.553928C0.248002 0.859855 0.248002 1.35586 0.553928 1.66179L4.39214 5.5L0.553929 9.33821C0.248002 9.64414 0.248002 10.1401 0.553928 10.4461C0.859855 10.752 1.35586 10.752 1.66179 10.4461L5.5 6.60786L9.33821 10.4461C9.64414 10.752 10.1401 10.752 10.4461 10.4461C10.752 10.1401 10.752 9.64414 10.4461 9.33821L6.60786 5.5L10.4461 1.66179C10.752 1.35586 10.752 0.859855 10.4461 0.553928Z" fill="#202430"/>\n' +
                '</svg>' +
                '</button>'
        },
        'height'		: 742,
        thumbs : {
            autoStart   : true,
            hideOnClose : true,
            parentEl    : '.fancybox-container',
            axis        : 'y'
        },
        beforeClose: function (instance) {
        },
        afterLoad: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                current.$content.append('' +
                    '<div class="fancybox-nav-block">' +
                    '<button class="fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<span class="fancybox-button-icon fancybox-button-icon_left"><svg class="fancybox-button-arrow" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M5.51015 10.226C5.64934 10.0867 5.72754 9.8979 5.72754 9.70102C5.72754 9.50413 5.64934 9.31531 5.51015 9.17607L1.83477 5.5007L5.51015 1.82532C5.6454 1.68529 5.72024 1.49773 5.71855 1.30305C5.71685 1.10837 5.63877 0.922139 5.5011 0.784473C5.36344 0.646808 5.17721 0.568721 4.98253 0.567029C4.78785 0.565337 4.60029 0.640177 4.46025 0.77543L0.25993 4.97575C0.120733 5.11499 0.042536 5.30381 0.042536 5.5007C0.042536 5.69758 0.120733 5.88641 0.25993 6.02564L4.46025 10.226C4.59949 10.3652 4.78831 10.4434 4.9852 10.4434C5.18208 10.4434 5.37091 10.3652 5.51015 10.226Z" fill="white"/>\n' +
                    '</svg></span>\n' +
                    '</button>' +
                    '<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<span class="fancybox-button-icon fancybox-button-icon_right"><svg class="fancybox-button-arrow" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M0.489855 10.226C0.350658 10.0867 0.272461 9.8979 0.272461 9.70102C0.272461 9.50413 0.350658 9.31531 0.489855 9.17607L4.16523 5.5007L0.489855 1.82532C0.354602 1.68529 0.279762 1.49773 0.281454 1.30305C0.283146 1.10837 0.361234 0.922139 0.498899 0.784473C0.636565 0.646808 0.822793 0.568721 1.01747 0.567029C1.21215 0.565337 1.39971 0.640177 1.53975 0.77543L5.74007 4.97575C5.87927 5.11499 5.95746 5.30381 5.95746 5.5007C5.95746 5.69758 5.87927 5.88641 5.74007 6.02564L1.53975 10.226C1.40051 10.3652 1.21169 10.4434 1.0148 10.4434C0.817918 10.4434 0.629094 10.3652 0.489855 10.226Z" fill="white"/>\n' +
                    '</svg></span>\n' +
                    '</button>' +
                    '</div>'
                );
            }
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initShare() {
    $('.js-share').each(function () {
        const btn = this,
            thisUrl = btn.href,
            thisTitle = document.title,
            shareObj = {
                title: thisTitle,
                url: thisUrl,
            };

        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            try {
                await navigator.share(shareObj)
            } catch(err) {
                console.log('Error: ' + err);
            }
        });
    });
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        if (sliderServices == undefined) {
            initSliderServices();
        }
        if (sliderNews == undefined) {
            initSliderNews();
        }
        if (sliderCatalogProducts == undefined) {
            initSliderCatalogProducts();
        }
        if (sliderCategory == undefined) {
            initSliderCategory();
        }
        if (sliderTabs == undefined) {
            initSliderTabs();
        }
        if (sliderProjectsSimilar == undefined) {
            initSliderProjectsSimilar();
        }
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        if (sliderServices == undefined) {
            initSliderServices();
        }
        if (sliderNews != undefined) {
            reInitSliderNews();
        }
        if (sliderCatalogProducts == undefined) {
            initSliderCatalogProducts();
        }
        if (sliderCategory != undefined) {
            reInitSliderCategory();
        }
        if (sliderTabs == undefined) {
            initSliderTabs();
        }
        if (sliderProjectsSimilar == undefined) {
            initSliderProjectsSimilar();
        }
    } else {
        GLOBAL.widthWindow = '';
        if (sliderServices != undefined) {
            reInitSliderServices();
        }
        if (sliderNews != undefined) {
            reInitSliderNews();
        }
        if (sliderCatalogProducts != undefined) {
            reInitSliderCatalogProducts();
        }
        if (sliderCategory != undefined) {
            reInitSliderCategory();
        }
        if (sliderTabs != undefined) {
            reInitSliderTabs();
        }
        if (sliderProjectsSimilar != undefined) {
            reInitSliderProjectsSimilar();
        }
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
        initBanner();
        initFix();
    });

    initDropdown();
    initScroll();
    initScrollUp();
    initValidate();
    initMask();
    initPopup();
    initSelect();
    initSliderMainBanner();
    initSliderProducts();
    initSliderServices();
    initSliderProjects();
    initSliderClients();
    initSliderProjectsSimilar();
    initSliderCompany();
    initSliderCertificate();
    initMobileMenu();
    initForm();
    initAjaxMore();
    initAjaxMoreSimple();
    initDropdownSearch();
    initPopupCallback();
    initPopupCalculate();
    initSlidertab();
    initSearch();
    initFind();
    initPopupCity();
    initPopupCityMob();
    initPopupGallery();
    initFix();
    initTextFilter();
    initTextFilterSearch();
    initTextFilterCity();
    initTextFilterCityMob();
    initScrollTop();
    initTab();
    initHorizontalScroll();
    initBanner();
    initGalleryCard();
    initShare();
    ymaps.ready(initMap);
});

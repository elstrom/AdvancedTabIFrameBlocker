// ==UserScript==
// @name         Advanced Tab and IFrame Blocker
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Blokir situs blacklist pada tab baru, iframe, dan navigasi langsung dari elemen mencurigakan.
// @author       Elstrom
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yourusername/AdvancedTabIFrameBlocker/main/AdvancedTabIFrameBlocker.user.js
// @downloadURL  https://raw.githubusercontent.com/yourusername/AdvancedTabIFrameBlocker/main/AdvancedTabIFrameBlocker.user.js
// ==/UserScript==

(function () {
    'use strict';

    const weblack = [
        "enrtx.com",
        "kelas2.guru",
        "meenetiy.com",
        "rajapg10.site",
        "mordoops.com",
        "s.shopee.co.id",
        "d37nij3w7aewur.cloudfront.net",
        "tokopedia.com",
        "shopee.co.id",
        "lazada.co.id",
        "blibli.com",
        "bukalapak.com",
        "amazon.com",
        "ebay.com",
        "alibaba.com",
        "aliexpress.com",
        "jd.com",
        "olx.co.id",
        "casino",
        "judi",
        "poker",
        "bet",
        "slot",
        "roulette"
    ];

    const isBlacklisted = (url) => {
        return weblack.some(domain => url.toLowerCase().includes(domain));
    };

    const closeBlacklistedTab = () => {
        const currentUrl = window.location.href;
        if (isBlacklisted(currentUrl)) {
            window.close();
        }
    };

    const interceptNewTab = () => {
        const originalOpen = window.open;
        window.open = function (url, name, specs) {
            if (url && isBlacklisted(url)) {
                alert(`Tab baru diblokir karena mengarah ke situs blacklist: ${url}`);
                return null;
            }
            return originalOpen.apply(window, arguments);
        };
    };

    const interceptIframes = () => {
        const iframes = document.getElementsByTagName('iframe');
        for (let iframe of iframes) {
            try {
                const src = iframe.src || iframe.getAttribute('src');
                if (src && isBlacklisted(src)) {
                    console.log(`IFrame diblokir: ${src}`);
                    iframe.remove();
                }
            } catch (error) {
                console.error(`Kesalahan saat memeriksa iframe: ${error}`);
            }
        }
    };

    const monitorClicksOnVideo = (event) => {
        const target = event.target;
        if (target.tagName === 'VIDEO' || target.closest('video')) {
            const parentAnchor = target.closest('a');
            if (parentAnchor) {
                const url = parentAnchor.href || '';
                if (isBlacklisted(url)) {
                    event.preventDefault();
                }
            }
        }
    };

    const observePageMutations = () => {
        const observer = new MutationObserver(() => {
            interceptIframes();
            closeBlacklistedTab();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    const initScript = () => {
        interceptNewTab();
        interceptIframes();
        closeBlacklistedTab();
        observePageMutations();
        document.addEventListener('click', monitorClicksOnVideo, true);
    };

    initScript();
})();
// ==UserScript==
// @name         Advanced Tab and IFrame Blocker
// @namespace    https://github.com/elstrom/BlokerWeb
// @version      1.8
// @description  Blokir situs blacklist pada tab baru, iframe, dan navigasi langsung dari elemen mencurigakan.
// @author       Elstrom
// @include      *github.com*
// @exclude      *api.github*
// @match        *://*/*
// @grant        none
// @supportURL   https://raw.githubusercontent.com/elstrom/BlokerWeb
// @updateURL    https://raw.githubusercontent.com/elstrom/AdvancedTabIFrameBlocker/main/AdvancedTabIFrameBlocker.user.js
// @downloadURL  https://raw.githubusercontent.com/elstrom/AdvancedTabIFrameBlocker/main/AdvancedTabIFrameBlocker.user.js
// ==/UserScript==

(function () {
    'use strict';

    const weblack = [
        "enrtx",

        "kelas2.guru",

        "meenetiy.com",

        "rajapg10.site",

        "mordoops",

        "s.shopee.co.id",

        "mp4k.pro",

        "kotra.id",

        "cps.cotecna.com",

        "s.viisscos.com",

        "irispublishers.com",

        "dpu.brebeskab.go.id",
        
        "orantesjonnock.",

        "online.sim.pktj.ac.id",

        "meenetiy",

        "fmars.marssociety.org",

        "851849.visualmirage.co",

        "visualmirage",

        "fmars.marssociety.org",

        "bocoran",

        "kikojogja.com",

        "www.24newstech.com",

        "d3h0vqwmcilum.cloudfront.net",

        "d37nij3w7aewur.cloudfront.net",

        "cloudfront",

        "label138p.xyz",

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

        "roulette",

        "togel",

        "sbobet",

        "qq",

        "dingdong",

        "dominoqq",

        "bandarq",

        "aduq",

        "capsa",

        "baccarat",

        "blackjack",

        "jackpot",

        "maxwin",

        "slot88",

        "slotgacor",

        "pragmaticplay",

        "taruhan",

        "agenbola",

        "judibola",

        "judionline"
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
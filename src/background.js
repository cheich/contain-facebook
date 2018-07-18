// Param values from https://developer.mozilla.org/Add-ons/WebExtensions/API/contextualIdentities/create
// Google domains from https://github.com/containers-everywhere/contain-google/blob/master/background.js
// Amazon domains from https://github.com/Jackymancs4/contain-amazon/blob/master/background.js
const services = [
  {
    name: "Facebook",
    color: "blue",
    icon: "briefcase",
    domains: [
      "facebook.com", "www.facebook.com", "fb.com", "fbcdn.net", "cdn.fbsbx.com",
      "instagram.com", "www.instagram.com",
      "messenger.com", "www.messenger.com",
      "whatsapp.com", "www.whatsapp.com", "web.whatsapp.com", "cdn.whatsapp.net", "www-cdn.whatsapp.net",
      "atdmt.com"
    ]
  },
  {
    name: "Google",
    color: "red",
    icon: "briefcase",
    domains: [
      "google.com", "google.ac", "google.ad", "google.ae", "google.com.af", "google.com.ag", "google.com.ai",
      "google.al", "google.am", "google.co.ao", "google.com.ar", "google.as", "google.at", "google.com.au",
      "google.az", "google.ba", "google.com.bd", "google.be", "google.bf", "google.bg", "google.com.bh",
      "google.bi", "google.bj", "google.com.bn", "google.com.bo", "google.com.br", "google.bs", "google.bt",
      "google.com.bw", "google.by", "google.com.bz", "google.ca", "google.com.kh", "google.cc", "google.cd",
      "google.cf", "google.cat", "google.cg", "google.ch", "google.ci", "google.co.ck", "google.cl", "google.cm",
      "google.cn", "google.com.co", "google.co.cr", "google.com.cu", "google.cv", "google.com.cy", "google.cz",
      "google.de", "google.dj", "google.dk", "google.dm", "google.com.do", "google.dz", "google.com.ec",
      "google.ee", "google.com.eg", "google.es", "google.com.et", "google.fi", "google.com.fj", "google.fm",
      "google.fr", "google.ga", "google.ge", "google.gf", "google.gg", "google.com.gh", "google.com.gi",
      "google.gl", "google.gm", "google.gp", "google.gr", "google.com.gt", "google.gy", "google.com.hk",
      "google.hn", "google.hr", "google.ht", "google.hu", "google.co.id", "google.iq", "google.ie",
      "google.co.il", "google.im", "google.co.in", "google.io", "google.is", "google.it", "google.je",
      "google.com.jm", "google.jo", "google.co.jp", "google.co.ke", "google.ki", "google.kg", "google.co.kr",
      "google.com.kw", "google.kz", "google.la", "google.lb", "google.com.lc", "google.li", "google.lk",
      "google.co.ls", "google.lt", "google.lu", "google.lv", "google.com.ly", "google.co.ma", "google.md",
      "google.me", "google.mg", "google.mk", "google.ml", "google.com.mm", "google.mn", "google.ms",
      "google.com.mt", "google.mu", "google.mv", "google.mw", "google.com.mx", "google.com.my", "google.co.mz",
      "google.com.na", "google.ne", "google.com.nf", "google.com.ng", "google.com.ni", "google.nl", "google.no",
      "google.com.np", "google.nr", "google.nu", "google.co.nz", "google.com.om", "google.com.pk", "google.com.pa",
      "google.com.pe", "google.com.ph", "google.pl", "google.com.pg", "google.pn", "google.com.pr", "google.ps",
      "google.pt", "google.com.py", "google.com.qa", "google.ro", "google.rs", "google.ru", "google.rw",
      "google.com.sa", "google.com.sb", "google.sc", "google.se", "google.com.sg", "google.sh", "google.si",
      "google.sk", "google.com.sl", "google.sn", "google.sm", "google.so", "google.st", "google.sr",
      "google.com.sv", "google.td", "google.tg", "google.co.th", "google.com.tj", "google.tk", "google.tl",
      "google.tm", "google.to", "google.tn", "google.com.tr", "google.tt", "google.com.tw", "google.co.tz",
      "google.com.ua", "google.co.ug", "google.co.uk", "google.us", "google.com.uy", "google.co.uz",
      "google.com.vc", "google.co.ve", "google.vg", "google.co.vi", "google.com.vn", "google.vu", "google.ws",
      "google.co.za", "google.co.zm", "google.co.zw",
      "youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be",
      "blogger.com",
      "doubleclickbygoogle.com",
      "googleblog.com", "blog.google", "googleusercontent.com", "googlesource.com", "abc.xyz", "design.google",
      "gallery.io",
      "blogspot.com", "blogspot.ae", "blogspot.al", "blogspot.am", "blogspot.com.ar", "blogspot.co.at", "blogspot.com.au",
      "blogspot.ba", "blogspot.be", "blogspot.bg", "blogspot.bj", "blogspot.com.br", "blogspot.com.by", "blogspot.ca",
      "blogspot.cf", "blogspot.ch", "blogspot.cl", "blogspot.com.co", "blogspot.cv", "blogspot.com.cy", "blogspot.cz",
      "blogspot.de", "blogspot.dj", "blogspot.dk", "blogspot.dm", "blogspot.com.do", "blogspot.dz", "blogspot.com.eg",
      "blogspot.es", "blogspot.fi", "blogspot.fr", "blogspot.gr", "blogspot.hr", "blogspot.hu", "blogspot.co.id", "blogspot.ie",
      "blogspot.co.il", "blogspot.in", "blogspot.is", "blogspot.it", "blogspot.jp", "blogspot.co.ke", "blogspot.kr", "blogspot.li",
      "blogspot.lt", "blogspot.lu", "blogspot.md", "blogspot.mk", "blogspot.com.mt", "blogspot.mx", "blogspot.my", "blogspot.com.ng",
      "blogspot.nl", "blogspot.no", "blogspot.co.nz", "blogspot.pt", "blogspot.qa", "blogspot.ro", "blogspot.rs", "blogspot.ru",
      "blogspot.se", "blogspot.sg", "blogspot.si", "blogspot.sk", "blogspot.sn", "blogspot.com.sr", "blogspot.td", "blogspot.co.tl",
      "blogspot.co.to", "blogspot.com.tr", "blogspot.tw", "blogspot.co.uk", "blogspot.com.uy", "blogspot.co.za"
    ]
  },
  {
    name: "Reddit",
    color: "red",
    icon: "briefcase",
    domains: ["reddit.com", "www.reddit.com"]
  },
  {
    name: "Twitter",
    color: "blue",
    icon: "briefcase",
    domains: ["twitter.com", "www.twitter.com", "t.co", "twimg.com"]
  },
  {
    name: "Twitch",
    color: "purple",
    icon: "briefcase",
    domains: ["twitch.tv", "www.twitch.tv"]
  },
  {
    name: "Amazon",
    color: "red",
    icon: "briefcase",
    domains: [
      "amazon.it", "amazon.de", "amazon.com", "amazon.com.br", "amazon.in", "amazon.com.au",
      "amazon.es", "amazon.com.mx", "amazon.co.jp", "amazon.in", "amazon.co.uk", "amazon.ca",
      "amazon.fr", "amazon.com.sg",
      "awscloud.com", "amazon.company", "amazon.express", "amazon.gd", "amazon.international",
      "amazon.ltda", "amazon.press", "amazon.shopping", "amazon.tickets", "amazon.tv", "amazon.cruises",
      "amazon.dog", "amazon.express", "amazon.game", "amazon.gent", "amazon.salon", "amazon.shopping",
      "amazon.tours", "amazon.wiki", "amazon.clothing", "amazon.energy", "amazon.fund", "amazon.hockey",
      "amazon.kiwi", "amazon.re", "amazon.soccer", "amazon.tienda", "amazon.training", "amazon.jobs",
      "primevideo.com", "mturk.com", "lab126.com", "amazonpay.in", "amazonteam.org", "awsevents.com",
      "seattlespheres.com"
    ]
  },
  {
    name: "Github",
    color: "green",
    icon: "briefcase",
    domains: ["github.com", "www.github.com"]
  },
  {
    name: "Soundcloud",
    color: "orange",
    icon: "briefcase",
    domains: ["soundcloud.com", "www.soundcloud.com"]
  }
];

const MAC_ADDON_ID = "@testpilot-containers";

let macAddonEnabled = false;
let servicesCookieStoreId = {};

const canceledRequests = {};
const tabsWaitingToLoad = {};
const servicesHostREs = {};

async function isMACAddonEnabled () {
  try {
    const macAddonInfo = await browser.management.get(MAC_ADDON_ID);
    if (macAddonInfo.enabled) {
      sendJailedDomainsToMAC();
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}

async function setupMACAddonListeners () {
  browser.runtime.onMessageExternal.addListener((message, sender) => {
    if (sender.id !== "@testpilot-containers") {
      return;
    }
    switch (message.method) {
    case "MACListening":
      sendJailedDomainsToMAC();
      break;
    }
  });
  function disabledExtension (info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = false;
    }
  }
  function enabledExtension (info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = true;
    }
  }
  browser.management.onInstalled.addListener(enabledExtension);
  browser.management.onEnabled.addListener(enabledExtension);
  browser.management.onUninstalled.addListener(disabledExtension);
  browser.management.onDisabled.addListener(disabledExtension);
}

async function sendJailedDomainsToMAC () {
  for (let service of services) {
    try {
      return await browser.runtime.sendMessage(MAC_ADDON_ID, {
        method: "jailedDomains",
        urls: service.domains.map((domain) => {
          return `https://${domain}/`;
        })
      });
    } catch (e) {
      // We likely might want to handle this case: https://github.com/mozilla/contain-facebook/issues/113#issuecomment-380444165
      return false;
    }
  }
}

async function getMACAssignment (url) {
  if (!macAddonEnabled) {
    return false;
  }

  try {
    const assignment = await browser.runtime.sendMessage(MAC_ADDON_ID, {
      method: "getAssignment",
      url
    });
    return assignment;
  } catch (e) {
    return false;
  }
}

function cancelRequest (tab, options) {
  // we decided to cancel the request at this point, register canceled request
  canceledRequests[tab.id] = {
    requestIds: {
      [options.requestId]: true
    },
    urls: {
      [options.url]: true
    }
  };

  // since webRequest onCompleted and onErrorOccurred are not 100% reliable
  // we register a timer here to cleanup canceled requests, just to make sure we don't
  // end up in a situation where certain urls in a tab.id stay canceled
  setTimeout(() => {
    if (canceledRequests[tab.id]) {
      delete canceledRequests[tab.id];
    }
  }, 2000);
}

function shouldCancelEarly (tab, options) {
  // we decided to cancel the request at this point
  if (!canceledRequests[tab.id]) {
    cancelRequest(tab, options);
  } else {
    let cancelEarly = false;
    if (canceledRequests[tab.id].requestIds[options.requestId] ||
        canceledRequests[tab.id].urls[options.url]) {
      // same requestId or url from the same tab
      // this is a redirect that we have to cancel early to prevent opening two tabs
      cancelEarly = true;
    }
    // register this requestId and url as canceled too
    canceledRequests[tab.id].requestIds[options.requestId] = true;
    canceledRequests[tab.id].urls[options.url] = true;
    if (cancelEarly) {
      return true;
    }
  }
  return false;
}

function generateServicesHostREs () {
  for (let service of services) {
    servicesHostREs[service.name] = [];

    for (let domain of service.domains) {
      servicesHostREs[service.name].push(new RegExp(`^(.*\\.)?${domain}$`));
    }
  }
}

async function clearServiceCookies () {
  for (let service of services) {
    // Clear all Service cookies
    const containers = await browser.contextualIdentities.query({});
    containers.push({
      cookieStoreId: "firefox-default"
    });

    let macAssignments = [];
    if (macAddonEnabled) {
      const promises = service.domains.map(async serviceDomain => {
        const assigned = await getMACAssignment(`https://${serviceDomain}/`);
        return assigned ? serviceDomain : null;
      });
      macAssignments = await Promise.all(promises);
    }

    service.domains.map(async serviceDomain => {
      const serviceCookieUrl = `https://${serviceDomain}/`;

      // dont clear cookies for serviceDomain if mac assigned (with or without www.)
      if (macAddonEnabled &&
          (macAssignments.includes(serviceDomain) ||
           macAssignments.includes(`www.${serviceDomain}`))) {
        return;
      }

      containers.map(async container => {
        const storeId = container.cookieStoreId;
        if (storeId === servicesCookieStoreId[service.name]) {
          // Don't clear cookies in the Service Container
          return;
        }

        const cookies = await browser.cookies.getAll({
          domain: serviceDomain,
          storeId
        });

        cookies.map(cookie => {
          browser.cookies.remove({
            name: cookie.name,
            url: serviceCookieUrl,
            storeId
          });
        });
        // Also clear Service Workers as it breaks detecting onBeforeRequest
        await browser.browsingData.remove({hostnames: [serviceDomain]}, {serviceWorkers: true});
      });
    });
  }
}

async function setupContainer () {
  for (let service of services) {
    // Use existing service container, or create one
    const contexts = await browser.contextualIdentities.query({name: service.name});
    if (contexts.length > 0) {
      servicesCookieStoreId[service.name] = contexts[0].cookieStoreId;
    } else {
      const context = await browser.contextualIdentities.create({
        name: service.name,
        color: service.color,
        icon: service.icon
      });
      servicesCookieStoreId[service.name] = context.cookieStoreId;
    }
  }
}

function reopenTab ({url, tab, cookieStoreId}) {
  browser.tabs.create({
    url,
    cookieStoreId,
    active: tab.active,
    index: tab.index,
    windowId: tab.windowId
  });
  browser.tabs.remove(tab.id);
}

function isServiceURL (url, serviceName) {
  const parsedUrl = new URL(url);

  // console.log(servicesHostREs.hasOwnProperty(serviceName));


  for (let serviceHostRE of servicesHostREs[serviceName]) {
    if (serviceHostRE.test(parsedUrl.host)) {
      return true;
    }
  }
  return false;
}

function shouldContainInto (url, tab) {
  let result = false;

  for (let service of services) {
    if (!url.startsWith("http")) {
      // we only handle URLs starting with http(s)
      result = false;
    }

    if (isServiceURL(url, service.name)) {
      if (tab.cookieStoreId !== servicesCookieStoreId[service.name]) {
        // Service-URL outside of Service Container Tab
        // Should contain into Service Container
        result = servicesCookieStoreId[service.name];
      }
    } else if (tab.cookieStoreId === servicesCookieStoreId[service.name]) {
      // Non-Service-URL inside Service Container Tab
      // Should contain into Default Container
      result = "firefox-default";
    }
  }

  return result;
}

async function maybeReopenAlreadyOpenTabs () {
  const maybeReopenTab = async tab => {
    const macAssigned = await getMACAssignment(tab.url);
    if (macAssigned) {
      // We don't reopen MAC assigned urls
      return;
    }
    const cookieStoreId = shouldContainInto(tab.url, tab);
    if (!cookieStoreId) {
      // Tab doesn't need to be contained
      return;
    }
    reopenTab({
      url: tab.url,
      tab,
      cookieStoreId
    });
  };

  const tabsOnUpdated = (tabId, changeInfo, tab) => {
    if (changeInfo.url && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for switched it's url, maybe we reopen
      delete tabsWaitingToLoad[tabId];
      maybeReopenTab(tab);
    }
    if (tab.status === "complete" && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for completed loading
      delete tabsWaitingToLoad[tabId];
    }
    if (!Object.keys(tabsWaitingToLoad).length) {
      // We're done waiting for tabs to load, remove event listener
      browser.tabs.onUpdated.removeListener(tabsOnUpdated);
    }
  };

  // Query for already open Tabs
  const tabs = await browser.tabs.query({});
  tabs.map(async tab => {
    if (tab.incognito) {
      return;
    }
    if (tab.url === "about:blank") {
      if (tab.status !== "loading") {
        return;
      }
      // about:blank Tab is still loading, so we indicate that we wait for it to load
      // and register the event listener if we haven't yet.
      //
      // This is a workaround until platform support is implemented:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1447551
      // https://github.com/mozilla/multi-account-containers/issues/474
      tabsWaitingToLoad[tab.id] = true;
      if (!browser.tabs.onUpdated.hasListener(tabsOnUpdated)) {
        browser.tabs.onUpdated.addListener(tabsOnUpdated);
      }
    } else {
      // Tab already has an url, maybe we reopen
      maybeReopenTab(tab);
    }
  });
}

async function containService (options) {
  // Listen to requests and open Service into its Container,
  // open other sites into the default tab context
  if (options.tabId === -1) {
    // Request doesn't belong to a tab
    return;
  }
  if (tabsWaitingToLoad[options.tabId]) {
    // Cleanup just to make sure we don't get a race-condition with startup reopening
    delete tabsWaitingToLoad[options.tabId];
  }

  // We have to check with every request if the requested URL is assigned with MAC
  // because the user can assign URLs at any given time (needs MAC Events)
  const macAssigned = await getMACAssignment(options.url);
  if (macAssigned) {
    // This URL is assigned with MAC, so we don't handle this request
    return;
  }

  const tab = await browser.tabs.get(options.tabId);
  if (tab.incognito) {
    // We don't handle incognito tabs
    return;
  }

  // Check whether we should contain this request into another container
  const cookieStoreId = shouldContainInto(options.url, tab);
  if (!cookieStoreId) {
    // Request doesn't need to be contained
    return;
  }
  if (shouldCancelEarly(tab, options)) {
    // We need to cancel early to prevent multiple reopenings
    return {cancel: true};
  }
  // Decided to contain
  reopenTab({
    url: options.url,
    tab,
    cookieStoreId
  });
  return {cancel: true};
}

(async function init () {
  await setupMACAddonListeners();
  macAddonEnabled = await isMACAddonEnabled();

  try {
    await setupContainer();
  } catch (error) {
    // TODO: Needs backup strategy
    // See https://github.com/mozilla/contain-facebook/issues/23
    // Sometimes this add-on is installed but doesn't get a facebookCookieStoreId ?
    // eslint-disable-next-line no-console
    console.log(error);
    return;
  }
  clearServiceCookies();
  generateServicesHostREs();

  // Clean up canceled requests
  browser.webRequest.onCompleted.addListener((options) => {
    if (canceledRequests[options.tabId]) {
      delete canceledRequests[options.tabId];
    }
  },{urls: ["<all_urls>"], types: ["main_frame"]});
  browser.webRequest.onErrorOccurred.addListener((options) => {
    if (canceledRequests[options.tabId]) {
      delete canceledRequests[options.tabId];
    }
  },{urls: ["<all_urls>"], types: ["main_frame"]});

  // Add the request listener
  browser.webRequest.onBeforeRequest.addListener(containService, {urls: ["<all_urls>"], types: ["main_frame"]}, ["blocking"]);

  maybeReopenAlreadyOpenTabs();
})();

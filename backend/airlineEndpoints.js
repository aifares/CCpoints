const puppeteer = require("puppeteer-extra");
const americanExpressGetFlightURL =
  "https://www.aa.com/booking/api/search/weekly";

//jetBlue
const scrapeJetBlue = async () => {
  const browser = await puppeteer.launch({ headless: false }); // default is true

  const page = await browser.newPage();

  await page.goto(
    "https://www.jetblue.com/booking/flights?from=JFK&to=LAX&depart=2022-11-27&return=2022-12-14&isMultiCity=false&noOfRoute=1&lang=en&adults=1&children=0&infants=0&sharedMarket=false&roundTripFaresFlag=false&usePoints=true",
    { waitUntil: "networkidle0" }
  );

  console.log("Hello");
  const frame = page
    .frames()
    .find(
      (frame) =>
        frame.url() ===
        "https://consent-pref.trustarc.com/?type=jetblue3&ostype=mobile&site=jetblue.com&action=notice&country=us&locale=en&behavior=expressed&gtm=1&layout=default_eu&irm=undefined&from=https://consent.trustarc.com/"
    );
  const clickLogin = await frame.click(".call");
  const price = await page.evaluate(() => {
    const elements = document.getElementsByClassName(
      "w-40 tr lh-copy pr4-ns pt3 w-25-ns"
    );
    return Array.from(elements).map((element) => element.innerText); // as you see, now this function returns array of texts instead of Array of elements
  });
  console.log(price); // this will log the text of all elements that have the specific class above
  console.log(price[0]); // this will log the first element that have the specific class above
};

//scrapeJetBlue();

// Delta

const scrapeDelta = async () => {
  
  const puppeteer = require("puppeteer-extra");
  const hidden = require("puppeteer-extra-plugin-stealth");
  const { executablePath } = require("puppeteer");
  puppeteer.use(hidden());
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: false,
    ignoreHTTPSErrors: true,

    // add this
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
  );
  await page.goto("https://www.delta.com/", {
    waitUntil: "networkidle0",
  });

//   await page.click(
//     "body > app-root > app-home > ngc-global-nav > header > div > div.widget-container-lg.nav-content-outlet.bg-dark.main-container.collapse-widget.ng-tns-c0-0.ng-trigger.ng-trigger-widgetState.ng-star-inserted > ngc-mobile-widget > div > form > div:nth-child(1) > div > div > div > div > a.to-container.col-5.col-lg-5.col-sm-5.order-3.p-0.no-underline > span.airport-code.d-block"
//   );
//   await page.type("#search_input", "LAX", {
//     delay: 2000,
//   });

//   await page.click(
//     "#airport-serach-panel > div > div.search-result-container > div > ul > li > a > span.airport-code.col-sm-2.col-md-1.col-lg-2.col-xl-2.col-xxl-2.pl-0.pr-3"
//   );

//   await page.click(
//     "#booking > form > div.container.booking-widget_container-mobile > div > div.col-lg-11.pl-xl-0.pl-xxl-0.p-0.pt-sm-3.safari-mob-padding > div.form-row.align-items-center.search-option-ribbon > ngc-search-options > fieldset > div > div:nth-child(2) > label"
//   );

//   await page.click("#input_departureDate_1");

//   await page.click(
//     '[data-date="12/16/2022|F, Dec 16|16 December 2022, Friday"]',
//     { clickCount: 1 }
//   );

//   await page.click(
//     '[data-date="12/18/2022|S, Dec 18|18 December 2022, Sunday"]',
//     { clickCount: 1 }
//   );

//   await page.click(
//     "#booking > form > div.container.booking-widget_container-mobile > div > div.col-lg-11.pl-xl-0.pl-xxl-0.p-0.pt-sm-3.safari-mob-padding > div:nth-child(1) > div.col-lg-3.col-sm-12.d-lg-block.offset-md-2.col-md-8.offset-lg-0.book-element.ng-tns-c1-3.booking-element.ng-star-inserted > date-selection-view > div > div > div > div > div.calenderContainer > div > div.mobileCheckboxFooter > div > button",
//     {
//       delay: 200,
//     }
//   );

//   await page.click("#btn-book-submit");
};

scrapeDelta();

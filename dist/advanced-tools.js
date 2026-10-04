/* ToolBari advanced local-first utilities (tools 82–100). */
(function() {
  "use strict";

  window.TOOLBARI_ADVANCED_DEFINITIONS = [
    [82, "scientific-calculator", "calculators", "live", "ƒx", "বৈজ্ঞানিক ক্যালকুলেটর", "Scientific Calculator", "নিরাপদে ত্রিকোণমিতি, লগ ও ঘাতের হিসাব করুন", "Calculate trigonometry, logarithms and powers safely", "#6b4e9b"],
    [83, "compound-interest", "calculators", "live", "A+", "সঞ্চয় ও চক্রবৃদ্ধি হিসাব", "Savings & Compound Interest", "সঞ্চয়ের ভবিষ্যৎ মূল্য ও অর্জিত সুদের অনুমান পান", "Estimate future savings and compound growth", "#0f6b5d"],
    [84, "work-hours", "business", "live", "HRS", "কাজের সময় ও ওভারটাইম", "Work Hours & Overtime", "শিফট, বিরতি, নিয়মিত সময় ও ওভারটাইম হিসাব করুন", "Calculate shifts, breaks, regular hours and overtime", "#c9942d"],
    [85, "profit-margin", "business", "live", "M%", "লাভ, মার্জিন ও মার্কআপ", "Profit Margin & Markup", "ক্রয়মূল্য, বিক্রয়মূল্য, লাভ ও মার্জিন বুঝুন", "Calculate cost, sale price, profit, margin and markup", "#bc3d26"],
    [86, "bill-splitter", "calculators", "live", "÷", "বিল ভাগ ক্যালকুলেটর", "Bill Splitter", "কর, সার্ভিস ও টিপসহ বিল ন্যায্যভাবে ভাগ করুন", "Split a bill fairly with tax, service and tip", "#0f6b5d"],
    [87, "pdf-organizer", "document", "live", "PDF↕", "PDF পেজ সাজান ও ঘোরান", "PDF Page Organizer", "পৃষ্ঠা নতুন ক্রমে সাজিয়ে প্রয়োজনমতো ঘোরান", "Reorder and rotate PDF pages in your browser", "#bc3d26"],
    [88, "image-watermark", "image", "live", "WM+", "ছবিতে ওয়াটারমার্ক", "Image Watermark Maker", "নিজের ছবি রক্ষায় লেখা ওয়াটারমার্ক যোগ করুন", "Add a text watermark to protect your image", "#6b4e9b"],
    [89, "timezone-converter", "calculators", "live", "TZ", "টাইম জোন কনভার্টার", "Time Zone Converter", "এক শহরের তারিখ ও সময় অন্য টাইম জোনে দেখুন", "Convert a date and time between time zones", "#c9942d"],
    [90, "whatsapp-link", "links", "live", "WA", "WhatsApp লিংক মেকার", "WhatsApp Link Generator", "নম্বর ও বার্তা দিয়ে ক্লিকযোগ্য WhatsApp লিংক বানান", "Create a WhatsApp link with a phone number and message", "#0f6b5d"],
    [91, "seo-meta", "web", "live", "SEO", "SEO মেটা ট্যাগ মেকার", "SEO Meta Tag & Social Preview", "সার্চ ও সোশ্যাল শেয়ারের মেটা ট্যাগ তৈরি করুন", "Create search and social-sharing meta tags", "#bc3d26"],
    [92, "markdown-preview", "developer", "live", "MD", "Markdown প্রিভিউয়ার", "Markdown Previewer", "নিরাপদ Markdown লিখে সঙ্গে সঙ্গে প্রিভিউ দেখুন", "Write safe Markdown and preview it instantly", "#6b4e9b"],
    [93, "regex-tester", "developer", "live", ".*", "Regex টেস্টার", "Regex Tester", "সীমাবদ্ধ ও টাইমআউটসহ regular expression পরীক্ষা করুন", "Test regular expressions with limits and a timeout", "#bc3d26"],
    [94, "contrast-checker", "web", "live", "Aa", "কালার কনট্রাস্ট চেকার", "Color Contrast Checker", "দুই রঙের WCAG contrast ratio ও pass/fail দেখুন", "Check WCAG contrast ratio and pass or fail", "#17221f"],
    [95, "utm-builder", "links", "live", "UTM", "UTM লিংক বিল্ডার", "UTM Link Builder", "ক্যাম্পেইন ট্র্যাকিং প্যারামিটারসহ লিংক বানান", "Build links with campaign tracking parameters", "#c9942d"],
    [96, "random-picker", "text", "live", "RND", "র‍্যান্ডম পিকার ও শাফল", "Random Picker & Shuffler", "তালিকা থেকে নিরাপদভাবে নাম বাছুন বা ক্রম এলোমেলো করুন", "Pick from a list or shuffle it with secure randomness", "#0f6b5d"],
    [97, "palette-extractor", "image", "live", "PAL", "ছবি থেকে কালার প্যালেট", "Image Color Palette Extractor", "ছবি থেকে প্রধান রঙগুলো খুঁজে কপি করুন", "Extract and copy the dominant colors from an image", "#c9942d"],
    [98, "file-inspector", "developer", "live", "FILE", "ফাইল টাইপ ও সাইজ ইনস্পেক্টর", "File Type & Size Inspector", "ফাইলের ধরন, সাইজ ও SHA-256 স্থানীয়ভাবে দেখুন", "Inspect file type, size and SHA-256 locally", "#17221f"],
    [99, "number-base", "developer", "live", "0x", "নাম্বার বেস কনভার্টার", "Number Base Converter", "বাইনারি, অক্টাল, দশমিক ও হেক্স রূপান্তর করুন", "Convert binary, octal, decimal and hexadecimal integers", "#6b4e9b"],
    [100, "html-entities", "developer", "live", "&;", "HTML এনটিটি কনভার্টার", "HTML Entity Encoder & Decoder", "HTML-এর বিশেষ অক্ষর নিরাপদে encode বা decode করুন", "Encode or decode HTML entities safely", "#bc3d26"]
  ];

  var ADVANCED_KEYS = new Set(window.TOOLBARI_ADVANCED_DEFINITIONS.map(function(item) { return item[1]; }));

  function advFileField(id, label, accept) {
    return '<label class="field"><span>' + escapeHtml(label) + '</span><input id="' + id + '" type="file"' + (accept ? ' accept="' + escapeHtml(accept) + '"' : '') + '></label>';
  }

  function advCheck(id, label, checked) {
    return '<label class="check-option"><input id="' + id + '" type="checkbox"' + (checked ? " checked" : "") + '><span>' + escapeHtml(label) + '</span></label>';
  }

  function advRender(toolItem, intro) {
    var privacy = localNote();
    switch (toolItem.key) {
      case "scientific-calculator":
        return workspace(intro + '<div class="tool-form">' + field("scienceExpression", L("হিসাব", "Expression"), "text", "sin(30) + sqrt(81) × 2", 'maxlength="240" inputmode="text" autocomplete="off" spellcheck="false"') + selectField("scienceAngle", L("কোণের একক", "Angle unit"), [["deg", L("ডিগ্রি (DEG)", "Degrees (DEG)")], ["rad", L("রেডিয়ান (RAD)", "Radians (RAD)")]]) + '<button class="tool-button" id="runScience" type="button">' + L("হিসাব করুন", "Calculate") + '</button><p class="micro-note">' + L("ব্যবহার করুন: + − × ÷ ^ %, বন্ধনী, sin, cos, tan, sqrt, log, ln, abs, pi ও e। কোনো code চালানো হয় না।", "Use + − × ÷ ^ %, parentheses, sin, cos, tan, sqrt, log, ln, abs, pi and e. No code is executed.") + '</p>' + privacy + '</div>', L("হিসাবের ফল", "Calculation result"), L("একটি expression লিখে হিসাব করুন।", "Enter an expression to calculate."));
      case "compound-interest":
        return workspace(intro + '<div class="tool-form"><div class="field-row">' + field("compoundInitial", L("শুরুর সঞ্চয় (৳)", "Starting balance (BDT)"), "text", "100000", 'inputmode="decimal"') + field("compoundMonthly", L("মাসিক জমা (৳)", "Monthly contribution (BDT)"), "text", "5000", 'inputmode="decimal"') + '</div><div class="field-row">' + field("compoundRate", L("বার্ষিক হার (%)", "Annual rate (%)"), "text", "8", 'inputmode="decimal"') + field("compoundYears", L("সময় (বছর)", "Time (years)"), "text", "10", 'inputmode="decimal"') + '</div>' + selectField("compoundFrequency", L("সুদ যোগ হওয়ার হার", "Compounding frequency"), [["12", L("মাসিক", "Monthly")], ["4", L("ত্রৈমাসিক", "Quarterly")], ["2", L("ছয় মাসে", "Semi-annually")], ["1", L("বার্ষিক", "Annually")]]) + '<button class="tool-button" id="runCompound" type="button">' + L("ভবিষ্যৎ মূল্য হিসাব করুন", "Calculate future value") + '</button><p class="micro-note">' + L("মাসের শেষে জমা ধরা হয়েছে। এটি একটি অনুমান; ব্যাংক ফি, কর বা পরিবর্তনশীল হার অন্তর্ভুক্ত নয়।", "Contributions are assumed at month-end. This is an estimate and excludes fees, tax and variable rates.") + '</p></div>', L("সঞ্চয়ের অনুমান", "Savings estimate"), L("পরিমাণ, হার ও সময় দিন।", "Enter the amounts, rate and time."));
      case "work-hours":
        return workspace(intro + '<div class="tool-form"><div class="field-row">' + field("workStart", L("শিফট শুরু", "Shift starts"), "time", "09:00") + field("workEnd", L("শিফট শেষ", "Shift ends"), "time", "18:00") + '</div><div class="field-row">' + field("workBreak", L("বিরতি (মিনিট)", "Break (minutes)"), "text", "60", 'inputmode="numeric"') + field("workRegular", L("নিয়মিত ঘণ্টার সীমা", "Regular-hours threshold"), "text", "8", 'inputmode="decimal"') + '</div><div class="field-row">' + field("workRate", L("প্রতি ঘণ্টার হার (৳)", "Hourly rate (BDT)"), "text", "500", 'inputmode="decimal"') + field("workMultiplier", L("ওভারটাইম গুণক", "Overtime multiplier"), "text", "1.5", 'inputmode="decimal"') + '</div><button class="tool-button" id="runWorkHours" type="button">' + L("সময় ও মজুরি হিসাব করুন", "Calculate hours and pay") + '</button><p class="micro-note">' + L("শেষ সময় আগে হলে পরের দিন ধরা হয়। নিজের চুক্তির হার ও নিয়ম লিখুন—কোনো শ্রম আইন ধরে নেওয়া হয় না।", "An earlier end time is treated as the next day. Enter your own contractual rates and rules; no labor law is assumed.") + '</p></div>', L("কাজের হিসাব", "Work summary"), L("শিফটের সময় ও আপনার নিয়ম দিন।", "Enter the shift and your own rules."));
      case "profit-margin":
        return workspace(intro + '<div class="tool-form">' + selectField("profitMode", L("যা হিসাব করবেন", "Calculation"), [["sale", L("ক্রয় ও বিক্রয় থেকে ফল", "Results from cost and sale price")], ["target", L("টার্গেট মার্জিন থেকে বিক্রয়মূল্য", "Sale price from target margin")]]) + '<div class="field-row">' + field("profitCost", L("ক্রয়মূল্য (৳)", "Cost price (BDT)"), "text", "700", 'inputmode="decimal"') + field("profitSale", L("বিক্রয়মূল্য (৳)", "Sale price (BDT)"), "text", "1000", 'inputmode="decimal"') + '</div><label class="field" id="profitTargetField" hidden><span>' + L("টার্গেট মার্জিন (%)", "Target margin (%)") + '</span><input id="profitTarget" type="text" value="30" inputmode="decimal"></label><button class="tool-button" id="runProfit" type="button">' + L("হিসাব করুন", "Calculate") + '</button><p class="micro-note">' + L("Margin বিক্রয়মূল্যের তুলনায়, markup ক্রয়মূল্যের তুলনায় হিসাব করা হয়।", "Margin is measured against sale price; markup is measured against cost.") + '</p></div>', L("লাভের হিসাব", "Profit calculation"), L("ক্রয়মূল্য ও বিক্রয় বা টার্গেট মার্জিন দিন।", "Enter cost and either sale price or target margin."));
      case "bill-splitter":
        return workspace(intro + '<div class="tool-form">' + field("billSubtotal", L("মূল বিল (৳)", "Subtotal (BDT)"), "text", "2000", 'inputmode="decimal"') + '<div class="field-row">' + field("billTax", L("কর / VAT (%)", "Tax / VAT (%)"), "text", "0", 'inputmode="decimal"') + field("billService", L("সার্ভিস চার্জ (%)", "Service charge (%)"), "text", "0", 'inputmode="decimal"') + '</div><div class="field-row">' + field("billTip", L("টিপ (%)", "Tip (%)"), "text", "10", 'inputmode="decimal"') + field("billPeople", L("কতজন", "People"), "text", "4", 'inputmode="numeric"') + '</div><button class="tool-button" id="runBill" type="button">' + L("বিল ভাগ করুন", "Split bill") + '</button><p class="micro-note">' + L("সব শতাংশ মূল বিলের উপর ধরা হয় এবং পয়সা পর্যন্ত ন্যায্যভাবে ভাগ করা হয়।", "All percentages apply to the subtotal and the final cents are distributed fairly.") + '</p></div>', L("বিল ভাগ", "Bill split"), L("বিল, অতিরিক্ত হার ও লোকসংখ্যা দিন।", "Enter the bill, rates and number of people."));
      case "pdf-organizer":
        return workspace(intro + '<div class="tool-form">' + advFileField("organizerPdf", L("PDF ফাইল", "PDF file"), "application/pdf,.pdf") + field("organizerOrder", L("নতুন পৃষ্ঠা ক্রম", "New page order"), "text", "", 'maxlength="2000" placeholder="3, 1-2, 5-4" inputmode="text"') + selectField("organizerRotation", L("সব output পৃষ্ঠা আরও ঘোরান", "Rotate every output page"), [["0", L("ঘোরাবেন না", "No extra rotation")], ["90", "90°"], ["180", "180°"], ["270", "270°"]]) + '<button class="tool-button" id="runPdfOrganizer" type="button">' + L("নতুন PDF তৈরি করুন", "Create organized PDF") + '</button><p class="micro-note">' + L("ফাঁকা রাখলে সব পৃষ্ঠা বর্তমান ক্রমে থাকবে। যেমন ৩, ১-২, ৫-৪; একই পৃষ্ঠা একাধিকবারও রাখা যায়। পাসওয়ার্ড-সুরক্ষিত PDF সমর্থিত নয়।", "Leave blank to keep every page in order. Example: 3, 1-2, 5-4; a page may be repeated. Password-protected PDFs are not supported.") + '</p>' + privacy + limitNote(40) + '</div>', L("নতুন PDF", "Organized PDF"), L("PDF ও পৃষ্ঠার ক্রম দিন।", "Choose a PDF and enter the page order."));
      case "image-watermark":
        return workspace(intro + '<div class="tool-form">' + advFileField("watermarkFile", L("ছবি", "Image"), "image/*") + field("watermarkText", L("ওয়াটারমার্ক লেখা", "Watermark text"), "text", "© ToolBari", 'maxlength="120"') + '<div class="field-row">' + selectField("watermarkPosition", L("অবস্থান", "Position"), [["center", L("মাঝখানে", "Center")], ["bottom-right", L("নিচে ডানে", "Bottom right")], ["bottom-left", L("নিচে বামে", "Bottom left")], ["top-right", L("উপরে ডানে", "Top right")], ["top-left", L("উপরে বামে", "Top left")], ["tile", L("পুরো ছবিতে পুনরাবৃত্তি", "Repeat across image")]]) + field("watermarkColor", L("লেখার রঙ", "Text color"), "color", "#ffffff") + '</div><label class="field"><span>' + L("অস্বচ্ছতা: ", "Opacity: ") + '<b id="watermarkOpacityValue">55%</b></span><input id="watermarkOpacity" type="range" min="10" max="100" value="55"></label><label class="field"><span>' + L("লেখার মাপ: ", "Text size: ") + '<b id="watermarkSizeValue">8%</b></span><input id="watermarkSize" type="range" min="3" max="20" value="8"></label><button class="tool-button" id="runWatermark" type="button">' + L("ওয়াটারমার্ক যোগ করুন", "Add watermark") + '</button>' + privacy + limitNote(20) + '</div>', L("ওয়াটারমার্ক করা ছবি", "Watermarked image"), L("ছবি ও লেখা বেছে নিন।", "Choose an image and watermark text."));
      case "timezone-converter":
        return workspace(intro + '<div class="tool-form">' + field("timezoneInput", L("তারিখ ও স্থানীয় সময়", "Date and local time"), "datetime-local", advWallInput(new Date(), "Asia/Dhaka"), 'step="60"') + '<div class="field-row">' + selectField("timezoneFrom", L("যে টাইম জোন থেকে", "From time zone"), advTimezoneOptions("Asia/Dhaka")) + selectField("timezoneTo", L("যে টাইম জোনে", "To time zone"), advTimezoneOptions("UTC")) + '</div>' + selectField("timezoneFold", L("DST-তে একই সময় দুইবার হলে", "If DST repeats the same time"), [["earlier", L("আগের সময়টি নিন", "Use the earlier occurrence")], ["later", L("পরের সময়টি নিন", "Use the later occurrence")]]) + '<button class="tool-button" id="runTimezone" type="button">' + L("সময় রূপান্তর করুন", "Convert time") + '</button><p class="micro-note">' + L("আপনার browser-এর time-zone database ব্যবহার করা হয়। DST-তে অস্তিত্বহীন সময় গ্রহণ করা হয় না; একই সময় দুইবার হলে উপরের পছন্দটি প্রযোজ্য।", "Uses your browser’s time-zone database. Nonexistent DST times are rejected; when a time repeats, the choice above is applied.") + '</p>' + privacy + '</div>', L("রূপান্তরিত সময়", "Converted time"), L("তারিখ, সময় ও দুইটি টাইম জোন বেছে নিন।", "Choose a date, time and two time zones."));
      case "whatsapp-link":
        return workspace(intro + '<div class="tool-form">' + field("whatsappPhone", L("দেশের কোডসহ নম্বর", "Phone with country code"), "tel", "+8801", 'maxlength="24" inputmode="tel" autocomplete="tel"') + textareaField("whatsappMessage", L("আগে থেকে লেখা বার্তা (ঐচ্ছিক)", "Prefilled message (optional)"), L("আসসালামু আলাইকুম…", "Hello…"), 'maxlength="4000"') + '<button class="tool-button" id="runWhatsapp" type="button">' + L("WhatsApp লিংক বানান", "Create WhatsApp link") + '</button><p class="micro-note">' + L("নম্বর আন্তর্জাতিক ফরম্যাটে দিন; +, স্পেস ও ড্যাশ নিজে থেকেই বাদ যাবে।", "Use international format; +, spaces and dashes are removed automatically.") + '</p>' + privacy + '</div>', L("শেয়ারযোগ্য লিংক", "Shareable link"), L("নম্বর ও ঐচ্ছিক বার্তা দিন।", "Enter a number and optional message."));
      case "seo-meta":
        return workspace(intro + '<div class="tool-form">' + field("seoTitle", L("পেজ শিরোনাম", "Page title"), "text", "ToolBari — Useful tools", 'maxlength="200"') + textareaField("seoDescription", L("মেটা বর্ণনা", "Meta description"), L("পেজটি কী নিয়ে সংক্ষেপে লিখুন…", "Briefly describe the page…"), 'maxlength="500"') + field("seoUrl", L("Canonical URL", "Canonical URL"), "url", "https://example.com/page", 'maxlength="2048" inputmode="url"') + field("seoImage", L("Social image URL (ঐচ্ছিক)", "Social image URL (optional)"), "url", "", 'maxlength="2048" inputmode="url"') + field("seoSite", L("সাইটের নাম", "Site name"), "text", "ToolBari", 'maxlength="100"') + '<button class="tool-button" id="runSeoMeta" type="button">' + L("ট্যাগ ও প্রিভিউ তৈরি করুন", "Create tags and preview") + '</button><p class="micro-note">' + L("ট্যাগগুলো আপনার page-এর &lt;head&gt;-এ বসান। Preview আনুমানিক; প্ল্যাটফর্মভেদে চেহারা বদলাতে পারে।", "Place these tags inside your page’s &lt;head&gt;. The preview is approximate and can vary by platform.") + '</p>' + privacy + '</div>', L("SEO ট্যাগ", "SEO tags"), L("পেজের তথ্য দিয়ে ট্যাগ তৈরি করুন।", "Enter page details to create tags."));
      case "markdown-preview":
        return workspace(intro + '<div class="tool-form">' + textareaField("markdownInput", "Markdown", "# ToolBari\n\n**সহজ**, দ্রুত ও নিরাপদ।\n\n- বাংলা\n- English", 'maxlength="100000" spellcheck="true"') + '<button class="tool-button" id="runMarkdown" type="button">' + L("প্রিভিউ দেখুন", "Preview Markdown") + '</button><p class="micro-note">' + L("Heading, list, quote, code, bold, italic ও নিরাপদ http/https/email link সমর্থিত। Raw HTML সবসময় লেখা হিসেবে দেখানো হয়।", "Supports headings, lists, quotes, code, bold, italic and safe http/https/email links. Raw HTML is always shown as text.") + '</p>' + privacy + '</div>', L("Markdown প্রিভিউ", "Markdown preview"), L("Markdown লিখে নিরাপদ preview দেখুন।", "Write Markdown to see a safe preview."));
      case "regex-tester":
        return workspace(intro + '<div class="tool-form"><div class="field-row">' + field("regexPattern", L("Pattern", "Pattern"), "text", "\\b\\w{4,}\\b", 'maxlength="500" spellcheck="false" autocomplete="off"') + field("regexFlags", L("Flags", "Flags"), "text", "gi", 'maxlength="6" spellcheck="false" autocomplete="off"') + '</div>' + textareaField("regexText", L("যে লেখায় খুঁজবেন", "Test text"), L("ToolBari দিয়ে দরকারি লেখা পরীক্ষা করুন।", "Test useful text with ToolBari."), 'maxlength="100000" spellcheck="false"') + advCheck("regexDoReplace", L("Replacement ফলও তৈরি করুন", "Also create replacement output"), false) + field("regexReplacement", L("Replacement", "Replacement"), "text", "$&", 'maxlength="2000" spellcheck="false"') + '<button class="tool-button" id="runRegex" type="button">' + L("Regex পরীক্ষা করুন", "Test regex") + '</button><p class="micro-note">' + L("Pattern আলাদা Web Worker-এ সর্বোচ্চ ৭৫০ ms চলে। খুব ধীর pattern স্বয়ংক্রিয়ভাবে বন্ধ হয়; তবুও untrusted pattern production-এ যাচাই ছাড়া ব্যবহার করবেন না।", "The pattern runs in a separate Web Worker for at most 750 ms. Very slow patterns are stopped; still review untrusted patterns before production use.") + '</p>' + privacy + '</div>', L("Regex ফল", "Regex result"), L("Pattern, flags ও লেখা দিন।", "Enter a pattern, flags and test text."));
      case "contrast-checker":
        return workspace(intro + '<div class="tool-form"><div class="field-row">' + field("contrastForeground", L("লেখার রঙ", "Text color"), "color", "#17221f") + field("contrastBackground", L("Background রঙ", "Background color"), "color", "#f5f0e6") + '</div><button class="tool-button" id="runContrast" type="button">' + L("কনট্রাস্ট যাচাই করুন", "Check contrast") + '</button><p class="micro-note">' + L("WCAG ratio: সাধারণ লেখায় AA 4.5:1, AAA 7:1; বড় লেখায় AA 3:1, AAA 4.5:1।", "WCAG thresholds: normal text AA 4.5:1 and AAA 7:1; large text AA 3:1 and AAA 4.5:1.") + '</p>' + privacy + '</div>', L("কনট্রাস্ট ফল", "Contrast result"), L("দুইটি রঙ বেছে নিন।", "Choose two colors."));
      case "utm-builder":
        return workspace(intro + '<div class="tool-form">' + field("utmUrl", L("মূল লিংক", "Destination URL"), "url", "https://example.com/offer", 'maxlength="2048" inputmode="url"') + '<div class="field-row">' + field("utmSource", "utm_source", "text", "facebook", 'maxlength="200"') + field("utmMedium", "utm_medium", "text", "social", 'maxlength="200"') + '</div>' + field("utmCampaign", "utm_campaign", "text", "eid_offer", 'maxlength="200"') + '<div class="field-row">' + field("utmTerm", L("utm_term (ঐচ্ছিক)", "utm_term (optional)"), "text", "", 'maxlength="200"') + field("utmContent", L("utm_content (ঐচ্ছিক)", "utm_content (optional)"), "text", "", 'maxlength="200"') + '</div><button class="tool-button" id="runUtm" type="button">' + L("ট্র্যাকিং লিংক বানান", "Build tracking link") + '</button><p class="micro-note">' + L("আগের query parameter ও #fragment রাখা হয়। শুধু http বা https লিংক গ্রহণ করা হয়।", "Existing query parameters and the #fragment are preserved. Only http or https URLs are accepted.") + '</p>' + privacy + '</div>', L("UTM লিংক", "UTM link"), L("লিংক ও campaign তথ্য দিন।", "Enter the link and campaign details."));
      case "random-picker":
        return workspace(intro + '<div class="tool-form">' + textareaField("randomItems", L("প্রতি লাইনে একটি item", "One item per line"), L("আম\nকাঁঠাল\nলিচু\nকমলা", "Mango\nJackfruit\nLychee\nOrange"), 'maxlength="100000"') + '<div class="field-row">' + field("randomCount", L("কতটি বাছবেন", "Number to pick"), "text", "1", 'inputmode="numeric"') + '<div class="field"><span>' + L("পছন্দ", "Option") + '</span>' + advCheck("randomUnique", L("একই item একবার", "Pick each item once"), true) + '</div></div><div class="action-row"><button class="tool-button" id="runRandomPick" type="button">' + L("বেছে নিন", "Pick items") + '</button><button class="tool-button secondary" id="runRandomShuffle" type="button">' + L("পুরো তালিকা শাফল", "Shuffle all") + '</button></div><p class="micro-note">' + L("সমর্থিত browser-এ cryptographically secure randomness ব্যবহার করা হয়। সর্বোচ্চ ১০,০০০ item।", "Uses cryptographically secure randomness in supported browsers. Maximum 10,000 items.") + '</p>' + privacy + '</div>', L("র‍্যান্ডম ফল", "Random result"), L("তালিকা লিখে বাছুন বা শাফল করুন।", "Enter a list to pick or shuffle."));
      case "palette-extractor":
        return workspace(intro + '<div class="tool-form">' + advFileField("paletteFile", L("ছবি", "Image"), "image/*") + field("paletteCount", L("কতটি রঙ", "Number of colors"), "text", "6", 'inputmode="numeric"') + '<button class="tool-button" id="runPalette" type="button">' + L("প্যালেট বের করুন", "Extract palette") + '</button><p class="micro-note">' + L("ছবির ছোট local sample থেকে dominant রঙ অনুমান করা হয়; স্বচ্ছ pixel বাদ যায়।", "Dominant colors are estimated from a small local sample; transparent pixels are ignored.") + '</p>' + privacy + limitNote(20) + '</div>', L("কালার প্যালেট", "Color palette"), L("একটি ছবি বেছে নিন।", "Choose an image."));
      case "file-inspector":
        return workspace(intro + '<div class="tool-form">' + advFileField("inspectorFile", L("ফাইল", "File"), "") + '<button class="tool-button" id="runFileInspector" type="button">' + L("ফাইল পরীক্ষা করুন", "Inspect file") + '</button><p class="micro-note">' + L("ফাইলের প্রথম byte, browser-এর MIME ও SHA-256 দেখা হয়। এটি antivirus বা ফাইল নিরাপদ হওয়ার নিশ্চয়তা নয়।", "Checks initial bytes, the browser MIME value and SHA-256. This is not antivirus and does not prove a file is safe.") + '</p>' + privacy + limitNote(32) + '</div>', L("ফাইল তথ্য", "File details"), L("একটি ফাইল বেছে নিন।", "Choose a file."));
      case "number-base":
        return workspace(intro + '<div class="tool-form">' + textareaField("baseInput", L("পূর্ণ সংখ্যা", "Integer"), "255", 'maxlength="4096" spellcheck="false" inputmode="text"') + selectField("baseFrom", L("ইনপুট base", "Input base"), [["10", L("দশমিক (10)", "Decimal (10)")], ["2", L("বাইনারি (2)", "Binary (2)")], ["8", L("অক্টাল (8)", "Octal (8)")], ["16", L("হেক্সাডেসিমাল (16)", "Hexadecimal (16)")]]) + '<button class="tool-button" id="runNumberBase" type="button">' + L("সব base-এ রূপান্তর করুন", "Convert to every base") + '</button><p class="micro-note">' + L("শুধু পূর্ণ সংখ্যা; সর্বোচ্চ ৪,০৯৬ digit। বড় সংখ্যা নির্ভুল রাখতে BigInt ব্যবহার করা হয়।", "Integers only, up to 4,096 digits. BigInt preserves exact large values.") + '</p>' + privacy + '</div>', L("নাম্বার base", "Number bases"), L("সংখ্যা ও তার base বেছে নিন।", "Enter an integer and choose its base."));
      case "html-entities":
        return workspace(intro + '<div class="tool-form">' + textareaField("entityInput", L("লেখা বা HTML entity", "Text or HTML entities"), '<section title="বাংলা & English">', 'maxlength="200000" spellcheck="false"') + selectField("entityMode", L("কাজ", "Action"), [["encode-special", L("HTML বিশেষ অক্ষর encode", "Encode HTML special characters")], ["encode-all", L("বিশেষ ও non-ASCII সব encode", "Encode special and all non-ASCII")], ["decode", L("HTML entity decode", "Decode HTML entities")]]) + '<button class="tool-button" id="runEntities" type="button">' + L("রূপান্তর করুন", "Convert") + '</button><p class="micro-note">' + L("ফল সবসময় plain text হিসেবে দেখানো হয়—কোনো decoded HTML চালানো হয় না।", "Results are always displayed as plain text; decoded HTML is never executed.") + '</p>' + privacy + '</div>', L("রূপান্তরিত লেখা", "Converted text"), L("লেখা দিন এবং encode বা decode বেছে নিন।", "Enter text and choose encode or decode."));
      default:
        return workspace(intro, L("ফলাফল", "Result"), L("ইনপুট দিয়ে কাজ শুরু করুন।", "Add your input to begin."));
    }
  }

  function advBind(toolItem) {
    switch (toolItem.key) {
      case "scientific-calculator": return advBindScientific();
      case "compound-interest": return advBindCompound();
      case "work-hours": return advBindWorkHours();
      case "profit-margin": return advBindProfit();
      case "bill-splitter": return advBindBill();
      case "pdf-organizer": return advBindPdfOrganizer();
      case "image-watermark": return advBindWatermark();
      case "timezone-converter": return advBindTimezone();
      case "whatsapp-link": return advBindWhatsapp();
      case "seo-meta": return advBindSeoMeta();
      case "markdown-preview": return advBindMarkdown();
      case "regex-tester": return advBindRegex();
      case "contrast-checker": return advBindContrast();
      case "utm-builder": return advBindUtm();
      case "random-picker": return advBindRandom();
      case "palette-extractor": return advBindPalette();
      case "file-inspector": return advBindFileInspector();
      case "number-base": return advBindNumberBase();
      case "html-entities": return advBindEntities();
    }
  }

  function advBindScientific() {
    bindSafeClick("runScience", function() {
      var expression = $("#scienceExpression").value;
      var value = advEvaluateExpression(expression, $("#scienceAngle").value);
      outputSet('<p class="workspace-kicker">' + L("ফলাফল", "Result") + '</p><div class="big-result">' + escapeHtml(advNumber(value, 12)) + '</div><p class="result-copy">' + escapeHtml(expression) + '</p>');
    });
  }

  function advEvaluateExpression(source, angleUnit) {
    var input = normalizeNumerals(source).replace(/[×✕]/g, "*").replace(/[÷]/g, "/").replace(/[−–—]/g, "-").trim();
    if (!input) throw new Error(L("একটি হিসাব লিখুন", "Enter an expression"));
    if (input.length > 240) throw new Error(L("হিসাবটি ২৪০ অক্ষরের মধ্যে রাখুন", "Keep the expression within 240 characters"));
    var tokens = [];
    var index = 0;
    while (index < input.length) {
      var rest = input.slice(index);
      var space = rest.match(/^\s+/);
      if (space) { index += space[0].length; continue; }
      var number = rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i);
      if (number) { tokens.push({ type: "number", value: Number(number[0]) }); index += number[0].length; continue; }
      var name = rest.match(/^[a-z]+/i);
      if (name) { tokens.push({ type: "name", value: name[0].toLowerCase() }); index += name[0].length; continue; }
      var char = input[index];
      if ("+-*/^()%".indexOf(char) !== -1) { tokens.push({ type: char, value: char }); index++; continue; }
      throw new Error(L("সমর্থিত চিহ্ন ও function ব্যবহার করুন", "Use only supported symbols and functions"));
    }
    var position = 0;
    var peek = function(type) { return tokens[position] && tokens[position].type === type; };
    var take = function(type) { if (!peek(type)) throw new Error(L("হিসাবের গঠন ঠিক নয়", "The expression is not structured correctly")); return tokens[position++]; };
    var parseExpression;
    var parsePrimary = function() {
      var value;
      if (peek("number")) value = take("number").value;
      else if (peek("(")) { take("("); value = parseExpression(); take(")"); }
      else if (peek("name")) {
        var name = take("name").value;
        if (name === "pi") value = Math.PI;
        else if (name === "e") value = Math.E;
        else {
          if (["sin", "cos", "tan", "sqrt", "log", "ln", "abs"].indexOf(name) === -1) throw new Error(L("অজানা function: ", "Unknown function: ") + name);
          take("(");
          var argument = parseExpression();
          take(")");
          var radians = angleUnit === "deg" ? argument * Math.PI / 180 : argument;
          if (name === "sin") value = Math.sin(radians);
          else if (name === "cos") value = Math.cos(radians);
          else if (name === "tan") {
            if (Math.abs(Math.cos(radians)) < 1e-12) throw new Error(L("এই কোণে tan নির্ধারিত নয়", "Tangent is undefined at this angle"));
            value = Math.tan(radians);
          }
          else if (name === "sqrt") value = Math.sqrt(argument);
          else if (name === "log") value = Math.log10(argument);
          else if (name === "ln") value = Math.log(argument);
          else value = Math.abs(argument);
        }
      } else throw new Error(L("সংখ্যা, function বা বন্ধনী প্রয়োজন", "Expected a number, function or parenthesis"));
      while (peek("%")) { take("%"); value /= 100; }
      return value;
    };
    var parsePower = function() {
      var left = parsePrimary();
      if (peek("^")) { take("^"); left = Math.pow(left, parseUnary()); }
      return left;
    };
    var parseUnary = function() {
      if (peek("+")) { take("+"); return parseUnary(); }
      if (peek("-")) { take("-"); return -parseUnary(); }
      return parsePower();
    };
    var parseTerm = function() {
      var value = parseUnary();
      while (peek("*") || peek("/")) {
        var operator = tokens[position++].type;
        var right = parseUnary();
        value = operator === "*" ? value * right : value / right;
      }
      return value;
    };
    parseExpression = function() {
      var value = parseTerm();
      while (peek("+") || peek("-")) {
        var operator = tokens[position++].type;
        var right = parseTerm();
        value = operator === "+" ? value + right : value - right;
      }
      return value;
    };
    var result = parseExpression();
    if (position !== tokens.length) throw new Error(L("হিসাবের শেষে অতিরিক্ত অংশ আছে", "Unexpected content at the end of the expression"));
    if (!Number.isFinite(result)) throw new Error(L("এই হিসাবের বাস্তব ও সীমিত ফল নেই", "This expression has no finite real result"));
    return Math.abs(result) < 1e-14 ? 0 : result;
  }

  function advNumber(value, digits) {
    if (!Number.isFinite(value)) return "—";
    var absolute = Math.abs(value);
    if (absolute && (absolute >= 1e15 || absolute < 1e-8)) return value.toExponential(Math.min(10, digits || 10));
    return new Intl.NumberFormat(state.lang === "bn" ? "bn-BD" : "en-US", { maximumFractionDigits: digits == null ? 6 : digits, useGrouping: true }).format(value);
  }

  function advBindCompound() {
    bindSafeClick("runCompound", function() {
      var initial = finiteInput("compoundInitial");
      var monthly = finiteInput("compoundMonthly");
      var annual = finiteInput("compoundRate");
      var years = finiteInput("compoundYears");
      var frequency = Number($("#compoundFrequency").value);
      if (initial < 0 || monthly < 0 || annual < 0 || annual > 1000 || years <= 0 || years > 100) throw new Error(L("অঋণাত্মক টাকা, ০–১০০০% হার ও ০–১০০ বছর দিন", "Use non-negative amounts, a 0–1000% rate and up to 100 years"));
      var months = Math.round(years * 12);
      if (months < 1 || months > 1200) throw new Error(L("সময় অন্তত এক মাস এবং সর্বোচ্চ ১০০ বছর দিন", "Use at least one month and no more than 100 years"));
      var periodicRate = annual / 100 / frequency;
      var monthlyRate = Math.pow(1 + periodicRate, frequency / 12) - 1;
      var balance = initial;
      for (var i = 0; i < months; i++) balance = balance * (1 + monthlyRate) + monthly;
      var contributed = initial + monthly * months;
      if (!Number.isFinite(balance)) throw new Error(L("এই মানগুলো সমর্থিত হিসাবের সীমার বাইরে", "These values exceed the supported calculation range"));
      outputSet('<p class="workspace-kicker">' + L("আনুমানিক ভবিষ্যৎ মূল্য", "Estimated future value") + '</p><div class="big-result">৳' + escapeHtml(advNumber(balance, 2)) + '</div><div class="metric-grid">' + metric("৳" + advNumber(contributed, 2), L("মোট জমা", "Total contributed")) + metric("৳" + advNumber(balance - contributed, 2), L("আনুমানিক প্রবৃদ্ধি", "Estimated growth")) + metric(advNumber(months, 0), L("মাস", "Months")) + '</div>');
    });
  }

  function advMinutes(value) {
    var match = String(value).match(/^(\d{2}):(\d{2})$/);
    if (!match) throw new Error(L("সঠিক সময় দিন", "Enter a valid time"));
    var hours = Number(match[1]);
    var minutes = Number(match[2]);
    if (hours > 23 || minutes > 59) throw new Error(L("সঠিক সময় দিন", "Enter a valid time"));
    return hours * 60 + minutes;
  }

  function advBindWorkHours() {
    bindSafeClick("runWorkHours", function() {
      var start = advMinutes($("#workStart").value);
      var end = advMinutes($("#workEnd").value);
      if (end < start) end += 1440;
      var breakMinutes = finiteInput("workBreak");
      var threshold = finiteInput("workRegular");
      var rate = finiteInput("workRate");
      var multiplier = finiteInput("workMultiplier");
      var elapsed = end - start;
      if (elapsed <= 0 || elapsed > 1440 || breakMinutes < 0 || breakMinutes >= elapsed || threshold < 0 || threshold > 24 || rate < 0 || multiplier < 0 || multiplier > 10) throw new Error(L("বিরতি, সীমা, হার ও গুণক সঠিকভাবে দিন", "Enter a valid break, threshold, rate and multiplier"));
      var total = (elapsed - breakMinutes) / 60;
      var regular = Math.min(total, threshold);
      var overtime = Math.max(0, total - threshold);
      if (rate > 1000000000) throw new Error(L("প্রতি ঘণ্টার হার ১,০০০,০০০,০০০-এর মধ্যে রাখুন", "Keep the hourly rate at or below 1,000,000,000"));
      var pay = regular * rate + overtime * rate * multiplier;
      if (!Number.isFinite(pay) || pay > Number.MAX_SAFE_INTEGER) throw new Error(L("মজুরির ফল নিরাপদ হিসাবসীমার বাইরে", "The pay result exceeds the safe calculation range"));
      outputSet('<p class="workspace-kicker">' + L("শিফট সারাংশ", "Shift summary") + '</p><div class="big-result">' + escapeHtml(advNumber(total, 2)) + ' ' + L("ঘণ্টা", "hours") + '</div><div class="metric-grid">' + metric(advNumber(regular, 2), L("নিয়মিত ঘণ্টা", "Regular hours")) + metric(advNumber(overtime, 2), L("ওভারটাইম ঘণ্টা", "Overtime hours")) + metric("৳" + advNumber(pay, 2), L("আনুমানিক মজুরি", "Estimated pay")) + '</div>');
    });
  }

  function advBindProfit() {
    var sync = function() {
      var targetMode = $("#profitMode").value === "target";
      $("#profitTargetField").hidden = !targetMode;
      $("#profitSale").closest("label").hidden = targetMode;
    };
    $("#profitMode").addEventListener("change", sync);
    sync();
    bindSafeClick("runProfit", function() {
      var cost = finiteInput("profitCost");
      if (cost <= 0) throw new Error(L("ক্রয়মূল্য ০-এর বেশি দিন", "Cost must be greater than zero"));
      var sale;
      if ($("#profitMode").value === "target") {
        var target = finiteInput("profitTarget");
        if (target < 0 || target >= 100) throw new Error(L("টার্গেট মার্জিন ০ থেকে ১০০%-এর কম দিন", "Use a target margin from 0% to below 100%"));
        sale = cost / (1 - target / 100);
      } else sale = finiteInput("profitSale");
      if (sale <= 0 || !Number.isFinite(sale)) throw new Error(L("সঠিক বিক্রয়মূল্য দিন", "Enter a valid sale price"));
      var profit = sale - cost;
      var margin = profit / sale * 100;
      var markup = profit / cost * 100;
      outputSet('<p class="workspace-kicker">' + L("ব্যবসার হিসাব", "Business calculation") + '</p><div class="big-result">৳' + escapeHtml(advNumber(sale, 2)) + '</div><div class="metric-grid">' + metric("৳" + advNumber(profit, 2), L("লাভ / ক্ষতি", "Profit / loss")) + metric(advNumber(margin, 2) + "%", L("মার্জিন", "Margin")) + metric(advNumber(markup, 2) + "%", L("মার্কআপ", "Markup")) + '</div>');
    });
  }

  function advBindBill() {
    bindSafeClick("runBill", function() {
      var subtotal = finiteInput("billSubtotal");
      var tax = finiteInput("billTax");
      var service = finiteInput("billService");
      var tip = finiteInput("billTip");
      var people = finiteInput("billPeople");
      if (subtotal < 0 || subtotal > 1000000000000 || [tax, service, tip].some(function(value) { return value < 0 || value > 1000; }) || !Number.isInteger(people) || people < 1 || people > 10000) throw new Error(L("সঠিক বিল (সর্বোচ্চ ১ ট্রিলিয়ন), ০–১০০০% হার ও ১–১০,০০০ জন দিন", "Enter a bill up to 1 trillion, rates from 0–1000%, and 1–10,000 people"));
      var extras = subtotal * (tax + service + tip) / 100;
      var cents = Math.round((subtotal + extras + Number.EPSILON) * 100);
      if (!Number.isSafeInteger(cents) || cents < 0) throw new Error(L("বিলের ফল নিরাপদ হিসাবসীমার বাইরে", "The bill result exceeds the safe calculation range"));
      var base = Math.floor(cents / people);
      var remainder = cents - base * people;
      var exact = cents / 100;
      var splitCopy = remainder ? L(remainder + " জন ৳" + ((base + 1) / 100).toFixed(2) + " এবং বাকিরা ৳" + (base / 100).toFixed(2) + " দেবেন।", remainder + " people pay ৳" + ((base + 1) / 100).toFixed(2) + "; everyone else pays ৳" + (base / 100).toFixed(2) + ".") : L("প্রত্যেকে ৳" + (base / 100).toFixed(2) + " দেবেন।", "Each person pays ৳" + (base / 100).toFixed(2) + ".");
      outputSet('<p class="workspace-kicker">' + L("প্রতি জনের ভাগ", "Share per person") + '</p><div class="big-result">৳' + escapeHtml(advNumber(exact / people, 2)) + '</div><div class="metric-grid">' + metric("৳" + advNumber(exact, 2), L("সর্বমোট", "Grand total")) + metric("৳" + advNumber(extras, 2), L("কর, সার্ভিস ও টিপ", "Tax, service and tip")) + metric(advNumber(people, 0), L("জন", "People")) + '</div><p class="result-copy">' + escapeHtml(splitCopy) + '</p>');
    });
  }

  function advParsePageOrder(value, total) {
    var input = normalizeNumerals(value).trim();
    if (!input) return Array.from({ length: total }, function(unused, index) { return index; });
    var output = [];
    var parts = input.split(",");
    if (parts.length > 500) throw new Error(L("সর্বোচ্চ ৫০০টি page অংশ ব্যবহার করুন", "Use no more than 500 page segments"));
    parts.forEach(function(raw) {
      var part = raw.trim();
      var match = part.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!match) throw new Error(L("পৃষ্ঠা ক্রমে শুধু সংখ্যা, comma ও range ব্যবহার করুন", "Use only page numbers, commas and ranges"));
      var start = Number(match[1]);
      var end = match[2] ? Number(match[2]) : start;
      if (start < 1 || start > total || end < 1 || end > total) throw new Error(L("পৃষ্ঠা ১ থেকে " + total + "-এর মধ্যে দিন", "Use page numbers from 1 to " + total));
      var step = start <= end ? 1 : -1;
      for (var page = start; ; page += step) { output.push(page - 1); if (page === end) break; if (output.length > 500) throw new Error(L("Output সর্বোচ্চ ৫০০ পৃষ্ঠা রাখুন", "Keep the output to 500 pages or fewer")); }
    });
    if (!output.length) throw new Error(L("অন্তত একটি পৃষ্ঠা রাখুন", "Keep at least one page"));
    return output;
  }

  function advBindPdfOrganizer() {
    bindSafeClick("runPdfOrganizer", async function() {
      var file = $("#organizerPdf").files[0];
      if (!file) throw new Error(L("একটি PDF বেছে নিন", "Choose a PDF"));
      ensureFileLimit(file, 40);
      if (!(file.type === "application/pdf" || /\.pdf$/i.test(file.name))) throw new Error(L("PDF ফাইল ব্যবহার করুন", "Use a PDF file"));
      await loadPdfLib();
      var source;
      try { source = await PDFLib.PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: false }); }
      catch (error) { throw new Error(L("PDF পড়া যায়নি—ফাইলটি ক্ষতিগ্রস্ত বা password-সুরক্ষিত হতে পারে", "The PDF could not be read; it may be damaged or password-protected")); }
      var total = source.getPageCount();
      if (!total || total > 500) throw new Error(L("১–৫০০ পৃষ্ঠার PDF ব্যবহার করুন", "Use a PDF containing 1–500 pages"));
      var order = advParsePageOrder($("#organizerOrder").value, total);
      var rotation = Number($("#organizerRotation").value);
      var target = await PDFLib.PDFDocument.create();
      var copied = await target.copyPages(source, order);
      copied.forEach(function(page) {
        if (rotation) page.setRotation(PDFLib.degrees(((page.getRotation().angle || 0) + rotation) % 360));
        target.addPage(page);
      });
      var bytes = await target.save();
      downloadBlob(new Blob([bytes], { type: "application/pdf" }), "toolbari-organized.pdf");
      outputSet('<p class="workspace-kicker">' + L("PDF প্রস্তুত", "PDF ready") + '</p><div class="big-result">' + displayNumber(copied.length) + '</div><h3 class="result-title">' + L("পৃষ্ঠা নতুন ক্রমে রাখা হয়েছে", "pages placed in the new order") + '</h3><p class="result-copy">' + L("ডাউনলোড শুরু হয়েছে।", "Your download has started.") + '</p>');
    });
  }

  function advBindWatermark() {
    var sync = function() {
      $("#watermarkOpacityValue").textContent = $("#watermarkOpacity").value + "%";
      $("#watermarkSizeValue").textContent = $("#watermarkSize").value + "%";
    };
    $("#watermarkOpacity").addEventListener("input", sync);
    $("#watermarkSize").addEventListener("input", sync);
    bindSafeClick("runWatermark", async function() {
      var file = $("#watermarkFile").files[0];
      var text = $("#watermarkText").value.trim();
      if (!file) throw new Error(L("একটি ছবি বেছে নিন", "Choose an image"));
      if (!text) throw new Error(L("ওয়াটারমার্ক লেখা দিন", "Enter watermark text"));
      ensureFileLimit(file, 20);
      ensureRasterImage(file);
      var image = await readImage(file);
      if (image.width * image.height > 16000000) throw new Error(L("মোবাইল ও Safari-তে স্থিতিশীলতার জন্য ১৬ megapixel-এর ছোট ছবি ব্যবহার করুন", "Use an image under 16 megapixels for mobile and Safari stability"));
      var canvas = createCanvas(image.width, image.height);
      var context = canvas.getContext("2d");
      if (!context) throw new Error(L("এই browser canvas তৈরি করতে পারেনি", "This browser could not create a canvas"));
      context.drawImage(image, 0, 0);
      var size = Math.max(12, Math.round(Math.min(canvas.width, canvas.height) * Number($("#watermarkSize").value) / 100));
      context.font = "700 " + size + "px system-ui, sans-serif";
      while (context.measureText(text).width > canvas.width * 0.88 && size > 12) { size -= 2; context.font = "700 " + size + "px system-ui, sans-serif"; }
      context.globalAlpha = Number($("#watermarkOpacity").value) / 100;
      context.fillStyle = $("#watermarkColor").value;
      context.strokeStyle = "rgba(0,0,0,.72)";
      context.lineWidth = Math.max(2, size * 0.06);
      context.textBaseline = "middle";
      var draw = function(x, y, align) { context.textAlign = align; context.strokeText(text, x, y); context.fillText(text, x, y); };
      var pad = Math.max(16, size * 0.55);
      var position = $("#watermarkPosition").value;
      if (position === "tile") {
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(-Math.PI / 6);
        context.textAlign = "center";
        var stepX = Math.max(context.measureText(text).width * 1.5, canvas.width / 2.5);
        var stepY = Math.max(size * 3.5, canvas.height / 5);
        for (var y = -canvas.height; y <= canvas.height; y += stepY) for (var x = -canvas.width; x <= canvas.width; x += stepX) { context.strokeText(text, x, y); context.fillText(text, x, y); }
        context.restore();
      } else if (position === "center") draw(canvas.width / 2, canvas.height / 2, "center");
      else {
        var right = position.indexOf("right") !== -1;
        var bottom = position.indexOf("bottom") !== -1;
        draw(right ? canvas.width - pad : pad, bottom ? canvas.height - pad - size / 2 : pad + size / 2, right ? "right" : "left");
      }
      context.globalAlpha = 1;
      showCanvasResult(canvas, L("ওয়াটারমার্ক যোগ হয়েছে", "Watermark added"), image.width + " × " + image.height + " px", "toolbari-watermarked.png");
    });
  }

  function advTimezoneOptions(selected) {
    var zones = [
      ["UTC", "UTC"], ["Asia/Dhaka", "Dhaka — UTC+06"], ["Asia/Kolkata", "Kolkata"], ["Asia/Karachi", "Karachi"], ["Asia/Dubai", "Dubai"], ["Asia/Riyadh", "Riyadh"], ["Asia/Singapore", "Singapore"], ["Asia/Tokyo", "Tokyo"], ["Asia/Shanghai", "Shanghai"], ["Europe/London", "London"], ["Europe/Paris", "Paris"], ["America/New_York", "New York"], ["America/Chicago", "Chicago"], ["America/Denver", "Denver"], ["America/Los_Angeles", "Los Angeles"], ["America/Toronto", "Toronto"], ["Australia/Sydney", "Sydney"]
    ];
    return zones.map(function(zone) { return [zone[0], zone[1], zone[0] === selected]; });
  }

  function advZonedParts(date, timeZone) {
    var formatter;
    try { formatter = new Intl.DateTimeFormat("en-CA", { timeZone: timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" }); }
    catch (error) { throw new Error(L("এই browser-এ টাইম জোনটি পাওয়া যায়নি", "This time zone is unavailable in the browser")); }
    var values = Object.create(null);
    formatter.formatToParts(date).forEach(function(part) { if (part.type !== "literal") values[part.type] = Number(part.value); });
    return { year: values.year, month: values.month, day: values.day, hour: values.hour, minute: values.minute, second: values.second };
  }

  function advWallInput(date, timeZone) {
    var parts = advZonedParts(date, timeZone);
    return String(parts.year).padStart(4, "0") + "-" + String(parts.month).padStart(2, "0") + "-" + String(parts.day).padStart(2, "0") + "T" + String(parts.hour).padStart(2, "0") + ":" + String(parts.minute).padStart(2, "0");
  }

  function advDateFromWall(value, timeZone, foldPreference) {
    var match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);
    if (!match) throw new Error(L("সঠিক তারিখ ও সময় দিন", "Enter a valid date and time"));
    var target = { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]), hour: Number(match[4]), minute: Number(match[5]), second: Number(match[6] || 0) };
    if (target.month < 1 || target.month > 12 || target.day < 1 || target.day > 31 || target.hour > 23 || target.minute > 59 || target.second > 59) throw new Error(L("সঠিক তারিখ ও সময় দিন", "Enter a valid date and time"));
    var targetUtc = Date.UTC(target.year, target.month - 1, target.day, target.hour, target.minute, target.second);
    var guess = targetUtc;
    for (var i = 0; i < 5; i++) {
      var parts = advZonedParts(new Date(guess), timeZone);
      var represented = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
      var next = guess + (targetUtc - represented);
      if (next === guess) break;
      guess = next;
    }
    var sameWallTime = function(timestamp) {
      var representedParts = advZonedParts(new Date(timestamp), timeZone);
      return ["year", "month", "day", "hour", "minute", "second"].every(function(key) { return representedParts[key] === target[key]; });
    };
    if (!sameWallTime(guess)) throw new Error(L("DST পরিবর্তনের কারণে এই স্থানীয় সময়টি নেই", "This local time is unavailable because of a DST transition"));
    var candidates = [guess];
    [1800000, 3600000, 7200000].forEach(function(delta) {
      [guess - delta, guess + delta].forEach(function(candidate) {
        if (sameWallTime(candidate) && candidates.indexOf(candidate) === -1) candidates.push(candidate);
      });
    });
    candidates.sort(function(a, b) { return a - b; });
    return { date: new Date(foldPreference === "later" ? candidates[candidates.length - 1] : candidates[0]), ambiguous: candidates.length > 1 };
  }

  function advBindTimezone() {
    bindSafeClick("runTimezone", function() {
      var from = $("#timezoneFrom").value;
      var to = $("#timezoneTo").value;
      var conversion = advDateFromWall($("#timezoneInput").value, from, $("#timezoneFold").value);
      var date = conversion.date;
      var locale = state.lang === "bn" ? "bn-BD" : "en-US";
      var formatter = new Intl.DateTimeFormat(locale, { timeZone: to, dateStyle: "full", timeStyle: "long" });
      var iso = date.toISOString();
      outputSet('<p class="workspace-kicker">' + escapeHtml(to) + '</p><h3 class="result-title">' + escapeHtml(formatter.format(date)) + '</h3><ul class="output-list"><li><span>' + L("UTC / ISO", "UTC / ISO") + '</span><strong>' + escapeHtml(iso) + '</strong></li><li><span>' + L("Unix seconds", "Unix seconds") + '</span><strong>' + escapeHtml(String(Math.floor(date.getTime() / 1000))) + '</strong></li><li><span>' + L("রূপান্তর", "Conversion") + '</span><strong>' + escapeHtml(from + " → " + to) + '</strong></li></ul>' + (conversion.ambiguous ? '<p class="micro-note" style="color:#a9bbb6">' + L("DST-এর পুনরাবৃত্ত সময়—আপনার বেছে নেওয়া occurrence ব্যবহার করা হয়েছে।", "This wall time repeats during DST; your selected occurrence was used.") + '</p>' : ''));
    });
  }

  function advHttpUrl(value, optional) {
    var raw = String(value || "").trim();
    if (!raw && optional) return "";
    if (raw.length > 2048) throw new Error(L("URL ২,০৪৮ অক্ষরের মধ্যে রাখুন", "Keep the URL within 2,048 characters"));
    var url;
    try { url = new URL(raw); } catch (error) { throw new Error(L("http বা https সহ সঠিক URL দিন", "Enter a valid URL including http or https")); }
    if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error(L("শুধু http বা https URL ব্যবহার করুন", "Use only an http or https URL"));
    return url.href;
  }

  function advBindWhatsapp() {
    bindSafeClick("runWhatsapp", function() {
      var phone = normalizeNumerals($("#whatsappPhone").value).replace(/^\s*\+/, "").replace(/[\s().-]/g, "");
      if (phone.indexOf("00") === 0) phone = phone.slice(2);
      if (!/^\d{7,15}$/.test(phone)) throw new Error(L("দেশের কোডসহ ৭–১৫ digit-এর নম্বর দিন", "Enter 7–15 digits including the country code"));
      var message = $("#whatsappMessage").value;
      var url = "https://wa.me/" + phone + (message ? "?text=" + encodeURIComponent(message) : "");
      outputSet('<p class="workspace-kicker">' + L("WhatsApp লিংক প্রস্তুত", "WhatsApp link ready") + '</p><pre class="code-output" id="whatsappOutput">' + escapeHtml(url) + '</pre><div class="action-row"><button class="tool-button secondary" id="copyWhatsapp" type="button">' + L("লিংক কপি", "Copy link") + '</button><a class="tool-button" href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + L("WhatsApp খুলুন", "Open WhatsApp") + '</a></div>');
      $("#copyWhatsapp").addEventListener("click", function() { copyText(url); });
    });
  }

  function advMetaEscape(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function advBindSeoMeta() {
    bindSafeClick("runSeoMeta", function() {
      var title = $("#seoTitle").value.trim();
      var description = $("#seoDescription").value.trim();
      var site = $("#seoSite").value.trim();
      if (!title || !description) throw new Error(L("শিরোনাম ও বর্ণনা দিন", "Enter a title and description"));
      var canonical = advHttpUrl($("#seoUrl").value);
      var image = advHttpUrl($("#seoImage").value, true);
      var tags = [
        '<title>' + title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</title>',
        '<meta name="description" content="' + advMetaEscape(description) + '">',
        '<link rel="canonical" href="' + advMetaEscape(canonical) + '">',
        '<meta property="og:type" content="website">',
        '<meta property="og:title" content="' + advMetaEscape(title) + '">',
        '<meta property="og:description" content="' + advMetaEscape(description) + '">',
        '<meta property="og:url" content="' + advMetaEscape(canonical) + '">',
        site ? '<meta property="og:site_name" content="' + advMetaEscape(site) + '">' : "",
        image ? '<meta property="og:image" content="' + advMetaEscape(image) + '">' : "",
        '<meta name="twitter:card" content="' + (image ? "summary_large_image" : "summary") + '">',
        '<meta name="twitter:title" content="' + advMetaEscape(title) + '">',
        '<meta name="twitter:description" content="' + advMetaEscape(description) + '">',
        image ? '<meta name="twitter:image" content="' + advMetaEscape(image) + '">' : ""
      ].filter(Boolean).join("\n");
      outputSet('<p class="workspace-kicker">' + L("Search / social preview", "Search / social preview") + '</p><div class="seo-preview"><p>' + escapeHtml(new URL(canonical).hostname) + '</p><h3>' + escapeHtml(title) + '</h3><span>' + escapeHtml(description) + '</span></div><pre class="code-output" id="seoMetaOutput">' + escapeHtml(tags) + '</pre><button class="tool-button secondary" id="copySeoMeta" type="button">' + L("সব ট্যাগ কপি করুন", "Copy all tags") + '</button>');
      $("#copySeoMeta").addEventListener("click", function() { copyText(tags); });
    });
  }

  function advSafeLink(href) {
    var raw = String(href || "").trim();
    if (/^mailto:[^\s]+$/i.test(raw)) return raw;
    try { var parsed = new URL(raw); if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.href; } catch (error) {}
    return "";
  }

  function advMarkdownInline(value) {
    var codes = [];
    var source = String(value).replace(/\u0000/g, "").replace(/`([^`\n]+)`/g, function(unused, code) { var token = "\u0000C" + codes.length + "\u0000"; codes.push('<code>' + escapeHtml(code) + '</code>'); return token; });
    var links = [];
    source = source.replace(/\[([^\]\n]{1,500})\]\(([^)\s]{1,2048})\)/g, function(full, label, href) {
      var safe = advSafeLink(href);
      if (!safe) return label + " (" + href + ")";
      var token = "\u0000L" + links.length + "\u0000";
      links.push('<a href="' + escapeHtml(safe) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(label) + '</a>');
      return token;
    });
    source = escapeHtml(source);
    source = source.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>").replace(/__([^_\n]+)__/g, "<strong>$1</strong>");
    source = source.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_/g, "$1<em>$2</em>");
    source = source.replace(/\u0000C(\d+)\u0000/g, function(unused, index) { return codes[Number(index)] || ""; });
    source = source.replace(/\u0000L(\d+)\u0000/g, function(unused, index) { return links[Number(index)] || ""; });
    return source;
  }

  function advMarkdownToHtml(markdown) {
    var text = String(markdown || "").replace(/\r\n?/g, "\n");
    if (text.length > 100000) throw new Error(L("Markdown ১,০০,০০০ অক্ষরের মধ্যে রাখুন", "Keep Markdown within 100,000 characters"));
    var lines = text.split("\n");
    var html = [];
    var paragraph = [];
    var list = null;
    var inCode = false;
    var code = [];
    var flushParagraph = function() { if (paragraph.length) { html.push("<p>" + paragraph.map(advMarkdownInline).join("<br>") + "</p>"); paragraph = []; } };
    var closeList = function() { if (list) { html.push("</" + list + ">"); list = null; } };
    lines.forEach(function(line) {
      if (/^\s*```/.test(line)) {
        flushParagraph(); closeList();
        if (inCode) { html.push("<pre><code>" + escapeHtml(code.join("\n")) + "</code></pre>"); code = []; inCode = false; }
        else inCode = true;
        return;
      }
      if (inCode) { code.push(line); return; }
      if (!line.trim()) { flushParagraph(); closeList(); return; }
      var heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) { flushParagraph(); closeList(); var level = heading[1].length; html.push("<h" + level + ">" + advMarkdownInline(heading[2]) + "</h" + level + ">"); return; }
      if (/^\s*(?:---+|___+)\s*$/.test(line)) { flushParagraph(); closeList(); html.push("<hr>"); return; }
      var quote = line.match(/^>\s?(.*)$/);
      if (quote) { flushParagraph(); closeList(); html.push("<blockquote>" + advMarkdownInline(quote[1]) + "</blockquote>"); return; }
      var unordered = line.match(/^\s*[-+*]\s+(.+)$/);
      var ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
      if (unordered || ordered) {
        flushParagraph();
        var type = ordered ? "ol" : "ul";
        if (list !== type) { closeList(); html.push("<" + type + ">"); list = type; }
        html.push("<li>" + advMarkdownInline((ordered || unordered)[1]) + "</li>");
        return;
      }
      closeList(); paragraph.push(line);
    });
    if (inCode) html.push("<pre><code>" + escapeHtml(code.join("\n")) + "</code></pre>");
    flushParagraph(); closeList();
    return html.join("");
  }

  function advBindMarkdown() {
    bindSafeClick("runMarkdown", function() {
      var html = advMarkdownToHtml($("#markdownInput").value);
      outputSet('<p class="workspace-kicker">' + L("নিরাপদ preview", "Safe preview") + '</p><div class="markdown-preview" id="markdownPreview">' + html + '</div><div class="action-row"><button class="tool-button secondary" id="copyMarkdownHtml" type="button">' + L("HTML কপি করুন", "Copy HTML") + '</button><button class="tool-button secondary" id="downloadMarkdownHtml" type="button">' + L("HTML ডাউনলোড", "Download HTML") + '</button></div>');
      $("#copyMarkdownHtml").addEventListener("click", function() { copyText(html); });
      $("#downloadMarkdownHtml").addEventListener("click", function() { downloadBlob(new Blob([html], { type: "text/html;charset=utf-8" }), "toolbari-markdown.html"); });
    });
  }

  function advRegexWorker(payload) {
    if (!("Worker" in window) || !("Blob" in window) || !("URL" in window)) return Promise.reject(new Error(L("এই browser-এ নিরাপদ Worker নেই", "This browser does not support the required safe Worker")));
    var workerSource = 'self.onmessage=function(event){try{var d=event.data;var r=new RegExp(d.pattern,d.flags);var scanFlags=d.flags.indexOf("g")===-1?d.flags+"g":d.flags;var scan=new RegExp(d.pattern,scanFlags);var matches=[];var m;while((m=scan.exec(d.text))!==null){matches.push({match:m[0],index:m.index,groups:Array.prototype.slice.call(m,1)});if(matches.length>=500)break;if(m[0]===""){var next=scan.lastIndex;if(scan.unicode&&next<d.text.length){var first=d.text.charCodeAt(next);var second=next+1<d.text.length?d.text.charCodeAt(next+1):0;scan.lastIndex=next+(first>=55296&&first<=56319&&second>=56320&&second<=57343?2:1);}else scan.lastIndex=next+1;}}var replaced=d.replace?d.text.replace(r,d.replacement):null;if(replaced&&replaced.length>200000)replaced=replaced.slice(0,200000)+"\\n…";self.postMessage({matches:matches,replaced:replaced,truncated:matches.length>=500});}catch(error){self.postMessage({error:error&&error.message?error.message:String(error)});}};';
    var url = URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" }));
    return new Promise(function(resolve, reject) {
      var worker = new Worker(url);
      var finished = false;
      var cleanup = function() { if (finished) return; finished = true; clearTimeout(timer); worker.terminate(); URL.revokeObjectURL(url); };
      var timer = setTimeout(function() { cleanup(); reject(new Error(L("Regex ৭৫০ ms-এর মধ্যে শেষ হয়নি এবং বন্ধ করা হয়েছে", "The regex exceeded 750 ms and was stopped"))); }, 750);
      worker.onmessage = function(event) { var result = event.data || {}; cleanup(); if (result.error) reject(new Error(result.error)); else resolve(result); };
      worker.onerror = function() { cleanup(); reject(new Error(L("Regex Worker চালানো যায়নি", "The regex Worker could not run"))); };
      worker.postMessage(payload);
    });
  }

  function advBindRegex() {
    bindSafeClick("runRegex", async function() {
      var pattern = $("#regexPattern").value;
      var flags = $("#regexFlags").value.trim();
      var text = $("#regexText").value;
      if (!pattern) throw new Error(L("একটি pattern দিন", "Enter a pattern"));
      if (pattern.length > 500 || text.length > 100000) throw new Error(L("Pattern ৫০০ এবং লেখা ১,০০,০০০ অক্ষরের মধ্যে রাখুন", "Keep the pattern within 500 and text within 100,000 characters"));
      if (!/^[gimsuy]*$/.test(flags) || new Set(flags).size !== flags.length) throw new Error(L("শুধু unique g, i, m, s, u, y flags ব্যবহার করুন", "Use unique g, i, m, s, u and y flags only"));
      var result = await advRegexWorker({ pattern: pattern, flags: flags, text: text, replace: $("#regexDoReplace").checked, replacement: $("#regexReplacement").value });
      var rows = result.matches.slice(0, 100).map(function(match, index) { return '<li><span>#' + displayNumber(index + 1) + ' · index ' + displayNumber(match.index) + '</span><strong>' + escapeHtml(match.match || L("(খালি match)", "(empty match)")) + '</strong></li>'; }).join("");
      outputSet('<p class="workspace-kicker">' + L("Regex match", "Regex matches") + '</p><div class="big-result">' + displayNumber(result.matches.length) + '</div>' + (rows ? '<ul class="output-list">' + rows + '</ul>' : '<p class="result-copy">' + L("কোনো match পাওয়া যায়নি।", "No matches found.") + '</p>') + (result.truncated ? '<p class="micro-note">' + L("প্রথম ৫০০ match পর্যন্ত গোনা হয়েছে।", "Stopped after the first 500 matches.") + '</p>' : '') + (result.replaced !== null ? '<p class="workspace-kicker">' + L("Replacement ফল", "Replacement result") + '</p><pre class="code-output" id="regexReplaceOutput">' + escapeHtml(result.replaced) + '</pre><button class="tool-button secondary" id="copyRegexReplace" type="button">' + L("ফল কপি করুন", "Copy result") + '</button>' : ''));
      if (result.replaced !== null) $("#copyRegexReplace").addEventListener("click", function() { copyText(result.replaced); });
    });
  }

  function advRgb(hex) {
    var match = String(hex).match(/^#([0-9a-f]{6})$/i);
    if (!match) throw new Error(L("সঠিক HEX রঙ দিন", "Enter a valid HEX color"));
    var value = parseInt(match[1], 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  }

  function advLuminance(hex) {
    var rgb = advRgb(hex).map(function(channel) { var value = channel / 255; return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4); });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  function advPass(value, minimum) { return value >= minimum ? L("পাস", "Pass") : L("ফেল", "Fail"); }

  function advBindContrast() {
    var run = function() {
      var foreground = $("#contrastForeground").value;
      var background = $("#contrastBackground").value;
      var first = advLuminance(foreground);
      var second = advLuminance(background);
      var ratio = (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
      outputSet('<p class="workspace-kicker">WCAG contrast</p><div class="big-result">' + escapeHtml(ratio.toFixed(2)) + ':1</div><div class="contrast-preview" style="color:' + foreground + ';background:' + background + '"><strong>ToolBari · টুলবাড়ি</strong><span>' + L("পড়তে কেমন দেখায়", "How this combination reads") + '</span></div><div class="metric-grid">' + metric(advPass(ratio, 4.5), "AA · " + L("সাধারণ লেখা", "normal text")) + metric(advPass(ratio, 7), "AAA · " + L("সাধারণ লেখা", "normal text")) + metric(advPass(ratio, 3), "AA · " + L("বড় লেখা", "large text")) + metric(advPass(ratio, 4.5), "AAA · " + L("বড় লেখা", "large text")) + '</div>');
    };
    bindSafeClick("runContrast", run);
    ["contrastForeground", "contrastBackground"].forEach(function(id) { $("#" + id).addEventListener("input", run); });
    run();
  }

  function advBindUtm() {
    bindSafeClick("runUtm", function() {
      var url = new URL(advHttpUrl($("#utmUrl").value));
      var values = { utm_source: $("#utmSource").value.trim(), utm_medium: $("#utmMedium").value.trim(), utm_campaign: $("#utmCampaign").value.trim(), utm_term: $("#utmTerm").value.trim(), utm_content: $("#utmContent").value.trim() };
      if (!values.utm_source || !values.utm_medium || !values.utm_campaign) throw new Error(L("source, medium ও campaign দিন", "Enter source, medium and campaign"));
      Object.keys(values).forEach(function(key) { if (values[key]) url.searchParams.set(key, values[key]); else url.searchParams.delete(key); });
      var result = url.href;
      showCopyableResult(L("UTM লিংক", "UTM link"), result, "toolbari-utm-link.txt", L("আগের query parameter ও fragment রাখা হয়েছে।", "Existing query parameters and the fragment were preserved."));
    });
  }

  function advRandomBelow(maximum) {
    if (!(window.crypto && crypto.getRandomValues)) throw new Error(L("এই browser-এ নিরাপদ random generator নেই", "Secure randomness is unavailable in this browser"));
    if (!Number.isInteger(maximum) || maximum < 1 || maximum > 4294967295) throw new Error(L("Random সীমা সঠিক নয়", "Invalid random range"));
    var limit = Math.floor(4294967296 / maximum) * maximum;
    var array = new Uint32Array(1);
    do { crypto.getRandomValues(array); } while (array[0] >= limit);
    return array[0] % maximum;
  }

  function advShuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i--) { var j = advRandomBelow(i + 1); var temporary = copy[i]; copy[i] = copy[j]; copy[j] = temporary; }
    return copy;
  }

  function advRandomItems() {
    var input = $("#randomItems").value;
    if (input.length > 100000) throw new Error(L("তালিকা ১,০০,০০০ অক্ষরের মধ্যে রাখুন", "Keep the list within 100,000 characters"));
    var items = input.replace(/\r\n?/g, "\n").split("\n").map(function(item) { return item.trim(); }).filter(Boolean);
    if (!items.length) throw new Error(L("অন্তত একটি item দিন", "Enter at least one item"));
    if (items.length > 10000) throw new Error(L("সর্বোচ্চ ১০,০০০ item দিন", "Use no more than 10,000 items"));
    return items;
  }

  function advBindRandom() {
    bindSafeClick("runRandomPick", function() {
      var items = advRandomItems();
      var count = finiteInput("randomCount");
      if (!Number.isInteger(count) || count < 1 || count > 10000) throw new Error(L("১–১০,০০০-এর মধ্যে পূর্ণ সংখ্যা দিন", "Use a whole number from 1–10,000"));
      var unique = $("#randomUnique").checked;
      if (unique) items = Array.from(new Set(items));
      if (unique && count > items.length) throw new Error(L("Unique বাছাইয়ের সংখ্যা item-এর চেয়ে বেশি হতে পারে না", "A unique pick cannot exceed the number of items"));
      var result = unique ? advShuffle(items).slice(0, count) : Array.from({ length: count }, function() { return items[advRandomBelow(items.length)]; });
      showCopyableResult(L("বাছাই করা item", "Selected items"), result.join("\n"), "toolbari-random-picks.txt", displayNumber(items.length) + " " + L("item থেকে", "items in the source list"));
    });
    bindSafeClick("runRandomShuffle", function() {
      var result = advShuffle(advRandomItems());
      showCopyableResult(L("শাফল করা তালিকা", "Shuffled list"), result.join("\n"), "toolbari-shuffled-list.txt");
    });
  }

  function advColorHex(red, green, blue) {
    return "#" + [red, green, blue].map(function(value) { return Math.max(0, Math.min(255, value)).toString(16).padStart(2, "0"); }).join("").toUpperCase();
  }

  function advBindPalette() {
    bindSafeClick("runPalette", async function() {
      var file = $("#paletteFile").files[0];
      var count = finiteInput("paletteCount");
      if (!file) throw new Error(L("একটি ছবি বেছে নিন", "Choose an image"));
      if (!Number.isInteger(count) || count < 3 || count > 10) throw new Error(L("৩ থেকে ১০টি রঙ বেছে নিন", "Choose from 3 to 10 colors"));
      ensureFileLimit(file, 20); ensureRasterImage(file);
      var image = await readImage(file);
      if (image.width * image.height > 16000000) throw new Error(L("মোবাইল ও Safari-তে স্থিতিশীলতার জন্য ১৬ megapixel-এর ছোট ছবি ব্যবহার করুন", "Use an image under 16 megapixels for mobile and Safari stability"));
      var scale = Math.min(1, 96 / Math.max(image.width, image.height));
      var canvas = createCanvas(Math.max(1, image.width * scale), Math.max(1, image.height * scale));
      var context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) throw new Error(L("এই browser ছবির pixel পড়তে পারেনি", "This browser could not read image pixels"));
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      var pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      var buckets = new Map();
      for (var i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] < 128) continue;
        var r = Math.min(255, Math.round(pixels[i] / 32) * 32);
        var g = Math.min(255, Math.round(pixels[i + 1] / 32) * 32);
        var b = Math.min(255, Math.round(pixels[i + 2] / 32) * 32);
        var key = r + "," + g + "," + b;
        buckets.set(key, (buckets.get(key) || 0) + 1);
      }
      var candidates = Array.from(buckets.entries()).sort(function(a, b) { return b[1] - a[1]; }).map(function(entry) { return entry[0].split(",").map(Number); });
      if (!candidates.length) throw new Error(L("ছবিতে দৃশ্যমান রঙ পাওয়া যায়নি", "No visible colors were found in the image"));
      var selected = [];
      candidates.forEach(function(color) {
        if (selected.length >= count) return;
        var distinct = selected.every(function(existing) { var dr = color[0] - existing[0]; var dg = color[1] - existing[1]; var db = color[2] - existing[2]; return Math.sqrt(dr * dr + dg * dg + db * db) >= 48; });
        if (distinct) selected.push(color);
      });
      candidates.forEach(function(color) { if (selected.length < count && selected.indexOf(color) === -1) selected.push(color); });
      var colors = selected.slice(0, count).map(function(color) { return advColorHex(color[0], color[1], color[2]); });
      var swatches = colors.map(function(color) { var luminance = advLuminance(color); return '<button type="button" class="palette-swatch" data-palette-color="' + color + '" style="background:' + color + ';color:' + (luminance > 0.45 ? "#17221f" : "#ffffff") + '"><span>' + color + '</span></button>'; }).join("");
      outputSet('<p class="workspace-kicker">' + L("প্রধান রঙ", "Dominant colors") + '</p><div class="palette-grid">' + swatches + '</div><button class="tool-button secondary" id="copyPalette" type="button">' + L("সব HEX কপি করুন", "Copy all HEX values") + '</button>');
      $$('[data-palette-color]', $("#workspaceOutput")).forEach(function(button) { button.addEventListener("click", function() { copyText(button.dataset.paletteColor); }); });
      $("#copyPalette").addEventListener("click", function() { copyText(colors.join(", ")); });
    });
  }

  function advMagicType(bytes) {
    var starts = function(values) { return values.every(function(value, index) { return bytes[index] === value; }); };
    if (starts([0x25, 0x50, 0x44, 0x46])) return "PDF document";
    if (starts([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return "PNG image";
    if (starts([0xff, 0xd8, 0xff])) return "JPEG image";
    if (starts([0x47, 0x49, 0x46, 0x38])) return "GIF image";
    if (starts([0x52, 0x49, 0x46, 0x46]) && String.fromCharCode.apply(null, bytes.slice(8, 12)) === "WEBP") return "WebP image";
    if (starts([0x50, 0x4b, 0x03, 0x04]) || starts([0x50, 0x4b, 0x05, 0x06]) || starts([0x50, 0x4b, 0x07, 0x08])) return "ZIP / Office archive";
    if (starts([0x1f, 0x8b])) return "GZIP archive";
    if (starts([0x7f, 0x45, 0x4c, 0x46])) return "ELF executable";
    if (starts([0x4d, 0x5a])) return "Windows executable";
    if (starts([0x49, 0x44, 0x33]) || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) return "MP3 audio";
    if (String.fromCharCode.apply(null, bytes.slice(4, 8)) === "ftyp") return "ISO media (MP4/HEIF family)";
    return L("চেনা signature পাওয়া যায়নি", "No recognized signature");
  }

  function advHex(bytes) { return Array.from(bytes).map(function(value) { return value.toString(16).padStart(2, "0"); }).join(""); }

  function advBindFileInspector() {
    bindSafeClick("runFileInspector", async function() {
      var file = $("#inspectorFile").files[0];
      if (!file) throw new Error(L("একটি ফাইল বেছে নিন", "Choose a file"));
      ensureFileLimit(file, 32);
      if (!(window.crypto && crypto.subtle)) throw new Error(L("এই browser-এ SHA-256 API নেই", "SHA-256 is unavailable in this browser"));
      var header = new Uint8Array(await file.slice(0, 32).arrayBuffer());
      var buffer = await file.arrayBuffer();
      var digest = advHex(new Uint8Array(await crypto.subtle.digest("SHA-256", buffer)));
      var extension = /\.([^.]+)$/.test(file.name) ? file.name.match(/\.([^.]+)$/)[1].toLocaleLowerCase() : L("নেই", "None");
      var modified = file.lastModified ? new Date(file.lastModified).toLocaleString(state.lang === "bn" ? "bn-BD" : undefined) : L("জানা নেই", "Unknown");
      outputSet('<p class="workspace-kicker">' + L("ফাইল পরিচিতি", "File identity") + '</p><h3 class="result-title">' + escapeHtml(file.name) + '</h3><ul class="output-list"><li><span>' + L("সাইজ", "Size") + '</span><strong>' + escapeHtml(humanBytes(file.size)) + '</strong></li><li><span>' + L("Extension", "Extension") + '</span><strong>' + escapeHtml(extension) + '</strong></li><li><span>' + L("Browser MIME", "Browser MIME") + '</span><strong>' + escapeHtml(file.type || L("দেওয়া হয়নি", "Not provided")) + '</strong></li><li><span>' + L("Magic bytes", "Magic bytes") + '</span><strong>' + escapeHtml(advMagicType(header)) + '</strong></li><li><span>' + L("শেষ পরিবর্তন", "Last modified") + '</span><strong>' + escapeHtml(modified) + '</strong></li></ul><p class="workspace-kicker">SHA-256</p><pre class="code-output" id="fileHashOutput">' + digest + '</pre><button class="tool-button secondary" id="copyFileHash" type="button">' + L("হ্যাশ কপি করুন", "Copy hash") + '</button><p class="micro-note">' + L("ধরনগুলো না মিললে ফাইলটি সন্দেহজনক হতে পারে; এটি নিরাপত্তা verdict নয়।", "A mismatch can be suspicious, but this is not a security verdict.") + '</p>');
      $("#copyFileHash").addEventListener("click", function() { copyText(digest); });
    });
  }

  function advBindNumberBase() {
    bindSafeClick("runNumberBase", function() {
      if (typeof BigInt !== "function") throw new Error(L("এই browser-এ BigInt সমর্থিত নয়", "This browser does not support BigInt"));
      var raw = normalizeNumerals($("#baseInput").value).trim().replace(/[\s_]/g, "");
      if (!raw) throw new Error(L("একটি পূর্ণ সংখ্যা দিন", "Enter an integer"));
      var sign = raw.charAt(0) === "-" ? BigInt(-1) : BigInt(1);
      if (raw.charAt(0) === "+" || raw.charAt(0) === "-") raw = raw.slice(1);
      var base = Number($("#baseFrom").value);
      var patterns = { 2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^\d+$/, 16: /^[0-9a-f]+$/i };
      raw = raw.replace(base === 16 && /^0x/i.test(raw) ? /^0x/i : base === 2 && /^0b/i.test(raw) ? /^0b/i : base === 8 && /^0o/i.test(raw) ? /^0o/i : /$^/, "");
      if (!raw || raw.length > 4096 || !patterns[base].test(raw)) throw new Error(L("নির্বাচিত base-এর সঠিক digit সর্বোচ্চ ৪,০৯৬টি দিন", "Enter up to 4,096 valid digits for the selected base"));
      var prefixes = { 2: "0b", 8: "0o", 10: "", 16: "0x" };
      var number;
      try { number = BigInt(prefixes[base] + raw) * sign; } catch (error) { throw new Error(L("সংখ্যাটি রূপান্তর করা যায়নি", "The number could not be converted")); }
      var zero = BigInt(0);
      var prefix = number < zero ? "-" : "";
      var absolute = number < zero ? -number : number;
      var result = "BIN  " + prefix + absolute.toString(2) + "\nOCT  " + prefix + absolute.toString(8) + "\nDEC  " + number.toString(10) + "\nHEX  " + prefix + absolute.toString(16).toUpperCase();
      showCopyableResult(L("সব নাম্বার base", "Every number base"), result, "toolbari-number-bases.txt");
    });
  }

  function advEncodeEntities(value, all) {
    var special = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return Array.from(String(value)).map(function(character) {
      if (special[character]) return special[character];
      var code = character.codePointAt(0);
      return all && code > 127 ? "&#x" + code.toString(16).toUpperCase() + ";" : character;
    }).join("");
  }

  function advDecodeEntities(value) {
    var safe = String(value).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var textarea = document.createElement("textarea");
    textarea.innerHTML = safe;
    return textarea.value;
  }

  function advBindEntities() {
    bindSafeClick("runEntities", function() {
      var input = $("#entityInput").value;
      var mode = $("#entityMode").value;
      var result = mode === "decode" ? advDecodeEntities(input) : advEncodeEntities(input, mode === "encode-all");
      showCopyableResult(L("রূপান্তরিত লেখা", "Converted text"), result, "toolbari-html-entities.txt", L("ফল plain text; browser এটি HTML হিসেবে চালায়নি।", "The result is plain text and was not executed as HTML."));
    });
  }

  window.renderAdvancedTool = function(toolItem, intro) {
    if (!toolItem || !ADVANCED_KEYS.has(toolItem.key)) return "";
    return advRender(toolItem, intro || "");
  };

  window.bindAdvancedTool = function(toolItem) {
    if (!toolItem || !ADVANCED_KEYS.has(toolItem.key)) return;
    return advBind(toolItem);
  };
})();

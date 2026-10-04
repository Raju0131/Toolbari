# টুলবাড়ি (ToolBari)

বাংলা ও ইংরেজিতে ১০০টি দরকারি টুলের একটি গোপনীয়তা-কেন্দ্রিক ক্যাটালগ। বর্তমানে ৭১টি সরাসরি ব্যবহারযোগ্য, ২০টি Beta, ৮টিতে অনুমোদিত লাইভ সেবা/ব্যাকএন্ড প্রয়োজন, এবং ১টিতে নিরাপদ বিকল্প দেওয়া হয়। মূল প্রকাশযোগ্য ওয়েবসাইটটি `dist/` ফোল্ডারে আছে। বেশিরভাগ কাজ ব্যবহারকারীর ব্রাউজারেই সম্পন্ন হয়।

## GitHub-এ আপলোড ও GitHub Pages চালু করা

1. GitHub-এ একটি নতুন repository তৈরি করুন।
2. ডাউনলোড করা ZIP extract করে **ভেতরের সব ফাইল ও ফোল্ডার** repository-র root-এ upload করুন। `.github` ফোল্ডারটিও অবশ্যই রাখতে হবে।
3. ফাইলগুলো `main` branch-এ commit করুন।
4. repository-র **Settings → Pages → Build and deployment → Source** থেকে **GitHub Actions** নির্বাচন করুন।
5. **Actions** tab-এ “Deploy ToolBari to GitHub Pages” workflow শেষ হলে দেখানো Pages URL খুলুন।

Workflow প্রকাশের আগে নিজে থেকেই:

- canonical, Open Graph, structured data, sitemap ও robots URL-কে সঠিক GitHub Pages URL-এ বদলায়;
- `owner.github.io/repository/` ধরনের project subpath ঠিক রাখে;
- web app manifest-এর start URL, scope ও icon path subpath-safe করে।

> বর্তমান `toolbari.jben06503.chatgpt.site` deployment-টি private এবং লগইন ছাড়া HTTP 401 দেয়। তাই সেখানে SEO ফাইল থাকলেও search engine এখন সেটি crawl/index করতে পারবে না। Search indexing চাইলে GitHub Pages site-টির public visibility নিশ্চিত করুন। প্রকাশের আগে Contact page-এ নিজের বাস্তব যোগাযোগের মাধ্যম যোগ করাও ভালো।

PDF কমপ্রেসর ও Word/PDF কনভার্টারের সীমাবদ্ধতা টুলের ভেতরে দেখানো আছে। বিশেষত স্বাক্ষরিত PDF আবার সেভ করবেন না; DOCX আমদানিতে মূল নকশা, ছবি বা টেবিল সংরক্ষিত হয় না। কিছু Beta টুল প্রথম ব্যবহারে বাইরের library বা language data লোড করে, যদিও ফাইল ব্রাউজারেই প্রসেস হয়।

## নিজের কম্পিউটারে দেখা

Node.js ও pnpm থাকলে repository folder-এ চালান:

```powershell
pnpm install
pnpm serve
```

তারপর `http://127.0.0.1:4173` খুলুন।

## পরীক্ষা চালানো

প্রথমবার browser runtime ইনস্টল করুন:

```powershell
pnpm exec playwright install webkit
```

Preview server চালু রেখে নতুন PowerShell window-তে:

```powershell
$env:BASE_URL = "http://127.0.0.1:4173"
pnpm test:e2e
pnpm test:firefox
```

শুধু mobile WebKit পরীক্ষা করতে `pnpm test:e2e:mobile` ব্যবহার করুন। `test:firefox` আসল ইনস্টল করা Firefox-কে Selenium দিয়ে পরীক্ষা করে; Chrome, Edge ও Firefox project চালাতে কম্পিউটারে ঐ browserগুলো ইনস্টল থাকতে হবে।

## GitHub Pages build স্থানীয়ভাবে প্রস্তুত করা

প্রয়োজনে নিজের domain বা Pages URL দিয়ে একই output বানানো যায়:

```powershell
$env:SITE_URL = "https://your-name.github.io/your-repository/"
node scripts/prepare-pages.mjs
```

তৈরি output থাকবে `.pages-dist/`-এ; এটি generated folder, তাই Git-এ commit করার দরকার নেই।

## English quick start

Upload every extracted file (including `.github`) to the root of a GitHub repository on the `main` branch. In **Settings → Pages**, select **GitHub Actions** as the source. The included workflow rewrites all public SEO URLs for the final Pages address, supports repository subpaths, and deploys `dist/` automatically.

For a local preview, run `pnpm install` and `pnpm serve`. With that server running, set `BASE_URL=http://127.0.0.1:4173`, run `pnpm test:e2e`, then run `pnpm test:firefox` for the installed Firefox browser (PowerShell syntax is shown above).

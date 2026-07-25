# موقع الشركة المصرية لمهمات المصانع — elmasriasupplies.com

موقع تعريفي متعدد الصفحات (10 صفحات) — HTML/CSS/JS خالص، من غير أي داشبورد أو قواعد بيانات.

## محتويات المجلد
- `index.html` + 9 صفحات داخلية
- `assets/css/style.css` — التصميم كله
- `assets/js/main.js` — القائمة والحركات وفورم الواتساب
- `assets/img/` — الصور واللوجو والأيقونات (CREDITS.txt فيه مصادر الصور)
- `sitemap.xml` + `robots.txt` — جاهزين للأرشفة

## خطوات الرفع (أي استضافة static)
1. ارفع محتويات المجلد كله في `public_html` (أو root الاستضافة).
2. اربط الدومين `elmasriasupplies.com` بالاستضافة وفعّل شهادة SSL (Let's Encrypt مجانية).
3. اتأكد إن الموقع بيفتح على `https://elmasriasupplies.com`.

## أرشفة جوجل (Google Search Console)
1. ادخل على search.google.com/search-console وأضف الدومين `elmasriasupplies.com` (نوع Domain).
2. أثبت الملكية عن طريق سجل TXT في DNS الدومين.
3. من قائمة Sitemaps أرسل: `https://elmasriasupplies.com/sitemap.xml`
4. من أداة URL Inspection اطلب فهرسة الصفحة الرئيسية + صفحات الخدمات.
5. الفهرسة الكاملة عادة بتاخد من أيام لأسبوعين.

## ملاحظات SEO المطبقة
- Title + Description فريدين لكل صفحة بالكلمات المفتاحية.
- Canonical URLs على الدومين + Open Graph + Twitter Cards + صورة مشاركة مخصصة.
- Schema.org: Organization + WebSite + LocalBusiness + Service + BreadcrumbList.
- سرعة: صور مضغوطة + lazy loading + خط Google Fonts بـ preconnect.

## تعديلات شائعة
- تغيير الألوان: عدّل متغيرات `:root` أول ملف `assets/css/style.css`.
- تغيير صورة: استبدل الملف بنفس الاسم داخل `assets/img/`.
- أرقام التليفونات والإيميل: ابحث واستبدل في ملفات HTML (موجودة في التوب بار والفوتر وصفحة الاتصال).

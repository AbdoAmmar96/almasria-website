#!/usr/bin/env bash
# يحط بصمة (hash) على روابط الـ CSS/JS في كل صفحات HTML.
#
# ليه؟ السيرفر بيبعت cache-control: max-age=604800 (7 أيام) للأصول،
# فمن غير رقم إصدار في الرابط، المتصفح بيفضل شغال بنسخة قديمة بعد أي تعديل.
# الـ HTML نفسه بيتحدّث فورًا، فتغيير الـ hash بيجبر المتصفح يجيب الملف الجديد.
#
# شغّله قبل كل رفع:  ./stamp-assets.sh
set -euo pipefail
cd "$(dirname "$0")"

css=$(md5sum assets/css/style.css | cut -c1-8)
js=$(md5sum assets/js/main.js  | cut -c1-8)

for f in *.html; do
  # يشيل أي ?v=... قديم ويحط الجديد
  sed -i -E "s#(href=\"assets/css/style\.css)(\?v=[a-f0-9]+)?\"#\1?v=$css\"#g" "$f"
  sed -i -E "s#(src=\"assets/js/main\.js)(\?v=[a-f0-9]+)?\"#\1?v=$js\"#g"    "$f"
done

echo "style.css -> ?v=$css"
echo "main.js   -> ?v=$js"
echo "stamped $(ls *.html | wc -l) pages"

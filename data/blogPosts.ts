import type { BlogPost } from '../types';

// Static blog content for SEO-heavy posts. These posts are shipped with the
// application rather than coming from Supabase. Add new entries here whenever
// you want to publish a new article.

const posts: BlogPost[] = [
  {
    id: 'medspa-marketing-math',
    title: 'Med Spa Marketing Math: Calculate Your Growth ROI',
    excerpt: `Learn how to quantify the return on investment for your med spa marketing campaigns and make data-backed decisions that drive predictable revenue.`,

    content: `
<h2 class="bg-yellow-200 inline-block px-2 py-1 rounded"><strong>Why Med Spa Marketing Needs a Numbers Game</strong></h2>
<p>Running a med spa is part art and part science. You can design beautiful
websites, run attractive promos, and shoot high-quality videos, but none of
that matters if you don’t know whether your marketing spend is actually
paying off. Below we break down the simple formulas that show you exactly
how many new patients you need and what it costs to acquire them. Treat
this as a checklist you can revisit with every campaign.</p>

<div class="my-8 p-6 bg-gray-50 rounded-lg">
  <h3 class="text-xl font-semibold mb-4">Step 1: Determine Your Average Patient Value</h3>
  <p>Start with conservative figures. For example, if the typical patient
  schedules an initial consultation for <strong>$150</strong> and then converts
to a series of Botox or CoolSculpting treatments worth <strong>$2,500</strong>
over six months, your average value is about <strong>$1,325</strong> per
  patient.</p>
</div>

<div class="my-8 p-6 bg-gray-50 rounded-lg">
  <h3 class="text-xl font-semibold mb-4">Step 2: Know Your Conversion Rates</h3>
  <p>Track two key conversion rates:</p>
  <ul class="list-disc list-inside">
    <li>the percentage of website visitors who book consultations, and</li>
    <li>the percentage of consultations that turn into paying customers.</li>
  </ul>
  <p>If 3 % of visitors book and 30 % of consultations convert, your
  visitor‑to‑customer rate is 0.9 %.</p>
</div>

<div class="my-8 p-6 bg-gray-50 rounded-lg">
  <h3 class="text-xl font-semibold mb-4">Step 3: Calculate Cost Per Lead and Cost Per Acquisition</h3>
  <p>If you spend <strong>$5,000</strong> on Facebook and Google ads in a month
  and generate 200 qualified leads, your <strong>cost per lead</strong> is
  $25. With a 0.9 % visitor‑to‑customer rate that equates to roughly 1.8 paying
  customers – or a <strong>cost per acquisition</strong> of about
  $2,778.</p>
</div>

<div class="my-8 p-6 bg-gray-50 rounded-lg">
  <h3 class="text-xl font-semibold mb-4">Step 4: Put It All Together</h3>
  <p>Subtract your cost per acquisition from the average patient value. Using the
  numbers above, <strong>$1,325 – $2,778</strong> yields a negative return.
  That’s a campaign that needs fine‑tuning. The math makes the decision clear:
  either improve conversions or lower ad spend.</p>
</div>

<h3>Conclusion</h3>
<p>Marketing math doesn’t have to be complicated. With a few simple metrics you
can judge any campaign at a glance and steer your med spa toward predictable
growth. Bookmark this formula and run it for every new strategy you test.</p>
`,
    image: '/Gemini_Generated_Image_cae60rcae60rcae6.png',
    author: 'Queen City Growth Lab',
    published_at: '2026-02-27',
    created_at: '2026-02-27',
    updated_at: '2026-02-27',
  },
];

export default posts;

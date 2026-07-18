/**
 * ============================================================
 *  NEWS DATA — Gadaa Securities Dealer S.C.
 * ============================================================
 *
 *  HOW TO ADD / EDIT NEWS POSTS:
 *  ──────────────────────────────
 *  1. Open this file (src/data/newsData.js)
 *  2. Add a new object to the array below with the following fields:
 *     - id:        unique number (increment from last)
 *     - title:     headline of the news/article
 *     - excerpt:   short summary (1-2 sentences)
 *     - category:  category label (e.g. "Press Release", "Company News")
 *     - date:      publication date (string)
 *     - readTime:  estimated reading time (e.g. "4 min read")
 *     - image:     path to image in /public/images/ folder
 *     - badge:     optional badge text (e.g. "Exciting news", "New")
 *  3. Place the image file in the /public/images/ directory
 *  4. Save this file — the News page will automatically update
 *
 *  EXAMPLE:
 *    {
 *      id: 5,
 *      title: 'Gadaa Securities Launches Mobile Trading App',
 *      excerpt: 'A new mobile application that allows clients to trade securities directly from their smartphones...',
 *      category: 'Product Launch',
 *      date: 'June 1, 2026',
 *      readTime: '3 min read',
 *      image: '/images/mobile-app.jpeg',
 *      badge: 'New',
 *    }
 * ============================================================
 */

export const newsData = [
  {
    id: 1,
    title: 'ECMA Licenses Gadaa Securities Dealer S.C.',
    excerpt:
      'The Ethiopian Capital Market Authority (ECMA) has granted a Capital Market Service Provider (CMSP) license to Gadaa Securities Dealer S.C., authorizing the company to operate as a broker-dealer on the Ethiopian Securities Exchange.',
    category: 'Press Release',
    date: 'December 24, 2025',
    readTime: '4 min read',
    image: '/images/34.jpeg',
    badge: 'Exciting news',
  },
  {
    id: 2,
    title: 'የኢትዮጵያ የካፒታል ገበያ ባለሥልጣን ለገዳ ሴኩዩሪቲስ ዲለር አ.ማ. ፈቃድ ሰጠ።',
    excerpt:
      'የኢትዮጵያ የካፒታል ገበያ ባለሥልጣን ለገዳ ሴኩዩሪቲስ ዲለር አ.ማ. የካፒታል ገበያ አገልግሎት ሰጪነት ፈቃድ ሰጥቷል። ይህም ኩባንያው በኢትዮጵያ የአክስዮን ልውውጥ ላይ ደላላ-ነጋዴ ሆኖ እንዲሰራ ያስችለዋል።',
    category: 'ጋዜጣዊ መግለጫ',
    date: 'ታህሳስ 16, 2028',
    readTime: '3 min read',
    image: '/images/78.jpeg',
    badge: 'አስደሳች ዜና',
  },
  {
    id: 3,
    title: 'Gadaa Securities Dealer Opens Account Services for Retail Investors',
    excerpt:
      'Individual investors can now open trading accounts with Gadaa Securities Dealer S.C. and gain direct access to the Ethiopian Securities Exchange through streamlined KYC and onboarding processes.',
    category: 'Company News',
    date: 'January 15, 2026',
    readTime: '3 min read',
    image: '/images/img1.jpeg',
    badge: 'New',
  },
  {
    id: 4,
    title: 'Gadaa Bank S.C. Completes 75% Equity Stake in Securities Dealer',
    excerpt:
      'Gadaa Bank S.C. has finalized its majority shareholding of 75% in Gadaa Securities Dealer S.C., reinforcing the bank\'s commitment to expanding its footprint in Ethiopia\'s capital markets.',
    category: 'Corporate Update',
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: '/images/34.jpeg',
    badge: 'Update',
  },
]
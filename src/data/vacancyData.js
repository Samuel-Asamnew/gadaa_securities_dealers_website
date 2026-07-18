/**
 * ============================================================
 *  VACANCY DATA — Gadaa Securities Dealer S.C.
 * ============================================================
 *
 *  HOW TO ADD / EDIT VACANCY POSTINGS:
 *  ─────────────────────────────────────
 *  1. Open this file (src/data/vacancyData.js)
 *  2. Add a new object to the array below with the following fields:
 *     - id:        unique number (increment from last)
 *     - title:     job title (string)
 *     - department: department name (string)
 *     - type:      "Full-time", "Part-time", "Contract", "Internship"
 *     - location:  "Addis Ababa" or other
 *     - deadline:  application deadline date (string)
 *     - description: short description (2-3 sentences)
 *     - applyLink: URL or mailto link for applications
 *  3. Save the file — the Vacancy page will automatically update.
 *
 *  EXAMPLE:
 *    {
 *      id: 4,
 *      title: 'Legal Officer',
 *      department: 'Legal & Compliance',
 *      type: 'Full-time',
 *      location: 'Addis Ababa',
 *      deadline: 'March 15, 2026',
 *      description: 'Provide legal advisory services and ensure compliance with ECMA and ESX regulations.',
 *      applyLink: 'mailto:hr@gadaacapital.com.et',
 *    }
 * ============================================================
 */

export const vacancyData = [
  {
    id: 1,
    title: 'Senior Trade Operations Officer',
    department: 'Operations',
    type: 'Full-time',
    location: 'Addis Ababa',
    deadline: 'February 28, 2026',
    description:
      'Oversee daily trade settlement, reconciliation, and back-office operations. Ensure timely processing of buy/sell orders on the ESX platform.',
    applyLink: 'mailto:hr@gadaacapital.com.et',
  },
  {
    id: 2,
    title: 'Corporate Communication Officer',
    department: 'Marketing & Communications',
    type: 'Full-time',
    location: 'Addis Ababa',
    deadline: 'March 10, 2026',
    description:
      'Manage corporate communications, media relations, and digital content. Create press releases, newsletters, and social media content.',
    applyLink: 'mailto:hr@gadaacapital.com.et',
  },
  {
    id: 3,
    title: 'Junior Accountant',
    department: 'Finance',
    type: 'Full-time',
    location: 'Addis Ababa',
    deadline: 'March 15, 2026',
    description:
      'Assist in financial record-keeping, reconciliations, tax filings, and preparation of monthly financial reports.',
    applyLink: 'mailto:hr@gadaacapital.com.et',
  },
  {
    id: 4,
    title: 'Compliance Intern',
    department: 'Legal & Compliance',
    type: 'Internship',
    location: 'Addis Ababa',
    deadline: 'March 20, 2026',
    description:
      'Support the compliance team in monitoring regulatory changes, maintaining registers, and conducting internal audits.',
    applyLink: 'mailto:hr@gadaacapital.com.et',
  },
  {
    id: 5,
    title: 'IT Support Specialist',
    department: 'Information Technology',
    type: 'Full-time',
    location: 'Addis Ababa',
    deadline: 'April 1, 2026',
    description:
      'Provide technical support for staff, maintain network infrastructure, and manage the company\'s trading systems.',
    applyLink: 'mailto:hr@gadaacapital.com.et',
  },
]
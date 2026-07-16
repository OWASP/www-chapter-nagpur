/**
 * OWASP Nagpur — Chapter Data
 * ============================================================
 * This is the SINGLE SOURCE OF TRUTH for all chapter data.
 *
 * HOW TO ADD AN EVENT:
 *   Add an object to NAGPUR_EVENTS below.
 *   Date format: "YYYY-MM-DD"
 *   Events automatically appear as Upcoming or Past based on
 *   today's date — on BOTH the Events tab and the main page.
 *
 * HOW TO ADD A SPONSOR:
 *   Add an object to NAGPUR_SPONSORS below.
 *   It will automatically appear on BOTH the Sponsors tab
 *   and the main page sponsor strip.
 *
 * HOW TO ADD A COMMUNITY PARTNER:
 *   Add an object to NAGPUR_PARTNERS below.
 *   It will appear in the Community Partners section of the
 *   Sponsors tab.
 * ============================================================
 */

var NAGPUR_EVENTS = [
  {
    title: "OWASP Connect August — Monthly Meetup",
    date: "2026-08-24",
    format: "Virtual",
    description: "...",
    links: { meetup: "", slides: "", recording: "" },
  },

  // ── 2026 ─────────────────────────────────────────────────
  // {
  //   title:       "OWASP Connect July — Monthly Meetup",
  //   date:        "2026-07-27",
  //   format:      "In-person",
  //   description: "Monthly community session on application security. Topic to be announced. Reach out to speak at this meetup.",
  //   links: { meetup: "", slides: "", recording: "" }
  // },
  {
    title: "OWASP Connect June — Monthly Meetup",
    date: "2026-06-13",
    format: "In-person",
    description:
      "Monthly community gathering focused on application security, research sharing, and networking.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/june2026.md",
    },
  },

  // ── 2021 ─────────────────────────────────────────────────
  {
    title: "OWASP Nagpur Meet #11 — July 2021",
    date: "2021-07-25",
    format: "Virtual",
    description:
      "A Look Into zseano's Thoughts When Testing a Target (Sean @zseano) · Traversing My Way in the Internal Network (Jasmin Landry @JR0ch17)",
    links: {
      meetup: "https://www.meetup.com/OWASP-Nagpur-Chapter/events/279333967/",
      recording: "https://www.youtube.com/watch?v=T6BROEozJOk",
      slides:
        "https://docs.google.com/presentation/d/1iOAiEvtL_PpCPwKdQe_AkmLHJcNT-msGvbrm2Rz9_1Q/",
    },
  },
  {
    title: "OWASP Nagpur Meet #10 — June 2021",
    date: "2021-06-27",
    format: "Virtual",
    description:
      "DevSecOps: Securing the Unknown — Vandana Verma, Security Advocate, Snyk",
    links: {
      meetup: "https://www.meetup.com/OWASP-Nagpur-Chapter/events/278949599/",
      recording: "https://www.youtube.com/watch?v=sOy9KwZspDU",
    },
  },

  // ── 2020 ─────────────────────────────────────────────────
  {
    title: "OWASP Nagpur — September 2020",
    date: "2020-09-01",
    format: "Virtual",
    description: "Virtual chapter session.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2020.md",
    },
  },
  {
    title: "OWASP Chapters All Day — June 2020",
    date: "2020-06-06",
    format: "Virtual",
    description:
      "OWASP Nagpur participated in the 24-hour global OWASP Chapters All Day event, 6th and 7th June 2020.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/chaptersalldayjune2020.md",
    },
  },
  {
    title: "OWASP Nagpur — May 2020",
    date: "2020-05-01",
    format: "Virtual",
    description: "Virtual chapter session.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/may2020.md",
    },
  },

  // ── 2019 ─────────────────────────────────────────────────
  {
    title: "OWASP Nagpur Meet #7 — October 2019",
    date: "2019-10-01",
    format: "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/october2019.md",
    },
  },
  {
    title: "OWASP Nagpur Meet #5 — May 2019",
    date: "2019-05-12",
    format: "In-person",
    description:
      "DevSecOps Introduction (Tushar Joshi, Persistent Systems) · Hands-on Box Pentesting. Venue: Persistent Systems Ltd., Nagpur.",
    links: {
      slides:
        "https://www.slideshare.net/OWASPNagpur/devsecops-introduction-tushar-joshi-owasp-nagpur-meetup-12-may-2019",
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/may2019.md",
    },
  },
  {
    title: "OWASP Nagpur Meet #4 — February 2019",
    date: "2019-02-01",
    format: "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/february2019.md",
    },
  },

  // ── 2018 ─────────────────────────────────────────────────
  {
    title: "OWASP Nagpur Meet #3 — November 2018",
    date: "2018-11-01",
    format: "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/november2018.md",
    },
  },
  {
    title: "OWASP Nagpur Meet #2 — September 2018",
    date: "2018-09-01",
    format: "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2018.md",
    },
  },
  {
    title: "OWASP Nagpur Meet #1 — July 2018",
    date: "2018-07-15",
    format: "In-person",
    description:
      "Inaugural chapter meetup. OWASP Top 10 2017 (Chaitanya Deshpande and Tushar Kulkarni) · Intro session (Hrishikesh Somchatwar). Venue: Persistent Systems Ltd., Nagpur.",
    links: {
      slides:
        "https://www.slideshare.net/OWASPNagpur/owasp-top-10-2017-owasp-nagpur-15072018",
      details:
        "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/july2018.md",
    },
  },
];

// ============================================================
// SPONSORS — add new sponsors here
// ============================================================
var NAGPUR_SPONSORS = [
  {
    name: "Persistent Systems",
    logo: "assets/images/persistent_logo.png",
    url: "https://www.persistent.com/",
    role: "Venue Sponsor",
  },
  {
    name: "CTZ Lab",
    logo: "assets/images/ctzlab_logo.png",
    url: "https://ctzlab.com/",
    role: "Community Sponsor",
  },
];

// ============================================================
// COMMUNITY PARTNERS — add colleges/universities/groups here
// ============================================================
var NAGPUR_PARTNERS = [
  // Example entry (remove comment and fill in details):
  // {
  //   name:        "Your College Name",
  //   description: "Brief description of the partnership.",
  //   url:         "https://college-website.edu/"
  // }
];

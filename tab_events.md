---

title: Events
displaytext: Events
layout: null
tab: true
order: 1
tags: nagpur

---

<!--
=======================================================
  OWASP NAGPUR — EVENT MANAGEMENT
=======================================================
  To add a new event:
  1. Add an object to the EVENTS array below
  2. Use "YYYY-MM-DD" for the date field
  3. Events automatically appear under Upcoming or Past
     based on today's date. No other file needs editing.
=======================================================
-->

<div id="events-wrap">

  <div id="upcoming-section" style="margin-bottom: 2rem;">
    <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.1em; color: #555; border-bottom: 1px solid #ddd; padding-bottom: 0.4rem; margin-bottom: 1rem;">Upcoming</h2>
    <div id="upcoming-list"></div>
  </div>

  <div id="past-section">
    <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.1em; color: #555; border-bottom: 1px solid #ddd; padding-bottom: 0.4rem; margin-bottom: 1rem;">Past Events</h2>
    <div id="past-list"></div>
  </div>

</div>

<style>
  .ev-row {
    display: flex;
    gap: 1.5rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid #f0f0f0;
    align-items: flex-start;
  }
  .ev-row:last-child { border-bottom: none; }
  .ev-date {
    min-width: 7rem;
    font-size: 0.82rem;
    color: #888;
    padding-top: 0.15rem;
    line-height: 1.4;
  }
  .ev-date .ev-year {
    display: block;
    font-size: 0.75rem;
    color: #bbb;
  }
  .ev-body { flex: 1; }
  .ev-title {
    font-size: 0.97rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 0.25rem 0;
  }
  .ev-meta {
    font-size: 0.8rem;
    color: #999;
    margin-bottom: 0.35rem;
  }
  .ev-desc {
    font-size: 0.85rem;
    color: #555;
    margin-bottom: 0.4rem;
    line-height: 1.5;
  }
  .ev-links { font-size: 0.8rem; }
  .ev-links a {
    color: #004a97;
    text-decoration: none;
    margin-right: 1rem;
    border-bottom: 1px solid transparent;
  }
  .ev-links a:hover { border-bottom-color: #004a97; }
  .ev-upcoming-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: #2a6a2a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-left: 0.6rem;
  }
  .ev-no-events {
    font-size: 0.9rem;
    color: #999;
    padding: 0.5rem 0;
  }
</style>

<script>
var EVENTS = [

  // 2026
  {
    title:       "OWASP Connect July — Monthly Meetup",
    date:        "2026-07-27",
    format:      "In-person",
    description: "Monthly community session on application security. Topic to be announced. Reach out to speak at this meetup.",
    links: { meetup: "", slides: "", recording: "" }
  },
  {
    title:       "OWASP Connect June — Monthly Meetup",
    date:        "2026-06-13",
    format:      "In-person",
    description: "Monthly community gathering focused on application security, research sharing, and networking.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/june2026.md" }
  },

  // 2021
  {
    title:       "OWASP Nagpur Meet #11 — July 2021",
    date:        "2021-07-25",
    format:      "Virtual",
    description: "A Look Into zseano's Thoughts When Testing a Target (Sean @zseano) · Traversing My Way in the Internal Network (Jasmin Landry @JR0ch17)",
    links: {
      meetup:    "https://www.meetup.com/OWASP-Nagpur-Chapter/events/279333967/",
      recording: "https://www.youtube.com/watch?v=T6BROEozJOk",
      slides:    "https://docs.google.com/presentation/d/1iOAiEvtL_PpCPwKdQe_AkmLHJcNT-msGvbrm2Rz9_1Q/"
    }
  },
  {
    title:       "OWASP Nagpur Meet #10 — June 2021",
    date:        "2021-06-27",
    format:      "Virtual",
    description: "DevSecOps: Securing the Unknown — Vandana Verma, Security Advocate, Snyk",
    links: {
      meetup:    "https://www.meetup.com/OWASP-Nagpur-Chapter/events/278949599/",
      recording: "https://www.youtube.com/watch?v=sOy9KwZspDU"
    }
  },

  // 2020
  {
    title:       "OWASP Nagpur — September 2020",
    date:        "2020-09-01",
    format:      "Virtual",
    description: "Virtual chapter session.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2020.md" }
  },
  {
    title:       "OWASP Chapters All Day — June 2020",
    date:        "2020-06-06",
    format:      "Virtual",
    description: "OWASP Nagpur participated in the 24-hour global OWASP Chapters All Day event, 6th and 7th June 2020.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/chaptersalldayjune2020.md" }
  },
  {
    title:       "OWASP Nagpur — May 2020",
    date:        "2020-05-01",
    format:      "Virtual",
    description: "Virtual chapter session.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/may2020.md" }
  },

  // 2019
  {
    title:       "OWASP Nagpur Meet #7 — October 2019",
    date:        "2019-10-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/october2019.md" }
  },
  {
    title:       "OWASP Nagpur Meet #5 — May 2019",
    date:        "2019-05-12",
    format:      "In-person",
    description: "DevSecOps Introduction (Tushar Joshi, Persistent Systems) · Hands-on Box Pentesting. Venue: Persistent Systems Ltd., Nagpur.",
    links: {
      slides:  "https://www.slideshare.net/OWASPNagpur/devsecops-introduction-tushar-joshi-owasp-nagpur-meetup-12-may-2019",
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/may2019.md"
    }
  },
  {
    title:       "OWASP Nagpur Meet #4 — February 2019",
    date:        "2019-02-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/february2019.md" }
  },

  // 2018
  {
    title:       "OWASP Nagpur Meet #3 — November 2018",
    date:        "2018-11-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/november2018.md" }
  },
  {
    title:       "OWASP Nagpur Meet #2 — September 2018",
    date:        "2018-09-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: { details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2018.md" }
  },
  {
    title:       "OWASP Nagpur Meet #1 — July 2018",
    date:        "2018-07-15",
    format:      "In-person",
    description: "Inaugural chapter meetup. OWASP Top 10 2017 (Chaitanya Deshpande and Tushar Kulkarni) · Intro session (Hrishikesh Somchatwar). Venue: Persistent Systems Ltd., Nagpur.",
    links: {
      slides:  "https://www.slideshare.net/OWASPNagpur/owasp-top-10-2017-owasp-nagpur-15072018",
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/july2018.md"
    }
  }

];

(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = [], past = [];
  EVENTS.forEach(function (e) {
    (new Date(e.date) >= today ? upcoming : past).push(e);
  });

  upcoming.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
  past.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  function fmtDate(str) {
    var d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }
  function fmtYear(str) { return str.substring(0, 4); }

  function buildLinks(links) {
    var parts = [];
    if (links.meetup)    parts.push('<a href="' + links.meetup    + '" target="_blank">Meetup</a>');
    if (links.recording) parts.push('<a href="' + links.recording + '" target="_blank">Recording</a>');
    if (links.slides)    parts.push('<a href="' + links.slides    + '" target="_blank">Slides</a>');
    if (links.details)   parts.push('<a href="' + links.details   + '" target="_blank">Details</a>');
    return parts.length ? '<div class="ev-links">' + parts.join('') + '</div>' : '';
  }

  function row(e, isUpcoming) {
    var label = isUpcoming ? '<span class="ev-upcoming-label">Upcoming</span>' : '';
    return [
      '<div class="ev-row">',
        '<div class="ev-date">' + fmtDate(e.date) + '<span class="ev-year">' + fmtYear(e.date) + '</span></div>',
        '<div class="ev-body">',
          '<div class="ev-title">' + e.title + label + '</div>',
          '<div class="ev-meta">' + e.format + '</div>',
          e.description ? '<div class="ev-desc">' + e.description + '</div>' : '',
          buildLinks(e.links),
        '</div>',
      '</div>'
    ].join('');
  }

  var upEl = document.getElementById('upcoming-list');
  var paEl = document.getElementById('past-list');

  upEl.innerHTML = upcoming.length
    ? upcoming.map(function (e) { return row(e, true); }).join('')
    : '<p class="ev-no-events">No upcoming events at this time. Follow us on <a href="https://www.linkedin.com/company/owaspngp/" target="_blank">LinkedIn</a> for announcements.</p>';

  paEl.innerHTML = past.map(function (e) { return row(e, false); }).join('');
})();
</script>

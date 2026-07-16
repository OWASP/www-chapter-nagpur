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
  HOW TO ADD A NEW EVENT:
  1. Add a new object to the `events` array below
  2. Set the `date` field to "YYYY-MM-DD" format
  3. Events AUTOMATICALLY move from "Upcoming" to
     "Past Events" once the date has passed.
  4. No other file needs to be changed!
=======================================================
-->

<div id="events-loading" style="text-align:center; padding: 2rem; color: #666;">
  Loading events...
</div>

<div id="events-container" style="display:none;">

  <div id="upcoming-section">
    <h2>🗓️ Upcoming Events</h2>
    <div id="upcoming-events-list"></div>
  </div>

  <hr/>

  <div id="past-section">
    <h2>📁 Past Events</h2>
    <div id="past-events-list"></div>
  </div>

</div>

<style>
  .event-card {
    border: 1px solid #e2e8f0;
    border-left: 4px solid #004a97;
    border-radius: 6px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.2rem;
    background: #f8fafc;
  }
  .event-card.upcoming {
    border-left-color: #2ecc71;
    background: #f0fff4;
  }
  .event-card.past {
    border-left-color: #94a3b8;
    background: #f8fafc;
  }
  .event-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.05rem;
    color: #1a202c;
  }
  .event-meta {
    font-size: 0.875rem;
    color: #4a5568;
    margin-bottom: 0.6rem;
  }
  .event-meta span {
    margin-right: 1.2rem;
  }
  .event-description {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.8rem;
  }
  .event-links a {
    display: inline-block;
    margin-right: 0.8rem;
    margin-top: 0.3rem;
    font-size: 0.82rem;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1px solid #cbd5e0;
    background: #fff;
    color: #004a97;
    text-decoration: none;
    transition: background 0.15s;
  }
  .event-links a:hover {
    background: #004a97;
    color: #fff;
  }
  .event-badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
  .badge-upcoming { background: #c6f6d5; color: #276749; }
  .badge-virtual  { background: #bee3f8; color: #2c5282; }
  .badge-inperson { background: #fefcbf; color: #744210; }
  .badge-hybrid   { background: #e9d8fd; color: #553c9a; }
  .no-events { color: #888; font-style: italic; padding: 0.5rem 0; }
</style>

<script>
// ============================================================
//  EVENT DATA — Add new events here. They auto-sort by date.
// ============================================================
var EVENTS = [

  // ── 2026 ──────────────────────────────────────────────────
  {
    title:       "OWASP Connect July — Monthly Meetup",
    date:        "2026-07-27",
    format:      "In-person",
    description: "Monthly community gathering to discuss the latest in application security, share research, and connect with Nagpur's security community. Topic TBA — reach out if you'd like to speak!",
    links: {
      meetup:    "",
      slides:    "",
      recording: ""
    }
  },
  {
    title:       "OWASP Connect June — Monthly Meetup",
    date:        "2026-06-13",
    format:      "In-person",
    description: "Monthly community gathering to discuss the latest in application security, share research, and connect with fellow security enthusiasts in Nagpur.",
    links: {
      meetup:    "",
      slides:    "",
      recording: "",
      details:   "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/june2026.md"
    }
  },

  // ── 2021 ──────────────────────────────────────────────────
  {
    title:       "OWASP Nagpur Meet #11 (Virtual) — July 2021",
    date:        "2021-07-25",
    format:      "Virtual",
    description: "Sessions: A Look Into zseano's Thoughts When Testing a Target (Sean @zseano) · Traversing My Way in the Internal Network (Jasmin Landry @JR0ch17)",
    links: {
      meetup:    "https://www.meetup.com/OWASP-Nagpur-Chapter/events/279333967/",
      recording: "https://www.youtube.com/watch?v=T6BROEozJOk",
      slides:    "https://docs.google.com/presentation/d/1iOAiEvtL_PpCPwKdQe_AkmLHJcNT-msGvbrm2Rz9_1Q/",
      details:   "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/july2021.md"
    }
  },
  {
    title:       "OWASP Nagpur Meet #10 (Virtual) — June 2021",
    date:        "2021-06-27",
    format:      "Virtual",
    description: "DevSecOps: Securing the Unknown — Vandana Verma, Security Advocate, Snyk",
    links: {
      meetup:    "https://www.meetup.com/OWASP-Nagpur-Chapter/events/278949599/",
      recording: "https://www.youtube.com/watch?v=sOy9KwZspDU",
      details:   "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/june2021.md"
    }
  },

  // ── 2020 ──────────────────────────────────────────────────
  {
    title:       "OWASP Nagpur — September 2020",
    date:        "2020-09-01",
    format:      "Virtual",
    description: "Virtual chapter meetup session.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2020.md"
    }
  },
  {
    title:       "OWASP Chapters All Day — June 2020",
    date:        "2020-06-06",
    format:      "Virtual",
    description: "OWASP Chapters All Day global event — 6th & 7th June 2020. OWASP Nagpur participated in this 24-hour worldwide security conference.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/chaptersalldayjune2020.md"
    }
  },
  {
    title:       "OWASP Nagpur — May 2020",
    date:        "2020-05-01",
    format:      "Virtual",
    description: "Virtual chapter meetup.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/may2020.md"
    }
  },

  // ── 2019 ──────────────────────────────────────────────────
  {
    title:       "OWASP Nagpur Meet #7 — October 2019",
    date:        "2019-10-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/october2019.md"
    }
  },
  {
    title:       "OWASP Nagpur Meet #5 — May 2019",
    date:        "2019-05-12",
    format:      "In-person",
    description: "Sessions: DevSecOps Introduction (Tushar Joshi, Persistent Systems) · Networking · Hands-on Box Pentesting. Venue: APJ Abdul Kalam Hall, Persistent Systems Ltd.",
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
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/february2019.md"
    }
  },

  // ── 2018 ──────────────────────────────────────────────────
  {
    title:       "OWASP Nagpur Meet #3 — November 2018",
    date:        "2018-11-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/november2018.md"
    }
  },
  {
    title:       "OWASP Nagpur Meet #2 — September 2018",
    date:        "2018-09-01",
    format:      "In-person",
    description: "Chapter meetup at Nagpur.",
    links: {
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/september2018.md"
    }
  },
  {
    title:       "OWASP Nagpur Meet #1 — July 2018",
    date:        "2018-07-15",
    format:      "In-person",
    description: "Inaugural chapter meeting. Sessions: OWASP Top 10 2017 (Chaitanya Deshpande & Tushar Kulkarni) · Intro Session (Hrishikesh Somchatwar). Venue: APJ Abdul Kalam Hall, Persistent Systems Ltd.",
    links: {
      slides:  "https://www.slideshare.net/OWASPNagpur/owasp-top-10-2017-owasp-nagpur-15072018",
      details: "https://github.com/OWASP/www-chapter-nagpur/blob/master/archive/july2018.md"
    }
  }

];
// ============================================================
//  END OF EVENT DATA
// ============================================================

(function() {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = [];
  var past = [];

  EVENTS.forEach(function(e) {
    var eDate = new Date(e.date);
    if (eDate >= today) {
      upcoming.push(e);
    } else {
      past.push(e);
    }
  });

  // Sort upcoming: soonest first
  upcoming.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
  // Sort past: most recent first
  past.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

  function formatDate(dateStr) {
    var d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function formatBadge(fmt) {
    var cls = 'badge-inperson';
    if (fmt === 'Virtual') cls = 'badge-virtual';
    if (fmt === 'Hybrid')  cls = 'badge-hybrid';
    return '<span class="event-badge ' + cls + '">' + fmt + '</span>';
  }

  function buildLinks(links) {
    var html = '<div class="event-links">';
    if (links.meetup)    html += '<a href="' + links.meetup    + '" target="_blank">📅 Meetup</a>';
    if (links.recording) html += '<a href="' + links.recording + '" target="_blank">🎬 Recording</a>';
    if (links.slides)    html += '<a href="' + links.slides    + '" target="_blank">📊 Slides</a>';
    if (links.details)   html += '<a href="' + links.details   + '" target="_blank">📄 Details</a>';
    html += '</div>';
    return html;
  }

  function renderCard(event, type) {
    var hasLinks = event.links && (event.links.meetup || event.links.recording || event.links.slides || event.links.details);
    return [
      '<div class="event-card ' + type + '">',
      '<h3>' + event.title + (type === 'upcoming' ? ' <span class="event-badge badge-upcoming">Upcoming</span>' : '') + formatBadge(event.format) + '</h3>',
      '<div class="event-meta"><span>📅 ' + formatDate(event.date) + '</span></div>',
      event.description ? '<div class="event-description">' + event.description + '</div>' : '',
      hasLinks ? buildLinks(event.links) : '',
      '</div>'
    ].join('');
  }

  var upcomingEl = document.getElementById('upcoming-events-list');
  var pastEl     = document.getElementById('past-events-list');

  if (upcoming.length > 0) {
    upcomingEl.innerHTML = upcoming.map(function(e) { return renderCard(e, 'upcoming'); }).join('');
  } else {
    upcomingEl.innerHTML = '<p class="no-events">No upcoming events scheduled right now — check back soon, or <a href="mailto:aishwary.gathe@owasp.org">reach out to speak</a> at our next meetup!</p>';
  }

  pastEl.innerHTML = past.map(function(e) { return renderCard(e, 'past'); }).join('');

  document.getElementById('events-loading').style.display = 'none';
  document.getElementById('events-container').style.display = 'block';
})();
</script>

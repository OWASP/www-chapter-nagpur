---

title: Events
displaytext: Events
layout: null
tab: true
order: 1
tags: nagpur

---

<!--
  Events are managed in: assets/js/nagpur-data.js
  Edit the NAGPUR_EVENTS array in that file to add or update events.
  Changes automatically reflect here AND on the main page.
-->

<script src="assets/js/nagpur-data.js"></script>

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
  .ev-date .ev-year { display: block; font-size: 0.75rem; color: #bbb; }
  .ev-body { flex: 1; }
  .ev-title { font-size: 0.97rem; font-weight: 600; color: #1a1a1a; margin: 0 0 0.25rem 0; }
  .ev-upcoming-label {
    font-size: 0.72rem; font-weight: 600; color: #2a6a2a;
    text-transform: uppercase; letter-spacing: 0.05em; margin-left: 0.6rem;
  }
  .ev-meta { font-size: 0.8rem; color: #999; margin-bottom: 0.35rem; }
  .ev-desc { font-size: 0.85rem; color: #555; margin-bottom: 0.4rem; line-height: 1.5; }
  .ev-links { font-size: 0.8rem; }
  .ev-links a {
    color: #004a97; text-decoration: none;
    margin-right: 1rem; border-bottom: 1px solid transparent;
  }
  .ev-links a:hover { border-bottom-color: #004a97; }
  .ev-no-events { font-size: 0.9rem; color: #999; padding: 0.5rem 0; }
</style>

<script>
(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = [], past = [];
  NAGPUR_EVENTS.forEach(function (e) {
    (new Date(e.date) >= today ? upcoming : past).push(e);
  });
  upcoming.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
  past.sort(function (a, b)     { return new Date(b.date) - new Date(a.date); });

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
    return '<div class="ev-row">'
      + '<div class="ev-date">' + fmtDate(e.date) + '<span class="ev-year">' + fmtYear(e.date) + '</span></div>'
      + '<div class="ev-body">'
      + '<div class="ev-title">' + e.title + label + '</div>'
      + '<div class="ev-meta">' + e.format + '</div>'
      + (e.description ? '<div class="ev-desc">' + e.description + '</div>' : '')
      + buildLinks(e.links)
      + '</div></div>';
  }

  document.getElementById('upcoming-list').innerHTML = upcoming.length
    ? upcoming.map(function (e) { return row(e, true); }).join('')
    : '<p class="ev-no-events">No upcoming events at this time. Follow us on <a href="https://www.linkedin.com/company/owaspngp/" target="_blank">LinkedIn</a> for announcements.</p>';

  document.getElementById('past-list').innerHTML =
    past.map(function (e) { return row(e, false); }).join('');
})();
</script>

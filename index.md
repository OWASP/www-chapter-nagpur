---

layout: col-sidebar
title: OWASP Nagpur
tags: nagpur
level: 0
site_side: true
region: Asia
meetup-group: OWASP-Nagpur-Chapter
country: India
postal-code: 440001

---

<center>
  <div style="max-width: 420px; margin: 1rem auto;">
    <a href="https://groups.google.com/a/owasp.org/forum/embed/?place=forum/nagpur-chapter">
      <img src="assets/images/OWASP_Nagpur_BannerF.png" style="width: 100%; height: auto; border-radius: 8px;" alt="OWASP Nagpur"/>
    </a>
  </div>
</center>


## Welcome

Welcome to the **OWASP Nagpur Chapter** — your local hub for application security knowledge, community, and collaboration in Nagpur, India.

We bring together security professionals, developers, researchers, and students to share knowledge, discuss the latest threats, and build a stronger, more secure software ecosystem. All our events are **free and open to everyone**.

Follow us on [LinkedIn](https://www.linkedin.com/company/owaspngp/) to stay updated on upcoming events, security insights, and community news.

## About Us

The OWASP Nagpur Chapter has been actively running local meetups, workshops, and collaborative sessions focused on application security. We cover topics ranging from OWASP Top 10 vulnerabilities, web and mobile security, DevSecOps, cloud security, and much more.

Interested in speaking? We welcome talks on OWASP projects, independent security research, or any related software security topic. Head over to the **Speakers** tab to learn how to submit your talk.

## Participation

The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software. All of our projects, tools, documents, forums, and chapters are free and open to anyone interested in improving application security.

Chapters are led by local leaders in accordance with the [Chapter Policy](https://owasp.org/www-policy/). Financial contributions should only be made online using the authorized online donation button. To be a SPEAKER at ANY OWASP Chapter in the world simply review the [speaker agreement](https://owasp.org/www-policy/) and then contact the local chapter leader with details of what OWASP Project, independent research, or related software security topic you would like to present.

Everyone is welcome and encouraged to participate in our [Projects](/projects), [Local Chapters](/chapters), [Events](/events), [Online Groups](https://groups.google.com/a/owasp.com/), and [Community Slack Channel](https://owasp.slack.com/). We especially encourage diversity in all our initiatives. OWASP is a fantastic place to learn about application security, to network, and even to build your reputation as an expert. We also encourage you to [become a member](/membership) or consider a [donation](/donate) to support our ongoing work.


## Upcoming Events

All our chapter meetings are free to attend.

<div id="home-upcoming"></div>

<style>
  .home-ev-row {
    display: flex;
    gap: 1.2rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid #f0f0f0;
    align-items: flex-start;
  }
  .home-ev-row:last-child { border-bottom: none; }
  .home-ev-date {
    min-width: 6rem;
    font-size: 0.8rem;
    color: #999;
    padding-top: 0.1rem;
  }
  .home-ev-title {
    font-size: 0.92rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 0.2rem 0;
  }
  .home-ev-meta { font-size: 0.78rem; color: #aaa; }
  .home-ev-link { font-size: 0.78rem; color: #004a97; text-decoration: none; }
  .home-ev-link:hover { text-decoration: underline; }
  .home-no-events { font-size: 0.88rem; color: #999; padding: 0.4rem 0; }
  .home-sponsors-section {
    margin-top: 2.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid #eee;
  }
  .home-sponsors-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #bbb;
    margin-bottom: 1rem;
  }
  .home-sponsor-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
  }
  .home-sponsor-strip a { display: block; }
  .home-sponsor-strip img {
    max-height: 40px;
    max-width: 130px;
    width: auto;
    object-fit: contain;
    filter: grayscale(30%);
    opacity: 0.85;
    transition: filter 0.2s, opacity 0.2s;
  }
  .home-sponsor-strip img:hover { filter: grayscale(0%); opacity: 1; }
</style>

<script>
// Data injected by Jekyll at build time from _data/ YAML files
var NAGPUR_EVENTS   = {{ site.data.nagpur_events   | jsonify }};
var NAGPUR_SPONSORS = {{ site.data.nagpur_sponsors | jsonify }};

(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = NAGPUR_EVENTS.filter(function (e) {
    return new Date(e.date) >= today;
  }).sort(function (a, b) { return new Date(a.date) - new Date(b.date); });

  function fmtDate(str) {
    var d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  var el   = document.getElementById('home-upcoming');
  var html = '';

  if (upcoming.length > 0) {
    upcoming.forEach(function (e) {
      var meetupLink = e.meetup
        ? ' &nbsp;&middot;&nbsp; <a class="home-ev-link" href="' + e.meetup + '" target="_blank">Register on Meetup</a>'
        : '';
      html += '<div class="home-ev-row">'
        + '<div class="home-ev-date">' + fmtDate(e.date) + '</div>'
        + '<div><div class="home-ev-title">' + e.title + '</div>'
        + '<div class="home-ev-meta">' + e.format + meetupLink + '</div></div>'
        + '</div>';
    });
  } else {
    html = '<p class="home-no-events">No upcoming events at this time. Follow us on <a href="https://www.linkedin.com/company/owaspngp/" target="_blank">LinkedIn</a> for announcements.</p>';
  }

  // Sponsors strip
  if (NAGPUR_SPONSORS && NAGPUR_SPONSORS.length > 0) {
    html += '<div class="home-sponsors-section">'
      + '<div class="home-sponsors-label">Supported by</div>'
      + '<div class="home-sponsor-strip">';
    NAGPUR_SPONSORS.forEach(function (s) {
      html += '<a href="' + s.url + '" target="_blank" rel="noopener" title="' + s.name + '">'
        + '<img src="' + s.logo + '" alt="' + s.name + '" />'
        + '</a>';
    });
    html += '</div></div>';
  }

  el.innerHTML = html;
})();
</script>

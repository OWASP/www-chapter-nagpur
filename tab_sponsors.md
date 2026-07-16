---

title: Sponsors
displaytext: Sponsors
layout: null
tab: true
order: 5
tags: nagpur

---

<!--
  To add sponsors: edit _data/nagpur_sponsors.yml
  To add partners: edit _data/nagpur_partners.yml
  Changes reflect here AND on the main page after git push.
-->

## Sponsors

OWASP Nagpur is a free, community-run chapter. Our sponsors help make events possible by providing venues, resources, and support. We are grateful for their continued partnership.

If your organisation is interested in sponsoring the OWASP Nagpur Chapter, please reach out to [aishwary.gathe@owasp.org](mailto:aishwary.gathe@owasp.org).

---

### Local Sponsors

<div id="sponsors-grid"></div>

---

### Community Partners

We collaborate with local colleges and universities to bring application security awareness to students and academic communities in Nagpur.

<div id="partners-grid"></div>

---

<div style="padding-top: 1.2rem; font-size: 0.88rem; color: #555;">
  <strong>Become a Sponsor</strong><br/>
  OWASP Nagpur welcomes organisations that share our commitment to software security. Sponsors receive recognition on this page and the main chapter page, mentions at chapter events, and the opportunity to connect with the local security community.
  Contact us at <a href="mailto:aishwary.gathe@owasp.org" style="color: #004a97;">aishwary.gathe@owasp.org</a> to discuss sponsorship options.
</div>

<style>
  .sponsor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    margin: 1.5rem 0 2.5rem 0;
    align-items: center;
  }
  .sponsor-item { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; text-align: center; }
  .sponsor-item a { display: block; }
  .sponsor-item img {
    max-height: 64px; max-width: 180px; width: auto; object-fit: contain;
    filter: grayscale(20%); transition: filter 0.2s ease;
  }
  .sponsor-item img:hover { filter: grayscale(0%); }
  .sponsor-name { font-size: 0.82rem; color: #555; }
  .sponsor-role { font-size: 0.75rem; color: #999; margin-top: -0.4rem; }
  .partner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0 1rem 0;
  }
  .partner-item { border: 1px solid #e8e8e8; padding: 1.2rem 1.4rem; }
  .partner-item h4 { font-size: 0.92rem; margin: 0 0 0.3rem 0; color: #1a1a1a; }
  .partner-item p { font-size: 0.8rem; color: #777; margin: 0 0 0.6rem 0; line-height: 1.45; }
  .partner-item a { font-size: 0.8rem; color: #004a97; text-decoration: none; border-bottom: 1px solid transparent; }
  .partner-item a:hover { border-bottom-color: #004a97; }
  .no-data { font-size: 0.88rem; color: #999; padding: 0.4rem 0; }
</style>

<script>
// Data injected by Jekyll at build time from _data/nagpur_sponsors.yml
var NAGPUR_SPONSORS = {{ site.data.nagpur_sponsors | jsonify }};
var NAGPUR_PARTNERS = {{ site.data.nagpur_partners | jsonify }};

(function () {
  // Render sponsors
  var sg = document.getElementById('sponsors-grid');
  if (NAGPUR_SPONSORS && NAGPUR_SPONSORS.length > 0) {
    sg.className = 'sponsor-grid';
    sg.innerHTML = NAGPUR_SPONSORS.map(function (s) {
      return '<div class="sponsor-item">'
        + '<a href="' + s.url + '" target="_blank" rel="noopener">'
        + '<img src="' + s.logo + '" alt="' + s.name + '" /></a>'
        + '<span class="sponsor-name">' + s.name + '</span>'
        + '<span class="sponsor-role">' + s.role + '</span>'
        + '</div>';
    }).join('');
  } else {
    sg.innerHTML = '<p class="no-data">No sponsors listed yet. <a href="mailto:aishwary.gathe@owasp.org">Get in touch</a> to become our first sponsor.</p>';
  }

  // Render partners
  var pg = document.getElementById('partners-grid');
  if (NAGPUR_PARTNERS && NAGPUR_PARTNERS.length > 0) {
    pg.className = 'partner-grid';
    pg.innerHTML = NAGPUR_PARTNERS.map(function (p) {
      return '<div class="partner-item">'
        + '<h4>' + p.name + '</h4>'
        + (p.description ? '<p>' + p.description + '</p>' : '')
        + (p.url ? '<a href="' + p.url + '" target="_blank" rel="noopener">Visit Website</a>' : '')
        + '</div>';
    }).join('');
  } else {
    pg.innerHTML = '<p class="no-data">No community partners listed yet. Colleges and universities are welcome to partner with us — write to <a href="mailto:aishwary.gathe@owasp.org">aishwary.gathe@owasp.org</a>.</p>';
  }
})();
</script>

---

title: Gallery
displaytext: Gallery
layout: null
tab: true
order: 4
tags: nagpur

---

## Gallery

Photos from OWASP Nagpur chapter meetups.

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 1.2rem;
  }
  .gallery-grid a {
    display: block;
    overflow: hidden;
    background: #f0f0f0;
  }
  .gallery-grid img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: opacity 0.2s ease;
  }
  .gallery-grid img:hover { opacity: 0.88; }

  @media (max-width: 640px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-grid img { height: 140px; }
  }
  @media (max-width: 400px) {
    .gallery-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="gallery-grid">
  <a href="assets/images/gallery/attendees_meet1.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet1.jpg" alt="Meetup 1 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet1_2.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet1_2.jpg" alt="Meetup 1" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet2.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet2.jpg" alt="Meetup 2 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet2_2.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet2_2.jpg" alt="Meetup 2" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet3.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet3.jpg" alt="Meetup 3 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet4.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet4.jpg" alt="Meetup 4 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet5.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet5.jpg" alt="Meetup 5 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet5_2.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet5_2.jpg" alt="Meetup 5" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet6.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet6.jpg" alt="Meetup 6 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/meet7_attendees1.jpg" target="_blank">
    <img src="assets/images/gallery/meet7_attendees1.jpg" alt="Meetup 7 attendees" loading="lazy" />
  </a>
  <a href="assets/images/gallery/attendees_meet7.jpg" target="_blank">
    <img src="assets/images/gallery/attendees_meet7.jpg" alt="Meetup 7" loading="lazy" />
  </a>
</div>

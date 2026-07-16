const CONTACT_DATA = { 
    name: "Cortinas Deluxe",
    phone: "+54 9 11 2539-4819", 
    phoneClean: "5491125831604",
    email: "cortinas.deluxe@gmail.com", 
    whatsappLink: "https://wa.me/5491125831604?text=Hola%20Cortinas.Deluxe%2C%20quiero%20solicitar%20un%20presupuesto%20para%20mis%20cortinas." 
};

const topbarHTML = `
<div class="cm-topbar">
    <div class="cm-topbar-left">
        <div class="cm-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Atención 24 hs
        </div>
        <div class="cm-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Técnicos propios
        </div>
        <div class="cm-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            CABA y GBA
        </div>
    </div>
    <div class="cm-topbar-right">
        <a href="tel:+${CONTACT_DATA.phoneClean}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ${CONTACT_DATA.phone}
        </a>
        <a href="${CONTACT_DATA.whatsappLink}" class="cm-btn-top">Cotizar Ahora</a>
    </div>
</div>
`;

const navbarHTML = `
<nav class="cm-nav" aria-label="Menú principal">
    <a href="index.html" class="cm-logo">Cortinas<span>.</span>Deluxe</a>
    
    <ul class="cm-nav-links">
        <li class="active"><a href="index.html">Inicio</a></li>
        <li class="nav-item-dropdown">
            <a href="#" style="cursor: default;">Servicios ▾</a>
            <div class="dropdown-menu">
                <a href="cortinas-enrollar.html" class="dropdown-link">Cortinas de Enrollar</a>
                <a href="motorizacion.html" class="dropdown-link">Motorización</a>
                <a href="reparaciones.html" class="dropdown-link">Reparaciones</a>
                <a href="mantenimiento.html" class="dropdown-link">Mantenimiento</a>
            </div>
        </li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="trabajos.html">Trabajos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
`;

const footerHTML = `
<div class="cm-bottom-cta">
    <div class="cm-cta-text">
        <h2>¿Tenés un problema<br>con tu <em>cortina?</em></h2>
    </div>
    <div class="cm-cta-sub">Escribinos por WhatsApp<br>y te respondemos al instante.</div>
    <div>
        <a href="${CONTACT_DATA.whatsappLink}" target="_blank" class="cm-btn-whatsapp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            ${CONTACT_DATA.phone}
        </a>
        <div style="text-align: center; margin-top: 8px; font-weight: 600; color: var(--text-main);">Atención 24 hs</div>
    </div>
</div>
<footer class="cm-footer">
    <div class="container cm-footer-grid">
        <div>
            <h3 class="cm-logo" style="margin-bottom: 15px; font-size: 20px;">Cortinas<span>.</span>Deluxe</h3>
            <p style="color: var(--text-muted);">Cortinas que siempre funcionan.</p>
        </div>
        <div>
            <h4>Enlaces</h4>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="trabajos.html">Trabajos</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>
        <div>
            <h4>Servicios</h4>
            <ul>
                <li><a href="cortinas-enrollar.html">Cortinas de enrollar</a></li>
                <li><a href="motorizacion.html">Motorización</a></li>
                <li><a href="reparaciones.html">Reparaciones</a></li>
                <li><a href="mantenimiento.html">Mantenimiento</a></li>
                <li><a href="reparaciones.html">Urgencias 24 hs</a></li>
            </ul>
        </div>
        <div>
            <h4>Contacto</h4>
            <ul>
                <li><a href="tel:+${CONTACT_DATA.phoneClean}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${CONTACT_DATA.phone}</a></li>
                <li><a href="mailto:${CONTACT_DATA.email}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ${CONTACT_DATA.email}</a></li>
                <li><a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> CABA y GBA</a></li>
            </ul>
        </div>
    </div>
    <div class="container cm-footer-bottom">
        <div>&copy; ${new Date().getFullYear()} Cortinas.Deluxe - Todos los derechos reservados.</div>
        <div>Desarrollado por <a href="https://wa.me/5491141933835" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 600;">Relow</a></div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar Navbar y Footer
    const headerTarget = document.getElementById("header-placeholder");
    const footerTarget = document.getElementById("footer-placeholder");
    if (headerTarget) headerTarget.innerHTML = topbarHTML + navbarHTML;
    if (footerTarget) footerTarget.innerHTML = footerHTML;

    // 2. Lógica de los Carruseles Nativos
    document.querySelectorAll('.cm-carousel-container').forEach(container => {
        const track = container.querySelector('.cm-carousel');
        const prevBtn = container.querySelector('.cm-carousel-btn.prev');
        const nextBtn = container.querySelector('.cm-carousel-btn.next');

        if(prevBtn && nextBtn && track) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
            });
        }
    });
});
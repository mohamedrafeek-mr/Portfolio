document.addEventListener('DOMContentLoaded', () => {
    // Click panna vendiya ella elements-aum select pannunga (Nav links and #btn)
    const allClickableLinks = document.querySelectorAll('.nav-links a, #btn');
    
    // Hide/Show panna vendiya ella sections-aum select pannunga
    const contentSections = document.querySelectorAll('.content-section');

    allClickableLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            let targetHref = link.getAttribute('href'); 
            // Home link-ku '#' irundha, adha '#home' nu maathunga.
            const targetId = (targetHref === '#') ? 'home' : targetHref.substring(1); 
            
            // 1. Ella content sections-la irundhum active class-a remove pannunga (Hide all)
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // 2. Nav links-la irundhu active class-a remove pannunga
            document.querySelectorAll('.nav-links a').forEach(nav => {
                 nav.classList.remove('active');
            });
            
            // 3. Target section-a mattum show pannunga
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // 4. Click panna nav link-ku mattum active class-a kudukkanum
            // a) Nav links-kku active class
            if (link.closest('.nav-links')) {
                 link.classList.add('active');
            }
            // b) About Me button click panna, 'About' nav link-a active pannunga
            else if (link.id === 'btn') {
                 document.querySelector('.nav-links a[href="#about"]').classList.add('active');
            }
            
            // 5. Mobile Menu Close Logic (Optional but good practice)
            // Section change aana udaney mobile menu close aaganum.
            const menuToggle = document.getElementById('menu-toggle-checkbox');
            if (menuToggle) {
                menuToggle.checked = false; 
            }
        });
    });
});
// AdvisorNote Interactive Functions
// Modal and form handling for the AdvisorNote website

// ===========================================
// EMAIL MODAL FUNCTIONS
// ===========================================

function openEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleEmailSubmit(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const email = emailInput ? emailInput.value : '';
    
    if (email) {
        // You can integrate with your email service here (e.g., Mailchimp, ConvertKit, etc.)
        console.log('Email submitted:', email);
        
        // Show success message or redirect to download
        alert('Thank you! Check your email for the download link.');
        
        // Clear the form
        if (emailInput) emailInput.value = '';
        
        // Close the modal
        closeEmailModal();
        
        // Optionally redirect to download page
        // window.location.href = 'download.html';
    }
}

// ===========================================
// TEAM PRICING MODAL FUNCTIONS
// ===========================================

function openTeamPricingModal() {
    const modal = document.getElementById('teamPricingModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeTeamPricingModal() {
    const modal = document.getElementById('teamPricingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleTeamPricingSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('teamName')?.value || '';
    const email = document.getElementById('teamEmail')?.value || '';
    const company = document.getElementById('teamCompany')?.value || '';
    const message = document.getElementById('teamMessage')?.value || '';
    
    if (name && email && company) {
        // You can integrate with your form service here (e.g., Formspree, Netlify Forms, etc.)
        console.log('Team pricing inquiry:', { name, email, company, message });
        
        // Show success message
        alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
        
        // Clear the form
        document.getElementById('teamPricingForm')?.reset();
        
        // Close the modal
        closeTeamPricingModal();
    }
}

// ===========================================
// VIDEO MODAL FUNCTIONS
// ===========================================

function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('demoVideo');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set the video source when opening (replace with your actual video URL)
        if (video) {
            video.src = 'https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1';
        }
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('demoVideo');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Stop the video by clearing the src
        if (video) {
            video.src = '';
        }
    }
}

// ===========================================
// KEYBOARD & CLICK OUTSIDE HANDLERS
// ===========================================

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    // Email Modal
    const emailModal = document.getElementById('emailModal');
    if (emailModal && event.target === emailModal) {
        closeEmailModal();
    }
    
    // Team Pricing Modal
    const teamPricingModal = document.getElementById('teamPricingModal');
    if (teamPricingModal && event.target === teamPricingModal) {
        closeTeamPricingModal();
    }
    
    // Video Modal
    const videoModal = document.getElementById('videoModal');
    if (videoModal && event.target === videoModal) {
        closeVideoModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEmailModal();
        closeTeamPricingModal();
        closeVideoModal();
    }
});

// ===========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

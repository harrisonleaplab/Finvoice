function openEmailModal() {
    document.getElementById('emailModal').classList.add('active');
}

function closeEmailModal() {
    document.getElementById('emailModal').classList.remove('active');
}

function handleEmailSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;

    // Store email (you can send this to your backend)
    console.log('Email submitted:', email);

    // Close modal and redirect to download page
    closeEmailModal();
    window.location.href = 'download.html';
}

function openTeamPricingModal() {
    document.getElementById('teamPricingModal').classList.add('active');
}

function closeTeamPricingModal() {
    document.getElementById('teamPricingModal').classList.remove('active');
}

function handleTeamPricingSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('teamName').value;
    const email = document.getElementById('teamEmail').value;
    const company = document.getElementById('teamCompany').value;
    const message = document.getElementById('teamMessage').value;

    // Store team inquiry (you can send this to your backend)
    console.log('Team pricing inquiry:', { name, email, company, message });

    // Show success message
    alert('Thank thank you! We\'ll get back to you within 24 hours.');

    // Close modal and reset form
    closeTeamPricingModal();
    document.getElementById('teamPricingForm').reset();
}

// Video Modal Functions
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('demoVideo');

    // Set your video URL here (YouTube or Vimeo)
    // YouTube example: https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1
    // Vimeo example: https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1
    iframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1';

    modal.classList.add('active');
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('demoVideo');

    // Stop video playback
    iframe.src = '';

    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('emailModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeEmailModal();
    }
});

document.getElementById('teamPricingModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeTeamPricingModal();
    }
});

document.getElementById('videoModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeVideoModal();
    }
});

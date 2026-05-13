// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// JavaScript Animation Code
document.addEventListener('DOMContentLoaded', function() {
    const animatedBox = document.getElementById('animatedBox');

    if (animatedBox) {
        // Click animation - makes the box spin and bounce
        animatedBox.addEventListener('click', function() {
            // Remove any existing animation
            animatedBox.style.animation = 'none';

            // Trigger reflow to restart animation
            void animatedBox.offsetWidth;

            // Add spin and bounce animation
            animatedBox.style.animation = 'spin 1s ease-in-out, bounce 1s ease-in-out';

            // Reset animation after it completes
            setTimeout(function() {
                animatedBox.style.animation = '';
            }, 1000);
        });

        // Add a pulsing effect on hover
        animatedBox.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        });

        animatedBox.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
    }

    // Animate music notes continuously
    const notes = document.querySelectorAll('.note');
    notes.forEach(function(note, index) {
        setInterval(function() {
            note.style.transform = 'scale(' + (1 + Math.random() * 0.3) + ')';
            setTimeout(function() {
                note.style.transform = 'scale(1)';
            }, 300);
        }, 2000 + (index * 400));
    });
});


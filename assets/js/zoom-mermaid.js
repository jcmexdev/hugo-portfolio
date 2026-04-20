document.addEventListener("DOMContentLoaded", () => {
    let attempts = 0;
    const maxAttempts = 15;

    const applyZoom = setInterval(() => {
        attempts++;
        const mermaids = document.querySelectorAll('.mermaid svg'); // Mermaid usually wraps in .mermaid or creates an SVG directly.
        // Also check if the svg has id starting with mermaid
        const svgElements = document.querySelectorAll('.mermaid svg, svg[id^="mermaid-"]');

        if (svgElements.length > 0) {
            svgElements.forEach(svg => {
                if (!svg.classList.contains('pan-zoom-applied')) {
                    svg.classList.add('pan-zoom-applied');
                    // Ensure the SVG has physical dimensions to pan inside
                    svg.style.width = '100%';
                    svg.style.height = '600px'; 
                    svg.style.maxWidth = 'none'; // prevent theme constraints
                    
                    try {
                        svgPanZoom(svg, {
                            zoomEnabled: true,
                            controlIconsEnabled: true,
                            fit: true,
                            center: true,
                            minZoom: 0.1,
                            maxZoom: 10
                        });
                    } catch (e) {
                        console.log("Error initializing pan-zoom on a diagram", e);
                    }
                }
            });
            // Don't clear interval immediately just in case of lazy loading, but rely on maxAttempts
        }

        if (attempts >= maxAttempts) {
            clearInterval(applyZoom);
        }
    }, 1000);
});

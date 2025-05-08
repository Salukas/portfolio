// Script to randomize header text shadow colors on hover

document.addEventListener('DOMContentLoaded', function() {
    // Get the header h1 element
    const headerH1 = document.querySelector('.header-text h1');
    
    // Get all CSS root color variables
    const rootStyles = getComputedStyle(document.documentElement);
    const colorVariables = [];
    
    // Collect all color variables from root (--colour1 through --colour11)
    for (let i = 1; i <= 11; i++) {
        const colorVar = rootStyles.getPropertyValue(`--colour${i}`).trim();
        if (colorVar) {
            colorVariables.push(colorVar);
        }
    }
    
    // Function to get a random color from our color variables
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colorVariables.length);
        return colorVariables[randomIndex];
    }
    
    // Function to apply random text shadow colors
    function applyRandomTextShadow() {
        // Generate 8 random colors for the 8 shadow positions
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();
        const color4 = getRandomColor();
        const color5 = getRandomColor();
        const color6 = getRandomColor();
        const color7 = getRandomColor();
        const color8 = getRandomColor();
        
        // Apply the text shadow with random colors
        headerH1.style.textShadow = 
            `-4px -4px 0 ${color1}, ` +
            `4px -4px 0 ${color2}, ` +
            `-4px 4px 0 ${color3}, ` +
            `4px 4px 0 ${color4}, ` +
            `-5px 0px 0 ${color5}, ` +
            `5px 0px 0 ${color6}, ` +
            `0px -5px 0 ${color7}, ` +
            `0px 5px 0 ${color8}`;
    }
    
    // Add event listeners for hover
    headerH1.addEventListener('mouseenter', applyRandomTextShadow);
    
    // Optional: Change colors again if the mouse moves while hovering
    headerH1.addEventListener('mousemove', function() {
        // Only change colors occasionally to avoid too much flickering
        if (Math.random() < 0.05) { // 5% chance on each mouse move
            applyRandomTextShadow();
        }
    });
    
    // Remove text shadow when mouse leaves
    headerH1.addEventListener('mouseleave', function() {
        headerH1.style.textShadow = '';
    });
});

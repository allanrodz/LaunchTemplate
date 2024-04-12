    var acc = document.getElementsByClassName("phase-header");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const phases = document.querySelectorAll('.phase');
        let currentPhaseIndex = 0;
    
        function showPhase(index) {
            phases.forEach((phase, i) => {
                if (i === index) {
                    phase.style.display = 'block'; // Show the current phase
                } else {
                    phase.style.display = 'none'; // Hide other phases
                }
            });
        }
    
        function nextPhase() {
            currentPhaseIndex = (currentPhaseIndex + 1) % phases.length; // Move to the next phase, loop back to the first
            showPhase(currentPhaseIndex);
        }
    
        function previousPhase() {
            currentPhaseIndex = (currentPhaseIndex - 1 + phases.length) % phases.length; // Move to the previous phase
            showPhase(currentPhaseIndex);
        }
    
        // Initial display
        showPhase(currentPhaseIndex);
    

    
// Create and style Previous Button
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.onclick = previousPhase;
prevButton.style.position = 'absolute';
prevButton.style.left = '20px';
prevButton.style.backgroundColor = '#f44336'; // Red color
prevButton.style.color = 'white';
prevButton.style.padding = '10px 20px';
prevButton.style.border = 'none';
prevButton.style.borderRadius = '5px';
prevButton.style.cursor = 'pointer';
document.body.appendChild(prevButton);

// Create and style Next Button
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.onclick = nextPhase;
nextButton.style.position = 'absolute';
nextButton.style.right = '20px';
nextButton.style.backgroundColor = '#4CAF50'; // Green color
nextButton.style.color = 'white';
nextButton.style.padding = '10px 20px';
nextButton.style.border = 'none';
nextButton.style.borderRadius = '5px';
nextButton.style.cursor = 'pointer';
document.body.appendChild(nextButton);
    });
    
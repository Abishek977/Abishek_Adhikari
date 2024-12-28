// Create the full-screen viewer container
var viewerContainer = document.createElement("div");
viewerContainer.id = "imageViewer";
viewerContainer.style.position = "fixed";
viewerContainer.style.top = "0";
viewerContainer.style.left = "0";
viewerContainer.style.width = "100%";
viewerContainer.style.height = "100%";
viewerContainer.style.backgroundColor = "rgba(12, 12, 12, 0.8)";
viewerContainer.style.display = "none";  // Hidden initially
viewerContainer.style.justifyContent = "center";
viewerContainer.style.alignItems = "center";
viewerContainer.style.zIndex = "1000";

// Create an img tag inside the container for the full-size image
var fullImage = document.createElement("img");
fullImage.style.maxWidth = "90%";
fullImage.style.maxHeight = "90%";
viewerContainer.appendChild(fullImage);

// Append the viewer container to the body
document.body.appendChild(viewerContainer);

// Get all images in the gallery
var images = document.querySelectorAll(".gallery-image");

// Loop through each image and add an event listener
images.forEach(function(img) {
    img.onclick = function() {
        // Set the image source for the full-size viewer
        fullImage.src = this.src;

        // Show the full-screen viewer
        viewerContainer.style.display = "flex";
    };
});

// Close the full-screen viewer when clicked
viewerContainer.onclick = function() {
    viewerContainer.style.display = "none";  // Hide the viewer
};
import React, { useEffect, useRef } from 'react'

// Dynamically import all images from the /assets/GD folder using import.meta.glob
const images = Object.values(
    import.meta.glob('/public/assets/GD/*.{png,jpg,jpeg,svg}', { eager: true })
).map((img) => img.default || img)

// Duplicate images for seamless infinite scrolling
const duplicatedImages = [...images, ...images] // Clone images to make scrolling infinite

const GraphicDesign = () => {
    const scrollRef = useRef(null)

    // Auto-scroll function for infinite smooth scrolling
    useEffect(() => {
        const scrollContainer = scrollRef.current
        let scrollAmount = 0

        const scrollImages = () => {
            if (scrollContainer) {
                scrollAmount += 1 // Increase scroll amount to move right

                // Scroll by 1px each frame for smooth scroll
                scrollContainer.scrollLeft = scrollAmount

                // Reset scroll to the beginning when it reaches halfway
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0
                }
            }

            requestAnimationFrame(scrollImages) // Continue scrolling
        }

        scrollImages() // Start the auto scroll
    }, [])

    return (
        <div>
            {/* Title and Description */}
            <div className="text-center mb-12 md:mb-20">
                <h2
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white"
                >
                    Graphic Design
                </h2>
                <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                    Some creative work that I have done
                </p>
            </div>

            {/* Image Gallery with Infinite Scrolling */}
            <div
                ref={scrollRef}
                className="h-auto w-full flex flex-nowrap gap-4 p-4 overflow-x-auto whitespace-nowrap custom-scrollbar"
            >
                {duplicatedImages.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[350px] h-[300px] md:h-[400px] flex justify-center items-center"
                    >
                        <img
                            src={image}
                            alt={`Design ${index % images.length + 1}`}
                            className="border-purple-600 border-2 px-2 rounded-3xl w-auto h-full object-contain shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GraphicDesign

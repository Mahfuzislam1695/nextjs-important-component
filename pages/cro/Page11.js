import React, { useEffect, useState } from "react";
import Section from "./Section";


function ImageContainer() {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		function changeImage() {
			const scroll1 = window.scrollY + window.innerHeight / 3;
			const scroll = scroll1 + 500;

			console.log("scroll", scroll);
			const sections = document.getElementsByClassName("section");
			console.log("sections", sections);

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				section.classList.remove("active");

				if (
					section.offsetTop <= scroll &&
					section.offsetTop + section.offsetHeight > scroll
				) {
					setActiveSection(i);
					section.classList.add("active");
				}
			}
		}

		window.addEventListener("scroll", changeImage);
		changeImage();

		return () => {
			window.removeEventListener("scroll", changeImage);
		};
	}, []);


	const scrollToNextSection = () => {
		const sections = document.getElementsByClassName("section");
		if (activeSection < sections.length - 1) {
			const nextSection = sections[activeSection + 1];
			const scrollOptions = {
				top: nextSection.offsetTop,
				behavior: "smooth",
				easing: "ease-in-out",
			};
			window.scrollTo(scrollOptions);
			setActiveSection(activeSection + 1);
		}
	};

	return (
		<div>
			<div>
				<div>
					<Section
						activeSection={activeSection}
						img="url(image1.jpg)"
						direction="left"
						text="Tina had lost her father to Crohn's disease. Now she faced her own
					diagnosis."
					/>

					<Section
						activeSection={activeSection}
						img="url(image2.jpg)"
						direction="right"
						text="Tina was in her early 20s. She lived in New York City and was
					building a promising future for herself in finance."
					/>

					<Section
						activeSection={activeSection}
						img="url(image3.jpg)"
						direction="center"
						text="Then came the diagnosis. Finding out she had Crohn’s disease,
					one of two IBD syndromes that affect 10 million people
					worldwide, wasn’t a surprise considering her family’s history
					with the disease. But it derailed her life. Tina was in her
					early 20s. She lived in New York City and was building a
					promising future for herself in finance"
					/>

				</div>

				<button
					className="next-section-button bg-blue-500 p-2 rounded-md text-white"
					onClick={scrollToNextSection}
				>
					Next Section
				</button>


			</div>
			<footer>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis et debitis libero illum, sit laudantium laboriosam pariatur dolor hic numquam quia, ipsa eveniet! Error ad corrupti voluptatum incidunt tempora?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis et debitis libero illum, sit laudantium laboriosam pariatur dolor hic numquam quia, ipsa eveniet! Error ad corrupti voluptatum incidunt tempora?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis et debitis libero illum, sit laudantium laboriosam pariatur dolor hic numquam quia, ipsa eveniet! Error ad corrupti voluptatum incidunt tempora?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit perspiciatis et debitis libero illum, sit laudantium laboriosam pariatur dolor hic numquam quia, ipsa eveniet! Error ad corrupti voluptatum incidunt tempora?
			</footer>
		</div>
	);
}

export default ImageContainer;

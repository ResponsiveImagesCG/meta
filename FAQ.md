# ResponsiveImages.org FAQ

- **Why create a new picture element instead of adapting the current &lt;img&gt; element?﻿**

This is necessary as the current user agents (browser) which will be around for some time are not able to parse a current img element which serves multiple resources.  
It would work for the srcset attribute and is proposed by WHATWG for usage on img element but won't work with multiple sources and different media-queries.

_Example:_
	<img srcset="low.jpg 1x 200w, high.jpg 2x 400w">
	<picture>
		<source srcset="low.jpg 1x 200w, high.jpg 2x 400w" media="(max-width: 480px)">
		<source srcset="monochrome.jpg 1x 200w, monochrome.jpg 2x 400w" media="monochrome">
	</picture>

So it is and will likely be possible to use the current img element with the srcset attribute. This is also recommended for normal low-res/high-res-switches. For art-direction use-cases there has to be the possibility to define the images more granular. See our [examples](http://demos.responsiveimages.org/) what can be achieved with picture.

- **Why not use CSS-background property and / or image-set?**

There are several reasons to avoid image manipulation via CSS:
	1. Art-Direction: Serving a different crop won't work via CSS-backgrounds if the image has a different ratio or size.
	2. Blank Images and set the image via CSS completely is bad. Content should always be served in plain HTML even without CSS.
	3. It is hard for Content Management Systems and bad for website-performance to generate the CSS on the fly by the CMS.

- **Why not use SVG?**
	
Surely you should consider using SVG for all vector based stuff. But again if you want to art direct your content image so it looks different on specific device-types SVG is not the right place to set media-queries. You better should set different SVG sources in the picture element and have small SVG files. If you have three media-query contents in your SVG file it's quite blown up.  
We want to create a solution that respects site performance and  as many use-cases as possible.

- **Why is srcset not enough?**

srcset is not enough because it only serves one specific use-case: Serving different resolutions for one image. This is simply not enough for many websites as they will likely need different crops, ratios or orientations on their responsively served images. See [use-cases](http://usecases.responsiveimages.org/)
We like the srcset approach for the very specific use-case it covers. That is why we also want to include it in our specification as an attribute for the picture element.

- **…but there is this JavaScript doing my Retina images already?!**

Several JavaScript solutions are on the market to serve high resolution images to high-resolution devices. This is great for the moment but means the website has normal images and additionally forces the user to download the retina images as well (after parsed the JavaScript) if he has a high resolution display.  
This is not only bad from a performance point of view but also does not cover all our other [use-cases](http://usecases.responsiveimages.org/) for responsive images. That said it is good to have polyfills like the 'picture fill' that help developers right in time until standardized solutions will be out.
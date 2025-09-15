Post processing in Unreal Engine that enhances the visual quality.

---

## Bloom

- **Method**
    - ***Convolution:*** Very expensive, not intended for games.
    - ***Standard:*** Cheap, good for real-time use.
- ***Threshold:*** How bright the surface must be to produce the bloom effect

## Temperature

- **Type**
    - ***White Balance:*** Blue is a cold temperature.
    - ***Color Temperature:*** Blue is a higher temperature.

## Misc

- ***Color Grading LUT:*** Color Grading Look Up Table is a chart that tells the renderer how to map the colors in our scene.

## Film

- Film parameters can affect tone mapper
- **Toe:** A long toe means more shades of gray will appear as black.

![Untitled](/assets/images/posts/post_processing/image_1.png)

![Untitled](/assets/images/posts/post_processing/image_2.png)

- **Shoulder:** A long shoulder means more solid whites, similar to toe.
- **Slope:** The steepness of the curve between toe and shoulder

## Exposure

- ***Auto Exposure Histogram:*** Allows for eye adaptation, which will darken the scene if we are looking at something too bright, and brighten the scene if we are looking at something too dark.
    - Show→Visualize→HDR (Eye Adaption)
- ***Manual***
    - Control with **Camera→*Shutter Speed (1/s) &** **Aperture (F-stop)***

## Lens Flare

- Great for creating cinematic effect.
- ***BokehSize:*** Same as Threshold

## Vignette

## Motion Blur

- Set Target FPS to 24 to get a more cinematic look.

## Chromatic Aberration

- A distortion effect of a lens to focus all colors to the same point.
- Adjust the ***Intensity*** and ***Start Offset*** to create little edge abbreation effect.

![Untitled](/assets/images/posts/post_processing/image_3.png)

## Film Grain

- Real life images will inevitably have grain and dust on the lens or floating around in the air.
- Genral: *Shadows>Highlights>Midtones*

## LUTs

- A LUT will clamp color to 8 bit.
- Be careful relying solely on using LUTs for color grading.

## Reference

[***Introducing Post Processing***](https://dev.epicgames.com/community/learning/courses/pE2/unreal-engine-introducing-post-processing/mZ11/unreal-engine-introducing-post-processing-overview)
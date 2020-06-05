## HTML and CSS -- lists of things

Create a list of things with images. Pick a theme and you can search and copy url's from the interwebs.

## Standard Setup Process

1. Create a repo called `lab-02b-image-gallery` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. Check with `pwd` that you are in correct directory for labs
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**
    1. Launch vscode with `code .`

## Remember To...

1. Read through this entire lab document
1. **Have a plan.** 

## Image Gallery

### **Wireframes**

Make 2 wireframe designs for an image gallery site. One wireframe should have all of the images lined up vertically in a single column. The other wireframe should be a grid of images instead. In both wireframes, each image should be inside a container with a caption. Feel free to add borders, and box shadows and other design elements. Take pictures of these wireframes to your repo. ACP!

  > <img src="./list.png" width="300px">

  > <img src="./grid.png" width="300px">

### Build out HTML and CSS

1) in your `index.html`, make a `ul` with an `li` inside (style the `li` in with `list-style: none;` to get rid of the browser-default dot)
1) in the `li`, make a image item `article` with a `class='gallery-item'` attribute, and style this image item div in `style.css`. Each image item div must also have an image, and a link.
1) now, copy and paste this `li` seven times, and change the caption and image in every copied image item.
1) by default, `li` tags are `display: block`. notice that the image-items all go down in a  single vertical row. take a screenshot of the vertical  row of `display: block` image-items, and add that screenshot to the repo. ACP!
1) in `style.css`, style the `ul` and/or `li` elements to make the image items wrap dynamically (use `display: flex` and `flex-wrap: row` on the `ul`)
1) take a screenshot of the dynamically-wrapping image items and add the screenshot to your repo.
1) play with all the different options that flex offers for lists of things! `justify-content: flex-end`, `align-items: center`, `flex-direction: column`, etc
1) ACP and submit the repo link to the canvas assignment

```
# Name Tag

Recreate a classic name tag in HTML

## Standard Setup Process

1. Create a repo called `lab-02a-name-tag` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. Check with `pwd` that you are in correct directory for labs
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**
    1. Launch vscode with `code .`

## Process

1. Read through this entire lab document
1. **Have a plan.** 
    > Spend a few minutes planning your layout and styling approach. See considerations below
2. Create Semantic HTML
3. Add Layout CSS
4. Add Stylistic CSS

## The Name Tag
```
<img src="https://user-images.githubusercontent.com/478864/77445954-f6c20600-6daa-11ea-80ea-d7bc770ca81b.png" width="400px">

```
## Considerations

### HTML

- What is content versus styling?
- Are there sections? Is there a header? A footer? Or something else?
- Is the header text two headers? Or a single header with different styling?
- How would a screen reader interpret this?

### CSS

- Height and Width
- Margins and Padding
- Borders and Border Radius
- Background Color
- Text 
    - Color
    - Text Alignment
    - Text Decoration
- Font Family and Size
```

Update your nametag repo to add three buttons that changes the background color of the tag to `pink`, `lightgreen`, or `lightblue`.

Also update the project so that the user is able to change the name on the nametag with an input and a button.

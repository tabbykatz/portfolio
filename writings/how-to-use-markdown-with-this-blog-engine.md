---
title: "How to Use Markdown With This Blog Engine"
date: "2020-10-21"
og:
  description: "A basic guide to writing Markdown that renders well in this
  engine."
  image: "/md-example.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_If you want to use this setup to write blog posts, here are some tips! This
section is achieved by using underscores for emphasis and has a drop cap first
letter._

![How This Page Renders](/md-example.png)

To embed images like the one above, you can link to the public folder or an outside url. You don't need a complete path if the image is in the public folder.

`![Alt Text](/image-in-public-folder.png)`

# This is a header.

You can use the `#` with a single space before the header text to make headers, and you don't need line breaks between headers and other elements. More hashtags == lower headers.


Write a second paragraph by skipping two lines.


If you want to include a link in a paragraph, such as this link to a [Markdown
Guide](https://www.markdownguide.org/), do so like this:

`[Text to highlight](hyperlink)`

Need to add block quotes? Use the `>` at the start of each line. 

>The Markdown Guide is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document. -[Markdown Guide](https://www.markdownguide.org/)

As you can see, you can also include hyperlinks in blockquotes. 

# Code

You can highlight code snippets with backticks:


`this style has single backticks`


You can do this on a new line or `inline`.


# Codeblocks

Codeblocks are a fun touch, and enable the reader to copy the code with a single click. Here is a simple function:


```python
class Solution(object):
    def searchMatrix(self, matrix, target):
        if len(matrix) == 0:
            return (0)
        i = 0 
        j = len(matrix[0]) - 1
        
        while i >= 0 and j >= 0 and i <= len(matrix) - 1 and j <= len(matrix[0]) - 1:
            if matrix[i][j] == target:
                return (True)
            elif matrix[i][j] > target:
                j -= 1
            else:
                i += 1
        return (False)
```

This element is achieved by using 3 backticks followed immediately by the style of syntax highlighting you'd like, such as `python` in the above example. The code should be on new lines, then end the block with 3 more backticks on the next line. Syntax highlighting isn't perfect 100% of the time.


# Emphasis and Italics

A single asterisk on either end of text *italicizes*.
_You can also use underscores for emphasis in a paragraph!_
Two asterisks makes text **bold**.

# Lists

Lists can be made with dashes, asterisks, or numerals. 
- A
- dashed
- list

* An
* asterisk
* list

1. An
2. ordered
3. list
	* Lists can be nested with indentation!

# Embedding Video

[![Markdown: syntax basics](http://img.youtube.com/vi/0_tO8HgJiLQ/0.jpg)](http://www.youtube.com/watch?v=0_tO8HgJiLQ "Markdown: syntax basics")

The video above is embedded using an online tool called [Embed
YouTube](http://embedyoutube.org/). This makes a static image from the video
into a linked image to the video itself. 


But you can also write html in markdown files and see the results. Below, I've
pasted the embed `<iframe>` from YouTube.


<iframe width="560" height="315" src="https://www.youtube.com/embed/0_tO8HgJiLQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# What does the markdown for this page look like?


```html
---
title: "How to Use Markdown With This Blog Engine"
date: "2020-10-21"
og:
  description: "A basic guide to writing Markdown that renders well in this
  engine."
  image: "/md-example.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_If you want to use this setup to write blog posts, here are some tips! This
section is acheived by using underscores for emphasis and has a drop cap first
letter._

![How This Page Renders](/md-example.png)

To embed images like the one above, you can link to the public folder or an outside url. You don't need a complete path if the image is in the public folder.

`![Alt Text](/image-in-public-folder.png)`

# This is a header.

...
```
# More Markdown Tricks? 

Learning Markdown can help you write slick README files, publish a blog like this one, and much more. I have only shared a little, so I'll leave you with a few resources:

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Markdown Syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
* [Markdown Tutorial](https://www.markdowntutorial.com/)

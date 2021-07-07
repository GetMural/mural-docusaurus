---
id: metadata
title: Story Metadata
sidebar_label: Metadata
---

The metadata screen is where the information that describes the story to external sources is presented. This information is important to search engines and social media platforms as this is where the short description and image you see on Google and Facebook or Twitter comes from. It is also where you can add your Google Analytics identification number if you want.

If these fields are left blank they won't be output in the final build of your Mural story.

Each of the items in the Meta Information editor panel relates to the following final output of your Mural story.

### Title

```html
<title>Sample story: Searching for Spring in Stromovka</title>
```

The title metadata field is also responsible for the `og` (Open Graph) `og:title` property which is used by social media platforms such as Facebook and Twitter.

```html
<meta
  property="og:title"
  content="Sample story: Searching for Spring in Stromovka"
/>
```

### Description

The description metadata field is where you should desribe your Mural story in between 120 to 158 characters. This length may seem arbitrary (and in some ways it is) - but this is ideal length of a string of text when displayed by search engines likesuch as Google or Duck Duck Go and Social media platforms such as Facebook, Twitter, or Mastodon.

```html
<meta
  name="description"
  content="Prague's Stromovka park is one of its biggest. A former royal hunting ground, the park now features a number of ways to relax and enjoy the outdoors."
/>
```

The description metadata field is also responsible for the `og:description` output in your final Mural story.

### Author

The author field is where the author of the Mural story's name is entered.

```html
<meta name="author" content="Douglas Arellanes" />
```

### Canonical URI

If you know the final website address of your Mural story then this is where to enter that information.

```html
<meta
  property="og:url"
  content="https://s3.eu-central-1.amazonaws.com/muralsoftware/test_stories/spring_sample_story/index.html"
/>
```

### Site Name

What is the name of your Mural story? Although they are often the same this does not have to be identical to the title metadata information.

```html
<meta property="og:site_name" content="Mural" />
```

### Site Image

This is where you should upload an image to represent your Mural story when it is displayed on social media platforms such as Facebook, Twitter, or Mastodon.

```html
<meta
  property="og:image"
  content="https://s3.eu-central-1.amazonaws.com/muralsoftware/test_stories/spring_sample_story/uploads/purple_flowers_thumbnail.jpg"
/>
```

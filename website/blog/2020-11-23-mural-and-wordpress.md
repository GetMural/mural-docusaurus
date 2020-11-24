---
title: Mural and Wordpress
author: Pete Haughie
authorURL: https://twitter.com/petehaughie
---

A question we get asked about on a fairly regular basis is "how on earth do I make Mural play nicely with Wordpress?"

After some experimentation we have found a simple two-step workflow to allow you to begin to bring Mural into your site.

<!--truncate-->

Our test site was hosted at <a href="https://www.dreamhost.com/" target="_blank" rel="noopener nofollow noreferrer">Dreamhost</a> as that is a fairly good example of what one might experience as an end user. We did not change anything from a default Wordpress installation. All the steps provided here should be within reach of a non-technical Wordpress website owner. 

Let's look at what the actual requirements are. The first requirement is a method of uploading the necessary files to the server and the second is a way of integrating those files into the posts and pages of a site.

<a href="https://wordpress.org/plugins/wp-file-manager/" target="_blank" rel="noopener nofollow noreferrer">WP File Manager</a> is a free and fully featured file manager. You can install it directly into your Wordpress via the Plugins Manager which you can find via `Plugins > Add New` and searching for it in the search bar. Our suggestion is to create a `stories` folder in your `wp-content` folder to store all of your Murals in. You can drag an entire folder structure onto the File Manager interface but to begin with we would suggest using the upload button.

This means that your new story will be available directly at `www.yourwebsite.com/wp-content/stories/your-mural-story/`. Be sure to test that it works before moving on to the next step.

Now we have to install <a href="https://wordpress.org/plugins/page-links-to/" target="_blank" rel="noopener nofollow noreferrer">Page Links To</a> in exactly the same way that we installed WP File Manager.

You'll want to advertise your new content to your audience and the way to being that is to start as you would any normal post. Add a featured image that you'd like to represent your new content in your site's post or blog list. Don't forget to write a short introductory text to your new content which will also display. Finally paste the link you saved above into the `Links to` field in your post editor.

Publish your post. Now when you visit your site you should see your new post title, image, and description as per normal but when you click on the entry will be taken to your Mural story. Link To also handles your blog post forwarding so you don't need to worry about anybody accidentally ending up at your plaeholder post.

Finally don't forget to turn on the auto update for your new plugins to ensure your site's security.

It really is as easy as that.
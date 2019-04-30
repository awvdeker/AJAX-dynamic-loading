AJAX-dynamic-loading
====================

- three HTML pages, only the content Lorem ipsum ..., no html, head and body-tag, more than a screen full

- index.html, index.css and index.js: for the main page with navbar and a div (contentHolder) to display one of the three pages when clicked on the corresponding link

- using bootstrap for the css styling and navbar

- index.js: local AJAX request and handling the response if a link is clicked: with new XMLHttpRequest()

- loading icon while pages loaded: doesn't appear because loading is too fast: with setTimeout icon stays for .5 seconds

- scroll up to the top of the window when link is clicked before page loading

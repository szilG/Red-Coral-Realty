# RED CORAL REALTY - Testing Details

[README.md file](https://github.com/szilG/Red-Coral-Realty/blob/main/README.md)

## Testing 

### Client stories testing

As a potential customer, I want to easily navigate throughout the site and find what I need.

* As every page has a navigation bar on the top and bottom of the page, the customer can easily find and navigate through the site.

<img src="assets/img/TESTING.md-img/12.png" width="500" alt="image">
<img src="assets/img/TESTING.md-img/17.png" width="500" alt="image">

* As every page has a company logo image that when clicked takes the customer back to the Home page.

<img src="assets/img/TESTING.md-img/13.png" width="500" alt="image">

* As every page has a back to top button. When the customer scrool down on the page that button appears and with the button clicking they can easily go back to the top of the page.

<img src="assets/img/TESTING.md-img/14.png" width="500" alt="image">

* The home page has many call-to-action buttons which take the user to the specific page.
  - Right away in the hero section they can book a Valuation to their property.
    <img src="assets/img/TESTING.md-img/15.png" width="500" alt="image">
  - Further along there are the read more buttons wich takes the user to check the desired property.
    <img src="assets/img/TESTING.md-img/16.png" width="500" alt="image">
  - They can book appointment for a valuation every section on the page.
    <img src="assets/img/TESTING.md-img/18.png" width="500" alt="image">
    <img src="assets/img/TESTING.md-img/19.png" width="500" alt="image">
    <img src="assets/img/TESTING.md-img/20.png" width="500" alt="image">

### Validation Testing
* [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
* [W3C Markup Validation](https://validator.w3.org/) 

To solve W3C Markup Validation problem:

Home page:

1.
<img src="assets/img/TESTING.md-img/04.png" width="500" alt="image">

That problem was on Home page Hero Section. To solve this problem I wrap every i element inside li element.
I found the solution [here:](https://rocketvalidator.com/html-validation/element-div-not-allowed-as-child-of-element-ul-in-this-context-suppressing-further-errors-from-this-subtree)

2.
<img src="assets/img/TESTING.md-img/05.png" width="500" alt="image">

That problem was on Home page Properties Section. To solve this problem I separate p tag from h4 tag.
I found the solution [here:](https://stackoverflow.com/questions/21084870/no-p-element-in-scope-but-a-p-end-tag-seen-w3c-validation)

3.
<img src="assets/img/TESTING.md-img/06.png" width="500" alt="image">

That problem was on Home page Footer widget Section. To solve this problem I simply delete the button tag.

4.
<img src="assets/img/TESTING.md-img/07.png" width="500" alt="image">

That problem was on Home page Mortgage Calculator Section. To solve this problem I used div element instead of h2 tag.
I found the solution [here:](https://stackoverflow.com/questions/23739224/empty-heading-warning-on-html5-validation#:~:text=The%20%22empty%20heading%22%20warning%20means,with%20which%20they%20are%20associated.)

Contact page:

1.
<img src="assets/img/TESTING.md-img/08.png" width="500" alt="image">

That problem was on Every page in the Header Section. To solve this problem I renamed the ID of navbarDropdownMenuLink.

2.
<img src="assets/img/TESTING.md-img/09.png" width="500" alt="image">

To solve this problem I gave space betweed the attributes and delete the type attribute.

Mortgages page:

1.
<img src="assets/img/TESTING.md-img/10.png" width="500" alt="image">

To solve this problem I gave empty value attribute to the first option element.

Request Valuation page:

1.
<img src="assets/img/TESTING.md-img/11.png" width="500" alt="image">

To solve this problem I gave empty value attribute to the first option element.
Put space between the attributes.


CSS Validation went through without any problem.


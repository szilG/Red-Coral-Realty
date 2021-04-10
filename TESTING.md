# RED CORAL REALTY - Testing Details

[README.md file](https://github.com/szilG/Red-Coral-Realty/blob/main/README.md)

## Testing 

#### Validation Testing
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


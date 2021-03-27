var FEATURED_LOCAL_PROPERTIES = [1,2,3,4,5,6]

var LOCAL_PROPERTIES = [
    {
        id: 1,
        name: 'Doolin House',
        address: 'Clarehall, Dublin City P25 AE70',
        price: '€180,000',
        bedroom: '1',
        bathroom: '1',
        areas: '54 sqm',
        features: [' Large Balcony', 'Off street parking', 'Double glazing', 'Off M1, M50 and minutes from Dublin Airport', 'Close proximity to all local amenities',
        'Management Fee - Approx. €890 per annum', 'Underground Car Park', 'Secure Gated Development', ' Ideal first time buyer or investor home ready to move in or rent',
        'Ample Storage throughout', 'Top floor dream apartment', 'Spacious one bedroom apartment presented in show house condition',
        'Large open living/dining area with door to balcony'],
        description: 'We are proud to introduce No. 36 Doolin House to the Dublin property Market. This fantastic one bedroom apartment is presented in immaculate condition throughout and would suit first time buyers or investors alike. Located on the Malahide Road, this modern apartment is situated in this modern development on the outskirts of the city centre. Doolin House benefits from a most convenient location with a host of amenities on its doorstep. This wonderful apartment provides bright and spacious accommodation which is further enhanced by a large balcony. This is a stunning development with gated private manicured grounds adjacent to Clarehall Shopping Centre, Northern Cross and all surrounding amenities. Easy access to the city centre with excellent bus service. Within minutes drive to Dublin Airport, M50 and M1 motorways.',
        imagePaths: ['assets/img/index/doolin-house-dublin01.jpeg', 'assets/img/local-properties/doolin-house-dublin/02.jpeg', 'assets/img/local-properties/doolin-house-dublin/03.jpeg',
        'assets/img/local-properties/doolin-house-dublin/04.jpeg', 'assets/img/local-properties/doolin-house-dublin/05.jpeg', 'assets/img/local-properties/doolin-house-dublin/06.jpeg',
        'assets/img/local-properties/doolin-house-dublin/07.jpeg', 'assets/img/local-properties/doolin-house-dublin/08.jpeg', 'assets/img/local-properties/doolin-house-dublin/09.jpeg',
        'assets/img/local-properties/doolin-house-dublin/10.jpeg', 'assets/img/local-properties/doolin-house-dublin/11.jpeg', 'assets/img/local-properties/doolin-house-dublin/12.jpeg',
        'assets/img/local-properties/doolin-house-dublin/13.jpeg', 'assets/img/local-properties/doolin-house-dublin/14.jpeg'],
    },
    {
        id: 2,
        name: 'Ballygall Road East',
        address: 'Clarehall, Glasnevin, Dublin City, Dublin, P25 AE70',
        price: '€420,000',
        bedroom: '3',
        bathroom: '1',
        areas: '160 sqm',
        features: [' Private garden', 'Central heating', 'Partial attic conversion. Potential for 4th bedroom subject to planning approval', 'PVC Windows', 'Gas central heating',
        'Lounge with open fire', 'Dining Room with sliding doors to patio area and rear garden', 'Master bedroom with fitted wardrobes', ' Modern interior',
        'Southwest facing rear garden', 'Top floor dream apartment', 'Driveway to rear of garden', 'Front garden', 'Close proximity to primary and secondary schools',
        'dcu a 10 minute walk away'],
        description: 'Ballygall Road East is at the end of Griffith Avenue Extension and is within walking distance from an abundance of local shops, schools, colleges, restaurants, recreational and sporting amenities. Dublin International airport is within a ten-minute drive of the property. Notable mentions within close proximity to the property include the recently opened ikea store, the National Botanic Gardens, Dublin City University and the Bon Secours and Beaumont hospitals. The M50 motorway is also close by providing ease of access to Dublin and the surrounding counties. The property is also situated in close proximity to the proposed metro North. Dublin City Centre is within a fifteen-minute drive of the property.',
        imagePaths: ['assets/img/index/glasnevin-dublin01.jpeg', 'assets/img/local-properties/glasnevin-dublin/02.jpeg', 'assets/img/local-properties/glasnevin-dublin/03.jpeg',
        'assets/img/local-properties/glasnevin-dublin/04.jpeg', 'assets/img/local-properties/glasnevin-dublin/05.jpeg', 'assets/img/local-properties/glasnevin-dublin/06.jpeg',
        'assets/img/local-properties/glasnevin-dublin/07.jpeg', 'assets/img/local-properties/glasnevin-dublin/08.jpeg', 'assets/img/local-properties/glasnevin-dublin/09.jpeg',
        'assets/img/local-properties/glasnevin-dublin/10.jpeg', 'assets/img/local-properties/glasnevin-dublin/11.jpeg', 'assets/img/local-properties/glasnevin-dublin/12.jpeg',
        'assets/img/local-properties/glasnevin-dublin/13.jpeg', 'assets/img/local-properties/glasnevin-dublin/14.jpeg', 'assets/img/local-properties/glasnevin-dublin/15.jpeg',
        'assets/img/local-properties/glasnevin-dublin/16.jpeg', 'assets/img/local-properties/glasnevin-dublin/17.jpeg', 'assets/img/local-properties/glasnevin-dublin/18.jpeg',
        'assets/img/local-properties/glasnevin-dublin/19.jpeg', 'assets/img/local-properties/glasnevin-dublin/20.jpeg'],
    }

]

function generatePropertyHTMLFromDetails(propertyDetails) {
    const headerHTML = 

    `
    <section class="property-section">
        <div class="container-fluid p-0">
            <div class="property-sherkin-island-slider">
                <!-- Slider main container -->
                <div class="swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img ${propertyDetails.imagePaths[0]}>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img ${propertyDetails.imagePaths[1]}>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img ${propertyDetails.imagePaths[2]}>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img ${propertyDetails.imagePaths[3]}>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/05.jpeg" alt="Doolin House, Dublin picture 5">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/06.jpeg" alt="Doolin House, Dublin picture 6">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/07.jpeg" alt="Doolin House, Dublin picture 7">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/08.jpeg" alt="Doolin House, Dublin picture 8">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/09.jpeg" alt="Doolin House, Dublin picture 9">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/10.jpeg" alt="Doolin House, Dublin picture 10">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/11.jpeg" alt="Doolin House, Dublin picture 11">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/12.jpeg" alt="Doolin House, Dublin picture 12">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/13.jpeg" alt="Doolin House, Dublin picture 13">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide-image">
                                <img src="../../assets/img/local-properties/doolin-house-dublin/14.jpeg" alt="Doolin House, Dublin picture 14">
                            </div>
                        </div>
                    </div>
                    <!--Navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                
                    
                </div>
            </div>
        </div>
    
        <div class="container">
        <div class="row mt-4">
            <div class="col-sm-6 section-header">
                <h4>Asking Price</h4>
                <h2>${propertyDetails.price}</h2>
            </div>
            <div class="col-sm-6">
                <div class="section-details d-flex align-self-center">
                    <div>
                        <i class="fas fa-bed align-self-center"></i>
                        <span>${propertyDetails.bedroom}</span>
                    </div>
                    <div>
                        <i class="fas fa-bath align-self-center"></i>
                        <span>${propertyDetails.bathroom}</span>
                    </div>
                    <div>
                        <i class="fas fa-ruler-combined align-self-center"></i>
                        <span>${propertyDetails.areas}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <section class="property-text-section mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                    <h1>${propertyDetails.name}<br> ${propertyDetails.address}</h1>
                        <hr>
                        <h2>Description</h2>
                        <p class="lead">Features:</p>
                        <ul>${propertyDetails.features}</ul>
                        <p></p>
                        <p></p>
                        <p>Location:<br>
                            ${propertyDetails.description}
                        </p>   
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </section>
    </section>`;

    return headerHTML;
}


function showPropertyDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('property_id');
    const propertyDetails = LOCAL_PROPERTIES.find(property => property.id === parseInt(propertyId));
    const propertyHTML = generatePropertyHTMLFromDetails(propertyDetails);
    // Append this HTML to the property-detals.html
    PropDetailsContainer = document.getElementById("prop-details-container");
    $("prop-details-container").append(propertyHTML)
}
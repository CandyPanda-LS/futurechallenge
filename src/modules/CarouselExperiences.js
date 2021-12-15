import React from 'react'
import IMG1 from '../assets/carouselImages/IMG1.jpg'


function CarouselExperiences() {
    return (
        <div className="container">
            <br /> <br />
            <div className="row mt-4 mb-4">
                <h1 className="text-white text-center">A GLIMPSE OF WHAT IS TO COME</h1>
                <div className='row'>
                    <div className='col-lg-8 mx-auto mt-5'>
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active border border-5">
                                    <img src={IMG1} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        
                                    </div>
                                </div>
                                <div class="carousel-item border border-5">
                                    <img src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/184812077_4226928650702412_7918480652110525747_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=8UTdwpDHdwEAX-Zs0UA&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT8jH7sAzYgUqsTiiyP0kj2J6z-f3F4ENF1nzfuNfZgj4Q&oe=61DDE039" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        
                                    </div>
                                </div>
                                <div class="carousel-item border border-5">
                                    <img src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/186326948_4226923847369559_3190167518009184747_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=pGFoubm1r8IAX-8HUBV&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT-AzDTDw_AIVJs8N4GHTF0k0zFmKBSNkBQ48G-EzZ7ZtA&oe=61DC8BFF" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        
                                    </div>
                                </div>
                                <div class="carousel-item border border-5">
                                    <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/186498672_4226920797369864_4208781249542025197_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Ezy8t_cVoj0AX8DiIIb&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT-GXu5JjdEo_ZFMhmVo2QdAbM1sqNUMvjWVRX89RtGPbw&oe=61DFD5F3" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        
                                    </div>
                                </div>
                                <div class="carousel-item border border-5">
                                    <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/185868064_4226921197369824_2906990408377269398_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Y37QD076AG8AX_Ru5ST&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT86dp4eU0FF7jKNbr6Th7iDCjwLUTph5SwNv3_sLlyEQA&oe=61DF6F3F" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <br />
        </div>
    )
}

export default CarouselExperiences

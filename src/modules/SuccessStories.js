import React from 'react'
import BoardCard from '../commons/BoardCard'
import p1 from '../assets/PastExperiences/p1.jpg'
import p2 from '../assets/PastExperiences/p2.jpg'
import p3 from '../assets/PastExperiences/p3.JPG'
import p4 from '../assets/PastExperiences/p4.JPG'

function SuccessStories() {
    return (
        <div className="container">
            <br /> <br />
            <div className="row mt-4 mb-4">
                <h1 className="text-white text-center">SUCCESS STORIES</h1>
                <div className="col-md-12">
                    <div className="row d-flex">
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p1}
                                name="Hashan Pasindu"
                                position="(Computational Physics)"
                                quote="..."
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p2}
                                name="Shehani Jayasinghe"
                                position="(ISMF)"
                                quote=""
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p3}
                                name="Charith Peris"
                                position="(BSc Special degree in Physics)"
                                quote=""
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p4}
                                name="Viran Silva"
                                position="(Engineering Physics)"
                                quote=""
                            />

                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <br />
        </div>
    )
}

export default SuccessStories

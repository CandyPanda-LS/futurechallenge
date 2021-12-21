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
                                image={p2}
                                name="Shehani Jayasinghe"
                                position="(ISMF)"
                                quote="It was a good opportunity to take a peak of what really is out there and to get to know what's expected of us when we graduate. 

                                I do urge everyone to participate if possible and the earlier the better, so you have ample time time redirect yourself into the path that's best for you. "
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p3}
                                name="Charith Peris"
                                position="(BSc Special degree in Physics)"
                                quote="I participated in Future Challenge ‘09 immediately after my year as president of the Rotaract Club. I wasn’t specifically looking for a job. However, I did a walk in interview with Amba Research Lanka ( now Copal Amba ) that led to my very first job as a Quants Analyst. 

                                My advice to graduates would be to go for the interview experience make the best of the elite interview panels that come to FC. You never know where it might lead you and how it may shape your career."
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p4}
                                name="Viran Silva"
                                position="(Engineering Physics)"
                                quote="One of the most friendly and amazing interview experiences I ever had. Excellent Communication skills would be one of major key points in nailing the interviewing process. "
                            />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <BoardCard
                                image={p1}
                                name="Rahul Kalubowila"
                                position="(Applied Statistics)"
                                quote="If you are planning to attend a career fair, Future Challenge 2022 is the career fair to be!. It has evolved significantly over the past and this years' FC is a testament of the progress. I want to thank the team and wish the project more success in the years to come!"
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

import React from 'react'
import { Card, CardText, CardBody } from "reactstrap";
import './LatestNews.css'
function LatestNews() {
    return (
        <div className="container">
            <br /> <br />
            <div className="row mt-4 mb-4">
                <h1 className="text-white text-center">LATEST NEWS</h1>
                <div
                    className="col-lg-4 col-sm-12 mt-3"
                >
                    <Card className="CardDiv">
                        <CardBody>
                            <CardText>The registrations of the system are open now</CardText>
                            <CardText className="text-muted">
                                2021-07-11
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div
                    className="col-lg-4 col-sm-12 mt-3"
                >
                    <Card className="CardDiv">
                        <CardBody>
                            <CardText>The registrations of the system are open now</CardText>
                            <CardText className="text-muted">
                                2021-07-11
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div
                    className="col-lg-4 col-sm-12 mt-3"
                >
                    <Card className="CardDiv">
                        <CardBody>
                            <CardText>The registrations of the system are open now</CardText>
                            <CardText className="text-muted">
                                2021-07-11
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div
                    className="col-lg-4 col-sm-12 mt-3"
                >
                    <Card className="CardDiv">
                        <CardBody>
                            <CardText>The registrations of the system are open now</CardText>
                            <CardText className="text-muted">
                                2021-07-11
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <br />
        </div>
    )
}

export default LatestNews

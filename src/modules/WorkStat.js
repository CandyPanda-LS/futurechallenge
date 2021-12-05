import React from 'react'
import { CardColumns, Container } from "reactstrap";
import KeynoteCard from "../commons/KeynoteCard";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";
import { FaRegFilePowerpoint, FaUser, FaUniversity } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdWork } from "react-icons/md";


function WorkStat() {
    function toggle() {
        this.setState({ modal: !this.state.modal });
    };

    function toggleProfile() {
        this.setState({ modalProfile: !this.state.modalProfile });
    };
    return (
        <Container className="mt-5">
            <h1 className="text-white text-center">KEYNOTES</h1>

            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-offset="100"
                data-aos-duration="1000"
            >
                <CardColumns>
                    <div>
                        <div>
                            <Card
                                style={{
                                    borderRadius: "20px",
                                    backgroundColor: "#000102",
                                    margin: "20px",
                                }}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://firebasestorage.googleapis.com/v0/b/icafsl.appspot.com/o/workshopimages%2FWhatsApp%20Image%202021-07-03%20at%2013.40.17.jpeg?alt=media&token=1bdc73c1-1442-41d0-913e-5832335d5c1e"
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        Workstat Session 1
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-07-31
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </CardText>

                                    <Button className="bg-transparent border-0">
                                        {/* <a href={this.props.workshop.workshop.fileLink} target="_blank">
                                            <FaRegFilePowerpoint color="white" fontSize="1.75em" />
                                        </a> */}
                                    </Button>

                                    {/* <Button className="bg-transparent border-0" onClick={this.toggle}>
                                        <BsCalendar color="white" fontSize="1.5em" />
                                    </Button> */}

                                    {/* <Button
                                        className="bg-transparent border-0"
                                        onClick={this.toggleProfile}
                                    >
                                        <CgProfile color="white" fontSize="1.7em" />
                                    </Button> */}
                                </CardBody>
                            </Card>                        
                            
                        </div>

                        {/* <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    {" "}
                                    Workstat Session 1
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <h6>
                                            <BsCalendar fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.date.substring(0, 10)}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <AiOutlineFieldTime fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.timeFrom} To{" "}
                                                {this.props.workshop.workshop.timeTo}
                                            </span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}

                        {/* <div>
                            <Modal isOpen={this.state.modalProfile} toggle={this.toggleProfile}>
                                <ModalHeader toggle={this.toggleProfile}>
                                    {" "}
                                    PRESENTER DETAILS
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <div>
                                            <img
                                                src={this.props.workshop.profileImg}
                                                className="img-fluid"
                                                alt="profilePic"
                                            />
                                        </div>
                                        <br />
                                        <h6>
                                            <FaUser fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.firstName}{" "}
                                                {" " + this.props.workshop.lastName}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <MdWork fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.jobStatus}</span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <FaUniversity fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.universityOrWorkPlace}</span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}
                    </div>

                    <div>
                        <div>
                            <Card
                                style={{
                                    borderRadius: "20px",
                                    backgroundColor: "#000102",
                                    margin: "20px",
                                }}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://firebasestorage.googleapis.com/v0/b/icafsl.appspot.com/o/workshopimages%2FWhatsApp%20Image%202021-07-03%20at%2013.40.17.jpeg?alt=media&token=1bdc73c1-1442-41d0-913e-5832335d5c1e"
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        Workstat Session 1
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-07-31
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </CardText>

                                    <Button className="bg-transparent border-0">
                                        {/* <a href={this.props.workshop.workshop.fileLink} target="_blank">
                                            <FaRegFilePowerpoint color="white" fontSize="1.75em" />
                                        </a> */}
                                    </Button>

                                    {/* <Button className="bg-transparent border-0" onClick={this.toggle}>
                                        <BsCalendar color="white" fontSize="1.5em" />
                                    </Button> */}

                                    {/* <Button
                                        className="bg-transparent border-0"
                                        onClick={this.toggleProfile}
                                    >
                                        <CgProfile color="white" fontSize="1.7em" />
                                    </Button> */}
                                </CardBody>
                            </Card>                        
                            
                        </div>

                        {/* <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    {" "}
                                    Workstat Session 1
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <h6>
                                            <BsCalendar fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.date.substring(0, 10)}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <AiOutlineFieldTime fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.timeFrom} To{" "}
                                                {this.props.workshop.workshop.timeTo}
                                            </span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}

                        {/* <div>
                            <Modal isOpen={this.state.modalProfile} toggle={this.toggleProfile}>
                                <ModalHeader toggle={this.toggleProfile}>
                                    {" "}
                                    PRESENTER DETAILS
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <div>
                                            <img
                                                src={this.props.workshop.profileImg}
                                                className="img-fluid"
                                                alt="profilePic"
                                            />
                                        </div>
                                        <br />
                                        <h6>
                                            <FaUser fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.firstName}{" "}
                                                {" " + this.props.workshop.lastName}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <MdWork fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.jobStatus}</span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <FaUniversity fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.universityOrWorkPlace}</span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}
                    </div>
                    <div>
                        <div>
                            <Card
                                style={{
                                    borderRadius: "20px",
                                    backgroundColor: "#000102",
                                    margin: "20px",
                                }}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src="https://firebasestorage.googleapis.com/v0/b/icafsl.appspot.com/o/workshopimages%2FWhatsApp%20Image%202021-07-03%20at%2013.40.17.jpeg?alt=media&token=1bdc73c1-1442-41d0-913e-5832335d5c1e"
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        Workstat Session 1
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-07-31
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </CardText>

                                    <Button className="bg-transparent border-0">
                                        {/* <a href={this.props.workshop.workshop.fileLink} target="_blank">
                                            <FaRegFilePowerpoint color="white" fontSize="1.75em" />
                                        </a> */}
                                    </Button>

                                    {/* <Button className="bg-transparent border-0" onClick={this.toggle}>
                                        <BsCalendar color="white" fontSize="1.5em" />
                                    </Button> */}

                                    {/* <Button
                                        className="bg-transparent border-0"
                                        onClick={this.toggleProfile}
                                    >
                                        <CgProfile color="white" fontSize="1.7em" />
                                    </Button> */}
                                </CardBody>
                            </Card>                        
                            
                        </div>

                        {/* <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    {" "}
                                    Workstat Session 1
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <h6>
                                            <BsCalendar fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.date.substring(0, 10)}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <AiOutlineFieldTime fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.workshop.timeFrom} To{" "}
                                                {this.props.workshop.workshop.timeTo}
                                            </span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}

                        {/* <div>
                            <Modal isOpen={this.state.modalProfile} toggle={this.toggleProfile}>
                                <ModalHeader toggle={this.toggleProfile}>
                                    {" "}
                                    PRESENTER DETAILS
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <div>
                                            <img
                                                src={this.props.workshop.profileImg}
                                                className="img-fluid"
                                                alt="profilePic"
                                            />
                                        </div>
                                        <br />
                                        <h6>
                                            <FaUser fontSize="1.5em" />{" "}
                                            <span>
                                                {" "}
                                                {this.props.workshop.firstName}{" "}
                                                {" " + this.props.workshop.lastName}
                                            </span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <MdWork fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.jobStatus}</span>
                                        </h6>
                                        <br />
                                        <h6>
                                            <FaUniversity fontSize="1.5em" />{" "}
                                            <span> {this.props.workshop.universityOrWorkPlace}</span>
                                        </h6>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div> */}
                    </div>
                </CardColumns>
            </div>
        </Container>
    )
}

export default WorkStat

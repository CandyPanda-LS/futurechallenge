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
import WERKSTATT from '../assets/WERKSTATT.png'
import WERKSTATT1 from '../assets/WERKSTATT1.jfif'
import WERKSTATT2 from '../assets/WERKSTATT2.jfif'
import WERKSTATT3 from '../assets/WERKSTATT3.jpeg'

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
            <h1 className="text-white text-center">WERKSTATT </h1>

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
                                    src={WERKSTATT}
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        WERKSTATT REGISTRATIONS OPEN
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-12-15
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        We have opened the registrations for werkstatt 21.
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
                                    src={WERKSTATT1}
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        WERKSTATT Session 1 : CV Writting
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-12-20
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        The First session of WERKSTATT on CV writting.
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
                                    src={WERKSTATT2}
                                    alt="Card image cap"
                                    style={{ borderRadius: "20px" }}
                                />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ color: "white" }}>
                                        CV Submissions are open
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        2021-12-20
                                    </CardSubtitle>
                                    <CardText style={{ color: "white" }}>
                                        CV Submissions for Future Challenge are NOW OPEN!
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

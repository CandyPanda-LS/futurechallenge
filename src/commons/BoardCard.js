import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoardCardStyles.css';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FaBeer } from 'react-icons/fa';


function BoardCard({ image, name, position, quote }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div onClick={toggle}>
      <div className="row-md-3">
        <div className="card-box text-center">
          <div className="user-pic">
            <img src={image} className="img-fluid" alt="User Pic" />
          </div>
          <h6 style={{ color: "white" }}>{name}</h6>
          <h6 style={{ color: "white" }}>{position}</h6>
          <h6 style={{ color: "white" }}></h6>
          <hr />
          <div className="d-flex justify-content-center">
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {" "}
            {name}
          </ModalHeader>
          <ModalBody>
            <div>
              <h6>
                <span>
                  {" "}
                  {position}
                </span>
              </h6>
              <br />
              <h6>"
                <span>
                  {quote}
                </span>"
              </h6>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}




BoardCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
  socialmedia: PropTypes.string.isRequired,
};

export default BoardCard;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Buffer } from "buffer";

import "./styles.scss";
import { setprofilepicture } from "../../api";

const SetProfilePicture = () => {
  const api = `https://api.multiavatar.com/4587458`;

  const navigate = useNavigate();

  const [Pictures, SetPictures] = useState<String[]>([]);
  const [Isloading, setIsLoading] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState<number>();

  useEffect(() => {
    const getPictures = async () => {
      try {
        const pictures: string[] = [];
        for (let i = 0; i < 4; i++) {
          const image = await axios.get(
            `${api}/${Math.round(
              Math.random() * 1000
            )}${`?apikey=AhCUG9tN1qu5xR`}`
          );
          const buffer = new Buffer(image.data);
          pictures.push(buffer.toString("base64"));
        }
        SetPictures(pictures);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPictures();
  }, [api]);

  useEffect(() => {
    if (!localStorage.getItem("profile")) {
      navigate("/");
    }
  }, [navigate]);

  const setProfilePicture = async () => {
    if (selectedPicture === undefined) {
      toast.error("Select a profile picture");
    } else {
      const userInfo = localStorage.getItem("profile");
      if (typeof userInfo === "string") {
        var userDetails = JSON.parse(userInfo);
      }
      console.log(userDetails);
      const userId = userDetails.result._id;

      const selectedImage = Pictures[selectedPicture];

      const { data } = await setprofilepicture(userId, selectedImage);
      console.log(data);
      if (typeof data !== "undefined") {
        userDetails.result.profilePicture = data.profilePicture;
        localStorage.setItem("profile", JSON.stringify(userDetails));
        navigate("/dashboard");
      }
    }
  };

  return (
    <>
      <div className="profilePicture__container d-flex flex-column justify-content-center align-items-center">
        {Isloading ? (
          <div className="profilePicture__spinner"></div>
        ) : (
          <div className="profilePicture__list d-flex flex-column">
            <h1>Select your Profile Picture.</h1>

            <div className="profilePicture__images d-flex justify-content-around my-5">
              {Pictures.map((picture, index) => {
                return (
                  <div>
                    <Image
                      src={`data:image/svg+xml;base64,${picture}`}
                      key={index}
                      className={`profilePicture__img profilePicture__img--${
                        selectedPicture === index ? "selected" : ""
                      }`}
                      onClick={() => setSelectedPicture(index)}
                      rounded
                    />
                  </div>
                );
              })}
            </div>
            <Button
              type="submit"
              className="profilePicture__btn mt-2"
              onClick={setProfilePicture}
            >
              Set as Profile Picture.
            </Button>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default SetProfilePicture;

import { useContext } from "react";
import "./Footer.scss";
import { ThemeContext } from "../../context/ThemeContext";
import insta from "../../assets/icons/insta.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={theme}>
            <div className="wrapper">
                <div className="top">
                    <p>Questions? Call 859390802</p>
                </div>
                <div className="middle">
                    <div className="middle-first">
                        <p>FAQ</p>
                        <p>Cookies Preferences</p>
                    </div>
                    <div className="middle-second">
                        <p>Help Centers</p>
                        <p>Cooperate Informations</p>
                    </div>
                    <div className="middle-third">
                        <p>Terms of Use</p>
                        <p>Privacy</p>
                    </div>
                    <div className={`middle-icons`}>
                        <span className="fb">
                            <img src={facebook} alt="fb" />
                        </span>
                        <span className="insta">
                            <img src={insta} alt="insta" />
                        </span>
                        <span className="twitter">
                            <img src={twitter} alt="twitter" />
                        </span>
                        <span className="youtube">
                            <img src={youtube} alt="youtube" />
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                        <span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 496 512"
                                class="text-[20px]"
                                height="15"
                                width="15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                            </svg>
                        </span>
                        English
                    </p>
                </div>
            </div>
        </footer>
    );
};

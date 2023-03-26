import React from 'react';
import vg from "../images/2.webp";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Tech Fun</h1>
                <p>Solution To All Your Tech Problem is Here</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi error quaerat ullam placeat, eos in quos, soluta exercitationem blanditiis at aliquid culpa.  harum nulla, omnis sint. Accusantium!</p>
            </div>
        </div>
        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus commodi maiores veniam perspiciatis! Nostrum cupiditate pariatur quia magnam aperiam suscipit hic ut sunt vel ipsam placeat eaque voluptate corrupti dolorem, ipsum illo, neque blanditiis expedita. Saepe magni eum porro eaque obcaecati atque iusto explicabo ex! Sapiente, cupiditate velit cumque eligendi quas dicta corrupti ex enim delectus, debitis tempora possimus ipsum quia beatae laboriosam rerum reprehenderit blanditiis libero quam necessitatibus. Odit voluptatem quibusdam unde, praesentium est consectetur reprehenderit, eum laborum aspernatur laboriosam illum quas, natus adipisci sapiente magni. Impedit ratione ipsa sit voluptatibus accusamus cum laboriosam dolorem, at commodi exercitationem.</p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:"0.5s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:"0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay:"1s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  )
}

export default Home
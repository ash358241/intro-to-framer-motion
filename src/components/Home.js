import React from "react";
import './Home.css';
import img from "../images/image-header-desktop.jpg";
import {motion} from "framer-motion";

const Home = () => {
   
  return (
    <div className="homeComponent">
          <div className="content">
             <motion.h1
             initial={{x: "-100vw"}}
             animate={{x: 0}}
             transition={{delay: .2, type:"spring", stiffness: 120}}
             >
             Get <span style={{color: '#AA5CDB'}}>insights</span> that help <br />
              your business grow.
             </motion.h1>
             <motion.p
             initial={{y: -200}}
             animate={{y: 0}}
             transition={{duration: .5, type:"spring", stiffness: 120}}
             >
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa exercitationem a cumque sint eveniet aperiam veniam delectus, fuga deserunt.
            </motion.p>
             <motion.div className="quantity"
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: 1.5}}
             >
                 <div className="quantityOne">10K+ <br /> COMPANIES</div>
                 <div className="quantityTwo">314 <br /> TEMPLATES</div>
                 <div className="quantityThree">12+ <br /> QUERIES</div>   
             </motion.div>
          </div>
          <div className="picture">
              <motion.img className="pic" src={img} alt="" 
              animate={{ rotate: 360 }}
              transition={{ type:'spring', duration: 1 }}
              />
          </div>
      </div>
  );
};

export default Home;

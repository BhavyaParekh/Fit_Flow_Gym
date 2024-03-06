import React  from "react";
import FeatureBox from './FeatureBox';
import image1 from './images/1.svg'
import image2 from './images/2.svg'
import image3 from './images/3.svg'
import image4 from './images/4.svg'




function Feature() {
  return (
    < div id = 'features'>
        <h1>ROUTINE TO FOLLOW</h1>
        <div className="a-container">
            <FeatureBox image={image1} title="Do WeightLifting" />
            <FeatureBox image={image2} title="Your Muscle Mapping" />
            <FeatureBox image={image3} title=" Flex Your Muscle" />
            <FeatureBox image={image4} title="  Do Cardio Exercise" />
        </div>
        
    </div>
  )
}

export default Feature
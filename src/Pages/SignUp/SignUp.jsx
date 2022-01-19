import React, { useState, useEffect } from 'react';
import {
    HeaderButtons,
    NeonBtn,
    SandboxPage,
    ShowBtn,
    DiscoBtn
  } from './SignUpStyles.jsx';
import "./SignUp.scss"
function SignUp() {
const [neonBtnClicked, setNeonBtnClicked] = useState(false)
const [neonBtnVisible, setNeonBtnVisible] = useState(false)
const colors = ["yellow","pink","red","blue"]
const [colorIndex,setColorIndex] = useState(0);
const [click, setClick] = useState(false);
// const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const alternate = () => setNeonBtnVisible(!neonBtnVisible);


// const showButton = () => {
//     if (window.innerWidth <= 960) {
//     setButton(false);
//     } else {
//     setButton(true);
//     }
// };
const incrementColor = () => {
    const interval = setInterval(() => {
        colorIndex = colorIndex + 1
        if (colorIndex <= 5) {
            colorIndex = 0
        }
      }, 1000);
};


useEffect(() => {
    const interval = setInterval(() => {
    setColorIndex(prevIndex => prevIndex + 1)
    }, 1000);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, []);

// window.addEventListener('resize', showButton);
// $(document).ready(function() {
//     animateDiv();

// });
//
// Random Movement
// http://jsfiddle.net/ajgr6L2t/6/
//
// function makeNewPosition($container) {

//     // Get viewport dimensions (remove the dimension of the div)
//     $container = ($container || $(window))
//     var h = $container.height() - 50;
//     var w = $container.width() - 50;

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);

//     return [nh, nw];

// }

// function animateDiv() {
//     var $target = $('.a');
//     var newq = makeNewPosition($target.parent());
//     var oldq = $target.offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);

//     $('.a').animate({
//         top: newq[0],
//         left: newq[1]
//     }, speed, function() {
//         animateDiv();
//     });

// };

// function calcSpeed(prev, next) {

//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);

//     var greatest = x > y ? x : y;

//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest / speedModifier);

//     return speed;

// }
return (
    <>
    <HeaderButtons>
        <ShowBtn>
            Signing up is postponed until I add SQL and Backend Compatibility
        </ShowBtn>
    </HeaderButtons>
    <SandboxPage>
        {neonBtnVisible ? (
            <>
            <DiscoBtn NeonColor={colors[colorIndex % colors.length]} onClick={() => setNeonBtnVisible(!neonBtnVisible)}>
                <span>Disco Time!</span>
            </DiscoBtn>
            </>
        ) : (
        <NeonBtn NeonColor="yellow" onClick={() => setNeonBtnVisible(!neonBtnVisible)}>
            <span>Are you ready for some disco?</span>
        </NeonBtn>) }
    </SandboxPage>
    </>
);
}
export default SignUp;
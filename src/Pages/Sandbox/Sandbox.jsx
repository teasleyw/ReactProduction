import React from 'react'
import {
    NeonBtn,
    SandboxPage
  } from './SandboxStyles';
function Sandbox() {
// const [click, setClick] = useState(false);
// const [button, setButton] = useState(true);

// const handleClick = () => setClick(!click);
// const closeMobileMenu = () => setClick(false);

// const showButton = () => {
//     if (window.innerWidth <= 960) {
//     setButton(false);
//     } else {
//     setButton(true);
//     }
// };

// useEffect(() => {
//     showButton();
// }, []);

// window.addEventListener('resize', showButton);

return (
    <>
    <SandboxPage>
        <NeonBtn NeonColor="yellow">
            Neon
        </NeonBtn>
    </SandboxPage>
    </>
);
}
export default Sandbox;
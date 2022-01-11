import "./Welcome.css";
import {
  CheckCircle,
  DoNotDisturb
} from "@mui/icons-material";
export default function Testing() {
const initialValues = {
	Application_Title: ''
}
const SoftwareSDK = [
    {
        name: 'FUCK',
        TestStatus: 1 ,
    },
    {
        name: 'FICKKdK',
        TestStatus: 0,
    },
    {
        name: 'ZCU102 VXWorks',
        TestStatus: 0,
    },
    {
        name: 'Jetson TX2 SmartSat Linux',
        TestStatus: 1,
    },
    {
        name: 'RHEL 7',
        TestStatus: 1,
    },
];
const HardwareSDK = [
    {
        name: 'ZCU',
        TestStatus: 0 ,
    },
    {
        name: 'NVIDIA',
        TestStatus: 1,
    },
];
const Softwares = () => {
    const myMap = []

    for(const object in SoftwareSDK) {
        //console.log(SoftwareSDK[object])
        for(const value in SoftwareSDK[object]){
            console.log(SoftwareSDK[object][value])
            if(value === 'name'){
                var SoftwareName = SoftwareSDK[object][value]
            }
            else{
                var Status = SoftwareSDK[object][value]
            }
        }
        if ( Status === 0){
            myMap.push(<li key={SoftwareName}>
                    <h2 className="soft">{SoftwareName}
                        <DoNotDisturb className="StatusIcon">
                        </DoNotDisturb>
                    </h2>
                </li>
                )
        }
        else{
            myMap.push(<li key={SoftwareName}>
                    <h2 className="soft">{SoftwareName}
                        <CheckCircle className="StatusIcon">
                        </CheckCircle>
                    </h2>
                </li>
                )
        }
    }
    return myMap
}
const Hard = () => {
    const myMap = []

    for(const object in HardwareSDK) {
        //console.log(SoftwareSDK[object])

        for(const value in HardwareSDK[object]){

            if(value === 'name'){
                var HardwareName = HardwareSDK[object][value]
            }
            else{
                var Status = HardwareSDK[object][value]
            }
        }
        if ( Status === 0){
            myMap.push(<li key={HardwareName}>
                    <h2 className="soft">{HardwareName}
                        <DoNotDisturb className="StatusIcon">
                        </DoNotDisturb>
                    </h2>
                </li>
                )
        }
        else{
            myMap.push(<li key={HardwareName}>
                    <h2 className="soft">{HardwareName}
                        <CheckCircle className="StatusIcon">
                        </CheckCircle>
                    </h2>
                </li>
                )
        }
    }
    console.log(myMap)
    return myMap
}
const SoftwareList = () => (
    <ul className="SoftwareListCSS">
        <Softwares/>
    </ul>
);
const HardwareList = () => (
    <ul className="SoftwareListCSS">
        <Hard/>
    </ul>
);


  return (
    <div className="testing">
       <>
            <h2 className="Application">SmartSat AppName</h2>
			<div className="TestResults">
			    <div className="Software">
                    <h2 className="soft">Software
                    </h2>
                    <SoftwareList/>
                </div>
                <div className="Hardware">
                    <h2 className="soft">Hardware
                    </h2>
                    <HardwareList/>
                </div>
            </div>
	    </>

    </div>
  );
}
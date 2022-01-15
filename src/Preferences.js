import { useEffect, useState } from "react/cjs/react.development";

const Preferences = ({config, setConfig, setPref}) => {
    const [b1,setB1] = useState(config.b1);
    const [b2,setB2] = useState(config.b2);
    const [study,setStudy] = useState(config.study);
    const [i, setI] = useState(config.i);
    let width = {b1:`${(b1.toString().length)*16}px`,b2:`${b2.toString().length*16}px`,study:`${study.toString().length*16}px`}

    const handleSave = ()=>{
        let c = config;
        c.b1 = parseInt(b1);
        c.b2 = parseInt(b2);
        c.study = parseInt(study);
        c.i = parseInt(i);
        setConfig(c);
        console.log(config)
    }
    const handleCLose = ()=>{
        setPref(false);
    }
    return ( 
        <div className="pref">
            <div className="cont">
                <h1>Preferences</h1>
                <div className="exit">
                    <div className="b1 b" onClick={handleSave}>
                        Save
                    </div>
                    <div className="b2 b" onClick={handleCLose}>
                        Close
                    </div>
                </div>
            </div>
            <div className="conf">
                <div className="op">
                    <h2>Long Break</h2>
                    <h2 className="i"> <input type="text" value={b2} style={{width:`${width.b2}`}} onChange={(e) => {setB2(e.target.value)}}/> <span>Minutes</span> </h2>
                </div>
                
                <div className="op">
                    <h2>Short Break</h2>
                    <h2 className="i"><input type="text" value={b1} style={{width:`${width.b1}`}} onChange={(e) => {setB1(e.target.value)}}/> <span>Minutes</span> </h2>
                </div>
                
                <div className="op">
                    <h2>Study</h2>
                    <h2 className="i"><input type="text" value={study} style={{width:`${width.study}`}} onChange={(e) => {setStudy(e.target.value)}}/> <span>Minutes</span> </h2>
                </div>
                
            </div>
            <h1>Schedule</h1>
            <div className="schedule">
                <svg className="sc" preserveAspectRatio viewBox="0 0 262 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="198" width="225" height="87" fill="url(#paint0_linear_0_1)"/>
                    <path d="M31.42 231H33.64V250.08H45.4V252H31.42V231ZM54.8516 252.15C53.3316 252.15 51.9616 251.81 50.7416 251.13C49.5216 250.43 48.5616 249.47 47.8616 248.25C47.1616 247.03 46.8116 245.65 46.8116 244.11C46.8116 242.57 47.1616 241.19 47.8616 239.97C48.5616 238.75 49.5216 237.8 50.7416 237.12C51.9616 236.44 53.3316 236.1 54.8516 236.1C56.3716 236.1 57.7416 236.44 58.9616 237.12C60.1816 237.8 61.1316 238.75 61.8116 239.97C62.5116 241.19 62.8616 242.57 62.8616 244.11C62.8616 245.65 62.5116 247.03 61.8116 248.25C61.1316 249.47 60.1816 250.43 58.9616 251.13C57.7416 251.81 56.3716 252.15 54.8516 252.15ZM54.8516 250.26C55.9716 250.26 56.9716 250.01 57.8516 249.51C58.7516 248.99 59.4516 248.26 59.9516 247.32C60.4516 246.38 60.7016 245.31 60.7016 244.11C60.7016 242.91 60.4516 241.84 59.9516 240.9C59.4516 239.96 58.7516 239.24 57.8516 238.74C56.9716 238.22 55.9716 237.96 54.8516 237.96C53.7316 237.96 52.7216 238.22 51.8216 238.74C50.9416 239.24 50.2416 239.96 49.7216 240.9C49.2216 241.84 48.9716 242.91 48.9716 244.11C48.9716 245.31 49.2216 246.38 49.7216 247.32C50.2416 248.26 50.9416 248.99 51.8216 249.51C52.7216 250.01 53.7316 250.26 54.8516 250.26ZM75.2502 236.1C77.2302 236.1 78.8002 236.68 79.9602 237.84C81.1402 238.98 81.7302 240.65 81.7302 242.85V252H79.6002V243.06C79.6002 241.42 79.1902 240.17 78.3702 239.31C77.5502 238.45 76.3802 238.02 74.8602 238.02C73.1602 238.02 71.8102 238.53 70.8102 239.55C69.8302 240.55 69.3402 241.94 69.3402 243.72V252H67.2102V236.22H69.2502V239.13C69.8302 238.17 70.6302 237.43 71.6502 236.91C72.6902 236.37 73.8902 236.1 75.2502 236.1ZM102.182 236.22V250.08C102.182 252.76 101.522 254.74 100.202 256.02C98.9016 257.32 96.9316 257.97 94.2916 257.97C92.8316 257.97 91.4416 257.75 90.1216 257.31C88.8216 256.89 87.7616 256.3 86.9416 255.54L88.0216 253.92C88.7816 254.6 89.7016 255.13 90.7816 255.51C91.8816 255.89 93.0316 256.08 94.2316 256.08C96.2316 256.08 97.7016 255.61 98.6416 254.67C99.5816 253.75 100.052 252.31 100.052 250.35V248.34C99.3916 249.34 98.5216 250.1 97.4416 250.62C96.3816 251.14 95.2016 251.4 93.9016 251.4C92.4216 251.4 91.0716 251.08 89.8516 250.44C88.6516 249.78 87.7016 248.87 87.0016 247.71C86.3216 246.53 85.9816 245.2 85.9816 243.72C85.9816 242.24 86.3216 240.92 87.0016 239.76C87.7016 238.6 88.6516 237.7 89.8516 237.06C91.0516 236.42 92.4016 236.1 93.9016 236.1C95.2416 236.1 96.4516 236.37 97.5316 236.91C98.6116 237.45 99.4816 238.23 100.142 239.25V236.22H102.182ZM94.1116 249.51C95.2516 249.51 96.2816 249.27 97.2016 248.79C98.1216 248.29 98.8316 247.6 99.3316 246.72C99.8516 245.84 100.112 244.84 100.112 243.72C100.112 242.6 99.8516 241.61 99.3316 240.75C98.8316 239.87 98.1216 239.19 97.2016 238.71C96.3016 238.21 95.2716 237.96 94.1116 237.96C92.9716 237.96 91.9416 238.2 91.0216 238.68C90.1216 239.16 89.4116 239.84 88.8916 240.72C88.3916 241.6 88.1416 242.6 88.1416 243.72C88.1416 244.84 88.3916 245.84 88.8916 246.72C89.4116 247.6 90.1216 248.29 91.0216 248.79C91.9416 249.27 92.9716 249.51 94.1116 249.51ZM129.67 241.17C131.05 241.47 132.11 242.07 132.85 242.97C133.61 243.85 133.99 244.99 133.99 246.39C133.99 248.19 133.32 249.58 131.98 250.56C130.66 251.52 128.7 252 126.1 252H116.44V231H125.5C127.84 231 129.65 231.47 130.93 232.41C132.23 233.35 132.88 234.68 132.88 236.4C132.88 237.56 132.59 238.55 132.01 239.37C131.45 240.17 130.67 240.77 129.67 241.17ZM118.66 232.83V240.45H125.35C127.05 240.45 128.36 240.13 129.28 239.49C130.2 238.83 130.66 237.88 130.66 236.64C130.66 235.4 130.2 234.46 129.28 233.82C128.36 233.16 127.05 232.83 125.35 232.83H118.66ZM126.07 250.17C127.95 250.17 129.37 249.85 130.33 249.21C131.29 248.57 131.77 247.57 131.77 246.21C131.77 243.59 129.87 242.28 126.07 242.28H118.66V250.17H126.07ZM140.647 239.31C141.147 238.25 141.887 237.45 142.867 236.91C143.867 236.37 145.097 236.1 146.557 236.1V238.17L146.047 238.14C144.387 238.14 143.087 238.65 142.147 239.67C141.207 240.69 140.737 242.12 140.737 243.96V252H138.607V236.22H140.647V239.31ZM164.007 244.77H150.807C150.927 246.41 151.557 247.74 152.697 248.76C153.837 249.76 155.277 250.26 157.017 250.26C157.997 250.26 158.897 250.09 159.717 249.75C160.537 249.39 161.247 248.87 161.847 248.19L163.047 249.57C162.347 250.41 161.467 251.05 160.407 251.49C159.367 251.93 158.217 252.15 156.957 252.15C155.337 252.15 153.897 251.81 152.637 251.13C151.397 250.43 150.427 249.47 149.727 248.25C149.027 247.03 148.677 245.65 148.677 244.11C148.677 242.57 149.007 241.19 149.667 239.97C150.347 238.75 151.267 237.8 152.427 237.12C153.607 236.44 154.927 236.1 156.387 236.1C157.847 236.1 159.157 236.44 160.317 237.12C161.477 237.8 162.387 238.75 163.047 239.97C163.707 241.17 164.037 242.55 164.037 244.11L164.007 244.77ZM156.387 237.93C154.867 237.93 153.587 238.42 152.547 239.4C151.527 240.36 150.947 241.62 150.807 243.18H161.997C161.857 241.62 161.267 240.36 160.227 239.4C159.207 238.42 157.927 237.93 156.387 237.93ZM173.453 236.1C175.513 236.1 177.093 236.62 178.193 237.66C179.293 238.68 179.843 240.2 179.843 242.22V252H177.803V249.54C177.323 250.36 176.613 251 175.673 251.46C174.753 251.92 173.653 252.15 172.373 252.15C170.613 252.15 169.213 251.73 168.173 250.89C167.133 250.05 166.613 248.94 166.613 247.56C166.613 246.22 167.093 245.14 168.053 244.32C169.033 243.5 170.583 243.09 172.703 243.09H177.713V242.13C177.713 240.77 177.333 239.74 176.573 239.04C175.813 238.32 174.703 237.96 173.243 237.96C172.243 237.96 171.283 238.13 170.363 238.47C169.443 238.79 168.653 239.24 167.993 239.82L167.033 238.23C167.833 237.55 168.793 237.03 169.913 236.67C171.033 236.29 172.213 236.1 173.453 236.1ZM172.703 250.47C173.903 250.47 174.933 250.2 175.793 249.66C176.653 249.1 177.293 248.3 177.713 247.26V244.68H172.763C170.063 244.68 168.713 245.62 168.713 247.5C168.713 248.42 169.063 249.15 169.763 249.69C170.463 250.21 171.443 250.47 172.703 250.47ZM191.478 244.08L187.758 247.5V252H185.628V229.74H187.758V244.83L197.178 236.22H199.818L193.068 242.67L200.448 252H197.838L191.478 244.08Z" fill="white"/>
                    <rect y="99" width="225" height="87" fill="url(#paint1_linear_0_1)"/>
                    <path d="M35.21 153.18C33.65 153.18 32.15 152.93 30.71 152.43C29.29 151.93 28.19 151.27 27.41 150.45L28.28 148.74C29.04 149.5 30.05 150.12 31.31 150.6C32.57 151.06 33.87 151.29 35.21 151.29C37.09 151.29 38.5 150.95 39.44 150.27C40.38 149.57 40.85 148.67 40.85 147.57C40.85 146.73 40.59 146.06 40.07 145.56C39.57 145.06 38.95 144.68 38.21 144.42C37.47 144.14 36.44 143.84 35.12 143.52C33.54 143.12 32.28 142.74 31.34 142.38C30.4 142 29.59 141.43 28.91 140.67C28.25 139.91 27.92 138.88 27.92 137.58C27.92 136.52 28.2 135.56 28.76 134.7C29.32 133.82 30.18 133.12 31.34 132.6C32.5 132.08 33.94 131.82 35.66 131.82C36.86 131.82 38.03 131.99 39.17 132.33C40.33 132.65 41.33 133.1 42.17 133.68L41.42 135.45C40.54 134.87 39.6 134.44 38.6 134.16C37.6 133.86 36.62 133.71 35.66 133.71C33.82 133.71 32.43 134.07 31.49 134.79C30.57 135.49 30.11 136.4 30.11 137.52C30.11 138.36 30.36 139.04 30.86 139.56C31.38 140.06 32.02 140.45 32.78 140.73C33.56 140.99 34.6 141.28 35.9 141.6C37.44 141.98 38.68 142.36 39.62 142.74C40.58 143.1 41.39 143.66 42.05 144.42C42.71 145.16 43.04 146.17 43.04 147.45C43.04 148.51 42.75 149.48 42.17 150.36C41.61 151.22 40.74 151.91 39.56 152.43C38.38 152.93 36.93 153.18 35.21 153.18ZM55.467 137.1C57.447 137.1 59.017 137.68 60.177 138.84C61.357 139.98 61.947 141.65 61.947 143.85V153H59.817V144.06C59.817 142.42 59.407 141.17 58.587 140.31C57.767 139.45 56.597 139.02 55.077 139.02C53.377 139.02 52.027 139.53 51.027 140.55C50.047 141.55 49.557 142.94 49.557 144.72V153H47.427V130.74H49.557V139.98C50.137 139.06 50.937 138.35 51.957 137.85C52.977 137.35 54.147 137.1 55.467 137.1ZM74.2384 153.15C72.7184 153.15 71.3484 152.81 70.1284 152.13C68.9084 151.43 67.9484 150.47 67.2484 149.25C66.5484 148.03 66.1984 146.65 66.1984 145.11C66.1984 143.57 66.5484 142.19 67.2484 140.97C67.9484 139.75 68.9084 138.8 70.1284 138.12C71.3484 137.44 72.7184 137.1 74.2384 137.1C75.7584 137.1 77.1284 137.44 78.3484 138.12C79.5684 138.8 80.5184 139.75 81.1984 140.97C81.8984 142.19 82.2484 143.57 82.2484 145.11C82.2484 146.65 81.8984 148.03 81.1984 149.25C80.5184 150.47 79.5684 151.43 78.3484 152.13C77.1284 152.81 75.7584 153.15 74.2384 153.15ZM74.2384 151.26C75.3584 151.26 76.3584 151.01 77.2384 150.51C78.1384 149.99 78.8384 149.26 79.3384 148.32C79.8384 147.38 80.0884 146.31 80.0884 145.11C80.0884 143.91 79.8384 142.84 79.3384 141.9C78.8384 140.96 78.1384 140.24 77.2384 139.74C76.3584 139.22 75.3584 138.96 74.2384 138.96C73.1184 138.96 72.1084 139.22 71.2084 139.74C70.3284 140.24 69.6284 140.96 69.1084 141.9C68.6084 142.84 68.3584 143.91 68.3584 145.11C68.3584 146.31 68.6084 147.38 69.1084 148.32C69.6284 149.26 70.3284 149.99 71.2084 150.51C72.1084 151.01 73.1184 151.26 74.2384 151.26ZM88.637 140.31C89.137 139.25 89.877 138.45 90.857 137.91C91.857 137.37 93.087 137.1 94.547 137.1V139.17L94.037 139.14C92.377 139.14 91.077 139.65 90.137 140.67C89.197 141.69 88.727 143.12 88.727 144.96V153H86.597V137.22H88.637V140.31ZM107.387 152.04C106.987 152.4 106.487 152.68 105.887 152.88C105.307 153.06 104.697 153.15 104.057 153.15C102.577 153.15 101.437 152.75 100.637 151.95C99.8374 151.15 99.4374 150.02 99.4374 148.56V139.02H96.6174V137.22H99.4374V133.77H101.567V137.22H106.367V139.02H101.567V148.44C101.567 149.38 101.797 150.1 102.257 150.6C102.737 151.08 103.417 151.32 104.297 151.32C104.737 151.32 105.157 151.25 105.557 151.11C105.977 150.97 106.337 150.77 106.637 150.51L107.387 152.04ZM132.796 142.17C134.176 142.47 135.236 143.07 135.976 143.97C136.736 144.85 137.116 145.99 137.116 147.39C137.116 149.19 136.446 150.58 135.106 151.56C133.786 152.52 131.826 153 129.226 153H119.566V132H128.626C130.966 132 132.776 132.47 134.056 133.41C135.356 134.35 136.006 135.68 136.006 137.4C136.006 138.56 135.716 139.55 135.136 140.37C134.576 141.17 133.796 141.77 132.796 142.17ZM121.786 133.83V141.45H128.476C130.176 141.45 131.486 141.13 132.406 140.49C133.326 139.83 133.786 138.88 133.786 137.64C133.786 136.4 133.326 135.46 132.406 134.82C131.486 134.16 130.176 133.83 128.476 133.83H121.786ZM129.196 151.17C131.076 151.17 132.496 150.85 133.456 150.21C134.416 149.57 134.896 148.57 134.896 147.21C134.896 144.59 132.996 143.28 129.196 143.28H121.786V151.17H129.196ZM143.774 140.31C144.274 139.25 145.014 138.45 145.994 137.91C146.994 137.37 148.224 137.1 149.684 137.1V139.17L149.174 139.14C147.514 139.14 146.214 139.65 145.274 140.67C144.334 141.69 143.864 143.12 143.864 144.96V153H141.734V137.22H143.774V140.31ZM167.134 145.77H153.934C154.054 147.41 154.684 148.74 155.824 149.76C156.964 150.76 158.404 151.26 160.144 151.26C161.124 151.26 162.024 151.09 162.844 150.75C163.664 150.39 164.374 149.87 164.974 149.19L166.174 150.57C165.474 151.41 164.594 152.05 163.534 152.49C162.494 152.93 161.344 153.15 160.084 153.15C158.464 153.15 157.024 152.81 155.764 152.13C154.524 151.43 153.554 150.47 152.854 149.25C152.154 148.03 151.804 146.65 151.804 145.11C151.804 143.57 152.134 142.19 152.794 140.97C153.474 139.75 154.394 138.8 155.554 138.12C156.734 137.44 158.054 137.1 159.514 137.1C160.974 137.1 162.284 137.44 163.444 138.12C164.604 138.8 165.514 139.75 166.174 140.97C166.834 142.17 167.164 143.55 167.164 145.11L167.134 145.77ZM159.514 138.93C157.994 138.93 156.714 139.42 155.674 140.4C154.654 141.36 154.074 142.62 153.934 144.18H165.124C164.984 142.62 164.394 141.36 163.354 140.4C162.334 139.42 161.054 138.93 159.514 138.93ZM176.58 137.1C178.64 137.1 180.22 137.62 181.32 138.66C182.42 139.68 182.97 141.2 182.97 143.22V153H180.93V150.54C180.45 151.36 179.74 152 178.8 152.46C177.88 152.92 176.78 153.15 175.5 153.15C173.74 153.15 172.34 152.73 171.3 151.89C170.26 151.05 169.74 149.94 169.74 148.56C169.74 147.22 170.22 146.14 171.18 145.32C172.16 144.5 173.71 144.09 175.83 144.09H180.84V143.13C180.84 141.77 180.46 140.74 179.7 140.04C178.94 139.32 177.83 138.96 176.37 138.96C175.37 138.96 174.41 139.13 173.49 139.47C172.57 139.79 171.78 140.24 171.12 140.82L170.16 139.23C170.96 138.55 171.92 138.03 173.04 137.67C174.16 137.29 175.34 137.1 176.58 137.1ZM175.83 151.47C177.03 151.47 178.06 151.2 178.92 150.66C179.78 150.1 180.42 149.3 180.84 148.26V145.68H175.89C173.19 145.68 171.84 146.62 171.84 148.5C171.84 149.42 172.19 150.15 172.89 150.69C173.59 151.21 174.57 151.47 175.83 151.47ZM194.605 145.08L190.885 148.5V153H188.755V130.74H190.885V145.83L200.305 137.22H202.945L196.195 143.67L203.575 153H200.965L194.605 145.08Z" fill="white"/>
                    <rect width="225" height="87" fill="url(#paint2_linear_0_1)"/>
                    <path d="M77.21 54.18C75.65 54.18 74.15 53.93 72.71 53.43C71.29 52.93 70.19 52.27 69.41 51.45L70.28 49.74C71.04 50.5 72.05 51.12 73.31 51.6C74.57 52.06 75.87 52.29 77.21 52.29C79.09 52.29 80.5 51.95 81.44 51.27C82.38 50.57 82.85 49.67 82.85 48.57C82.85 47.73 82.59 47.06 82.07 46.56C81.57 46.06 80.95 45.68 80.21 45.42C79.47 45.14 78.44 44.84 77.12 44.52C75.54 44.12 74.28 43.74 73.34 43.38C72.4 43 71.59 42.43 70.91 41.67C70.25 40.91 69.92 39.88 69.92 38.58C69.92 37.52 70.2 36.56 70.76 35.7C71.32 34.82 72.18 34.12 73.34 33.6C74.5 33.08 75.94 32.82 77.66 32.82C78.86 32.82 80.03 32.99 81.17 33.33C82.33 33.65 83.33 34.1 84.17 34.68L83.42 36.45C82.54 35.87 81.6 35.44 80.6 35.16C79.6 34.86 78.62 34.71 77.66 34.71C75.82 34.71 74.43 35.07 73.49 35.79C72.57 36.49 72.11 37.4 72.11 38.52C72.11 39.36 72.36 40.04 72.86 40.56C73.38 41.06 74.02 41.45 74.78 41.73C75.56 41.99 76.6 42.28 77.9 42.6C79.44 42.98 80.68 43.36 81.62 43.74C82.58 44.1 83.39 44.66 84.05 45.42C84.71 46.16 85.04 47.17 85.04 48.45C85.04 49.51 84.75 50.48 84.17 51.36C83.61 52.22 82.74 52.91 81.56 53.43C80.38 53.93 78.93 54.18 77.21 54.18ZM97.737 53.04C97.337 53.4 96.837 53.68 96.237 53.88C95.657 54.06 95.047 54.15 94.407 54.15C92.927 54.15 91.787 53.75 90.987 52.95C90.187 52.15 89.787 51.02 89.787 49.56V40.02H86.967V38.22H89.787V34.77H91.917V38.22H96.717V40.02H91.917V49.44C91.917 50.38 92.147 51.1 92.607 51.6C93.087 52.08 93.767 52.32 94.647 52.32C95.087 52.32 95.507 52.25 95.907 52.11C96.327 51.97 96.687 51.77 96.987 51.51L97.737 53.04ZM115.835 38.22V54H113.795V51.12C113.235 52.08 112.465 52.83 111.485 53.37C110.505 53.89 109.385 54.15 108.125 54.15C106.065 54.15 104.435 53.58 103.235 52.44C102.055 51.28 101.465 49.59 101.465 47.37V38.22H103.595V47.16C103.595 48.82 104.005 50.08 104.825 50.94C105.645 51.8 106.815 52.23 108.335 52.23C109.995 52.23 111.305 51.73 112.265 50.73C113.225 49.71 113.705 48.3 113.705 46.5V38.22H115.835ZM136.2 31.74V54H134.16V50.88C133.52 51.94 132.67 52.75 131.61 53.31C130.57 53.87 129.39 54.15 128.07 54.15C126.59 54.15 125.25 53.81 124.05 53.13C122.85 52.45 121.91 51.5 121.23 50.28C120.55 49.06 120.21 47.67 120.21 46.11C120.21 44.55 120.55 43.16 121.23 41.94C121.91 40.72 122.85 39.78 124.05 39.12C125.25 38.44 126.59 38.1 128.07 38.1C129.35 38.1 130.5 38.37 131.52 38.91C132.56 39.43 133.41 40.2 134.07 41.22V31.74H136.2ZM128.25 52.26C129.35 52.26 130.34 52.01 131.22 51.51C132.12 50.99 132.82 50.26 133.32 49.32C133.84 48.38 134.1 47.31 134.1 46.11C134.1 44.91 133.84 43.84 133.32 42.9C132.82 41.96 132.12 41.24 131.22 40.74C130.34 40.22 129.35 39.96 128.25 39.96C127.13 39.96 126.12 40.22 125.22 40.74C124.34 41.24 123.64 41.96 123.12 42.9C122.62 43.84 122.37 44.91 122.37 46.11C122.37 47.31 122.62 48.38 123.12 49.32C123.64 50.26 124.34 50.99 125.22 51.51C126.12 52.01 127.13 52.26 128.25 52.26ZM155.392 38.22L147.502 55.89C146.862 57.37 146.122 58.42 145.282 59.04C144.442 59.66 143.432 59.97 142.252 59.97C141.492 59.97 140.782 59.85 140.122 59.61C139.462 59.37 138.892 59.01 138.412 58.53L139.402 56.94C140.202 57.74 141.162 58.14 142.282 58.14C143.002 58.14 143.612 57.94 144.112 57.54C144.632 57.14 145.112 56.46 145.552 55.5L146.242 53.97L139.192 38.22H141.412L147.352 51.63L153.292 38.22H155.392Z" fill="white"/>
                    <path d="M225 37H238.5C242.918 37 246.5 40.5817 246.5 45V80.5M225 153H238.5C242.918 153 246.5 149.418 246.5 145V109.5" stroke="#949494"/>
                    <rect x="232.5" y="80.5" width="29" height="29" rx="3.5" stroke="#949494"/>
                    {/* input field here */}
                    {/* <path d="M244.51 101L242.005 97.7L239.485 101H238.285L241.405 96.95L238.435 93.11H239.635L242.005 96.2L244.375 93.11H245.545L242.575 96.95L245.725 101H244.51ZM250.363 95C251.463 95.06 252.298 95.36 252.868 95.9C253.448 96.43 253.738 97.125 253.738 97.985C253.738 98.585 253.593 99.12 253.303 99.59C253.013 100.05 252.583 100.415 252.013 100.685C251.443 100.955 250.748 101.09 249.928 101.09C249.168 101.09 248.448 100.97 247.768 100.73C247.098 100.48 246.558 100.15 246.148 99.74L246.673 98.885C247.023 99.245 247.488 99.54 248.068 99.77C248.648 99.99 249.268 100.1 249.928 100.1C250.788 100.1 251.453 99.915 251.923 99.545C252.393 99.165 252.628 98.645 252.628 97.985C252.628 97.335 252.393 96.825 251.923 96.455C251.453 96.085 250.743 95.9 249.793 95.9H249.043V95.105L251.953 91.46H246.583V90.5H253.333V91.265L250.363 95Z" fill="white"/> */}
                    <foreignObject x="232.5" y="80.5" width="29" height="29">
                        <div className="thing-container" xmlns="http://www.w3.org/1999/xhtml">
                            <input className="thing" type="text" value={`x${i}`} onChange={(e)=>{setI(e.target.value.slice(-1));}}/>
                        </div>
                    </foreignObject>
                    <defs>
                    <linearGradient id="paint0_linear_0_1" x1="194.5" y1="278.5" x2="-4.40786e-06" y2="205.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#11998E"/>
                    <stop offset="1" stop-color="#38EF7D"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="208" y1="196" x2="-7" y2="99" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F37335"/>
                    <stop offset="1" stop-color="#FDC830"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_1" x1="244" y1="109" x2="12.5" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4A00E0"/>
                    <stop offset="1" stop-color="#8E2DE2"/>
                    </linearGradient>
                    </defs>
                </svg>

            </div>
            
        </div>
     );
}
 
export default Preferences;
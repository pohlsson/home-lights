import React, {useEffect, useState} from "react";
import Hue from "philips-hue";
import GridLoader from "react-spinners/GridLoader";
import * as lightApi from "./lightApi";

const LightConnector = () => {

    const hue = new Hue();
    const [bridge, setBridge] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [shouldAuthenticate, setShouldAuthenticate] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        lightApi.getBridge(hue).then(bridge => {
            setBridge(bridge);
        });
    }, []);

    const authenticate = () => {
        lightApi.authenticate(hue, bridge).then(username => {
            setUsername(username);
            setShouldAuthenticate(false);
        }).catch(error => setError(error));
    };

    return (
        <>
            {shouldAuthenticate ?
                <div>
                    <button onClick={authenticate}>NEXT</button>
                </div> :
                <div>
                    CONTENT
                </div>
            }
            {error &&
            <div>
                ERROR
            </div>
            }
        </>
    );
};

export default LightConnector;

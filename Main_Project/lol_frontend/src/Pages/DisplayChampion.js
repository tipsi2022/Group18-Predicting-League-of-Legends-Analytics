import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function DisplayChampion(props) {
    const { championName } = useParams();
    const [championData, setChampionData] = useState({});

    useEffect(() => {
        // console.log(championName);
        props.changeTitle(`${championName}`);
        axios
            .get(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <p>Champion {championName} and its Details are in log</p>
        </div>
    );
}

export default DisplayChampion;

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import {
    Avatar,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import axios from "axios";
import { useParams } from "react-router";



function PersonalDetails(props) { 
    const size = 5;
    const size2 = 3 
    const recoData = props.data.recommand;
    const displayReco = recoData.slice(0, size).map((x) => x[1] * 100);
    const recoLabel = recoData.slice(0, size).map((x) => x[0]);

    const usedData = props.data.used;
    const displayUsed = usedData.slice(0, size).map((x) => x[1] * 100);
    const usedLabel = recoData.slice(0, size).map((x) => x[0]);



    return (
        <>  

            


            
            <div style={{ width: "100%" }}>
                <ResponsiveContainer>
                    <Bar
                        data={{
                            labels: usedLabel,
                            datasets: [
                                {
                                    label: "Top Champions used by the Summoner (in %)",
                                    data: displayUsed,
                                    backgroundColor: [
                                        "rgba(255, 99, 132, 0.4)",
                                        "rgba(54, 162, 235, 0.4)",
                                        "rgba(255, 206, 86, 0.4)",
                                        "rgba(75, 192, 192, 0.4)",
                                        "rgba(153, 102, 255, 0.4)",
                                        "rgba(255, 159, 64, 0.4)",
                                    ],
                                    borderColor: [
                                        "rgba(255, 99, 132, 1)",
                                        "rgba(54, 162, 235, 1)",
                                        "rgba(255, 206, 86, 1)",
                                        "rgba(75, 192, 192, 1)",
                                        "rgba(153, 102, 255, 1)",
                                        "rgba(255, 159, 64, 1)",
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Current Champion Usage",
                                },
                            },
                        }}
                        // height={400}
                        // width={900}
                    />
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default PersonalDetails;
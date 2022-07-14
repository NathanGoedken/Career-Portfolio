import React, { useState } from 'react';
import styled from 'styled-components';

const SectionHeader = styled.h2`
    alignItems: center;
    display: flex;
    color: #ccd6f6;
    margin: 10px 0px 40px;
    width: 100%;
    fontSize: clamp(26px,5vw,var(--fz-heading));
    
    :after {
        display: block;
        position: relative;
        top: -5px;
        width: 300px;
        height: 1px;
        marginLeft: 20px;
    }
`;

const StyledAboutMeContainer = styled.div`
    margin-top: 50px;
`;

const StyledExperienceBodyContent = styled.div`
    margin-bottom: 50px;
`;

const StyledExperienceText = styled.p`
    color: #8893af;
    margin-bottom: -10px;
`;

const GameLogs = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerStats, setPlayerStats] = useState('');

    const espnUrl = 'http://api.espn.com/v1/sports/baseball/mlb/athletes/teams/2';
    const yahooUrl = 'https://fantasysports.yahooapis.com/fantasy/v2/player/';
    const testSportsDbUrl = 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck';

    const submit = async (playerName) => {
        if (playerName !== '') {
            const fetchPlayerStats = await fetch(testSportsDbUrl).then(response => response.json()).then(data => setPlayerStats(data));
            // console.log('playerStats', playerStats.player[0].strDescriptionEN);
        }
    };

    return (
        <StyledAboutMeContainer>
            <SectionHeader>{'Player Search'}</SectionHeader>
            <StyledExperienceBodyContent>
                <StyledExperienceText>{'Enter Player Name:'}</StyledExperienceText>
                <div>
                    <input
                        name="enterPlayerName"
                        type="text"
                        value={playerName}
                        onChange={(e) => {
                            setPlayerName(e.target.value);
                        }} 
                    />
                    <button onClick={() => submit(playerName)}>{'Search'}</button>
                </div>
            </StyledExperienceBodyContent>
            {playerStats.player.length > 0 &&
                <>
                    {`${playerStats.player[0].strDescriptionEN}`}
                </>}
        </StyledAboutMeContainer>
    );
};

export default GameLogs;
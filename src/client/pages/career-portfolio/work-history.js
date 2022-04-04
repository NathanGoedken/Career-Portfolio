import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    color: #ccd6f6; 
    font-size: clamp(40px, 8vw, 80px);
    margin-bottom: 0;
    margin-top: 0;
`;

const StyledWorkHistoryContainer = styled.div`
    margin-top: 50px;
`;
const StyledExperienceContainer = styled.div`
    display: 'flex';
    flex-direction: 'column';
    margin-bottom: 40px;
`;

const StyledExperienceBodyContent = styled.div`
    margin-bottom: 50px;
`;

const StyledExperienceText = styled.p`
    color: #8893af;
    margin-bottom: -10px;
`;

const StyledExperienceHeaderText = styled.h4`
    color: #50e169;
    margin-bottom: -10px;
    font-size: 30px;
    text-decoration: underline;
`;

const WorkHistory = () =>
    <StyledWorkHistoryContainer>
        <Header>{'Experience'}</Header>
        <StyledExperienceBodyContent>
            <StyledExperienceHeaderText>{'Hy-Vee, Inc.'}</StyledExperienceHeaderText>
            <div>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Software Engineer II'}</ StyledExperienceText>
                    <StyledExperienceText>{'Full-time'}</ StyledExperienceText>
                    <StyledExperienceText>{'Dec 2020 - Present (1 yr 4 months)'}</ StyledExperienceText>
                </StyledExperienceContainer>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Software Engineer II'}</ StyledExperienceText>
                    <StyledExperienceText>{'July 2019 - Dec 2020 (1 yr 6 months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'Des Moines, Iowa'}</ StyledExperienceText>
                </StyledExperienceContainer>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Data Engineer II'}</ StyledExperienceText>
                    <StyledExperienceText>{'Oct 2018 - Jul 2019 (10 months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'Des Moines, Iowa'}</ StyledExperienceText>
                </StyledExperienceContainer>
            </div>
        </StyledExperienceBodyContent>

        <StyledExperienceBodyContent>
            <StyledExperienceHeaderText>{'Casey\'s General Store'}</StyledExperienceHeaderText>
            <div>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Data Engineer'}</ StyledExperienceText>
                    <StyledExperienceText>{'July 2018 - Oct 2018 (4 Months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'Des Moines, Iowa'}</ StyledExperienceText>
                </StyledExperienceContainer>
            </div>
        </StyledExperienceBodyContent>

        <StyledExperienceBodyContent>
            <StyledExperienceHeaderText>{'Hy-Vee, Inc.'}</StyledExperienceHeaderText>
            <div>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Data Integration Developer'}</ StyledExperienceText>
                    <StyledExperienceText>{'Dec 2017 - July 2018 (8 months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'Des Moines, Iowa'}</ StyledExperienceText>
                </StyledExperienceContainer>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Database Administrator'}</ StyledExperienceText>
                    <StyledExperienceText>{'July 2016 - Dec 2017 (1 yr 6 months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'Des Moines, Iowa'}</ StyledExperienceText>
                </StyledExperienceContainer>
            </div>
        </StyledExperienceBodyContent>

        <StyledExperienceBodyContent>
            <StyledExperienceHeaderText>{'Crescent Electric Supply Company'}</StyledExperienceHeaderText>
            <div>
                <StyledExperienceContainer>
                    <StyledExperienceText>{'Data Analyst Intern'}</ StyledExperienceText>
                    <StyledExperienceText>{'May 2015 - Aug 2015 (4 Months)'}</ StyledExperienceText>
                    <StyledExperienceText>{'East Dubuque, Illinois '}</ StyledExperienceText>
                </StyledExperienceContainer>
            </div>
        </StyledExperienceBodyContent>
    </StyledWorkHistoryContainer>;

export default WorkHistory;

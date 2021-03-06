import React from 'react';
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

const AboutMe = () =>
    <StyledAboutMeContainer>
        <div>
            <SectionHeader>{'About Me'}</SectionHeader>
            <StyledExperienceBodyContent>
                <StyledExperienceText>{''}</StyledExperienceText>
            </StyledExperienceBodyContent>
        </div>

        <div>
            <SectionHeader>{'Projects'}</SectionHeader>
            <StyledExperienceBodyContent>
                <StyledExperienceText>{''}</StyledExperienceText>
            </StyledExperienceBodyContent>
        </div>

        <div>
            <SectionHeader>{'Hobbies'}</SectionHeader>
            <StyledExperienceBodyContent>
                <StyledExperienceText>{''}</StyledExperienceText>
            </StyledExperienceBodyContent>
        </div>
    </StyledAboutMeContainer>;

export default AboutMe;

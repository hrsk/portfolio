import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {SectionHeader} from "../../components/section_header/SectionHeader";
import {theme} from "../../styles/global/Theme";

export const Testimonials = () => {
    return (
        <TestimonialsWrapper>
            <SectionHeader description={'What my clients think about me'} title={'Testimonials'}/>
            <FlexWrapper>
                <Container>
                    <TestimonialsContainer>
                        <SingleReview>
                            <ReviewHeader>
                                <ClientDetails>
                                    <ClientImage>

                                    </ClientImage>
                                    <ClientInitials>
                                        <h6>
                                            John Santana
                                        </h6>
                                        <span>
                                            Entrepreneur
                                        </span>
                                    </ClientInitials>
                                    {/*<Icon>*/}

                                    {/*</Icon>*/}
                                </ClientDetails>
                            </ReviewHeader>
                            <p>
                                Emma did an excellent creative job, addressing our request quickly,
                                and also providing her own graphic insight, being open to feedback and changes
                                or edits when they arose. She worked with us the entire way. Highly recommended.
                            </p>
                        </SingleReview>

                        <SingleReview>
                            <ReviewHeader>
                                <ClientDetails>
                                    <ClientImage>

                                    </ClientImage>
                                    <ClientInitials>
                                        <h6>
                                            John Santana
                                        </h6>
                                        <span>
                                            Entrepreneur
                                        </span>
                                    </ClientInitials>
                                    {/*<Icon>*/}

                                    {/*</Icon>*/}
                                </ClientDetails>
                            </ReviewHeader>
                            <p>
                                Emma did an excellent creative job, addressing our request quickly,
                                and also providing her own graphic insight, being open to feedback and changes
                                or edits when they arose. She worked with us the entire way. Highly recommended.
                            </p>
                        </SingleReview>


                    </TestimonialsContainer>
                </Container>
            </FlexWrapper>
        </TestimonialsWrapper>
    );
};

const TestimonialsWrapper = styled.section`
`
const Icon = styled.i`
    color: ${theme.colors.primaryColor};
    display: inline-block;
    font-size: 50px;
    line-height: 100%;

`

const ClientDetails = styled.div`


`
const ClientImage = styled.img`


`


const SingleReview = styled.div`
    ${Icon}:before {
        content: "\\f35f";
        display: inline-block;
        font-family: "Ionicons";
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        text-rendering: auto;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
    }

    //border: 1px solid #313131;

    background-color: #161616;
    
    width: 100%;
    //border-left: 2px solid #009e66;
    padding: 32px 48px;
    position: relative;


`

const ClientInitials = styled.div`

`


const ReviewHeader = styled.div`

`


const TestimonialsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    margin-bottom: 120px;

`
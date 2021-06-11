import React from 'react';


import Container from '../container'
import Section, { ContentWrapper, BannerContent } from './beer.style';


const Beer= () => {
    return (
      <Section>
        <Container>
          <ContentWrapper>
            
              <BannerContent>
            <h1 className="text-6xl">Just Start — </h1>
                </BannerContent>
                </ContentWrapper>
                </Container>
  </Section>
    );
}
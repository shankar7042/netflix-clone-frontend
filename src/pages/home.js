import React from "react";
import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited fils, TV programmes and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere cancel at anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Container>
              <OptForm.Input placeholder="Email Address" />
              <OptForm.Button>Get Started</OptForm.Button>
            </OptForm.Container>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />;
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

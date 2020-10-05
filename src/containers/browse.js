import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Films</Header.TextLink>
            <Header.TextLink>Series</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker now</Header.FeatureCallOut>
          <Header.Text>
            Joker is a 2019 American psychological thriller film directed and
            produced by Todd Phillips, who co-wrote the screenplay with Scott
            Silver. The film, based on DC Comics characters, stars Joaquin
            Phoenix as the Joker and provides a possible origin story for the
            character. Set in 1981, buted by Warner Bros
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

import React from "react";

const TravelLifeText = () => {
  return (
    // H-full aka height:100% gives the desired design effect here
    <div className="max-w-screen-md mx-auto w-full h-full relative flex flex-col justify-center items-start gap-6 px-6 py-4">
      <p className="text-xl leading-normal text-primary_customGray-900 ">
        The New York Times, USA Today, and Travel & Leisure have said Tripscout
        is THE essential app for the modern traveler. Hundreds of travel
        bloggers and publications have featured Tripscout as the essential
        resource for the modern traveler and have given the app some very high
        endorsements.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  ">
        Before the rebranding of Tripscout to @hotel, my role involved enhancing
        the user experience of the Tripscout iOS app, designed to empower users
        to explore destinations like local insiders. With a focus on
        democratizing travel knowledge, Tripscout provided users with up-to-date
        travel guides and personalized recommendations, all for free. The app
        received widespread acclaim, hailed as a "Game-Changing Travel App" by
        purewow.com, and became a staple for travelers seeking inspiration and
        guidance.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  ">
        Building upon the success of the iOS app, we extended the seamless
        travel experience to the web platform. The Tripscout web platform
        retained the app's intuitive navigation and visually appealing design,
        offering users a comprehensive travel planning tool accessible across
        multiple devices. Key innovations included personalized bucket lists and
        custom articles based on users interests, providing valuable insights
        and inspiration for their journeys.
      </p>
    </div>
  );
};

export default TravelLifeText;
